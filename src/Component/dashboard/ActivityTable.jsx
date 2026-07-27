"use client";

import { motion } from "framer-motion";
import {
  Search,
  MoreHorizontal,
  CheckCircle2,
  Loader2,
  AlertTriangle,
} from "lucide-react";

const activities = [
  {
    id: "WF-1021",
    workflow: "Revenue Anomaly Detection",
    source: "Stripe Webhook",
    status: "Completed",
    duration: "1.2s",
  },
  {
    id: "WF-1022",
    workflow: "Customer Churn Prediction",
    source: "Daily Batch",
    status: "Running",
    duration: "--",
  },
  {
    id: "WF-1023",
    workflow: "Executive AI Summary",
    source: "Scheduled",
    status: "Completed",
    duration: "0.8s",
  },
  {
    id: "WF-1024",
    workflow: "Sales Forecast",
    source: "CRM Sync",
    status: "Running",
    duration: "--",
  },
  {
    id: "WF-1025",
    workflow: "Inventory Optimization",
    source: "Warehouse API",
    status: "Failed",
    duration: "2.6s",
  },
];

function StatusBadge({ status }) {
  if (status === "Completed") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
        <CheckCircle2 size={14} />
        {status}
      </span>
    );
  }

  if (status === "Running") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-400">
        <Loader2 size={14} className="animate-spin" />
        {status}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-400">
      <AlertTriangle size={14} />
      {status}
    </span>
  );
}

export default function ActivityTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-white/10 bg-[#0E1424] p-8"
    >
      {/* Header */}

      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Recent AI Workflows
          </h2>

          <p className="mt-2 text-slate-400">
            Monitor live automation execution across your workspace.
          </p>
        </div>

        {/* Search */}

        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search workflow..."
            className="w-full rounded-xl border border-white/10 bg-[#111827] py-3 pl-11 pr-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 lg:w-72"
          />
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-sm uppercase tracking-wider text-slate-500">
              <th className="pb-3">Workflow</th>
              <th className="pb-3">Source</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Duration</th>
              <th className="pb-3 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {activities.map((item, index) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{
                  scale: 1.01,
                }}
                className="rounded-2xl bg-white/5 transition hover:bg-white/10"
              >
                <td className="rounded-l-2xl px-5 py-5">
                  <div>
                    <h3 className="font-semibold text-white">
                      {item.workflow}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.id}
                    </p>
                  </div>
                </td>

                <td className="px-5 py-5 text-slate-300">
                  {item.source}
                </td>

                <td className="px-5 py-5">
                  <StatusBadge status={item.status} />
                </td>

                <td className="px-5 py-5 text-slate-300">
                  {item.duration}
                </td>

                <td className="rounded-r-2xl px-5 py-5 text-right">
                  <button className="rounded-xl border border-white/10 bg-[#111827] p-2 text-slate-400 transition hover:text-white">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}