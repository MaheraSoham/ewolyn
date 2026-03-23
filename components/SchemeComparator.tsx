"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Data ─────────────────────────────────────────────── */
const compareSchemes = [
    {
        slug: "pm-mudra-yojana",
        name: "MUDRA",
        full: "Pradhan Mantri Mudra Yojana & Refinancing Agency",
        range: "₹50K – ₹10L",
        color: "#f97316",       // orange
        badge: "Most Popular",
        interest: "8–12%",
        processing: "Quick process",
        education: "Not Required",
        collateral: "No liability",
        eligibility: ["Age: 18+ years", "Education: Not Required", "Type: Non-farm sector"],
        bestFor: "Small businesses and shops needing working capital",
        successRate: 91,
        // Quick-compare only
        keyBenefit: "No collateral required",
        timeline: "7–15 days",
    },
    {
        slug: "startup-india",
        name: "Startup India",
        full: "Startup India Seed Fund Scheme",
        range: "₹20L – ₹50L",
        color: "#3b82f6",       // blue
        badge: "Tech Focused",
        interest: "Up to ₹20L Grant",
        processing: "Detailed review",
        education: "Not Required",
        collateral: "Equity/Grant",
        eligibility: ["Age: Any", "Education: Not Required", "Type: Innovative Startups"],
        bestFor: "Tech startups and innovation-driven businesses",
        successRate: 75,
        keyBenefit: "Tax exemptions + grants",
        timeline: "45–60 days",
    },
    {
        slug: "stand-up-india",
        name: "Stand-Up India",
        full: "Stand-Up India Scheme",
        range: "₹10L – ₹1Cr",
        color: "#22c55e",       // green
        badge: "SC/ST & Women",
        interest: "Special benefits",
        processing: "Priority process",
        education: "Flexible",
        collateral: "Base Rate + 3%",
        eligibility: ["Age: 21+ years", "Education: Not Required", "Type: Diverse India Projects"],
        bestFor: "Women, SC/ST entrepreneurs starting new ventures",
        successRate: 78,
        keyBenefit: "₹10L–₹1Cr for SC/ST & women",
        timeline: "15–25 days",
    },
    {
        slug: "pmegp",
        name: "Digital Services",
        full: "Technology & Digital Transformation",
        range: "Custom Plans",
        color: "#ef4444",       // red
        badge: "IT Focused",
        interest: "ROI Focused",
        processing: "Quick start",
        education: "Not Required",
        collateral: "N/A",
        eligibility: ["Age: Any", "Education: Not Required", "Type: All Businesses"],
        bestFor: "Businesses looking to grow online presence and sales",
        successRate: 95,
        keyBenefit: "Digital presence & growth",
        timeline: "Quick start",
    },
];

/* ─── Quick Compare Table ───────────────────────────────── */
function QuickCompare() {
    const rows = [
        { label: "Loan Range", key: "range" },
        { label: "Interest", key: "interest" },
        { label: "Processing", key: "processing" },
        { label: "Education", key: "education" },
        { label: "Collateral", key: "collateral" },
    ] as const;

    return (
        <motion.div
            key="quick"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="overflow-x-auto"
        >
            <table className="w-full text-sm">
                <thead>
                    <tr>
                        <th className="text-left text-slate-500 font-semibold pb-4 pr-6 text-xs uppercase tracking-wider w-32">
                            Feature
                        </th>
                        {compareSchemes.map((s) => (
                            <th key={s.slug} className="pb-4 px-3 text-center min-w-[160px]">
                                <div
                                    className="inline-block rounded-2xl px-4 py-2 text-white font-black text-sm"
                                    style={{ background: s.color }}
                                >
                                    {s.name}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {rows.map(({ label, key }) => (
                        <tr key={key} className="hover:bg-slate-50 transition-colors">
                            <td className="py-3 pr-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                {label}
                            </td>
                            {compareSchemes.map((s) => (
                                <td key={s.slug} className="py-3 px-3 text-center font-bold text-[#1B4F8C] text-sm">
                                    {s[key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* CTA row */}
            <div className="grid gap-4 mt-8" style={{ gridTemplateColumns: `160px repeat(${compareSchemes.length}, 1fr)` }}>
                <div />
                {compareSchemes.map((s) => (
                    <div key={s.slug} className="px-3">
                        <Link
                            href={`/services/${s.slug}`}
                            className="block w-full text-center rounded-xl py-2.5 text-sm font-black text-white transition-opacity hover:opacity-90"
                            style={{ background: s.color }}
                        >
                            Check Eligibility
                        </Link>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

/* ─── Detailed View Cards ───────────────────────────────── */
function DetailedView() {
    return (
        <motion.div
            key="detailed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
            {compareSchemes.map((s) => (
                <motion.div
                    key={s.slug}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col"
                >
                    {/* Card Header */}
                    <div className="p-5 text-white" style={{ background: s.color }}>
                        {s.badge && (
                            <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 rounded-full px-3 py-1 mb-3 inline-block">
                                {s.badge}
                            </span>
                        )}
                        <h3 className="text-xl font-black leading-tight">{s.name}</h3>
                      <p className="text-[11px] opacity-90 mt-0.5 leading-tight">{s.full}</p>
                        <p className="text-2xl font-black mt-3">{s.range}</p>
                    </div>

                    {/* Card Body */}
                    <div className="bg-white flex-1 p-5 flex flex-col gap-4">
                        {/* Stats */}
                        <div className="space-y-2">
                            {[
                                { label: "Scheme Feature", value: s.collateral },
                                { label: "Interest", value: s.interest },
                                { label: "Processing", value: s.processing },
                                { label: "Education", value: s.education },
                            ].map(({ label, value }) => (
                                <div key={label} className="flex justify-between items-center text-xs">
                                    <span className="text-slate-400 font-semibold uppercase tracking-wider">{label}</span>
                                    <span className="font-bold text-[#1B4F8C] text-right">{value}</span>
                                </div>
                            ))}
                        </div>

                        <hr className="border-slate-100" />

                        {/* Eligibility */}
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Eligibility</p>
                            <ul className="space-y-1">
                                {s.eligibility.map((e) => (
                                    <li key={e} className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.color }} />
                                        {e}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Best For */}
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Best For</p>
                            <p className="text-xs text-slate-600 font-medium italic leading-relaxed">
                                &ldquo;{s.bestFor}&rdquo;
                            </p>
                        </div>

                        {/* Success Rate */}
                        <div className="flex items-center justify-between mt-auto">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Success Rate</p>
                            <p className="text-2xl font-black" style={{ color: s.color }}>
                                {s.successRate}%
                            </p>
                        </div>

                        {/* CTA */}
                        <Link
                            href={`/services/${s.slug}`}
                            className="block w-full text-center rounded-xl py-2.5 text-sm font-black text-white transition-opacity hover:opacity-90 mt-1"
                            style={{ background: s.color }}
                        >
                            Check Eligibility
                        </Link>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}

/* ─── Main Component ────────────────────────────────────── */
export default function SchemeComparator() {
    const [view, setView] = useState<"quick" | "detailed">("quick");

    return (
        <section className="py-20" style={{ background: "rgba(115, 150, 121, 0.92)" }}>
            <div className="container-max">
                {/* Header */}
                <div className="text-center mb-10">
                    {/* Toggle pill */}
                    <div className="inline-flex items-center gap-1 mb-8 rounded-full p-1 text-sm font-bold"
                        style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)" }}>
                        <button
                            onClick={() => setView("quick")}
                            className={`px-5 py-2 rounded-full transition-all duration-300 ${view === "quick"
                                    ? "bg-white text-[#1B4F8C] shadow"
                                    : "text-white/80 hover:text-white"
                                }`}
                        >
                            Quick Compare
                        </button>
                        <button
                            onClick={() => setView("detailed")}
                            className={`px-5 py-2 rounded-full transition-all duration-300 ${view === "detailed"
                                    ? "bg-[#f97316] text-white shadow"
                                    : "text-white/80 hover:text-white"
                                }`}
                        >
                            Detailed View
                        </button>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                        Find Your Perfect Funding Match
                    </h2>
                    <p className="text-slate-400 text-sm max-w-md mx-auto">
                        Compare government schemes side-by-side to make an informed decision
                    </p>
                </div>

                {/* Content — swaps between views */}
                <div className="bg-white/[0.04] rounded-3xl p-6 md:p-8 border border-white/10">
                    <AnimatePresence mode="wait">
                        {view === "quick" ? <QuickCompare /> : <DetailedView />}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
