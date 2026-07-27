"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Database,
  BrainCircuit,
  Workflow,
  BarChart3,
  Settings,
  Bell,
} from "lucide-react";

const menu = [
  {
    icon: LayoutDashboard,
    title: "Overview",
    active: true,
  },
  {
    icon: Database,
    title: "Data Sources",
  },
  {
    icon: BrainCircuit,
    title: "AI Models",
  },
  {
    icon: Workflow,
    title: "Automations",
  },
  {
    icon: BarChart3,
    title: "Analytics",
  },
  {
    icon: Bell,
    title: "Notifications",
  },
  {
    icon: Settings,
    title: "Settings",
  },
];

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -60, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex h-full w-72 flex-col justify-between rounded-3xl border border-white/10 bg-[#0E1424] p-6"
    >
      {/* Logo */}
      <div>
        <div className="mb-12 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-xl font-bold">
            X
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">
              Xai
            </h2>

            <p className="text-xs text-slate-400">
              Intelligence Workspace
            </p>
          </div>
        </div>

        {/* Navigation */}

        <div className="space-y-3">

          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.title}
                whileHover={{
                  x: 8,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 transition

                ${
                  item.active
                    ? "bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={20} />

                <span className="font-medium">
                  {item.title}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* User */}

      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 font-bold">
          AA
        </div>

        <div>
          <h4 className="font-semibold text-white">
            Alex Anderson
          </h4>

          <p className="text-sm text-slate-400">
            Administrator
          </p>
        </div>
      </motion.div>
    </motion.aside>
  );
}