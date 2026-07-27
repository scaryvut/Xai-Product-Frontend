"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Workflow,
  Zap,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Signals Processed",
    value: "2.4M",
    change: "+18%",
    icon: Activity,
    color: "text-cyan-400",
    bg: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    title: "AI Confidence",
    value: "94.2%",
    change: "+3.1%",
    icon: BrainCircuit,
    color: "text-violet-400",
    bg: "from-violet-500/20 to-violet-500/5",
  },
  {
    title: "Automations",
    value: "18,432",
    change: "+12%",
    icon: Workflow,
    color: "text-emerald-400",
    bg: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    title: "Processing Speed",
    value: "0.42s",
    change: "-21%",
    icon: Zap,
    color: "text-orange-400",
    bg: "from-orange-500/20 to-orange-500/5",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${item.bg} p-6 backdrop-blur-xl`}
          >
            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10 flex items-center justify-between">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ${item.color}`}
              >
                <Icon size={28} />
              </div>

              <div className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                <TrendingUp size={14} />
                {item.change}
              </div>
            </div>

            <div className="relative z-10 mt-8">
              <h3 className="text-sm text-slate-400">
                {item.title}
              </h3>

              <h2 className="mt-2 text-4xl font-black text-white">
                {item.value}
              </h2>
            </div>

            {/* Progress Bar */}
            <div className="relative z-10 mt-8 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "82%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.2,
                }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}