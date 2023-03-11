"use client";
import useUnsplash from "./useUnsplash";

export default function Home() {
  const { data, error, isLoading } = useUnsplash();

  return (
    <main>
      <h1 className="text-3xl text-red-700">Hello world!</h1>
      {JSON.stringify(data)}
    </main>
  );
}
