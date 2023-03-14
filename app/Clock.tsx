"use client";

import { useEffect, useState } from "react";
interface TimeFormatOptions {
  hour12: boolean;
  hour: "2-digit";
  minute: "2-digit";
}

export default function Clock({ className }: { className: string }) {
  const [date, setDate] = useState(new Date());

  const options: TimeFormatOptions = {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit", // For testing
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p className={className}>{date.toLocaleTimeString("en-US", options)}</p>
  );
}
