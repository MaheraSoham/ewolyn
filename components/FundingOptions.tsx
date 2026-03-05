"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePopup } from "./PopupContext";

/* ─── Detailed card data ──────────────────────────────────── */
const detailedSchemes = [
  {
    slug: "pm-mudra-yojana",
    name: "MUDRA",
    full: "Micro Units Development & Refinancing Agency",
    range: "₹50K – ₹10L",
    color: "#f97316",
    badge: "Most Popular",
    interest: "8–12%",
    processing: "Quick process",
    education: "Not Required",
    collateral: "No Subsidy",
    eligibility: ["Age: 18+ years", "Education: Not Required", "Type: Non-farm sector"],
    bestFor: "Small businesses and shops needing working capital",
    successRate: 91,
  },
  {
    slug: "startup-india",
    name: "Startup India",
    full: "Startup India Seed Fund Scheme",
    range: "₹20L – ₹50L",
    color: "#3b82f6",
    badge: "Tech Focused",
    interest: "Equity/Debt",
    processing: "Detailed review",
    education: "Not Required",
    collateral: "Up to ₹20L Grant",
    eligibility: ["Age: Any", "Education: Not Required", "Type: Innovative Startups"],
    bestFor: "Tech startups and innovative businesses",
    successRate: 75,
  },
  {
    slug: "stand-up-india",
    name: "Stand-Up India",
    full: "Stand Up India Scheme",
    range: "₹10L – ₹1Cr",
    color: "#22c55e",
    badge: "SC/ST & Women",
    interest: "Base Rate + 3%",
    processing: "Priority process",
    education: "Not Required",
    collateral: "Special Benefits",
    eligibility: ["Age: 18+ years", "Education: Not Required", "Type: Greenfield Projects"],
    bestFor: "Women, SC/ST entrepreneurs starting new ventures",
    successRate: 78,
  },
  {
    slug: "pmegp",
    name: "Digital Services",
    full: "Business Digital Transformation",
    range: "Custom Plans",
    color: "#ef4444",
    badge: "IT Focused",
    interest: "N/A",
    processing: "Quick start",
    education: "Not Required",
    collateral: "ROI Focused",
    eligibility: ["Age: Any", "Education: Not Required", "Type: All Businesses"],
    bestFor: "Businesses looking to grow online presence and sales",
    successRate: 95,
  },
];

const comparisonData = [
  {
    scheme: "MUDRA",
    subtitle: "MICRO UNITS DEVELOPMENT & REFINANCE AGENCY",
    amount: "₹50K - ₹10L",
    benefit: "NO SUBSIDY",
    interest: "8-12%",
    process: "Quick\nprocess",
    collateral: true,
    success: "91%",
  },
  {
    scheme: "Startup India",
    subtitle: "STARTUP INDIA SEED FUND SCHEME",
    amount: "₹20L - ₹50L",
    benefit: "UP TO ₹20L GRANT",
    interest: "Equity/Debt",
    process: "Detailed\nreview",
    collateral: true,
    success: "75%",
  },
  {
    scheme: "Stand-Up India",
    subtitle: "STAND UP INDIA SCHEME",
    amount: "₹10L - ₹1Cr",
    benefit: "SPECIAL BENEFITS",
    interest: "Base Rate + 3%",
    process: "Priority\nprocess",
    collateral: false,
    success: "78%",
  },
  {
    scheme: "Digital Services",
    subtitle: "BUSINESS DIGITAL TRANSFORMATION",
    amount: "Custom Plans",
    benefit: "ROI FOCUSED",
    interest: "N/A",
    process: "Quick\nstart",
    collateral: true,
    success: "95%",
  },
];

export default function FundingOptions() {
  const [activeTab, setActiveTab] = useState<"compare" | "analyze">("compare");
  const { openEligibilityPopup } = usePopup();

  return (
    <section className="bg-[#0a1628] py-16">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400 mb-2">COMPARE & CHOOSE</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Find Your Perfect Funding Match
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-md mx-auto">
            Compare government schemes side-by-side to make an informed decision
          </p>
        </div>

        {/* Tab Buttons Container */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center bg-white p-1.5 rounded-full shadow-lg">
            <button
              onClick={() => setActiveTab("compare")}
              className={`px-8 py-3 rounded-full text-sm font-black transition-all ${activeTab === "compare"
                  ? "bg-[#f47c20] text-white shadow-md shadow-orange-500/30"
                  : "bg-transparent text-slate-500 hover:text-slate-800"
                }`}
            >
              Quick Compare
            </button>
            <button
              onClick={() => setActiveTab("analyze")}
              className={`px-8 py-3 rounded-full text-sm font-black transition-all ${activeTab === "analyze"
                  ? "bg-[#f47c20] text-white shadow-md shadow-orange-500/30"
                  : "bg-transparent text-slate-500 hover:text-slate-800"
                }`}
            >
              Detailed View
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">

        {/* ── Detailed View Cards ── */}
        {activeTab === "analyze" && (
          <motion.div
            key="detailed"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {detailedSchemes.map((s) => (
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
                      { label: "Subsidy/Grant", value: s.collateral },
                      { label: "Interest", value: s.interest },
                      { label: "Processing", value: s.processing },
                      { label: "Collateral", value: s.education },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center text-xs">
                        <span className="text-slate-400 font-semibold uppercase tracking-wider">{label}</span>
                        <span className="font-bold text-[#0a1628] text-right">{value}</span>
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
                  <button
                    onClick={() => openEligibilityPopup(s.name)}
                    className="block w-full text-center rounded-xl py-2.5 text-sm font-black text-white transition-opacity hover:opacity-90 mt-1"
                    style={{ background: s.color }}
                  >
                    Check Eligibility
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ── Quick Compare Table ── */}
        {activeTab === "compare" && (
        <motion.div
          key="compare"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="bg-white rounded-[2rem] shadow-2xl overflow-hidden"
        >
          <div className="overflow-x-auto w-full p-4 lg:p-10">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="text-left">
                  <th className="py-4 text-xs font-black text-slate-400 uppercase tracking-widest pl-6">
                    SCHEME
                  </th>
                  <th className="px-4 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-center">
                    ₹ AMOUNT
                  </th>
                  <th className="px-4 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-center">
                    ⚡ BENEFIT
                  </th>
                  <th className="px-4 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-center">
                    ⓘ INTEREST
                  </th>
                  <th className="px-4 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-center">
                    PROCESS
                  </th>
                  <th className="px-4 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-center">
                    COLLATERAL
                  </th>
                  <th className="px-4 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-center">
                    SUCCESS
                  </th>
                  <th className="px-4 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-center pr-6">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-slate-100/60 hover:bg-slate-50/50 transition-colors"
                  >
                    {/* Scheme & Subtitle */}
                    <td className="py-8 pl-6 max-w-[200px]">
                      <h4 className="font-black text-lg text-[#0a1628] leading-tight mb-1">
                        {row.scheme}
                      </h4>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                        {row.subtitle}
                      </p>
                    </td>

                    {/* Amount */}
                    <td className="px-4 py-8 text-center align-middle">
                      <span className="font-black text-lg text-[#f47c20]">
                        {row.amount}
                      </span>
                    </td>

                    {/* Benefit Shape */}
                    <td className="px-4 py-8 text-center align-middle">
                      <div className="inline-flex justify-center items-center rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md bg-green-50/80 border border-green-100 px-4 py-2">
                        <span className="text-[10px] font-black text-green-600 tracking-wider text-center leading-tight">
                          {row.benefit.includes(" ") ? (
                            <>
                              {row.benefit.split(" ")[0]} <br />{" "}
                              {row.benefit.split(" ").slice(1).join(" ")}
                            </>
                          ) : (
                            row.benefit
                          )}
                        </span>
                      </div>
                    </td>

                    {/* Interest */}
                    <td className="px-4 py-8 text-center align-middle">
                      <span className="font-black text-[#0a1628] text-base">
                        {row.interest}
                      </span>
                    </td>

                    {/* Process */}
                    <td className="px-4 py-8 align-middle">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="w-4 h-4 text-slate-300 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-sm font-black text-slate-500 text-left leading-tight">
                          {row.process.split("\n")[0]} <br />
                          {row.process.split("\n")[1]}
                        </span>
                      </div>
                    </td>

                    {/* Collateral */}
                    <td className="px-4 py-8 text-center align-middle">
                      {row.collateral ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-500">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-500">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      )}
                    </td>

                    {/* Success */}
                    <td className="px-4 py-8 text-center align-middle">
                      <span className="font-black text-xl text-[#0a1628]">
                        {row.success}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-4 py-8 text-center pr-6 align-middle">
                      <button
                        onClick={() => openEligibilityPopup(row.scheme)}
                        className="inline-flex items-center justify-center rounded-lg bg-[#f47c20] px-5 py-2.5 text-xs font-black text-white hover:bg-[#e06b16] transition-colors shadow-lg shadow-orange-500/20"
                      >
                        DETAILS
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        )}

        </AnimatePresence>

        {/* Confused CTA Bar */}
        <div className="mt-10 rounded-2xl bg-white/[0.04] border border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-black text-white">Confused About Which Scheme to Choose?</h3>
            <p className="text-xs text-slate-400 mt-1">Our experts will analyze your business and recommend the best funding option</p>
          </div>
          <button
            onClick={() => openEligibilityPopup()}
            className="inline-flex items-center gap-2 rounded-lg bg-accent-green text-[#0a1628] px-6 py-3 text-sm font-bold hover:bg-white transition-all shrink-0"
          >
            Get Expert Recommendation
          </button>
        </div>
      </div>
    </section>
  );
}
