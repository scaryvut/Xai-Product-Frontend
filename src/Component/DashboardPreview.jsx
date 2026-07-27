"use client";

import { motion } from "framer-motion";

import Sidebar from "./dashboard/Sidebar";
import Topbar from "./dashboard/Topbar";
import StatsCards from "./dashboard/StatsCards";
import LineChart from "./dashboard/LineChart";
import DonutChart from "./dashboard/DonutChart";
import ActivityTable from "./dashboard/ActivityTable";

export default function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 uppercase tracking-[0.35em] text-cyan-400">
            Workspace
          </p>

          <h2 className="text-5xl font-black text-white">
            Intelligence Dashboard
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A unified workspace where AI continuously ingests data,
            discovers insights and powers intelligent automations.
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-[#08101F] shadow-[0_0_80px_rgba(34,211,238,0.08)]"
        >
          <div className="grid min-h-[1000px] lg:grid-cols-[280px_1fr]">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="space-y-8 p-8">
              <Topbar />

              <StatsCards />

              <div className="grid gap-8 xl:grid-cols-[2fr_1fr]">
                <LineChart />

                <DonutChart />
              </div>

              <ActivityTable />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}