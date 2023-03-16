"use client";
import useOpenWeather from "./hooks/useOpenWeather";
import useGeoLocation from "./hooks/useGeoLocation";
import Card from "./Card";

export default function Weather() {
  const [lat, lon] = useGeoLocation();
  const [temp, realFeel, humidity, desc] = useOpenWeather(lat, lon);

  if (!temp) {
    return <>Loading..</>;
  }

  return (
    <Card>
      <p className="text-3xl font-bold">
        {Math.round(temp)}° <span className="text-sm">{desc}</span>
      </p>
      <p className="text-fuchsia-200 text-sm mt-2">
        Real Feel: {Math.round(realFeel)}°C
      </p>
      <p className="text-fuchsia-200 text-sm mt-2">Humidity: {humidity}%</p>
    </Card>
  );
}
