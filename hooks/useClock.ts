import { useEffect, useState } from "react";

// tracks current time with auto-updating every second
export function useClock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return time;
}

