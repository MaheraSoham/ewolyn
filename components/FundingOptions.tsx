"use client";
import { motion } from "framer-motion";
import { usePopup } from "./PopupContext";

/* ─── Detailed card data ──────────────────────────────────── */
const detailedSchemes = [
  {
    slug: "pm-mudra-yojana",
    name: "MUDRA",
    full: "Micro Units Development & Refinancing Agency",
    range: "₹50K – ₹10L",
    color: "#22c55e",
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
    color: "#22c55e",
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
    color: "#22c55e",
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
  const { openEligibilityPopup } = usePopup();

  return (
    <section className="bg-[rgba(55,175,225,0.95)] py-16">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white mb-2">COMPARE &amp; CHOOSE</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Find Your Perfect Funding Match
          </h2>
          <p className="mt-3 text-sm text-slate-100 max-w-md mx-auto">
            Compare government schemes side-by-side to make an informed decision
          </p>
        </div>

        {/* Tab Buttons removed — Detailed View only */}

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/15">
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
                      <span className="text-xs font-black uppercase tracking-widest bg-white/20 rounded-full px-3 py-1 mb-3 inline-block">
                        {s.badge}
                      </span>
                    )}
                    <h3 className="text-xl font-black leading-tight">{s.name}</h3>
                    <p className="text-xs opacity-90 mt-0.5 leading-tight">{s.full}</p>
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
                          <span className="font-bold text-[#1B4F8C] text-right">{value}</span>
                        </div>
                      ))}
                    </div>

                    <hr className="border-slate-100" />

                    {/* Eligibility */}
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Eligibility</p>
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
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Best For</p>
                      <p className="text-xs text-slate-600 font-medium italic leading-relaxed">
                        &ldquo;{s.bestFor}&rdquo;
                      </p>
                    </div>

                    {/* Success Rate */}
                    <div className="flex items-center justify-between mt-auto">
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400">Success Rate</p>
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
        </div>

        {/* Confused CTA Bar */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#37afe1] to-[#142338] p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl border border-white/10">
          <div>
            <h3 className="text-lg font-black text-white">Confused About Which Scheme to Choose?</h3>
            <p className="text-xs text-white/80 mt-1">Our experts will analyze your business and recommend the best funding option</p>
          </div>
          <button
            onClick={() => openEligibilityPopup()}
            className="inline-flex items-center gap-2 rounded-lg bg-white text-primary px-6 py-3 text-sm font-bold hover:bg-[#1B4F8C] hover:text-white transition-all shrink-0"
          >
            Get Expert Recommendation
          </button>
        </div>
      </div>
    </section>
  );
}
