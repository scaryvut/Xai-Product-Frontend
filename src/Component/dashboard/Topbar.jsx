"use client";

import { motion } from "framer-motion";
import {
  Search,
  Bell,
  Settings,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function Topbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-[#0E1424]/80 p-6 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between"
    >
      {/* Left */}
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
          Intelligence Workspace
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          Dashboard Overview
        </h2>

        <p className="mt-2 text-slate-400">
          Monitor data pipelines, AI insights, and workflow automation.
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search datasets..."
            className="w-72 rounded-xl border border-white/10 bg-[#111827] py-3 pl-11 pr-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
          />
        </div>

        {/* AI Status */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-cyan-300"
        >
          <Sparkles size={18} />

          <span className="text-sm font-semibold">
            AI Online
          </span>
        </motion.div>

        {/* Notification */}
        <motion.button
          whileHover={{
            scale: 1.05,
            rotate: 10,
          }}
          whileTap={{ scale: 0.95 }}
          className="rounded-xl border border-white/10 bg-[#111827] p-3 text-slate-300 transition hover:text-white"
        >
          <Bell size={20} />
        </motion.button>

        {/* Settings */}
        <motion.button
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-white/10 bg-[#111827] p-3 text-slate-300 transition hover:text-white"
        >
          <Settings size={20} />
        </motion.button>

        {/* User */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#111827] px-4 py-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 font-bold text-white">
            AA
          </div>

          <div className="text-left">
            <h4 className="text-sm font-semibold text-white">
              Alex Anderson
            </h4>

            <p className="text-xs text-slate-400">
              Administrator
            </p>
          </div>

          <ChevronDown
            size={18}
            className="text-slate-400"
          />
        </motion.button>
      </div>
    </motion.header>
  );
}