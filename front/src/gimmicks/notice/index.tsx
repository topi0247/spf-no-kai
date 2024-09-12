"use client";

import { BsBell } from "rocketicons/bs";
import { useIsCurrentUser } from "@/recoil";

export default function Notice() {
  const isLogged = useIsCurrentUser();

  if (!isLogged) return;

  const handleClick = () => {
    // TODO: 通知ギミック
  };

  return (
    <button onClick={() => handleClick()}>
      <BsBell className="icon-black-lg" />
    </button>
  );
}
