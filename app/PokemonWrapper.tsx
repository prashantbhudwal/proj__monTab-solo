"use client";

const handleClick = (name: string) => {
  if (name) {
    window.location.href = `https://bulbapedia.bulbagarden.net/wiki/${name}`;
  }
};
export default function PokemonWrapper({ children, name }: any) {
  return (
    <div
      onClick={() => handleClick(name)}
      className="cursor-pointer flex-col shadow-inner shadow-fuchsia-500 backdrop-filter backdrop-blur-sm backdrop-opacity-50 p-4 rounded-full flex items-center justify-center"
    >
      {children}
    </div>
  );
}
