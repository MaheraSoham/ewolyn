import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { fundingContent } from "@/lib/content";
import { governmentSchemes } from "@/lib/schemes";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Funding & Government Schemes",
    description:
      "Eligibility mapping, compliant documentation, and application support for relevant government-aligned programs and financing options.",
  };
}

export default function FundingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[120px]"></div>

        <div className="container-max relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-bold mb-8 shadow-xl">
              <span>💰</span>
              Capital Empowerment
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
              Funding & <br />
              <span className="text-accent-green">Government Schemes</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
              We assess eligibility, prepare documentation, and guide applications for suitable programs and financing options.
            </p>
          </div>
        </div>
      </section>

      <div className="container-max py-20 relative z-10">
        {/* Timeline Overview */}
        <div className="grid gap-6 md:grid-cols-2 mb-20">
          <div className="card border-l-4 border-l-brand bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-bold text-blue-700 flex items-center gap-2">💸 Loan Assistance</h3>
            <p className="mt-3 text-muted leading-relaxed">
              End-to-end support for business loans with compliant documentation and application tracking.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest">Timeline: 15–25 days</span>
            </div>
          </div>
          <div className="card border-l-4 border-l-green-500 bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-bold text-green-700 flex items-center gap-2">🏆 Grant Assistance</h3>
            <p className="mt-3 text-muted leading-relaxed">
              Eligibility mapping and application support for government grants and schemes.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-bold uppercase tracking-widest">Timeline: 45–60 days</span>
            </div>
          </div>
        </div>

        {/* Government Schemes Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Powerful <span className="text-brand">Government Schemes</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Leverage India's top government initiatives designed to accelerate MSME growth
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {governmentSchemes.map((scheme) => (
              <Link
                key={scheme.slug}
                href={`/services/${scheme.slug}`}
                className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-accent-green/30 transition-all duration-500 block h-full flex flex-col"
              >
                {/* Icon */}
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${scheme.iconBg} text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {scheme.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand transition-colors mb-3">{scheme.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">{scheme.shortDesc}</p>

                {/* Category Badge & View Details */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <span className={`inline-block rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest ${scheme.category === "Loan" ? "bg-blue-100 text-blue-700" :
                      scheme.category === "Grant" ? "bg-green-100 text-green-700" :
                        scheme.category === "Subsidy" ? "bg-purple-100 text-purple-700" :
                          scheme.category === "Tax Benefit" ? "bg-orange-100 text-orange-700" :
                            "bg-slate-100 text-slate-700"
                    }`}>
                    {scheme.category}
                  </span>
                  <span className="text-sm font-bold text-accent-green flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Verify Eligibility →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* How to Apply */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How to Apply</h2>
            <p className="text-slate-600">Simple steps to access government funding and schemes.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { n: 1, t: "Check Eligibility", d: "We assess your business stage and sector fit." },
              { n: 2, t: "Prepare Documents", d: "We create compliant dossiers and filings." },
              { n: 3, t: "Submit Application", d: "We file and track your application end-to-end." },
              { n: 4, t: "Get Funded", d: "Receive approval and disbursement support." }
            ].map((step) => (
              <div key={step.n} className="card p-8 text-center bg-white border border-slate-100 hover:shadow-xl transition-all">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white font-black text-xl mb-6 shadow-lg shadow-brand/20">
                  {step.n}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.t}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Strip */}
        <div className="mt-32 grid gap-6 md:grid-cols-2">
          {fundingContent.bullets.map((b) => (
            <div key={b} className="card p-8 bg-slate-900 text-white border-none shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 text-7xl opacity-5 group-hover:scale-110 transition-transform">💰</div>
              <h3 className="text-lg font-bold mb-3 relative z-10">{b}</h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                Practical, end-to-end assistance that keeps filings compliant and timelines predictable.
              </p>
            </div>
          ))}
        </div>
      </div>
      <CTASection />
    </main>
  );
}
