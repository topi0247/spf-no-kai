"use client";

import { useGet } from "../useGet";
import { Config } from "@/config";
import { useSetCurrentUser } from "@/recoil";
import { getToken } from "@/util";

export const useAuth = () => {
  const { data, isLoading } = useGet(getToken() ? "/current_user" : "");
  const setCurrentUser = useSetCurrentUser();

  const login = () => {
    window.location.href = Config.API_BASE_URL + "/auth/github";
  };

  const isLoggedIn = () => {
    if (isLoading) return false;
    if (!getToken() || !data) return false;
    if (data && data.data) {
      setCurrentUser(data.data);
      return true;
    }
    return false;
  };

  return {
    login,
    isLoggedIn,
  };
};
