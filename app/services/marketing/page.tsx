import Link from "next/link";

const marketingServices = [
  {
    title: "Digital Marketing",
    icon: "📱",
    description: "Comprehensive digital marketing strategies to grow your online presence and drive results.",
    services: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Marketing",
      "Email Marketing",
      "Content Marketing",
    ],
  },
  {
    title: "Brand Identity",
    icon: "🎨",
    description: "Create a memorable brand identity that resonates with your target audience.",
    services: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity System",
      "Brand Messaging",
      "Brand Strategy",
    ],
  },
  {
    title: "Website Development",
    icon: "💻",
    description: "Professional websites that convert visitors into customers.",
    services: [
      "Responsive Web Design",
      "E-commerce Development",
      "Landing Pages",
      "Web Applications",
      "Website Maintenance",
    ],
  },
  {
    title: "Content Creation",
    icon: "✍️",
    description: "Engaging content that tells your brand story and drives engagement.",
    services: [
      "Blog Writing",
      "Video Production",
      "Infographics",
      "Case Studies",
      "Whitepapers",
    ],
  },
];

const socialPlatforms = [
  { name: "LinkedIn", icon: "💼", desc: "B2B marketing & thought leadership" },
  { name: "Instagram", icon: "📸", desc: "Visual storytelling & engagement" },
  { name: "Facebook", icon: "👥", desc: "Community building & ads" },
  { name: "Twitter/X", icon: "🐦", desc: "Real-time engagement" },
  { name: "YouTube", icon: "▶️", desc: "Video content & tutorials" },
  { name: "Google Ads", icon: "🔍", desc: "Search & display advertising" },
];

const packages = [
  {
    title: "Starter",
    description: "Perfect for new businesses",
    features: [
      "Social media setup",
      "Basic SEO",
      "2 blog posts/month",
      "Monthly reporting",
    ],
    ideal: "Startups",
  },
  {
    title: "Growth",
    description: "For businesses ready to scale",
    features: [
      "Advanced SEO",
      "4 blog posts/month",
      "Social media management",
      "PPC campaign management",
      "Email marketing",
      "Bi-weekly reporting",
    ],
    ideal: "Growing SMEs",
    popular: true,
  },
  {
    title: "Enterprise",
    description: "Comprehensive marketing solution",
    features: [
      "Full digital strategy",
      "Unlimited content",
      "Multi-platform advertising",
      "Marketing automation",
      "Dedicated account manager",
      "Weekly reporting & calls",
    ],
    ideal: "Large Businesses",
  },
];

const caseStudies = [
  {
    client: "Manufacturing MSME",
    industry: "Industrial Equipment",
    results: ["300% increase in leads", "50% lower cost per lead", "First page Google ranking"],
  },
  {
    client: "Tech Startup",
    industry: "SaaS",
    results: ["10x social media growth", "200% website traffic increase", "5x demo requests"],
  },
  {
    client: "D2C Brand",
    industry: "Consumer Goods",
    results: ["₹50L monthly revenue", "25% reduction in CAC", "4.5x ROAS on ads"],
  },
];

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container-max">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-full text-pink-300 text-sm mb-6">
              <span>📣</span>
              Marketing & Branding Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Grow Your Brand with<br />
              <span className="text-brand">Strategic Marketing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From digital marketing to brand identity, we help businesses build strong brands 
              and reach their target audience effectively.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn">
                Get Marketing Strategy →
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
              <div className="text-3xl md:text-4xl font-bold text-brand">200+</div>
              <div className="text-gray-600">Brands Built</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand">₹10Cr+</div>
              <div className="text-gray-600">Ad Spend Managed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand">5M+</div>
              <div className="text-gray-600">Leads Generated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand">4.5x</div>
              <div className="text-gray-600">Avg ROAS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Marketing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Full-stack marketing solutions to help your business grow online and offline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.services.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-brand">→</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Platforms We Master</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expertise across all major digital marketing platforms and channels.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {socialPlatforms.map((platform, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                <div className="text-3xl mb-2">{platform.icon}</div>
                <h3 className="font-semibold mb-1">{platform.name}</h3>
                <p className="text-xs text-gray-500">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Marketing Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible packages designed to fit your business needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`rounded-xl p-8 ${
                  pkg.popular 
                    ? 'bg-slate-900 text-white ring-2 ring-brand' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <span className="inline-block px-3 py-1 bg-brand text-white text-xs font-semibold rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <p className={`text-sm mb-6 ${pkg.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className={pkg.popular ? 'text-green-400' : 'text-green-500'}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className={`pt-4 border-t ${pkg.popular ? 'border-white/20' : 'border-gray-100'}`}>
                  <span className="text-xs text-gray-500">Ideal for: </span>
                  <span className={`text-xs font-semibold ${pkg.popular ? 'text-brand' : 'text-brand'}`}>
                    {pkg.ideal}
                  </span>
                </div>
                <Link 
                  href="/contact" 
                  className={`block text-center mt-6 px-6 py-3 rounded-lg font-semibold transition ${
                    pkg.popular 
                      ? 'bg-brand hover:bg-red-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real results we've achieved for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-sm text-brand mb-2">{study.industry}</div>
                <h3 className="text-xl font-bold mb-4">{study.client}</h3>
                <div className="space-y-2">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Brand?</h2>
          <p className="text-lg mb-8 opacity-90">Let's create a marketing strategy that drives results</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-brand font-semibold rounded-lg hover:bg-gray-100 transition">
              Get Free Marketing Audit
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
