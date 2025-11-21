"use client";

import { Sparklines, SparklinesLine } from "react-sparklines";
import { useHardwareMetrics } from "../hooks/useHardwareMetrics";

type MetricKey = "cpuLoad" | "gpuLoad" | "ramUsage" | "cpuTemp";

type MetricConfig = {
  key: MetricKey;
  label: string;
  format: (value: number) => string;
};

const metricsConfig: MetricConfig[] = [
  { key: "cpuLoad", label: "cpu", format: (value) => `${value.toFixed(0)}%` },
  { key: "gpuLoad", label: "gpu", format: (value) => `${value.toFixed(0)}%` },
  { key: "ramUsage", label: "mem", format: (value) => `${value.toFixed(0)}%` },
  {
    key: "cpuTemp",
    label: "cpu temp",
    format: (value) => `${value.toFixed(0)}°c`,
  },
];

const getRange = (key: MetricKey) => {
  if (key === "cpuTemp") {
    return { min: 30, max: 95 };
  }
  return { min: 0, max: 100 };
};

// simulated system vitals with animated graphs
export function HardwarePanel() {
  const metrics = useHardwareMetrics();

  return (
    <section className="panel panel-secondary">
      <h2 className="panel-title">{"> runtime vitals"}</h2>
      <div className="hardware-grid">
        {metricsConfig.map((metric) => {
          const series = metrics[metric.key];
          const values = series.map((point) => point.value);
          const latest = values[values.length - 1] ?? 0;
          const { min, max } = getRange(metric.key);

          return (
            <div key={metric.key} className="hardware-row">
              <div className="hardware-meta">
                <span className="hardware-label">
                  {metric.label.toUpperCase()} - {metric.format(latest)}
                </span>
              </div>
              <div className="hardware-chart-shell">
                <div className="hardware-chart">
                  <Sparklines
                    data={values}
                    width={80}
                    height={20}
                    margin={0}
                    min={min}
                    max={max}
                  >
                    <SparklinesLine
                      color="#ff6b35"
                      style={{
                        strokeWidth: 0.5,
                        fill: "rgba(255,107,53,0.16)",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                      }}
                    />
                  </Sparklines>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
