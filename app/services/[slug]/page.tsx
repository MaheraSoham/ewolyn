"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDetailedSchemeBySlug } from "@/lib/schemes-detailed";
import CTASection from "@/components/CTASection";

type Props = {
  params: { slug: string };
};

export default function SchemeDetailPage({ params }: Props) {
  const scheme = getDetailedSchemeBySlug(params.slug);
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const sections = scheme?.tableOfContents.map(s => s.id) || [];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scheme]);

  if (!scheme) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-navy-gradient text-white py-20 relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-green/5 rounded-full blur-[100px] -z-10" />

        <div className="container-max relative z-10">
          {/* Tags / Breadcrumb style */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-accent-green/90">
              {scheme.tags.join(" • ")}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-accent-green">
              {scheme.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-white max-w-2xl mx-auto">
              {scheme.subtitle}
            </p>
          </div>

          {/* Decorative Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent-green to-transparent mx-auto mt-8" />

          {/* Description */}
          <p className="text-center text-slate-300/90 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            {scheme.heroDescription}
          </p>

          {/* Stats - Glassmorphism style */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {scheme.heroStats.map((stat) => (
              <div key={stat.label} className="stats-card text-center group">
                <div className="text-3xl md:text-4xl font-black text-accent-green group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-2 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-8 mt-12 text-sm font-medium text-slate-400">
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              📅 {scheme.lastUpdated}
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              ⏱️ {scheme.readTime}
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              👤 {scheme.author}
            </span>
          </div>

          {/* Read More Button */}
          <div className="text-center mt-12 pb-4">
            <a
              href="#introduction"
              className="btn-hero-outline group gap-2"
            >
              <span>Explore Full Scheme</span>
              <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area - White background */}
      <div className="bg-slate-50 py-16 min-h-screen">
        <div className="container-max">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Sidebar - Table of Contents */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="card">
                <h3 className="font-semibold text-ink mb-4">Table of Contents</h3>
                <nav className="space-y-1">
                  {scheme.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block px-3 py-2 text-sm rounded-lg transition ${activeSection === item.id
                        ? "bg-brand/10 text-brand font-medium border-l-2 border-brand"
                        : "text-muted hover:text-ink hover:bg-slate-50"
                        }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* DPR Assistance CTA */}
              <div className="card mt-6 bg-slate-50">
                <h3 className="font-semibold text-ink">Need DPR Assistance?</h3>
                <p className="mt-2 text-sm text-muted">
                  Our experts can help you prepare your Detailed Project Report and coordinate with banks for faster approval.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block w-full rounded-lg bg-brand px-4 py-3 text-center text-sm font-medium text-white hover:bg-brand-dark transition"
                >
                  Get Expert Help
                </Link>
              </div>
            </aside>

            {/* Main Content */}
            <div className="space-y-12">
              {/* Introduction */}
              <section id="introduction">
                {scheme.introduction.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-muted leading-relaxed mb-4">{p}</p>
                ))}
                {scheme.introduction.quote && (
                  <blockquote className="border-l-4 border-brand pl-4 italic text-muted bg-slate-50 py-4 pr-4 rounded-r-lg">
                    &ldquo;{scheme.introduction.quote}&rdquo;
                  </blockquote>
                )}
              </section>

              {/* What is Section */}
              <section id={`what-is-${scheme.slug}`} className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-ink mb-6">{scheme.whatIs.title}</h2>
                <div className="card bg-slate-50">
                  {scheme.whatIs.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-muted leading-relaxed mb-4 last:mb-0">{p}</p>
                  ))}
                </div>
              </section>

              {/* Eligibility */}
              <section id="eligibility">
                <h2 className="text-2xl font-bold text-ink mb-6">Who is Eligible for the {scheme.title}?</h2>
                <p className="text-muted mb-6">{scheme.eligibility.intro}</p>

                <div className="space-y-4">
                  {scheme.eligibility.entities.map((entity, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand text-white text-sm font-bold">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="font-semibold text-ink">{entity.title}</h4>
                        <p className="text-sm text-muted mt-1">{entity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Eligibility Checklist */}
                <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-semibold text-green-800 flex items-center gap-2">
                    ℹ️ Eligibility Checklist:
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {scheme.eligibility.checklist.map((item, idx) => (
                      <li key={idx} className="text-sm text-green-700 flex items-start gap-2">
                        <span>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Eligible Projects */}
              <section id="eligible-projects">
                <h2 className="text-2xl font-bold text-ink mb-6">What Types of Projects are Covered?</h2>
                <p className="text-muted mb-6">{scheme.eligibleProjects.intro}</p>

                <div className="grid gap-4 md:grid-cols-2">
                  {scheme.eligibleProjects.projects.map((project, idx) => (
                    <div key={idx} className="card hover:shadow-md transition">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">{project.icon}</span>
                        <div>
                          <h4 className="font-semibold text-ink">{project.title}</h4>
                          <p className="text-sm text-muted mt-1">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Key Benefits */}
              <section id="key-benefits">
                <h2 className="text-2xl font-bold text-ink mb-6">Key Benefits</h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {scheme.benefits.highlights.map((benefit, idx) => (
                    <div key={idx} className="card bg-gradient-to-br from-green-50 to-white border border-green-100">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">{benefit.icon}</span>
                        <div>
                          <p className="text-sm text-muted">{benefit.label}</p>
                          <p className="text-2xl font-bold text-brand">{benefit.value}</p>
                          <p className="text-sm text-muted mt-2">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Lending Institutions */}
                {scheme.benefits.lendingInstitutions && (
                  <div className="card mt-6">
                    <h4 className="font-semibold text-ink mb-4">Lending Institutions</h4>
                    <p className="text-sm text-muted mb-4">Various financial institutions provide loans under this scheme:</p>
                    <ul className="space-y-2">
                      {scheme.benefits.lendingInstitutions.map((inst, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted">
                          <span className="text-green-500">✓</span>
                          {inst}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>

              {/* Application Process */}
              <section id="application-process">
                <h2 className="text-2xl font-bold text-ink mb-6">How to Apply? (Step-by-Step)</h2>

                <div className="card">
                  <div className="space-y-6">
                    {scheme.applicationProcess.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand text-white font-bold">
                          {idx + 1}
                        </span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-ink">{step.title}</h4>
                          <p className="text-sm text-muted mt-1">{step.description}</p>
                          {step.cta && (
                            <Link href="/contact" className="text-sm text-brand hover:underline mt-2 inline-block">
                              {step.cta} →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline Note */}
                <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-6">
                  <p className="text-sm text-red-800">
                    <strong>ℹ️ Approval Timeline:</strong> {scheme.applicationProcess.timeline}
                  </p>
                </div>
              </section>

              {/* Documents Required */}
              <section id="documents-required">
                <h2 className="text-2xl font-bold text-ink mb-6">Documents Required</h2>

                <div className="card">
                  <div className="grid gap-3 md:grid-cols-2">
                    {scheme.documents.list.map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-muted">
                        <span className="text-brand">📄</span>
                        {doc}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 bg-orange-50 border border-orange-200 rounded-xl p-4">
                  <p className="text-sm text-orange-800">
                    <strong>Note:</strong> {scheme.documents.note}
                  </p>
                </div>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes">
                <h2 className="text-2xl font-bold text-ink mb-6">Common Mistakes Applicants Make</h2>

                <div className="space-y-4">
                  {scheme.commonMistakes.map((mistake, idx) => (
                    <div key={idx} className="bg-red-50 border border-red-100 rounded-xl p-4">
                      <h4 className="font-semibold text-red-700 flex items-center gap-2">
                        ⚠️ {mistake.title}
                      </h4>
                      <p className="text-sm text-red-600 mt-1">{mistake.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-lg transition"
                  >
                    Avoid These Mistakes - Get Expert Assistance
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs">
                <h2 className="text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  {scheme.faqs.map((faq, idx) => (
                    <div key={idx} className="card">
                      <h4 className="font-semibold text-ink">{faq.question}</h4>
                      <p className="text-sm text-muted mt-2">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusion */}
              <section id="conclusion">
                <h2 className="text-2xl font-bold text-ink mb-6">Conclusion</h2>

                <div className="card bg-slate-50">
                  {scheme.conclusion.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-muted leading-relaxed mb-4 last:mb-0">{p}</p>
                  ))}
                </div>

                {/* Final CTA */}
                <div className="mt-8 bg-gradient-to-r from-brand to-brand-dark rounded-2xl p-8 text-white text-center">
                  <h3 className="text-xl font-bold">{scheme.conclusion.ctaTitle}</h3>
                  <p className="text-red-100 mt-2">{scheme.conclusion.ctaDescription}</p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 bg-white text-brand px-6 py-3 rounded-lg font-medium hover:bg-red-50 transition"
                  >
                    Get Expert Help Now
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </main>
  );
}