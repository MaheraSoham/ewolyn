import Link from "next/link";

const growthStrategies = [
  {
    title: "Market Expansion Strategy",
    icon: "🌍",
    description: "Expand your business to new markets, regions, and customer segments with data-driven strategies.",
    services: [
      "Market research & analysis",
      "Target market identification",
      "Entry strategy development",
      "Competitive landscape mapping",
      "Go-to-market planning",
    ],
  },
  {
    title: "Product Development",
    icon: "💡",
    description: "Develop new products or improve existing ones to meet market demands and stay competitive.",
    services: [
      "Product ideation workshops",
      "MVP development strategy",
      "Product-market fit analysis",
      "Feature prioritization",
      "Launch planning",
    ],
  },
  {
    title: "Operational Excellence",
    icon: "⚙️",
    description: "Optimize your operations to reduce costs, improve efficiency, and scale sustainably.",
    services: [
      "Process optimization",
      "Cost reduction strategies",
      "Supply chain management",
      "Quality improvement",
      "Automation advisory",
    ],
  },
  {
    title: "Financial Planning",
    icon: "📊",
    description: "Develop robust financial plans to support your growth objectives and maintain healthy cash flow.",
    services: [
      "Financial modeling",
      "Funding strategy",
      "Cash flow management",
      "Budget planning",
      "Investment planning",
    ],
  },
];

const businessPlans = [
  {
    title: "Startup Business Plan",
    description: "Comprehensive plan for new ventures seeking funding or market entry",
    includes: ["Executive summary", "Market analysis", "Financial projections", "Funding requirements", "Growth roadmap"],
    ideal: "Startups & New Ventures",
  },
  {
    title: "Investor Pitch Deck",
    description: "Compelling presentation to attract investors and secure funding",
    includes: ["Problem-solution fit", "Market opportunity", "Business model", "Traction & metrics", "Team & vision"],
    ideal: "Fundraising Startups",
  },
  {
    title: "DPR (Detailed Project Report)",
    description: "Comprehensive report required for bank loans and government schemes",
    includes: ["Project overview", "Technical feasibility", "Financial analysis", "Implementation plan", "Risk assessment"],
    ideal: "MSMEs & Manufacturers",
  },
  {
    title: "TEV Study",
    description: "Techno-Economic Viability study for large project financing",
    includes: ["Technical appraisal", "Market assessment", "Financial evaluation", "Sensitivity analysis", "Recommendations"],
    ideal: "Large Projects",
  },
];

const mentorshipPrograms = [
  {
    title: "1-on-1 Mentorship",
    duration: "3 months",
    sessions: "12 sessions",
    features: ["Personal mentor", "Customized guidance", "Weekly calls", "Action planning"],
  },
  {
    title: "Group Mentorship",
    duration: "6 months",
    sessions: "24 sessions",
    features: ["Peer learning", "Expert sessions", "Networking", "Resource sharing"],
  },
  {
    title: "Accelerator Program",
    duration: "12 weeks",
    sessions: "Intensive",
    features: ["Structured curriculum", "Investor access", "Demo day", "Funding support"],
  },
];

export default function GrowthStrategyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container-max">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/20 rounded-full text-rose-300 text-sm mb-6">
              <span>📈</span>
              Growth Strategy Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Scale Your Business with<br />
              <span className="text-brand">Expert Growth Strategies</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From market expansion to operational excellence, we help businesses develop and 
              execute strategies that drive sustainable growth and competitive advantage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn">
                Get Growth Consultation →
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
              <div className="text-3xl md:text-4xl font-bold text-brand">500+</div>
              <div className="text-gray-600">Businesses Scaled</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand">3x</div>
              <div className="text-gray-600">Avg Revenue Growth</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand">₹200Cr+</div>
              <div className="text-gray-600">Funding Raised</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand">50+</div>
              <div className="text-gray-600">Industry Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Strategies */}
      <section className="py-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Growth Strategy Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive strategies tailored to your business goals and market conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {growthStrategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{strategy.icon}</div>
                <h3 className="text-xl font-bold mb-3">{strategy.title}</h3>
                <p className="text-gray-600 mb-4">{strategy.description}</p>
                <div className="space-y-2">
                  {strategy.services.map((service, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-brand">→</span>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 mt-6 text-brand font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Plans */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Business Planning Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional business plans and reports that help you secure funding and guide your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessPlans.map((plan, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition">
                <h3 className="font-bold mb-2">{plan.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                <div className="space-y-1 mb-4">
                  {plan.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="text-green-500">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <span className="text-xs text-gray-500">Ideal for:</span>
                  <span className="text-xs font-semibold text-brand ml-1">{plan.ideal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Programs */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mentorship Programs</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Learn from industry experts and successful entrepreneurs who've been there, done that.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mentorshipPrograms.map((program, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <div className="flex justify-center gap-4 mb-4 text-sm">
                  <span className="px-3 py-1 bg-brand/20 rounded-full">{program.duration}</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full">{program.sessions}</span>
                </div>
                <div className="space-y-2">
                  {program.features.map((feature, i) => (
                    <div key={i} className="text-sm text-gray-300">• {feature}</div>
                  ))}
                </div>
                <Link href="/contact" className="inline-block mt-6 px-6 py-2 bg-brand rounded-lg font-semibold hover:bg-red-700 transition">
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
          <p className="text-lg mb-8 opacity-90">Let's create a customized growth strategy for your business</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-brand font-semibold rounded-lg hover:bg-gray-100 transition">
              Schedule Strategy Session
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
