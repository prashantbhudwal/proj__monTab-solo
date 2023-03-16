import useSWR from "swr";
export default function useOpenWeather(lat: number | null, lon: number | null) {
  const url = `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;

  const fetcher = function (url: string) {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data.main);
  };

  const { data: weather } = useSWR(() => (lat ? url : null), fetcher, {
    refreshInterval: 600000, // set refresh interval to 10 minutes
  });

  if (weather) {
    return [weather.temp, weather.feels_like, weather.humidity];
  } else return [null, null, null];
}
