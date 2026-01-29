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

const loanServices = [
  { icon: "📈", title: "Term Loans", desc: "Long-term financing for business expansion, asset acquisition, and strategic investments with structured repayment schedules." },
  { icon: "💸", title: "Working Capital", desc: "Short-term financing for operational expenses, inventory management, and cash flow optimization." },
  { icon: "🏆", title: "MSME Priority", desc: "Special financing options under priority sector lending for micro, small, and medium enterprises." },
  { icon: "🔓", title: "Collateral-Free", desc: "CGTMSE-backed and unsecured loan options for businesses without sufficient collateral assets." },
  { icon: "📊", title: "Project Financing", desc: "Specialized funding for specific projects with customized disbursement and repayment structures." },
  { icon: "🏛️", title: "Govt Schemes", desc: "Access to PMMY (Mudra), Stand-Up India, CLCSS, and other government-sponsored programs." },
];

export default function LoansPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[120px]"></div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-100 text-sm font-bold mb-6 border border-blue-500/30">
                <span className="animate-pulse">💰</span>
                Business Debt Capital Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-accent-green">Unlocking</span> <br />
                <span className="text-white">Limitless Capital</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                Fuel your growth with specialized loan advisory services. From collateral-free MSME schemes
                to large-scale project financing, we bridge the gap between your vision and the capital it deserves.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <ButtonHover>
                  <Link href="/contact" className="btn-hero-green text-lg px-10">
                    Apply for Funding
                  </Link>
                </ButtonHover>
                <ButtonHover>
                  <a href="tel:18005710607" className="btn-hero-outline text-lg px-10">
                    Call: 1800 571 0607
                  </a>
                </ButtonHover>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">₹500Cr+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Facilitated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-green mb-1">92%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Approval Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">20+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Bank Partners</div>
                </div>
              </div>
            </FadeIn>

            <SlideIn direction="right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-green to-blue-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/business_loans_hero_premium_1769686161627.png"
                    alt="Business Loans Growth"
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

      {/* Trust Bar */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container-max">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-xl font-black text-slate-400 tracking-tighter uppercase italic">SBI</div>
            <div className="text-xl font-black text-slate-400 tracking-tighter uppercase italic">HDFC BANK</div>
            <div className="text-xl font-black text-slate-400 tracking-tighter uppercase italic">ICICI BANK</div>
            <div className="text-xl font-black text-slate-400 tracking-tighter uppercase italic">AXIS BANK</div>
            <div className="text-xl font-black text-slate-400 tracking-tighter uppercase italic">SIDBI</div>
            <div className="text-xl font-black text-slate-400 tracking-tighter uppercase italic">YES BANK</div>
          </div>
        </div>
      </section>

      {/* Loan Services Grid */}
      <section className="py-24 relative">
        <div className="container-max">
          <div className="text-center mb-20">
            <FadeIn>
              <span className="text-accent-green font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Debt Capital Solutions</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                We simplify complex financial structures to ensure your business gets the best possible terms and fastest disbursement.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loanServices.map((service, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover>
                    <div className="h-full bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-2xl hover:border-accent-green/30 transition-all duration-500 group">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl mb-6 group-hover:bg-accent-green/10 transition-colors">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-accent-green transition-colors">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-8">{service.desc}</p>
                      <Link href="/contact" className="text-sm font-bold text-accent-green flex items-center gap-1 group/link">
                        Check Eligibility
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

      {/* Documentation Section - Horizontal Scroll feel */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-green/5 blur-[120px]"></div>
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">What You Need to Get Started</h2>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Clean documentation is the secret to fast approvals. Our experts help you prepare a bank-ready
                dossier that represents your business strength effectively.
              </p>

              <div className="space-y-4">
                {[
                  "Business Registration & KYC Documents",
                  "Last 3 Years Audited Financials",
                  "GST Returns & Bank Statements",
                  "Detailed Project Report (DPR)",
                  "Collateral Detail (if applicable)",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-accent-green flex items-center justify-center text-xs font-bold text-slate-900">
                      {i + 1}
                    </div>
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <div className="relative">
              <SlideIn direction="right">
                <div className="grid gap-6">
                  <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                    <h3 className="text-2xl font-bold mb-4 text-accent-green">Eligibility Check</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-accent-green mt-1">✓</span>
                        <p className="text-gray-300"><span className="text-white font-bold">Business Vintage:</span> Ideally 2+ years of operations.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-green mt-1">✓</span>
                        <p className="text-gray-300"><span className="text-white font-bold">Credit Store:</span> Minimum 700+ preferred for fast-track.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-green mt-1">✓</span>
                        <p className="text-gray-300"><span className="text-white font-bold">Cash Flow:</span> Healthy DSCR (Debt Service Coverage Ratio).</p>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 rounded-3xl bg-accent-green text-slate-950">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">Speedy Processing</h3>
                      <span className="text-4xl">⚡</span>
                    </div>
                    <p className="font-bold opacity-80 leading-relaxed">
                      We prioritize "In-Principle" approvals within 48 hours to ensure you never miss a business opportunity due to lack of funds.
                    </p>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Financing FAQs</h2>
              <p className="text-slate-600">Common questions about business debt capital.</p>
            </div>

            <div className="space-y-6">
              {[
                { q: "Is collateral mandatory for every loan?", a: "No. Under the CGTMSE scheme and various MSME products, we facilitate collateral-free loans up to ₹5 Crore based on business strength." },
                { q: "What is the typical interest rate?", a: "Business loan rates vary from 8% to 16% depending on the lender, scheme, and your credit profile. We negotiate for the lowest possible rates." },
                { q: "Can I get a loan if I have a low CIBIL score?", a: "While a high score is ideal, we have specialized NBFC partners who focus more on business cash flows than just personal credit scores." },
                { q: "How long does disbursement take?", a: "Once the sanction is issued, disbursement typically takes 2 to 7 working days depending on the bank's internal processes." },
              ].map((faq, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <details className="group bg-slate-50 rounded-2xl border border-slate-200 transition-all duration-300">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="font-bold text-slate-900 group-open:text-accent-green transition-colors">{faq.q}</span>
                      <span className="transition-transform group-open:rotate-180">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="container-max">
          <div className="relative rounded-[3rem] bg-navy-950 overflow-hidden shadow-2xl section-navy p-12 md:p-20 text-center">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] hover:scale-110 transition-transform duration-[20s]"></div>
            <FadeIn>
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Your Growth. Our Capital.</h2>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                  Join 20,000+ businesses that have fueled their expansion with Ewolyn's strategic debt capital advisory.
                  Ready to take the next step?
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <ButtonHover>
                    <Link href="/contact" className="btn-hero-green text-lg px-12 py-5">
                      Check Your Loan Eligibility
                    </Link>
                  </ButtonHover>
                  <ButtonHover>
                    <a href="tel:18005710607" className="btn-hero-outline text-lg px-12 py-5">
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

