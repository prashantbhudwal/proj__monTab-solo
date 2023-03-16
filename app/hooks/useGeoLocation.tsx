"use client";

import { useEffect, useState } from "react";

export default function useGeoLocation() {
  const [location, setLocation] = useState<GeolocationPosition>();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function error(err: GeolocationPositionError) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    const success = (position: GeolocationPosition) => setLocation(position);
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  if (location) {
    return [location.coords.latitude, location.coords.longitude];
  } else {
    return [null, null];
  }
}
