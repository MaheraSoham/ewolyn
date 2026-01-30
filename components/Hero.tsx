"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import EligibilityCard from "./EligibilityCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 bg-brand-navy overflow-hidden min-h-[85vh] flex items-center">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-20 bg-[url('/consulting_team_premium.png')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy via-brand-navy to-transparent"></div>

      {/* Animated Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent-green/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan/10 rounded-full blur-[150px] animate-float"></div>

      <div className="container-max relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: 7 cols */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Live Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 mb-8 w-fit shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100/70">
                <span className="text-accent-green">TechVision Solutions</span> got ₹45L approval ✓
              </span>
            </motion.div>

            {/* Main Headlines */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black italic tracking-tight text-white/50">
                Humara Support <span className="text-accent-green">Aapki Safalta</span>
              </h2>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1] tracking-tight">
                Get <span className="text-accent-green underline decoration-white/10 decoration-8 underline-offset-8">₹10L to ₹5Cr</span><br />
                MSME Funding
              </h1>
            </motion.div>

            {/* Description Card */}
            <motion.p variants={itemVariants} className="mt-8 text-lg md:text-xl text-blue-100/60 font-medium max-w-xl leading-relaxed">
              We engineer growth pathways for Indian MSMEs by securing government schemes and low-interest banking capital.
            </motion.p>

            {/* Feature Tags */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
              {["48hr Initial Approval", "Zero Collateral Options", "95% Success Rate"].map((f, i) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-white/40 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 whitespace-nowrap">
                  {f}
                </span>
              ))}
            </motion.div>

            {/* Primary Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-5 mt-10">
              <Link href="/funding">
                <motion.span
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-accent-green px-10 py-5 text-sm font-black text-brand-navy rounded-2xl transition-all cursor-pointer uppercase tracking-widest"
                >
                  Apply for Funding →
                </motion.span>
              </Link>
              <Link href="/services">
                <motion.span
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block border-2 border-white/10 px-10 py-5 text-sm font-black text-white rounded-2xl transition-all cursor-pointer uppercase tracking-widest"
                >
                  Explore Services
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: 5 cols (Perfectly sized) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative hidden lg:flex justify-end translate-y-20"
          >
            <div className="relative z-10 w-full max-w-[450px]">
              <EligibilityCard />
            </div>

            {/* Visual Continuity Orbs */}
            <div className="absolute top-0 -right-20 w-64 h-64 bg-accent-green/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
