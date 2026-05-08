"use client";

import { UI_TEXT } from "@/lib/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import type { Language } from "@/types/facility";

const LANGUAGE_OPTIONS: Array<{ value: Language; label: string }> = [
  {
    value: "zh",
    label: "中文"
  },
  {
    value: "en",
    label: "English"
  }
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-medium text-slate-500">
        {UI_TEXT.language[language]}
      </span>
      <div className="flex rounded-full border border-emerald-100 bg-white p-1">
        {LANGUAGE_OPTIONS.map((option) => {
          const isActive = language === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setLanguage(option.value)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                isActive
                  ? "bg-campus-green text-white"
                  : "text-slate-600 hover:bg-campus-light"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
