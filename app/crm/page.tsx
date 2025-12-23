"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, DollarSign, Building, Mail, Phone, Calendar, ArrowUpRight } from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";

const PIPELINE = [
    { name: "Stonebridge Advisory", role: "Lead Advisory", status: "Active", amount: "N/A", stage: "Valuation" },
    { name: "Beacon Capital", role: "VC Prospect", status: "Due Diligence", amount: "$1.5M", stage: "Term Sheet" },
    { name: "Angel Syndicate A", role: "Angel Group", status: "Committed", amount: "$500k", stage: "Closed" },
    { name: "Private Investor B", role: "HNW Individual", status: "Negotiating", amount: "$250k", stage: "Proposal" },
];

const BOARD = [
    { name: "Tony Ricci", role: "Founder/CEO", contact: "tony@gooddogg.com" },
    { name: "Eric Miller", role: "Interim COO", contact: "eric@gooddogg.com" },
    { name: "Investing Member A", role: "Board Seat", contact: "investor@email.com" },
];

export default function CRMPage() {
    return (
        <main className="min-h-screen bg-[#020C1B] text-slate-200 p-8">
            <div className="max-w-7xl mx-auto space-y-8">

                <header className="flex justify-between items-end border-b border-slate-800 pb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                            <Users className="w-8 h-8 text-amber-500" /> Capital & Relationships
                        </h1>
                        <p className="text-slate-400">Investor CRM & Board Management</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="text-right px-4 border-r border-slate-800">
                            <div className="text-sm text-slate-400">Series A Goal</div>
                            <div className="text-2xl font-bold text-white">$3.0M</div>
                        </div>
                        <div className="text-right pl-4">
                            <div className="text-sm text-slate-400">Committed</div>
                            <div className="text-2xl font-bold text-green-400">$1.8M</div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Column: Fundraising Pipeline */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white">Fundraising Pipeline</h2>
                            <button className="text-sm text-amber-500 font-medium hover:underline">+ Add Prospect</button>
                        </div>

                        <div className="bg-[#0A192F] border border-slate-800 rounded-xl overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-slate-900/50 text-slate-400 text-sm font-medium">
                                    <tr>
                                        <th className="p-4">Use Entity / Name</th>
                                        <th className="p-4">Role</th>
                                        <th className="p-4">Stage</th>
                                        <th className="p-4 text-right">Potential</th>
                                        <th className="p-4"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    {PIPELINE.map((deal, i) => (
                                        <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                                            <td className="p-4 font-medium text-white">{deal.name}</td>
                                            <td className="p-4 text-slate-400 text-sm">{deal.role}</td>
                                            <td className="p-4">
                                                <span className={cn(
                                                    "text-xs px-2 py-1 rounded-full border",
                                                    deal.status === "Committed" ? "bg-green-500/10 text-green-400 border-green-500/20" :
                                                        deal.status === "Due Diligence" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                                                            "bg-slate-800 text-slate-400 border-slate-700"
                                                )}>
                                                    {deal.stage}
                                                </span>
                                            </td>
                                            <td className="p-4 text-right font-mono text-slate-300">{deal.amount}</td>
                                            <td className="p-4 text-right">
                                                <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-white transition-opacity">
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Right Column: Board & Partners */}
                    <div className="space-y-8">

                        {/* Board Members */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-white">Board of Directors</h2>
                            <div className="space-y-3">
                                {BOARD.map((member, i) => (
                                    <div key={i} className="bg-slate-900/30 border border-slate-800 p-4 rounded-lg flex items-center justify-between">
                                        <div>
                                            <div className="font-medium text-white">{member.name}</div>
                                            <div className="text-xs text-slate-500">{member.role}</div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="p-2 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-colors">
                                                <Mail className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Partners */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-white">Strategic Partners</h2>
                            <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-4 space-y-4">
                                <PartnerRow name="Total Wine & More" type="Retail" contact="Vendor Portal" status="Active" />
                                <PartnerRow name="ShipCompliant" type="Compliance" contact="Auto-Sync" status="Active" />
                                <PartnerRow name="Proper Beverage" type="Co-Packer" contact="Prod. Manager" status="Active" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}

function PartnerRow({ name, type, contact, status }: any) {
    return (
        <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">
                    <Building className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                    <div className="text-slate-200 font-medium">{name}</div>
                    <div className="text-slate-500 text-xs">{type}</div>
                </div>
            </div>
            <div className="text-right">
                <div className="text-green-400 text-xs font-mono mb-0.5">{status}</div>
                <div className="text-slate-600 text-[10px]">{contact}</div>
            </div>
        </div>
    )
}
