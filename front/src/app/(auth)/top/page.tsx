import { MdSearch } from "rocketicons/md";
import { TopList } from "@/components/features/top";
import { Aside } from "@/components/layouts";

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
        <Aside />
      </article>

      <TopList />
    </div>
  );
}
