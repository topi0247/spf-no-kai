import Image from "next/image";
import { FaCrown } from "rocketicons/fa";
import { MdFavorite } from "rocketicons/md";
import { TArticleTop } from "@/type";

export default function ArticleTop({
  articleTopData,
  top3 = false,
  ranking = 0,
  index = -1,
}: {
  articleTopData: TArticleTop;
  top3?: boolean;
  ranking?: number;
  index?: number;
}) {
  const crownColor =
    ranking === 1
      ? "icon-yellow-300"
      : ranking === 2
        ? "icon-gray-300"
        : "icon-orange-700";

  return top3 ? (
    <section
      className={`mt-4 grid grid-cols-1 gap-2 ${ranking < 3 ? "border-b" : ""} pb-2`}
    >
      {ranking > 0 && (
        <div className="flex items-center justify-start gap-1 font-hiraginoKakuGothic text-base font-semibold">
          <FaCrown className={crownColor} />
          <span>{ranking}</span>
        </div>
      )}
      <div className="aspect-video">
        <Image
          src={articleTopData.image}
          width={1280}
          height={620}
          alt="app"
          className="size-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-base font-bold">{articleTopData.title}</h3>
      </div>
      <div className="flex justify-between">
        <button className="flex items-center justify-start gap-1 text-sm text-gray-500">
          <span>{articleTopData.user.term}</span>
          <div className="aspect-square h-[20px]">
            <Image
              src={articleTopData.user.image_url}
              width={40}
              height={40}
              alt="icon"
              className="size-full rounded-full object-cover"
            />
          </div>
          <span>{articleTopData.user.name}</span>
        </button>
        <div>
          <MdFavorite className="icon-orange-sm" />
          <span>{articleTopData.likes}</span>
        </div>
      </div>
    </section>
  ) : (
    <section
      className={`${(0 < ranking && ranking < 9) || index < 9 ? "border-b" : ""} mb-2 pb-2`}
    >
      {ranking === 0 && (
        <div className="flex w-full items-center justify-end">
          <span className="w-full text-end text-[10px] text-gray-500">
            登録日:{articleTopData.createdAt}
          </span>
        </div>
      )}
      <div className="flex items-start justify-between gap-4">
        <div className="grid w-2/3 grid-cols-1 gap-2">
          <h3>
            {ranking > 0 && (
              <span className="mr-2 font-hiraginoKakuGothic">{ranking}</span>
            )}
            <span className="font-semibold">{articleTopData.title}</span>
          </h3>
          {index >= 0 && (
            <p className="line-clamp-2 text-xs">{articleTopData.description}</p>
          )}
        </div>
        <div className="flex aspect-video h-14 w-1/3 items-start justify-center">
          <Image
            src={articleTopData.image}
            width={1280}
            height={620}
            alt="app"
            className="size-full object-cover"
          />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button className="flex items-center justify-start gap-1 text-sm text-gray-500">
          <span>{articleTopData.user.term}</span>
          <div className="aspect-square h-[20px]">
            <Image
              src={articleTopData.user.image_url}
              width={40}
              height={40}
              alt="icon"
              className="size-full rounded-full object-cover"
            />
          </div>
          <span>{articleTopData.user.name}</span>
        </button>
        <div>
          <MdFavorite className="icon-orange-sm" />
          <span>{articleTopData.likes}</span>
        </div>
      </div>
    </section>
  );
}
