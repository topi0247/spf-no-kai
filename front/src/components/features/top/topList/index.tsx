"use client";

import { useState } from "react";
import { AppList } from "@/components/features/apps";
import { ArticleList } from "@/components/features/articles";
import { RankingList, TopTabs } from "@/components/features/top";

const Tabs = {
  ranking: "ランキング",
  new: "新着",
  following: "フォロー中",
};

const Toggles = {
  app: "アプリ",
  article: "記事",
};

function Toggle({
  activeToggle,
  onClick,
}: {
  activeToggle: string;
  onClick: (toggle: string) => void;
}) {
  return (
    <div className="md:mb-4 md:flex md:items-start md:justify-between">
      <div className="mb-6 grid w-full grid-cols-2 items-center justify-center text-center md:w-auto">
        <button
          type="button"
          onClick={() => onClick(Toggles.app)}
          className={`${activeToggle === Toggles.app ? "bg-black text-white" : "bg-white text-black"} rounded-l border border-black px-8 py-1.5 font-semibold`}
        >
          アプリ
        </button>
        <button
          type="button"
          onClick={() => onClick(Toggles.article)}
          className={`${activeToggle === Toggles.article ? "bg-black text-white" : "bg-white text-black"} rounded-r border border-black px-8 py-1.5 font-semibold`}
        >
          記事
        </button>
      </div>
      <p className="hidden text-base text-gray-400 md:block">
        ※新着…ソーシャルポートフォリオに追加された順
      </p>
    </div>
  );
}

export default function TopList() {
  const [activeTab, setActiveTab] = useState(Tabs.ranking);
  const [activeToggle, setActiveToggle] = useState(Toggles.app);
  const [fetchUrl, setFetchUrl] = useState("");

  const handleClick = (tab: string) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    switch (tab) {
      case Tabs.new:
        setFetchUrl("");
        break;
      case Tabs.following:
        setFetchUrl("");
        break;
      default:
        break;
    }
  };

  const handleToggle = (toggle: string) => {
    if (toggle === activeToggle) return;
    setActiveToggle(toggle);
    if (toggle === Toggles.app) {
      setFetchUrl("");
    } else {
      setFetchUrl("");
    }
  };

  return (
    <article>
      <div>
        <TopTabs onClick={handleClick} activeTab={activeTab} />
      </div>
      <div className="bg-white px-[18px] pb-10 pt-[18px]">
        {activeTab === Tabs.ranking && (
          <>
            <RankingList />
            <div className="hidden">
              <AppList url="" />
              <AppList url="" />
            </div>
          </>
        )}
        {activeTab !== Tabs.ranking && (
          <>
            <Toggle activeToggle={activeToggle} onClick={handleToggle} />
            {activeToggle === Toggles.app && <AppList url={fetchUrl} />}
            {activeToggle === Toggles.article && <ArticleList url={fetchUrl} />}
          </>
        )}
      </div>
    </article>
  );
}
