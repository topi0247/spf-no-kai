"use client";

import { useGet } from "../useGet";
import { Config } from "@/config";
import { useSetCurrentUser } from "@/recoil";
import { User } from "@/type";

export const useAuth = () => {
  const { data } = useGet("/current_user");
  const setCurrentUser = useSetCurrentUser();

  const login = () => {
    window.location.href = Config.API_BASE_URL + "/auth/github";
  };

  const setToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  const isLoggedIn = () => {
    if (!getToken() || !data) return false;
    if (data && data.data) {
      setCurrentUser(data.data as User);
    }
    return true;
  };

  return {
    login,
    setToken,
    getToken,
    removeToken,
    isLoggedIn,
  };
};
