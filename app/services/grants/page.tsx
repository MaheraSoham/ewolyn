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
    icon: "🚀",
    title: "Startup India Grants",
    description:
      "Access Seed Fund, Fund of Funds, and other DPIIT-linked benefits for recognized startups.",
    features: [
      "DPIIT Recognition Application",
      "Seed Fund Scheme (up to ₹50L)",
      "Fund of Funds Access",
      "Tax Exemption under 80IAC",
    ],
    timeline: "15-30 Days",
  },
  {
    icon: "🏭",
    title: "MSME & CLCSS Subsidies",
    description:
      "Claim technology upgrade subsidies and capital investment grants under MSME incentive schemes.",
    features: [
      "CLCSS (15% Capital Subsidy)",
      "PM Vishwakarma Scheme",
      "SFURTI Cluster Funding",
      "Lean Manufacturing Support",
    ],
    timeline: "30-60 Days",
  },
  {
    icon: "🔬",
    title: "R&D & Innovation Grants",
    description:
      "Secure funding for research, product development, and technology innovation projects.",
    features: [
      "DSIR Recognition",
      "BIRAC BIG Grant (up to ₹50L)",
      "NIDHI Prayas (up to ₹10L)",
      "TDB Project Funding",
    ],
    timeline: "45-90 Days",
  },
  {
    icon: "🌾",
    title: "Sector-Specific Schemes",
    description:
      "Specialized grants for food processing, textiles, electronics, and other priority industries.",
    features: [
      "PMFME (Food Processing up to ₹10L)",
      "TUFS (Textile Upgradation)",
      "PLI Scheme Facilitation",
      "Agri-Infrastructure Fund",
    ],
    timeline: "Varies",
  },
  {
    icon: "📋",
    title: "State Government Incentives",
    description:
      "Navigate state-specific industrial policies, SGST refunds, and land/power subsidies.",
    features: [
      "State Industrial Policy Benefits",
      "Stamp Duty & SGST Reimbursement",
      "Land Subsidy & Power Tariff Benefits",
      "Employment-Linked Incentives",
    ],
    timeline: "30-90 Days",
  },
  {
    icon: "📑",
    title: "Application & Documentation",
    description:
      "End-to-end support from eligibility check to application filing and disbursement tracking.",
    features: [
      "Eligibility Assessment",
      "Project Report Preparation",
      "Application Filing & Follow-up",
      "Disbursement & Utilization Support",
    ],
    timeline: "Ongoing",
  },
];

const whyChooseUs = [
  "Deep knowledge of 30+ government schemes",
  "85% grant approval success rate",
  "End-to-end application management",
  "State and central scheme expertise",
  "Sector-specific guidance advantage",
  "Zero-cost eligibility assessment",
  "Post-sanction compliance support",
  "Dedicated scheme tracking dashboard",
  "Regular updates on new schemes",
];

const processSteps = [
  {
    step: "01",
    title: "Eligibility Check",
    description:
      "Assess your business profile against 30+ central and state government schemes to identify matching grants.",
  },
  {
    step: "02",
    title: "Documentation Prep",
    description:
      "Compile project reports, financial statements, Udyam/DPIIT certificates, and all required paperwork.",
  },
  {
    step: "03",
    title: "Application Filing",
    description:
      "Submit applications through official portals with complete documentation and follow up with authorities.",
  },
  {
    step: "04",
    title: "Disbursement Support",
    description:
      "Track approval status, coordinate with nodal agencies, and ensure timely fund disbursement.",
  },
];

const faqs = [
  {
    question: "What is the difference between grants and subsidies?",
    answer:
      "Grants are non-repayable funds given for specific projects (e.g., Seed Fund up to ₹50L for startups). Subsidies reduce costs, like CLCSS which reimburses 15% of capital expenditure on technology. Both don't need to be repaid, unlike loans.",
  },
  {
    question: "Who is eligible for government grants?",
    answer:
      "MSMEs registered under Udyam, DPIIT-recognized startups, women entrepreneurs, SC/ST-owned businesses, and sector-specific enterprises (food processing, textiles, etc.) are eligible for various schemes. Eligibility depends on turnover, investment, years in operation, and industry.",
  },
  {
    question: "How long does the grant approval process take?",
    answer:
      "Timelines vary by scheme — Startup India DPIIT recognition takes 2-4 weeks, CLCSS subsidy disbursement takes 3-6 months after machinery purchase, and R&D grants like BIRAC BIG may take 3-6 months for evaluation and sanction.",
  },
  {
    question: "Do I need to pay back government grants?",
    answer:
      "No. Grants and subsidies are non-repayable benefits from the government. However, you must use the funds for the approved purpose and submit utilization certificates. Misuse may attract penalties and recovery.",
  },
  {
    question: "Can I apply for multiple schemes simultaneously?",
    answer:
      "Yes, you can apply for multiple non-overlapping schemes. For example, a startup can avail DPIIT recognition, Seed Fund, state SGST reimbursement, and CLCSS subsidy simultaneously, as long as the same expense isn't claimed under two schemes.",
  },
];

export default function GrantsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* ===== HERO ===== */}
      <section className="hero-navy-gradient relative overflow-hidden">
        <div className="container-max py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div>
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                  🏛️ Government Grants
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Access Government Grants &amp; Subsidies for Your Business
                </h1>
                <p className="text-lg text-gray-300 mb-8 max-w-xl">
                  Expert guidance on securing non-repayable government grants,
                  subsidies, and scheme benefits for MSMEs and startups. Maximize
                  your entitlements with our proven application support.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { value: "₹50Cr+", label: "Grants Secured" },
                    { value: "200+", label: "Applications Filed" },
                    { value: "85%", label: "Approval Rate" },
                    { value: "30+", label: "Schemes Covered" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <ButtonHover>
                    <Link href="/eligibility-results" className="btn-hero-green">
                      Check Grant Eligibility
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

            <SlideIn direction="right">
              <div className="relative w-full h-[350px] lg:h-[450px] rounded-2xl overflow-hidden">
                <Image
                  src="/government_grants_hero_premium_1769686253475.png"
                  alt="Government Grants & Subsidies"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Grant &amp; Subsidy Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive support to help you identify, apply, and secure
                government funding across central and state schemes.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <ScaleOnHover>
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-5">{service.description}</p>
                    <ul className="space-y-2 mb-6 flex-1">
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
                      <span className="text-sm font-medium text-primary">
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

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <SlideIn direction="left">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-6">✅ Our Grant Track Record</p>
                {[
                  { label: "Total Grants Secured", value: "₹50Cr+", pct: "95%" },
                  { label: "Applications Filed", value: "200+", pct: "80%" },
                  { label: "Approval Rate", value: "85%", pct: "85%" },
                  { label: "Schemes Covered", value: "30+", pct: "75%" },
                ].map((item) => (
                  <div key={item.label} className="mb-5 last:mb-0">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-sm text-slate-600 font-medium">{item.label}</span>
                      <span className="text-lg font-black text-primary">{item.value}</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full" style={{ width: item.pct }}></div>
                    </div>
                  </div>
                ))}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span className="text-xs text-slate-500">Actively securing grants across 30+ schemes</span>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Why Choose Us
                </h2>
                <StaggerContainer className="grid sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-start gap-3">
                        <span className="text-primary text-lg mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A streamlined four-step process to take you from eligibility
                check to fund disbursement.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <span className="text-2xl font-bold text-primary">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20">
        <div className="container-max max-w-3xl">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
          </FadeIn>

          <SlideUp>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <span className="text-primary text-xl flex-shrink-0">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SlideUp>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 hero-navy-gradient">
        <div className="container-max text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don&apos;t Miss Out on Government Funding
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Check your eligibility for 30+ government grants and subsidies —
              absolutely free.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonHover>
                <Link href="/eligibility-results" className="btn-hero-green">
                  Check Eligibility Now →
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
