
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Good Dogg | Executive Command Center",
  description: "COO Operational Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${outfit.variable} antialiased bg-[#020C1B] text-slate-200 font-sans`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
