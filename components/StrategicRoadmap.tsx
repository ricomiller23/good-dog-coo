"use client";

import { motion } from "framer-motion";
import { Flag, CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PHASES = [
    {
        id: "survival",
        name: "Phase 1: Survival",
        timeline: "Weeks 1-8",
        status: "active", // active, upcoming, completed
        goal: "Stop the Bleeding",
        milestones: [
            { label: "Secure Bridge Loan ($500k)", completed: false },
            { label: "Reduce Burn by 30%", completed: false },
            { label: "Ext. Payment Terms (Net 45)", completed: true },
        ]
    },
    {
        id: "stabilize",
        name: "Phase 2: Stabilize",
        timeline: "Months 3-6",
        status: "upcoming",
        goal: "Fix Unit Economics",
        milestones: [
            { label: "Gross Margin > 35%", completed: false },
            { label: "Hire Fractional CFO", completed: false },
            { label: "ERP System Live", completed: false },
        ]
    },
    {
        id: "growth",
        name: "Phase 3: Growth",
        timeline: "Months 7-12",
        status: "upcoming",
        goal: "Controlled Expansion",
        milestones: [
            { label: "EBITDA Positive", completed: false },
            { label: "Series A Close ($3M)", completed: false },
            { label: "Wine Line Launch", completed: false },
        ]
    }
];

export default function StrategicRoadmap() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Flag className="w-5 h-5 text-amber-500" /> Strategic Roadmap
                </h2>
                <button className="text-xs text-amber-500 hover:text-amber-400 flex items-center gap-1">
                    Full Timeline <ArrowRight className="w-3 h-3" />
                </button>
            </div>

            <div className="space-y-4">
                {PHASES.map((phase) => (
                    <div
                        key={phase.id}
                        className={cn(
                            "border rounded-xl p-5 transition-colors relative overflow-hidden",
                            phase.status === 'active' ? "bg-[#0A192F] border-amber-500/50" : "bg-[#0A192F]/50 border-slate-800"
                        )}
                    >
                        {phase.status === 'active' && (
                            <div className="absolute top-0 right-0 px-3 py-1 bg-amber-500 text-black text-[10px] font-bold rounded-bl-xl uppercase tracking-wider">
                                Current Phase
                            </div>
                        )}

                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className={cn(
                                    "font-bold text-lg",
                                    phase.status === 'active' ? "text-white" : "text-slate-400"
                                )}>{phase.name}</h3>
                                <p className="text-xs text-slate-500">{phase.timeline} • {phase.goal}</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            {phase.milestones.map((ms, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    {ms.completed ? (
                                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                    ) : (
                                        <div className="w-4 h-4 rounded-full border border-slate-600 shrink-0" />
                                    )}
                                    <span className={cn(
                                        "text-sm",
                                        ms.completed ? "text-slate-400 line-through" : "text-slate-300"
                                    )}>{ms.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Progress Bar for Active Phase Only */}
                        {phase.status === 'active' && (
                            <div className="mt-4 pt-4 border-t border-slate-800/50">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-amber-500 font-medium">Progress</span>
                                    <span className="text-white">33%</span>
                                </div>
                                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "33%" }}
                                        className="h-full bg-amber-500 rounded-full"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
