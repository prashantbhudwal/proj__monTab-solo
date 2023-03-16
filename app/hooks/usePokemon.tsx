export default async function usePokemon() {
  try {
    let getRandomNumber = () => Math.floor(Math.random() * 900) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${getRandomNumber()}`
    );
    if (!response.ok) {
      throw Error(`The request failed with status ${response.status} `);
    }
    const json = await response.json();
    const name = json.name;
    const imageUrl = json.sprites.other.home.front_default;
    return [imageUrl, name];
  } catch (error) {
    console.log(error);
    return [
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/39.png",
      "Mon-Mon",
    ];
  }
}
