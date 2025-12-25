"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, RefreshCw, AlertTriangle, Target } from "lucide-react";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import { motion } from "framer-motion";

export default function UnitEconomicsTool() {
    const [data, setData] = useState({
        retailPrice: 4.00,
        wholesalePrice: 2.40,
        costAlcohol: 0.30,
        costCan: 0.12,
        costFlavor: 0.10,
        costCopack: 0.12,
        costPackaging: 0.05
    });

    // Calculate Metrics
    const totalCOGS = data.costAlcohol + data.costCan + data.costFlavor + data.costCopack + data.costPackaging;
    const grossProfit = data.wholesalePrice - totalCOGS;
    const marginPercent = ((grossProfit / data.wholesalePrice) * 100).toFixed(1);
    const targetMargin = 35.0;
    const isHealthy = parseFloat(marginPercent) >= targetMargin;

    const handleChange = (field: string, value: string) => {
        setData({ ...data, [field]: parseFloat(value) || 0 });
    };

    return (
        <main className="min-h-screen bg-[#020C1B] text-slate-200 font-inter p-6">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <Link href="/resources" className="text-slate-400 hover:text-white flex items-center gap-2 text-sm">
                        <ArrowLeft className="w-4 h-4" /> Back to Toolkit
                    </Link>
                    <h1 className="text-2xl font-bold text-white">Unit Economics Calculator</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Input Section */}
                    <div className="space-y-6">
                        <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-6 space-y-4">
                            <h3 className="font-bold text-white mb-4 border-b border-slate-700 pb-2">Pricing Structure</h3>
                            <InputRow label="Retail Price (MSRP)" field="retailPrice" value={data.retailPrice} onChange={handleChange} />
                            <InputRow label="Wholesale Price (Distributor)" field="wholesalePrice" value={data.wholesalePrice} onChange={handleChange} highlight />
                        </div>

                        <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-6 space-y-4">
                            <h3 className="font-bold text-white mb-4 border-b border-slate-700 pb-2">COGS Breakdown (Per Unit)</h3>
                            <InputRow label="Base Alcohol" field="costAlcohol" value={data.costAlcohol} onChange={handleChange} />
                            <InputRow label="Aluminum Can" field="costCan" value={data.costCan} onChange={handleChange} />
                            <InputRow label="Flavoring/Ingredients" field="costFlavor" value={data.costFlavor} onChange={handleChange} />
                            <InputRow label="Co-Packing Fee" field="costCopack" value={data.costCopack} onChange={handleChange} />
                            <InputRow label="Packaging/Labels" field="costPackaging" value={data.costPackaging} onChange={handleChange} />
                        </div>
                    </div>

                    {/* Output Section */}
                    <div className="space-y-6">
                        <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-6 relative overflow-hidden">
                            <h3 className="text-slate-400 text-sm font-medium mb-2">Gross Margin</h3>
                            <div className="flex items-end gap-3 mb-4">
                                <span className={`text-5xl font-bold ${isHealthy ? "text-green-400" : "text-amber-500"}`}>
                                    {marginPercent}%
                                </span>
                                <span className="text-slate-500 mb-2">Target: {targetMargin}%</span>
                            </div>

                            {/* Visual Bar */}
                            <div className="h-4 bg-slate-800 rounded-full overflow-hidden mb-2 relative">
                                {/* Target Line */}
                                <div className="absolute top-0 bottom-0 w-0.5 bg-white/30 z-10 border-l border-dashed border-white" style={{ left: `${targetMargin}%` }}></div>

                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.min(parseFloat(marginPercent), 100)}%` }}
                                    className={`h-full ${isHealthy ? "bg-green-500" : "bg-amber-500"}`}
                                />
                            </div>
                            {!isHealthy && (
                                <p className="text-xs text-amber-400 mt-2 flex items-center gap-1.5">
                                    <AlertTriangle className="w-3 h-3" /> margin is below survival threshold
                                </p>
                            )}
                        </div>

                        <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-6">
                            <h3 className="text-slate-400 text-sm font-medium mb-4">Profitability Analysis</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-400">Total COGS</span>
                                    <span className="text-white font-mono">{formatCurrency(totalCOGS)}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-400">Gross Profit per Unit</span>
                                    <span className={`font-mono font-bold ${grossProfit > 0 ? "text-green-400" : "text-red-400"}`}>
                                        {formatCurrency(grossProfit)}
                                    </span>
                                </div>
                                <div className="border-t border-slate-700 my-2 pt-2"></div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-400">Break-even Volume (to cover $24k burn)</span>
                                    <span className="text-white font-mono font-bold">
                                        {grossProfit > 0 ? Math.ceil(24000 / grossProfit).toLocaleString() : "∞"} units
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-indigo-900/20 to-slate-900 border border-indigo-500/20 rounded-xl p-6">
                            <h4 className="flex items-center gap-2 text-indigo-300 font-bold mb-2">
                                <Target className="w-4 h-4" /> Optimization Targets
                            </h4>
                            <ul className="text-sm text-slate-400 space-y-2 list-disc pl-4">
                                <li>Reduce <strong>Aluminum Can</strong> cost by 15% (Bulk buy?)</li>
                                <li>Negotiate <strong>Co-Packing Fee</strong> down to $0.10</li>
                                <li>Increase <strong>Initial Order</strong> size to lower unit cost</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}

function InputRow({ label, field, value, onChange, highlight }: any) {
    return (
        <div className="flex justify-between items-center">
            <label className={`text-sm ${highlight ? "text-white font-medium" : "text-slate-400"}`}>{label}</label>
            <div className="relative">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500 text-xs">$</span>
                <input
                    type="number"
                    step="0.01"
                    value={value}
                    onChange={(e) => onChange(field, e.target.value)}
                    className="w-24 bg-slate-900 border border-slate-700 rounded-lg py-1.5 pl-5 pr-2 text-right text-sm text-white focus:border-amber-500 focus:outline-none transition-colors"
                />
            </div>
        </div>
    )
}
