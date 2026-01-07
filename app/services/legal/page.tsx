import Link from "next/link";

const legalServices = [
  {
    title: "Company Law & Corporate Affairs",
    icon: "🏢",
    description: "Complete legal support for corporate compliance and governance.",
    services: [
      "Annual filings & compliances",
      "Board meetings & resolutions",
      "ROC filings",
      "Corporate restructuring",
      "Shareholder agreements",
    ],
  },
  {
    title: "Contract Drafting & Review",
    icon: "📝",
    description: "Professional contract drafting to protect your business interests.",
    services: [
      "Service agreements",
      "Employment contracts",
      "Vendor agreements",
      "NDA & confidentiality",
      "Franchise agreements",
    ],
  },
  {
    title: "Labor & Employment Law",
    icon: "👷",
    description: "Navigate employment regulations and protect your workforce.",
    services: [
      "Employment policies",
      "POSH compliance",
      "Labor law compliance",
      "Employee disputes",
      "Termination procedures",
    ],
  },
  {
    title: "Business Disputes & Litigation",
    icon: "⚖️",
    description: "Expert representation in commercial disputes and litigation.",
    services: [
      "Commercial litigation",
      "Arbitration proceedings",
      "Mediation services",
      "Recovery proceedings",
      "Consumer disputes",
    ],
  },
];

const complianceServices = [
  {
    title: "Statutory Compliances",
    items: ["GST Returns", "TDS/TCS Filings", "Income Tax Returns", "Annual Returns", "ROC Filings"],
    icon: "📊",
  },
  {
    title: "Labor Law Compliances",
    items: ["PF & ESI Registration", "Labor Welfare Fund", "Shops & Establishment", "Contract Labor Act", "Minimum Wages Act"],
    icon: "👥",
  },
  {
    title: "Industry Specific",
    items: ["FSSAI Compliance", "Drug License", "Pollution Certificates", "Factory License", "Trade License"],
    icon: "🏭",
  },
];

const documentationServices = [
  { title: "MOA & AOA Drafting", desc: "Company formation documents" },
  { title: "Partnership Deed", desc: "Partnership agreements" },
  { title: "LLP Agreement", desc: "LLP formation documents" },
  { title: "Joint Venture Agreement", desc: "JV partnerships" },
  { title: "Lease Agreements", desc: "Property & equipment leases" },
  { title: "Investment Agreements", desc: "Funding documentation" },
  { title: "Franchise Agreements", desc: "Franchise documentation" },
  { title: "Licensing Agreements", desc: "IP & technology licenses" },
];

const faqs = [
  {
    question: "Do I need a lawyer for my startup?",
    answer: "Yes, having legal support from the beginning helps avoid costly mistakes. A lawyer can help with company structure, contracts, IP protection, and compliance.",
  },
  {
    question: "What compliances are mandatory for a Pvt Ltd company?",
    answer: "Key compliances include annual ROC filings, board meetings, AGM, statutory audits, income tax returns, GST returns (if applicable), and other industry-specific compliances.",
  },
  {
    question: "How can I protect my business idea?",
    answer: "You can protect your idea through patents (for inventions), trademarks (for brand), copyrights (for content), NDAs (for confidentiality), and trade secrets policies.",
  },
  {
    question: "What is POSH compliance?",
    answer: "POSH (Prevention of Sexual Harassment) compliance is mandatory for organizations with 10+ employees. It requires forming an Internal Committee, conducting awareness sessions, and having a proper policy in place.",
  },
];

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container-max">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500/20 rounded-full text-slate-300 text-sm mb-6">
              <span>⚖️</span>
              Legal Consultancy Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Legal Support for<br />
              <span className="text-brand">Your Business Success</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From company formation to complex litigation, our legal experts provide 
              comprehensive support to protect and grow your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn">
                Get Legal Consultation →
              </Link>
              <a href="tel:+919737799937" className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition">
                📞 +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand">1000+</div>
              <div className="text-gray-600">Cases Handled</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand">500+</div>
              <div className="text-gray-600">Active Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Services */}
      <section className="py-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Legal Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal support tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {legalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.services.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-brand">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compliance Management</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay compliant with all statutory and regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {complianceServices.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="font-bold mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Services */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Legal Documentation</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional drafting and review of all business documents.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {documentationServices.map((doc, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/20 transition">
                <h4 className="font-semibold mb-1">{doc.title}</h4>
                <p className="text-sm text-gray-400">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about our legal services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-lg border border-gray-200 group">
                <summary className="p-6 cursor-pointer font-semibold flex items-center justify-between">
                  {faq.question}
                  <span className="text-brand group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Legal Services?</h2>
              <div className="space-y-4">
                {[
                  { title: "Experienced Team", desc: "Lawyers with 15+ years of corporate law experience" },
                  { title: "Business Focus", desc: "We understand business needs, not just legal technicalities" },
                  { title: "Cost-Effective", desc: "Transparent pricing with no hidden charges" },
                  { title: "Quick Turnaround", desc: "Fast response times and efficient service delivery" },
                  { title: "Ongoing Support", desc: "Retainer options for continuous legal support" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-brand text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Need Legal Advice?</h3>
              <p className="text-gray-600 mb-6">
                Book a free 30-minute consultation with our legal experts to discuss 
                your business requirements.
              </p>
              <Link href="/contact" className="btn inline-flex">
                Book Free Consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Business Today</h2>
          <p className="text-lg mb-8 opacity-90">Get expert legal support for your business needs</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-brand font-semibold rounded-lg hover:bg-gray-100 transition">
              Schedule Legal Consultation
            </Link>
            <a href="tel:+919737799937" className="px-8 py-4 border-2 border-white rounded-lg hover:bg-white/10 transition">
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
