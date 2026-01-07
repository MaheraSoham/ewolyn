import Link from "next/link";

const registrationServices = [
  {
    title: "Private Limited Company",
    description: "Most preferred structure for startups seeking investment",
    features: ["Limited liability protection", "Separate legal entity", "Easy to raise funds", "Perpetual succession"],
    timeline: "7-10 working days",
    documents: ["PAN Card", "Aadhaar Card", "Passport size photo", "Address proof", "Registered office proof"],
  },
  {
    title: "Limited Liability Partnership (LLP)",
    description: "Ideal for professional services and small businesses",
    features: ["Limited liability", "Lower compliance", "No minimum capital", "Flexibility in operations"],
    timeline: "10-15 working days",
    documents: ["PAN Card", "Aadhaar Card", "Address proof", "LLP Agreement draft"],
  },
  {
    title: "One Person Company (OPC)",
    description: "Perfect for solo entrepreneurs with limited liability",
    features: ["Single member company", "Limited liability", "Easy to convert to Pvt Ltd", "Lower compliance"],
    timeline: "7-10 working days",
    documents: ["PAN Card", "Aadhaar Card", "Nominee details", "Address proof"],
  },
  {
    title: "Sole Proprietorship",
    description: "Simplest form of business for individual entrepreneurs",
    features: ["Easy to start", "Complete control", "Minimal compliance", "Direct taxation"],
    timeline: "3-5 working days",
    documents: ["PAN Card", "Aadhaar Card", "Business address proof"],
  },
  {
    title: "Partnership Firm",
    description: "Traditional structure for multiple owners",
    features: ["Easy to form", "Shared responsibilities", "Tax benefits", "Flexibility"],
    timeline: "5-7 working days",
    documents: ["PAN Cards of partners", "Partnership deed", "Address proof"],
  },
  {
    title: "Section 8 Company (NGO)",
    description: "Non-profit organization for charitable purposes",
    features: ["Tax exemptions", "Credibility", "Limited liability", "Government grants eligible"],
    timeline: "20-30 working days",
    documents: ["MOA & AOA", "Director documents", "Registered office proof"],
  },
];

const complianceServices = [
  { title: "GST Registration", description: "Mandatory for businesses with turnover above ₹40L", icon: "📊" },
  { title: "MSME/Udyam Registration", description: "Get benefits under MSME schemes", icon: "🏭" },
  { title: "Import Export Code (IEC)", description: "Required for international trade", icon: "🌍" },
  { title: "Shop & Establishment", description: "State-specific business license", icon: "🏪" },
  { title: "Professional Tax", description: "Mandatory for employers", icon: "💼" },
  { title: "FSSAI License", description: "Required for food businesses", icon: "🍽️" },
];

export default function BusinessRegistrationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container-max">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm mb-6">
              <span>📋</span>
              Business Registration Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Business with<br />
              <span className="text-brand">Proper Legal Foundation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We help you choose the right business structure and handle all registration formalities. 
              From company incorporation to compliance setup, we've got you covered.
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

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand">5000+</div>
              <div className="text-gray-600">Companies Registered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand">7 Days</div>
              <div className="text-gray-600">Average Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Types */}
      <section className="py-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Business Structure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the right legal structure based on your business needs, liability preferences, and growth plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {registrationServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Key Features:</div>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm">
                    <span className="text-gray-500">Timeline:</span>
                    <span className="font-semibold text-brand ml-1">{service.timeline}</span>
                  </div>
                  <Link href="/contact" className="text-sm font-semibold text-brand hover:underline">
                    Get Started →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Compliance Services */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compliance & Registrations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential registrations to keep your business compliant with all statutory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceServices.map((service, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                <div className="text-3xl">{service.icon}</div>
                <div>
                  <h3 className="font-bold mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center mb-12">Our Registration Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understand your business needs and recommend the right structure" },
              { step: "02", title: "Documentation", desc: "Collect required documents and prepare application" },
              { step: "03", title: "Filing", desc: "Submit application to relevant authorities" },
              { step: "04", title: "Completion", desc: "Receive registration certificate and setup compliance" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-brand mb-4">{item.step}</div>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Register Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">Get expert guidance and hassle-free registration</p>
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
