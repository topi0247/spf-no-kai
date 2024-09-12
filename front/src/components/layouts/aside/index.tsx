"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsGithub } from "rocketicons/bs";
import { CgShare } from "rocketicons/cg";
import { FaBell } from "rocketicons/fa6";
import { GrDown } from "rocketicons/gr";
import { MdAccountCircle, MdFavorite } from "rocketicons/md";
import { RiTwitterXLine } from "rocketicons/ri";
import { WiTime4 } from "rocketicons/wi";
import { Routes } from "@/config";
import { useCurrentUserValue } from "@/recoil";

export default function Aside({ myPage = false }: { myPage?: boolean }) {
  const currentUser = useCurrentUserValue();
  const [open, setOpen] = useState(false);

  if (!currentUser) return null;

  return (
    <>
      <section className="grid grid-cols-1 gap-2 rounded bg-white p-4">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center justify-center gap-4">
            <div className="flex aspect-square size-[70px]">
              <Image
                src={currentUser.image_url}
                width={400}
                height={400}
                alt="icon"
                className="size-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-sm text-gray-400">
                {currentUser.term || "52期"}
              </p>
              <p className="font-semibold">{currentUser.name}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 text-gray-500">
            {currentUser.times && (
              <Link
                href={currentUser.times}
                className="relative flex h-14 w-[50px] items-center justify-center"
              >
                <WiTime4 className="icon-gray-3xl mb-3" />
                <span className="absolute bottom-0 text-sm">times</span>
              </Link>
            )}
            {currentUser.github && (
              <Link
                href={currentUser.github}
                className="relative flex h-14 w-[50px] items-center justify-center"
              >
                <BsGithub className="icon-gray-xl mb-4" />
                <span className="absolute bottom-0 text-sm">GitHub</span>
              </Link>
            )}
            {currentUser.twitter && (
              <Link
                href={currentUser.twitter || ""}
                className="relative flex h-14 w-[50px] items-center justify-center"
              >
                <RiTwitterXLine className="icon-gray-xl mb-3" />
                <span className="absolute bottom-0 text-sm">X</span>
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center rounded bg-slate-100 px-4 py-6 text-xs text-gray-500">
          <div className="flex items-center justify-center gap-1 border-r border-gray-400 px-4">
            <span>フォロー</span>
            <button
              type="button"
              className="font-hiraginoKakuGothic text-sm font-600 text-black underline"
            >
              {currentUser.following || 0}
            </button>
          </div>
          <div className="flex items-center justify-center gap-1 px-4">
            <span>フォロワー</span>
            <button
              type="button"
              className="font-hiraginoKakuGothic text-sm font-600 text-black underline"
            >
              {currentUser.followers || 0}
            </button>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-2">
          <Link
            href={Routes.MyPortfolio}
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
        <Link
          href="#"
          className="flex w-full items-center justify-start gap-2 rounded border border-runteq-primary bg-white p-3"
        >
          <MdFavorite className="icon-orange-sm" />
          <span>いいね！した投稿</span>
        </Link>
        <Link
          href="#"
          className="flex w-full items-center justify-start gap-2 rounded border border-runteq-primary bg-white p-3"
        >
          <FaBell className="icon-orange-sm" />
          <span>通知一覧</span>
        </Link>
      </section>
      {myPage && (
        <section className="mt-4 rounded bg-white p-3">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between text-sm text-gray-500"
          >
            <span>自己紹介</span>
            <div className={`${open ? "rotate-180" : ""}`}>
              <GrDown className="icon-gray-sm" />
            </div>
          </button>
          <div className={`${open ? "block" : "hidden"} my-2`}>
            <h2 className="font-bold">{currentUser.motto}ああああああ</h2>
            <p className="text-sm">
              {currentUser.profile}ああああああああああああああ
            </p>
          </div>
          <Link
            href=""
            className="flex w-full justify-between rounded border border-runteq-primary p-2 text-runteq-primary"
          >
            自己紹介記事
            <div className="-rotate-90">
              <GrDown className="icon-orange-sm" />
            </div>
          </Link>
        </section>
      )}
    </>
  );
}
