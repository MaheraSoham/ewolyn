import SectionHeading from "@/components/SectionHeading";

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

const nbfcServices = [
  { icon: "💸", title: "Express Loans", desc: "Quick-disbursement loans with minimal documentation and 24-48 hour processing for urgent needs." },
  { icon: "💰", title: "Working Capital", desc: "Flexible short-term funding for operational expenses, inventory, and cash flow optimization." },
  { icon: "🌱", title: "Expansion Capital", desc: "Growth-focused financing for market expansion and business scaling initiatives." },
  { icon: "🔓", title: "Unsecured Funding", desc: "No-collateral financing options based on business performance rather than assets." },
  { icon: "📈", title: "Revenue-Based", desc: "Innovative funding with repayments tied to revenue performance rather than fixed EMIs." },
  { icon: "🛠️", title: "Equipment Finance", desc: "Specialized funding for machinery and technology with flexible repayment structures." },
];

export default function NBFCPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-100 text-sm font-bold mb-6 border border-purple-500/30">
                <span className="animate-pulse">⚡</span>
                Agile Alternative Financing
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-accent-green">Capital at the</span> <br />
                <span className="text-white">Speed of Business</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                Tired of slow banking bureaucracy? Our NBFC partnerships offer flexible eligibility,
                specialized products, and disbursement in as little as 24 hours.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <ButtonHover>
                  <Link href="/contact" className="btn-hero-green bg-blue-600 hover:bg-blue-700 text-white text-lg px-10">
                    Get Instant Quote
                  </Link>
                </ButtonHover>
                <ButtonHover>
                  <a href="tel:+919737799937" className="btn-hero-outline text-lg px-10">
                    Call: +91 97377 99937
                  </a>
                </ButtonHover>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">24Hrs</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Fast Approval</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-1">95%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Approval Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">25+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">NBFC Partners</div>
                </div>
              </div>
            </FadeIn>

            <SlideIn direction="right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/nbfc_financing_hero_premium_1769686369877.png"
                    alt="NBFC Speed Financing"
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

      {/* Overview Section - Two Column Grid */}
      <section className="py-24 bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">Beyond Traditional <br />Banking</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                NBFCs often see what banks miss. We focus on your business potential, cash flow, and future
                trajectory rather than just rigid historical metrics.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Asset Light", desc: "No collateral required for many products." },
                  { title: "Flexi-Pay", desc: "Repayment cycles aligned with your revenue." },
                  { title: "Digital First", desc: "Paperless processing for maximum speed." },
                  { title: "High Limits", desc: "Capital up to ₹1 Crore for verified businesses." },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-500/30 transition-colors">
                    <h4 className="font-bold text-slate-950 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <SlideIn direction="right">
              <div className="relative aspect-square rounded-[3rem] bg-slate-100 overflow-hidden flex items-center justify-center border border-slate-200 shadow-inner p-12">
                <div className="text-center">
                  <div className="text-8xl mb-6">🚀</div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">Accelerated Growth</div>
                  <p className="text-slate-500 italic text-sm">"Fueling the next generation of Indian enterprises."</p>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/5 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/5 rounded-full"></div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* NBFC Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-20">
            <FadeIn>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Specialized Funding</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Tailored NBFC Products</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Choose from a range of innovative financial instruments designed for the modern economy.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nbfcServices.map((service, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover>
                    <div className="h-full bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-500 group">
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-100 transition-colors">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-8">{service.desc}</p>
                      <Link href="/contact" className="text-sm font-bold text-blue-600 flex items-center gap-1 group/link">
                        Instant Eligibility
                        <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Documentation - Light Sidebar Style */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="max-w-5xl mx-auto bg-slate-950 rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10">
            <div className="p-12 md:p-16 flex-1 text-white border-b md:border-b-0 md:border-r border-white/10">
              <FadeIn>
                <h3 className="text-3xl font-bold mb-8">Ready to Launch</h3>
                <ul className="space-y-6">
                  {[
                    "Last 6-12 Months Bank Statements",
                    "GST Registration & Returns",
                    "KYC of Directors/Partners",
                    "Basic Audited Financials",
                    "Brief Business Profile",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
            <div className="p-12 md:p-16 flex-1 bg-gradient-to-br from-blue-900 to-navy-950 text-white flex flex-col justify-center">
              <FadeIn delay={0.2}>
                <div className="text-5xl mb-6">⏱️</div>
                <h3 className="text-3xl font-bold mb-4">Express Processing</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Our strategic ties with leading NBFCs allow us to skip the queue and get your application processed on priority.
                </p>
                <div className="inline-block py-2 px-4 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 font-bold text-sm">
                  100% Online Submission
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="container-max">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl section-navy p-12 md:p-20 text-center text-white">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] group-hover:scale-110 transition-transform duration-[20s]"></div>
            <FadeIn>
              <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Instant Capital for Instant Growth</h2>
                <p className="text-xl text-gray-400 mb-12">
                  Don't let rigid banking rules stop your momentum. Access agile NBFC financing
                  with Ewolyn's expert guidance.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <ButtonHover>
                    <Link href="/contact" className="btn-hero-green bg-blue-600 hover:bg-blue-700 text-white text-lg px-12 py-5">
                      Start Your Application
                    </Link>
                  </ButtonHover>
                  <ButtonHover>
                    <a href="tel:+919737799937" className="btn-hero-outline text-lg px-12 py-5 border-white/20 text-white hover:bg-white/10">
                      Talk to a Specialist
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

