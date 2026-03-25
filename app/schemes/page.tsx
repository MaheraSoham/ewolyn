"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FadeIn,
  SlideUp,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  ButtonHover,
} from "../../components/ui/AnimationWrappers";
import { governmentSchemes } from "../../lib/schemes";

/* ─── category metadata ─── */
const categories = [
  "All",
  "Loan",
  "Subsidy",
  "Grant",
  "Certification",
  "Registration",
  "Tax Benefit",
  "Recognition",
  "Export Benefit",
  "Equity",
] as const;

const categoryMeta: Record<string, { color: string; icon: JSX.Element; accent: string }> = {
  Loan: {
    accent: "border-blue-400",
    color: "bg-blue-100 text-blue-700 border-blue-200",
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  Subsidy: {
    accent: "border-emerald-400",
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
  },
  Grant: {
    accent: "border-amber-400",
    color: "bg-amber-100 text-amber-700 border-amber-200",
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>,
  },
  Certification: {
    accent: "border-purple-400",
    color: "bg-purple-100 text-purple-700 border-purple-200",
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
  },
  Registration: {
    accent: "border-cyan-400",
    color: "bg-cyan-100 text-cyan-700 border-cyan-200",
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  },
  "Tax Benefit": {
    accent: "border-rose-400",
    color: "bg-rose-100 text-rose-700 border-rose-200",
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  },
  Recognition: {
    accent: "border-indigo-400",
    color: "bg-indigo-100 text-indigo-700 border-indigo-200",
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  },
  "Export Benefit": {
    accent: "border-orange-400",
    color: "bg-orange-100 text-orange-700 border-orange-200",
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  Equity: {
    accent: "border-pink-400",
    color: "bg-pink-100 text-pink-700 border-pink-200",
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  },
};

const steps = [
  {
    num: "01",
    title: "Browse Schemes",
    desc: "Filter by category, funding range, or eligibility criteria.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  },
  {
    num: "02",
    title: "Check Eligibility",
    desc: "Review requirements and ensure your business qualifies.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    num: "03",
    title: "Apply with Expert Help",
    desc: "Our team handles documentation and maximizes approval chances.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
];

export default function SchemesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? governmentSchemes : governmentSchemes.filter((s) => s.category === activeCategory);

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-32 pb-24 hero-navy-gradient text-white overflow-hidden">
        {/* Floating SVG icons */}
        <div className="absolute top-20 right-[8%] w-16 h-16 bg-primary/10 rounded-2xl rotate-12 flex items-center justify-center text-primary/30 animate-float">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
        </div>
        <div className="absolute top-40 left-[5%] w-14 h-14 bg-blue-500/10 rounded-xl -rotate-6 flex items-center justify-center text-blue-400/30 animate-float" style={{ animationDelay: "1s" }}>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138c.114.7.39 1.366.806 1.946a3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
        </div>
        <div className="absolute bottom-20 right-[15%] w-12 h-12 bg-amber-500/10 rounded-lg rotate-6 flex items-center justify-center text-amber-400/30 animate-float" style={{ animationDelay: "2s" }}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-[-5%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="container-max relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/15 backdrop-blur-sm rounded-full text-sm font-bold mb-8 border border-primary/25">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                <span className="text-white">50+ Government Schemes Available</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-[1.1]">
                Government <span className="text-primary">Schemes</span>
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-gray-300 mb-6">for MSMEs &amp; Startups</p>
              <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Comprehensive guide to PMEGP, CGTMSE, MUDRA, Startup India and 46+ government schemes. Access
                funding from ₹10K to ₹5Cr with expert guidance.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {[
                  { value: "50+", label: "Schemes", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
                  { value: "₹10K-₹5Cr", label: "Funding Range", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                  { value: "7-90 Days", label: "Process Time", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                  { value: "95%", label: "Success Rate", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                    <div className="text-primary mb-2 flex justify-center">{s.icon}</div>
                    <p className="text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-gray-300 uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="inline-block text-primary font-bold text-xs uppercase tracking-widest mb-2">Simple Process</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How It Works</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
            {steps.map((step) => (
              <SlideUp key={step.num}>
                <div className="text-center relative">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5 relative">
                    {step.icon}
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-xs font-bold rounded-lg flex items-center justify-center shadow-lg shadow-green-500/20">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CATEGORY FILTER + SCHEMES GRID ═══════════════ */}
      <section className="py-20">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${activeCategory === "All" ? "bg-primary text-white shadow-md shadow-green-500/20" : "bg-white text-slate-600 border border-slate-200 hover:border-primary/30 hover:text-primary"}`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              All Schemes
            </button>
            {categories.slice(1).map((cat) => {
              const meta = categoryMeta[cat];
              return (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${activeCategory === cat ? "bg-primary text-white shadow-md shadow-green-500/20" : "bg-white text-slate-600 border border-slate-200 hover:border-primary/30 hover:text-primary"}`}>
                  {meta?.icon}
                  {cat}
                </button>
              );
            })}
          </div>

          <FadeIn>
            <p className="text-center text-slate-500 mb-12">
              Showing <span className="font-bold text-slate-800">{filtered.length}</span> scheme{filtered.length !== 1 && "s"}
              {activeCategory !== "All" && <> in <span className="font-bold text-primary">{activeCategory}</span></>}
            </p>
          </FadeIn>

          <StaggerContainer key={activeCategory}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((scheme) => {
                const meta = categoryMeta[scheme.category];
                return (
                  <StaggerItem key={scheme.slug}>
                    <ScaleOnHover>
                      <Link href={`/funding/${scheme.slug}`} className={`group block bg-white rounded-2xl border-t-4 ${meta?.accent || "border-slate-300"} border border-slate-200 hover:shadow-xl transition-all duration-300 h-full overflow-hidden hover:-translate-y-1`}>
                        <div className="p-6 flex flex-col h-full relative">
                          <div className="absolute bottom-4 right-4 text-6xl opacity-[0.04] pointer-events-none select-none">{scheme.icon}</div>
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl ${scheme.iconBg} bg-opacity-20 flex items-center justify-center text-2xl shadow-sm`}>{scheme.icon}</div>
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full border flex items-center gap-1 ${meta?.color || "bg-gray-100 text-gray-600 border-gray-200"}`}>
                              {meta?.icon}
                              {scheme.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-snug">{scheme.title}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1 line-clamp-2">{scheme.shortDesc}</p>
                          <div className="bg-slate-50 rounded-xl p-4 mb-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{scheme.highlightLabel}</p>
                                <p className="text-xl font-black text-primary">{scheme.highlight}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Timeline</p>
                                <p className="text-sm font-bold text-slate-700 flex items-center gap-1 justify-end">
                                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                  {scheme.timeline}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                            <div className="flex items-center gap-2 text-xs text-slate-400">
                              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                              <span className="font-medium">Verified Scheme</span>
                            </div>
                            <span className="text-primary text-sm font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                              Explore
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </ScaleOnHover>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════ HELP CTA ═══════════════ */}
      <section className="py-20 hero-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container-max relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="w-16 h-16 mx-auto bg-primary/15 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Help Choosing the <span className="text-primary">Right Scheme?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                Our experts will analyze your business profile and recommend the best government scheme for your specific needs — completely free.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <ButtonHover><Link href="/contact" className="btn-hero-green">Get Free Consultation →</Link></ButtonHover>
                <ButtonHover>
                  <a href="tel:18005710607" className="btn-hero-outline">
                    <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    Call Now: 1800-571-0607
                  </a>
                </ButtonHover>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
