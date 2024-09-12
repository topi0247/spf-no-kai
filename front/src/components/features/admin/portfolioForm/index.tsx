"use client";

import { FormEvent } from "react";

export default function PortfolioForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col">
        <label>サムネイル画像</label>
        <input type="file" className="rounded border px-4 py-2" />
      </div>

      <div className="flex w-full items-center justify-start gap-4">
        <div className="has_select">
          <select>
            <option>アプリ</option>
            <option>記事</option>
          </select>
        </div>
        <div className="flex items-center justify-center gap-2">
          <label>タイトル</label>
          <input
            type="text"
            placeholder="タイトル"
            className="rounded border px-4 py-2"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label>説明</label>
        <textarea placeholder="説明" className="rounded border p-4" rows={5} />
      </div>

      <div className="flex items-center justify-start gap-2">
        <label>URL</label>
        <input type="url" placeholder="URL" className="rounded border p-2" />
      </div>

      <div className="flex items-center justify-start gap-2">
        <div className="has_select">
          <select>
            <option>ユーザー名</option>
            <option>ユーザー名</option>
            <option>ユーザー名</option>
          </select>
        </div>
        <label>公開日</label>
        <input type="date" className="rounded border p-2" />
      </div>

      <div className="flex items-center justify-start gap-2">
        <label>いいね数</label>
        <input type="number" className="rounded border p-2" />
      </div>

      <div className="flex items-center justify-center">
        <button className="rounded bg-runteq-secondary px-4 py-2 text-white">
          作成
        </button>
      </div>
    </form>
  );
}
