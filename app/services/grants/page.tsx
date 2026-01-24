import SectionHeading from "@/components/SectionHeading";

export default function GrantsPage() {
  return (
    <main className="section bg-gradient-to-br from-blue-50 via-white to-pink-50 min-h-screen">
      <div className="container-max max-w-5xl py-10">
        {/* Hero Section */}
        <div className="rounded-xl shadow-lg bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 p-8 text-center text-white mb-10">
          <div className="mb-2">
            <span className="inline-block bg-gray-800 text-yellow-300 px-4 py-1 rounded-full text-xs font-semibold">Government Schemes • Non-Repayable Funding</span>
          </div>
          <h1 className="text-4xl font-bold mb-2 text-blue-600">Government Grants</h1>
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">MSME • Startup India • DPIIT • Sector-Specific Schemes</h2>
          <p className="mb-6 text-lg">Access non-repayable government funding with Ewolyn's specialized grants consultancy services covering scheme identification, eligibility assessment, application development, documentation support, and follow-up to maximize your chances of securing government financial assistance.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="bg-gray-900/80 rounded-lg px-6 py-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">₹500Cr+</div>
              <div className="text-sm text-gray-300">Grants Secured</div>
            </div>
            <div className="bg-gray-900/80 rounded-lg px-6 py-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">85%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="bg-gray-900/80 rounded-lg px-6 py-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-300">Schemes Covered</div>
            </div>
            <div className="bg-gray-900/80 rounded-lg px-6 py-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-300">Documentation Support</div>
            </div>
          </div>
          {/* Reference: Enego Grants Page button removed as requested */}
        </div>

        {/* Overview Section */}
        <div className="bg-white/90 rounded-xl shadow p-8 mb-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">Overview</span>
            <h2 className="text-2xl font-bold mb-2">Unlock Government Funding for Your Business</h2>
            <p className="mb-4 text-gray-700">Government grants represent a valuable source of non-repayable funding that can significantly accelerate business growth without creating debt obligations. From startup subsidies and R&D support to manufacturing incentives and export promotion, various government schemes provide financial assistance to eligible businesses across sectors.</p>
            <p className="mb-4 text-gray-700">Ewolyn specializes in connecting MSMEs and startups with suitable government grant schemes, navigating the complex application processes, and developing compelling proposals that align with scheme objectives. Our expertise improves your approval chances while ensuring compliance with all grant terms and conditions.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-green-700"><span>✔️</span> Non-repayable funding without equity dilution or interest obligations</li>
              <li className="flex items-center gap-2 text-green-700"><span>✔️</span> Sector-specific schemes with targeted support for priority industries</li>
              <li className="flex items-center gap-2 text-green-700"><span>✔️</span> Subsidies for capital expenditure, technology upgradation, and infrastructure</li>
              <li className="flex items-center gap-2 text-green-700"><span>✔️</span> Special focus on innovation, employment generation, and export promotion</li>
            </ul>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-pink-100 rounded-lg p-4 text-center font-semibold">🎯 Focused</div>
            <div className="bg-blue-100 rounded-lg p-4 text-center font-semibold">🛡️ Secure</div>
            <div className="bg-green-100 rounded-lg p-4 text-center font-semibold">⚡ Fast</div>
            <div className="bg-purple-100 rounded-lg p-4 text-center font-semibold">🏅 Trusted</div>
          </div>
        </div>

        {/* Benefits / Consultancy Services */}
        <div className="mb-10">
          <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">Benefits</span>
          <h2 className="text-2xl font-bold mb-6">Our Grants Consultancy Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">🔍</span><b>Scheme Identification</b><p className="text-sm mt-1">Research and identify relevant grant programs aligned with your business model, industry, location, and growth objectives</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">🧪</span><b>Eligibility Assessment</b><p className="text-sm mt-1">Conduct thorough evaluation of your business against scheme criteria to determine qualification and prepare compliance roadmap</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">🎯</span><b>Strategic Application Planning</b><p className="text-sm mt-1">Develop application strategies that highlight alignment between your business objectives and scheme priorities</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">📝</span><b>Proposal Development</b><p className="text-sm mt-1">Create compelling proposals including project plans, impact assessments, and implementation roadmaps tailored to scheme requirements</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">📄</span><b>Documentation Support</b><p className="text-sm mt-1">Prepare comprehensive documentation packages including business plans, financial projections, and supporting evidence</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">📤</span><b>Application Submission</b><p className="text-sm mt-1">Handle timely submission with proper formatting, organization, and adherence to all procedural requirements</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">🗣️</span><b>Interview & Presentation Support</b><p className="text-sm mt-1">Prepare for and participate in evaluation interviews, presentations, and clarification sessions with funding authorities</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">📊</span><b>Post-Approval Compliance</b><p className="text-sm mt-1">Ensure adherence to grant terms, reporting requirements, and utilization guidelines to prevent complications</p></div>
          </div>
        </div>

        {/* Major Grant Categories */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Major Grant Categories We Cover</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-900/90 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold text-red-300 mb-2">Who Can Apply?</h3>
              <ul className="space-y-2 text-base">
                <li>✔️ Startup India Seed Fund - Financial assistance for early-stage startups for proof of concept, prototype development, product trials</li>
                <li>✔️ MSME Technology Upgradation Schemes - Capital subsidies for modernization and technology enhancement of manufacturing units</li>
                <li>✔️ PMEGP (Prime Minister's Employment Generation Programme) - Subsidies for new manufacturing, services, or trading micro-enterprises</li>
                <li>✔️ Export Promotion Capital Goods (EPCG) - Duty exemptions for capital goods imports for export-oriented businesses</li>
                <li>✔️ Biotechnology Industry Research Assistance Council (BIRAC) Grants - Funding for biotech startups and innovation projects</li>
              </ul>
            </div>
            <div className="bg-indigo-900/90 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold text-blue-300 mb-2">Conditions</h3>
              <ul className="space-y-2 text-base">
                <li>🛡️ Design-Led Manufacturing Scheme - Support for domestic manufacturing of telecom and networking products</li>
                <li>🛡️ SIDBI Funds - Special focus on MSMEs in priority sectors including manufacturing and service enterprises</li>
                <li>🛡️ National Initiative for Developing and Harnessing Innovations (NIDHI) - Support for tech-based startups and innovation</li>
                <li>🛡️ Agriculture Processing and Rural Development Grants - Funding for food processing and agribusiness ventures</li>
                <li>🛡️ Textile Sector Schemes - Support for technical textiles, apparel manufacturing, and textile park development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-10">
          <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">Process</span>
          <h2 className="text-2xl font-bold mb-6">Our Grant Application Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">1</span><b>Initial Consultation</b><p className="text-sm mt-1 text-center">Understand your business model, objectives, and funding requirements through comprehensive discussion</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">2</span><b>Scheme Research</b><p className="text-sm mt-1 text-center">Identify all relevant government schemes and grants matching your business profile and requirements</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">3</span><b>Eligibility Analysis</b><p className="text-sm mt-1 text-center">Assess qualification potential for identified schemes and determine documentation needs</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">4</span><b>Application Strategy</b><p className="text-sm mt-1 text-center">Develop compelling narratives that align your business with scheme objectives and highlight potential impact</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">5</span><b>Documentation Preparation</b><p className="text-sm mt-1 text-center">Create comprehensive application packages with all required forms, business plans, and supporting documents</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">6</span><b>Submission & Follow-up</b><p className="text-sm mt-1 text-center">Submit applications with proper tracking and engage in strategic follow-up with authorities</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">7</span><b>Post-Approval Support</b><p className="text-sm mt-1 text-center">Guide implementation, reporting, and compliance to ensure successful grant utilization</p></div>
          </div>
        </div>

        {/* Documentation Requirements */}
        <div className="mb-10">
          <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">Documentation</span>
          <h2 className="text-2xl font-bold mb-6">Documentation Requirements</h2>
          <div className="bg-indigo-900/90 rounded-xl p-6 text-white">
            <h3 className="text-lg font-bold mb-4">Document Checklist</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-base">
                <li>📄 Business registration certificates (Incorporation Certificate, MSME Registration, etc.)</li>
                <li>📄 Financial statements for the past 2-3 years (as applicable)</li>
                <li>📄 Cost estimates and quotations for proposed expenditures</li>
                <li>📄 Industry-specific certifications and licenses</li>
                <li>📄 Bank statements and existing financing documentation</li>
              </ul>
              <ul className="space-y-2 text-base">
                <li>📄 PAN, GST registration, and other tax-related documents</li>
                <li>📄 Detailed project report with implementation plan and timelines</li>
                <li>📄 Land and building ownership/lease documents (where applicable)</li>
                <li>📄 Promoter profiles with identification and address proofs</li>
                <li>📄 Employment and skill development plans (for relevant schemes)</li>
              </ul>
            </div>
            <div className="mt-4 text-yellow-200 text-sm">Important: Documentation requirements vary significantly between grant schemes. Our team provides customized checklists specific to your target schemes after initial assessment.</div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-10">
          <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">FAQs</span>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">Which businesses qualify for government grants in India?</summary>
              <p className="mt-2 text-gray-700">Eligibility depends on the specific scheme, but typically includes startups, MSMEs, and businesses in priority sectors. Our team helps assess your fit for each program.</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">How long does the government grant application process take?</summary>
              <p className="mt-2 text-gray-700">Timelines vary by scheme, but can range from a few weeks to several months. We help you prepare and track your application for faster approval.</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">What costs are typically covered by government grants?</summary>
              <p className="mt-2 text-gray-700">Grants may cover capital expenditure, R&D, technology upgrades, export promotion, and more. We help you identify all eligible expenses.</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">What are the common reasons for grant application rejection?</summary>
              <p className="mt-2 text-gray-700">Common reasons include incomplete documentation, lack of alignment with scheme objectives, or missing eligibility criteria. Our experts help you avoid these pitfalls.</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">Are there any obligations after receiving a government grant?</summary>
              <p className="mt-2 text-gray-700">Yes, you must comply with reporting, utilization, and other requirements. We provide post-approval support to ensure compliance.</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">Can Ewolyn guarantee grant approval?</summary>
              <p className="mt-2 text-gray-700">No consultancy can guarantee approval, but our expertise maximizes your chances of success.</p>
            </details>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="rounded-xl shadow-lg bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 p-8 text-center text-white mb-10">
          <div className="mb-2">
            <span className="inline-block bg-gray-800 text-yellow-300 px-4 py-1 rounded-full text-xs font-semibold">Get Started Today</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">Ready to Access Government Funding?</h2>
          <p className="mb-6 text-lg">Connect with our grants specialists to identify available schemes, assess your eligibility, and develop compelling applications to secure non-repayable funding for your business growth.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="bg-gray-900/80 rounded-lg px-6 py-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">₹500Cr+</div>
              <div className="text-sm text-gray-300">Funded</div>
            </div>
            <div className="bg-gray-900/80 rounded-lg px-6 py-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">20K+</div>
              <div className="text-sm text-gray-300">Businesses</div>
            </div>
            <div className="bg-gray-900/80 rounded-lg px-6 py-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
          </div>
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
            <a href="#" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow transition">Start Application</a>
            <a href="tel:18005710607" className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-full shadow transition">Call: 1800 571 0607</a>
          </div>
        </div>
      </div>
    </main>
  );
}
