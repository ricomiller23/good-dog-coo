"use client";

import { motion } from "framer-motion";
import { Truck, Package, RotateCcw, AlertTriangle, CheckCircle2, MapPin } from "lucide-react";
import { cn, formatNumber } from "@/lib/utils";

const COPACKERS = [
    { name: "Proper Beverage", location: "California", status: "Active", capacity: "85%", nextRun: "Jan 15" },
    { name: "CA Juice Packers", location: "California", status: "Active", capacity: "60%", nextRun: "Feb 01" },
    { name: "Big Brands LLC", location: "Texas", status: "Standby", capacity: "100%", nextRun: "On Call" },
];

const INVENTORY = [
    { sku: "Cucumber Lime (Spirits)", stock: 1200, par: 1000, status: "Good" },
    { sku: "Black Cherry (Spirits)", stock: 2100, par: 1000, status: "Good" },
    { sku: "Dragonfruit (Spirits)", stock: 450, par: 800, status: "Low" },
    { sku: "Orange Mango (Spirits)", stock: 850, par: 800, status: "OK" },
];

export default function OperationsPage() {
    return (
        <main className="min-h-screen bg-[#020C1B] text-slate-200 p-8">
            <div className="max-w-7xl mx-auto space-y-8">

                <header className="flex justify-between items-end border-b border-slate-800 pb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                            <Truck className="w-8 h-8 text-blue-500" /> Operations Command
                        </h1>
                        <p className="text-slate-400">Supply Chain, Production & Logistics</p>
                    </div>
                    <div className="flex gap-4 text-right">
                        <div>
                            <div className="text-sm text-slate-400">Total Inventory</div>
                            <div className="text-2xl font-bold text-white">{formatNumber(4600)} Units</div>
                        </div>
                        <div className="border-l border-slate-800 pl-4">
                            <div className="text-sm text-slate-400">DTC Fulfillment</div>
                            <div className="text-2xl font-bold text-green-400">98.5%</div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Co-Packer Network */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-amber-500" /> Co-Packer Network
                        </h2>
                        <div className="space-y-4">
                            {COPACKERS.map((packer, i) => (
                                <div key={i} className="bg-[#0A192F] border border-slate-800 p-5 rounded-xl flex items-center justify-between">
                                    <div>
                                        <h3 className="font-bold text-white">{packer.name}</h3>
                                        <div className="text-sm text-slate-400 flex items-center gap-2">
                                            <span>{packer.location}</span>
                                            <span className="text-slate-600">&middot;</span>
                                            <span>Next Run: {packer.nextRun}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className={cn(
                                            "text-xs px-2 py-1 rounded-full border inline-block mb-1",
                                            packer.status === "Active" ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-slate-700/50 text-slate-400 border-slate-600"
                                        )}>
                                            {packer.status}
                                        </div>
                                        <div className="text-xs text-slate-500">Cap: {packer.capacity}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-blue-900/10 border border-blue-500/20 p-4 rounded-xl flex items-center gap-4">
                            <RotateCcw className="w-6 h-6 text-blue-400" />
                            <div>
                                <h4 className="text-sm font-bold text-blue-300">Dual-Sourcing Strategy Active</h4>
                                <p className="text-xs text-blue-200/60">Redundancy established between CA & TX facilities.</p>
                            </div>
                        </div>
                    </div>

                    {/* Inventory Status */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <Package className="w-5 h-5 text-amber-500" /> Inventory Levels
                        </h2>
                        <div className="bg-[#0A192F] border border-slate-800 rounded-xl overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-slate-900/50 text-slate-400 text-sm font-medium">
                                    <tr>
                                        <th className="p-4">SKU</th>
                                        <th className="p-4 text-right">Stock</th>
                                        <th className="p-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    {INVENTORY.map((item, i) => (
                                        <tr key={i} className="hover:bg-slate-800/30">
                                            <td className="p-4 text-slate-200">{item.sku}</td>
                                            <td className="p-4 text-right font-mono text-slate-400">{formatNumber(item.stock)}</td>
                                            <td className="p-4">
                                                <span className={cn(
                                                    "text-xs font-bold",
                                                    item.status === "Good" ? "text-green-400" :
                                                        item.status === "Low" ? "text-red-400 blinking-text" : "text-amber-400" // blinking-text implies we might add animation later or just red
                                                )}>
                                                    {item.status === "Low" ? "LOW STOCK" : item.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-sm font-medium text-slate-300">DTC Compliance (ShipCompliant)</h4>
                                <span className="text-green-400 text-xs flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Synced</span>
                            </div>
                            <div className="flex gap-1 h-2">
                                <div className="w-[80%] bg-green-500/50 rounded-l-full" />
                                <div className="w-[15%] bg-amber-500/50" />
                                <div className="w-[5%] bg-slate-700 rounded-r-full" />
                            </div>
                            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                                <span>42 States Active</span>
                                <span>4 Pending</span>
                                <span>2 Restricted</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
