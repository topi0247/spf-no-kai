import { TProfile } from "@/type";

export type TUser = {
  id: number;
  name: string;
  image_url: string;
  role: string;
  profile: TProfile;
};
