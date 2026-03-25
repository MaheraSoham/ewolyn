import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogBySlug } from "@/lib/blogs";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} — Ewolyn Blog`,
    description: post.excerpt,
  };
}

/* ─── helpers ─── */
const categoryColors: Record<string, string> = {
  "Government Schemes": "bg-blue-100 text-blue-700 border-blue-200",
  "Business Growth": "bg-emerald-100 text-emerald-700 border-emerald-200",
  Funding: "bg-amber-100 text-amber-700 border-amber-200",
  Certifications: "bg-purple-100 text-purple-700 border-purple-200",
  "Digital Transformation": "bg-cyan-100 text-cyan-700 border-cyan-200",
  Export: "bg-rose-100 text-rose-700 border-rose-200",
  Compliance: "bg-orange-100 text-orange-700 border-orange-200",
};

const categoryIconColors: Record<string, string> = {
  "Government Schemes": "bg-blue-500",
  "Business Growth": "bg-emerald-500",
  Funding: "bg-amber-500",
  Certifications: "bg-purple-500",
  "Digital Transformation": "bg-cyan-500",
  Export: "bg-rose-500",
  Compliance: "bg-orange-500",
};

const categoryIcons: Record<string, JSX.Element> = {
  "Government Schemes": <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  "Business Growth": <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  Funding: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Certifications: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
  "Digital Transformation": <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  Export: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Compliance: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
};

const sectionIcons = [
  <svg key="info" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="clip" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
  <svg key="star" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
  <svg key="bolt" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  <svg key="light" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  <svg key="chart" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogDetailPage({ params }: Props) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const catIcon = categoryIcons[post.category] || categoryIcons["Business Growth"];
  const catColor = categoryIconColors[post.category] || "bg-gray-500";

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* ═══════════════ HERO / HEADER ═══════════════ */}
      <section className="relative pt-32 pb-20 hero-navy-gradient text-white overflow-hidden">
        {/* decorative blurs */}
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-[-5%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="container-max relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-300 mb-8">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Home
            </Link>
            <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/blogs" className="hover:text-primary transition-colors">Blog</Link>
            <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-gray-300 truncate max-w-xs">{post.title}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
            <div className="max-w-3xl">
              {/* Category + meta */}
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <div className={`w-9 h-9 rounded-xl ${catColor} text-white flex items-center justify-center`}>
                  {catIcon}
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}>{post.category}</span>
                <span className="text-sm text-gray-400 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {formatDate(post.date)}
                </span>
                <span className="text-sm text-gray-400 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {post.readTime} read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{post.title}</h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-white/10 text-white/70 px-3 py-1 rounded-full border border-white/10">{tag}</span>
                ))}
              </div>
            </div>

            {/* Table of Contents sidebar (desktop) */}
            {post.content.length > 2 && (
              <div className="hidden lg:block w-64 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 sticky top-32">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                  In This Article
                </p>
                <ul className="space-y-2.5">
                  {post.content.map((section, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-xs font-bold text-primary/60 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-sm text-gray-300 leading-snug line-clamp-2 hover:text-white transition-colors cursor-default">{section.heading}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════ ARTICLE CONTENT ═══════════════ */}
      <section className="py-16 lg:py-20">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            {post.content.map((section, i) => (
              <div key={i} className="mb-14 last:mb-0 group">
                <div className="flex items-start gap-4 mb-5">
                  {/* Section number badge */}
                  <div className="hidden md:flex items-center justify-center min-w-[42px] h-[42px] rounded-xl bg-slate-100 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {sectionIcons[i % sectionIcons.length]}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Section {String(i + 1).padStart(2, "0")}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">{section.heading}</h2>
                  </div>
                </div>
                <div className="md:pl-[58px]">
                  {section.paragraphs.map((para, j) => (
                    <p key={j} className="text-slate-600 leading-relaxed mb-4 last:mb-0">{para}</p>
                  ))}
                  {section.keyTakeaway && (
                    <div className="mt-6 bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary rounded-r-2xl p-6 relative overflow-hidden">
                      <div className="absolute top-3 right-4 text-primary/10">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                      </div>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                        Key Takeaway
                      </p>
                      <p className="text-slate-700 font-medium text-sm leading-relaxed">{section.keyTakeaway}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ RELATED ARTICLES ═══════════════ */}
      {related.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container-max">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-bold text-xs uppercase tracking-widest mb-2">Keep Reading</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Related Articles</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blogs/${r.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-7 h-7 rounded-lg ${categoryIconColors[r.category] || "bg-gray-500"} text-white flex items-center justify-center`}>
                        <span className="scale-75">{categoryIcons[r.category] || categoryIcons["Business Growth"]}</span>
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[r.category] || "bg-gray-100 text-gray-600"}`}>{r.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">{r.title}</h3>
                    <p className="text-sm text-slate-500 line-clamp-2 mb-4">{r.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {r.readTime}
                      </span>
                      <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-20 hero-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container-max text-center relative z-10">
          <div className="w-14 h-14 mx-auto bg-primary/15 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Expert <span className="text-primary">Guidance?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team helps MSMEs and startups navigate government schemes, funding, and compliance. Get a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-hero-green">Get Free Consultation →</Link>
            <a href="tel:9737799937" className="btn-hero-outline">
              <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call: 1800-571-0607
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
