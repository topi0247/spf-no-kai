"use client";

import useSWR from "swr";
import { Config } from "@/config";
import { getToken } from "@/util";

const fetcher = ({ url, token }: { url: string; token: string }) =>
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

export const useGet = (url: string) => {
  const { data } = useSWR(
    { url: `${Config.API_V1_URL}${url}`, token: getToken() },
    fetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404) return;
        if (retryCount >= 2) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
    },
  );

  return { data, isLoading: !data, isError: !data };
};
