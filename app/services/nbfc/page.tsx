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
    icon: "⚡",
    title: "Quick Business Loans",
    description:
      "Fast-disbursement unsecured loans for urgent working capital needs — minimal paperwork, maximum speed.",
    features: [
      "Unsecured Loans (₹1L-₹50L)",
      "Overdraft Facilities",
      "Revenue-Based Financing",
      "Merchant Cash Advance",
    ],
    timeline: "24-72 Hours",
  },
  {
    icon: "🏗️",
    title: "Equipment Leasing & Finance",
    description:
      "Acquire machinery and equipment through lease or hire-purchase without heavy upfront capital.",
    features: [
      "Operating & Finance Lease",
      "Hire Purchase Agreements",
      "Sale & Leaseback",
      "Technology Lease Programs",
    ],
    timeline: "5-7 Days",
  },
  {
    icon: "📄",
    title: "Invoice & Trade Finance",
    description:
      "Unlock cash tied up in invoices and receivables to maintain healthy cash flow.",
    features: [
      "Invoice Discounting",
      "Supply Chain Financing",
      "Purchase Order Funding",
      "Vendor Bill Discounting",
    ],
    timeline: "24-48 Hours",
  },
  {
    icon: "🚗",
    title: "Vehicle & Fleet Finance",
    description:
      "Dedicated financing for commercial vehicles, logistics fleets, and transport businesses.",
    features: [
      "New Commercial Vehicle Loans",
      "Used Vehicle Refinancing",
      "Fleet Expansion Financing",
      "EV Vehicle Loans",
    ],
    timeline: "3-5 Days",
  },
  {
    icon: "💼",
    title: "MSME Micro Loans",
    description:
      "Small-ticket loans designed for micro-enterprises, gig workers, and first-time borrowers.",
    features: [
      "Micro Loans (₹10K-₹5L)",
      "Digital Lending Programs",
      "Gold-Backed Business Loans",
      "Co-Lending Products",
    ],
    timeline: "Same Day",
  },
  {
    icon: "📊",
    title: "Credit Assessment & Advisory",
    description:
      "Maximize your NBFC loan eligibility with professional credit profiling and application management.",
    features: [
      "NBFC Eligibility Mapping",
      "Credit Score Optimization",
      "Multi-Lender Application Filing",
      "Rate Negotiation & Comparison",
    ],
    timeline: "2-3 Days",
  },
];

const whyChooseUs = [
  "30+ NBFC partnerships for best rates",
  "72-hour fast-track loan processing",
  "Flexible eligibility — low CIBIL accepted",
  "Minimal documentation required",
  "Customized repayment structures",
  "Dedicated NBFC relationship managers",
  "Transparent fee structure — no hidden costs",
  "Post-disbursement compliance support",
  "Alternative credit assessment methods",
];

const processSteps = [
  {
    step: "01",
    title: "Credit Profiling",
    description:
      "Analyze your business profile, financials, and credit history to identify the best NBFC product match.",
  },
  {
    step: "02",
    title: "NBFC Matching",
    description:
      "Shortlist 3-5 suitable NBFCs based on rates, eligibility criteria, and processing speed.",
  },
  {
    step: "03",
    title: "Application & Processing",
    description:
      "Submit applications with optimized documentation and coordinate with NBFC underwriters.",
  },
  {
    step: "04",
    title: "Disbursement & Servicing",
    description:
      "Secure sanction, ensure quick disbursement, and provide ongoing loan management support.",
  },
];

const faqs = [
  {
    question: "How are NBFC loans different from bank loans?",
    answer:
      "NBFCs offer faster processing (24-72 hours vs 7-15 days), flexible eligibility (lower CIBIL accepted), minimal documentation, and customized repayment. Interest rates are slightly higher (14-24%) but approval chances are significantly better for MSMEs and startups.",
  },
  {
    question: "What CIBIL score is needed for NBFC loans?",
    answer:
      "Many NBFCs approve loans with CIBIL scores as low as 550-600, compared to 650+ for banks. Some offer alternative credit assessment using GST data, bank statements, and business cash flows, making them ideal for new businesses or those with lower scores.",
  },
  {
    question: "What types of businesses can get NBFC financing?",
    answer:
      "Sole proprietors, partnerships, LLPs, private limited companies, OPCs, and even gig economy workers can access NBFC financing. Manufacturing, trading, services, logistics, agriculture, and e-commerce are all covered. NBFCs are more sector-agnostic than banks.",
  },
  {
    question: "Is NBFC lending regulated and safe?",
    answer:
      "Yes, all our NBFC partners are RBI-registered and regulated. They follow RBI Fair Practices Code, maintain capital adequacy ratios, and provide proper loan agreements. We only work with established NBFCs with proven track records.",
  },
  {
    question: "Can I get an NBFC loan if a bank rejected my application?",
    answer:
      "Yes — this is one of the biggest advantages of NBFCs. They use different underwriting criteria, accept alternative income proofs, and are more flexible with documentation. Many of our clients who were bank-rejected successfully obtained NBFC financing through us.",
  },
];

export default function NBFCFinancingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* ════════ Hero ════════ */}
      <section className="hero-navy-gradient relative overflow-hidden">
        <div className="container-max py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-accent-green/10 text-accent-green font-semibold text-sm mb-6">
                  🏦 NBFC Financing
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Flexible NBFC Financing for{" "}
                  <span className="text-accent-green">Faster Business Growth</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                  When banks say no, NBFCs say yes. Access quick-approval loans,
                  equipment leasing, and custom credit solutions from 30+ NBFC
                  partners with minimal documentation and flexible eligibility.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { value: "₹75Cr+", label: "NBFC Loans" },
                    { value: "30+", label: "NBFC Partners" },
                    { value: "72-Hour", label: "Processing" },
                    { value: "90%", label: "Approval Rate" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-accent-green">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <ButtonHover>
                    <Link href="/contact" className="btn-hero-green">
                      Explore NBFC Options
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
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/nbfc_financing_hero_premium_1769686369877.png"
                  alt="NBFC Financing"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ════════ Services ════════ */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent-green/10 text-accent-green font-semibold text-sm mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive NBFC Financing Solutions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From quick business loans to equipment leasing — we connect you
                with the right NBFC product for your specific needs.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <StaggerItem key={i}>
                  <ScaleOnHover>
                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6 flex-grow">
                        {service.features.map((feature, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <span className="text-accent-green mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-gray-100 mt-auto">
                        <span className="text-sm text-gray-500">Timeline: </span>
                        <span className="text-sm font-semibold text-accent-green">
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

      {/* ════════ Why Choose Us ════════ */}
      <section className="py-20">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div className="space-y-5">
                <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3">🏦 Traditional Bank</p>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-slate-300">15-30 Days</span>
                    <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-red-200 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">CIBIL 650+ required • Heavy documentation • Collateral mandatory</p>
                </div>
                <div className="text-center text-slate-300 font-bold text-sm">VS</div>
                <div className="bg-gradient-to-br from-[#0a1628] to-[#1B4F8C] rounded-2xl p-6 shadow-xl border border-accent-green/20">
                  <p className="text-xs font-bold text-accent-green uppercase tracking-widest mb-3">⚡ NBFC (via Ewolyn)</p>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-accent-green">24-72 Hours</span>
                    <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[25%] bg-gradient-to-r from-accent-green to-emerald-400 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">CIBIL 550+ accepted • Minimal docs • Collateral-free options</p>
                </div>
                <div className="bg-accent-green/10 rounded-xl p-4 text-center">
                  <p className="text-sm font-bold text-accent-green">Up to 10x faster processing with NBFC partners</p>
                </div>
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-accent-green/10 text-accent-green font-semibold text-sm mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Why Businesses Trust Us for NBFC Financing
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-accent-green text-lg mt-0.5">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ════════ How It Works ════════ */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent-green/10 text-accent-green font-semibold text-sm mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our streamlined 4-step process gets you from application to
                disbursement in the shortest possible time.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <StaggerItem key={i}>
                  <div className="relative bg-white rounded-2xl p-8 shadow-sm text-center">
                    <div className="text-5xl font-black text-accent-green/20 mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section className="py-20">
        <div className="container-max max-w-3xl">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent-green/10 text-accent-green font-semibold text-sm mb-4">
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <SlideUp key={i}>
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`text-accent-green text-2xl transition-transform duration-300 ${
                        openFAQ === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openFAQ === i && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="py-20 hero-navy-gradient">
        <div className="container-max text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Quick Business Financing?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore NBFC loan options tailored for your business — fast
              approval, flexible terms, minimal paperwork.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonHover>
                <Link href="/contact" className="btn-hero-green">
                  Get NBFC Loan Options →
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

