"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FadeIn,
  SlideUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  ButtonHover,
} from "../../../components/ui/AnimationWrappers";

const loanServices = [
  {
    icon: "🏦",
    title: "Working Capital Loans",
    desc: "Keep your operations running smoothly with short-term and revolving credit facilities.",
    features: [
      "CC/OD Facility (up to ₹5Cr)",
      "Invoice Discounting & Factoring",
      "Channel Financing",
      "Short-Term Business Loans",
    ],
    timeline: "5-10 Days",
  },
  {
    icon: "📈",
    title: "Term Loans",
    desc: "Fund expansion, new projects, and long-term investments with structured repayment schedules.",
    features: [
      "Business Expansion Loans (up to ₹50Cr)",
      "Project Finance",
      "Green Energy Loans",
      "Startup Term Loans",
    ],
    timeline: "7-15 Days",
  },
  {
    icon: "🏗️",
    title: "Equipment & Machinery Finance",
    desc: "Lease or purchase industrial equipment with dedicated asset-backed financing options.",
    features: [
      "New Machinery Purchase Loans",
      "Used Equipment Refinancing",
      "Technology Upgrade Finance",
      "Construction Equipment Loans",
    ],
    timeline: "7-10 Days",
  },
  {
    icon: "🛡️",
    title: "MUDRA & Government Loans",
    desc: "Access subsidized government lending programs like MUDRA, Stand-Up India, and CGTMSE.",
    features: [
      "MUDRA Loans (Shishu/Kishore/Tarun)",
      "Stand-Up India (₹10L-₹1Cr)",
      "CGTMSE Collateral-Free Loans",
      "PMEGP Loans with Subsidy",
    ],
    timeline: "15-30 Days",
  },
  {
    icon: "🏠",
    title: "Loan Against Property",
    desc: "Leverage your commercial or residential property for high-value, low-interest business funding.",
    features: [
      "Residential Property LAP",
      "Commercial Property LAP",
      "Industrial Property Loans",
      "Balance Transfer & Top-Up",
    ],
    timeline: "10-15 Days",
  },
  {
    icon: "📑",
    title: "Loan Documentation & Advisory",
    desc: "Professional support for loan applications, projections, CIBIL improvement, and bank negotiations.",
    features: [
      "CMA Data & Projections",
      "Bank Proposal Preparation",
      "CIBIL Score Improvement",
      "Loan Restructuring Advisory",
    ],
    timeline: "3-7 Days",
  },
];

const whyChooseUs = [
  "50+ banking & NBFC partnerships",
  "Industry-best interest rate negotiation",
  "48-hour fast-track approvals",
  "Minimal documentation process",
  "Collateral-free loan options available",
  "Expert CIBIL improvement support",
  "End-to-end loan management",
  "No hidden charges or commissions",
  "Dedicated relationship manager",
];

const processSteps = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "Understand your funding need, business profile, financials, and recommend the best-fit loan product.",
  },
  {
    step: "02",
    title: "Documentation & Filing",
    desc: "Prepare CMA data, financial projections, and submit complete applications to suitable lenders.",
  },
  {
    step: "03",
    title: "Processing & Sanction",
    desc: "Coordinate with banks/NBFCs, handle queries, negotiate terms, and secure sanction letters.",
  },
  {
    step: "04",
    title: "Disbursement & Support",
    desc: "Ensure timely fund release, handle post-sanction compliance, and provide ongoing advisory.",
  },
];

const faqs = [
  {
    q: "What is the minimum CIBIL score required for a business loan?",
    a: "Most banks require a CIBIL score of 650+ for unsecured business loans and 600+ for secured (LAP/machinery) loans. If your score is below 650, we can help improve it before applying, or connect you with NBFCs that have more flexible criteria.",
  },
  {
    q: "How much loan can my business get?",
    a: "Loan eligibility depends on turnover, profitability, collateral, CIBIL score, and years in business. Generally: MUDRA up to ₹10L, CGTMSE up to ₹5Cr (collateral-free), term loans up to ₹50Cr, and LAP up to 70% of property value. We assess and maximize your eligibility.",
  },
  {
    q: "What documents are needed for a business loan?",
    a: "Typically: PAN, Aadhaar, business registration, last 2 years ITR & financials, 12-month bank statements, GST returns, and KYC documents. For LAP/machinery loans, property/asset documents are also required. We prepare and organize everything for you.",
  },
  {
    q: "Can startups without revenue get business loans?",
    a: "Early-stage startups can access MUDRA Shishu loans (up to ₹50K), PMEGP loans with subsidy, and some NBFC products for new businesses. DPIIT-recognized startups may also access Startup India Seed Fund. We match you with the right product for your stage.",
  },
  {
    q: "How long does the loan disbursement process take?",
    a: "Unsecured loans: 48 hours to 7 days. Secured loans (LAP/machinery): 10-15 days. Government scheme loans (MUDRA, CGTMSE): 15-30 days. We fast-track the process by preparing complete documentation upfront and maintaining direct banker relationships.",
  },
];

export default function LoansPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* ───────────── Hero Section ───────────── */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-green-100 text-sm font-bold mb-6 border border-green-500/30">
                <span>💰</span> Business Loans
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-primary">Fast & Affordable</span>
                <br />
                <span className="text-white">Business Loans for MSMEs & Startups</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                Connecting you with the best loan products from 50+ banks and NBFCs. Get working capital,
                term loans, equipment finance, and more at competitive interest rates with minimal
                documentation.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <ButtonHover>
                  <Link href="/contact" className="btn-hero-green text-lg px-10">
                    Apply for Loan
                  </Link>
                </ButtonHover>
                <ButtonHover>
                  <a href="tel:9737799937" className="btn-hero-outline text-lg px-10">
                    Talk to Expert
                  </a>
                </ButtonHover>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                {[
                  { value: "₹110Cr+", label: "Disbursed" },
                  { value: "2000+", label: "Loans Processed" },
                  { value: "12-18%", label: "Interest Rates" },
                  { value: "48-Hour", label: "Approval" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <SlideIn direction="right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/business_loans_hero_premium_1769686161627.png"
                    alt="Business Loans for MSMEs"
                    width={800}
                    height={800}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ───────────── 6 Services Section ───────────── */}
      <section className="py-24 bg-white">
        <div className="container-max">
          <div className="text-center mb-20">
            <FadeIn>
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                Our Loan Products
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Comprehensive Loan Solutions
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                From working capital to government schemes — we connect you with the right funding for
                every business need.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {loanServices.map((service, idx) => (
              <StaggerItem key={idx}>
                <ScaleOnHover>
                  <div className="card h-full flex flex-col">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-5 leading-relaxed">{service.desc}</p>

                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="text-primary mt-0.5">✓</span>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                        Timeline
                      </span>
                      <span className="text-sm font-bold text-primary">{service.timeline}</span>
                    </div>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ───────────── Why Choose Us ───────────── */}
      <section className="py-24 bg-slate-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <SlideIn direction="left">
              <div className="bg-gradient-to-br from-[rgba(55,175,225,0.95)] to-[#1B4F8C] rounded-3xl p-10 text-center shadow-2xl border border-white/10">
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Total Loans Facilitated</p>
                <p className="text-7xl md:text-8xl font-black text-primary leading-none">₹110Cr<span className="text-4xl">+</span></p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { value: "2000+", label: "Loans" },
                    { value: "48hr", label: "Approval" },
                    { value: "50+", label: "Partners" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 rounded-xl py-3 px-2">
                      <p className="text-lg font-bold text-white">{s.value}</p>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span className="text-xs text-gray-400">Live disbursement tracking</span>
                </div>
              </div>
            </SlideIn>

            <FadeIn>
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">
                Your Trusted Loan <br />Advisory Partner
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                With deep banking relationships and domain expertise, we maximize your chances of approval
                at the best possible terms.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:border-green-500/30 transition-colors"
                  >
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ───────────── How It Works ───────────── */}
      <section className="py-24 section-navy">
        <div className="container-max">
          <div className="text-center mb-20">
            <FadeIn>
              <span className="text-green-400 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                How It Works
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                From Application to Disbursement
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                Our streamlined 4-step process ensures you get funded faster with zero hassle.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {processSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="text-5xl font-black text-primary/30 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ───────────── FAQ Section ───────────── */}
      <section className="py-24 bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                FAQ
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Get quick answers to your business loan queries.
              </p>
            </FadeIn>
          </div>

          <SlideUp>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden transition-all duration-300 hover:border-green-500/30"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg transition-transform duration-300 ${
                        openFaq === idx ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openFaq === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </SlideUp>
        </div>
      </section>

      {/* ───────────── CTA Section ───────────── */}
      <section className="py-24 hero-navy-gradient text-white">
        <div className="container-max text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Need Business Funding?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Get matched with the right loan product in 48 hours. Free eligibility assessment — no
              obligations.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <ButtonHover>
                <Link href="/contact" className="btn-hero-green text-lg px-10">
                  Check Loan Eligibility →
                </Link>
              </ButtonHover>
              <ButtonHover>
                <a href="tel:9737799937" className="btn-hero-outline text-lg px-10">
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
