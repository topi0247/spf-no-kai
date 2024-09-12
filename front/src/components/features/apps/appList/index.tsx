"use client";

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
        profile: {
          term: "52期",
        },
      },
      createdAt: "2021/10/01",
    }) as TAppTop,
);

export default function AppList({ url }: { url: string }) {
  console.log(url);
  // const {data, isLoading, isError} = useGet(url);

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error</div>;

  return (
    <div className="md:grid md:grid-cols-2 md:gap-4">
      {data.map((app, index) => (
        <div key={index} className="md:border-b">
          <AppTop appTopData={app} index={index} />
        </div>
      ))}
    </div>
  );
}
