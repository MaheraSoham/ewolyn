"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does approval take?",
    a: "Typically 7-45 days, depending on scheme, category, project readiness, and bank/department processing.",
  },
  {
    q: "What documents are required?",
    a: "Generally you need Aadhaar card, PAN card, business plan or project report, bank statements, and relevant certificates. Our team will guide you through the complete documentation process.",
  },
  {
    q: "Do you provide Pan India support?",
    a: "Yes, we serve businesses across all 28+ states and union territories in India. Our services are available remotely and we have tie-ups with banks and agencies nationwide.",
  },
  {
    q: "Which scheme is best for me?",
    a: "It depends on your business type, category, and requirements. Our experts provide free consultation to analyze your profile and recommend the most suitable government scheme.",
  },
  {
    q: "What makes Ewolyn different?",
    a: "We offer end-to-end support from consultation to fund disbursement with a 85%+ success rate. Our expert team has facilitated ₹103Cr+ in funding for 500+ businesses across India.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white py-16">
      <div className="container-max max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary mb-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Common Queries
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1B4F8C]">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 max-w-lg mx-auto">
            Everything you need to know about our services, funding process, and eligibility criteria. Can&apos;t find the answer you&apos;re looking for? Feel free to contact us.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-300 ${openIndex === idx
                  ? "border-primary/30 bg-primary/5 shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300"
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className={`text-sm font-bold ${openIndex === idx ? "text-primary" : "text-[#1B4F8C]"}`}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`shrink-0 ml-4 w-6 h-6 rounded-full flex items-center justify-center ${openIndex === idx ? "bg-primary text-white" : "bg-slate-100 text-slate-500"}`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500 mb-3">Still have questions? We&apos;re here to help!</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[rgba(55,175,225,0.95)] text-white px-6 py-3 text-sm font-bold hover:bg-primary hover:text-[#1B4F8C] transition-all"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
