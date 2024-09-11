"use client";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

export const Provider = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
