"use client";

import { motion } from "framer-motion";
import { Flag, CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TIMELINE = [
    {
        phase: "Phase 1: Foundation",
        period: "Q1 - Q2 2025",
        description: "Launch & Stabilization",
        status: "active",
        milestones: [
            { title: "Wine RTD Line Launch", date: "April 2025", status: "in-progress", critical: true },
            { title: "Florida Market Entry", date: "May 2025", status: "pending", critical: false },
            { title: "DTC Infrastructure Build", date: "March 2025", status: "in-progress", critical: false },
            { title: "Operations Manager Hire", date: "Feb 2025", status: "pending", critical: true },
        ]
    },
    {
        phase: "Phase 2: Scale",
        period: "Q3 2025 - Q4 2026",
        description: "National Expansion",
        status: "upcoming",
        milestones: [
            { title: "48-State Distribution", date: "Late 2025", status: "pending", critical: true },
            { title: "National Retail Prep (Walmart)", date: "Q1 2026", status: "pending", critical: false },
            { title: "Production Capacity 5x", date: "Q2 2026", status: "pending", critical: true },
        ]
    },
    {
        phase: "Phase 3: Domination",
        period: "2027 - 2029",
        description: "$55M Revenue Target",
        status: "upcoming",
        milestones: [
            { title: "19,000+ Distribution Points", date: "2027", status: "pending", critical: true },
            { title: "Mature DTC Subscription Model", date: "2028", status: "pending", critical: false },
        ]
    }
];

export default function StrategyPage() {
    return (
        <main className="min-h-screen bg-[#020C1B] text-slate-200 p-8">
            <div className="max-w-5xl mx-auto space-y-12">

                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between items-end border-b border-slate-800 pb-6"
                >
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                            <Flag className="w-8 h-8 text-amber-500" /> Strategic Roadmap
                        </h1>
                        <p className="text-slate-400">Master Growth Plan: 2025 - 2029</p>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-slate-400">Current Focus</div>
                        <div className="text-xl font-bold text-amber-500">Wine Line Launch</div>
                    </div>
                </motion.header>

                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-16 pb-12">
                    {TIMELINE.map((phase, index) => (
                        <motion.div
                            key={phase.phase}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Node */}
                            <div className={cn(
                                "absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2",
                                phase.status === "active" ? "bg-amber-500 border-amber-600 shadow-[0_0_10px_rgba(245,158,11,0.5)]" : "bg-slate-900 border-slate-700"
                            )} />

                            {/* Phase Header */}
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-1">
                                    <h2 className={cn(
                                        "text-2xl font-bold",
                                        phase.status === "active" ? "text-white" : "text-slate-500"
                                    )}>{phase.phase}</h2>
                                    {phase.status === "active" && (
                                        <span className="text-xs bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded border border-amber-500/20">CURRENT</span>
                                    )}
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="text-slate-400 font-mono">{phase.period}</span>
                                    <span className="text-slate-600">&middot;</span>
                                    <span className="text-slate-400">{phase.description}</span>
                                </div>
                            </div>

                            {/* Milestones Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {phase.milestones.map((milestone, mIndex) => (
                                    <MileStoneCard key={mIndex} milestone={milestone} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </main>
    );
}

function MileStoneCard({ milestone }: any) {
    const isDone = milestone.status === "completed";
    const isInProgress = milestone.status === "in-progress";

    return (
        <div className={cn(
            "p-4 rounded-xl border transition-colors flex items-start gap-4",
            isInProgress ? "bg-[#0A192F] border-amber-500/30" : "bg-slate-900/30 border-slate-800"
        )}>
            <div className={cn(
                "mt-0.5",
                isDone ? "text-green-500" :
                    isInProgress ? "text-amber-500" : "text-slate-600"
            )}>
                {isDone ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h3 className={cn(
                        "font-medium",
                        isInProgress ? "text-white" : "text-slate-400"
                    )}>{milestone.title}</h3>
                    {milestone.critical && (
                        <span className="text-[10px] text-red-400 font-bold bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">CRITICAL</span>
                    )}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-mono flex items-center gap-2">
                    {isInProgress && <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />}
                    Target: {milestone.date}
                </div>
            </div>
        </div>
    )
}
