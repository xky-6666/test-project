import type { CategoryFilter, FacilityCategory, Language } from "@/types/facility";

type LocalizedLabel = Record<Language, string>;

export const CATEGORY_LABELS: Record<FacilityCategory, LocalizedLabel> = {
  medical: {
    zh: "医疗服务",
    en: "Medical Care"
  },
  aed: {
    zh: "AED 急救",
    en: "AED First Aid"
  },
  mental_support: {
    zh: "心理支持",
    en: "Mental Support"
  },
  fitness: {
    zh: "运动健身",
    en: "Fitness"
  },
  nutrition: {
    zh: "饮食健康",
    en: "Healthy Eating"
  },
  relaxation: {
    zh: "休息放松",
    en: "Rest & Relaxation"
  },
  student_service: {
    zh: "学生服务",
    en: "Student Services"
  }
};

export const CATEGORY_FILTERS: Array<{
  value: CategoryFilter;
  label: LocalizedLabel;
}> = [
  {
    value: "all",
    label: {
      zh: "全部",
      en: "All"
    }
  },
  {
    value: "medical",
    label: CATEGORY_LABELS.medical
  },
  {
    value: "aed",
    label: CATEGORY_LABELS.aed
  },
  {
    value: "mental_support",
    label: CATEGORY_LABELS.mental_support
  },
  {
    value: "fitness",
    label: CATEGORY_LABELS.fitness
  },
  {
    value: "nutrition",
    label: CATEGORY_LABELS.nutrition
  },
  {
    value: "relaxation",
    label: CATEGORY_LABELS.relaxation
  },
  {
    value: "student_service",
    label: CATEGORY_LABELS.student_service
  }
];

export const UI_TEXT = {
  appName: {
    zh: "同济大学健康地图",
    en: "Tongji University Health Map"
  },
  intro: {
    zh: "搜索或筛选校园健康设施，点击地图标记查看完整信息。",
    en: "Search or filter campus health facilities, then click a marker for details."
  },
  searchPlaceholder: {
    zh: "搜索设施名称",
    en: "Search by facility name"
  },
  searchLabel: {
    zh: "搜索",
    en: "Search"
  },
  categoryLabel: {
    zh: "分类",
    en: "Category"
  },
  loadingMap: {
    zh: "地图加载中...",
    en: "Loading map..."
  },
  cardTitle: {
    zh: "设施信息",
    en: "Facility Details"
  },
  noFacilitySelected: {
    zh: "请选择地图上的一个健康设施。",
    en: "Select a health facility on the map."
  },
  scenes: {
    zh: "适用场景",
    en: "Use Cases"
  },
  recommendedTime: {
    zh: "推荐时间段",
    en: "Recommended Time"
  },
  phone: {
    zh: "联系电话",
    en: "Phone"
  },
  bilingualStatus: {
    zh: "语言支持",
    en: "Language Support"
  },
  category: {
    zh: "分类标签",
    en: "Category"
  },
  resultCount: {
    zh: "个设施",
    en: "facilities"
  },
  noResults: {
    zh: "没有找到匹配的设施。",
    en: "No matching facilities found."
  },
  coordinateDebug: {
    zh: "坐标调试",
    en: "Coordinate Debug"
  },
  clickMapToReadCoordinate: {
    zh: "点击地图上的真实设施位置，复制这里显示的坐标，再写回数据文件。",
    en: "Click the real facility position on the map, copy the coordinate shown here, then update the data file."
  },
  language: {
    zh: "语言",
    en: "Language"
  }
} satisfies Record<string, LocalizedLabel>;
