"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, Clock, Calendar, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Daily Content Configuration from the COO Plan
const DAILY_FOCUS = {
    "Monday": {
        theme: "Financial Controls",
        tasks: [
            "Review weekly P&L variance analysis (Actual COGS vs Target)",
            "Supplier negotiation calls (Rotate weekly)",
            "Bridge loan prep / Month-end close prep"
        ],
        color: "from-emerald-500 to-teal-600"
    },
    "Tuesday": {
        theme: "Production & Supply Chain",
        tasks: [
            "Co-packer relationship mgmt (Quality, Schedule)",
            "Inventory mgmt (SKU tracking, Reorder points)",
            "Supplier negotiations (Cans, Ingredients)",
            "Production cost analysis by SKU"
        ],
        color: "from-blue-500 to-indigo-600"
    },
    "Wednesday": {
        theme: "Distribution & Sales",
        tasks: [
            "Distributor velocity reports review",
            "Sales data analysis (High velocity SKUs)",
            "Sales strategy session (80/20 rule)",
            "Future distribution planning"
        ],
        color: "from-violet-500 to-purple-600"
    },
    "Thursday": {
        theme: "Team & Systems",
        tasks: [
            "Team check-ins (Blockers, Training)",
            "Systems implementation (ERP/Inventory)",
            "Hiring pipeline (CFO, Ops Mgr, VP Sales)",
            "Process documentation (SOPs)"
        ],
        color: "from-amber-500 to-orange-600"
    },
    "Friday": {
        theme: "Strategy & Reporting",
        tasks: [
            "Weekly metrics review (Dashboard creation)",
            "CEO sync meeting",
            "Next week planning",
            "Investor/Lender packet prep"
        ],
        color: "from-rose-500 to-pink-600"
    },
    "Saturday": { theme: "Review & Rest", tasks: [], color: "from-slate-500 to-slate-600" },
    "Sunday": { theme: "Review & Rest", tasks: [], color: "from-slate-500 to-slate-600" }
};

const MORNING_ROUTINE = [
    { id: "cash", label: "Review previous day's cash position (Bank Balance)" },
    { id: "payables", label: "Check Pending Payables vs Receivables" },
    { id: "prod", label: "Review Production Schedule" },
    { id: "standup", label: "Quick Team Standup (15m)" },
];

export default function DailyExecution() {
    const [selectedDay, setSelectedDay] = useState<string>("Monday");
    const [completedRoutine, setCompletedRoutine] = useState<string[]>([]);
    const [currentDayName, setCurrentDayName] = useState<string>("Monday");

    useEffect(() => {
        const today = DAYS[new Date().getDay()];
        setCurrentDayName(today);
        setSelectedDay(today === "Saturday" || today === "Sunday" ? "Monday" : today);
    }, []);

    const toggleRoutine = (id: string) => {
        setCompletedRoutine(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const activeFocus = DAILY_FOCUS[selectedDay as keyof typeof DAILY_FOCUS];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Morning Routine Module */}
            <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-6 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-500" /> Morning Routine
                </h3>
                <p className="text-xs text-slate-500 mb-6 uppercase tracking-wider">Required by 9:00 AM</p>

                <div className="space-y-4 flex-1">
                    {MORNING_ROUTINE.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => toggleRoutine(item.id)}
                            className={cn(
                                "flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all border",
                                completedRoutine.includes(item.id)
                                    ? "bg-green-500/10 border-green-500/20"
                                    : "bg-slate-800/30 border-slate-800 hover:border-slate-700"
                            )}
                        >
                            <div className={cn(
                                "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center border transition-colors",
                                completedRoutine.includes(item.id)
                                    ? "bg-green-500 border-green-500 text-black"
                                    : "border-slate-600 text-transparent"
                            )}>
                                <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                            <span className={cn(
                                "text-sm font-medium transition-colors",
                                completedRoutine.includes(item.id) ? "text-green-400 line-through opacity-70" : "text-slate-300"
                            )}>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Daily Focus Module */}
            <div className="lg:col-span-2 bg-[#0A192F] border border-slate-800 rounded-xl overflow-hidden flex flex-col">
                {/* Day Selector */}
                <div className="flex border-b border-slate-800 overflow-x-auto scrollbar-hide">
                    {Object.keys(DAILY_FOCUS).filter(d => d !== 'Saturday' && d !== 'Sunday').map((day) => (
                        <button
                            key={day}
                            onClick={() => setSelectedDay(day)}
                            className={cn(
                                "px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap",
                                selectedDay === day
                                    ? "text-white bg-slate-800/50 border-b-2 border-amber-500"
                                    : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/30"
                            )}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                <div className="p-6 flex-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedDay}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{selectedDay} Priorities</span>
                                    <h2 className="text-2xl font-bold text-white mt-1">{activeFocus.theme}</h2>
                                </div>
                                <div className={cn("w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg", activeFocus.color)}>
                                    <Calendar className="w-6 h-6 text-white" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                {activeFocus.tasks.map((task, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-800/50 hover:border-slate-700 transition-colors group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-amber-400 transition-colors" />
                                        <span className="text-slate-300 group-hover:text-white transition-colors">{task}</span>
                                        <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-slate-500 ml-auto" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

        </div>
    );
}
