"use client";

import { Download, FileText, FileSpreadsheet, File } from "lucide-react";

category: "Spreadsheet" | "Document" | "Guide";
size ?: string;
toolUrl ?: string;
}

export default function ResourceCard({ title, description, filename, category, size, toolUrl }: ResourceCardProps) {
    const Icon = category === "Spreadsheet" ? FileSpreadsheet : category === "Document" ? FileText : File;
    const colorClass = category === "Spreadsheet" ? "text-green-400" : category === "Document" ? "text-blue-400" : "text-amber-400";
    const bgClass = category === "Spreadsheet" ? "bg-green-500/10" : category === "Document" ? "bg-blue-500/10" : "bg-amber-500/10";

    return (
        <div className="bg-[#0A192F] border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all group flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg ${bgClass}`}>
                    <Icon className={`w-6 h-6 ${colorClass}`} />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold border border-slate-800 px-2 py-1 rounded">
                    {category}
                </span>
            </div>

            <div className="flex-1">
                <h3 className="font-bold text-slate-200 mb-1 group-hover:text-white transition-colors">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{description}</p>
            </div>

            <div className="mt-auto space-y-2">
                {toolUrl && (
                    <a
                        href={toolUrl}
                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-black rounded-lg text-sm font-bold transition-all shadow-[0_0_10px_rgba(245,158,11,0.1)] hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                    >
                        Launch Tool 🚀
                    </a>
                )}
                <a
                    href={`/templates/${filename}`}
                    download
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors border border-slate-700 hover:border-slate-600"
                >
                    <Download className="w-4 h-4" />
                    Download Template
                </a>
            </div>
            {size && <div className="text-center mt-2 text-[10px] text-slate-600">{size}</div>}
        </div>
    );
}
