"use client";

import { motion } from "framer-motion";

const data = [
  {
    label: "Structured",
    value: 45,
    color: "#22d3ee",
  },
  {
    label: "AI Analysis",
    value: 30,
    color: "#8b5cf6",
  },
  {
    label: "Automations",
    value: 15,
    color: "#22c55e",
  },
  {
    label: "Pending",
    value: 10,
    color: "#f59e0b",
  },
];

const radius = 90;
const stroke = 18;
const circumference = 2 * Math.PI * radius;

export default function DonutChart() {
  let offset = 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-white/10 bg-[#0E1424] p-8"
    >
      {/* Header */}

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Intelligence Distribution
        </h2>

        <p className="mt-2 text-slate-400">
          Current workload across the AI pipeline.
        </p>
      </div>

      <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">

        {/* Chart */}

        <div className="relative flex items-center justify-center">
          <svg
            width="240"
            height="240"
            viewBox="0 0 240 240"
            className="-rotate-90"
          >
            <circle
              cx="120"
              cy="120"
              r={radius}
              fill="none"
              stroke="#1e293b"
              strokeWidth={stroke}
            />

            {data.map((item) => {
              const length =
                (item.value / 100) * circumference;

              const currentOffset = offset;

              offset += length;

              return (
                <motion.circle
                  key={item.label}
                  cx="120"
                  cy="120"
                  r={radius}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={`${length} ${circumference}`}
                  strokeDashoffset={-currentOffset}
                  initial={{
                    strokeDasharray: `0 ${circumference}`,
                  }}
                  whileInView={{
                    strokeDasharray: `${length} ${circumference}`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                  }}
                />
              );
            })}
          </svg>

          {/* Center */}

          <div className="absolute text-center">
            <h3 className="text-5xl font-black text-white">
              94%
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              AI Accuracy
            </p>
          </div>
        </div>

        {/* Legend */}

        <div className="space-y-5">
          {data.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                x: 8,
              }}
              className="flex min-w-[220px] items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4"
            >
              <div className="flex items-center gap-4">
                <span
                  className="h-4 w-4 rounded-full"
                  style={{
                    backgroundColor: item.color,
                  }}
                />

                <span className="font-medium text-white">
                  {item.label}
                </span>
              </div>

              <span className="font-bold text-slate-300">
                {item.value}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}