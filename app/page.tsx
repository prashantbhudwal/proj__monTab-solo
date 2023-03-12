import usePokemon from "./hooks/usePokemon";
import useUnsplash from "./hooks/useUnsplash";
import Image from "next/image";
import SearchBar from "./SearchBar";

export default async function Home() {
  const test =
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=japan";
  const [unsplashUrl, author] = await useUnsplash(test);

  const [pokemonUrl] = await usePokemon();

  return (
    <main
      className="h-screen bg-cover bg-center flex flex-col justify-between text-slate-100 p-4"
      style={{ backgroundImage: `url(${unsplashUrl})` }}
    >
      <div className="flex flex-row justify-between">
        <p>Crypto</p>
        <p>Weather</p>
      </div>

      <SearchBar />

      <div className="flex flex-row justify-between items-baseline">
        <h1 className="text-xl text-slate-600 drop-shadow-md">{author}</h1>
        <div className="shadow-inner shadow-neutral-300 backdrop-filter backdrop-blur-sm backdrop-opacity-50 p-4 rounded-full flex items-center justify-center">
          <Image
            className=""
            src={pokemonUrl}
            alt="pokemon image"
            width={200}
            height={200}
          ></Image>
        </div>
      </div>
    </main>
  );
}
