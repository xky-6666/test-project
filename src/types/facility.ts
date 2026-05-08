export type HealthFacility = {
  id: number;
  name: LocalizedText;
  category: FacilityCategory;
  location: GeoLocation;
  description: LocalizedText;
  scenes: LocalizedList;
  recommended_time: LocalizedText;
  phone?: string;
  bilingual_status?: LocalizedText;
};

export type FacilityCategory =
  | "medical"
  | "aed"
  | "mental_support"
  | "fitness"
  | "nutrition"
  | "relaxation"
  | "student_service";

export type CategoryFilter = FacilityCategory | "all";

export type Language = "zh" | "en";

export type GeoLocation = {
  lat: number;
  lng: number;
};

export type LocalizedText = {
  zh: string;
  en: string;
};

export type LocalizedList = {
  zh: string[];
  en: string[];
};
