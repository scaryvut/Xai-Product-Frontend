"use client";

import { motion } from "framer-motion";

const data = [
  { label: "Jan", value: 28 },
  { label: "Feb", value: 42 },
  { label: "Mar", value: 35 },
  { label: "Apr", value: 58 },
  { label: "May", value: 70 },
  { label: "Jun", value: 62 },
  { label: "Jul", value: 92 },
];

export default function LineChart() {
  const width = 700;
  const height = 300;
  const padding = 40;

  const max = Math.max(...data.map((d) => d.value));

  const points = data
    .map((item, index) => {
      const x =
        padding +
        (index * (width - padding * 2)) / (data.length - 1);

      const y =
        height -
        padding -
        (item.value / max) * (height - padding * 2);

      return `${x},${y}`;
    })
    .join(" ");

  const area =
    points +
    ` ${width - padding},${height - padding} ${padding},${height - padding}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/10 bg-[#0E1424] p-8"
    >
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Signal Trend
          </h2>

          <p className="mt-2 text-slate-400">
            AI processed signals over the last 7 months
          </p>
        </div>

        <div className="rounded-xl bg-cyan-500/10 px-4 py-2 text-cyan-400">
          Live
        </div>
      </div>

      {/* Chart */}

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
      >
        <defs>
          <linearGradient
            id="lineGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              stopColor="#22d3ee"
            />

            <stop
              offset="100%"
              stopColor="#8b5cf6"
            />
          </linearGradient>

          <linearGradient
            id="fillGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#22d3ee"
              stopOpacity="0.35"
            />

            <stop
              offset="100%"
              stopColor="#22d3ee"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {/* Grid */}

        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1={padding}
            y1={padding + i * 55}
            x2={width - padding}
            y2={padding + i * 55}
            stroke="#334155"
            strokeDasharray="4 6"
          />
        ))}

        {/* Area */}

        <motion.polygon
          points={area}
          fill="url(#fillGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Line */}

        <motion.polyline
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          points={points}
          initial={{
            pathLength: 0,
          }}
          whileInView={{
            pathLength: 1,
          }}
          transition={{
            duration: 2,
          }}
        />

        {/* Points */}

        {data.map((item, index) => {
          const x =
            padding +
            (index * (width - padding * 2)) /
              (data.length - 1);

          const y =
            height -
            padding -
            (item.value / max) *
              (height - padding * 2);

          return (
            <g key={item.label}>
              <motion.circle
                cx={x}
                cy={y}
                r="6"
                fill="#22d3ee"
                whileHover={{
                  scale: 1.8,
                }}
              />

              <text
                x={x}
                y={height - 10}
                fill="#94a3b8"
                fontSize="12"
                textAnchor="middle"
              >
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
}