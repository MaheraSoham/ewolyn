"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="section section-navy">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-r from-brand to-brand-dark p-10 text-white shadow-soft"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl font-bold text-white"
              >
                Ready to <span className="gradient-text-light">Get Your Business Funded?</span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-2 text-lg text-slate-100"
              >
                Join 20,000+ MSMEs who got funding through Ewolyn. Free eligibility check in 30 seconds.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-4 flex flex-wrap gap-4 text-sm text-cyan"
              >
                <span className="flex items-center gap-1">✓ 48hrs Approval</span>
                <span className="flex items-center gap-1">✓ Zero Collateral Options</span>
                <span className="flex items-center gap-1">✓ 95% Success Rate</span>
              </motion.div>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/funding">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-3 bg-cyan text-white font-bold rounded-lg hover:bg-cyan-dark transition shadow-lg shadow-cyan/20 text-center cursor-pointer"
                >
                  Check Eligibility Free →
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-3 border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition text-center cursor-pointer"
                >
                  Talk to Expert
                </motion.span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
