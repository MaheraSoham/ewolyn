"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "Initial Information Gathering",
    desc: "Collect key details about your business, goals, and current challenges.",
    icon: "📋",
    color: "bg-blue-500",
  },
  {
    step: 2,
    title: "Analysts' Deep Dive",
    desc: "Our experts analyze your data, market position, and growth opportunities.",
    icon: "🔍",
    color: "bg-purple-500",
  },
  {
    step: 3,
    title: "Design Phase Begins",
    desc: "Craft a tailored strategy and solution framework for your needs.",
    icon: "✏️",
    color: "bg-indigo-500",
  },
  {
    step: 4,
    title: "Client Collaboration",
    desc: "Review the plan together, align on priorities, and refine direction.",
    icon: "🤝",
    color: "bg-orange-500",
  },
  {
    step: 5,
    title: "Refinement & Research",
    desc: "Deepen research and polish every detail for maximum impact.",
    icon: "🔬",
    color: "bg-cyan-500",
  },
  {
    step: 6,
    title: "Draft Finalization",
    desc: "Prepare the final deliverable with all revisions incorporated.",
    icon: "📄",
    color: "bg-amber-500",
  },
  {
    step: 7,
    title: "Delivery of Final Draft",
    desc: "Hand over the completed solution — ready to implement and grow.",
    icon: "🚀",
    color: "bg-primary",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-white py-16">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-bold text-primary mb-3">
            ● Our 7-Step Process
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1B4F8C]">
            Ewolyn&apos;s Process
          </h2>
          <p className="text-sm text-slate-500 mt-3 max-w-xl mx-auto">
            A structured journey from understanding your needs to delivering results
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Icon Circle */}
              <div className="relative mb-4">
                <div className={`w-16 h-16 rounded-full ${s.color} flex items-center justify-center text-white text-2xl shadow-lg`}>
                  {s.icon}
                </div>
                {/* Green checkmark */}
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center border-2 border-white">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Step label */}
              <p className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-1">STEP {s.step}</p>

              {/* Title */}
              <h3 className="text-sm font-black text-[#1B4F8C] mb-2 max-w-[160px]">{s.title}</h3>

              {/* Description */}
              <p className="text-xs text-slate-500 max-w-[180px] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-[#1B4F8C] px-8 py-3 text-sm font-bold hover:bg-[rgba(55,175,225,0.95)] hover:text-white transition-all"
          >
            Start Your Application →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
