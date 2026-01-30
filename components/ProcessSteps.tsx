"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "Quick Application",
    time: "2 mins",
    desc: "Fill a simple 2-minute form with basic business details. No complex paperwork needed.",
    icon: "📋",
  },
  {
    step: 2,
    title: "Expert Consultation",
    time: "24 hrs",
    desc: "Our funding experts analyze your needs and match with best schemes. Personalized scheme matching.",
    icon: "👥",
  },
  {
    step: 3,
    title: "Documentation",
    time: "3-5 days",
    desc: "We help prepare and submit all required documents with our simplified checklist.",
    icon: "📄",
  },
  {
    step: 4,
    title: "Approval & Disbursement",
    time: "15-25 days",
    desc: "Get approved and receive funds directly in your account. Direct bank transfer with transparency.",
    icon: "✓",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 section-light-green overflow-hidden">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-cyan/10 rounded-full px-5 py-2.5 mb-4 animate-pulse-glow">
            <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-sm font-medium text-cyan">Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            How We <span className="gradient-text">Secure Your Funding</span>
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            Our streamlined approach helps businesses get funded in as little as 7 days
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cyan/30 md:left-1/2 md:transform md:-translate-x-1/2" />

          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Step Number Circle */}
              <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, type: "spring" }}
                  className="w-16 h-16 rounded-full bg-gradient-cyan text-white flex items-center justify-center text-2xl font-bold shadow-cyan-glow border-4 border-white"
                >
                  {s.step}
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`ml-24 md:ml-0 md:w-5/12 ${idx % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.4)" }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-cyan/10 text-cyan text-xs font-bold px-3 py-1 rounded">
                      STEP {s.step}
                    </span>
                    <span className="text-muted text-sm flex items-center gap-1">
                      ⏱ {s.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">{s.title}</h3>
                  <p className="text-muted text-sm">{s.desc}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.01 }}
          className="mt-16 bg-brand rounded-2xl p-10 text-center shadow-glow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Join thousands of MSMEs who have successfully secured funding through our platform
          </p>
          <Link href="/funding">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center bg-cyan hover:bg-cyan-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-cyan/20 transition-all duration-300 w-fit mx-auto cursor-pointer"
            >
              Start Your Funding Journey →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
