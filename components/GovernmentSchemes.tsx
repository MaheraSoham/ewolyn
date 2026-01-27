import Link from "next/link";

const schemes = [
  {
    title: "NAIFF Funding",
    description: "Government-backed funding support to scale MSMEs and startups.",
    href: "/services/naif-scheme",
    icon: "🏛️",
  },
  {
    title: "NGO Elevation Program",
    description: "Financial & compliance support for NGOs and social enterprises.",
    href: "/funding",
    icon: "🤝",
  },
  {
    title: "SC / ST / OBC Scheme",
    description: "Special subsidies & capital assistance for reserved categories.",
    href: "/funding",
    icon: "👥",
  },
  {
    title: "Startup SEED Fund",
    description: "Early-stage capital support for innovative startups.",
    href: "/funding",
    icon: "🌱",
  },
  {
    title: "Tax Exemption Benefits",
    description: "Income tax, GST & compliance exemptions for eligible businesses.",
    href: "/funding",
    icon: "📋",
  },
  {
    title: "Venture Capital Support",
    description: "Equity & VC access for high-growth potential ventures.",
    href: "/funding",
    icon: "💼",
  },
];

export default function GovernmentSchemes() {
  return (
    <section className="section section-light-green">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-block bg-cyan/10 text-cyan text-sm font-medium px-5 py-2 rounded-full mb-4 animate-pulse-glow">
            50+ Funding Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            Powerful <span className="gradient-text">Government Schemes</span>
          </h2>
          <p className="text-muted mt-3 max-w-2xl mx-auto">
            Unlock 50+ verified government funding, subsidy & tax benefit programs with expert handling.
          </p>
        </div>

        {/* Schemes Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-children">
          {schemes.map((scheme) => (
            <Link
              key={scheme.title}
              href={scheme.href}
              className="group card hover:shadow-glow hover:border-cyan/50 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-2xl group-hover:bg-gradient-cyan group-hover:text-white group-hover:shadow-glow transition-all duration-300">
                  {scheme.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink group-hover:text-cyan transition-colors text-clamp-2">
                    {scheme.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted text-clamp-3">{scheme.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-cyan">
                    View Details
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <Link
            href="/funding"
            className="btn-dark"
          >
            Explore All 50+ Schemes
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
