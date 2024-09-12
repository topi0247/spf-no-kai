"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { BsGithub } from "rocketicons/bs";
import { Config, Routes } from "@/config";
import { useSetCurrentUser } from "@/recoil";
import { getToken, setToken } from "@/util";

export default function GithubButton() {
  const params = useSearchParams();
  const setCurrentUser = useSetCurrentUser();
  const router = useRouter();

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
    if (params.has("token")) {
      const token = params.get("token") || "";
      setToken(token);
    }
    if (getToken()) {
      fetchData();
      const currentPath = window.location.pathname;
      if (currentPath === Routes.Login) {
        router.push(Routes.Top);
      } else if (currentPath === Routes.AdminLogin) {
        router.push(Routes.AdminTop);
      }
    }
  }, [params, fetchData, router]);

  const handleClick = () => {
    window.location.href = Config.API_BASE_URL + "/auth/github";
  };

  return (
    <button
      onClick={() => handleClick()}
      className="flex items-center justify-center gap-2 rounded bg-black p-4 font-semibold text-white"
    >
      <BsGithub className="icon-white-lg" />
      <span className="pt-1">GitHubでログイン</span>
    </button>
  );
}
