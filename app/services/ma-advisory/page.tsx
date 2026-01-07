import Link from "next/link";

const maServices = [
  {
    title: "Merger Advisory",
    icon: "🤝",
    description: "Expert guidance through the entire merger process from strategy to integration.",
    features: [
      "Strategic fit analysis",
      "Partner identification",
      "Negotiation support",
      "Integration planning",
      "Regulatory compliance",
    ],
  },
  {
    title: "Acquisition Advisory",
    icon: "🎯",
    description: "End-to-end support for acquiring businesses that align with your growth strategy.",
    features: [
      "Target identification",
      "Valuation analysis",
      "Due diligence",
      "Deal structuring",
      "Post-acquisition integration",
    ],
  },
  {
    title: "Business Valuation",
    icon: "💰",
    description: "Accurate business valuations for M&A, fundraising, or strategic planning.",
    features: [
      "DCF valuation",
      "Comparable company analysis",
      "Asset-based valuation",
      "Earnings multiple approach",
      "Fairness opinions",
    ],
  },
  {
    title: "Sell-Side Advisory",
    icon: "📤",
    description: "Maximize value when selling your business with our expert sell-side services.",
    features: [
      "Business preparation",
      "Buyer identification",
      "Confidential marketing",
      "Negotiation support",
      "Transaction closure",
    ],
  },
];

const dealTypes = [
  {
    title: "Strategic Acquisitions",
    description: "Acquire businesses that provide strategic advantages like market share, technology, or talent.",
    icon: "🏢",
  },
  {
    title: "Private Equity Deals",
    description: "Connect with PE firms for growth capital or buyout opportunities.",
    icon: "💼",
  },
  {
    title: "Joint Ventures",
    description: "Structure partnerships that leverage combined strengths for mutual benefit.",
    icon: "🤲",
  },
  {
    title: "Management Buyouts",
    description: "Help management teams acquire ownership of their companies.",
    icon: "👥",
  },
  {
    title: "Cross-Border M&A",
    description: "Navigate international transactions with our global network and expertise.",
    icon: "🌍",
  },
  {
    title: "Distressed Assets",
    description: "Acquire undervalued assets or turn around struggling businesses.",
    icon: "📉",
  },
];

const process = [
  {
    step: "01",
    title: "Strategy Development",
    description: "Define objectives, criteria, and approach for the M&A transaction",
  },
  {
    step: "02",
    title: "Target Identification",
    description: "Research and shortlist potential targets or buyers based on strategic fit",
  },
  {
    step: "03",
    title: "Due Diligence",
    description: "Comprehensive analysis of financial, legal, and operational aspects",
  },
  {
    step: "04",
    title: "Valuation & Structuring",
    description: "Determine fair value and optimal deal structure",
  },
  {
    step: "05",
    title: "Negotiation",
    description: "Expert negotiation to achieve favorable terms for our clients",
  },
  {
    step: "06",
    title: "Closure & Integration",
    description: "Complete transaction and support post-deal integration",
  },
];

const stats = [
  { value: "₹500Cr+", label: "Deal Value Advised" },
  { value: "50+", label: "Successful Transactions" },
  { value: "15+", label: "Industry Sectors" },
  { value: "95%", label: "Deal Closure Rate" },
];

export default function MAAdvisoryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container-max">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm mb-6">
              <span>🤝</span>
              M&A Advisory Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Merger &<br />
              <span className="text-brand">Acquisition Advisory</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Navigate complex M&A transactions with confidence. Our experienced team provides 
              end-to-end advisory services for mergers, acquisitions, and business valuations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn">
                Schedule M&A Consultation →
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
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-brand">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M&A Services */}
      <section className="py-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our M&A Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive advisory services for every stage of your M&A journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {maServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-brand">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Types */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Deals We Handle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience across diverse transaction types and industry sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealTypes.map((deal, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                <div className="text-3xl">{deal.icon}</div>
                <div>
                  <h3 className="font-bold mb-1">{deal.title}</h3>
                  <p className="text-sm text-gray-600">{deal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our M&A Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured approach to ensure successful transaction outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-brand/20 mb-2">{item.step}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Ewolyn for M&A?</h2>
              <div className="space-y-4">
                {[
                  { title: "Industry Expertise", desc: "Deep knowledge across multiple sectors including manufacturing, technology, and services" },
                  { title: "Extensive Network", desc: "Access to a wide network of investors, acquirers, and strategic partners" },
                  { title: "Confidentiality", desc: "Strict confidentiality protocols to protect sensitive information" },
                  { title: "Value Maximization", desc: "Focus on achieving the best possible outcomes for our clients" },
                  { title: "End-to-End Support", desc: "From initial strategy to post-deal integration" },
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
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Looking to Buy or Sell?</h3>
              <p className="text-gray-600 mb-6">
                Whether you're looking to acquire a business, sell your company, or explore 
                strategic partnerships, our M&A team can help you achieve your objectives.
              </p>
              <Link href="/contact" className="btn inline-flex">
                Start the Conversation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore M&A Opportunities?</h2>
          <p className="text-lg mb-8 opacity-90">Let our experts guide you through your next strategic transaction</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-brand font-semibold rounded-lg hover:bg-gray-100 transition">
              Schedule Confidential Discussion
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
