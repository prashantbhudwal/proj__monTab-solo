import usePokemon from "./hooks/usePokemon";
import useUnsplash from "./hooks/useUnsplash";
import Image from "next/image";
import SearchBar from "./SearchBar";
import PokemonWrapper from "./PokemonWrapper";
import FullScreenBg from "./FullScreenBg";
import Clock from "./Clock";
import Weather from "./Weather";

export default async function Home() {
  const test =
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=japan";
  const [unsplashUrl, author] = await useUnsplash(test);

  const [pokemonUrl, pokemonName] = await usePokemon();

  return (
    <main className=" text-slate-100">
      <FullScreenBg url={unsplashUrl} />
      <div className="flex flex-col justify-between h-screen px-4 py-6">
        <div className="flex flex-row justify-between">
          <Weather />
          <Clock />
        </div>
        <SearchBar />

        <div className="flex flex-row justify-between items-baseline">
          <h1 className="text-sm text-slate-600 drop-shadow-md">
            Image by {author}
          </h1>
          {/* TODO: Rename this */}
          <PokemonWrapper name={pokemonName}>
            <Image
              className=""
              src={pokemonUrl}
              alt="pokemon image"
              width={200}
              height={200}
            ></Image>
            <p className="capitalize text-fuchsia-500 text-xl">{pokemonName}</p>
          </PokemonWrapper>
        </div>
      </div>
    </main>
  );
}
