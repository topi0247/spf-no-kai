"use client";

import { BsBell } from "rocketicons/bs";

export default function Notice() {
  const auth = false;

  if (!auth) return;

  const handleClick = () => {
    // TODO: 通知ギミック
  };

  return (
    <button onClick={() => handleClick()}>
      <BsBell className="icon-black-lg" />
    </button>
  );
}
