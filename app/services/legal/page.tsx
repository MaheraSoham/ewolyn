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

const legalServices = [
  {
    title: "Corporate Governance",
    icon: "🏢",
    description: "End-to-end support for annual filings, board resolutions, and ROC compliance.",
    services: ["Annual Filings", "Board Resolutions", "Restructuring"],
  },
  {
    title: "Contract Architecture",
    icon: "📝",
    description: "Iron-clad drafting for NDAs, service agreements, and shareholder contracts.",
    services: ["Service Agreements", "NDA & Confidentiality", "Franchise Deals"],
  },
  {
    title: "Employment Law",
    icon: "👷",
    description: "Navigate labor regulations, POSH compliance, and workforce policies.",
    services: ["POSH Compliance", "Labor Policies", "Employee Disputes"],
  },
  {
    title: "Commercial Litigation",
    icon: "⚖️",
    description: "Expert representation in arbitration and commercial dispute resolution.",
    services: ["Arbitration", "Commercial Disputes", "Mediation"],
  },
];

const documentationServices = [
  { title: "MOA & AOA", desc: "Foundational Docs" },
  { title: "Joint Ventures", desc: "Strategic Partnerships" },
  { title: "Lease Deeds", desc: "Commercial Property" },
  { title: "Investment", desc: "Equity Documentation" },
];

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        {/* Cyan Glow Effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-500/10 rounded-full blur-[120px]"></div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-cyan-100 text-sm font-bold mb-8 shadow-xl">
                <span>🛡️</span>
                Legal Guardianship
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-accent-green">Safeguard Your</span> <br />
                <span className="text-white">Enterprise</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl font-light">
                In a world of complex regulations, clarity is your greatest asset.
                We provide the legal framework for you to innovate without risk.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <ButtonHover>
                  <Link href="/contact" className="btn-hero-green bg-slate-700 hover:bg-slate-800">
                    Book Legal Audit
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
                  <div className="text-3xl font-bold text-white mb-1">1000+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Cases Managed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">15+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Success Rate</div>
                </div>
              </div>
            </FadeIn>

            <SlideIn direction="right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-slate-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/legal_consultancy_hero_premium_1769687115697.png"
                    alt="Legal Advisory and Justice"
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
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Expert Advocacy</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                Navigating the intersection of law and modern business.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {legalServices.map((service, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover>
                    <div className="h-full bg-slate-50 rounded-[2rem] p-8 border border-slate-100 transition-all duration-300 group hover:bg-white hover:shadow-2xl">
                      <div className="text-5xl mb-6">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">{service.description}</p>
                      <ul className="space-y-2">
                        {service.services.map((s, i) => (
                          <li key={i} className="flex gap-2 items-center text-xs text-slate-700 font-medium">
                            <span className="text-cyan-600">✓</span>
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

      {/* Documentation Strip */}
      <section className="py-24 section-navy text-white relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <SlideIn direction="left">
              <div className="grid grid-cols-2 gap-4">
                {documentationServices.map((doc, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                    <h4 className="font-bold text-cyan-400 mb-2">{doc.title}</h4>
                    <p className="text-xs text-gray-400">{doc.desc}</p>
                  </div>
                ))}
              </div>
            </SlideIn>

            <FadeIn>
              <h2 className="text-4xl font-bold mb-6">Precision <br />Documentation</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Your legal standing depends on the quality of your contracts.
                We provide institutional-grade drafting that minimizes exposure.
              </p>
              <Link href="/contact" className="btn-hero-green bg-white text-navy-900 border-none hover:bg-gray-100">
                Get Agreement Samples
              </Link>
            </FadeIn>
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
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Secure Your Legacy</h2>
                <p className="text-xl text-gray-400 mb-12">
                  Don't leave your corporate future to chance. Build on a
                  legally-sound foundation with Ewolyn's expert counsel.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <ButtonHover>
                    <Link href="/contact" className="btn-hero-green bg-cyan-600 hover:bg-cyan-700">
                      Talk to Legal Counsel
                    </Link>
                  </ButtonHover>
                  <ButtonHover>
                    <a href="tel:18005710607" className="btn-hero-outline">
                      Expert Consultation
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
