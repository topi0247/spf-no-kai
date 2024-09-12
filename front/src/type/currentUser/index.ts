import { TProfile } from "@/type";

export type TCurrentUser = {
  id: number;
  name: string;
  image_url: string;
  role: string;
  profile: TProfile;
};
