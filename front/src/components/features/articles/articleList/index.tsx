"use client";

import { ArticleTop } from "@/components/features/articles";
import { TArticleTop } from "@/type";

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
    }) as TArticleTop,
);

export default function ArticleList({ url }: { url: string }) {
  console.log(url);

  return (
    <div className="md:grid md:grid-cols-2 md:gap-4">
      {data.map((app, index) => (
        <div key={index} className="md:border-b">
          <ArticleTop articleTopData={app} index={index} />
        </div>
      ))}
    </div>
  );
}
