import useSWR from "swr";
export default function useOpenWeather(lat: number | null, lon: number | null) {
  const url = `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;

  const fetcher = function (url: string) {
    return fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data from OpenWeather API");
        }
        return res.json();
      })
      .then((data) => data.main);
  };
  const { data: weather } = useSWR(() => (lat ? url : null), fetcher, {
    refreshInterval: 600000, // set refresh interval to 10 minutes
  });
  return [
    weather?.temp || null,
    weather?.feels_like || null,
    weather?.humidity || null,
  ];
}
