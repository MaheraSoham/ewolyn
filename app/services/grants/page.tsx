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

const grantServices = [
  { icon: "🔍", title: "Scheme Identification", desc: "Research and identify relevant grant programs aligned with your business model, industry, and growth goals." },
  { icon: "🧪", title: "Eligibility Assessment", desc: "Thorough evaluation of your business against scheme criteria to determine qualification potential." },
  { icon: "🎯", title: "Strategic Planning", desc: "Develop application strategies that highlight alignment between your business and scheme priorities." },
  { icon: "📝", title: "Proposal Development", desc: "Create compelling proposals including project plans, impact assessments, and implementation roadmaps." },
  { icon: "📄", title: "Documentation", desc: "Prepare comprehensive application packages with all required forms, business plans, and evidence." },
  { icon: "📊", title: "Compliance Support", desc: "Ensure adherence to grant terms, reporting requirements, and utilization guidelines post-approval." },
];

export default function GrantsPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full text-amber-100 text-sm font-bold mb-6 border border-amber-500/30">
                <span className="animate-pulse">🏛️</span>
                Government Incentives & Subsidies
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-accent-green">Non-Repayable</span> <br />
                <span className="text-white">Capital Growth</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                Access billions in government grants and subsidies. We navigate the complexity
                of state and central schemes to secure the funding your innovation deserves—with zero equity dilution.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <ButtonHover>
                  <Link href="/contact" className="btn-hero-green bg-amber-500 hover:bg-amber-600 text-slate-950 text-lg px-10">
                    Check Grant Eligibility
                  </Link>
                </ButtonHover>
                <ButtonHover>
                  <a href="tel:18005710607" className="btn-hero-outline text-lg px-10">
                    Expert Consultation
                  </a>
                </ButtonHover>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">₹500Cr+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Grants Secured</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-400 mb-1">85%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Active Schemes</div>
                </div>
              </div>
            </FadeIn>

            <SlideIn direction="right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-blue-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/government_grants_hero_premium_1769686253475.png"
                    alt="Government Grants Success"
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

      {/* Grant Categories - Featured */}
      <section className="py-24 bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
            <FadeIn>
              <span className="text-amber-600 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Major Schemes</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Empowering Every <br /> Business Stage
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-slate-600 text-lg max-w-lg mb-2">
                From early-stage seed funds to large-scale manufacturing incentives, we cover the entire spectrum of government financial aid.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Startup India Seed Fund",
                desc: "Financial assistance for early-stage startups for proof of concept, prototype development, and product trials.",
                link: "/services/startup-seed-fund",
                color: "border-l-amber-400"
              },
              {
                title: "MSME Technology Upgradation",
                desc: "Capital subsidies for modernization and technology enhancement of manufacturing units.",
                link: "/services/clcs-tus-msme-champions",
                color: "border-l-blue-500"
              },
              {
                title: "PMEGP Subsidies",
                desc: "Massive subsidies for new manufacturing, services, or trading micro-enterprises across India.",
                link: "/services/pm-employment-generation-programme",
                color: "border-l-green-500"
              },
              {
                title: "Export Promotion (EPCG)",
                desc: "Significant duty exemptions for capital goods imports for export-oriented businesses.",
                link: "/services/epcg-scheme",
                color: "border-l-purple-500"
              },
            ].map((scheme, idx) => (
              <SlideUp key={idx} delay={idx * 0.1}>
                <div className={`p-8 rounded-3xl bg-slate-50 border border-slate-200 border-l-8 ${scheme.color} hover:shadow-xl transition-all group`}>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-amber-600 transition-colors">{scheme.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{scheme.desc}</p>
                  <Link href={scheme.link} className="inline-flex items-center gap-2 font-bold text-slate-900 hover:gap-3 transition-all">
                    Explore Scheme
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Premium */}
      <section className="py-24 bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">How We Secure Your Grant</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Our 360° approach ensures that your application is not just submitted, but positioned for high-impact approval.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {grantServices.map((service, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover>
                    <div className="h-full bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-500 group">
                      <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-3xl mb-6 group-hover:bg-amber-100 transition-colors">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-amber-600 transition-colors">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-8 text-sm">{service.desc}</p>
                    </div>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section - Dark Mode feel */}
      <section className="py-24 section-navy text-white overflow-hidden relative">
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Seamless Application Journey</h2>
              <div className="space-y-12">
                {[
                  { step: "01", title: "Discovery", desc: "We analyze your business profile to find the most lucrative schemes matching your goals." },
                  { step: "02", title: "Strategy", desc: "We build a narrative that aligns perfectly with government priorities for maximum approval odds." },
                  { step: "03", title: "Submission", desc: "Our team handles the entire technical submission process, ensuring 100% compliance." },
                  { step: "04", title: "Follow-up", desc: "We engage with authorities strategically to navigate evaluations and interviews." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-4xl font-black text-amber-400/20 group-hover:text-amber-400 transition-colors duration-500">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2 text-white">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <div className="relative p-12 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-3xl">
              <SlideIn direction="right">
                <h3 className="text-2xl font-bold mb-8 text-amber-400">Essential Documentation</h3>
                <ul className="space-y-4 mb-10">
                  {[
                    "MSME / Udyam Registration",
                    "3 Years Financial Statements",
                    "Detailed Project Report (DPR)",
                    "Technology Readiness Proof",
                    "Impact Assessment Plan",
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                      {doc}
                    </li>
                  ))}
                </ul>
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-400/30">
                  <p className="text-sm font-bold text-amber-400 leading-relaxed">
                    Note: Grant requirements change frequently. Our team provides an updated, customized checklist
                    as soon as we identify your target schemes.
                  </p>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container-max max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Grant FAQs</h2>
            <p className="text-slate-600">Common questions about non-repayable government aid.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Is a grant different from a loan?", a: "Yes. Grants are non-repayable financial assistance provided for specific objectives. Unlike loans, you don't pay interest or return the principal amount." },
              { q: "Do I have to give up equity for these grants?", a: "No. Most government grants are 'non-dilutive,' meaning you keep 100% of your company ownership while receiving the funds." },
              { q: "What is the timeline for grant approval?", a: "Depending on the scheme, it can take anywhere from 8 to 24 weeks. We work to minimize this through proactive processing." },
              { q: "What if my application is rejected?", a: "We analyze the reasons for rejection, fix the gaps, and help you resubmit or apply for alternative schemes that fit better." },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 rounded-2xl border border-slate-200 transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-slate-900 group-open:text-amber-600 transition-colors">{faq.q}</span>
                  <span className="transition-transform group-open:rotate-180">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="container-max">
          <div className="relative rounded-[3rem] bg-navy-950 overflow-hidden shadow-2xl section-navy p-12 md:p-20 text-center">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cross-stripes.png')] animate-pulse"></div>
            <FadeIn>
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Scale Without Debt.</h2>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                  Join hundreds of MSMEs and Startups that have secured non-repayable capital with Ewolyn.
                  Let's find the grants your business is eligible for today.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <ButtonHover>
                    <Link href="/contact" className="btn-hero-green bg-amber-500 hover:bg-amber-600 text-slate-950 text-lg px-12 py-5">
                      Start Your Application
                    </Link>
                  </ButtonHover>
                  <ButtonHover>
                    <a href="tel:18005710607" className="btn-hero-outline text-lg px-12 py-5">
                      Request Expert Callback
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

