"use client";

import { motion } from "framer-motion";
import { Heart, Dog, Handshake, ExternalLink } from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";

export default function MissionPage() {
    return (
        <main className="min-h-screen bg-[#020C1B] text-slate-200 p-8">
            <div className="max-w-6xl mx-auto space-y-12">

                <header className="flex justify-between items-end border-b border-slate-800 pb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                            <Heart className="w-8 h-8 text-pink-500" /> Leverage the Beverage™
                        </h1>
                        <p className="text-slate-400">Social Impact & Mission Tracking</p>
                    </div>
                    <div className="bg-pink-900/20 border border-pink-500/30 px-6 py-3 rounded-xl">
                        <div className="text-xs text-pink-300 uppercase tracking-wider font-semibold">Total Impact to Date</div>
                        <div className="text-2xl font-bold text-white flex items-baseline gap-2">
                            $45,200 <span className="text-sm font-normal text-pink-400">Donated</span>
                        </div>
                    </div>
                </header>

                {/* Impact Hero */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-gradient-to-br from-[#0A192F] to-[#112240] border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-white mb-4">Service Dog Sponsorships</h2>
                            <p className="text-slate-400 mb-8 max-w-lg">
                                Every bottle sold contributes to providing service dogs for children with rare diseases. Our 2025 goal is to sponsor 5 full training scholarships.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2 font-medium">
                                        <span className="text-white">2025 Goal: 5 Dogs</span>
                                        <span className="text-pink-400">2 Sponsored</span>
                                    </div>
                                    <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "40%" }}
                                            transition={{ duration: 1.5 }}
                                            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 mt-8">
                                    <ImpactStat label="Children Helped" value="12" icon={Handshake} />
                                    <ImpactStat label="Upcoming Events" value="3" icon={CalendarIcon} />
                                    <ImpactStat label="Active Partners" value="8" icon={Dog} />
                                </div>
                            </div>
                        </div>

                        {/* Decorative BG */}
                        <Dog className="absolute -bottom-8 -right-8 w-64 h-64 text-slate-800/50 rotate-[-10deg]" />
                    </div>

                    {/* Brand Alignment Card */}
                    <div className="bg-[#0A192F] border border-slate-800 rounded-2xl p-6">
                        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                            <ShieldCheckIcon className="w-5 h-5 text-green-400" /> Brand Integrity
                        </h3>
                        <div className="space-y-4">
                            <IntegrityCheck label="Transparency Report" status="Published" date="Nov '24" />
                            <IntegrityCheck label="Non-Profit Partner Audit" status="Verified" date="Oct '24" />
                            <IntegrityCheck label="Marketing Compliance" status="Pending" date="Review: Jan 15" />
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-800">
                            <div className="text-xs text-slate-500 uppercase tracking-widest mb-3">Partner Spotlight</div>
                            <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold">
                                    PF
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">Pause for Paws</div>
                                    <div className="text-xs text-slate-400">Major Beneficiary</div>
                                </div>
                                <ExternalLink className="w-4 h-4 text-slate-600 ml-auto" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

function ImpactStat({ label, value, icon: Icon }: any) {
    return (
        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50 text-center">
            <Icon className="w-6 h-6 text-pink-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-xs text-slate-400">{label}</div>
        </div>
    )
}

function IntegrityCheck({ label, status, date }: any) {
    return (
        <div className="flex items-center justify-between text-sm">
            <span className="text-slate-300">{label}</span>
            <div className="text-right">
                <div className={cn(
                    "font-medium",
                    status === "Published" || status === "Verified" ? "text-green-400" : "text-amber-400"
                )}>{status}</div>
                <div className="text-[10px] text-slate-600">{date}</div>
            </div>
        </div>
    )
}

// Icons
function CalendarIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
}
function ShieldCheckIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
}
