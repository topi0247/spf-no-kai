"use client";

import { TiArrowSortedDown } from "rocketicons/ti";
import { useIsCurrentUser } from "@/recoil";

export default function HeaderNav() {
  const isLogged = useIsCurrentUser();

  if (!isLogged) return;

  return (
    <nav>
      <ul className="flex items-center justify-center gap-6">
        <li className="flex items-center justify-center">
          カリキュラム
          <TiArrowSortedDown className="icon-black-sm" />
        </li>
        <li>就活ボード</li>
        <li>質問</li>
        <li>イベント</li>
        <li>求人</li>
        <li className="flex items-center justify-center">
          その他
          <TiArrowSortedDown className="icon-black-sm" />
        </li>
      </ul>
    </nav>
  );
}
