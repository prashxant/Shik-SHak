"use client";
import { Container } from "../shared/container";

import { useEffect, useState } from "react";

export const Flick = () => {
  return (
    <Container>
      <div className="m-10 flex flex-col items-center justify-center rounded-md bg-neutral-800 p-24 text-2xl font-semibold text-white">
        <p>Set up in 10 mins.</p>
        <span>Back to building by <Clock/></span>
        <p className="text-lg">
          Built for founders who want to focus on their business, not their
          accounting.
        </p>
        <button className="mt-6 cursor-pointer rounded-lg bg-[#2579F4] px-4 py-2 font-bold tracking-wide text-white shadow-lg text-shadow-md">
          Get Started
        </button>
      </div>
    </Container>
  );
};




export default function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  const displayHours = hours % 12 || 12;

  return (
    <span>
      <span className="[font-variant-numeric:tabular-nums]">
        {displayHours}
      </span>

      <span className="opacity-100 transition-opacity duration-150">:</span>

      <span className="[font-variant-numeric:tabular-nums]">
        {minutes.toString().padStart(2, "0")}
      </span>

      <span className="ml-1 text-sm lowercase">{ampm}</span>
    </span>
  );
}
