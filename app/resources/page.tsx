"use client";

import { motion } from "framer-motion";
import ResourceCard from "@/components/ResourceCard";
import { Search } from "lucide-react";

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-[#020C1B] text-slate-200 font-inter">
            <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-end pb-6 border-b border-slate-800/50 gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl font-bold text-white mb-2 font-outfit">Operational Toolkit</h1>
                        <p className="text-slate-400">
                            Downloadable templates, playbooks, and calculators for <span className="text-amber-500 font-semibold">Immediate Execution</span>.
                        </p>
                    </motion.div>

                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search templates..."
                            className="w-full pl-9 pr-4 py-2 bg-[#0A192F] border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                        />
                    </div>
                </header>

                {/* Section: Start Here */}
                <Section title="🚀 Start Here (Critical Path)">
                    <ResourceCard
                        title="Master Guide & Overview"
                        description="The absolute first thing you should read. Contains the master plan and overview of all tools."
                        filename="00_START_HERE.md"
                        category="Guide"
                    />
                    <ResourceCard
                        title="Quick Start Guide (7 Days)"
                        description="Your day-by-day plan for the first week. Don't think, just execute this."
                        filename="QUICK_START_GUIDE.md"
                        category="Guide"
                    />
                    <ResourceCard
                        title="Crisis Response Playbook"
                        description="6 detailed crisis scenarios with hour-by-hour protocols. Read if runway < 8 weeks."
                        filename="11_crisis_response_playbook.md"
                        category="Guide"
                    />
                </Section>

                {/* Section: Financial Controls */}
                <Section title="💰 Financial Controls">
                    <ResourceCard
                        title="Daily Cash Flow Tracker"
                        description="Track your cash position daily. Calculates exact runway. The most important file you have."
                        filename="01_daily_cash_flow_tracker.csv"
                        category="Spreadsheet"
                        toolUrl="/tools/cash-flow"
                    />
                    <ResourceCard
                        title="Unit Economics Calculator"
                        description="Deep dive into COGS and gross margins by SKU. Identify where you are losing money."
                        filename="02_unit_economics_calculator.csv"
                        category="Spreadsheet"
                        toolUrl="/tools/unit-economics"
                    />
                    <ResourceCard
                        title="Supplier Negotiation Tracker"
                        description="Track your cost reduction efforts. Includes target pricing and term negotiation logs."
                        filename="05_supplier_negotiation_tracker.csv"
                        category="Spreadsheet"
                    />
                    <ResourceCard
                        title="Bridge Loan Lender Tracker"
                        description="Pipeline management for the $500k bridge loan. Track lender contacts and status."
                        filename="04_bridge_loan_lender_tracker.csv"
                        category="Spreadsheet"
                    />
                </Section>

                {/* Section: Operations & Execution */}
                <Section title="⚙️ Operations & Execution">
                    <ResourceCard
                        title="Weekly COO Scorecard"
                        description="40+ KPIs across all functions to track weekly. The pulse of the business."
                        filename="03_weekly_coo_scorecard.csv"
                        category="Spreadsheet"
                    />
                    <ResourceCard
                        title="Production Schedule"
                        description="Manage co-packer runs and quality control checks. Ensure 50k unit capacity."
                        filename="07_production_schedule_template.csv"
                        category="Spreadsheet"
                    />
                    <ResourceCard
                        title="Distribution Velocity Tracker"
                        description="Monitor sales velocity by distributor and account. Identify underperforming SKUs."
                        filename="06_distribution_velocity_tracker.csv"
                        category="Spreadsheet"
                    />
                    <ResourceCard
                        title="Daily Standup Template"
                        description="Framework for the 15-minute daily team sync. Keep everyone aligned."
                        filename="09_daily_standup_template.md"
                        category="Guide"
                        toolUrl="/tools/standup"
                    />
                </Section>

                {/* Section: Growth & Strategy */}
                <Section title="📈 Growth & Strategy">
                    <ResourceCard
                        title="Series A Readiness Checklist"
                        description="60+ validation items investors will look for. Start preparing now."
                        filename="08_series_a_readiness_checklist.csv"
                        category="Spreadsheet"
                    />
                    <ResourceCard
                        title="Wine Line Launch Plan"
                        description="12-week checklist for launching the Wine RTD line. From formulation to shelf."
                        filename="12_wine_line_launch_checklist.csv"
                        category="Spreadsheet"
                    />
                    <ResourceCard
                        title="KPI Dashboard Template"
                        description="High-level dashboard for monthly reporting. Visualizing the turnaround."
                        filename="14_kpi_dashboard_template.csv"
                        category="Spreadsheet"
                    />
                </Section>

            </div>
        </main>
    );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <section>
            <h2 className="text-xl font-bold text-white mb-4 pl-1 border-l-4 border-amber-500">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {children}
            </div>
        </section>
    )
}
