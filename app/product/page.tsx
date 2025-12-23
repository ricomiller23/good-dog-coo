"use client";

import { motion } from "framer-motion";
import { FlaskConical, Target, CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const NPD_TRACKER = [
    { stage: "Formulation", status: "completed", date: "Dec 15" },
    { stage: "Sourcing", status: "completed", date: "Dec 20" },
    { stage: "TTB Approval", status: "in-progress", date: "Due: Jan 10" },
    { stage: "Pilot Run", status: "pending", date: "Feb 01" },
    { stage: "Launch", status: "pending", date: "April 01" },
];

export default function ProductPage() {
    return (
        <main className="min-h-screen bg-[#020C1B] text-slate-200 p-8">
            <div className="max-w-7xl mx-auto space-y-8">

                <header className="flex justify-between items-end border-b border-slate-800 pb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                            <FlaskConical className="w-8 h-8 text-purple-500" /> Product Lifecycle
                        </h1>
                        <p className="text-slate-400">NPD & Portfolio Management</p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Wine RTD Launch Tracker */}
                    <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">Wine RTD Launch</h2>
                            <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-500/20">Target: Q2 2025</span>
                        </div>

                        <div className="relative border-l border-slate-700 ml-4 space-y-8 py-2">
                            {NPD_TRACKER.map((step, i) => (
                                <div key={i} className="relative pl-8">
                                    <div className={cn(
                                        "absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full border-2",
                                        step.status === "completed" ? "bg-green-500 border-green-500" :
                                            step.status === "in-progress" ? "bg-[#020C1B] border-amber-500" : "bg-[#020C1B] border-slate-700"
                                    )} />

                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className={cn(
                                                "font-medium",
                                                step.status === "pending" ? "text-slate-500" : "text-white"
                                            )}>{step.stage}</h3>
                                            <p className="text-xs text-slate-500">{step.date}</p>
                                        </div>
                                        {step.status === "in-progress" && (
                                            <span className="text-xs text-amber-500 font-mono animate-pulse">Processing...</span>
                                        )}
                                        {step.status === "completed" && (
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                            <h4 className="text-sm font-semibold text-white mb-2">Specs</h4>
                            <div className="grid grid-cols-2 gap-4 text-xs text-slate-400">
                                <div>• Zero Sugar / Zero Carb</div>
                                <div>• 10-15% Higher Gross Margin</div>
                                <div>• 4 SKUs (Cucumber, Rosé...)</div>
                                <div>• 12.5% ABV</div>
                            </div>
                        </div>
                    </div>

                    {/* Existing Portfolio Stats */}
                    <div className="space-y-6">
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center text-center h-full">
                            <Target className="w-12 h-12 text-slate-600 mb-4" />
                            <h3 className="text-lg font-medium text-slate-300">Portfolio Analytics</h3>
                            <p className="text-slate-500 text-sm max-w-xs mt-2">
                                Detailed unit economics and velocity reports coming in Q1 2025.
                            </p>
                            <button className="mt-6 px-4 py-2 border border-slate-700 rounded-lg text-sm text-slate-400 hover:bg-slate-800 transition-colors">
                                View Placeholder Report
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
