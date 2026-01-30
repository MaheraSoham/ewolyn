"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import EligibilityCard from "./EligibilityCard";

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="section section-navy py-20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[3rem] bg-gradient-to-br from-brand-navy to-slate-900 p-12 md:p-16 text-white shadow-2xl relative overflow-hidden border border-white/5"
          >
            {/* Decorative Orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan/10 rounded-full blur-[100px] -z-10"></div>

            <div className="flex flex-col items-center text-center gap-10 md:flex-row md:text-left justify-between relative z-10">
              <div className="max-w-xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-accent-green text-[10px] font-black uppercase tracking-[0.3em] mb-6"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></span>
                  Exclusive MSME Access
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-black text-white leading-[1.1]">
                  Ready to scale your <br />
                  <span className="text-accent-green">Business Infrastructure?</span>
                </h3>
                <p className="mt-6 text-xl text-blue-100/60 font-medium">
                  Secure your roadmap from idea to IPO with India's most trusted MSME consultants.
                </p>
                <div className="mt-8 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest text-slate-400">
                  <span className="flex items-center gap-2"><span className="text-accent-green text-lg">✓</span> No Collateral</span>
                  <span className="flex items-center gap-2"><span className="text-accent-green text-lg">✓</span> Fast Track</span>
                  <span className="flex items-center gap-2"><span className="text-accent-green text-lg">✓</span> Expert Support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 w-full md:w-auto">
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-accent-green text-brand-navy font-black rounded-2xl hover:bg-white transition-all shadow-xl shadow-accent-green/20 text-center uppercase tracking-widest text-xs"
                >
                  Check Eligibility Free
                </motion.button>
                <Link href="/contact" className="w-full sm:w-auto">
                  <motion.span
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block w-full px-10 py-5 border-2 border-white/10 text-white font-black rounded-2xl transition-all text-center uppercase tracking-widest text-xs cursor-pointer"
                  >
                    Talk to Expert
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-brand-navy/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative z-50 w-full max-w-[500px]"
            >
              {/* Refined Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-brand-navy text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white/10 font-bold z-[60] hover:bg-accent-green hover:text-brand-navy transition-all active:scale-90"
              >
                ✕
              </button>
              <EligibilityCard />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
