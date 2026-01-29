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

const marketingServices = [
  {
    title: "Performance Marketing",
    icon: "📈",
    description: "Data-driven campaigns across Meta, Google, and LinkedIn with a focus on ROI.",
    services: ["PPC Management", "Funnel Optimization", "Retargeting"],
  },
  {
    title: "Brand Architecture",
    icon: "🎨",
    description: "Crafting visual identities and narratives that command market authority.",
    services: ["Logo & Visual ID", "Brand Positioning", "Guidelines"],
  },
  {
    title: "Content Ecosystems",
    icon: "✍️",
    description: "High-value content production to establish industry thought leadership.",
    services: ["Whitepapers", "Video Production", "SEO Blogging"],
  },
  {
    title: "Web Experience",
    icon: "💻",
    description: "Conversion-optimized websites that turn traffic into enterprise value.",
    services: ["UX/UI Design", "E-commerce", "LPs & Funnels"],
  },
];

const platforms = [
  { name: "LinkedIn", icon: "💼" },
  { name: "Meta", icon: "📱" },
  { name: "Google Ads", icon: "🔍" },
  { name: "YouTube", icon: "▶️" },
  { name: "X / Twitter", icon: "🐦" },
  { name: "Instagram", icon: "📸" },
];

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        {/* Pink Glow Effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]"></div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-pink-100 text-sm font-bold mb-8 shadow-xl">
                <span>📣</span>
                Growth Marketing
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-accent-green">Own Your</span> <br />
                <span className="text-white">Digital Voice</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl font-light">
                In a crowded market, attention is the new currency. We help startups and
                MSMEs build high-conversion brand ecosystems.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <ButtonHover>
                  <Link href="/contact" className="btn-hero-green bg-pink-600 hover:bg-pink-700">
                    Get Marketing Audit
                  </Link>
                </ButtonHover>
                <ButtonHover>
                  <a href="tel:18005710607" className="btn-hero-outline border-pink-500/50 text-pink-100">
                    Expert Consultation
                  </a>
                </ButtonHover>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">200+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Brands Built</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-1">4.5x</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Avg. ROAS</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">5M+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Leads Generated</div>
                </div>
              </div>
            </FadeIn>

            <SlideIn direction="right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-amber-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/marketing_branding_hero_premium_1769687063274.png"
                    alt="Digital Influence and Branding"
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
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Full-Stack Solutions</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                From visual identity to performance dashboards.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketingServices.map((service, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover>
                    <div className="h-full bg-slate-50 rounded-[2rem] p-8 border border-slate-100 transition-all duration-300 group hover:bg-white hover:shadow-2xl">
                      <div className="text-5xl mb-6">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">{service.description}</p>
                      <ul className="space-y-2">
                        {service.services.map((s, i) => (
                          <li key={i} className="flex gap-2 items-center text-xs text-slate-700 font-medium">
                            <span className="text-pink-500">→</span>
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

      {/* Platform Strip */}
      <section className="py-16 bg-slate-900 border-y border-white/5">
        <div className="container-max">
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {platforms.map((p, i) => (
              <div key={i} className="flex items-center gap-2 text-white font-bold text-xl">
                <span>{p.icon}</span>
                <span className="hidden sm:inline">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Proof */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <span className="text-pink-600 font-bold text-sm uppercase tracking-widest mb-4 block">Proven Results</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Scale that is <br />Measurable</h2>
              <div className="space-y-6">
                {[
                  { t: "300% Growth", d: "Increase in qualified leads for a major MSME manufacturer." },
                  { t: "10x Reach", d: "Social media explosion for a disruptive SaaS startup." },
                  { t: "₹50L Monthly", d: "Revenue milestone achieved for a budding D2C brand." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold shrink-0">✓</div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.t}</h4>
                      <p className="text-slate-600 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <SlideIn direction="right" className="relative">
              <div className="bg-slate-900 rounded-[3rem] p-12 aspect-square flex items-center justify-center text-center text-white border border-white/10">
                <div>
                  <div className="text-8xl mb-8 group-hover:rotate-12 transition-transform duration-500">📣</div>
                  <h3 className="text-3xl font-bold mb-4">Ready to Grow?</h3>
                  <p className="text-gray-400 mb-8">Get a free digital audit value at ₹15,000.</p>
                  <Link href="/contact" className="btn-hero-green bg-pink-600 hover:bg-pink-700">
                    Claim Free Audit
                  </Link>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-500/20 rounded-full blur-[60px]"></div>
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
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Stop Guessing. <br />Start Growing.</h2>
                <p className="text-xl text-gray-400 mb-12">
                  Marketing shouldn't be a black hole for your capital.
                  Build a brand that converts interest into revenue.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <ButtonHover>
                    <Link href="/contact" className="btn-hero-green bg-pink-600 hover:bg-pink-700">
                      Start Your Campaign
                    </Link>
                  </ButtonHover>
                  <ButtonHover>
                    <a href="tel:18005710607" className="btn-hero-outline">
                      Talk to Growth Expert
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
