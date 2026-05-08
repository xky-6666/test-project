import type { HealthFacility } from "@/types/facility";
import { CATEGORY_LABELS, UI_TEXT } from "@/lib/i18n";
import { useLanguage } from "@/hooks/useLanguage";

type FacilityPopupProps = {
  facility: HealthFacility;
};

export function FacilityPopup({ facility }: FacilityPopupProps) {
  const { language } = useLanguage();
  const categoryLabel = CATEGORY_LABELS[facility.category];

  return (
    <div className="w-64 space-y-3 text-sm text-slate-700">
      <div>
        <h2 className="text-base font-semibold text-campus-dark">
          {facility.name.zh}
        </h2>
        <p className="text-xs text-slate-500">{facility.name.en}</p>
      </div>

      <p>{facility.description[language]}</p>

      <span className="inline-flex rounded-full bg-campus-light px-2 py-1 text-xs font-medium text-campus-dark">
        {categoryLabel[language]}
      </span>

      <div>
        <p className="font-medium text-slate-900">
          {UI_TEXT.scenes[language]}
        </p>
        <div className="mt-1 flex flex-wrap gap-1">
          {facility.scenes[language].map((scene) => (
            <span
              key={scene}
              className="rounded-full bg-campus-light px-2 py-1 text-xs leading-4 text-campus-dark"
            >
              {scene}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <p>
          <span className="font-medium text-slate-900">
            {UI_TEXT.recommendedTime[language]}:
          </span>
          {facility.recommended_time[language]}
        </p>
      </div>

      {facility.phone ? (
        <p>
          <span className="font-medium text-slate-900">
            {UI_TEXT.phone[language]}:
          </span>
          {facility.phone}
        </p>
      ) : null}

      {facility.bilingual_status ? (
        <p>
          <span className="font-medium text-slate-900">
            {UI_TEXT.bilingualStatus[language]}:
          </span>
          {facility.bilingual_status[language]}
        </p>
      ) : null}
    </div>
  );
}
