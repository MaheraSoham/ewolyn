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

const registrationServices = [
  {
    title: "Private Limited Company",
    description: "Most preferred structure for startups seeking investment.",
    features: ["Limited liability protection", "Separate legal entity", "Easy to raise funds"],
    timeline: "7-10 working days",
  },
  {
    title: "LLP",
    description: "Ideal for professional services and small businesses.",
    features: ["Limited liability", "Lower compliance", "No minimum capital"],
    timeline: "10-15 working days",
  },
  {
    title: "One Person Company",
    description: "Perfect for solo entrepreneurs with limited liability.",
    features: ["Single member company", "Easy to convert", "Lower compliance"],
    timeline: "7-10 working days",
  },
  {
    title: "Sole Proprietorship",
    description: "Simplest form for individual entrepreneurs.",
    features: ["Easy to start", "Complete control", "Minimal compliance"],
    timeline: "3-5 working days",
  },
  {
    title: "Partnership Firm",
    description: "Traditional structure for multiple owners.",
    features: ["Easy to form", "Shared responsibilities", "Tax benefits"],
    timeline: "5-7 working days",
  },
  {
    title: "Section 8 Company",
    description: "Non-profit organization for charitable purposes.",
    features: ["Tax exemptions", "High Credibility", "Grants eligible"],
    timeline: "20-30 working days",
  },
];

const complianceServices = [
  { title: "GST Registration", description: "Mandatory for businesses with turnover above ₹40L", icon: "📊" },
  { title: "MSME/Udyam", description: "Get benefits under government MSME schemes", icon: "🏭" },
  { title: "Import Export Code", description: "Required for all international trade", icon: "🌍" },
  { title: "Trademark Reg.", description: "Protect your brand identity and logo", icon: "®️" },
  { title: "Professional Tax", description: "Mandatory for all employers in India", icon: "💼" },
  { title: "FSSAI License", description: "Required for all food-related businesses", icon: "🍽️" },
];

export default function BusinessRegistrationPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]"></div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-bold mb-8 shadow-xl">
                <span>🚀</span>
                Official Business Formation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-accent-green">Scale from</span> <br />
                <span className="text-white">Day One</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl font-light">
                Launch your venture with the right legal foundation. We handle every detail of
                your incorporation, so you can focus on building your vision.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <ButtonHover>
                  <Link href="/contact" className="btn-hero-green">
                    Start Registration
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
                  <div className="text-3xl font-bold text-white mb-1">5000+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Registered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-green mb-1">98%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">7 Days</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Avg. Timeline</div>
                </div>
              </div>
            </FadeIn>

            <SlideIn direction="right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-green to-cyan-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/business_registration_hero_premium_1769686804174.png"
                    alt="Business Incorporation Success"
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

      {/* Trust Grid / Why Register */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <span className="text-accent-green font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Strategic foundation</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Legitimacy built <br />for Growth</h2>
              <div className="space-y-6">
                {[
                  { title: "Legal Recognition", desc: "Gain a separate legal entity status and build investor trust." },
                  { title: "Asset Protection", desc: "Limit your personal liability and safeguard your private assets." },
                  { title: "Funding Ready", desc: "Unlock doors to venture capital, angel investors, and bank loans." },
                  { title: "Tax Efficiency", desc: "Access corporate tax benefits and government-backed MSME incentives." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-accent-green/20 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-accent-green text-[10px]">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <SlideIn direction="right" className="relative">
              <div className="bg-slate-100 rounded-[3rem] p-12 aspect-square flex items-center justify-center border border-slate-200 shadow-inner">
                <div className="text-center group">
                  <div className="text-9xl mb-8 group-hover:scale-110 transition-transform duration-500">📜</div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">Incorporation Specialist</div>
                  <p className="text-slate-500 text-sm">Ensuring compliance at every milestone.</p>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Structure Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Choose Your Path</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                Select the business structure that aligns with your operational goals and scalability needs.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {registrationServices.map((service, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover>
                    <div className="h-full bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-accent-green/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>

                      <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-accent-green transition-colors">{service.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">{service.description}</p>

                      <ul className="space-y-3 mb-8">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                            <span className="text-accent-green">✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Timeline</div>
                          <div className="text-slate-900 font-bold text-sm tracking-tight">{service.timeline}</div>
                        </div>
                        <Link href="/contact" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-accent-green group-hover:text-white transition-all shadow-sm">
                          →
                        </Link>
                      </div>
                    </div>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Compliance Grid */}
      <section className="py-24 section-navy text-white overflow-hidden relative">
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <FadeIn>
                <h2 className="text-4xl font-bold mb-6">Unified <br />Compliance</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  Beyond incorporation, we manage the critical registrations required to make your
                  operations fully functional and legal.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-accent-green font-bold group">
                  View All Registrations
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </FadeIn>
            </div>

            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-6">
                {complianceServices.map((service, idx) => (
                  <SlideUp key={idx} delay={idx * 0.1}>
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300 group h-full">
                      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                      <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
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
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Your Success <br />Starts Here</h2>
                <p className="text-xl text-gray-400 mb-12">
                  Avoid legal pitfalls and bureaucratic delays. Build your business
                  on solid ground with Ewolyn's incorporation experts.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <ButtonHover>
                    <Link href="/contact" className="btn-hero-green">
                      Get Started Today
                    </Link>
                  </ButtonHover>
                  <ButtonHover>
                    <a href="tel:18005710607" className="btn-hero-outline">
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