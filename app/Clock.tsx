"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card>
      <p className="text-3xl font-bold">
        {date.toLocaleTimeString("en-US", { timeStyle: "short" })}
      </p>
      <p className="text-fuchsia-200 mt-2">
        {date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
      <p className="text-fuchsia-200 text-sm mt-2">
        {date.toLocaleDateString("en-US", { weekday: "long" })}
      </p>
    </Card>
  );
}
