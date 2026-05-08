import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        campus: {
          green: "#167a4a",
          light: "#eef8f2",
          dark: "#0f4f32"
        }
      }
    }
  },
  plugins: []
};

export default config;
