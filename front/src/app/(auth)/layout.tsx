import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col ">
      <header></header>
      <main className="grow">{children}</main>
      <footer></footer>
    </div>
  );
}
