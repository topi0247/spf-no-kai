import { ReactNode } from "react";
import { Footers } from "@/components/layouts";
import { AdminHeaders } from "@/components/layouts/admin";

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <AdminHeaders />
      <main className="grow md:mx-24 md:my-4">
        <div className="w-full p-4">{children}</div>
      </main>
      <Footers />
    </div>
  );
}
