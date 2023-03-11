"use client";
import { useState } from "react";
import useSWR from "swr";
export default function useUnsplash() {
  const [url, setUrl] = useState(
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
  );
  const fetcher = async function () {
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson.urls;
  };

  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
  };
}
