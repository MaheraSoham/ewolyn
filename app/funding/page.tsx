"use client";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { fundingContent } from "@/lib/content";
import { governmentSchemes } from "@/lib/schemes";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function FundingPage() {
  return (
    <main className="min-h-screen bg-slate-50/50">
      {/* Hero Section - Premium Split Layout */}
      <section className="relative pt-32 pb-24 bg-brand-navy overflow-hidden min-h-[75vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-green/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[120px] animate-float"></div>

        <div className="container-max relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full text-blue-100 text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-2xl">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
              </span>
              Capital Empowerment Portal
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight">
              Funding & <br />
              <span className="text-accent-green underline decoration-white/10 decoration-8 underline-offset-8">Schemes</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-blue-100/70 leading-relaxed max-w-2xl font-medium mb-12">
              We bridge the gap between Indian MSMEs and transformative capital. From low-interest bank loans to high-impact government grants, we handle the strategy and documentation while you focus on growth.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {["₹750Cr+ Facilitated", "95% Application Success", "25+ Active Schemes"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-white/50 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="container-max py-24 relative z-10">
        {/* Timeline Overview - Refined Glass Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2 mb-32"
        >
          <motion.div variants={itemVariants} className="group relative overflow-hidden bg-white rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -z-10 transition-all duration-500 group-hover:w-40 group-hover:h-40"></div>
            <div className="text-4xl mb-6">💸</div>
            <h3 className="text-2xl font-black text-accent-green mb-4">Loan Assistance</h3>
            <p className="text-slate-500 leading-relaxed font-medium mb-8">
              Securing low-interest capital through banking partners and specialized MSME lending institutions. We handle the entire dossier preparation for seamless bank approvals.
            </p>
            <div className="flex items-center gap-3">
              <span className="px-5 py-2 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-200">
                15–25 Day Cycle
              </span>
              <span className="text-xs font-bold text-blue-600/50">End-to-end Support</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group relative overflow-hidden bg-white rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-[5rem] -z-10 transition-all duration-500 group-hover:w-40 group-hover:h-40"></div>
            <div className="text-4xl mb-6">🏆</div>
            <h3 className="text-2xl font-black text-accent-green mb-4">Grant Assistance</h3>
            <p className="text-slate-500 leading-relaxed font-medium mb-8">
              Accessing non-repayable government grants (PMEGP, Startup India Seed Fund, etc.). Our teams specialize in complex eligibility mapping and high-compliance filings.
            </p>
            <div className="flex items-center gap-3">
              <span className="px-5 py-2 bg-accent-green text-brand-navy rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-green-200">
                45–60 Day Cycle
              </span>
              <span className="text-xs font-bold text-accent-green-dark/50">Compliance Expert</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Government Schemes Section - Ultra Premium Grid */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-green font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Central Initiatives</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-6 tracking-tight">
              Powerful <span className="text-accent-green">Government Schemes</span>
            </h2>
            <div className="w-24 h-1.5 bg-accent-green/20 mx-auto rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-accent-green w-1/2 rounded-full animate-scroll-rtl"></div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {governmentSchemes.map((scheme) => (
              <motion.div key={scheme.slug} variants={itemVariants}>
                <Link
                  href={`/services/${scheme.slug}`}
                  className="group relative bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-500 block h-full flex flex-col overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-slate-50/50 rounded-bl-[2.5rem] -z-10 group-hover:bg-accent-green/5 transition-colors"></div>

                  {/* Icon */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${scheme.iconBg} text-white mb-6 shadow-2xl shadow-slate-200 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                    {scheme.icon}
                  </div>

                  {/* Highlights */}
                  <div className="mb-4 space-y-0.5">
                    <span className="text-[9px] font-black text-accent-green uppercase tracking-widest">{scheme.highlightLabel}</span>
                    <div className="text-2xl font-black text-brand-navy tracking-tighter">{scheme.highlight}</div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-accent-green group-hover:text-brand-navy transition-colors mb-2 pr-4 line-clamp-1">{scheme.title}</h3>
                  <p className="text-slate-500 text-[11px] leading-relaxed mb-6 flex-1 font-medium line-clamp-3">{scheme.shortDesc}</p>

                  {/* Bottom Bar */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-0.5 rounded-lg">
                      {scheme.category}
                    </span>
                    <span className="text-[11px] font-black text-brand-navy flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View <span className="text-accent-green">→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* How to Apply - Animated Process */}
        <div className="pt-24 pb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-4">Application Blueprint</h2>
            <p className="text-slate-500 text-lg font-medium">A structured 4-step pathway to securing your capital.</p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-4 relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 w-full h-0.5 bg-slate-100 hidden md:block"></div>

            {[
              { n: "01", t: "Eligibility Audit", d: "We conduct a deep-dive assessment of your business's financial health and sector fit." },
              { n: "02", t: "Dossier Creation", d: "Preparation of bank-grade project reports, projection models, and compliance papers." },
              { n: "03", t: "Portal Submission", d: "Digital filing through authorized portals with active tracking and liaisoning." },
              { n: "04", t: "Escrow & Funding", d: "Disbursement assistance ensuring the capital reaches your business account." }
            ].map((step, idx) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative z-10 group"
              >
                <div className="w-16 h-16 bg-white border-4 border-slate-50 rounded-2xl flex items-center justify-center text-xl font-black text-accent-green shadow-xl mb-8 group-hover:bg-accent-green group-hover:text-white transition-all duration-300">
                  {step.n}
                </div>
                <h3 className="text-xl font-black text-accent-green mb-4">{step.t}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Strip - Powerful Dark Cards */}
        <div className="pt-10 grid gap-8 md:grid-cols-2">
          {fundingContent.bullets.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-12 bg-brand-navy rounded-[3rem] text-white border border-white/5 shadow-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="absolute -right-10 -bottom-10 text-[12rem] text-white/5 font-black group-hover:scale-110 transition-transform">0{i + 1}</div>
              <div className="relative z-10">
                <div className="h-1.5 w-12 bg-accent-green rounded-full mb-8"></div>
                <h3 className="text-2xl font-black mb-6 leading-tight text-white">{b}</h3>
                <p className="text-slate-100 text-base leading-relaxed font-medium">
                  Our funding specialists act as your outsourced finance desk, ensuring zero compliance gaps and optimized subsidy collection timelines.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <CTASection />
    </main>
  );
}
