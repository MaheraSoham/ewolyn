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

/* ───────────────────────── data ───────────────────────── */

const heroStats = [
  { value: "800+", label: "Certifications Delivered" },
  { value: "15-45 Days", label: "Average" },
  { value: "100%", label: "Approval Rate" },
  { value: "20+", label: "Certification Types" },
];

const services = [
  {
    icon: "🏆",
    title: "ISO Certification",
    description:
      "Internationally recognized quality management standards that signal operational excellence to clients and partners.",
    features: [
      "ISO 9001 Quality Management",
      "ISO 14001 Environmental",
      "ISO 27001 Information Security",
      "ISO 45001 Occupational H&S",
    ],
    timeline: "30-60 Days",
  },
  {
    icon: "🍽️",
    title: "FSSAI License",
    description:
      "Mandatory food safety certification for manufacturers, restaurants, cloud kitchens, and packaged food businesses.",
    features: [
      "Central/State FSSAI License",
      "Food Safety Compliance",
      "Label & Packaging Review",
      "Annual Return Filing",
    ],
    timeline: "15-30 Days",
  },
  {
    icon: "®️",
    title: "Trademark Registration",
    description:
      "Protect your brand name, logo, and tagline from unauthorized use with legal ownership across India.",
    features: [
      "Trademark Search & Analysis",
      "Application Filing",
      "Objection Handling",
      "Registration Certificate",
    ],
    timeline: "6-18 Months",
  },
  {
    icon: "🌐",
    title: "Import Export Code (IEC)",
    description:
      "Essential license from DGFT for businesses engaged in international trade. Lifetime validity.",
    features: [
      "DGFT Portal Application",
      "Document Preparation",
      "IEC Certificate Issuance",
      "Export Benefit Guidance",
    ],
    timeline: "3-5 Days",
  },
  {
    icon: "✔️",
    title: "BIS Certification",
    description:
      "Bureau of Indian Standards certification mandatory for products requiring ISI mark in the Indian market.",
    features: [
      "Product Testing Coordination",
      "BIS Application Filing",
      "Factory Inspection Support",
      "License Maintenance",
    ],
    timeline: "45-90 Days",
  },
  {
    icon: "📜",
    title: "Other Licenses",
    description:
      "Industry-specific licenses and NOCs including Shop Act, Trade License, Pollution NOC, Fire NOC, and more.",
    features: [
      "Shop Act Registration",
      "Trade License Filing",
      "Pollution & Fire NOC",
      "Industry-Specific Permits",
    ],
    timeline: "7-30 Days",
  },
];

const whyChooseUs = [
  "Enhanced business credibility overnight",
  "Access to government tenders & contracts",
  "Stronger customer trust & confidence",
  "Competitive edge in your industry",
  "Export market doors opened",
  "Complete legal & regulatory compliance",
  "Brand protection from day one",
  "Quality assurance documentation",
  "Audit preparation & support included",
];

const processSteps = [
  {
    step: "01",
    title: "Requirement Analysis",
    description:
      "Identify which certifications your business needs based on industry, goals, and target markets.",
  },
  {
    step: "02",
    title: "Gap Assessment",
    description:
      "Evaluate current compliance status, prepare documentation, and address any shortfalls before filing.",
  },
  {
    step: "03",
    title: "Application & Filing",
    description:
      "Submit applications with meticulous documentation to relevant authorities and certification bodies.",
  },
  {
    step: "04",
    title: "Certification & Handover",
    description:
      "Coordinate inspections or audits, obtain certificates, and set up renewal reminders.",
  },
];

const faqs = [
  {
    question: "Which ISO certification does my business need?",
    answer:
      "ISO 9001 is recommended for all businesses (quality management). ISO 14001 for environmental compliance, ISO 45001 for workplace safety, ISO 27001 for IT/data companies. We assess your industry and recommend the right certifications.",
  },
  {
    question: "Is FSSAI license mandatory for all food businesses?",
    answer:
      "Yes, every food business in India — manufacturers, restaurants, traders, cloud kitchens, packaged food brands, and distributors — must obtain an FSSAI license. The type (Basic, State, or Central) depends on your annual turnover.",
  },
  {
    question: "How long does trademark registration take?",
    answer:
      "The full registration process takes 12-18 months. However, you receive the TM symbol immediately after filing and can use it for brand protection while your application is under examination.",
  },
  {
    question: "What is the validity period of IEC?",
    answer:
      "Import Export Code has lifetime validity with no renewal required. It's a permanent 10-digit code issued by DGFT. However, you must update your KYC details annually on the DGFT portal.",
  },
  {
    question: "Do you handle certification renewals?",
    answer:
      "Yes, we provide complete renewal and surveillance audit support for ISO certifications, FSSAI licenses, BIS licenses, and other periodic certifications. We send automated reminders 90 days before expiry.",
  },
];

/* ───────────────────────── page ───────────────────────── */

export default function CertificationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-hidden">
      {/* ─── 1. Hero ─── */}
      <section className="hero-navy-gradient py-20 lg:py-28">
        <div className="container-max grid lg:grid-cols-2 gap-12 items-center">
          {/* text */}
          <FadeIn>
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              ✅ Certifications &amp; IP Protection
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Establish Trust with Industry-Leading Certifications
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              Obtain essential business certifications that boost customer
              confidence, open doors to government tenders, and protect your
              intellectual property from Day 1.
            </p>

            {/* stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-primary">
                    {s.value}
                  </p>
                  <p className="text-sm text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <ButtonHover>
                <Link href="/contact" className="btn-hero-green">
                  Get Certified Today
                </Link>
              </ButtonHover>
              <ButtonHover>
                <Link href="/contact" className="btn-hero-outline">
                  Talk to Expert
                </Link>
              </ButtonHover>
            </div>
          </FadeIn>

          {/* image */}
          <SlideIn direction="right">
            <Image
              src="/certifications_hero_image_premium_1769686077900.png"
              alt="Certifications & IP Protection"
              width={640}
              height={480}
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              priority
            />
          </SlideIn>
        </div>
      </section>

      {/* ─── 2. Our Services ─── */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Certification Services
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                End-to-end certification support — from application to approval
                — so you can focus on growing your business.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <StaggerItem key={svc.title}>
                <ScaleOnHover>
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                    <span className="text-4xl mb-4 block">{svc.icon}</span>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-5">
                      {svc.description}
                    </p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {svc.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <span className="text-primary mt-0.5">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-xs font-medium text-slate-500">
                        Timeline:{" "}
                        <span className="text-primary font-semibold">
                          {svc.timeline}
                        </span>
                      </span>
                    </div>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── 3. Why Choose Us ─── */}
      <section className="py-20 bg-slate-50">
        <div className="container-max grid lg:grid-cols-2 gap-14 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
              Why Choose Ewolyn for Certifications?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <SlideIn direction="right">
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "ISO", icon: "🏆", color: "border-blue-400" },
                { name: "FSSAI", icon: "🍽️", color: "border-green-400" },
                { name: "Trademark", icon: "™️", color: "border-purple-400" },
                { name: "IEC", icon: "🌍", color: "border-orange-400" },
                { name: "BIS", icon: "✅", color: "border-red-400" },
                { name: "MSME", icon: "🏭", color: "border-teal-400" },
              ].map((cert) => (
                <div
                  key={cert.name}
                  className={`bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-lg transition-all duration-300 border-2 ${cert.color} hover:-translate-y-1`}
                >
                  <span className="text-4xl block mb-3">{cert.icon}</span>
                  <p className="font-bold text-slate-800 text-sm">{cert.name}</p>
                  <p className="text-[10px] text-primary font-semibold uppercase tracking-wider mt-1">Certified</p>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ─── 4. How It Works ─── */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How It Works
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                A streamlined four-step process that takes the complexity out of
                certifications.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((ps) => (
              <SlideUp key={ps.step}>
                <div className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
                  <span className="text-5xl font-extrabold text-primary/20 block mb-3">
                    {ps.step}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {ps.title}
                  </h3>
                  <p className="text-sm text-slate-600">{ps.description}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. FAQ ─── */}
      <section className="py-20 bg-slate-50">
        <div className="container-max max-w-3xl">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <FadeIn key={idx}>
                  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                    >
                      <span className="font-medium text-slate-900">
                        {faq.question}
                      </span>
                      <span
                        className={`text-primary text-xl transition-transform ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 6. CTA ─── */}
      <section className="hero-navy-gradient py-20">
        <div className="container-max text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Certified?
            </h2>
            <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10">
              Boost your business credibility with the right certifications.
              Talk to our experts today.
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
