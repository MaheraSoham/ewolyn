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
    icon: "🌐",
    title: "Digital Marketing",
    description:
      "Targeted online campaigns across Google, Meta, LinkedIn, and email to drive qualified leads.",
    features: [
      "Google Ads & PPC Campaigns",
      "Social Media Advertising",
      "Email Marketing Automation",
      "SEO & Content Marketing",
    ],
    timeline: "Ongoing",
  },
  {
    icon: "🎨",
    title: "Brand Identity Design",
    description:
      "Create a professional brand presence with cohesive logos, visual systems, and brand guidelines.",
    features: [
      "Logo & Visual Identity",
      "Brand Guidelines & Style Books",
      "Stationery & Collateral Design",
      "Packaging & Label Design",
    ],
    timeline: "10-15 Days",
  },
  {
    icon: "💻",
    title: "Website & App Development",
    description:
      "Responsive, conversion-optimized websites and mobile apps designed to attract and convert visitors.",
    features: [
      "Business Websites & Landing Pages",
      "E-Commerce Store Setup",
      "Mobile App Development",
      "UI/UX Design & Optimization",
    ],
    timeline: "15-30 Days",
  },
  {
    icon: "📱",
    title: "Social Media Management",
    description:
      "Consistent, engaging content across platforms to build community and drive organic growth.",
    features: [
      "Content Calendar & Strategy",
      "Post Design & Copywriting",
      "Community Management",
      "Analytics & Performance Reporting",
    ],
    timeline: "Monthly Retainer",
  },
  {
    icon: "📊",
    title: "Market Research & Analysis",
    description:
      "In-depth market insights to understand customers, competitors, and untapped opportunities.",
    features: [
      "Competitor Landscape Analysis",
      "Target Audience Profiling",
      "Industry Trend Reports",
      "Go-to-Market Strategy",
    ],
    timeline: "5-10 Days",
  },
  {
    icon: "🎬",
    title: "Video & Content Production",
    description:
      "High-impact video content and professional copywriting to tell your brand story.",
    features: [
      "Explainer & Brand Videos",
      "Testimonial & Case Study Videos",
      "Blog & Article Writing",
      "Social Media Reels & Shorts",
    ],
    timeline: "7-14 Days",
  },
];

const whyChooseUs = [
  "Data-driven campaign strategies",
  "Industry-specific MSME expertise",
  "Full-stack creative capabilities",
  "Conversion-focused design approach",
  "Transparent performance reporting",
  "Affordable packages for startups",
  "Multi-platform campaign management",
  "Dedicated brand consultation",
  "Proven results with measurable ROI",
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "Analyze your current brand presence, marketing channels, and identify growth opportunities.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "Define target audiences, campaign goals, messaging framework, and budget allocation.",
  },
  {
    step: "03",
    title: "Execution & Launch",
    description:
      "Design creatives, set up campaigns, publish content, and launch across chosen platforms.",
  },
  {
    step: "04",
    title: "Optimize & Scale",
    description:
      "Monitor metrics, A/B test campaigns, refine strategies, and scale what delivers results.",
  },
];

const faqs = [
  {
    question: "How long until I see results from digital marketing?",
    answer:
      "SEO typically shows meaningful results in 3-6 months with sustained growth thereafter. Paid advertising (Google/Meta Ads) generates leads within the first week of campaign launch. Social media engagement usually picks up within 30-60 days of consistent posting.",
  },
  {
    question: "What budget should I allocate for marketing?",
    answer:
      "For startups and MSMEs, we recommend starting with ₹15,000-₹50,000/month for digital campaigns. We optimize spend based on performance to maximize ROI. Brand identity projects are typically one-time investments ranging from ₹25,000-₹1,00,000 depending on scope.",
  },
  {
    question: "Do you work with businesses in my industry?",
    answer:
      "We've worked across 15+ industries including manufacturing, FMCG, healthcare, education, real estate, IT services, hospitality, agriculture, retail, and professional services. Our strategies are customized to your specific market dynamics.",
  },
  {
    question: "What platforms do you manage campaigns on?",
    answer:
      "We manage campaigns on Google Ads, Meta (Facebook & Instagram), LinkedIn, YouTube, X (Twitter), email platforms (Mailchimp, Sendinblue), and WhatsApp Business. We recommend the best mix based on your target audience and industry.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We audit your current website for design, speed, mobile responsiveness, and SEO. Then we provide a complete redesign with modern UI/UX, conversion optimization, and proper technical SEO — typically delivered within 15-30 days.",
  },
];

const stats = [
  { value: "200+", label: "Brands Built" },
  { value: "5x", label: "Avg ROI" },
  { value: "150+", label: "Digital Campaigns" },
  { value: "15+", label: "Industry Sectors" },
];

export default function MarketingBrandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-navy-gradient relative overflow-hidden">
        <div className="container-max py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                  📢 Marketing &amp; Branding
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Amplify Your Brand &amp; Drive Business Growth
                </h1>
                <p className="text-lg text-gray-300 mb-8 max-w-xl">
                  Data-driven marketing strategies and creative branding
                  solutions tailored for MSMEs and startups. From digital
                  campaigns to brand identity, we help you stand out and scale
                  faster.
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <ButtonHover>
                    <Link href="/contact" className="btn-hero-green">
                      Boost Your Brand
                    </Link>
                  </ButtonHover>
                  <ButtonHover>
                    <Link href="/contact" className="btn-hero-outline">
                      Talk to Expert
                    </Link>
                  </ButtonHover>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <div className="relative w-full h-[350px] lg:h-[450px] rounded-2xl overflow-hidden">
                <Image
                  src="/marketing_branding_hero_premium_1769687063274.png"
                  alt="Marketing & Branding Services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Marketing &amp; Branding Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                End-to-end solutions to establish, grow, and scale your brand
                across every channel.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <StaggerItem key={i}>
                  <ScaleOnHover>
                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-5">{service.description}</p>
                      <ul className="space-y-2 mb-6 flex-grow">
                        {service.features.map((feature, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <span className="text-primary mt-0.5">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-gray-100">
                        <span className="text-sm font-semibold text-primary">
                          ⏱ Timeline: {service.timeline}
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
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <SlideIn direction="left">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "Google", icon: "🔍", bg: "bg-red-50", border: "border-red-200" },
                  { name: "Meta", icon: "📘", bg: "bg-blue-50", border: "border-blue-200" },
                  { name: "LinkedIn", icon: "💼", bg: "bg-sky-50", border: "border-sky-200" },
                  { name: "YouTube", icon: "▶️", bg: "bg-rose-50", border: "border-rose-200" },
                  { name: "Email", icon: "📧", bg: "bg-amber-50", border: "border-amber-200" },
                  { name: "Analytics", icon: "📊", bg: "bg-emerald-50", border: "border-emerald-200" },
                ].map((platform) => (
                  <div
                    key={platform.name}
                    className={`${platform.bg} ${platform.border} border-2 rounded-2xl p-5 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md`}
                  >
                    <span className="text-3xl block mb-2">{platform.icon}</span>
                    <p className="text-sm font-bold text-slate-700">{platform.name}</p>
                    <div className="mt-2 h-1 w-8 bg-primary/40 rounded-full mx-auto"></div>
                  </div>
                ))}
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Why Choose Us
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-primary/10"
                    >
                      <span className="text-primary font-bold text-lg">
                        ✓
                      </span>
                      <span className="text-gray-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A proven four-step process to take your brand from where it is
                to where it should be.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <StaggerItem key={i}>
                  <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center h-full">
                    <div className="text-5xl font-extrabold text-primary/20 mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-20 bg-white">
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
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`text-primary text-xl flex-shrink-0 transition-transform duration-300 ${
                        openFaq === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i ? "max-h-96 pb-5" : "max-h-0"
                    }`}
                  >
                    <p className="px-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SlideUp>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="hero-navy-gradient py-20">
        <div className="container-max text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Grow Your Brand?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Get a free brand audit and marketing strategy session tailored for
              your MSME or startup.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonHover>
                <Link href="/contact" className="btn-hero-green">
                  Get Free Brand Audit →
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
