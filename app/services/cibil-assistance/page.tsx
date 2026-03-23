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

const cibilServices = [
  {
    title: "CIBIL Error Correction",
    icon: "🔧",
    description:
      "Identify and rectify errors in your CIBIL report that are negatively impacting your credit score. We handle disputes with bureaus on your behalf.",
    benefits: [
      "Incorrect account removal",
      "Duplicate entry correction",
      "Wrong payment status fix",
      "Identity mismatch resolution",
    ],
    timeline: "30-45 Days",
  },
  {
    title: "Negative Remarks Removal",
    icon: "🚫",
    description:
      "Professional dispute resolution for written-off accounts, settled accounts, and other negative remarks affecting your score.",
    benefits: [
      "Written-off account disputes",
      "Settled account reclassification",
      "Late payment correction",
      "DPD status rectification",
    ],
    timeline: "45-60 Days",
  },
  {
    title: "CCR Ranking Enhancement",
    icon: "📊",
    description:
      "Strategic improvement of your Commercial Credit Report ranking to enhance business loan eligibility and terms.",
    benefits: [
      "CCR score optimization",
      "Business credit building",
      "Trade line improvement",
      "Credit utilization strategy",
    ],
    timeline: "60-90 Days",
  },
  {
    title: "Credit Score Improvement",
    icon: "📈",
    description:
      "Personalized action plan to boost your individual and business CIBIL score through strategic credit management.",
    benefits: [
      "Score boost roadmap",
      "Debt restructuring advice",
      "Credit mix optimization",
      "Inquiry management",
    ],
    timeline: "45-90 Days",
  },
  {
    title: "Dispute Resolution",
    icon: "⚖️",
    description:
      "End-to-end dispute management with all four credit bureaus — CIBIL, Experian, Equifax, and CRIF Highmark.",
    benefits: [
      "Multi-bureau disputes",
      "Legal notice support",
      "Follow-up management",
      "Resolution tracking",
    ],
    timeline: "30-60 Days",
  },
  {
    title: "Loan Eligibility Optimization",
    icon: "🎯",
    description:
      "Prepare your credit profile to meet lender requirements before applying for business loans, improving approval chances.",
    benefits: [
      "Pre-application audit",
      "Lender requirement mapping",
      "Profile strengthening",
      "Application timing strategy",
    ],
    timeline: "30-45 Days",
  },
];

const stats = [
  { value: "500+", label: "Scores Improved" },
  { value: "85%", label: "Dispute Success Rate" },
  { value: "150+", label: "Points Avg. Increase" },
  { value: "45 Days", label: "Avg. Resolution Time" },
];

const process = [
  {
    step: "01",
    title: "Free Credit Audit",
    description:
      "We pull and analyze your CIBIL, Experian, Equifax & CRIF reports to identify every error and negative remark.",
  },
  {
    step: "02",
    title: "Strategy & Roadmap",
    description:
      "Our experts create a customized improvement plan based on your specific issues and target score.",
  },
  {
    step: "03",
    title: "Dispute & Rectification",
    description:
      "We file formal disputes with credit bureaus and lenders, handling all communication and follow-ups.",
  },
  {
    step: "04",
    title: "Score Monitoring",
    description:
      "Track improvements in real-time. We ensure all corrections are reflected and your score reaches the target.",
  },
];

const whyChooseUs = [
  "Higher loan approval probability",
  "Better interest rates on credit",
  "Increased credit limits access",
  "Error-free credit reports",
  "Improved financial reputation",
  "Faster loan processing times",
  "Enhanced overall creditworthiness",
  "Access to premium credit cards",
  "Expert multi-bureau guidance",
];

const faqs = [
  {
    q: "How much can my CIBIL score improve?",
    a: "Improvement depends on current issues. Typically, error corrections can boost scores by 50-150 points within 30-45 days. Strategic credit management combined with dispute resolution can improve scores by 100-250+ points over 60-90 days. We assess your specific situation and provide a realistic target.",
  },
  {
    q: "Is credit repair legal in India?",
    a: "Absolutely. Credit repair through legitimate dispute resolution is completely legal. Under RBI regulations, credit bureaus are obligated to investigate disputes and correct inaccurate information within 30 days. We use official dispute channels provided by CIBIL, Experian, Equifax, and CRIF Highmark.",
  },
  {
    q: "Which credit bureaus do you work with?",
    a: "We work with all four RBI-licensed credit bureaus in India — CIBIL (TransUnion), Experian, Equifax, and CRIF Highmark. We file disputes and track corrections across all bureaus since different lenders check different reports.",
  },
  {
    q: "Can settled or written-off accounts be fixed?",
    a: "Yes. We dispute inaccurately reported settled or written-off accounts, negotiate with lenders for status updates to 'Closed' from 'Settled,' and help remove entries that have crossed the 7-year reporting window. Each case is assessed individually for the best approach.",
  },
  {
    q: "How long does the credit repair process take?",
    a: "Simple error corrections take 30-45 days. Disputed negative remarks typically take 45-60 days. Comprehensive credit rebuilding (score improvement + dispute resolution) takes 60-90 days. We provide regular progress updates and score tracking throughout the process.",
  },
];

export default function CibilAssistancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] floating-shape"></div>
        <div
          className="absolute bottom-10 left-[-5%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] floating-shape"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-white text-sm font-bold mb-6 border border-primary/30">
                <span className="animate-pulse">💳</span>
                Better Loan Eligibility
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-primary">Fix Your</span> <br />
                <span className="text-white">CIBIL Score</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Improve your business and individual credit scores through
                professional rectification and dispute resolution. A better
                CIBIL score means better loan terms and higher approval rates.
              </p>
              <div className="flex flex-wrap gap-4">
                <ButtonHover>
                  <Link href="/contact" className="btn-hero-green">
                    Get Free Credit Audit
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

              {/* Stats Row */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-bold text-primary">
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
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/cibil_assistance_hero_premium.png"
                    alt="CIBIL Assistance"
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

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3">
                Our CIBIL Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Complete Credit <span className="text-primary">Repair Solutions</span>
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                From error correction to strategic score improvement — we handle
                every aspect of your credit health.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {cibilServices.map((service) => (
                <StaggerItem key={service.title}>
                  <ScaleOnHover>
                    <div className="h-full bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2 flex-1 mb-6">
                        {service.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-slate-600"
                          >
                            <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Timeline
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {service.timeline}
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

      {/* Process Steps */}
      <section className="py-24 bg-slate-50">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3">
                How It Works
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our <span className="text-primary">4-Step</span> Process
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <SlideUp key={p.step}>
                <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <span className="text-6xl font-black text-primary/10 absolute top-4 right-6">
                    {p.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg mb-5">
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

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Why Businesses <span className="text-primary">Trust Us</span> with Credit Repair
              </h2>
              <p className="text-lg text-slate-500 mb-10">
                Our credit repair experts have helped 500+ businesses improve their scores and unlock better financing opportunities.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <SlideIn direction="right">
              <div className="flex flex-col items-center">
                {/* Score Gauge */}
                <div className="relative w-64 h-32 overflow-hidden">
                  <div className="absolute inset-0 rounded-t-full border-[16px] border-slate-200"></div>
                  <div className="absolute inset-0 rounded-t-full border-[16px] border-transparent border-t-primary border-l-primary border-r-yellow-400" style={{ transform: "rotate(0deg)" }}></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-4xl font-black text-primary">750+</p>
                    <p className="text-xs text-slate-500 font-medium">Target Score</p>
                  </div>
                </div>
                {/* Score Range */}
                <div className="flex justify-between w-64 mt-3 px-2">
                  <span className="text-xs font-bold text-red-400">300</span>
                  <span className="text-xs font-bold text-yellow-500">500</span>
                  <span className="text-xs font-bold text-primary">750+</span>
                  <span className="text-xs font-bold text-emerald-600">900</span>
                </div>
                {/* Stats below gauge */}
                <div className="grid grid-cols-3 gap-4 mt-8 w-full">
                  {[
                    { value: "500+", label: "Scores Fixed" },
                    { value: "150+", label: "Avg. Points Up" },
                    { value: "85%", label: "Dispute Win" },
                  ].map((s) => (
                    <div key={s.label} className="bg-slate-100 rounded-xl p-4 text-center">
                      <p className="text-xl font-bold text-primary">{s.value}</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-max max-w-4xl">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3">
                FAQs
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <SlideUp key={i}>
                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-semibold text-slate-900 pr-4">{faq.q}</span>
                    <span className={`text-primary text-2xl font-bold transition-transform duration-300 shrink-0 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-navy-gradient text-white">
        <div className="container-max text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-primary">Fix Your Credit?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Don&apos;t let a low CIBIL score hold your business back. Get a
              free credit audit today and start your journey to better loan
              eligibility.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonHover>
                <Link href="/contact" className="btn-hero-green">
                  Get Free Credit Audit →
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