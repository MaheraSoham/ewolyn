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

const services = [
  {
    icon: "📄",
    title: "Contract Drafting",
    description:
      "Watertight contracts that protect your interests in every business relationship and transaction.",
    features: [
      "Partnership & JV Agreements",
      "Employment Contracts & NDAs",
      "Vendor & Service Agreements",
      "Licensing & Franchise Contracts",
    ],
    timeline: "3-7 Days",
  },
  {
    icon: "✅",
    title: "Legal Compliance",
    description:
      "Stay penalty-free with comprehensive company law compliance and statutory filing management.",
    features: [
      "Annual ROC Filings (MGT-7, AOC-4)",
      "Board Meeting & AGM Coordination",
      "Statutory Register Maintenance",
      "Director KYC & DIN Updates",
    ],
    timeline: "Ongoing",
  },
  {
    icon: "©️",
    title: "IP Protection",
    description:
      "Secure your innovations, brand, and creative works with robust intellectual property registrations.",
    features: [
      "Trademark & Copyright Filing",
      "Patent Application Support",
      "Design Registration",
      "Infringement & Enforcement",
    ],
    timeline: "Varies",
  },
  {
    icon: "🤝",
    title: "Contract Review & Negotiation",
    description:
      "Professional vetting of agreements to identify risks, strengthen terms, and protect your position.",
    features: [
      "Risk Assessment & Flagging",
      "Clause Modification Drafts",
      "Negotiation Strategy Support",
      "Final Agreement Review",
    ],
    timeline: "2-5 Days",
  },
  {
    icon: "⚡",
    title: "Dispute Resolution",
    description:
      "Resolve conflicts efficiently through mediation, arbitration, or litigation with minimal business disruption.",
    features: [
      "Legal Notice Drafting & Reply",
      "Mediation & Arbitration Support",
      "Litigation Coordination",
      "Settlement Negotiation",
    ],
    timeline: "Case-dependent",
  },
  {
    icon: "🏛️",
    title: "Corporate Advisory",
    description:
      "Strategic legal counsel for M&A transactions, restructuring, share transfers, and investor negotiations.",
    features: [
      "Due Diligence Support",
      "Share Purchase Agreements",
      "Restructuring Advisory",
      "Investor Term Sheet Review",
    ],
    timeline: "Project-based",
  },
];

const whyChooseUs = [
  "Expert legal consultation on demand",
  "Proactive risk mitigation strategies",
  "Iron-clad contract protection",
  "Intellectual property security",
  "Compliance peace of mind",
  "Early dispute prevention approach",
  "Professionally drafted documentation",
  "Cost-effective legal solutions",
  "Rapid turnaround on urgent matters",
];

const processSteps = [
  {
    step: "01",
    title: "Legal Assessment",
    description:
      "Understand your business structure, existing documents, and identify legal risks or gaps.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "Develop a legal strategy, compliance roadmap, and documentation priority list.",
  },
  {
    step: "03",
    title: "Drafting & Filing",
    description:
      "Prepare contracts, agreements, and compliance documents with thorough legal review.",
  },
  {
    step: "04",
    title: "Ongoing Advisory",
    description:
      "Regular compliance monitoring, legal updates, and advisory support as your business grows.",
  },
];

const faqs = [
  {
    question: "What types of contracts can you draft?",
    answer:
      "We draft all business contracts — partnership agreements, vendor/supplier contracts, employment agreements, SLAs, NDAs, lease agreements, loan agreements, franchise contracts, and licensing agreements. Each is customized to your specific business needs.",
  },
  {
    question: "What is ROC compliance and why does it matter?",
    answer:
      "ROC compliance includes annual filings (AOC-4, MGT-7, ADT-1), conducting board meetings and AGMs, and maintaining statutory registers. Non-compliance leads to penalties up to ₹1 lakh/day and potential director disqualification.",
  },
  {
    question: "How do you protect intellectual property?",
    answer:
      "We handle trademark registration, copyright filing, patent applications, design registrations, and domain protection. We also draft licensing/assignment agreements and take action against infringement.",
  },
  {
    question: "Do you handle legal disputes and notices?",
    answer:
      "Yes — we draft legal notices, respond to counter-notices, support mediation and arbitration, coordinate with litigation counsel, and prioritize out-of-court settlements to minimize cost and disruption.",
  },
  {
    question: "What annual compliance do companies need?",
    answer:
      "Pvt Ltd companies must file annual returns (MGT-7), financial statements (AOC-4), appoint auditors (ADT-1), hold AGM and board meetings, maintain statutory registers, and file IT returns. We manage the entire compliance calendar.",
  },
];

export default function LegalServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      {/* ── Hero Section ── */}
      <section className="hero-navy-gradient relative overflow-hidden py-20 lg:py-28">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <SlideIn direction="left">
              <div>
                <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
                  ⚖️ Legal Services
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Comprehensive Legal Protection for Your Business
                </h1>
                <p className="text-lg text-white/80 mb-8 max-w-xl">
                  Expert legal support for contract drafting, compliance
                  management, intellectual property protection, and dispute
                  resolution. Safeguard your business interests with seasoned
                  legal consultants.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { value: "500+", label: "Legal Matters Handled" },
                    { value: "100%", label: "Compliance Record" },
                    { value: "300+", label: "Contracts Drafted" },
                    { value: "50+", label: "IP Registrations" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl md:text-3xl font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="text-xs text-white/70 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <ButtonHover>
                    <Link href="/contact" className="btn-hero-green">
                      Get Legal Advice
                    </Link>
                  </ButtonHover>
                  <ButtonHover>
                    <Link href="/contact" className="btn-hero-outline">
                      Talk to Expert
                    </Link>
                  </ButtonHover>
                </div>
              </div>
            </SlideIn>

            {/* Image */}
            <SlideIn direction="right">
              <div className="relative w-full h-[350px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/legal_consultancy_hero_premium_1769687115697.png"
                  alt="Legal Consultancy"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ── Our Services ── */}
      <section className="py-20 bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                End-to-end legal services designed to protect, empower, and grow
                your business with confidence.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <ScaleOnHover>
                  <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <span className="text-4xl mb-4 block">
                      {service.icon}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-5">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-5 flex-1">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-primary mt-0.5">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-gray-100">
                      <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                        Timeline: {service.timeline}
                      </span>
                    </div>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-slate-50">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Items */}
            <SlideIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Why Choose Us
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-primary text-lg mt-0.5">
                        ✓
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>

            {/* Trust Pillars */}
            <SlideIn direction="right">
              <div className="space-y-5">
                {[
                  { value: "500+", label: "Legal Matters Handled", icon: "⚖️", desc: "Across corporate, IP, and compliance domains" },
                  { value: "300+", label: "Contracts Drafted", icon: "📄", desc: "Watertight agreements for every business need" },
                  { value: "100%", label: "Compliance Record", icon: "🛡️", desc: "Zero penalties across all client filings" },
                ].map((pillar) => (
                  <div
                    key={pillar.label}
                    className="flex items-center gap-5 bg-gradient-to-r from-[rgba(55,175,225,0.95)] to-[#0d2f57] rounded-2xl p-6 shadow-lg border border-white/5"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center text-2xl shrink-0">
                      {pillar.icon}
                    </div>
                    <div>
                      <p className="text-2xl font-black text-primary">{pillar.value}</p>
                      <p className="text-sm font-bold text-white">{pillar.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A streamlined process to deliver reliable legal solutions for
                your business.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <StaggerItem key={step.step}>
                <ScaleOnHover>
                  <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm text-center h-full">
                    <span className="text-5xl font-extrabold text-primary/10 absolute top-4 right-6 select-none">
                      {step.step}
                    </span>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <span className="text-primary font-bold text-lg">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-slate-50">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Quick answers to common legal service queries.
              </p>
            </div>
          </FadeIn>

          <SlideUp>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`text-primary text-xl transition-transform duration-300 ${
                        openFaq === index ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SlideUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="hero-navy-gradient py-20">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Legal Protection?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Don&apos;t leave your business exposed. Get expert legal advice
              and a compliance review today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonHover>
                <Link href="/contact" className="btn-hero-green">
                  Schedule Free Consultation →
                </Link>
              </ButtonHover>
              <ButtonHover>
                <a href="tel:9737799937" className="btn-hero-outline">
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
