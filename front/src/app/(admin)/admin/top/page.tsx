import { PortfolioForm, Users } from "@/components/features/admin";

export default function Top() {
  return (
    <div className="m-auto flex flex-col items-center justify-center">
      <h1 className="mb-2 text-xl font-semibold">管理者画面</h1>
      <div className="grid grid-cols-2 gap-8">
        <section className="rounded bg-white p-4">
          <h2 className="text-xl">投稿</h2>
          <PortfolioForm />
        </section>
        <section className="rounded bg-white p-4">
          <h2 className="text-xl">登録ユーザー一覧</h2>
          <Users />
        </section>
      </div>
    </div>
  );
}
