"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FadeIn,
  SlideUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  ButtonHover,
} from "../../../components/ui/AnimationWrappers";

/* ── Data ── */

const heroStats = [
  { value: "100%", label: "Tax Savings" },
  { value: "500+", label: "Businesses Served" },
  { value: "₹5Cr+", label: "Tax Saved" },
  { value: "100%", label: "Compliance Rate" },
];

const services = [
  {
    icon: "📝",
    title: "GST Filing",
    description:
      "Monthly/Quarterly GSTR-1, GSTR-3B filing, annual returns, and GST registration with complete support.",
    features: [
      "GSTR-1 & GSTR-3B Filing",
      "Annual Return (GSTR-9)",
      "GST Registration & Amendment",
      "Input Tax Credit Reconciliation",
    ],
    timeline: "Monthly/Quarterly",
  },
  {
    icon: "💰",
    title: "Income Tax",
    description:
      "ITR filing for individuals, businesses, partnerships. Tax planning and optimization strategies.",
    features: [
      "ITR Filing (All Forms)",
      "Tax Planning & Advisory",
      "Capital Gains Computation",
      "Advance Tax Calculation",
    ],
    timeline: "Annual",
  },
  {
    icon: "📋",
    title: "TDS Compliance",
    description:
      "TDS return filing, Form 16/16A issuance, TDS payment, and reconciliation services.",
    features: [
      "TDS Return Filing (24Q/26Q)",
      "Form 16 & 16A Generation",
      "TDS Payment & Challan",
      "TDS Reconciliation",
    ],
    timeline: "Quarterly",
  },
  {
    icon: "🔍",
    title: "Tax Audit",
    description:
      "Tax audit under Section 44AB, GST audit, transfer pricing documentation, and representation.",
    features: [
      "Section 44AB Audit",
      "GST Audit Support",
      "Transfer Pricing Docs",
      "Authority Representation",
    ],
    timeline: "Annual",
  },
  {
    icon: "🚀",
    title: "Startup Tax Benefits",
    description:
      "100% income tax exemption for 3 years under Section 80-IAC for DPIIT registered startups.",
    features: [
      "DPIIT Recognition Filing",
      "80-IAC Application",
      "3-Year Tax Exemption",
      "Angel Tax Exemption",
    ],
    timeline: "One-time + Annual",
  },
  {
    icon: "📊",
    title: "Financial Planning",
    description:
      "Tax-saving investment planning, capital gains optimization, and wealth management advice.",
    features: [
      "Tax-saving Investments",
      "Capital Gains Strategy",
      "Deduction Optimization",
      "Wealth Management Advisory",
    ],
    timeline: "Ongoing",
  },
];

const whyChooseUs = [
  "100% tax exemption for 3 years (Startup India)",
  "Expert tax planning strategies",
  "Timely GST & ITR filing",
  "TDS compliance management",
  "Penalty-free operations",
  "Audit representation",
  "Notice handling support",
  "Digital record keeping",
  "Year-round assistance",
];

const processSteps = [
  {
    step: "01",
    title: "Assessment",
    description:
      "Review your business structure, turnover, and tax obligations to identify the most efficient compliance path.",
  },
  {
    step: "02",
    title: "Registration",
    description:
      "Complete GST, TAN, and other tax registrations if required. Ensure all compliance prerequisites are met.",
  },
  {
    step: "03",
    title: "Compliance",
    description:
      "Monthly/quarterly filing of returns with proper documentation. Timely payments to avoid penalties.",
  },
  {
    step: "04",
    title: "Optimization",
    description:
      "Ongoing tax planning and optimization to minimize tax burden legally while maximizing deductions.",
  },
];

const faqs = [
  {
    question: "How can I save 100% tax for 3 years?",
    answer:
      "Startups recognized by DPIIT (Department for Promotion of Industry and Internal Trade) can claim 100% income tax exemption for 3 consecutive years out of the first 10 years under Section 80-IAC. We help with DPIIT recognition and the complete application process.",
  },
  {
    question: "What is the GST filing frequency?",
    answer:
      "Businesses with turnover above ₹5 Cr file monthly (GSTR-1 & GSTR-3B). Below ₹5 Cr can opt for quarterly filing with monthly tax payment. Annual return (GSTR-9) is mandatory for all registered businesses.",
  },
  {
    question: "When is ITR filing mandatory?",
    answer:
      "ITR filing is mandatory if: total income exceeds ₹2.5L (₹3L for senior citizens), business/professional income exists, or you wish to claim refunds. Companies and LLPs must file regardless of profit/loss.",
  },
  {
    question: "What happens if I miss GST filing deadline?",
    answer:
      "Late GST filing attracts a penalty of ₹50/day (₹20/day for NIL returns) up to ₹5,000. You also lose input tax credit benefit. We ensure timely filing to avoid penalties.",
  },
  {
    question: "Do you handle tax notices and assessments?",
    answer:
      "Yes, we provide complete support for handling income tax notices, GST notices, scrutiny assessments, and appeals. Our experts represent you before tax authorities.",
  },
];

/* ── Component ── */

export default function TaxCompliancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-accent-green/10 rounded-full blur-[120px] floating-shape" />
        <div
          className="absolute bottom-10 left-[-5%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] floating-shape"
          style={{ animationDelay: "2s" }}
        />

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-green/20 rounded-full text-white text-sm font-bold mb-6 border border-accent-green/30">
                <span className="animate-pulse">📊</span>
                Tax &amp; Compliance
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-accent-green">Save 100% Tax</span> <br />
                <span className="text-white">for 3 Years</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Complete tax planning and compliance services including GST
                filing, Income Tax returns, TDS compliance, and audit support.
                Avail 100% tax exemption under Startup India scheme.
              </p>
              <div className="flex flex-wrap gap-4">
                <ButtonHover>
                  <Link href="/contact" className="btn-hero-green">
                    Get Started
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </ButtonHover>
                <ButtonHover>
                  <a href="tel:18005710607" className="btn-hero-outline">
                    Talk to Expert
                  </a>
                </ButtonHover>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-bold text-accent-green">
                      {s.value}
                    </p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <SlideIn direction="right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-green to-blue-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/tax_compliance_hero_premium.png"
                    alt="Tax & Compliance Services"
                    width={800}
                    height={800}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ═══════════════ Our Services ═══════════════ */}
      <section className="py-24 bg-white">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block text-accent-green font-bold text-sm uppercase tracking-widest mb-3">
                Our Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our <span className="text-accent-green">Services</span>
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Comprehensive tax filing, planning, and compliance solutions for
                businesses and startups across India.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((svc) => (
                <StaggerItem key={svc.title}>
                  <ScaleOnHover>
                    <div className="h-full bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-accent-green/30 transition-all duration-300 flex flex-col">
                      <div className="text-4xl mb-4">{svc.icon}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {svc.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-6">
                        {svc.description}
                      </p>
                      <ul className="space-y-2 flex-1 mb-6">
                        {svc.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm text-slate-600"
                          >
                            <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Timeline
                        </span>
                        <span className="text-sm font-bold text-accent-green">
                          {svc.timeline}
                        </span>
                      </div>
                    </div>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════ Why Choose Us ═══════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="inline-block text-accent-green font-bold text-sm uppercase tracking-widest mb-3">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Why Choose <span className="text-accent-green">Us</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-200 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4 text-accent-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <SlideIn direction="right">
              <div className="space-y-4">
                {[
                  { icon: "🏆", text: "3-Year Tax Holiday", sub: "Under Section 80IAC for DPIIT startups", accent: "border-accent-green" },
                  { icon: "💰", text: "₹25L+ Avg. Annual Savings", sub: "Across income tax, GST, and compliance costs", accent: "border-blue-400" },
                  { icon: "🚀", text: "Angel Tax Exempt", sub: "Section 56(2)(viib) exemption for eligible startups", accent: "border-purple-400" },
                  { icon: "🛡️", text: "Full Compliance Shield", sub: "Zero penalty record across 1000+ filings", accent: "border-orange-400" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className={`flex items-center gap-4 bg-white rounded-2xl p-5 shadow-md border-l-4 ${item.accent} hover:shadow-lg transition-shadow duration-300`}
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <p className="font-bold text-slate-900">{item.text}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{item.sub}</p>
                    </div>
                    <svg className="w-5 h-5 text-accent-green ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ═══════════════ How It Works ═══════════════ */}
      <section className="py-24 bg-white">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block text-accent-green font-bold text-sm uppercase tracking-widest mb-3">
                How It Works
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                How It <span className="text-accent-green">Works</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((p) => (
              <SlideUp key={p.step}>
                <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <span className="text-6xl font-black text-accent-green/10 absolute top-4 right-6">
                    {p.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-accent-green/10 flex items-center justify-center text-accent-green font-bold text-lg mb-5">
                    {p.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="container-max max-w-3xl">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block text-accent-green font-bold text-sm uppercase tracking-widest mb-3">
                FAQ
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Frequently Asked{" "}
                <span className="text-accent-green">Questions</span>
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-base font-bold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-accent-green shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-24 hero-navy-gradient text-white">
        <div className="container-max text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="text-accent-green">Get Started?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Let our experts guide you through the process. Schedule a free
              consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonHover>
                <Link href="/contact" className="btn-hero-green">
                  Schedule Free Consultation →
                </Link>
              </ButtonHover>
              <ButtonHover>
                <a href="tel:18005710607" className="btn-hero-outline">
                  Call Now: 1800-571-0607
                </a>
              </ButtonHover>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
