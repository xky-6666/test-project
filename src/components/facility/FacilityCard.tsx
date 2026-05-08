"use client";

import { CATEGORY_LABELS, UI_TEXT } from "@/lib/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import type { HealthFacility } from "@/types/facility";

type FacilityCardProps = {
  facility?: HealthFacility;
};

export function FacilityCard({ facility }: FacilityCardProps) {
  const { language } = useLanguage();

  if (!facility) {
    return (
      <aside className="rounded-lg border border-emerald-100 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-campus-dark">
          {UI_TEXT.cardTitle[language]}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          {UI_TEXT.noFacilitySelected[language]}
        </p>
      </aside>
    );
  }

  const categoryLabel = CATEGORY_LABELS[facility.category];

  return (
    <aside className="rounded-lg border border-emerald-100 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-campus-green">
            {UI_TEXT.cardTitle[language]}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-950">
            {facility.name.zh}
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            {facility.name.en}
          </p>
        </div>

        <span className="w-fit rounded-full bg-campus-light px-3 py-1 text-xs font-medium text-campus-dark">
          {UI_TEXT.category[language]}: {categoryLabel.zh} / {categoryLabel.en}
        </span>

        <div className="space-y-2 text-sm leading-6 text-slate-700">
          <p>{facility.description.zh}</p>
          <p className="text-slate-500">{facility.description.en}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            {UI_TEXT.scenes[language]}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {facility.scenes.zh.map((scene, index) => (
              <span
                key={scene}
                className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-campus-dark"
              >
                {scene} / {facility.scenes.en[index]}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-campus-light p-3 text-sm leading-6">
          <h3 className="font-semibold text-slate-900">
            {UI_TEXT.recommendedTime[language]}
          </h3>
          <p className="mt-1 text-slate-700">{facility.recommended_time.zh}</p>
          <p className="text-slate-500">{facility.recommended_time.en}</p>
        </div>

        {facility.bilingual_status ? (
          <div className="rounded-lg border border-emerald-100 p-3 text-sm leading-6">
            <h3 className="font-semibold text-slate-900">
              {UI_TEXT.bilingualStatus[language]}
            </h3>
            <p className="mt-1 text-slate-700">
              {facility.bilingual_status.zh} / {facility.bilingual_status.en}
            </p>
          </div>
        ) : null}

        {facility.phone ? (
          <div className="rounded-lg border border-emerald-100 p-3 text-sm leading-6">
            <h3 className="font-semibold text-slate-900">
              {UI_TEXT.phone[language]}
            </h3>
            <a
              href={`tel:${facility.phone}`}
              className="mt-1 inline-block font-medium text-campus-green hover:text-campus-dark"
            >
              {facility.phone}
            </a>
          </div>
        ) : null}
      </div>
    </aside>
  );
}
