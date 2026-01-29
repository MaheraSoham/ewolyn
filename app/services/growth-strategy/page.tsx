"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FadeIn,
  SlideUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  ButtonHover
} from "../../../components/ui/AnimationWrappers";

const growthStrategies = [
  {
    title: "Market Expansion",
    icon: "🌍",
    description: "Scale into new demographics and regions with data-backed entry plans.",
    services: ["Target market analysis", "Go-to-market planning", "Competitive mapping"],
  },
  {
    title: "Product Evolution",
    icon: "💡",
    description: "Refine your value proposition to achieve perfect product-market fit.",
    services: ["MVP strategy", "Feature prioritization", "UX enhancement"],
  },
  {
    title: "Operational Excellence",
    icon: "⚙️",
    description: "Streamline workflows and reduce overhead for sustainable scaling.",
    services: ["Process automation", "Supply chain audit", "Cost optimization"],
  },
  {
    title: "Financial Engineering",
    icon: "📊",
    description: "Structure your business for multi-round funding and exit readiness.",
    services: ["Financial modeling", "Funding roadmap", "CAP table advisory"],
  },
];

const businessPlans = [
  {
    title: "DPR (Detailed Project Report)",
    description: "Comprehensive technical-financial reports for bank loans.",
    ideal: "MSMEs & Manufacturers",
  },
  {
    title: "Investor Pitch Deck",
    description: "High-impact visual narratives to secure venture capital.",
    ideal: "Fundraising Startups",
  },
  {
    title: "TEV Study",
    description: "Techno-Economic Viability studies for large projects.",
    ideal: "Infrastructure & PSU",
  },
  {
    title: "CMA Data",
    description: "Detailed credit monitoring data for working capital.",
    ideal: "Loan Applicants",
  },
];

export default function GrowthStrategyPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        {/* Rose Glow Effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-bold mb-8 shadow-xl">
                <span>📈</span>
                Strategic Advisory
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-accent-green">Engineer Your</span> <br />
                <span className="text-white">Next Pivot</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl font-light">
                Scaling a business requires more than just capital—it requires a roadmap.
                We provide the data, strategy, and mentorship to navigate hyper-growth.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <ButtonHover>
                  <Link href="/contact" className="btn-hero-green bg-rose-600 hover:bg-rose-700">
                    Get Strategy Session
                  </Link>
                </ButtonHover>
                <ButtonHover>
                  <a href="tel:18005710607" className="btn-hero-outline">
                    Expert Consultation
                  </a>
                </ButtonHover>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Scaling Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-400 mb-1">3x</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Avg Growth</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">₹500Cr+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Funding Facilitated</div>
                </div>
              </div>
            </FadeIn>

            <SlideIn direction="right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-indigo-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/growth_strategy_hero_premium_1769686968239.png"
                    alt="Strategic Growth Trajectory"
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

      {/* Strategy Grid */}
      <section className="py-24 bg-white">
        <div className="container-max">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Frameworks for Success</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                We move beyond generic advice to provide executable business intelligence.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {growthStrategies.map((strategy, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover>
                    <div className="h-full bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{strategy.icon}</div>
                      <h3 className="text-xl font-bold mb-3 text-slate-900">{strategy.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">{strategy.description}</p>

                      <ul className="space-y-2">
                        {strategy.services.map((s, i) => (
                          <li key={i} className="flex gap-2 items-center text-xs text-slate-700">
                            <span className="text-rose-500">→</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Reports / Documentation Section */}
      <section className="py-24 section-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white/5 to-transparent"></div>
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Institutional <br />Grade Documentation</h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                Whether it's for a bank loan or a Silicon Valley investor, your
                documentation defines your professional status. We produce reports
                that stand up to the highest levels of scrutiny.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {businessPlans.map((plan, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <h4 className="font-bold text-rose-300 mb-2">{plan.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{plan.description}</p>
                    <div className="mt-4 text-[10px] uppercase tracking-widest text-gray-500 font-bold">{plan.ideal}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <SlideIn direction="right">
              <div className="p-1 rounded-[3rem] bg-gradient-to-br from-rose-500/30 to-indigo-500/30">
                <div className="bg-navy-900/50 backdrop-blur-xl rounded-[2.9rem] p-12 text-center">
                  <div className="text-8xl mb-8">📊</div>
                  <h3 className="text-2xl font-bold mb-4">Precision Reporting</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    Our reports are currently accepted by 40+ scheduled banks and
                    leading VC firms across India.
                  </p>
                  <Link href="/contact" className="inline-block px-8 py-3 bg-white text-navy-900 rounded-xl font-bold hover:scale-105 transition-transform">
                    Sample Reports
                  </Link>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="container-max">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl section-navy p-12 md:p-20 text-center text-white">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <FadeIn>
              <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Scale Without <br />Compromise</h2>
                <p className="text-xl text-gray-400 mb-12">
                  Building a great company is hard. Navigating the legal and
                  financial maze shouldn't be. Let's build your growth roadmap.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <ButtonHover>
                    <Link href="/contact" className="btn-hero-green bg-rose-600 hover:bg-rose-700">
                      Book a Strategy Session
                    </Link>
                  </ButtonHover>
                  <ButtonHover>
                    <a href="tel:18005710607" className="btn-hero-outline">
                      Talk to a Mentor
                    </a>
                  </ButtonHover>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
