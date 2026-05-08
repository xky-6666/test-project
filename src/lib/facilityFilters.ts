import type {
  CategoryFilter,
  HealthFacility
} from "@/types/facility";

type FilterFacilitiesParams = {
  facilities: HealthFacility[];
  searchTerm: string;
  category: CategoryFilter;
};

export function filterFacilities({
  facilities,
  searchTerm,
  category
}: FilterFacilitiesParams): HealthFacility[] {
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  return facilities.filter((facility) => {
    const matchesCategory =
      category === "all" || facility.category === category;

    const searchableName = `${facility.name.zh} ${facility.name.en}`.toLowerCase();
    const matchesSearch =
      normalizedSearchTerm.length === 0 ||
      searchableName.includes(normalizedSearchTerm);

    return matchesCategory && matchesSearch;
  });
}
