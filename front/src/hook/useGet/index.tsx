"use client";

import useSWR from "swr";
import { Config } from "@/config";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGet = (url: string) => {
  const { data } = useSWR(`${Config.API_V1_URL}${url}`, fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (retryCount >= 2) return;
      setTimeout(() => revalidate({ retryCount }), 5000);
    },
  });

  return { data, isLoading: !data, isError: !data };
};
