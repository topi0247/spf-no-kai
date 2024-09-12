"use client";

import { useState } from "react";
import { RankingList, TopTabs } from "@/components/features/top";

const Tabs = {
  ranking: "ランキング",
  new: "新着",
  following: "フォロー中",
};

export default function TopList() {
  const [activeTab, setActiveTab] = useState(Tabs.ranking);

  const handleClick = (tab: string) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
  };

  return (
    <article>
      <div>
        <TopTabs onClick={handleClick} activeTab={activeTab} />
      </div>
      <div className="bg-white px-[18px] pb-10 pt-[18px]">
        <RankingList />
      </div>
    </article>
  );
}
