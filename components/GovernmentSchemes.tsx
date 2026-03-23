"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePopup } from "./PopupContext";

const statsRow = [
  { icon: "₹", value: "₹10L-₹5Cr", label: "Funding Range", sub: "Government schemes" },
  { icon: "⏱", value: "7-45 Days", label: "Processing Time", sub: "Scheme dependent" },
  { icon: "✓", value: "85%", label: "CGTMSE Coverage", sub: "Collateral guarantee" },
  { icon: "%", value: "15-35%", label: "PMEGP Subsidy", sub: "Category based" },
];

const schemes = [
  {
    title: "PMEGP",
    full: "Prime Minister Employment Generation Programme",
    loanLabel: "MAX SUBSIDY",
    loanAmount: "35%",
    benefitLabel: "Loan Amount:",
    keyBenefit: "Up to ₹50L",
    type: "SUBSIDY",
    icon: "🏭",
    iconBg: "bg-blue-100",
    href: "/funding/pmegp",
  },
  {
    title: "PM MUDRA Yojana",
    full: "Up to ₹10 Lakh loan without collateral for small businesses",
    loanLabel: "MAX LOAN",
    loanAmount: "₹10L",
    benefitLabel: "Key Benefit:",
    keyBenefit: "No collateral",
    type: "LOAN",
    icon: "💰",
    iconBg: "bg-yellow-100",
    href: "/funding/pm-mudra-yojana",
  },
  {
    title: "CGTMSE",
    full: "Credit guarantee up to ₹5 Crore without third-party guarantee",
    loanLabel: "COVERAGE",
    loanAmount: "₹5Cr",
    benefitLabel: "Key Benefit:",
    keyBenefit: "No collateral",
    type: "LOAN",
    icon: "🛡️",
    iconBg: "bg-blue-50",
    href: "/funding/cgtmse",
  },
  {
    title: "Stand-Up India",
    full: "Bank loans for SC/ST and women entrepreneurs",
    loanLabel: "MAX LOAN",
    loanAmount: "₹1Cr",
    benefitLabel: "Category:",
    keyBenefit: "Special category",
    type: "LOAN",
    icon: "👩‍💼",
    iconBg: "bg-purple-100",
    href: "/funding/stand-up-india",
  },
  {
    title: "NAIF Scheme",
    full: "Affordable financing for agricultural infrastructure with 3% interest subvention",
    loanLabel: "MAX LOAN",
    loanAmount: "₹2Cr",
    benefitLabel: "Key Benefit:",
    keyBenefit: "3% subvention",
    type: "LOAN",
    icon: "🌱",
    iconBg: "bg-emerald-100",
    href: "/funding/naif-scheme",
  },
  {
    title: "Startup India",
    full: "Tax benefits & funding support for DPIIT registered startups",
    loanLabel: "TAX EXEMPTION",
    loanAmount: "80%",
    benefitLabel: "Category:",
    keyBenefit: "DPIIT Recognition",
    type: "RECOGNITION",
    icon: "🚀",
    iconBg: "bg-indigo-100",
    href: "/funding/startup-india",
  },
  {
    title: "GeM Registration",
    full: "Access ₹3L+ Crore government procurement marketplace",
    loanLabel: "MARKET SIZE",
    loanAmount: "₹3L Cr",
    benefitLabel: "Key Benefit:",
    keyBenefit: "Free registration",
    type: "REGISTRATION",
    icon: "🏪",
    iconBg: "bg-red-100",
    href: "/funding/gem-registration",
  },
  {
    title: "NSIC Certification",
    full: "Single point registration for government tenders priority",
    loanLabel: "EMD EXEMPT",
    loanAmount: "100%",
    benefitLabel: "Key Benefit:",
    keyBenefit: "Tender priority",
    type: "CERTIFICATION",
    icon: "📋",
    iconBg: "bg-teal-100",
    href: "/funding/nsic-certification",
  },
];

const trustBadges = [
  "MSME Registered",
  "Pan India Service",
  "Expert Consultants",
  "Transparent Process",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GovernmentSchemes() {
  const { openEligibilityPopup } = usePopup();
  return (
    <>
      {/* Section 1: Dark BG with heading + stat cards */}
      <section className="bg-[rgba(115,150,121,0.92)] py-16">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-white/90 mb-3">Government Schemes We Facilitate</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Helping MSMEs Access{" "}
              <span className="text-[#1B4F8C]">Government Support</span>
            </h2>
            <p className="mt-3 text-sm text-slate-400 max-w-xl mx-auto">
              Expert guidance for PMEGP, CGTMSE, Mudra & other MSME schemes across India
            </p>
          </div>

          {/* 4 Stat Cards — dark navy cards with green icons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {statsRow.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-[#0d1f3c] border border-white/10 p-6 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center text-lg font-bold mx-auto mb-3">
                  {s.icon}
                </div>
                <p className="text-2xl font-black text-white">{s.value}</p>
                <p className="text-xs font-semibold text-white/80 mt-1">{s.label}</p>
                <p className="text-[10px] text-slate-300 italic">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Government Schemes We Support heading */}
          <h3 className="text-center text-xl font-black text-white mb-8">
            Government Schemes We Support
          </h3>
        </div>
      </section>

      {/* Section 2: White BG with scheme detail cards */}
      <section className="bg-white py-12">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {schemes.map((sc) => (
              <motion.div
                key={sc.title}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${sc.iconBg} flex items-center justify-center text-2xl mb-4`}>
                  {sc.icon}
                </div>

                {/* Stat label + big value */}
                <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">
                  {sc.loanLabel}
                </p>
                <p className="text-3xl font-black text-[#1B4F8C] mb-1">{sc.loanAmount}</p>

                {/* Title */}
                <h4 className="text-base font-black text-primary mb-2">{sc.title}</h4>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed flex-grow mb-4">{sc.full}</p>

                {/* Footer: type + view link */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                    {sc.type}
                  </span>
                  <button
                    onClick={() => openEligibilityPopup(sc.title)}
                    className="text-xs font-black text-primary hover:text-[#1B4F8C] transition-colors flex items-center gap-1"
                  >
                    View →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badges Bar */}
          <div className="mt-10 rounded-xl bg-primary/5 border border-primary/20 py-4 px-6">
            <div className="flex flex-wrap justify-center gap-8">
              {trustBadges.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-slate-600">{b}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-slate-400">
              Serving MSMEs across 28+ States in India
            </p>
          </div>

          {/* View More Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center"
          >
            <Link href="/schemes">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold py-3 px-8 rounded-lg hover:bg-primary hover:text-white transition-all cursor-pointer text-sm"
              >
                View More Government Schemes
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
