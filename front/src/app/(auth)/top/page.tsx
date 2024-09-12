import { MdSearch } from "rocketicons/md";
import { TopList } from "@/components/features/top";
import { Aside } from "@/components/layouts";

export default function Top() {
  return (
    <div className="grid grid-cols-1 gap-6 md:mx-24 md:my-4">
      <article className="flex flex-col gap-2">
        <section className="flex w-full flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
          <div className="w-full text-start font-bold">
            <h1 className="md:text-xl">ソーシャルポートフォリオ</h1>
          </div>
          <div className="flex w-full items-center md:justify-end">
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
              className="w-full rounded-l border border-[#ccc] bg-white px-4 py-2 text-sm md:w-52"
            />
            <button className="rounded-r border bg-runteq-primary px-3 py-1.5">
              <MdSearch className="icon-white-lg" />
            </button>
          </div>
        </section>
      </article>

      <div className="md:flex md:gap-8">
        <div className="mb-4 md:order-1 md:w-1/4">
          <Aside />
        </div>
        <div className="md:w-3/4">
          <TopList />
        </div>
      </div>
    </div>
  );
}
