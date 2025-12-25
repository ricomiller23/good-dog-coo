"use client";

import { motion } from "framer-motion";
import { DollarSign, TrendingDown, TrendingUp, AlertOctagon, Wallet } from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";

export default function FinancialHealth() {
    // Mock Data - In a real app this would come from a context or API
    const metrics = {
        cashOnHand: 85000, // Critical: < $100k
        monthlyBurn: 24000,
        runwayWeeks: 14, // (85k / 24k) * 4.3 roughly. Crisis if < 12 weeks
        cogsPercent: 144, // Target: 85%
        opExPercent: 166, // Target: 60%
        grossMargin: -44, // (1 - 1.44) * 100 roughly
    };

    const isCrisisMode = metrics.runwayWeeks < 12;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-emerald-500" /> Financial Pulse
                </h2>
                {isCrisisMode && (
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold rounded-full animate-pulse">
                        <AlertOctagon className="w-3 h-3" /> SURVIVAL MODE
                    </span>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Cash Runway Card */}
                <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <DollarSign className="w-24 h-24 text-slate-100" />
                    </div>
                    <div className="relative z-10">
                        <p className="text-sm text-slate-400 font-medium mb-1">Cash Runway</p>
                        <div className="flex items-baseline gap-2">
                            <span className={cn(
                                "text-3xl font-bold",
                                metrics.runwayWeeks < 12 ? "text-red-500" : "text-white"
                            )}>{metrics.runwayWeeks} Weeks</span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-800/50 flex justify-between text-xs">
                            <span className="text-slate-500">Cash: <span className="text-slate-300">{formatCurrency(metrics.cashOnHand)}</span></span>
                            <span className="text-slate-500">Burn: <span className="text-red-400">-{formatCurrency(metrics.monthlyBurn)}/mo</span></span>
                        </div>
                    </div>
                </div>

                {/* COGS Analysis Card */}
                <div className="md:col-span-2 bg-[#0A192F] border border-slate-800 rounded-xl p-5">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <p className="text-sm text-slate-400 font-medium">Unit Economics</p>
                            <h3 className="text-lg font-bold text-white mt-1">Cost Structure Analysis</h3>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-slate-500">Target Margin</p>
                            <p className="text-green-400 font-bold">35%</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {/* Revenue Bar (Base) */}
                        <div className="space-y-1.5">
                            <div className="flex justify-between text-xs font-medium">
                                <span className="text-slate-300">Revenue ($1.00)</span>
                                <span className="text-slate-500">Base</span>
                            </div>
                            <div className="h-2 bg-slate-700 rounded-full w-full opacity-50"></div>
                        </div>

                        {/* COGS Bar */}
                        <div className="space-y-1.5">
                            <div className="flex justify-between text-xs font-medium">
                                <span className="text-slate-300">COGS</span>
                                <span className="text-red-400">{metrics.cogsPercent}% of Rev</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full w-full overflow-hidden relative">
                                {/* Target Marker */}
                                <div className="absolute top-0 bottom-0 w-0.5 bg-green-500/50 z-10" style={{ left: '85%' }} title="Target: 85%"></div>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }} // Visualizing full bar as it exceeds 100%
                                    className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full"
                                />
                            </div>
                            <p className="text-[10px] text-red-500 text-right">Losing $0.44 per $1.00 sold</p>
                        </div>

                        {/* OpEx Bar */}
                        <div className="space-y-1.5 pt-2">
                            <div className="flex justify-between text-xs font-medium">
                                <span className="text-slate-300">OpEx</span>
                                <span className="text-amber-400">{metrics.opExPercent}% of Rev</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full w-full overflow-hidden relative">
                                <div className="absolute top-0 bottom-0 w-0.5 bg-green-500/50 z-10" style={{ left: '60%' }} title="Target: 60%"></div>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    className="h-full bg-gradient-to-r from-amber-600 to-amber-500 rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
