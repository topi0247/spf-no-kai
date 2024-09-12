import Link from "next/link";
import { Routes } from "@/config";

export default function AdminHeaders() {
  return (
    <div className="w-full bg-white p-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-8">
          <h1 className="text-2xl font-semibold text-runteq-primary">
            SPF Strange admin
          </h1>
          <div className="hidden md:block">
            <nav>
              <ul className="flex items-center justify-center gap-6">
                <li>
                  <Link href={Routes.Top}>アプリページ</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
