import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getSchemeBySlug, governmentSchemes } from "@/lib/schemes";
import CTASection from "@/components/CTASection";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return governmentSchemes.map((scheme) => ({
    slug: scheme.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const scheme = getSchemeBySlug(params.slug);
  if (!scheme) return { title: "Scheme Not Found" };

  return {
    title: `${scheme.title} - Funding & Schemes`,
    description: scheme.shortDesc,
  };
}

export default function SchemeDetailPage({ params }: Props) {
  const scheme = getSchemeBySlug(params.slug);

  if (!scheme) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[120px]"></div>

        <div className="container-max relative z-10 w-full">
          <Link href="/funding" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mb-8">
            ← Back to All Schemes
          </Link>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold mb-6 shadow-xl uppercase tracking-widest">
              <span>{scheme.icon}</span>
              {scheme.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {scheme.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
              {scheme.shortDesc}
            </p>
          </div>
        </div>
      </section>

      <div className="container-max py-20 relative z-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* Highlights Bar */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-6 border-l-4 border-l-brand">
                <div className="text-3xl font-black text-brand mb-1">{scheme.highlight}</div>
                <div className="text-xs text-muted uppercase tracking-widest font-bold">{scheme.highlightLabel}</div>
              </div>
              <div className="card p-6 border-l-4 border-l-accent-green">
                <div className="text-3xl font-black text-accent-green mb-1">{scheme.timeline}</div>
                <div className="text-xs text-muted uppercase tracking-widest font-bold">Process Timeline</div>
              </div>
            </div>

            {/* About */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-6">About This Scheme</h2>
              <div className="card bg-white p-8">
                <p className="text-muted leading-relaxed text-lg">{scheme.fullDescription}</p>
              </div>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-6">Eligibility Criteria</h2>
              <div className="card p-8">
                <ul className="space-y-4">
                  {scheme.eligibility.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs font-bold mt-1">✓</span>
                      <span className="text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-6">Key Benefits</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {scheme.benefits.map((item, idx) => (
                  <div key={idx} className="card p-6 bg-slate-50 border-none group hover:bg-white hover:shadow-xl transition-all">
                    <span className="text-brand text-xl font-bold flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                      Benefit {idx + 1}
                    </span>
                    <span className="text-muted text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-6">Application Process</h2>
              <div className="space-y-6">
                {scheme.process.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-6 group">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white text-lg font-black transition-transform group-hover:scale-110 shadow-lg">
                      {idx + 1}
                    </div>
                    <div className="pt-2">
                      <p className="text-muted leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            {/* Apply CTA */}
            <div className="card bg-slate-900 border-none p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
                  Let our experts guide you through the application process and maximize your chances of approval.
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full rounded-xl bg-accent-green px-6 py-4 text-center font-bold text-slate-900 hover:bg-white hover:scale-105 transition-all shadow-xl shadow-accent-green/20"
                >
                  Start Application →
                </Link>
              </div>
            </div>

            {/* Documents Required */}
            <div className="card p-8 border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-brand">📄</span>
                Required Docs
              </h3>
              <ul className="space-y-4">
                {scheme.documents.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Info */}
            <div className="card p-8 border-slate-100 shadow-sm bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-500 text-sm">Category</span>
                  <span className="font-bold text-slate-900 text-sm uppercase tracking-wider">{scheme.category}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-500 text-sm">Timeline</span>
                  <span className="font-bold text-slate-900 text-sm uppercase tracking-wider">{scheme.timeline}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <CTASection />
    </main>
  );
}
