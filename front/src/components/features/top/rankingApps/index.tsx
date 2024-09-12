"use client";

import { useState } from "react";
import { GrDown } from "rocketicons/gr";
import { MdLaptopMac } from "rocketicons/md";
import { AppTop } from "@/components/features/apps";
import { TAppTop } from "@/type";

const data = Array.from({ length: 10 }).map(
  (_, index) =>
    ({
      id: index,
      title: "AStoyer - あすとりや -",
      description:
        "TRPGerのための創作投稿アプリ！「うちの子」のイラストが投稿できるイラスト投稿サービスです。「うちの子」や「自陣」を投稿してTRPGイラストを共有しよう！",
      image:
        "https://github.com/topi0247/MyApp/blob/main/images/6.jpg?raw=true",
      likes: 28,
      user: {
        id: 1,
        name: "とぴ",
        image_url: "https://avatars.githubusercontent.com/u/23026318?s=96&v=4",
        term: "52期",
      },
    }) as TAppTop,
);

export default function RankingApps() {
  const [open, setOpen] = useState(false);
  // const { data, isLoading, isError } = useGet(fetchUrl);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="grid grid-cols-1">
      <h2 className="mb-2 flex items-center justify-start gap-1 font-semibold text-black">
        <MdLaptopMac className="icon-black" />
        <span>注目のアプリ</span>
      </h2>
      <hr />
      {data.slice(0, 3).map((app, index) => (
        <AppTop key={index} appTopData={app} ranking={index + 1} top3 />
      ))}
      <div className="flex items-center justify-center text-gray-400">
        <button
          type="button"
          onClick={() => toggleOpen()}
          className="flex items-center justify-center gap-6 px-4 py-6"
        >
          <span className="mt-1">4~10位を表示</span>
          <div className={`${open ? "rotate-180" : ""}`}>
            <GrDown className="icon-gray-sm" />
          </div>
        </button>
      </div>
      {open && (
        <>
          <div className="grid grid-cols-1 gap-4">
            {data.slice(3, 9).map((app, index) => (
              <AppTop key={index} appTopData={app} ranking={index + 4} />
            ))}
          </div>
          <div className="flex items-center justify-center text-gray-400">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-6 px-4 py-6"
            >
              閉じる
            </button>
          </div>
        </>
      )}
    </div>
  );
}
