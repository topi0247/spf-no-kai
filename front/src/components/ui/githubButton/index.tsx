"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { BsGithub } from "rocketicons/bs";
import { Config, Routes } from "@/config";
import { useAuth } from "@/hook";
import { useCurrentUserValue } from "@/recoil";

export default function GithubButton() {
  const params = useSearchParams();
  const { setToken, getToken, isLoggedIn } = useAuth();
  const currentUser = useCurrentUserValue();
  const router = useRouter();

  const handleClick = () => {
    window.location.href = Config.API_BASE_URL + "/auth/github";
  };

  useEffect(() => {
    if (params.has("token")) {
      const token = params.get("token") || "";
      setToken(token);
      if (isLoggedIn()) {
        router.push(Routes.Top);
      }
    }
    if (!currentUser && getToken()) {
      if (isLoggedIn()) {
        router.push(Routes.Top);
      }
    }
  }, [params, router, setToken, isLoggedIn, currentUser, getToken]);

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
