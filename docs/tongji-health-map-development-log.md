# Tongji Health Map Development Log

## 1. Project Overview

**Project Name:** Tongji Health Map / 同济大学健康地图

**Target Users:** Tongji University students, including both Chinese students and international students.

**Project Goal:**  
Build a campus health facility navigation website for Tongji University students. Users can view health-related facilities on an interactive map, search by name, filter by category, and read facility details in Chinese or English.

## 2. Tech Stack

- Next.js 14, App Router
- TypeScript
- Tailwind CSS
- React Leaflet
- Leaflet
- Clean Code style
- Component-based development
- Mobile-first responsive design

## 3. Current Directory Structure

```text
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── facility/
│   │   ├── CategoryFilter.tsx
│   │   ├── FacilityCard.tsx
│   │   └── FacilitySearch.tsx
│   ├── map/
│   │   ├── HealthMap.tsx
│   │   └── HealthMapLoader.tsx
│   ├── ui/
│   │   ├── FacilityPopup.tsx
│   │   └── LanguageToggle.tsx
│   └── TongjiHealthMapApp.tsx
├── data/
│   └── healthFacilities.json
├── hooks/
│   ├── useFacilities.ts
│   └── useLanguage.tsx
├── lib/
│   ├── facilityFilters.ts
│   ├── i18n.ts
│   └── mapConfig.ts
├── styles/
│   └── globals.css
└── types/
    └── facility.ts
```

## 4. Week 1 Features

The first development stage focused on the basic map experience.

Completed:

- Initialized a Next.js 14 project structure.
- Configured TypeScript.
- Configured Tailwind CSS.
- Installed and configured React Leaflet and Leaflet.
- Displayed a campus map centered around Tongji University Siping Road Campus.
- Added facility markers from a separate JSON data file.
- Implemented marker popup information.
- Added TypeScript types for facility data.
- Kept the initial component structure simple and readable.

## 5. Week 2 Features

The second development stage focused on usability and bilingual support.

Completed:

- Added a full facility information card.
- Added global language switching between Chinese and English.
- Added real-time search by Chinese or English facility name.
- Added category filtering.
- Improved mobile layout.
- Expanded facility data to 22 real campus health-related locations.
- Added phone support for facilities that provide contact numbers.

## 6. Facility Categories

Current categories:

```text
All / 全部
Medical Care / 医疗服务
AED First Aid / AED 急救
Mental Support / 心理支持
Fitness / 运动健身
Healthy Eating / 饮食健康
Rest & Relaxation / 休息放松
```

## 7. Data Model

Facility data is stored in:

```text
src/data/healthFacilities.json
```

Each facility follows this structure:

```json
{
  "id": 1,
  "name": {
    "zh": "校医院（赤峰路50号）",
    "en": "Campus Hospital (50 Chifeng Road)"
  },
  "category": "medical",
  "location": {
    "lat": 31.2842,
    "lng": 121.4985
  },
  "description": {
    "zh": "内科急诊24小时。",
    "en": "24-hour internal medicine emergency service."
  },
  "scenes": {
    "zh": ["基础门诊", "急诊处理", "健康咨询"],
    "en": ["Outpatient care", "Emergency treatment", "Health consultation"]
  },
  "recommended_time": {
    "zh": "工作日7:45-11:15/13:15-16:45；周末8:00-11:15/13:30-16:45",
    "en": "Weekdays 7:45-11:15/13:15-16:45; weekends 8:00-11:15/13:30-16:45"
  },
  "phone": "021-65983221"
}
```

## 8. State Management Design

The project uses lightweight React state and Context.

Main state is stored in:

```text
src/components/TongjiHealthMapApp.tsx
```

State includes:

- `searchTerm`: current search keyword
- `selectedCategory`: current category filter
- `selectedFacility`: facility selected from the map
- `language`: current UI language, managed through Context

Language state is managed by:

```text
src/hooks/useLanguage.tsx
```

This approach was chosen because the project is still small. It keeps the logic easy to understand and avoids unnecessary tools such as Redux.

## 9. Key Component Responsibilities

### `TongjiHealthMapApp.tsx`

Main client-side container. It connects search, category filtering, map display, selected facility state, and language switching.

### `HealthMap.tsx`

Responsible for rendering the Leaflet map, markers, tile layer, and marker click behavior.

### `HealthMapLoader.tsx`

Uses dynamic import with `ssr: false` to prevent Leaflet from running on the server side.

### `FacilityCard.tsx`

Displays the complete facility information after a marker is selected.

### `FacilityPopup.tsx`

Displays a compact popup when a marker is clicked.

### `FacilitySearch.tsx`

Provides real-time search input.

### `CategoryFilter.tsx`

Provides category filter buttons.

### `LanguageToggle.tsx`

Switches the website language between Chinese and English.

### `facilityFilters.ts`

Contains the pure filtering function for search and category logic.

### `i18n.ts`

Stores reusable bilingual UI labels and category names.

## 10. How To Run The Project

Open a terminal in the project root:

```bash
cd "C:\Users\谢可怡\Desktop\科研\朱瑞新课题组\TCGA-BRCA"
```

Install dependencies:

```bash
npm.cmd install
```

If the network is slow, use the npm mirror:

```bash
npm.cmd install --registry=https://registry.npmmirror.com
```

Start the development server:

```bash
npm.cmd run dev
```

Open:

```text
http://localhost:3000
```

If port 3000 is occupied:

```bash
npm.cmd run dev -- -p 3001
```

Then open:

```text
http://localhost:3001
```

## 11. How To Test The Current Features

Manual test checklist:

- Open the website and confirm the map is displayed.
- Confirm all facility markers are visible.
- Click a marker and check whether the popup appears.
- Check whether the full facility card appears after clicking a marker.
- Search for a Chinese facility name, such as `校医院`.
- Search for an English facility name, such as `Hospital`.
- Click each category filter and confirm the markers update.
- Click `All / 全部` and confirm all markers return.
- Switch between `中文` and `English`.
- Resize the browser window and check the mobile layout.

Type check:

```bash
npm.cmd exec tsc -- --noEmit
```

Production build check:

```bash
npm.cmd run build
```

## 12. Common Issues

### `localhost:3000` cannot be opened

The development server may not be running.

Run:

```bash
npm.cmd run dev
```

### PowerShell cannot run `npm`

If PowerShell shows an error about `npm.ps1`, use:

```bash
npm.cmd install
npm.cmd run dev
```

### Next.js reports `Cannot find module './819.js'`

This is usually caused by a broken `.next` development cache.

Stop the dev server with:

```bash
Ctrl + C
```

Then remove the cache:

```bash
Remove-Item -Recurse -Force .next
```

Restart:

```bash
npm.cmd run dev
```

### Leaflet marker icons do not appear

Leaflet default marker icons may not load automatically in Next.js. The project fixes this in:

```text
src/components/map/HealthMap.tsx
```

by importing Leaflet marker images directly.

### Map is blank

Possible reasons:

- The development server is not running.
- The browser cannot access OpenStreetMap tile resources.
- The map container has no height.

This project sets map height through Tailwind classes in `HealthMap.tsx`.

## 13. Future Improvements

Recommended next-stage features:

- Add a facility list panel beside or below the map.
- Add different marker colors for different categories.
- Add user current location.
- Add walking route guidance.
- Add opening status based on current time.
- Add favorite facilities.
- Add detailed facility pages.
- Add admin-friendly data editing.
- Add accessibility improvements for keyboard users and screen readers.
- Deploy the project to Vercel or another hosting platform.

## 14. Current Status

The project currently supports:

- Interactive campus health map
- 22 health-related campus facility markers
- Facility popups
- Full facility cards
- Chinese and English language switching
- Search
- Category filtering
- Mobile-friendly layout

The project is ready for further iteration and user testing.
