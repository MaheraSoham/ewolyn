import Link from "next/link";

const certifications = [
  {
    title: "ISO 9001:2015",
    category: "Quality Management",
    description: "International standard for quality management systems. Demonstrates your commitment to customer satisfaction and continuous improvement.",
    benefits: ["Improved customer trust", "Better process efficiency", "Competitive advantage", "Access to government tenders"],
    timeline: "30-45 days",
    validity: "3 years",
  },
  {
    title: "ISO 14001:2015",
    category: "Environmental Management",
    description: "Framework for effective environmental management systems. Shows your commitment to environmental responsibility.",
    benefits: ["Environmental compliance", "Reduced waste", "Cost savings", "Better brand image"],
    timeline: "45-60 days",
    validity: "3 years",
  },
  {
    title: "ISO 27001:2022",
    category: "Information Security",
    description: "International standard for information security management. Essential for IT companies and data handlers.",
    benefits: ["Data protection", "Client confidence", "Regulatory compliance", "Risk management"],
    timeline: "60-90 days",
    validity: "3 years",
  },
  {
    title: "ISO 45001:2018",
    category: "Occupational Health & Safety",
    description: "Standard for workplace safety management. Protects employees and reduces workplace incidents.",
    benefits: ["Employee safety", "Reduced accidents", "Legal compliance", "Insurance benefits"],
    timeline: "45-60 days",
    validity: "3 years",
  },
  {
    title: "CE Marking",
    category: "European Conformity",
    description: "Mandatory for products sold in European Economic Area. Indicates compliance with EU safety standards.",
    benefits: ["EU market access", "Product credibility", "Legal requirement", "Consumer confidence"],
    timeline: "30-60 days",
    validity: "Product specific",
  },
  {
    title: "BIS Certification",
    category: "Indian Standards",
    description: "Bureau of Indian Standards certification for quality assurance. Mandatory for many product categories.",
    benefits: ["Indian market compliance", "Quality assurance", "Consumer trust", "Government contracts"],
    timeline: "45-90 days",
    validity: "1-2 years",
  },
];

const ipServices = [
  {
    title: "Trademark Registration",
    icon: "™️",
    description: "Protect your brand name, logo, and tagline from unauthorized use",
    features: ["Brand protection", "Legal ownership", "Nationwide validity", "10 year validity"],
    timeline: "6-12 months",
  },
  {
    title: "Patent Filing",
    icon: "📜",
    description: "Secure your invention with legal protection against copying",
    features: ["Invention protection", "Exclusive rights", "20 year validity", "Commercial advantage"],
    timeline: "3-5 years",
  },
  {
    title: "Copyright Registration",
    icon: "©️",
    description: "Protect your creative works, software, and artistic content",
    features: ["Creative protection", "Author rights", "Lifetime + 60 years", "Easy enforcement"],
    timeline: "2-3 months",
  },
  {
    title: "Design Registration",
    icon: "🎨",
    description: "Protect the unique visual design of your products",
    features: ["Design exclusivity", "Visual protection", "15 year validity", "Product differentiation"],
    timeline: "3-6 months",
  },
];

const startupRecognitions = [
  {
    title: "DPIIT Startup Recognition",
    description: "Official recognition as a startup by Government of India. Unlocks various benefits and schemes.",
    benefits: [
      "Tax exemption for 3 years",
      "Self-certification for labor laws",
      "Fast-track patent applications",
      "Access to government schemes",
      "Eligible for Startup India Seed Fund",
    ],
    timeline: "7-10 days",
  },
  {
    title: "Startup India Registration",
    description: "Registration under Startup India initiative for access to ecosystem support.",
    benefits: [
      "Fund of Funds access",
      "Credit Guarantee Scheme",
      "Startup events access",
      "Mentorship programs",
      "Networking opportunities",
    ],
    timeline: "Immediate",
  },
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container-max">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full text-amber-300 text-sm mb-6">
              <span>🏆</span>
              Certifications & Intellectual Property
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build Credibility with<br />
              <span className="text-brand">Certifications & IP Protection</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Enhance your business credibility with international certifications and protect your intellectual 
              property with trademarks, patents, and copyrights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn">
                Get Free Consultation →
              </Link>
              <a href="tel:+919737799937" className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition">
                📞 +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Recognition */}
      <section className="py-16 bg-gradient-to-r from-brand to-red-600 text-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center mb-12">🚀 Startup Recognition</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {startupRecognitions.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80 mb-4">{item.description}</p>
                <div className="space-y-2 mb-4">
                  {item.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-green-300">✓</span>
                      {benefit}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-sm">Timeline: <strong>{item.timeline}</strong></span>
                  <Link href="/contact" className="text-sm font-semibold hover:underline">Apply Now →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Certifications */}
      <section className="py-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ISO Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              International certifications that demonstrate your commitment to quality, security, and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition">
                <div className="text-xs font-semibold text-brand bg-red-50 px-3 py-1 rounded-full inline-block mb-3">
                  {cert.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Benefits:</div>
                  <div className="flex flex-wrap gap-2">
                    {cert.benefits.map((benefit, i) => (
                      <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t text-sm">
                  <div>
                    <span className="text-gray-500">Timeline:</span>
                    <span className="font-semibold ml-1">{cert.timeline}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Validity:</span>
                    <span className="font-semibold ml-1">{cert.validity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IP Services */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Intellectual Property Protection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Protect your ideas, inventions, and creative works with proper IP registration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ipServices.map((service, index) => (
              <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {service.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-white border px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="text-sm text-gray-500">
                      Timeline: <strong className="text-gray-900">{service.timeline}</strong>
                    </span>
                    <Link href="/contact" className="text-sm font-semibold text-brand hover:underline">
                      Apply Now →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Ewolyn?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "👨‍💼", title: "Expert Consultants", desc: "Certified professionals with 10+ years experience" },
              { icon: "⚡", title: "Fast Processing", desc: "Quick turnaround with minimal documentation" },
              { icon: "💯", title: "100% Success Rate", desc: "Track record of successful certifications" },
              { icon: "🔄", title: "End-to-End Support", desc: "From application to audit and renewal" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Certified?</h2>
          <p className="text-lg mb-8 opacity-90">Boost your business credibility with our certification services</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-brand font-semibold rounded-lg hover:bg-gray-100 transition">
              Schedule Free Consultation
            </Link>
            <a href="tel:+919737799937" className="px-8 py-4 border-2 border-white rounded-lg hover:bg-white/10 transition">
              Call Now: +91 97377 99937
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
