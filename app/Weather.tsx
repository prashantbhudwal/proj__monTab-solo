"use client";
import useOpenWeather from "./hooks/useOpenWeather";
import useGeoLocation from "./hooks/useGeoLocation";

export default function Weather() {
  const [lat, lon] = useGeoLocation();
  const [temp, realFeel, humidity, desc] = useOpenWeather(lat, lon);

  if (!temp) {
    return <>Loading..</>;
  }

  return (
    <div className="text-fuchsia-500 shadow-inner backdrop-filter backdrop-blur-sm backdrop-opacity-50 shadow-fuchsia-500 rounded-lg p-4 drop-shadow-lg ">
      <p className="text-3xl font-bold">
        {Math.round(temp)}° <span className="text-sm">{desc}</span>
      </p>
      <p className="text-fuchsia-200 text-sm mt-2">
        Real Feel: {Math.round(realFeel)}°C
      </p>
      <p className="text-fuchsia-200 text-sm mt-2">Humidity: {humidity}%</p>
    </div>
  );
}
