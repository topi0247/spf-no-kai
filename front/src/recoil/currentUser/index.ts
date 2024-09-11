import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { User } from "@/type";

const currentUserAtom = atom<User | null>({
  key: "currentUser",
  default: null,
});

export const useSetCurrentUser = () => {
  const setCurrentUser = useSetRecoilState(currentUserAtom);
  return (user: User) => setCurrentUser(user);
};

export const useCurrentUserValue = () => {
  const currentUser = useRecoilValue(currentUserAtom);
  return currentUser;
};

export const useClearCurrentUser = () => {
  const setCurrentUser = useSetRecoilState(currentUserAtom);
  return () => setCurrentUser(null);
};
