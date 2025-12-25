"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Save, Download, ArrowLeft, TrendingDown, DollarSign, Calendar } from "lucide-react";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";

interface CashEntry {
    id: string;
    date: string;
    startBalance: number;
    inflows: number;
    outflows: number;
    note: string;
}

const DEFAULT_ENTRIES: CashEntry[] = [
    { id: "1", date: new Date().toISOString().split('T')[0], startBalance: 85000, inflows: 0, outflows: 0, note: "" }
];

export default function CashFlowTool() {
    const [entries, setEntries] = useState<CashEntry[]>([]);
    const [weeklyBurn, setWeeklyBurn] = useState(24000); // Default from plan

    // Load from LocalStorage
    useEffect(() => {
        const saved = localStorage.getItem("goodDogg_cashFlow");
        if (saved) {
            setEntries(JSON.parse(saved));
        } else {
            setEntries(DEFAULT_ENTRIES);
        }
    }, []);

    // Save to LocalStorage
    useEffect(() => {
        if (entries.length > 0) {
            localStorage.setItem("goodDogg_cashFlow", JSON.stringify(entries));
        }
    }, [entries]);

    const addEntry = () => {
        const lastEntry = entries[entries.length - 1];
        const nextDate = new Date(lastEntry.date);
        nextDate.setDate(nextDate.getDate() + 1);

        // Auto-calculate start balance from previous end balance
        const predictedStart = lastEntry.startBalance + lastEntry.inflows - lastEntry.outflows;

        const newEntry: CashEntry = {
            id: Date.now().toString(),
            date: nextDate.toISOString().split('T')[0],
            startBalance: predictedStart,
            inflows: 0,
            outflows: 0,
            note: ""
        };
        setEntries([...entries, newEntry]);
    };

    const updateEntry = (id: string, field: keyof CashEntry, value: any) => {
        setEntries(entries.map(e => e.id === id ? { ...e, [field]: value } : e));
    };

    const deleteEntry = (id: string) => {
        if (entries.length === 1) return;
        setEntries(entries.filter(e => e.id !== id));
    };

    // Metrics
    const currentCash = entries.length > 0
        ? entries[entries.length - 1].startBalance + entries[entries.length - 1].inflows - entries[entries.length - 1].outflows
        : 0;

    const runwayWeeks = (currentCash / weeklyBurn).toFixed(1);
    const isCrisis = parseFloat(runwayWeeks) < 12;

    return (
        <main className="min-h-screen bg-[#020C1B] text-slate-200 font-inter p-6">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <Link href="/resources" className="text-slate-400 hover:text-white flex items-center gap-2 text-sm">
                        <ArrowLeft className="w-4 h-4" /> Back to Toolkit
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-xs text-slate-500">Est. Weekly Burn</p>
                            <input
                                type="number"
                                value={weeklyBurn}
                                onChange={(e) => setWeeklyBurn(Number(e.target.value))}
                                className="bg-transparent text-right text-slate-300 font-mono text-sm border-b border-slate-700 w-24 focus:outline-none focus:border-amber-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-6">
                        <h3 className="text-slate-400 text-sm font-medium">Current Cash</h3>
                        <p className="text-3xl font-bold text-white mt-1">{formatCurrency(currentCash)}</p>
                    </div>
                    <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <TrendingDown className="w-24 h-24 text-red-500" />
                        </div>
                        <h3 className="text-slate-400 text-sm font-medium">Runway</h3>
                        <div className="flex items-baseline gap-2 mt-1">
                            <p className={`text-3xl font-bold ${isCrisis ? "text-red-500" : "text-green-400"}`}>{runwayWeeks}</p>
                            <span className="text-slate-500 text-sm">Weeks</span>
                        </div>
                        {isCrisis && <p className="text-xs text-red-400 mt-2 font-medium animate-pulse">⚠️ SURVIVAL MODE ACTIVATED</p>}
                    </div>
                </div>

                {/* Table */}
                <div className="bg-[#0A192F] border border-slate-800 rounded-xl overflow-hidden">
                    <div className="p-4 border-b border-slate-800 flex justify-between items-center">
                        <h2 className="font-bold text-white flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-amber-500" /> Daily Log
                        </h2>
                        <button onClick={addEntry} className="text-xs bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1">
                            <Plus className="w-3 h-3" /> Add Day
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-[#020C1B] text-slate-400 uppercase text-xs font-semibold">
                                <tr>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Start Balance</th>
                                    <th className="px-4 py-3 text-green-400">Inflows (+)</th>
                                    <th className="px-4 py-3 text-red-400">Outflows (-)</th>
                                    <th className="px-4 py-3">End Balance</th>
                                    <th className="px-4 py-3">Notes</th>
                                    <th className="px-4 py-3 w-10"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/50">
                                {entries.map((entry) => {
                                    const endBalance = entry.startBalance + entry.inflows - entry.outflows;
                                    return (
                                        <tr key={entry.id} className="hover:bg-slate-800/20 transition-colors group">
                                            <td className="px-4 py-2">
                                                <input
                                                    type="date"
                                                    value={entry.date}
                                                    onChange={(e) => updateEntry(entry.id, 'date', e.target.value)}
                                                    className="bg-transparent text-slate-300 focus:text-white focus:outline-none w-32"
                                                />
                                            </td>
                                            <td className="px-4 py-2 font-mono text-slate-400">
                                                <input
                                                    type="number"
                                                    value={entry.startBalance}
                                                    onChange={(e) => updateEntry(entry.id, 'startBalance', parseFloat(e.target.value))}
                                                    className="bg-transparent w-full focus:outline-none focus:text-white"
                                                />
                                            </td>
                                            <td className="px-4 py-2">
                                                <input
                                                    type="number"
                                                    value={entry.inflows}
                                                    onChange={(e) => updateEntry(entry.id, 'inflows', parseFloat(e.target.value))}
                                                    className="bg-transparent w-full text-green-400 focus:outline-none focus:bg-slate-800/50 rounded px-1"
                                                    placeholder="0"
                                                />
                                            </td>
                                            <td className="px-4 py-2">
                                                <input
                                                    type="number"
                                                    value={entry.outflows}
                                                    onChange={(e) => updateEntry(entry.id, 'outflows', parseFloat(e.target.value))}
                                                    className="bg-transparent w-full text-red-400 focus:outline-none focus:bg-slate-800/50 rounded px-1"
                                                    placeholder="0"
                                                />
                                            </td>
                                            <td className="px-4 py-2 font-mono font-medium text-white">
                                                {formatCurrency(endBalance)}
                                            </td>
                                            <td className="px-4 py-2">
                                                <input
                                                    type="text"
                                                    value={entry.note}
                                                    onChange={(e) => updateEntry(entry.id, 'note', e.target.value)}
                                                    className="bg-transparent w-full text-slate-500 focus:text-slate-300 focus:outline-none placeholder:text-slate-700"
                                                    placeholder="Click to add note..."
                                                />
                                            </td>
                                            <td className="px-4 py-2 text-right">
                                                <button
                                                    onClick={() => deleteEntry(entry.id)}
                                                    className="text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </main>
    );
}
