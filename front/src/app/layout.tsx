import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Provider } from "@/provider";

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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
