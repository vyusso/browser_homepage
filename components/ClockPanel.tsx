"use client";

import { useClock } from "../hooks/useClock";

// formats date parts with leading zeros
const pad = (num: number) => num.toString().padStart(2, "0");

// digital clock display showing current time and date
export function ClockPanel() {
  const time = useClock();

  const hours = pad(time.getHours());
  const minutes = pad(time.getMinutes());
  const seconds = pad(time.getSeconds());

  const year = time.getFullYear();
  const month = pad(time.getMonth() + 1);
  const day = pad(time.getDate());

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayName = dayNames[time.getDay()];

  return (
    <section className="panel panel-primary clock-panel">
      <h1 className="panel-title">{"> SYSTEM CLOCK"}</h1>
      <div className="clock-container">
        <div className="clock-time">
          <span className="clock-digit">{hours}</span>
          <span className="clock-separator">:</span>
          <span className="clock-digit">{minutes}</span>
          <span className="clock-separator">:</span>
          <span className="clock-digit">{seconds}</span>
        </div>
        <div className="clock-date">
          <span className="clock-day">{dayName}</span>
          <span className="clock-separator-date"> - </span>
          <span className="clock-full-date">
            {year}.{month}.{day}
          </span>
        </div>
      </div>
    </section>
  );
}

