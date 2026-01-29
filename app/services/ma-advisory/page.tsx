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

const maServices = [
  {
    title: "Merger Strategy",
    icon: "🤝",
    description: "Navigate complex consolidations with strategic fit analysis and integration planning.",
    features: ["Strategic fit analysis", "Partner identification", "Negotiation support"],
  },
  {
    title: "Acquisition Advisory",
    icon: "🎯",
    description: "End-to-end support for acquiring businesses that align with your long-term vision.",
    features: ["Target identification", "Valuation analysis", "Due diligence"],
  },
  {
    title: "Business Valuation",
    icon: "💰",
    description: "Accurate enterprise valuations using DCF and market comparable methodologies.",
    features: ["DCF valuation", "Comparable analysis", "Fairness opinions"],
  },
  {
    title: "Sell-Side Mandate",
    icon: "📤",
    description: "Maximize shareholder value with professional exit preparation and buyer matching.",
    features: ["Business preparation", "Buyer identification", "Confidential marketing"],
  },
];

const dealTypes = [
  { title: "Strategic Acquisitions", icon: "🏢" },
  { title: "Private Equity Deals", icon: "💼" },
  { title: "Joint Ventures", icon: "🤲" },
  { title: "Management Buyouts", icon: "👥" },
  { title: "Cross-Border M&A", icon: "🌍" },
  { title: "Distressed Assets", icon: "📉" },
];

export default function MAAdvisoryPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        {/* Purple Glow Effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-bold mb-8 shadow-xl">
                <span>🤝</span>
                Transaction Advisory
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-accent-green">Master the</span> <br />
                <span className="text-white">Art of the Deal</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl font-light">
                Secure your corporate future through expert-led mergers, acquisitions,
                and valuations. We bridge the gap between strategy and execution.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <ButtonHover>
                  <Link href="/contact" className="btn-hero-green bg-purple-600 hover:bg-purple-700">
                    Consult M&A Team
                  </Link>
                </ButtonHover>
                <ButtonHover>
                  <a href="tel:18005710607" className="btn-hero-outline">
                    Expert Valuation
                  </a>
                </ButtonHover>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">₹500Cr+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Deal Value</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-1">50+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Successful Fails</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">95%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Closure Rate</div>
                </div>
              </div>
            </FadeIn>

            <SlideIn direction="right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/ma_advisory_hero_premium_1769687015222.png"
                    alt="Corporate Synergy and M&A"
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
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Strategic Solutions</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                From initial deal sourcing to post-merger integration.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {maServices.map((service, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover>
                    <div className="h-full bg-slate-50 rounded-[2rem] p-8 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                      <div className="text-5xl mb-6">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex gap-2 items-center text-xs text-slate-700">
                            <span className="text-purple-500">✓</span>
                            {f}
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

      {/* Deal Types Grid */}
      <section className="py-24 section-navy text-white relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <FadeIn>
                <h2 className="text-4xl font-bold mb-6">Broad <br />Mandate</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  We handle everything from strategic joint ventures to complex cross-border acquisitions.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-purple-400 font-bold group">
                  Discuss Your Transaction
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </FadeIn>
            </div>

            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {dealTypes.map((deal, idx) => (
                  <SlideUp key={idx} delay={idx * 0.1}>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-center">
                      <div className="text-4xl mb-4">{deal.icon}</div>
                      <h4 className="text-sm font-bold">{deal.title}</h4>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </div>
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
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready for the Next Level?</h2>
                <p className="text-xl text-gray-400 mb-12">
                  Whether you're looking to exit or expand, our M&A advisory
                  provides the leverage you need in the negotiation room.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <ButtonHover>
                    <Link href="/contact" className="btn-hero-green bg-purple-600 hover:bg-purple-700">
                      Inquire Confidentiality
                    </Link>
                  </ButtonHover>
                  <ButtonHover>
                    <a href="tel:18005710607" className="btn-hero-outline">
                      Talk to Deal Expert
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
