import type { Metadata } from "next";

import { LanguageProvider } from "@/hooks/useLanguage";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "同济大学健康地图 | Tongji Health Map",
  description:
    "同济大学校园健康设施导航 | Campus health facility navigation for Tongji University"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
