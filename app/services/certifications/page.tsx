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

const certifications = [
  {
    title: "ISO 9001:2015",
    category: "Quality Management",
    description: "International standard for quality management systems. Demonstrates your commitment to customer satisfaction and continuous improvement.",
    benefits: ["Improved customer trust", "Better process efficiency", "Competitive advantage", "Access to government tenders"],
    timeline: "30-45 days",
    validity: "3 years",
    icon: "💎"
  },
  {
    title: "ISO 14001:2015",
    category: "Environmental Management",
    description: "Framework for effective environmental management systems. Shows your commitment to environmental responsibility.",
    benefits: ["Environmental compliance", "Reduced waste", "Cost savings", "Better brand image"],
    timeline: "45-60 days",
    validity: "3 years",
    icon: "🌿"
  },
  {
    title: "ISO 27001:2022",
    category: "Information Security",
    description: "International standard for information security management. Essential for IT companies and data handlers.",
    benefits: ["Data protection", "Client confidence", "Regulatory compliance", "Risk management"],
    timeline: "60-90 days",
    validity: "3 years",
    icon: "🔒"
  },
  {
    title: "ISO 45001:2018",
    category: "Occupational Health & Safety",
    description: "Standard for workplace safety management. Protects employees and reduces workplace incidents.",
    benefits: ["Employee safety", "Reduced accidents", "Legal compliance", "Insurance benefits"],
    timeline: "45-60 days",
    validity: "3 years",
    icon: "👷"
  },
  {
    title: "CE Marking",
    category: "European Conformity",
    description: "Mandatory for products sold in European Economic Area. Indicates compliance with EU safety standards.",
    benefits: ["EU market access", "Product credibility", "Legal requirement", "Consumer confidence"],
    timeline: "30-60 days",
    validity: "Product specific",
    icon: "🇪🇺"
  },
  {
    title: "BIS Certification",
    category: "Indian Standards",
    description: "Bureau of Indian Standards certification for quality assurance. Mandatory for many product categories.",
    benefits: ["Indian market compliance", "Quality assurance", "Consumer trust", "Government contracts"],
    timeline: "45-90 days",
    validity: "1-2 years",
    icon: "🇮🇳"
  },
];

const ipServices = [
  {
    title: "Trademark Registration",
    icon: "™️",
    description: "Protect your brand name, logo, and tagline from unauthorized use",
    features: ["Brand protection", "Legal ownership", "Nationwide validity", "10 year validity"],
    timeline: "6-12 months",
  },
  {
    title: "Patent Filing",
    icon: "📜",
    description: "Secure your invention with legal protection against copying",
    features: ["Invention protection", "Exclusive rights", "20 year validity", "Commercial advantage"],
    timeline: "3-5 years",
  },
  {
    title: "Copyright Registration",
    icon: "©️",
    description: "Protect your creative works, software, and artistic content",
    features: ["Creative protection", "Author rights", "Lifetime + 60 years", "Easy enforcement"],
    timeline: "2-3 months",
  },
  {
    title: "Design Registration",
    icon: "🎨",
    description: "Protect the unique visual design of your products",
    features: ["Design exclusivity", "Visual protection", "15 year validity", "Product differentiation"],
    timeline: "3-6 months",
  },
];

const startupRecognitions = [
  {
    title: "DPIIT Startup Recognition",
    description: "Official recognition as a startup by Government of India. Unlocks various benefits and schemes.",
    benefits: [
      "Tax exemption for 3 years",
      "Self-certification for labor laws",
      "Fast-track patent applications",
      "Access to government schemes",
      "Eligible for Startup India Seed Fund",
    ],
    timeline: "7-10 days",
  },
  {
    title: "Startup India Registration",
    description: "Registration under Startup India initiative for access to ecosystem support.",
    benefits: [
      "Fund of Funds access",
      "Credit Guarantee Scheme",
      "Startup events access",
      "Mentorship programs",
      "Networking opportunities",
    ],
    timeline: "Immediate",
  },
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-accent-green/10 rounded-full blur-[120px] floating-shape"></div>
        <div className="absolute bottom-10 left-[-5%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] floating-shape" style={{ animationDelay: '2s' }}></div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-green/20 rounded-full text-white text-sm font-bold mb-6 border border-accent-green/30">
                <span className="animate-pulse">🏆</span>
                Global Standards & IP Protection
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-accent-green">Build Massive</span> <br />
                <span className="text-white">Trust & Credibility</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Elevate your brand with international ISO certifications and secure your intellectual property.
                Don't just compete—dominate with the highest standards of quality and legal protection.
              </p>
              <div className="flex flex-wrap gap-4">
                <ButtonHover>
                  <Link href="/contact" className="btn-hero-green">
                    Get Free Consultation
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </ButtonHover>
                <ButtonHover>
                  <a href="tel:+919737799937" className="btn-hero-outline">
                    Call: +91 97377 99937
                  </a>
                </ButtonHover>
              </div>
            </FadeIn>

            <SlideIn direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent-green/20 blur-2xl rounded-full"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <Image
                    src="/certifications_hero_image_premium_1769686077900.png"
                    alt="Premium Certifications"
                    width={800}
                    height={800}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>

                  {/* Floating Metric */}
                  <div className="absolute bottom-8 left-8 p-6 glass-navbar rounded-2xl border border-white/20">
                    <div className="text-3xl font-bold text-accent-green mb-1">100%</div>
                    <div className="text-xs text-gray-300 uppercase tracking-wider font-bold">Success Rate</div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Startup Recognition - Dynamic Cards */}
      <section className="py-24 relative bg-white">
        <div className="container-max">
          <StaggerContainer>
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Startup Recognition</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Unlock exclusive benefits from the Government of India. We handle your DPIIT application from start to finish.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              {startupRecognitions.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="group relative bg-slate-50 rounded-3xl p-8 border border-slate-200 transition-all duration-500 hover:shadow-2xl hover:border-accent-green/30 hover:-translate-y-2">
                    <div className="absolute top-0 right-0 p-8 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">🚀</div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 mb-6">{item.description}</p>
                    <ul className="space-y-3 mb-8">
                      {item.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                          <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-accent-green/20 text-accent-green shrink-0">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Process Time</span>
                        <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-900">{item.timeline}</span>
                      </div>
                      <Link href="/contact" className="text-sm font-bold text-accent-green hover:text-green-600 flex items-center gap-1 group/link">
                        Apply Now
                        <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ISO Certifications - Premium Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container-max">
          <StaggerContainer>
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-accent-green font-bold text-sm uppercase tracking-[0.2em] mb-4 block">ISO Experts</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Standardizing Excellence</h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                  Global standards that prove your commitment to quality, security, and the environment.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover>
                    <div className="h-full bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-500 overflow-hidden group">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl group-hover:bg-accent-green/10 transition-colors`}>
                          {cert.icon}
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                          {cert.category}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-accent-green transition-colors">{cert.title}</h3>
                      <p className="text-slate-600 text-sm mb-6 leading-relaxed">{cert.description}</p>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {cert.benefits.map((benefit, i) => (
                            <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-slate-50 text-slate-500 px-3 py-1.5 rounded-lg border border-slate-100">
                              {benefit}
                            </span>
                          ))}
                        </div>

                        <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5 font-bold text-slate-900">
                            <span className="text-slate-400 uppercase tracking-tighter">Timeline:</span>
                            {cert.timeline}
                          </div>
                          <div className="flex items-center gap-1.5 font-bold text-accent-green">
                            <span className="text-slate-400 uppercase tracking-tighter">Validity:</span>
                            {cert.validity}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* IP Protection Section - Navy Accent */}
      <section className="py-24 section-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-accent-green"></div>
        <div className="container-max relative z-10">
          <StaggerContainer>
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Intellectual Property Protection</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                  Your ideas are your most valuable assets. Don't let others profit from your innovation.
                </p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-8">
              {ipServices.map((service, index) => (
                <StaggerItem key={index}>
                  <div className="flex flex-col md:flex-row gap-6 p-8 glass rounded-3xl border border-white/10 hover:border-accent-green/50 transition-all duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-4xl shrink-0 border border-white/10">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white tracking-tight">{service.title}</h3>
                        <span className="text-[10px] font-black uppercase tracking-widest text-accent-green bg-accent-green/10 px-3 py-1 rounded-full">Secure</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service.description}</p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-green"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-6 border-t border-white/10">
                        <div className="text-xs text-gray-500 uppercase tracking-widest">
                          Timeline: <strong className="text-white ml-2">{service.timeline}</strong>
                        </div>
                        <Link href="/contact" className="text-sm font-bold text-accent-green hover:text-white flex items-center gap-1 group/link transition-colors">
                          Apply Now
                          <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Section - Stats & Trust */}
      <section className="py-24 bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-[1.2]">
                Why Ewolyn is the <br />
                <span className="text-accent-green">Preferred Choice</span> for MSMEs
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We don't just process paperwork. We partner with you to build a standard of excellence that opens global markets and secures your brand legacy.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Strategic Advisory", desc: "We help you choose the right ISO standards that actually impact your revenue.", icon: "🎯" },
                  { title: "Audit Support", desc: "Comprehensive mock-audits to ensure you pass the certification first time.", icon: "✅" },
                  { title: "Life-cycle Management", desc: "Automated alerts for renewals and updates so you are always compliant.", icon: "🔄" },
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent-green/30 transition-all">
                    <div className="text-3xl shrink-0">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 bg-accent-green/5 blur-3xl rounded-full"></div>
              {[
                { number: "10+", label: "Years Experience", color: "bg-blue-600" },
                { number: "500+", label: "Clients Certified", color: "bg-accent-green" },
                { number: "50+", label: "ISO Experts", color: "bg-slate-900" },
                { number: "100%", label: "Success Rate", color: "bg-red-500" },
              ].map((stat, idx) => (
                <div key={idx} className={`relative p-10 rounded-[2rem] text-white overflow-hidden group shadow-xl ${stat.color} ${idx % 2 !== 0 ? 'mt-12' : ''}`}>
                  <div className="absolute -right-4 -bottom-4 text-7xl opacity-10 group-hover:scale-110 transition-transform">📊</div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm font-bold uppercase tracking-widest opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Impactful */}
      <section className="py-24">
        <div className="container-max">
          <div className="relative rounded-[3rem] bg-navy-950 overflow-hidden shadow-2xl section-navy p-12 md:p-20 text-center">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <FadeIn>
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Let's Standardize Your Success</h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join hundreds of successful businesses that have achieved global recognition with Ewolyn.
                  Your journey to world-class quality starts with a single click.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <ButtonHover>
                    <Link href="/contact" className="btn-hero-green text-lg px-12 py-5">
                      Check Your Eligibility
                    </Link>
                  </ButtonHover>
                  <ButtonHover>
                    <a href="tel:+919737799937" className="btn-hero-outline text-lg px-12 py-5">
                      Expert Callback
                    </a>
                  </ButtonHover>
                </div>
                <div className="mt-12 flex items-center justify-center gap-8 text-gray-500 font-bold uppercase text-xs tracking-[0.3em]">
                  <span>Professional</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-green"></div>
                  <span>Efficient</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-green"></div>
                  <span>Secure</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}

