import { TUser } from "@/type";

export type TArticleTop = {
  id: number;
  title: string;
  description: string;
  likes: number;
  image: string;
  user: TUser;
  createdAt: string;
};
