"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const fundingOptions = [
  {
    title: "Pradhan Mantri Mudra Yojana",
    description: "Collateral-free credit for non-farm micro enterprises under three categories.",
    tags: ["Collateral-free", "Micro"],
    success: "98%",
    time: "7-10 days",
    href: "/services/pm-mudra-yojana",
    popular: true,
  },
  {
    title: "PM Employment Generation Programme",
    description: "Margin money subsidy: 15-35% based on category and location.",
    tags: ["Subsidy", "New venture"],
    success: "92%",
    time: "30-45 days",
    href: "/services/pm-employment-generation-programme",
    popular: true,
  },
  {
    title: "CGTMSE Credit Guarantee",
    description: "75-85% guarantee coverage on collateral-free credit facilities.",
    tags: ["Guarantee", "Collateral-free"],
    success: "95%",
    time: "15-20 days",
    href: "/services/cgtmse-credit-guarantee",
    popular: false,
  },
  {
    title: "CLCS-TUS / MSME Champions",
    description: "Technology upgradation support with capital subsidy for MSMEs.",
    tags: ["Technology", "Upgrade"],
    success: "84%",
    time: "45-60 days",
    href: "/services/clcs-tus-msme-champions",
    popular: false,
  },
  {
    title: "SFURTI (Traditional Industries)",
    description: "Cluster-based support for artisans and traditional industries.",
    tags: ["Clusters", "Traditional"],
    success: "82%",
    time: "60-90 days",
    href: "/services/sfurti-traditional-industries",
    popular: false,
  },
  {
    title: "PSB Loans in 59 Minutes",
    description: "Quick in-principle approval through digital platform with CGTMSE cover.",
    tags: ["Digital", "Quick approval"],
    success: "89%",
    time: "59 minutes*",
    href: "/services/psb-loans-59-minutes",
    popular: false,
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function FundingOptions() {
  return (
    <section className="section section-navy">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Tailored <span className="gradient-text-light">Funding Options</span>
          </h2>
          <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
            Choose from India&apos;s leading MSME schemes—fast approvals, expert support, and minimal paperwork.
          </p>
        </motion.div>

        {/* Funding Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {fundingOptions.map((option) => (
            <motion.div
              key={option.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="card bg-white border border-transparent hover:border-cyan/30 transition-all duration-300 relative"
            >
              {/* Popular Badge */}
              {option.popular && (
                <div className="absolute -top-3 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                  ⚡ Popular
                </div>
              )}

              <h3 className="text-lg font-bold text-ink text-clamp-2">{option.title}</h3>
              <p className="text-sm text-muted mt-2 text-clamp-3">{option.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {option.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-cyan/10 text-cyan text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-100">
                <div>
                  <p className="text-xs text-muted">Success</p>
                  <p className="font-bold text-accent-green">{option.success}</p>
                </div>
                <div>
                  <p className="text-xs text-muted">Time</p>
                  <p className="font-bold text-ink">{option.time}</p>
                </div>
                <Link
                  href={option.href}
                  className="ml-auto text-cyan hover:text-cyan-dark transition-colors"
                >
                  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Check Eligibility CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link href="/funding">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn inline-flex items-center cursor-pointer"
            >
              Check Your Eligibility
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
