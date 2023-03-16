"use client";

import { useEffect, useState } from "react";

export default function Clock({ className }: { className: string }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p className={className}>
      {date.toLocaleTimeString("en-US", { timeStyle: "short" })}
    </p>
  );
}
