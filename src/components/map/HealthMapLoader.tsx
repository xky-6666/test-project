"use client";

import dynamic from "next/dynamic";

import { UI_TEXT } from "@/lib/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import type { HealthMapProps } from "@/components/map/HealthMap";

function LoadingMap() {
  const { language } = useLanguage();

  return (
    <div className="flex h-[70vh] min-h-[460px] items-center justify-center rounded-lg border border-emerald-100 bg-white text-sm text-slate-500 shadow-sm">
      {UI_TEXT.loadingMap[language]}
    </div>
  );
}

export const HealthMapLoader = dynamic<HealthMapProps>(
  () => import("@/components/map/HealthMap").then((module) => module.HealthMap),
  {
    ssr: false,
    loading: () => <LoadingMap />
  }
);
