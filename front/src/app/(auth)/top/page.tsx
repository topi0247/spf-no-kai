import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "rocketicons/bs";
import { CgShare } from "rocketicons/cg";
import { FaBell } from "rocketicons/fa6";
import { MdAccountCircle, MdFavorite, MdSearch } from "rocketicons/md";
import { RiTwitterXLine } from "rocketicons/ri";
import { WiTime4 } from "rocketicons/wi";
import { TopList } from "@/components/features/top";

export default function Top() {
  return (
    <div className="grid grid-cols-1 gap-6">
      <article className="flex flex-col gap-2">
        <section className="flex w-full flex-col items-center justify-center gap-2">
          <div className="w-full text-start font-bold">
            <h1>ソーシャルポートフォリオ</h1>
          </div>
          <div className="flex w-full items-center">
            <div className="has_select">
              <select>
                <option>アプリ</option>
                <option>記事</option>
                <option>受講生</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="アプリを探す"
              className="w-full rounded-l border border-[#ccc] bg-white px-4 py-2 text-sm"
            />
            <button className="rounded-r border bg-runteq-primary px-3 py-1.5">
              <MdSearch className="icon-white-lg" />
            </button>
          </div>
        </section>
        <section className="grid grid-cols-1 gap-2 rounded bg-white p-4">
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center justify-center gap-4">
              <div className="flex aspect-square size-[70px]">
                <Image
                  src="https://avatars.githubusercontent.com/u/23026318?s=96&v=4"
                  width={400}
                  height={400}
                  alt="icon"
                  className="size-full rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-sm text-gray-400">52期</p>
                <p className="font-semibold">とぴ</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-gray-500">
              <Link
                href="#"
                className="relative flex h-14 w-[50px] items-center justify-center"
              >
                <WiTime4 className="icon-gray-3xl mb-3" />
                <span className="absolute bottom-0 text-sm">times</span>
              </Link>
              <Link
                href="#"
                className="relative flex h-14 w-[50px] items-center justify-center"
              >
                <BsGithub className="icon-gray-xl mb-4" />
                <span className="absolute bottom-0 text-sm">GitHub</span>
              </Link>
              <Link
                href="#"
                className="relative flex h-14 w-[50px] items-center justify-center"
              >
                <RiTwitterXLine className="icon-gray-xl mb-3" />
                <span className="absolute bottom-0 text-sm">X</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center rounded bg-slate-100 px-4 py-6 text-xs text-gray-500">
            <div className="flex items-center justify-center gap-1 border-r border-gray-400 px-4">
              <span>フォロー</span>
              <Link
                href="#"
                className="font-hiraginoKakuGothic text-sm font-600 text-black underline"
              >
                116
              </Link>
            </div>
            <div className="flex items-center justify-center gap-1 px-4">
              <span>フォロワー</span>
              <Link
                href="#"
                className="font-hiraginoKakuGothic text-sm font-600 text-black underline"
              >
                106
              </Link>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-2">
            <Link
              href="#"
              className="flex items-center justify-center gap-1 rounded border border-black bg-black py-1.5 text-center font-bold text-white"
            >
              <MdAccountCircle className="icon-white-lg" />
              <span className="pt-1">マイポートフォリオ</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center gap-1 rounded border border-black bg-white py-1.5 text-center font-bold text-black"
            >
              <CgShare className="icon-black-lg" />
              <span className="pt-1">シェア</span>
            </Link>
          </div>
        </section>
        <section className="grid w-full grid-cols-1 gap-2 text-sm font-semibold text-runteq-primary">
          <button className="flex w-full items-center justify-start gap-2 rounded border border-runteq-primary bg-white p-3">
            <MdFavorite className="icon-orange-sm" />
            <span>いいね！した投稿</span>
          </button>
          <button className="flex w-full items-center justify-start gap-2 rounded border border-runteq-primary bg-white p-3">
            <FaBell className="icon-orange-sm" />
            <span>通知一覧</span>
          </button>
        </section>
      </article>

      <TopList />
    </div>
  );
}
