export default async function useUnsplash(url: string) {
  const response = await fetch(url);
  const responseJson = await response.json();
  const imageUrl = responseJson.urls.full;
  const authorName = responseJson.user.name;

  return [imageUrl, authorName];
}
