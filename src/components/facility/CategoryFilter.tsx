"use client";

import { CATEGORY_FILTERS, UI_TEXT } from "@/lib/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import type { CategoryFilter as CategoryFilterValue } from "@/types/facility";

type CategoryFilterProps = {
  value: CategoryFilterValue;
  onChange: (value: CategoryFilterValue) => void;
};

export function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  const { language } = useLanguage();

  return (
    <div>
      <p className="mb-2 text-sm font-medium text-slate-700">
        {UI_TEXT.categoryLabel[language]}
      </p>
      <div className="flex flex-wrap gap-2">
        {CATEGORY_FILTERS.map((filter) => {
          const isActive = value === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => onChange(filter.value)}
              className={`rounded-full border px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-campus-green bg-campus-green text-white"
                  : "border-emerald-100 bg-white text-slate-600 hover:border-campus-green hover:text-campus-dark"
              }`}
            >
              {filter.label[language]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
