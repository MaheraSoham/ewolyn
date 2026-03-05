"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// ── Replace VIDEO_ID_1 / VIDEO_ID_2 / VIDEO_ID_3 with real YouTube video IDs ──
const videos = [
  {
    videoId: "VIDEO_ID_1",           // e.g. "dQw4w9WgXcQ"
    name: "Rajesh Kumar",
    role: "FOUNDER & CEO",
    result: "₹45L Funding Secured",
  },
  {
    videoId: "VIDEO_ID_2",
    name: "Priya Sharma",
    role: "MANAGING DIRECTOR",
    result: "₹1.2Cr Loan + 3 Certifications",
  },
  {
    videoId: "VIDEO_ID_3",
    name: "Amit Patel",
    role: "CO-FOUNDER",
    result: "₹85L @ 8.5% Interest",
  },
];

const bottomStats = [
  { value: "₹103Cr+", label: "TOTAL FUNDED" },
  { value: "85%", label: "SUCCESS RATE" },
  { value: "500+", label: "BUSINESSES" },
  { value: "24/7", label: "SUPPORT" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1B4F8C] to-[#0f172a] opacity-95" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-max relative z-10">
        {/* ── Heading ── */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Real Businesses,{" "}
            <span className="gradient-text-light">Real Results</span>
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm text-slate-300">
            Discover how we&apos;ve helped businesses like yours secure funding
            and achieve their goals
          </p>
        </div>

        {/* ── YouTube Video Cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {videos.map((v) => (
            <motion.div
              key={v.name}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-xl flex flex-col transition-all duration-300"
            >
              {/* ── Video Embed (16:9) ── */}
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.videoId}?rel=0&modestbranding=1`}
                  title={`Review by ${v.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* ── Card Footer ── */}
              <div className="flex items-center gap-3 px-4 py-3 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1B4F8C] to-[#2eb85c] flex items-center justify-center text-white text-xs font-black shrink-0">
                  {v.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-black text-white truncate">{v.name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 truncate">
                    {v.role}
                  </p>
                </div>
                <span className="text-[10px] font-black text-accent-green bg-accent-green/10 border border-accent-green/20 rounded-full px-2.5 py-1 shrink-0">
                  {v.result}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom Stats Bar ── */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {bottomStats.map((s) => (
            <div
              key={s.label}
              className="text-center rounded-xl bg-white/5 border border-white/10 py-4 px-3"
            >
              <p className="text-2xl font-black text-white">{s.value}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── View All Link ── */}
        <div className="mt-8 text-center">
          <Link
            href="/success-stories"
            className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-[#1B4F8C] transition-all text-sm"
          >
            View All Success Stories
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
