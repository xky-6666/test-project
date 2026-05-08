"use client";

import { UI_TEXT } from "@/lib/i18n";
import { useLanguage } from "@/hooks/useLanguage";

type FacilitySearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function FacilitySearch({ value, onChange }: FacilitySearchProps) {
  const { language } = useLanguage();

  return (
    <label className="block w-full">
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {UI_TEXT.searchLabel[language]}
      </span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={UI_TEXT.searchPlaceholder[language]}
        className="w-full rounded-lg border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-campus-green focus:ring-2 focus:ring-emerald-100"
      />
    </label>
  );
}
