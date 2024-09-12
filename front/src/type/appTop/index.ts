import { TUser } from "@/type";

export type TAppTop = {
  id: number;
  title: string;
  description: string;
  likes: number;
  image: string;
  user: TUser;
  createdAt: string;
};
