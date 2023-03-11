import useUnsplash from "./hooks/useUnsplash";

export default async function Home() {
  const unsplashUrl =
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=black";
  const [url, author] = await useUnsplash(unsplashUrl);

  return (
    <main
      className="h-screen bg-cover bg-center flex flex-col justify-between text-slate-300"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="flex flex-row justify-between w-screen">
        <p>Crypto</p>
        <p>Weather</p>
      </div>

      <h1 className="text-center text-4xl drop-shadow-2xl">TIME HERE</h1>

      <h1 className="text-xl text-slate-600 drop-shadow-md">{author}</h1>
    </main>
  );
}
