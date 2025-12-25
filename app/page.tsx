"use client";

import { motion } from "framer-motion";
import FinancialHealth from "@/components/FinancialHealth";
import DailyExecution from "@/components/DailyExecution";
import OperationalMetrics from "@/components/OperationalMetrics";
import StrategicRoadmap from "@/components/StrategicRoadmap";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#020C1B] text-slate-200 font-inter">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        {/* Header Section */}
        <header className="flex justify-between items-end pb-6 border-b border-slate-800/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-white mb-2 font-outfit">Executive Command Center</h1>
            <p className="text-slate-400">
              Operational Oversight • <span className="text-amber-500 font-semibold">Dec 2025</span>
            </p>
          </motion.div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium border border-slate-700 transition-colors">
              Export Board Pack
            </button>
          </div>
        </header>

        {/* Top Row: Financial Health (The "Survival" Metrics) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <FinancialHealth />
        </motion.section>

        {/* Middle Row: Daily Execution & Strategy */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* Left: Daily Execution (2/3 width on large screens) */}
          <motion.div
            className="xl:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <DailyExecution />
          </motion.div>

          {/* Right: Strategic Roadmap (1/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <StrategicRoadmap />
          </motion.div>
        </div>

        {/* Bottom Row: Operational Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <OperationalMetrics />
        </motion.section>

      </div>
    </main>
  );
}
