"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,#0f172a_0%,#050816_60%,#02040a_100%)]" />

      {/* Glow */}
      <div className="absolute left-1/2 top-24 -z-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[160px]" />

      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-32 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
          >
            <Sparkles size={16} />
            AI Powered Intelligence Workspace
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl font-black leading-tight md:text-6xl xl:text-7xl"
          >
            From{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              Raw Data
            </span>
            <br />
            to{" "}
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg leading-8 text-slate-400"
          >
            Transform fragmented information into structured intelligence,
            discover actionable insights, and automate critical workflows
            through an AI-powered workspace designed for modern teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-4 font-semibold shadow-2xl shadow-cyan-500/20"
            >
              Launch Workspace
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-lg transition hover:bg-white/10"
            >
              Explore Demo
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-wrap gap-10"
          >
            <div>
              <h2 className="text-3xl font-bold text-cyan-400">2.4M+</h2>
              <p className="mt-2 text-sm text-slate-400">
                Signals Processed
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-400">94%</h2>
              <p className="mt-2 text-sm text-slate-400">
                AI Confidence
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-400">18K+</h2>
              <p className="mt-2 text-sm text-slate-400">
                Automated Actions
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-[650px] w-full"
        >
          <HeroScene />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-cyan-400" size={34} />
      </motion.div>
    </section>
  );
}