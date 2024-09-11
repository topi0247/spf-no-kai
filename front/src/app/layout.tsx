import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Footers, Headers } from "@/components/layouts";

export const metadata: Metadata = {
  title: "SPFの怪",
  description: "SPFはRUNTEQの特別なSNSです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="flex min-h-screen w-full flex-col ">
          <Headers />
          <main className="grow">{children}</main>
          <Footers />
        </div>
      </body>
    </html>
  );
}
