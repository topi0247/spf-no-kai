import { Suspense } from "react";
import { GithubButton } from "@/components/ui";

export default function AdminPage() {
  return (
    <article className="flex min-h-60 w-full items-center justify-center">
      <section className="m-8 flex w-full max-w-96 items-center justify-center rounded bg-white px-4 py-8 text-center">
        <Suspense fallback={<></>}>
          <GithubButton />
        </Suspense>
      </section>
    </article>
  );
}
