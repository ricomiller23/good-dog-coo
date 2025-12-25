"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutGrid, Globe, Users, Truck, FileText, Heart, Shield } from "lucide-react";

const NAV_ITEMS = [
    { href: "/", label: "Command", icon: LayoutGrid },
    { href: "/strategy", label: "Strategy", icon: Globe },
    { href: "/operations", label: "Ops & Supply", icon: Truck },
    { href: "/crm", label: "Capital", icon: Users },
    { href: "/team", label: "Team", icon: Shield },
    { href: "/resources", label: "Templates", icon: FileText },
    { href: "/mission", label: "Impact", icon: Heart },
];

export function SiteHeader() {
    const pathname = usePathname();

    return (
        <nav className="border-b border-slate-800 bg-[#0A192F]/80 backdrop-blur sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Brand */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center font-bold text-black border border-amber-400/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                        GD
                    </div>
                    <span className="font-bold text-lg tracking-tight text-white hidden md:block">
                        Good Dogg <span className="text-slate-400 font-normal">| Interim COO</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-all",
                                    isActive
                                        ? "text-amber-400 bg-amber-500/10 border border-amber-500/20"
                                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                                )}
                            >
                                <Icon className="w-4 h-4" />
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-3 pl-6 border-l border-slate-800">
                    <div className="text-right hidden lg:block">
                        <div className="text-xs text-slate-400">Eric Miller</div>
                        <div className="text-[10px] text-amber-500 font-mono">OPERATIONAL</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center ring-2 ring-transparent hover:ring-slate-600 transition-all cursor-pointer">
                        <span className="text-xs text-white font-bold">EM</span>
                    </div>
                </div>

            </div>
        </nav>
    );
}
