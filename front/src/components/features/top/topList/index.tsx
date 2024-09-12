"use client";

import { useState } from "react";
import { AppList } from "@/components/features/apps";
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
    <div className="mb-6 grid w-full grid-cols-2 items-center justify-center text-center">
      <button
        type="button"
        onClick={() => onClick(Toggles.app)}
        className={`${activeToggle === Toggles.app ? "bg-black text-white" : "bg-white text-black"} rounded-l border border-black py-1 font-semibold`}
      >
        アプリ
      </button>
      <button
        type="button"
        onClick={() => onClick(Toggles.article)}
        className={`${activeToggle === Toggles.article ? "bg-black text-white" : "bg-white text-black"} rounded-r border border-black py-1 font-semibold`}
      >
        記事
      </button>
    </div>
  );
}

export default function TopList() {
  const [activeTab, setActiveTab] = useState(Tabs.new);
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
          </>
        )}
      </div>
    </article>
  );
}
