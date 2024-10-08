import { ReactNode } from "react";
import { Footers, Headers } from "@/components/layouts";

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Headers />
      <main className="grow md:mx-24 md:my-4">
        <div className="w-full p-4">{children}</div>
      </main>
      <Footers />
    </div>
  );
}
