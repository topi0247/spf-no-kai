import Link from "next/link";

export default function Footers() {
  return (
    <div className="w-full bg-[#959ea7] text-white">
      <footer className="flex flex-col gap-4 p-4">
        <div>
          <h2 className="text-2xl font-semibold md:text-xl">
            RUNTEQ(ランテック)
          </h2>
        </div>
        <div>
          <p className="text-center text-sm underline md:text-start">
            <Link href="">お問い合わせ</Link>
          </p>
        </div>
        <p className="text-center text-sm md:text-start">© 2024 topi_log</p>
      </footer>
    </div>
  );
}
