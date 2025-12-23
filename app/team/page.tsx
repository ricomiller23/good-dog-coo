"use client";

import { motion } from "framer-motion";
import { Users, UserPlus, Briefcase, Shield, ChevronRight } from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";

const ORG_CHART = [
    {
        role: "Interim COO",
        name: "Eric Miller",
        status: "Active",
        type: "Leadership",
        reports: [
            { role: "Operations Manager", name: "TBD - Hiring", status: "Open", salary: "$130k", type: "Direct" },
            { role: "VP of Sales", name: "TBD", status: "Planned Q2", salary: "$150k", type: "Cross-Func" },
            { role: "Wine Brand Mgr", name: "TBD", status: "Planned Q2", salary: "$120k", type: "Cross-Func" },
        ]
    },
];

const HIRING_PIPELINE = [
    { role: "Operations Manager", stage: "Interviewing", candidates: 3, notes: "Final round w/ Tony next week." },
    { role: "Social Media Lead", stage: "Sourcing", candidates: 12, notes: "Focus on TikTok/Reels exp." },
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-[#020C1B] text-slate-200 p-8">
            <div className="max-w-7xl mx-auto space-y-12">

                <header className="flex justify-between items-end border-b border-slate-800 pb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                            <Shield className="w-8 h-8 text-indigo-500" /> Team Command
                        </h1>
                        <p className="text-slate-400">Org Structure & Talent Acquisition</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="text-right">
                            <div className="text-sm text-slate-400">Open Roles</div>
                            <div className="text-2xl font-bold text-white">3</div>
                        </div>
                        <div className="text-right pl-6 border-l border-slate-800">
                            <div className="text-sm text-slate-400">Headcount Budget</div>
                            <div className="text-2xl font-bold text-indigo-400">$400k</div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Org Structure */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <Users className="w-5 h-5 text-indigo-500" /> Organizational Structure
                        </h2>

                        {/* Tree Visual */}
                        <div className="space-y-4">
                            {ORG_CHART.map((leader, i) => (
                                <div key={i} className="space-y-4">
                                    {/* Leader Node */}
                                    <div className="bg-indigo-900/20 border border-indigo-500/30 p-4 rounded-xl inline-flex items-center gap-4 min-w-[300px]">
                                        <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-white border-2 border-indigo-400 text-lg">
                                            {leader.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">{leader.role}</div>
                                            <div className="text-sm text-indigo-300">{leader.name}</div>
                                        </div>
                                    </div>

                                    {/* Connection Line */}
                                    <div className="border-l-2 border-slate-700 ml-6 pl-8 space-y-4 pt-4">
                                        {leader.reports.map((report, r) => (
                                            <div key={r} className="relative">
                                                {/* Horizontal Connector */}
                                                <div className="absolute -left-8 top-1/2 w-8 h-0.5 bg-slate-700"></div>

                                                <div className={cn(
                                                    "p-4 rounded-xl border flex items-center justify-between",
                                                    report.status === "Open" ? "bg-slate-900/50 border-amber-500/30 border-dashed" :
                                                        "bg-[#0A192F] border-slate-700"
                                                )}>
                                                    <div className="flex items-center gap-4">
                                                        <div className={cn(
                                                            "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold",
                                                            report.status === "Open" ? "bg-amber-500/20 text-amber-500" : "bg-slate-800 text-slate-400"
                                                        )}>
                                                            {report.status === "Open" ? "?" : report.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <div className={cn("font-bold", report.status === "Open" ? "text-amber-400" : "text-white")}>
                                                                {report.role}
                                                            </div>
                                                            <div className="text-xs text-slate-500 flex items-center gap-2">
                                                                {report.type} &middot; {report.salary}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {report.status === "Open" && (
                                                        <button className="text-xs bg-amber-500 text-black px-3 py-1.5 rounded font-bold hover:bg-amber-400 transition-colors">
                                                            Prioritize
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hiring Pipeline */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-indigo-500" /> Active Pipeline
                            </h2>
                            <button className="text-sm text-indigo-400 hover:underline flex items-center gap-1">
                                View ATS <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-1 divide-y divide-slate-800/50">
                            {HIRING_PIPELINE.map((role, i) => (
                                <div key={i} className="p-4 hover:bg-slate-800/30 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-white">{role.role}</h3>
                                        <span className="text-xs bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/20">
                                            {role.stage}
                                        </span>
                                    </div>
                                    <div className="text-sm text-slate-400 mb-3">{role.notes}</div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-500 flex items-center gap-1">
                                            <UserPlus className="w-3 h-3" /> {role.candidates} Candidates
                                        </span>
                                        <button className="text-indigo-400 font-medium hover:text-indigo-300">Review</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 p-6 rounded-xl text-center">
                            <h3 className="font-bold text-white mb-2">Ops Manager Role</h3>
                            <p className="text-xs text-slate-300 mb-4">Critical hire for Q1 2025 goals.</p>
                            <div className="flex justify-center gap-2">
                                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors">
                                    View JD
                                </button>
                                <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors border border-slate-700">
                                    Post to LinkedIn
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
