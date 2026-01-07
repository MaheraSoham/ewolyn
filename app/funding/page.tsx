import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { fundingContent } from "@/lib/content";
import { governmentSchemes } from "@/lib/schemes";
import { detailedSchemes } from "@/lib/schemes-detailed";
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
    <main className="section bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen">
      <div className="container-max py-10">
        <SectionHeading
          align="left"
          title={fundingContent.introTitle}
          subtitle={fundingContent.introBody}
        />

        {/* Timeline Overview */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card border-l-4 border-l-brand bg-white/80 shadow-lg animate-fade-in">
            <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">💸 Loan Assistance</h3>
            <p className="mt-2 text-sm text-muted">
              End-to-end support for business loans with compliant documentation and application tracking.
            </p>
            <p className="mt-3 text-sm font-medium text-brand">Timeline: 15–25 days</p>
          </div>
          <div className="card border-l-4 border-l-green-500 bg-white/80 shadow-lg animate-fade-in">
            <h3 className="text-lg font-semibold text-green-700 flex items-center gap-2">🏆 Grant Assistance</h3>
            <p className="mt-2 text-sm text-muted">
              Eligibility mapping and application support for government grants and schemes.
            </p>
            <p className="mt-3 text-sm font-medium text-green-600">Timeline: 45–60 days</p>
          </div>
        </div>

        {/* Government Schemes Section */}
        <div className="mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand">
              Powerful <span className="text-blue-700">Government Schemes</span>
            </h2>
            <p className="section-subtitle mt-3">
              Leverage India&apos;s top government initiatives designed to accelerate MSME growth
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {governmentSchemes.map((scheme) => (
              <div
                key={scheme.slug}
                className="card group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl ${scheme.iconBg} text-white`}>
                  {scheme.icon}
                </div>

                {/* Title & Description */}
                <h3 className="mt-4 text-lg font-semibold text-ink">{scheme.title}</h3>
                <p className="mt-2 text-sm text-muted">{scheme.shortDesc}</p>

                {/* Category Badge & View Details */}
                <div className="mt-4 flex items-center justify-between">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    scheme.category === "Loan" ? "bg-blue-100 text-blue-700" :
                    scheme.category === "Grant" ? "bg-green-100 text-green-700" :
                    scheme.category === "Subsidy" ? "bg-purple-100 text-purple-700" :
                    scheme.category === "Tax Benefit" ? "bg-orange-100 text-orange-700" :
                    "bg-slate-100 text-slate-700"
                  }`}>
                    {scheme.category}
                  </span>
                  <Link
                    href={`/services/${scheme.slug}`}
                    className="flex items-center gap-1 text-sm font-medium text-muted hover:text-brand transition-colors"
                  >
                    View Details
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply */}
        <div className="mt-16">
          <div className="text-center">
            <h2 className="section-title">How to Apply</h2>
            <p className="section-subtitle">Simple steps to access government funding and schemes.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <div className="card text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand font-bold">1</div>
              <h3 className="mt-3 font-semibold text-ink">Check Eligibility</h3>
              <p className="mt-2 text-sm text-muted">We assess your business stage and sector fit.</p>
            </div>
            <div className="card text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand font-bold">2</div>
              <h3 className="mt-3 font-semibold text-ink">Prepare Documents</h3>
              <p className="mt-2 text-sm text-muted">We create compliant dossiers and filings.</p>
            </div>
            <div className="card text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand font-bold">3</div>
              <h3 className="mt-3 font-semibold text-ink">Submit Application</h3>
              <p className="mt-2 text-sm text-muted">We file and track your application end-to-end.</p>
            </div>
            <div className="card text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand font-bold">4</div>
              <h3 className="mt-3 font-semibold text-ink">Get Funded</h3>
              <p className="mt-2 text-sm text-muted">Receive approval and disbursement support.</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {fundingContent.bullets.map((b) => (
            <div key={b} className="card">
              <h3 className="text-base font-semibold text-ink">{b}</h3>
              <p className="mt-2 text-sm text-muted">
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
