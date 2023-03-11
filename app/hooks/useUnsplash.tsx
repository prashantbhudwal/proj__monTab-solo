export default async function useUnsplash() {
  const response = await fetch(
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=japan"
  );
  const responseJson = await response.json();
  const imageUrl = responseJson.urls.full;
  const authorName = responseJson.user.name;

  return [imageUrl, authorName];
}
