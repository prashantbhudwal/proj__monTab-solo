import useUnsplash from "./hooks/useUnsplash";

export default async function Home() {
  const [url, author] = await useUnsplash();

  return (
    <main
      className="h-screen bg-cover bg-center flex flex-col justify-between items-center text-slate-300"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div>Crypto and weather here</div>

      <h1>TIME HERE</h1>

      <h1 className="text-xl text-slate-600 drop-shadow-md">{author}</h1>
    </main>
  );
}
