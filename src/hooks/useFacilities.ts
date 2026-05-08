import facilities from "@/data/healthFacilities.json";
import type { HealthFacility } from "@/types/facility";

export function useFacilities(): HealthFacility[] {
  return facilities as HealthFacility[];
}
