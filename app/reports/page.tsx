"use client";

import { motion } from "framer-motion";
import { FileText, Download, Calendar, ArrowRight, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";

const REPORTS = [
    {
        title: "December 2024 Board Pack",
        type: "Executive Summary",
        date: "Dec 20, 2024",
        status: "Ready",
        tags: ["Financials", "Strategy"]
    },
    {
        title: "Q4 Investor Update",
        type: "External",
        date: "Drafting",
        status: "In Progress",
        tags: ["Series A", "Growth"]
    },
    {
        title: "November Operations Review",
        type: "Operational",
        date: "Nov 30, 2024",
        status: "Archived",
        tags: ["Supply Chain", "COGS"]
    },
];

export default function ReportsPage() {
    return (
        <main className="min-h-screen bg-[#020C1B] text-slate-200 p-8">
            <div className="max-w-5xl mx-auto space-y-8">

                <header className="flex justify-between items-end border-b border-slate-800 pb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                            <FileText className="w-8 h-8 text-blue-400" /> Reporting Hub
                        </h1>
                        <p className="text-slate-400">Board Packs & Investor Updates</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium shadow-lg shadow-blue-900/20 transition-all flex items-center gap-2">
                        <BarChart className="w-4 h-4" /> Generate New Report
                    </button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Quick Stats */}
                    <div className="bg-[#0A192F] p-6 rounded-xl border border-slate-800">
                        <div className="text-slate-400 text-sm mb-1">Next Board Meeting</div>
                        <div className="text-xl font-bold text-white">Jan 15, 2025</div>
                        <div className="text-xs text-amber-500 mt-2">Pack Due: Jan 10</div>
                    </div>
                    <div className="bg-[#0A192F] p-6 rounded-xl border border-slate-800">
                        <div className="text-slate-400 text-sm mb-1">Last Update Sent</div>
                        <div className="text-xl font-bold text-white">2 Days Ago</div>
                        <div className="text-xs text-green-400 mt-2">Opened by 85% of Board</div>
                    </div>
                </div>

                <div className="bg-[#0A192F] border border-slate-800 rounded-xl overflow-hidden">
                    <div className="p-6 border-b border-slate-800">
                        <h2 className="text-lg font-bold text-white">Recent Documents</h2>
                    </div>
                    <div className="divide-y divide-slate-800">
                        {REPORTS.map((report, i) => (
                            <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-800/30 transition-colors group">
                                <div className="flex items-start gap-4">
                                    <div className="bg-slate-800 p-3 rounded-lg">
                                        <FileText className="w-6 h-6 text-slate-400 group-hover:text-amber-400 transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{report.title}</h3>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="text-xs text-slate-500">{report.type}</span>
                                            <span className="text-slate-700">&middot;</span>
                                            <span className="text-xs text-slate-500 flex items-center gap-1">
                                                <Calendar className="w-3 h-3" /> {report.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="flex gap-2">
                                        {report.tags.map(tag => (
                                            <span key={tag} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-1 rounded border border-slate-800">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className={cn(
                                        "text-xs px-2 py-1 rounded-full border w-24 text-center",
                                        report.status === "Ready" ? "bg-green-500/10 text-green-400 border-green-500/20" :
                                            report.status === "In Progress" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                                                "bg-slate-800 text-slate-400 border-slate-700"
                                    )}>
                                        {report.status}
                                    </div>
                                    <button className="text-slate-400 hover:text-white transition-colors">
                                        <Download className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-slate-900/50 text-center">
                        <button className="text-sm text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-2 w-full">
                            View All Archives <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

            </div>
        </main>
    );
}
