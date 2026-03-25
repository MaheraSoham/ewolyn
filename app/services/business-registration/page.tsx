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
    icon: "🏛️",
    title: "Pvt Ltd Company",
    description:
      "Most popular structure for funded startups with limited liability and separate legal identity.",
    features: [
      "DIN & DSC Processing",
      "Name Approval & MOA/AOA",
      "PAN, TAN & Bank Account",
      "Post-Incorporation Compliance",
    ],
    timeline: "7-10 Days",
  },
  {
    icon: "🤝",
    title: "LLP Registration",
    description:
      "Combines partnership flexibility with corporate limited liability protection for professionals.",
    features: [
      "DPIN & DSC for Partners",
      "LLP Agreement Drafting",
      "Name Reservation & Filing",
      "ROC Compliance Setup",
    ],
    timeline: "10-15 Days",
  },
  {
    icon: "👤",
    title: "OPC Registration",
    description:
      "Single-member company with full limited liability. Perfect for solo entrepreneurs building a brand.",
    features: [
      "Single Director Setup",
      "Nominee Director Appointment",
      "Complete Incorporation",
      "Annual Compliance Calendar",
    ],
    timeline: "7-10 Days",
  },
  {
    icon: "📋",
    title: "MSME Udyam Registration",
    description:
      "Official MSME recognition unlocking government subsidies, priority lending, and scheme benefits.",
    features: [
      "Udyam Portal Registration",
      "MSME Certificate Issuance",
      "Scheme Eligibility Mapping",
      "Annual Update Support",
    ],
    timeline: "1-2 Days",
  },
  {
    icon: "💼",
    title: "GST Registration",
    description:
      "Mandatory tax registration for businesses crossing turnover threshold or dealing in interstate trade.",
    features: [
      "GSTIN Application",
      "Input Tax Credit Setup",
      "Return Filing Guidance",
      "Compliance Calendar",
    ],
    timeline: "3-7 Days",
  },
  {
    icon: "🚀",
    title: "Startup India (DPIIT)",
    description:
      "Official startup recognition for tax exemptions, self-certification, and access to government schemes.",
    features: [
      "DPIIT Portal Filing",
      "Innovation Certificate",
      "Tax Benefit Application",
      "Scheme Access Setup",
    ],
    timeline: "7-14 Days",
  },
];

const whyChooseUs = [
  "DSC & DIN included at no extra cost",
  "Dedicated compliance manager assigned",
  "MOA & AOA professionally drafted",
  "PAN & TAN application handled",
  "Bank account opening assistance",
  "Post-registration compliance calendar",
  "Name approval strategy & backup options",
  "All government portal filings managed",
  "Ongoing annual compliance support",
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We understand your goals, industry, and growth plans to recommend the ideal business structure.",
  },
  {
    step: "02",
    title: "Documentation",
    description:
      "Our team prepares all incorporation paperwork — MOA, AOA, KYC, and registered office proofs.",
  },
  {
    step: "03",
    title: "Filing & Registration",
    description:
      "Applications filed across MCA, GST, MSME portals with real-time status tracking.",
  },
  {
    step: "04",
    title: "Handover & Support",
    description:
      "Receive your incorporation certificate with PAN, TAN, and a 12-month compliance roadmap.",
  },
];

const faqs = [
  {
    question: "Which business structure should I choose?",
    answer:
      "Pvt Ltd is best for funded startups seeking investor credibility and limited liability. LLP suits professional firms and partnerships. OPC is ideal for solo founders. We analyze your goals, funding needs, and tax situation to recommend the optimal structure.",
  },
  {
    question: "How quickly can I get my company registered?",
    answer:
      "Standard Pvt Ltd registration takes 7-10 working days. LLP takes 10-15 days, OPC 7-10 days. We offer express processing where government timelines allow. All timelines are subject to MCA portal availability.",
  },
  {
    question: "Is there a minimum capital requirement?",
    answer:
      "No minimum authorized capital is required for Pvt Ltd, LLP, or OPC in India. You can incorporate with as little as ₹1,000 authorized capital and increase it later as your business grows.",
  },
  {
    question: "Do I need a physical office for registration?",
    answer:
      "Yes, a registered office address is mandatory. You'll need a rent agreement or ownership proof with a utility bill. We guide you on compliant virtual office options if you don't have a physical space yet.",
  },
  {
    question: "What ongoing compliance is required after registration?",
    answer:
      "Pvt Ltd companies must file annual returns (MGT-7), financial statements (AOC-4), hold board meetings, maintain statutory registers, and file income tax returns. We provide a complete compliance calendar and reminder system.",
  },
];

export default function BusinessRegistrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      {/* ───────────────────────────── HERO ───────────────────────────── */}
      <section className="hero-navy-gradient py-20 lg:py-28">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <FadeIn>
              <span className="inline-block bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                🏢 Business Registration
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Launch Your Business with{" "}
                <span className="text-primary">
                  Complete Legal Compliance
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                End-to-end company registration services from entity selection
                to incorporation certificate. Get your business legally
                compliant in as few as 7 days with expert guidance.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { value: "5000+", label: "Businesses Registered" },
                  { value: "7-10", label: "Days Avg. Timeline" },
                  { value: "99%", label: "Success Rate" },
                  { value: "50+", label: "Entity Types" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <p className="text-2xl md:text-3xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <ButtonHover>
                  <Link href="/contact" className="btn-hero-green">
                    Start Registration
                  </Link>
                </ButtonHover>
                <ButtonHover>
                  <a href="tel:9737799937" className="btn-hero-outline">
                    Talk to Expert
                  </a>
                </ButtonHover>
              </div>
            </FadeIn>

            {/* Image */}
            <SlideIn direction="right">
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <Image
                  src="/business_registration_hero_premium_1769686804174.png"
                  alt="Business Registration Services"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ─────────────────────── OUR SERVICES ─────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block bg-green-50 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Business Registration Solutions
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Choose the right business structure and let us handle the entire
                registration process from start to finish.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <ScaleOnHover>
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                    <span className="text-4xl mb-4 block">{service.icon}</span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>

                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-slate-700"
                        >
                          <svg
                            className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-sm font-semibold text-primary">
                        ⏱ Timeline: {service.timeline}
                      </span>
                    </div>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ──────────────────── WHY CHOOSE US ──────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <span className="inline-block bg-green-50 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Everything You Need for a{" "}
                  <span className="text-primary">Hassle-Free</span>{" "}
                  Registration
                </h2>
                <p className="text-lg text-slate-600 mb-10">
                  From documentation to compliance, we cover every aspect of
                  business registration so you can focus on building your
                  company.
                </p>
              </FadeIn>

              <StaggerContainer className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <SlideIn direction="right">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: "5000+", label: "Businesses Registered", icon: "🏢" },
                  { value: "7-10", label: "Days Avg. Turnaround", icon: "⚡" },
                  { value: "99%", label: "Success Rate", icon: "✅" },
                  { value: "50+", label: "Entity Types Covered", icon: "📋" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-gradient-to-br from-[rgba(55,175,225,0.95)] to-[#1B4F8C] rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/5"
                  >
                    <span className="text-3xl mb-3 block">{stat.icon}</span>
                    <p className="text-3xl font-black text-primary mb-1">{stat.value}</p>
                    <p className="text-xs text-gray-300 uppercase tracking-wider font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ────────────────────── HOW IT WORKS ────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block bg-green-50 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Your Registration Journey
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A simple, transparent four-step process to get your business
                legally incorporated.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <SlideUp key={step.step} delay={idx * 0.15}>
                <div className="relative bg-slate-50 rounded-2xl p-8 text-center h-full">
                  <span className="text-5xl font-extrabold text-primary/20 absolute top-4 right-6">
                    {step.step}
                  </span>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <span className="text-primary font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────── FAQ ──────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="container-max max-w-3xl">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block bg-green-50 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Everything you need to know about business registration in
                India.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180" : ""
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
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === idx
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────── CTA ──────────────────────── */}
      <section className="hero-navy-gradient py-20">
        <div className="container-max text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Launch Your Business?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
              Get expert guidance on entity selection and registration. Schedule
              a free consultation today.
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
