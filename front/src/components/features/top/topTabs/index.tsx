"use client";

const Tabs = {
  ranking: "ランキング",
  new: "新着",
  following: "フォロー中",
};

export default function TopTabs({
  onClick,
  activeTab,
}: {
  onClick: (tab: string) => void;
  activeTab: string;
}) {
  return (
    <ul className="grid grid-cols-3 items-center justify-center gap-2 text-center md:grid-cols-4">
      <li>
        <button
          type="button"
          onClick={() => onClick(Tabs.ranking)}
          className={`w-full rounded-t border-t-4  py-2 ${activeTab === Tabs.ranking ? "border-runteq-primary bg-white" : "border-gray-200 bg-gray-200 text-gray-500"}`}
        >
          ランキング
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => onClick(Tabs.new)}
          className={`w-full rounded-t border-t-4  py-2 ${activeTab === Tabs.new ? "border-runteq-primary bg-white" : "border-gray-200 bg-gray-200 text-gray-500"}`}
        >
          新着
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => onClick(Tabs.following)}
          className={`w-full rounded-t border-t-4  py-2 ${activeTab === Tabs.following ? "border-runteq-primary bg-white" : "border-gray-200 bg-gray-200 text-gray-500"}`}
        >
          フォロー中
        </button>
      </li>
    </ul>
  );
}
