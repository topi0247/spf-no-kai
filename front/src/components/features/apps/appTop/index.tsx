import Image from "next/image";
import { FaCrown } from "rocketicons/fa";
import { MdFavorite } from "rocketicons/md";
import { TAppTop } from "@/type";

export default function AppTop({
  appTopData,
  top3 = false,
  ranking = 0,
  index = -1,
}: {
  appTopData: TAppTop;
  top3?: boolean;
  ranking?: number;
  index?: number;
}) {
  const crownColor =
    ranking === 1
      ? "icon-yellow-500 md:icon-yellow-500-lg"
      : ranking === 2
        ? "icon-gray-300 md:icon-gray-300-lg"
        : "icon-orange-700 md:icon-orange-700-lg";

  return top3 ? (
    <section
      className={`mt-4 grid grid-cols-1 gap-2 ${ranking < 3 ? "border-b" : ""} pb-2 md:border-none`}
    >
      {ranking > 0 && (
        <div className="flex items-center justify-start gap-1 font-hiraginoKakuGothic text-base font-semibold">
          <FaCrown className={crownColor} />
          <span>{ranking}</span>
        </div>
      )}
      <div className="aspect-video">
        <Image
          src={appTopData.image}
          width={1280}
          height={620}
          alt="app"
          className="size-full object-cover"
        />
      </div>
      <div>
        <h3 className="line-clamp-1 text-base font-bold">{appTopData.title}</h3>
        <p className="line-clamp-3 text-sm md:line-clamp-2">
          {appTopData.description}
        </p>
      </div>
      <div className="flex justify-between">
        <button className="flex items-center justify-start gap-1 text-sm text-gray-500">
          <span>{appTopData.user.profile.term}</span>
          <div className="aspect-square h-[20px]">
            <Image
              src={appTopData.user.image_url}
              width={40}
              height={40}
              alt="icon"
              className="size-full rounded-full object-cover"
            />
          </div>
          <span>{appTopData.user.name}</span>
        </button>
        <div>
          <MdFavorite className="icon-orange-sm" />
          <span>{appTopData.likes}</span>
        </div>
      </div>
    </section>
  ) : (
    <section
      className={`${(0 < ranking && ranking < 9) || index < 9 ? "border-b" : ""} mb-2 pb-2 md:border-none`}
    >
      {ranking === 0 && (
        <div className="flex w-full items-center justify-end">
          <span className="w-full text-end text-[10px] text-gray-500">
            登録日:{appTopData.createdAt}
          </span>
        </div>
      )}
      <div className="flex items-start justify-between gap-4">
        <div className="grid w-2/3 grid-cols-1 gap-2 ">
          <h3 className="line-clamp-1">
            {ranking > 0 && (
              <span className="mr-2 font-hiraginoKakuGothic">{ranking}</span>
            )}
            <span className="font-semibold">{appTopData.title}</span>
          </h3>
          <p className={`line-clamp-2 text-xs ${ranking > 0 ? "md:ml-4" : ""}`}>
            {appTopData.description}
          </p>
        </div>
        <div className="flex aspect-video h-14 w-1/3 items-start justify-center">
          <Image
            src={appTopData.image}
            width={1280}
            height={620}
            alt="app"
            className="size-full object-cover"
          />
        </div>
      </div>
      <div
        className={`mt-4 flex items-center justify-between ${ranking > 0 ? "md:ml-4" : ""}`}
      >
        <button className="flex items-center justify-start gap-1 text-sm text-gray-500">
          <span>{appTopData.user.profile.term}</span>
          <div className="aspect-square h-[20px]">
            <Image
              src={appTopData.user.image_url}
              width={40}
              height={40}
              alt="icon"
              className="size-full rounded-full object-cover"
            />
          </div>
          <span>{appTopData.user.name}</span>
        </button>
        <div>
          <MdFavorite className="icon-orange-sm" />
          <span>{appTopData.likes}</span>
        </div>
      </div>
    </section>
  );
}
