import { useEffect, useState } from "react";

type MetricKey = "cpuLoad" | "gpuLoad" | "ramUsage" | "cpuTemp";

type MetricPoint = {
  t: number;
  value: number;
};

type HardwareMetrics = {
  [K in MetricKey]: MetricPoint[];
};

const createSeries = (
  length: number,
  min: number,
  max: number
): MetricPoint[] => {
  const now = Date.now();
  const step = 900;

  const points: MetricPoint[] = [];
  let current = (min + max) / 2;

  for (let index = length - 1; index >= 0; index -= 1) {
    const timestamp = now - index * step;
    const jumpChance = Math.random();
    const volatility = jumpChance < 0.15 ? 0.4 : 0.2;
    current += (Math.random() - 0.5) * (max - min) * volatility;
    if (current < min) current = min + Math.random() * (max - min) * 0.1;
    if (current > max) current = max - Math.random() * (max - min) * 0.1;
    points.push({ t: timestamp, value: current });
  }

  return points;
};

const nextValue = (previous: number, min: number, max: number): number => {
  const jumpChance = Math.random();
  const volatility = jumpChance < 0.2 ? 0.45 : 0.22;
  let value = previous + (Math.random() - 0.5) * (max - min) * volatility;
  if (value < min) value = min + Math.random() * (max - min) * 0.1;
  if (value > max) value = max - Math.random() * (max - min) * 0.1;
  return value;
};

// generates simulated hardware metrics for visualization
export function useHardwareMetrics(sampleCount: number = 28): HardwareMetrics {
  const [metrics, setMetrics] = useState<HardwareMetrics>(() => ({
    cpuLoad: createSeries(sampleCount, 20, 85),
    gpuLoad: createSeries(sampleCount, 10, 90),
    ramUsage: createSeries(sampleCount, 25, 95),
    cpuTemp: createSeries(sampleCount, 40, 85),
  }));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setMetrics((previous) => {
        const updateSeries = (
          key: MetricKey,
          min: number,
          max: number
        ): MetricPoint[] => {
          const series = previous[key];
          const last = series[series.length - 1] ?? {
            t: Date.now(),
            value: (min + max) / 2,
          };
          const next = {
            t: Date.now(),
            value: nextValue(last.value, min, max),
          };

          const trimmed = [...series, next];
          if (trimmed.length > sampleCount) {
            trimmed.shift();
          }
          return trimmed;
        };

        return {
          cpuLoad: updateSeries("cpuLoad", 10, 95),
          gpuLoad: updateSeries("gpuLoad", 5, 98),
          ramUsage: updateSeries("ramUsage", 20, 99),
          cpuTemp: updateSeries("cpuTemp", 35, 90),
        };
      });
    }, 500);

    return () => window.clearInterval(intervalId);
  }, [sampleCount]);

  return metrics;
}
