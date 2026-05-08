"use client";

import { useEffect, useMemo, useState } from "react";

import { CategoryFilter } from "@/components/facility/CategoryFilter";
import { FacilityCard } from "@/components/facility/FacilityCard";
import { FacilitySearch } from "@/components/facility/FacilitySearch";
import { HealthMapLoader } from "@/components/map/HealthMapLoader";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useFacilities } from "@/hooks/useFacilities";
import { useLanguage } from "@/hooks/useLanguage";
import { filterFacilities } from "@/lib/facilityFilters";
import { UI_TEXT } from "@/lib/i18n";
import type {
  CategoryFilter as CategoryFilterValue,
  HealthFacility
} from "@/types/facility";

export function TongjiHealthMapApp() {
  const facilities = useFacilities();
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilterValue>("all");
  const [selectedFacility, setSelectedFacility] =
    useState<HealthFacility | undefined>();
  const [clickedPosition, setClickedPosition] = useState<
    { lat: number; lng: number } | undefined
  >();

  const filteredFacilities = useMemo(
    () =>
      filterFacilities({
        facilities,
        searchTerm,
        category: selectedCategory
      }),
    [facilities, searchTerm, selectedCategory]
  );

  useEffect(() => {
    if (!selectedFacility) {
      return;
    }

    const selectedFacilityIsVisible = filteredFacilities.some(
      (facility) => facility.id === selectedFacility.id
    );

    if (!selectedFacilityIsVisible) {
      setSelectedFacility(undefined);
    }
  }, [filteredFacilities, selectedFacility]);

  return (
    <main className="min-h-screen bg-campus-light">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:px-8">
        <header className="rounded-lg bg-white px-5 py-5 shadow-sm ring-1 ring-emerald-100">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-campus-green">
                Tongji Health Map
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">
                {UI_TEXT.appName[language]}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                {UI_TEXT.intro[language]}
              </p>
            </div>

            <LanguageToggle />
          </div>
        </header>

        <section className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-emerald-100">
          <div className="grid gap-4 lg:grid-cols-[minmax(260px,1fr)_2fr] lg:items-end">
            <FacilitySearch value={searchTerm} onChange={setSearchTerm} />
            <CategoryFilter
              value={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>

          <p className="mt-3 text-sm text-slate-500">
            {filteredFacilities.length} {UI_TEXT.resultCount[language]}
          </p>

          <div className="mt-4 rounded-lg bg-campus-light p-3 text-sm text-slate-600">
            <p className="font-medium text-campus-dark">
              {UI_TEXT.coordinateDebug[language]}
            </p>
            <p className="mt-1 leading-6">
              {UI_TEXT.clickMapToReadCoordinate[language]}
            </p>
            {clickedPosition ? (
              <code className="mt-2 block rounded-md bg-white px-3 py-2 text-xs text-slate-800">
                {`"lat": ${clickedPosition.lat}, "lng": ${clickedPosition.lng}`}
              </code>
            ) : null}
          </div>
        </section>

        {filteredFacilities.length === 0 ? (
          <div className="rounded-lg border border-emerald-100 bg-white p-6 text-sm text-slate-500 shadow-sm">
            {UI_TEXT.noResults[language]}
          </div>
        ) : (
          <section className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
            <HealthMapLoader
              facilities={filteredFacilities}
              onFacilitySelect={setSelectedFacility}
              onMapClick={setClickedPosition}
            />
            <FacilityCard facility={selectedFacility} />
          </section>
        )}
      </section>
    </main>
  );
}
