import { atom, useRecoilValue, useSetRecoilState } from "recoil";

type TCurrentUser = {
  id: number;
  name: string;
  image_url: string;
  term: string;
  following: number;
  followers: number;
  times: string;
  github: string;
  twitter: string;
  profile: string;
  motto: string;
};

const currentUserAtom = atom<TCurrentUser | null>({
  key: "currentUser",
  default: null,
});

export const useSetCurrentUser = () => {
  const setCurrentUser = useSetRecoilState(currentUserAtom);
  return (user: TCurrentUser) => setCurrentUser(user);
};

export const useCurrentUserValue = () => {
  const currentUser = useRecoilValue(currentUserAtom);
  return currentUser;
};

export const useClearCurrentUser = () => {
  const setCurrentUser = useSetRecoilState(currentUserAtom);
  return () => setCurrentUser(null);
};

export const useIsCurrentUser = () => {
  const currentUser = useRecoilValue(currentUserAtom);
  return currentUser !== null;
};
