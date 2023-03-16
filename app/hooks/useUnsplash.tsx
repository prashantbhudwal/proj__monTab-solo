export default async function useUnsplash(url: string) {
  try {
    const response = await fetch(url, { next: { revalidate: 21600 } });
    const responseJson = await response.json();
    const imageUrl = responseJson.urls.full;
    const authorName = responseJson.user.name;
    return [imageUrl, authorName];
  } catch (error) {
    const dummyUrl =
      "https://images.unsplash.com/photo-1554765389-7a2644bc92e7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzg1NDAzNTQ&ixlib=rb-4.0.3&q=80";
    return [dummyUrl, "Doggy"];
  }
}
