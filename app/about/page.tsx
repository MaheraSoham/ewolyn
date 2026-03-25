"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import ImpactStats from "@/components/ImpactStats";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

/* ─── core values with SVG icons ─── */
const coreValues = [
  {
    title: "Transparency",
    desc: "No hidden fees, no false promises — just clear guidance at every step of your business journey.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    color: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    title: "Efficiency",
    desc: "Time is money. Our optimized processes ensure your applications move fast and your business doesn't wait.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
  },
  {
    title: "Integrity",
    desc: "We hold ourselves to the highest ethical standards — your data, trust, and business interests are always protected.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
  },
  {
    title: "Empowerment",
    desc: "We don't just do it for you — we teach you how the ecosystem works, so you grow with confidence.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
  },
];

/* ─── why businesses prefer ewolyn ─── */
const whyChooseUs = [
  {
    title: "Cost-Efficient",
    desc: "Affordable solutions designed to maximize your ROI without straining your budget.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    color: "bg-red-500/15 text-red-400",
  },
  {
    title: "Government Insights",
    desc: "Deep expertise in government schemes, subsidies, and policy frameworks for MSMEs.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    color: "bg-[rgba(55,175,225,0.95)]/20 text-white",
  },
  {
    title: "Flexible Help",
    desc: "Adaptable support that scales with your business needs — on your terms.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    color: "bg-[rgba(55,175,225,0.95)]/20 text-white",
  },
  {
    title: "Tailored Fixes",
    desc: "Custom solutions crafted specifically for your unique business challenges.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1 2 2 0 110-4 1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
    color: "bg-red-500/15 text-red-400",
  },
  {
    title: "Expert Team",
    desc: "Experienced professionals across finance, legal, and strategy domains.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    color: "bg-[rgba(55,175,225,0.95)]/20 text-white",
  },
  {
    title: "Quick Results",
    desc: "Streamlined processes deliver faster turnarounds so you can act swiftly.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    color: "bg-primary/15 text-white",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-32 pb-24 hero-navy-gradient text-white overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute top-0 right-0 w-full h-full opacity-15 bg-[url('/consulting_team_premium.png')] bg-cover bg-center mix-blend-overlay" />
        {/* Decorative blurs */}
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-[-5%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        {/* Floating decorative icons */}
        <div className="absolute top-28 right-[12%] w-14 h-14 bg-primary/10 rounded-xl rotate-12 flex items-center justify-center text-primary/30 animate-float">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <div className="absolute top-48 left-[8%] w-12 h-12 bg-blue-500/10 rounded-lg -rotate-6 flex items-center justify-center text-blue-400/30 animate-float" style={{ animationDelay: "1s" }}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/15 backdrop-blur-sm rounded-full text-sm font-bold mb-8 border border-primary/25"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="text-white">About Ewolyn</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
            >
              The Bridge Between <br />
              <span className="text-primary">Ideas &amp; Capital</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 max-w-xl leading-relaxed mb-10"
            >
              At Ewolyn, we don't just provide consulting; we engineer growth pathways for the next generation of Indian entrepreneurs.
            </motion.p>
            {/* Hero mini stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-4 max-w-lg"
            >
              {[
                { value: "10+", label: "Years Expertise" },
                { value: "20,000+", label: "Lives Impacted" },
                { value: "₹500Cr+", label: "Funding Enabled" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-center">
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-white/70 uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ OUR JOURNEY ═══════════════ */}
      <section className="py-24 bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
                <Image
                  src="/consulting_team_premium.png"
                  alt="Our Team"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              {/* Floating stat badge */}
              <div className="absolute -bottom-6 -right-6 bg-[rgba(55,175,225,0.95)] p-6 rounded-2xl shadow-2xl text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">10+</p>
                    <p className="text-xs text-white/80 uppercase tracking-wider">Years Combined Expertise</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.span variants={fadeUp} custom={0} className="inline-block text-primary font-bold text-xs uppercase tracking-widest mb-2">Our Origin</motion.span>
                <motion.h2 variants={fadeUp} custom={1} className="text-4xl font-bold text-slate-900 leading-tight">
                  Born to Solve the <br />MSME Transparency Gap
                </motion.h2>
              </div>
              <motion.p variants={fadeUp} custom={2} className="text-lg text-slate-600 leading-relaxed">
                Ewolyn was founded on a simple realization: Indian MSMEs are the backbone of the economy, yet they face the most hurdles in compliance and funding access.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-slate-500 leading-relaxed">
                We bridge this gap by providing high-touch, end-to-end consulting that transforms complex government schemes and banking requirements into clear, actionable roadmaps. Our goal is to make every eligible business "Funding Ready."
              </motion.p>
              <motion.div variants={fadeUp} custom={4} className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { icon: <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, val: "20,000+", label: "Lives Impacted" },
                  { icon: <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, val: "₹500Cr+", label: "Funding Enabled" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">{s.icon}</div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">{s.val}</p>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">{s.label}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ VISION & MISSION ═══════════════ */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-primary font-bold text-xs uppercase tracking-widest mb-2"
            >
              What Drives Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900"
            >
              Vision &amp; Mission
            </motion.h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To accelerate the growth of 1 Million Indian entrepreneurs by simplifying government compliance and unlocking democratic access to capital through technology and expertise.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[rgba(55,175,225,0.95)] p-10 rounded-3xl shadow-lg border border-white/5 group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white leading-relaxed">
                  To become India's most trusted partner for MSME growth, creating an ecosystem where "Made in India" businesses launch effortlessly and scale globally.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CORE VALUES ═══════════════ */}
      <section className="py-24 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-xs uppercase tracking-widest mb-2">Our Ethics</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, i) => (
              <motion.div
                key={val.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-slate-100 hover:border-primary/20 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${val.color}`}>
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ EWOLYN'S APPROACH ═══════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-xs uppercase tracking-widest mb-2">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Ewolyn&apos;s <span className="text-primary">Approach</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Hear First, Solve Next", desc: "We listen before we act — understanding your real challenges drives every recommendation.", icon: "👂" },
              { title: "Custom Plans, No Copies", desc: "Every strategy is built from scratch for your specific business context.", icon: "📐" },
              { title: "Practical Steps, True Solutions", desc: "No fluff or theory — actionable roadmaps you can implement immediately.", icon: "✅" },
              { title: "You Win, We Win", desc: "Our success is measured entirely by your growth and satisfaction.", icon: "🤝" },
              { title: "Clear Paths, Always", desc: "Full transparency at every stage — no hidden costs, no surprises.", icon: "🔍" },
              { title: "Shared Journey, No Passing Off", desc: "We stay with you end-to-end — no handoffs, no disappearing acts.", icon: "🚀" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group p-8 rounded-3xl bg-white hover:shadow-xl hover:-translate-y-2 border border-slate-100 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY BUSINESSES PREFER EWOLYN ═══════════════ */}
      <section className="py-24 hero-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-xs uppercase tracking-widest mb-2">Our Strengths</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Businesses Prefer <span className="text-primary">Ewolyn?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${item.color}`}>
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ IMAGE + QUOTE ═══════════════ */}
      <section className="py-24 bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.span variants={fadeUp} custom={0} className="inline-block text-primary font-bold text-xs uppercase tracking-widest">Our Commitment</motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-4xl font-bold text-slate-900 leading-tight">
                Building a Stronger <br />
                <span className="text-primary">MSME Ecosystem</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-slate-600 leading-relaxed">
                We believe every Indian entrepreneur deserves the same access to resources as large corporations. Through our technology-driven approach and deep regulatory expertise, we level the playing field.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="bg-slate-50 rounded-2xl p-6 border-l-4 border-primary">
                <p className="text-slate-700 italic leading-relaxed mb-3">
                  "Our vision is simple — to make every MSME in India not just survive, but thrive with the right funding, compliance, and growth strategy."
                </p>
                <p className="text-sm text-primary font-bold">— Team Ewolyn</p>
              </motion.div>
              <motion.div variants={fadeUp} custom={4}>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-green-500/20">
                  Get a Free Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/business_vision_growth.png"
                  alt="Vision & Growth"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ IMPACT STATS ═══════════════ */}
      <div className="-mb-24 relative z-20">
        <ImpactStats />
      </div>

      {/* ═══════════════ CTA ═══════════════ */}
      <div className="pt-24">
        <CTASection />
      </div>
    </main>
  );
}
