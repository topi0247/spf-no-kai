"use client";

import { useCallback, useEffect } from "react";
import { TiArrowSortedDown } from "rocketicons/ti";
import { Config } from "@/config";
import { useIsCurrentUser, useSetCurrentUser } from "@/recoil";
import { getToken, setToken } from "@/util";

export default function HeaderNav() {
  const isLogged = useIsCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const fetchData = useCallback(async () => {
    if (!getToken()) return;

    const res = await fetch(`${Config.API_V1_URL}/current_user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });

    if (!res.ok) {
      setToken("");
      return;
    }

    const data = await res.json();
    setCurrentUser(data);
  }, [setCurrentUser]);

  useEffect(() => {
    if (isLogged) return;
    fetchData();
  }, [isLogged, fetchData]);

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
