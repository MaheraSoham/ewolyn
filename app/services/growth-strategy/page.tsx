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
    icon: "🎯",
    title: "Digital Marketing",
    description:
      "Performance-driven marketing campaigns across search, social, and display channels for maximum ROI.",
    features: [
      "SEO & Search Marketing",
      "Google & Meta Ads Management",
      "Content Marketing Strategy",
      "Email & Automation Campaigns",
    ],
    timeline: "Ongoing",
  },
  {
    icon: "🎨",
    title: "Brand Building",
    description:
      "Craft a powerful brand identity that resonates with your target audience and stands out in the market.",
    features: [
      "Logo & Visual Identity Design",
      "Brand Positioning Strategy",
      "Brand Guidelines Document",
      "Messaging & Tone Framework",
    ],
    timeline: "2-4 Weeks",
  },
  {
    icon: "📊",
    title: "Market Analysis",
    description:
      "Deep-dive competitor research, market trends, and customer insights for informed business decisions.",
    features: [
      "Competitor Landscape Mapping",
      "Customer Persona Development",
      "Market Size & Opportunity Analysis",
      "Industry Trend Reports",
    ],
    timeline: "1-2 Weeks",
  },
  {
    icon: "💡",
    title: "Business Planning",
    description:
      "Strategic roadmaps, expansion plans, revenue models, and growth projections for sustainable scaling.",
    features: [
      "DPR & Project Reports",
      "Investor Pitch Deck Creation",
      "Revenue Model Design",
      "Expansion Blueprint",
    ],
    timeline: "2-3 Weeks",
  },
  {
    icon: "🌐",
    title: "Website & App Development",
    description:
      "Professional digital platforms that convert visitors into customers with modern UX and fast performance.",
    features: [
      "Business Website Development",
      "E-commerce Platforms",
      "Mobile App (iOS & Android)",
      "Performance Optimization",
    ],
    timeline: "4-8 Weeks",
  },
  {
    icon: "📱",
    title: "Social Media Management",
    description:
      "Build engaged communities and drive brand awareness through strategic social media presence.",
    features: [
      "Content Calendar & Creation",
      "Community Engagement",
      "Influencer Collaboration",
      "Analytics & Reporting",
    ],
    timeline: "Ongoing",
  },
];

const whyChooseUs = [
  "Increased online visibility & traffic",
  "Higher customer acquisition rates",
  "Improved brand recognition",
  "Data-driven decision making",
  "Better conversion & retention rates",
  "Competitive advantage in your niche",
  "Scalable growth systems built to last",
  "ROI-focused strategy execution",
  "Dedicated growth consultant assigned",
];

const processSteps = [
  {
    step: "01",
    title: "Business Audit",
    description:
      "We analyze your current positioning, challenges, revenue streams, and untapped growth opportunities.",
  },
  {
    step: "02",
    title: "Strategy Design",
    description:
      "Create a customized growth roadmap with clear milestones, KPIs, and actionable priorities.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Execute marketing campaigns, branding initiatives, and digital strategies with weekly reporting.",
  },
  {
    step: "04",
    title: "Optimization",
    description:
      "Track performance metrics, A/B test continuously, and refine strategies to maximize ROI.",
  },
];

const faqs = [
  {
    question: "How long before I see results from digital marketing?",
    answer:
      "SEO typically shows meaningful results in 3-6 months. Paid campaigns on Google Ads and social media can generate leads within the first 1-2 weeks. We set realistic timelines and provide monthly performance dashboards.",
  },
  {
    question: "Do you work with specific industries?",
    answer:
      "Yes, we have proven experience across 15+ industries including manufacturing, professional services, retail, healthcare, education, real estate, and e-commerce. Every strategy is customized to your industry dynamics.",
  },
  {
    question: "What's included in brand building services?",
    answer:
      "Complete brand identity package — logo design, color palette, typography, brand guidelines document, messaging framework, positioning strategy, and brand story development. Everything you need for a cohesive brand presence.",
  },
  {
    question: "Can you help expand to new cities or states?",
    answer:
      "Absolutely. We provide market research, competitor analysis, entry strategy, local marketing campaigns, channel partner development, and on-ground activation support for geographical expansion.",
  },
  {
    question: "Do you build websites and mobile apps?",
    answer:
      "Yes, we develop responsive business websites, e-commerce platforms, progressive web apps, and native mobile apps (iOS & Android). Everything is integrated with your marketing strategy for seamless lead capture.",
  },
];

export default function GrowthStrategyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-navy-gradient relative overflow-hidden py-20 lg:py-28">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <FadeIn>
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  📈 Growth Strategy
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Scale Your Business{" "}
                  <span className="text-primary">Strategically</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 max-w-xl">
                  Accelerate your growth with data-driven strategies in digital
                  marketing, branding, market expansion, and business planning.
                  Measurable results for sustainable scaling.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { value: "300%", label: "Avg. Growth" },
                    { value: "200+", label: "Brands Scaled" },
                    { value: "5x", label: "ROI Achieved" },
                    { value: "15+", label: "Industries Served" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <ButtonHover>
                    <Link href="/contact" className="btn-hero-green">
                      Get Growth Plan
                    </Link>
                  </ButtonHover>
                  <ButtonHover>
                    <Link href="/contact" className="btn-hero-outline">
                      Talk to Expert
                    </Link>
                  </ButtonHover>
                </div>
              </div>
            </FadeIn>

            {/* Right: Image */}
            <SlideIn direction="right">
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <Image
                  src="/growth_strategy_hero_premium_1769686968239.png"
                  alt="Growth Strategy"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ===== OUR SERVICES SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive growth solutions tailored to scale your business
                effectively.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <StaggerItem key={service.title}>
                  <ScaleOnHover>
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-5">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-5 flex-grow">
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
                        <span className="text-sm text-gray-500">
                          Timeline:{" "}
                          <span className="font-semibold text-gray-800">
                            {service.timeline}
                          </span>
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

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="py-20 bg-slate-50">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Results-driven growth strategies that deliver measurable
                outcomes.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Checkmark items */}
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseUs.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right: Growth Metrics */}
            <SlideIn direction="right">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Client Growth Metrics</p>
                {[
                  { label: "Revenue Growth", value: "300%", width: "w-[90%]" },
                  { label: "ROI Delivered", value: "5x", width: "w-[80%]" },
                  { label: "Lead Generation", value: "4x", width: "w-[70%]" },
                  { label: "Market Reach", value: "10x", width: "w-[95%]" },
                ].map((metric) => (
                  <div key={metric.label} className="mb-5 last:mb-0">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">{metric.label}</span>
                      <span className="text-sm font-black text-primary">{metric.value}</span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${metric.width} bg-gradient-to-r from-primary to-emerald-400 rounded-full`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A proven four-step process to accelerate your business growth.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <SlideUp key={step.step}>
                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-primary/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-20 bg-slate-50">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about our growth strategy
                services.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index}>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-6 text-left"
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
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="hero-navy-gradient py-20">
        <div className="container-max">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Accelerate Growth?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get a customized growth roadmap for your business. Schedule a
                free strategy session today.
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
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
