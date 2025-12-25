"use client";

import { useState } from "react";
import { ArrowLeft, Copy, Check, Clock, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function StandupTool() {
    const [data, setData] = useState({
        yesterday_wins: "",
        today_priorities: "",
        blockers: "",
        cash_update: ""
    });
    const [copied, setCopied] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const generateReport = () => {
        return `
*COO Daily Standup - ${new Date().toLocaleDateString()}*

💰 *Cash Update:* ${data.cash_update || "N/A"}

🏆 *Yesterday's Wins:*
${data.yesterday_wins}

🎯 *Today's Priorities:*
${data.today_priorities}

⛔ *Blockers/Red Flags:*
${data.blockers || "None"}
    `.trim();
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generateReport());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="min-h-screen bg-[#020C1B] text-slate-200 font-inter p-6">
            <div className="max-w-2xl mx-auto space-y-6">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <Link href="/resources" className="text-slate-400 hover:text-white flex items-center gap-2 text-sm">
                        <ArrowLeft className="w-4 h-4" /> Back to Toolkit
                    </Link>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Clock className="w-4 h-4" /> 15 Min Limit
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2 font-outfit">Daily Standup</h1>
                    <p className="text-slate-400">Keep it short, sharp, and actionable.</p>
                </div>

                <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-6 space-y-6">

                    {/* Cash Section */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                            <span className="p-1.5 bg-green-500/10 text-green-400 rounded-md"><AlertCircle className="w-4 h-4" /></span>
                            Critical Numbers (Cash/Sales)
                        </label>
                        <textarea
                            name="cash_update"
                            value={data.cash_update}
                            onChange={handleChange}
                            placeholder="Cash balance: $45k... Revenue yesterday: $3k..."
                            className="w-full h-20 bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-amber-500 resize-none"
                        />
                    </div>

                    {/* Yesterday Section */}
                    <div>
                        <label className="text-sm font-bold text-white mb-2 block">✅ Yesterday's Wins</label>
                        <textarea
                            name="yesterday_wins"
                            value={data.yesterday_wins}
                            onChange={handleChange}
                            placeholder="- Secured cleaner deal&#10;- Shipped 500 cases"
                            className="w-full h-24 bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-amber-500 resize-none"
                        />
                    </div>

                    {/* Today Section */}
                    <div>
                        <label className="text-sm font-bold text-white mb-2 block">🎯 Today's Priorities</label>
                        <textarea
                            name="today_priorities"
                            value={data.today_priorities}
                            onChange={handleChange}
                            placeholder="- Call aluminum supplier&#10;- Review Q1 roadmap"
                            className="w-full h-24 bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-amber-500 resize-none"
                        />
                    </div>

                    {/* Blockers Section */}
                    <div>
                        <label className="text-sm font-bold text-white mb-2 block text-red-400">⛔ Blockers / Red Flags</label>
                        <textarea
                            name="blockers"
                            value={data.blockers}
                            onChange={handleChange}
                            placeholder="Waiting on legal review..."
                            className="w-full h-20 bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-red-500 resize-none"
                        />
                    </div>

                </div>

                {/* Action Bar */}
                <div className="flex gap-4">
                    <button
                        onClick={copyToClipboard}
                        className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                    >
                        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        {copied ? "Copied to Clipboard!" : "Copy Report for Slack"}
                    </button>
                </div>

            </div>
        </main>
    );
}
