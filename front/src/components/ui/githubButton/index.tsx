"use client";

import { BsGithub } from "rocketicons/bs";

export default function GithubButton() {
  const handleClick = () => {
    // TODO: GitHubログイン処理
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
