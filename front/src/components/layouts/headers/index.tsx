import HeaderNav from "../headerNav";
import * as Gimmicks from "@/gimmicks";

export default function Headers() {
  return (
    <div className="w-full bg-white p-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-8">
          <h1 className="text-2xl font-semibold text-runteq-primary">RUNTEQ</h1>
          <div className="hidden md:block">
            <HeaderNav />
          </div>
        </div>
        <div>
          <Gimmicks.Notice />
        </div>
      </header>
    </div>
  );
}
