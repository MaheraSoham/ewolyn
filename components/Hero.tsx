"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { usePopup } from "./PopupContext";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const trustChips = [
  "PMEGP Subsidies",
  "CGTMSE Guarantee",
  "Expert Support",
  "Fast Processing",
];

const heroStats = [
  { icon: "₹", label: "Loan Range", value: "₹10L–₹5Cr" },
  { icon: "⏱", label: "Approval Time", value: "7–45 Days" },
  { icon: "🌐", label: "Coverage", value: "Pan India" },
];

export default function Hero() {
  const { openEligibilityPopup } = usePopup();
  const [heroForm, setHeroForm] = useState({ name: "", phone: "" });
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHeroSubmitting(true);
    const msg = `Hello Ewolyn! I want to check my eligibility.\n*Name:* ${heroForm.name}\n*Phone:* ${heroForm.phone}\n\nPlease contact me.`;
    await new Promise((r) => setTimeout(r, 700));
    setHeroSubmitting(false);
    setHeroSubmitted(true);
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section
        className="relative min-h-[88vh] flex items-center overflow-hidden pt-28 pb-16"
        style={{
          background: "linear-gradient(135deg, #0d2f57 0%, #1B4F8C 45%, #2eb85c 100%)",
          backgroundSize: "200% 200%",
          animation: "gradientShift 12s ease infinite",
        }}
      >
        {/* Radial glow overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(46,184,92,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Grid dots pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container-max relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* ── LEFT CONTENT ── */}
            <div className="flex flex-col">
              {/* Live notification badge */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full px-4 py-2.5 shadow-lg"
                style={{
                  background: "rgba(46,184,92,0.15)",
                  border: "1px solid rgba(46,184,92,0.40)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: "#2eb85c" }} />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ background: "#2eb85c" }} />
                </span>
                <span className="text-xs font-bold" style={{ color: "#a7f3d0" }}>
                  TechVision Solutions got ₹45L PMEGP approval ✓
                </span>
              </motion.div>

              {/* Company name */}
              <motion.p
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-[11px] font-black uppercase tracking-[0.35em] mb-3"
                style={{ color: "rgba(167,243,208,0.70)" }}
              >
                EWOLYN PRIVATE LIMITED
              </motion.p>

              {/* Main Heading */}
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-4xl font-black leading-tight text-white md:text-5xl lg:text-[3.5rem]"
              >
                Your Success Partner<br />
                <span
                  className="leading-tight"
                  style={{
                    background: "linear-gradient(135deg, #4cd17a 0%, #a7f3d0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  MSME Funding Made Easy
                </span>
              </motion.h1>

              {/* CTA Buttons */}
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <button
                  onClick={() => openEligibilityPopup()}
                  className="btn-shimmer"
                >
                  Check Eligibility in 30 Sec
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <Link
                  href="/schemes"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm hover:bg-white hover:text-[#1B4F8C] transition-all duration-300"
                >
                  View All Schemes
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>

              {/* Description */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-6"
              >
                <p className="text-base font-medium" style={{ color: "rgba(167,243,208,0.85)" }}>
                  Government schemes, company registration & business certifications.
                </p>
                <p className="mt-1 text-sm italic" style={{ color: "rgba(255,255,255,0.50)" }}>
                  Expert guidance • Fast approvals • Transparent process
                </p>
              </motion.div>

              {/* Trust chips */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-7 flex flex-wrap gap-2.5"
              >
                {trustChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold"
                    style={{
                      background: "rgba(46,184,92,0.12)",
                      border: "1px solid rgba(46,184,92,0.35)",
                      color: "#a7f3d0",
                    }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {chip}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT – Two-Pane Eligibility Card ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div
                className="relative rounded-[2rem] overflow-hidden shadow-2xl"
                style={{ border: "1px solid rgba(46,184,92,0.30)" }}
              >
                <div className="flex min-h-[500px]">

                  {/* ── Left Panel – Contact/Info ── */}
                  <div className="w-[42%] relative overflow-hidden flex flex-col justify-between p-7" style={{ background: "linear-gradient(160deg, #1B4F8C 0%, #0d2f57 60%, #0a1f3d 100%)" }}>
                    {/* Background photo */}
                    <div className="absolute inset-0">
                      <Image src="/popup_hero_banner.png" alt="Ewolyn Team" fill className="object-cover opacity-20" />
                    </div>
                    {/* Dot grid */}
                    <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "18px 18px" }} />
                    {/* Glow blobs */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#2eb85c]/25 rounded-full blur-[80px]" />
                    <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/15 rounded-full blur-[70px]" />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 border border-white/20 mb-4 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-[#2eb85c] animate-pulse" />
                        <span className="text-white/90 text-[11px] font-bold">Ewolyn · Active Now</span>
                      </div>
                      <h3 className="text-xl font-black text-white mb-1">Talk to an Expert</h3>
                      <p className="text-white/50 text-xs mb-6">Free consultation for your business</p>

                      <div className="space-y-4">
                        {[
                          { icon: "📍", label: "Location", value: "Nehru Nagar, Ahmedabad – 380015" },
                          { icon: "📞", label: "Phone", value: "+91 98765 43210" },
                          { icon: "✉️", label: "Email", value: "info@ewolyn.co.in" },
                        ].map((item) => (
                          <div key={item.label} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-sm shrink-0 backdrop-blur-sm">
                              {item.icon}
                            </div>
                            <div>
                              <p className="text-white/40 text-[9px] uppercase tracking-wider font-bold">{item.label}</p>
                              <p className="text-white text-xs font-semibold mt-0.5 leading-tight">{item.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Trust badges */}
                    <div className="relative z-10 mt-6 flex flex-wrap gap-1.5">
                      {["500+ Clients", "Pan India", "10+ Years"].map((badge) => (
                        <span key={badge} className="text-[10px] text-white/70 bg-white/10 border border-white/15 rounded-full px-2.5 py-1 font-medium">
                          ✓ {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ── Right Panel – Form ── */}
                  <div className="w-[58%] bg-white p-7 flex flex-col justify-center">
                    <span className="inline-block text-xs font-bold text-[#2eb85c] bg-[#2eb85c]/10 rounded-full px-3 py-1 mb-3 w-fit">Free Consultation</span>
                    <h3 className="text-xl font-black text-[#0a1628] mb-1">Check Your Eligibility</h3>
                    <p className="text-xs text-slate-400 mb-5">Our expert will contact you within 2 hours.</p>

                    {!heroSubmitted ? (
                      <form onSubmit={handleHeroSubmit} className="space-y-3.5">
                        <div>
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Full Name <span className="text-red-400">*</span></label>
                          <div className="relative">
                            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                            <input type="text" required placeholder="Enter your name"
                              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 font-medium focus:outline-none focus:border-[#2eb85c] focus:ring-2 focus:ring-[#2eb85c]/20 transition-all placeholder:text-slate-300"
                              value={heroForm.name} onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })} />
                          </div>
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Phone Number <span className="text-red-400">*</span></label>
                          <div className="relative">
                            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <input type="tel" required placeholder="10-digit mobile"
                              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 font-medium focus:outline-none focus:border-[#2eb85c] focus:ring-2 focus:ring-[#2eb85c]/20 transition-all placeholder:text-slate-300"
                              value={heroForm.phone} onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })} />
                          </div>
                        </div>
                        <button type="submit" disabled={heroSubmitting}
                          className="w-full py-3.5 rounded-xl text-white font-black text-sm tracking-wide transition-all hover:shadow-lg hover:shadow-[#2eb85c]/30 disabled:opacity-70 mt-1"
                          style={{ background: "linear-gradient(135deg, #2eb85c 0%, #1da045 100%)", boxShadow: "0 4px 16px rgba(46,184,92,0.30)" }}>
                          {heroSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                          ) : "Get Free Consultation →"}
                        </button>
                        <p className="text-center text-[10px] text-slate-400 flex items-center justify-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                          100% Private. No spam guaranteed.
                        </p>
                      </form>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center py-8">
                        <div className="w-16 h-16 bg-[#2eb85c]/10 rounded-full flex items-center justify-center mb-4 border border-[#2eb85c]/30">
                          <svg className="w-8 h-8 text-[#2eb85c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h4 className="text-lg font-black text-[#0a1628] mb-1">You&apos;re Connected!</h4>
                        <p className="text-slate-500 text-sm">Opening WhatsApp to connect you with our experts.</p>
                      </div>
                    )}

                    {/* Trust row */}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex justify-around text-center">
                      {[["1000+", "Funded"], ["95%", "Success"], ["24hr", "Response"]].map(([val, label]) => (
                        <div key={label}>
                          <p className="text-sm font-black text-[#1B4F8C]">{val}</p>
                          <p className="text-[10px] text-slate-400 uppercase tracking-wider">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ── STATS BAR ── */}
      <section
        style={{ background: "linear-gradient(135deg, #0d2f57 0%, #1B4F8C 100%)" }}
        className="pb-10 pt-0"
      >
        <div className="container-max">
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(46,184,92,0.08)",
              border: "1px solid rgba(46,184,92,0.20)",
            }}
          >
            <div className="grid grid-cols-3 gap-6 text-center">
              {heroStats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 justify-center">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-lg font-black shrink-0"
                    style={{ background: "rgba(46,184,92,0.18)", color: "#4cd17a" }}
                  >
                    {s.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-lg font-black text-white">{s.value}</p>
                    <p className="text-xs font-semibold" style={{ color: "#4cd17a" }}>{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strip */}
          <div className="mt-8 text-center">
            <p className="text-sm font-semibold" style={{ color: "rgba(167,243,208,0.70)" }}>
              MSME Funding and Business Registration Services
            </p>
            <p className="text-[10px] uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
              EWOLYN PRIVATE LIMITED
            </p>
            <div
              className="mt-4 inline-flex items-center gap-0 rounded-full overflow-hidden"
              style={{ border: "1px solid rgba(46,184,92,0.30)" }}
            >
              <span
                className="px-5 py-2 text-sm font-bold text-white"
                style={{ background: "rgba(13,47,87,0.80)" }}
              >
                Real Success Stories
              </span>
              <span
                className="px-5 py-2 text-sm font-black"
                style={{ background: "#2eb85c", color: "#0d2f57" }}
              >
                1000+ MSMEs funded successfully
              </span>
            </div>
            <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>↓ Scroll to explore</p>
          </div>
        </div>
      </section>
    </>
  );
}
