export default async function Home() {
  const response = await fetch(
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=japan"
  );
  const responseJson = await response.json();
  const imageUrl = responseJson.urls.full;

  return (
    <main
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></main>
  );
}
