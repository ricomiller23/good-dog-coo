"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  AlertTriangle,
  Users,
  Package,
  Activity,
  ArrowRight,
  BarChart3,
  Globe,
  Truck
} from "lucide-react";
import Link from "next/link";
import { cn, formatCurrency } from "@/lib/utils";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#020C1B] text-slate-200">
      {/* Top Navigation Bar */}
      <nav className="border-b border-slate-800 bg-[#0A192F]/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center font-bold text-black">
              GD
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              Good Dogg <span className="text-slate-400 font-normal">| Interim COO</span>
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
            <Link href="/strategy" className="hover:text-amber-400 transition-colors">Strategy</Link>
            <Link href="/operations" className="hover:text-amber-400 transition-colors">Operations</Link>
            <Link href="/crm" className="hover:text-amber-400 transition-colors">Capital</Link>
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
              <span className="text-xs text-white">EM</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        {/* Welcome & Status */}
        <header className="flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2">Executive Command Center</h1>
            <p className="text-slate-400">Operational Oversight: <span className="text-amber-400 font-semibold">Dec 23, 2024</span></p>
          </motion.div>

          <div className="flex gap-3">
            <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium border border-slate-700 transition-colors">
              Generate Board Pack
            </button>
            <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black rounded-lg text-sm font-bold shadow-[0_0_15px_rgba(217,119,6,0.2)] transition-colors">
              + New Initiative
            </button>
          </div>
        </header>

        {/* High-Level KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Proj. Revenue '24"
            value={formatCurrency(3500000)}
            trend="+12% vs Target"
            trendUp={true}
            icon={TrendingUp}
          />
          <KPICard
            title="Gross Margin"
            value="42.5%"
            sub="Target: 50% by '27"
            trend="+1.2% MoM"
            trendUp={true}
            icon={Activity}
          />
          <KPICard
            title="Cash on Hand"
            value={formatCurrency(850000)}
            sub="Runway: 5.5 Months"
            trend="Series A Pending"
            trendUp={true} // Neutral really
            icon={BarChart3}
          />
          <KPICard
            title="Distribution Points"
            value="2,140"
            sub="Goal: 19,000"
            trend="+45 this week"
            trendUp={true}
            icon={Globe}
          />
        </div>

        {/* Main Operational Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left: Strategic Priorities (Gantt Snapshot) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-amber-500" /> Strategic Roadmap
              </h2>
              <Link href="/strategy" className="text-sm text-amber-500 hover:underline">View Full Timeline &rarr;</Link>
            </div>

            <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-6 space-y-6">
              <RoadmapItem
                title="Wine RTD Launch (Q2 '25)"
                status="In Progress"
                progress={35}
                details="Formulations Finalized. TTB COLA Pending."
                critical
              />
              <RoadmapItem
                title="Florida Market Expansion"
                status="Planning"
                progress={15}
                details="Total Wine & Publix Meetings Scheduled."
              />
              <RoadmapItem
                title="$3M Series A Raise"
                status="Active"
                progress={60}
                details="Due Diligence Phase. Lead Investor Follow-up."
                critical
              />
            </div>

            {/* Supply Chain Snapshot */}
            <div className="flex items-center justify-between mt-8">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Truck className="w-5 h-5 text-blue-500" /> Supply Chain Pulse
              </h2>
              <Link href="/operations" className="text-sm text-blue-400 hover:underline">Manage Ops &rarr;</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-5">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-white">Co-Packer Status</h3>
                  <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full border border-green-500/20">Optimal</span>
                </div>
                <div className="space-y-3">
                  <StatusRow label="Proper Beverage (CA)" status="Active" value="Run Scheduled" />
                  <StatusRow label="CA Juice Packers" status="Standby" value="Capacity: 80%" />
                </div>
              </div>
              <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-5">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-white">Inventory (DTC)</h3>
                  <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-1 rounded-full border border-amber-500/20">Low Stock</span>
                </div>
                <div className="space-y-3">
                  <StatusRow label="Cucumber Lime" status="Warning" value="450 Cases" />
                  <StatusRow label="Black Cherry" status="Good" value="1,200 Cases" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Critical Alerts & Capital */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" /> Critical Actions
            </h2>
            <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-1 divide-y divide-slate-800/50">
              <AlertItem
                level="high"
                title="Approve Wine Formulations"
                due="Tomorrow"
                category="Product"
              />
              <AlertItem
                level="medium"
                title="Review ShipCompliant Log"
                due="Wed, Dec 25"
                category="Compliance"
              />
              <AlertItem
                level="medium"
                title="Board Update Draft"
                due="Fri, Dec 27"
                category="Reporting"
              />
            </div>

            <div className="bg-gradient-to-br from-indigo-900/50 to-slate-900 border border-indigo-500/30 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-bold text-white mb-1">Fundraising Tracker</h3>
              <p className="text-sm text-indigo-300 mb-4">Series A (Goal: $3M)</p>

              <div className="relative pt-2">
                <div className="flex items-end justify-between text-xs font-semibold text-indigo-200 mb-2">
                  <span>Committed: $1.8M</span>
                  <span>60%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
              <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                View Investor CRM
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

// -- Components --

function KPICard({ title, value, sub, trend, trendUp, icon: Icon }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-[#0A192F] border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-slate-700 transition-colors"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon className="w-16 h-16 text-slate-400" />
      </div>
      <div className="flex items-center gap-3 mb-4 text-slate-400">
        <div className="p-2 bg-slate-800 rounded-lg">
          <Icon className="w-5 h-5 text-amber-500" />
        </div>
        <span className="text-sm font-medium">{title}</span>
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      {(sub || trend) && (
        <div className="flex items-center gap-2 text-xs">
          {trend && (
            <span className={cn(
              "font-medium",
              trendUp ? "text-green-400" : "text-red-400"
            )}>
              {trend}
            </span>
          )}
          {sub && <span className="text-slate-500">{sub}</span>}
        </div>
      )}
    </motion.div>
  )
}

function RoadmapItem({ title, status, progress, details, critical }: any) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-white flex items-center gap-2">
            {title}
            {critical && <span className="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded border border-red-500/30">CRITICAL</span>}
          </h4>
          <p className="text-xs text-slate-400">{details}</p>
        </div>
        <span className="text-xs font-mono text-slate-500">{status}</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={cn("h-full rounded-full", critical ? "bg-amber-500" : "bg-blue-500")}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

function AlertItem({ level, title, due, category }: any) {
  return (
    <div className="flex items-center gap-3 p-3 hover:bg-slate-800/50 transition-colors rounded-lg group cursor-pointer">
      <div className={cn(
        "w-2 h-2 rounded-full shrink-0",
        level === "high" ? "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" : "bg-amber-500"
      )} />
      <div className="flex-1">
        <h4 className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{title}</h4>
        <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-wide">
          <span>{category}</span>
          <span>&middot;</span>
          <span className={level === "high" ? "text-red-400" : ""}>Due {due}</span>
        </div>
      </div>
      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
    </div>
  )
}

function StatusRow({ label, status, value }: any) {
  return (
    <div className="flex items-center justify-between text-sm border-b border-slate-800/50 pb-2 last:border-0 last:pb-0">
      <span className="text-slate-400">{label}</span>
      <div className="text-right">
        <div className={cn(
          "font-medium",
          status === "Active" ? "text-green-400" :
            status === "Warning" ? "text-red-400" : "text-slate-200"
        )}>{value}</div>
      </div>
    </div>
  )
}
