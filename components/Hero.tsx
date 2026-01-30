"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

export default function Hero() {
  return (
    <section className="hero-navy-gradient text-white pt-16 pb-10 relative overflow-hidden min-h-[75vh] flex items-center">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container-max relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Side - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col"
          >
            {/* Floating Success Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-slate-900/40 backdrop-blur-md rounded-full px-3 py-1.5 mb-5 border border-cyan/20 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse" />
              <span className="text-[11px] font-medium tracking-wide">
                <span className="text-accent-green font-bold">TechVision Solutions</span> got ₹45L PMEGP approval ✓
              </span>
            </motion.div>

            {/* Hindi Tagline */}
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 tracking-wide">
              <span className="text-accent-green italic">Humara Support</span>{" "}
              <span className="text-white">Aapki Safalta</span>
            </motion.h2>

            {/* Decorative Line */}
            <motion.div variants={itemVariants} className="w-12 h-0.5 bg-accent-green mb-4"></motion.div>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-4">
              Get <span className="text-accent-green">₹10L to ₹5Cr</span>
              <br />
              <span className="text-white">MSME Funding</span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-sm md:text-base text-slate-300/90 mb-4 max-w-lg leading-relaxed">
              Government schemes, company registration & business certifications.
            </motion.p>

            {/* Feature Bullets */}
            <motion.p variants={itemVariants} className="text-xs md:text-sm font-semibold text-white mb-6">
              <span className="text-accent-green">Expert guidance</span> • <span>Fast approvals</span> • <span>Transparent process</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <Link href="/funding">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-hero-green inline-block bg-green-500 hover:bg-green-600 px-6 py-2.5 text-sm font-bold rounded-lg transition-all shadow-lg shadow-green-500/20 cursor-pointer"
                >
                  Apply for Funding →
                </motion.span>
              </Link>
              <Link href="/services">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-hero-outline inline-block border border-white/30 hover:bg-white/10 px-6 py-2.5 text-sm font-bold rounded-lg transition-all cursor-pointer"
                >
                  Explore Services
                </motion.span>
              </Link>
            </motion.div>

            {/* Stats Cards - Now below buttons in the same column */}
            <motion.div
              variants={statsContainerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl"
            >
              {[
                { val: "48hrs", label: "Quick Approval" },
                { val: "₹500Cr+", label: "Funded" },
                { val: "95%", label: "Success Rate" },
                { val: "20K+", label: "Happy Clients" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, borderColor: "rgba(34, 197, 94, 0.5)" }}
                  className="bg-slate-900/40 backdrop-blur-md rounded-xl p-4 border border-white/5 transition-all cursor-default"
                >
                  <p className="text-xl md:text-2xl font-bold text-accent-green">{stat.val}</p>
                  <p className="text-[9px] text-slate-400 mt-0.5 font-medium uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Adjusted max-w to accommodate larger image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 rounded-2xl overflow-hidden border-2 border-white/5 shadow-2xl max-w-xl ml-auto"
            >
              <Image
                src="/hero-business-meeting.png"
                alt="Business Meeting"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-60"></div>
            </motion.div>

            {/* Decorative Background Glows */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-64 h-64 bg-cyan/10 rounded-full blur-[80px] -z-10"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent-green/10 rounded-full blur-[100px] -z-10"
            ></motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


