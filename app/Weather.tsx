"use client";
import useOpenWeather from "./hooks/useOpenWeather";
import useGeoLocation from "./hooks/useGeoLocation";

export default function Weather({ className }: { className?: string }) {
  const [lat, lon] = useGeoLocation();
  const [temp, realFeel, humidity] = useOpenWeather(lat, lon);

  if (!temp) {
    return <>Loading..</>;
  }

  return (
    <div className={className}>
      <p>Temp:{temp}</p>
      <p>Real Feel:{realFeel}</p>
      <p>Humidity:{humidity}</p>
    </div>
  );
}
