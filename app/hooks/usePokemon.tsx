export default async function usePokemon() {
  let randomNumber = Math.floor(Math.random() * 900) + 1;

  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw Error("Something went wrong");
    }
    const json = await response.json();
    const imageUrl = json.sprites.other.home.front_default;
    return [imageUrl];
  } catch (error) {
    return [
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/39.png",
    ];
  }
}
