export default async function usePokemon() {
  let randomNumber = Math.floor(Math.random() * 900) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
  const response = await fetch(url, { cache: "no-store" });
  const json = await response.json();
  const imageUrl = json.sprites.other.home.front_default;
  console.log(imageUrl);
  return [imageUrl];
}
