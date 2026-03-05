import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getSchemeBySlug, governmentSchemes } from "@/lib/schemes";
import CTASection from "@/components/CTASection";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return governmentSchemes.map((scheme) => ({ slug: scheme.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const scheme = getSchemeBySlug(params.slug);
  if (!scheme) return { title: "Scheme Not Found" };
  return { title: `${scheme.title} — Ewolyn`, description: scheme.shortDesc };
}

/* rotating benefit SVG icons */
const benefitIcons = [
  <svg key="b1" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  <svg key="b2" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="b3" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="b4" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  <svg key="b5" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  <svg key="b6" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
];

const categoryColors: Record<string, string> = {
  Loan: "bg-blue-100 text-blue-700 border-blue-200",
  Subsidy: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Grant: "bg-amber-100 text-amber-700 border-amber-200",
  Certification: "bg-purple-100 text-purple-700 border-purple-200",
  Registration: "bg-cyan-100 text-cyan-700 border-cyan-200",
  "Tax Benefit": "bg-rose-100 text-rose-700 border-rose-200",
  Recognition: "bg-indigo-100 text-indigo-700 border-indigo-200",
  "Export Benefit": "bg-orange-100 text-orange-700 border-orange-200",
  Equity: "bg-pink-100 text-pink-700 border-pink-200",
};

export default function SchemeDetailPage({ params }: Props) {
  const scheme = getSchemeBySlug(params.slug);
  if (!scheme) notFound();

  const catColor = categoryColors[scheme.category] || "bg-gray-100 text-gray-600 border-gray-200";

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="container-max relative z-10 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/schemes" className="hover:text-white transition-colors">Schemes</Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white/70 truncate max-w-[200px]">{scheme.title}</span>
          </nav>

          <div className="max-w-4xl flex items-start gap-6">
            <div className="hidden md:flex w-20 h-20 shrink-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl items-center justify-center text-4xl shadow-xl">{scheme.icon}</div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${catColor}`}>{scheme.category}</span>
                <span className="text-xs text-white/40 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {scheme.timeline}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{scheme.title}</h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">{scheme.shortDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ MAIN CONTENT ═══════════════ */}
      <div className="container-max py-16 relative z-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            {/* Highlights — 4 mini stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Category", value: scheme.category, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>, color: "text-blue-600" },
                { label: scheme.highlightLabel, value: scheme.highlight, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, color: "text-accent-green" },
                { label: "Timeline", value: scheme.timeline, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, color: "text-orange-500" },
                { label: "Success Rate", value: "95%", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, color: "text-emerald-500" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                  <div className={`${stat.color} flex justify-center mb-2`}>{stat.icon}</div>
                  <div className="text-lg font-black text-slate-900">{stat.value}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* About */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                About This Scheme
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <p className="text-slate-600 leading-relaxed text-lg">{scheme.fullDescription}</p>
              </div>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                Eligibility Criteria
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <ul className="space-y-4">
                  {scheme.eligibility.map((item, idx) => (
                    <li key={idx} className={`flex items-start gap-4 p-3 rounded-xl ${idx % 2 === 0 ? "bg-slate-50" : ""}`}>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-green/10 text-accent-green text-xs font-bold mt-0.5">{idx + 1}</span>
                      <span className="text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                Key Benefits
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {scheme.benefits.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm group hover:shadow-lg hover:border-accent-green/20 hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-accent-green/10 text-accent-green flex items-center justify-center group-hover:bg-accent-green group-hover:text-white transition-colors">
                        {benefitIcons[idx % benefitIcons.length]}
                      </div>
                      <div>
                        <span className="text-xs text-accent-green font-bold uppercase tracking-wider">Benefit {idx + 1}</span>
                        <p className="text-slate-600 text-sm leading-relaxed mt-1">{item}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Application Process — vertical timeline */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Application Process
              </h2>
              <div className="space-y-0 relative">
                <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-accent-green via-accent-green/30 to-transparent" />
                {scheme.process.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-6 group relative pb-8 last:pb-0">
                    <div className="flex flex-col items-center z-10">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white text-sm font-black group-hover:bg-accent-green transition-colors shadow-lg">{idx + 1}</div>
                    </div>
                    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex-1 group-hover:shadow-md group-hover:border-accent-green/20 transition-all">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent-green">Step {idx + 1}</span>
                      <p className="text-slate-600 leading-relaxed mt-1">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* ═══ Right Column — Sidebar ═══ */}
          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="relative z-10">
                <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full border mb-5 ${catColor}`}>{scheme.category}</span>
                <h3 className="text-2xl font-bold mb-3">Ready to Apply?</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">Let our experts guide you through the application process and maximize your chances of approval.</p>
                <Link href="/contact" className="inline-block w-full rounded-xl bg-accent-green px-6 py-4 text-center font-bold text-slate-900 hover:bg-white hover:scale-[1.02] transition-all shadow-xl shadow-accent-green/20">Start Application →</Link>
                <a href="tel:18005710607" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  1800-571-0607
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Required Documents
              </h3>
              <ul className="space-y-3">
                {scheme.documents.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-accent-green mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Quick Overview
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Category", val: scheme.category },
                  { label: "Timeline", val: scheme.timeline },
                  { label: scheme.highlightLabel, val: scheme.highlight },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                    <span className="text-slate-500 text-sm">{row.label}</span>
                    <span className="font-bold text-slate-900 text-sm">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <CTASection />
    </main>
  );
}
