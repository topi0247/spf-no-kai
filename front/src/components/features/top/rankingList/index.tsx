"use client";

import { RankingApps, RankingArticles } from "@/components/features/top";

export default function RankingList() {
  return (
    <div className="flex flex-col gap-4 rounded-b">
      <RankingApps />
      <RankingArticles />
    </div>
  );
}
