"use client";
import Link from "next/link";
import { motion } from "framer-motion";

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
    href: "/services/ngo-elevation-program",
    icon: "🤝",
  },
  {
    title: "SC / ST / OBC Scheme",
    description: "Special subsidies & capital assistance for reserved categories.",
    href: "/services/sc-st-obc-scheme",
    icon: "👥",
  },
  {
    title: "Startup SEED Fund",
    description: "Early-stage capital support for innovative startups.",
    href: "/services/startup-seed-fund",
    icon: "🌱",
  },
  {
    title: "Tax Exemption Benefits",
    description: "Income tax, GST & compliance exemptions for eligible businesses.",
    href: "/services/tax-exemption-benefits",
    icon: "📋",
  },
  {
    title: "Venture Capital Support",
    description: "Equity & VC access for high-growth potential ventures.",
    href: "/services/venture-capital-support",
    icon: "💼",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GovernmentSchemes() {
  return (
    <section className="section section-light-green">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-cyan/10 text-cyan text-sm font-medium px-5 py-2 rounded-full mb-4 animate-pulse-glow">
            50+ Funding Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            Powerful <span className="gradient-text">Government Schemes</span>
          </h2>
          <p className="text-muted mt-3 max-w-2xl mx-auto">
            Unlock 50+ verified government funding, subsidy & tax benefit programs with expert handling.
          </p>
        </motion.div>

        {/* Schemes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {schemes.map((scheme) => (
            <motion.div key={scheme.title} variants={cardVariants}>
              <Link
                href={scheme.href}
                className="block h-full group rounded-2xl border border-cyan/30 bg-gradient-to-br from-cyan/10 to-primary-cyan/5 p-6 shadow-soft transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan/20 text-2xl group-hover:bg-cyan group-hover:text-white group-hover:shadow-glow transition-all duration-300"
                  >
                    {scheme.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-ink group-hover:text-cyan transition-colors text-clamp-2">
                      {scheme.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted text-clamp-3">{scheme.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-cyan">
                      View Details
                      <motion.svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ x: 0 }}
                        whileHover={{ x: 4 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link href="/funding">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-dark inline-flex items-center cursor-pointer"
            >
              Explore All 50+ Schemes
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
