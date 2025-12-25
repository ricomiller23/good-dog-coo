"use client";

import { Package, Truck, Boxes, Users, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function OperationalMetrics() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Boxes className="w-5 h-5 text-blue-500" /> Operational Pulse
                </h2>
                <span className="text-xs text-slate-500">Last updated: 2 hours ago</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Production Status */}
                <Card
                    title="Production (Co-Packer)"
                    icon={Package}
                    status="Attention"
                    statusColor="text-amber-400"
                >
                    <div className="space-y-4">
                        <MetricRow label="Run Scheduled" value="Jan 05" sub="Proper Bev" />
                        <MetricRow label="Batch Size" value="50k Units" sub="Optimization needed" />
                        <MetricRow label="Est. COGS Impact" value="-2%" sub="Target: -15%" accent="negative" />
                    </div>
                </Card>

                {/* Supply Chain / Inventory */}
                <Card
                    title="Supply Chain"
                    icon={Truck}
                    status="Critical"
                    statusColor="text-red-400"
                >
                    <div className="space-y-4">
                        <MetricRow label="Aluminum Cans" value="Low Stock" sub="Renegotiate contract" accent="critical" />
                        <MetricRow label="Flavor/Extracts" value="OK" sub="Next order: Feb 1" />
                        <MetricRow label="Shrink/Waste" value="4.2%" sub="Target: < 2%" accent="negative" />
                    </div>
                </Card>

                {/* Distribution */}
                <Card
                    title="Distribution Velocity"
                    icon={Users}
                    status="Stable"
                    statusColor="text-green-400"
                >
                    <div className="space-y-4">
                        <MetricRow label="Active Accounts" value="2,140" sub="+45 this week" accent="positive" />
                        <MetricRow label="Velocity (Case/Pt)" value="1.2" sub="Target: 3.0" />
                        <MetricRow label="Out of Stock" value="12 Locs" sub="Down from 18" accent="positive" />
                    </div>
                </Card>

            </div>
        </div>
    )
}

function Card({ title, icon: Icon, children, status, statusColor }: any) {
    return (
        <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-800/50 rounded-lg">
                        <Icon className="w-5 h-5 text-slate-300" />
                    </div>
                    <h3 className="font-bold text-slate-200">{title}</h3>
                </div>
                <span className={cn("text-xs font-medium px-2 py-1 rounded bg-slate-800", statusColor)}>
                    {status}
                </span>
            </div>
            {children}
        </div>
    )
}

function MetricRow({ label, value, sub, accent }: any) {
    return (
        <div className="flex justify-between items-start pt-3 border-t border-slate-800/50 first:border-0 first:pt-0">
            <div className="flex flex-col">
                <span className="text-sm text-slate-400">{label}</span>
                <span className="text-[10px] text-slate-500">{sub}</span>
            </div>
            <div className={cn(
                "font-mono font-medium text-right",
                accent === "positive" ? "text-green-400" :
                    accent === "negative" ? "text-amber-400" :
                        accent === "critical" ? "text-red-400" : "text-white"
            )}>
                {value}
            </div>
        </div>
    )
}
