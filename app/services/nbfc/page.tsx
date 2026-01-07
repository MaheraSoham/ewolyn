import SectionHeading from "@/components/SectionHeading";

export default function NBFCPage() {
  return (
    <main className="section bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen">
      <div className="container-max max-w-5xl py-10">
        {/* Hero Section */}
        <div className="rounded-xl shadow-lg bg-gradient-to-r from-blue-900 via-green-900 to-indigo-900 p-8 text-center text-white mb-10">
          <div className="mb-2">
            <span className="inline-block bg-gray-800 text-yellow-300 px-4 py-1 rounded-full text-xs font-semibold">Alternative Financing • Flexible Funding</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">NBFC Financing Solutions</h1>
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">Quick Disbursement • Flexible Eligibility • Specialized Products</h2>
          <p className="mb-6 text-lg">Access alternative business funding through Ewolyn's NBFC financing services, offering faster processing, flexible eligibility criteria, and specialized lending products tailored for businesses with unique requirements or limited banking history.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="bg-gray-900/80 rounded-lg px-6 py-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">24-72hrs</div>
              <div className="text-sm text-gray-300">Disbursement Time</div>
            </div>
            <div className="bg-gray-900/80 rounded-lg px-6 py-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">1Cr+</div>
              <div className="text-sm text-gray-300">Maximum Funding</div>
            </div>
            <div className="bg-gray-900/80 rounded-lg px-6 py-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-sm text-gray-300">Approval Rate</div>
            </div>
            <div className="bg-gray-900/80 rounded-lg px-6 py-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-sm text-gray-300">NBFC Partners</div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-white/90 rounded-xl shadow p-8 mb-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">Overview</span>
            <h2 className="text-2xl font-bold mb-2">Why Consider NBFC Financing?</h2>
            <p className="mb-4 text-gray-700">Non-Banking Financial Companies (NBFCs) offer essential alternatives to traditional bank financing, with unique advantages including faster processing, more flexible eligibility criteria, specialized sector-focused products, and innovative lending approaches for businesses with limited banking history or non-traditional requirements.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-green-700"><span>✔️</span> Accelerated processing and disbursement compared to traditional banking</li>
              <li className="flex items-center gap-2 text-green-700"><span>✔️</span> Flexible eligibility criteria with focus on business potential over historical metrics</li>
              <li className="flex items-center gap-2 text-green-700"><span>✔️</span> Specialized financing solutions for specific industries and business models</li>
              <li className="flex items-center gap-2 text-green-700"><span>✔️</span> Options for businesses with limited banking history or previous credit challenges</li>
            </ul>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-green-100 rounded-lg p-4 text-center font-semibold">🔒 Secure</div>
            <div className="bg-blue-100 rounded-lg p-4 text-center font-semibold">⚡ Fast</div>
            <div className="bg-yellow-100 rounded-lg p-4 text-center font-semibold">💡 Flexible</div>
            <div className="bg-purple-100 rounded-lg p-4 text-center font-semibold">🏅 Trusted</div>
          </div>
        </div>

        {/* NBFC Services */}
        <div className="mb-10">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">Services</span>
          <h2 className="text-2xl font-bold mb-6">Our NBFC Financing Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">💸</span><b>Express Business Loans</b><p className="text-sm mt-1">Quick-disbursement loans with minimal documentation and 24-48 hour processing for urgent business requirements</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">💰</span><b>Working Capital Financing</b><p className="text-sm mt-1">Flexible short-term funding for operational expenses, inventory management, and cash flow optimization</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">🌱</span><b>Business Expansion Loans</b><p className="text-sm mt-1">Growth-focused financing for market expansion, capacity enhancement, and business scaling initiatives</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">🔓</span><b>Unsecured Business Loans</b><p className="text-sm mt-1">No-collateral financing options based on business performance and revenue potential rather than assets</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">📈</span><b>Revenue-Based Financing</b><p className="text-sm mt-1">Innovative funding with repayments tied to business revenue performance rather than fixed EMI structures</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">💳</span><b>Merchant Cash Advances</b><p className="text-sm mt-1">Upfront capital with repayment through percentage of daily card sales, ideal for retail and service businesses</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">🛠️</span><b>Equipment Financing</b><p className="text-sm mt-1">Specialized funding for machinery, equipment, and technology purchases with flexible repayment structures</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">🔗</span><b>Supply Chain Financing</b><p className="text-sm mt-1">Optimize cash flow through invoice discounting, purchase order financing, and vendor payment solutions</p></div>
          </div>
        </div>

        {/* NBFC Eligibility */}
        <div className="mb-10">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">Eligibility</span>
          <h2 className="text-2xl font-bold mb-6">NBFC Financing Eligibility</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-900/90 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Who Can Apply?</h3>
              <ul className="space-y-2 text-base">
                <li>✔️ Business operational history of at least 6-12 months (varies by product)</li>
                <li>✔️ Consistent monthly revenue with clear cash flow patterns</li>
                <li>✔️ Basic financial record keeping and business documentation</li>
                <li>✔️ Clear business model with demonstrated market potential</li>
                <li>✔️ Minimum credit score requirements (typically more flexible than banks)</li>
              </ul>
            </div>
            <div className="bg-blue-900/90 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Conditions</h3>
              <ul className="space-y-2 text-base">
                <li>🛡️ Valid business registration (any structure from Proprietorship to Private Limited)</li>
                <li>🛡️ Active business bank account with transaction history</li>
                <li>🛡️ KYC documentation for directors/partners/proprietors</li>
                <li>🛡️ Basic financial statements (balance sheets, P&L statements)</li>
                <li>🛡️ Industry-specific requirements based on NBFC specialization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* NBFC Process */}
        <div className="mb-10">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">Process</span>
          <h2 className="text-2xl font-bold mb-6">Our NBFC Financing Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">1</span><b>Requirement Analysis</b><p className="text-sm mt-1 text-center">Understand your funding needs, business model, and financial profile to identify suitable NBFC options</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">2</span><b>NBFC Matching</b><p className="text-sm mt-1 text-center">Select optimal NBFC partners based on your business sector, funding requirements, and eligibility factors</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">3</span><b>Application Preparation</b><p className="text-sm mt-1 text-center">Develop comprehensive application packages highlighting business strengths and addressing potential concerns</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">4</span><b>Fast-Track Submission</b><p className="text-sm mt-1 text-center">Submit applications through priority channels established with our NBFC partners for accelerated processing</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">5</span><b>Approval Facilitation</b><p className="text-sm mt-1 text-center">Coordinate with NBFC underwriters to address queries and expedite the approval decision process</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">6</span><b>Term Negotiation</b><p className="text-sm mt-1 text-center">Secure optimal interest rates, processing fees, and repayment terms through strategic negotiation</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">7</span><b>Rapid Disbursement</b><p className="text-sm mt-1 text-center">Complete documentation and procedural requirements to ensure quick fund release after approval</p></div>
          </div>
        </div>

        {/* Documentation Requirements */}
        <div className="mb-10">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">Documentation</span>
          <h2 className="text-2xl font-bold mb-6">Documentation Requirements</h2>
          <div className="bg-blue-900/90 rounded-xl p-6 text-white">
            <h3 className="text-lg font-bold mb-4">Document Checklist</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-base">
                <li>📄 Business registration proof (Incorporation Certificate, Partnership Deed, etc.)</li>
                <li>📄 Recent business bank statements (typically last 6-12 months)</li>
                <li>📄 Income Tax Returns for business and promoters (last 1-2 years)</li>
                <li>📄 Basic financial statements (Balance Sheet, P&L statements)</li>
                <li>📄 Proof of business premises (ownership/rental agreement)</li>
              </ul>
              <ul className="space-y-2 text-base">
                <li>📄 KYC documents of directors/partners/proprietors (PAN, Aadhar, etc.)</li>
                <li>📄 GST returns (where applicable) for the last 6-12 months</li>
                <li>📄 Business profile and brief business plan</li>
                <li>📄 Existing loan statements (if any)</li>
                <li>📄 Industry-specific licenses and permits</li>
              </ul>
            </div>
            <div className="mt-4 text-yellow-200 text-sm">Important: NBFC documentation requirements are typically more streamlined than traditional banks. The exact requirements vary based on loan product, amount, and specific NBFC policies. Our team provides customized checklists based on your selected financing option.</div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-10">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">FAQs</span>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">How do NBFC loans differ from traditional bank loans?</summary>
              <p className="mt-2 text-gray-700">NBFCs offer faster processing, more flexible eligibility, and specialized products for businesses with unique needs or limited banking history.</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">What interest rates can I expect with NBFC financing?</summary>
              <p className="mt-2 text-gray-700">Rates depend on your business profile, product, and NBFC partner. We help you secure the best terms.</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">How quickly can I receive funds through NBFC financing?</summary>
              <p className="mt-2 text-gray-700">Disbursement can be as fast as 24-72 hours for some products. We help expedite your application.</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">Are there any disadvantages to choosing NBFC financing?</summary>
              <p className="mt-2 text-gray-700">NBFCs may have higher interest rates or fees for some products, but offer greater flexibility and speed. We help you weigh all options.</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">Can businesses with poor credit history qualify for NBFC financing?</summary>
              <p className="mt-2 text-gray-700">Yes, NBFCs are often more flexible than banks. We help you find the right product and partner.</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">What types of businesses benefit most from NBFC financing?</summary>
              <p className="mt-2 text-gray-700">Businesses with urgent funding needs, limited banking history, or unique requirements often benefit most from NBFC solutions.</p>
            </details>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="rounded-xl shadow-lg bg-gradient-to-r from-blue-900 via-green-900 to-indigo-900 p-8 text-center text-white mb-10">
          <div className="mb-2">
            <span className="inline-block bg-gray-800 text-yellow-300 px-4 py-1 rounded-full text-xs font-semibold">Get Started Today</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">Ready for Fast, Flexible Financing?</h2>
          <p className="mb-6 text-lg">Connect with our NBFC financing specialists to identify optimal funding options, streamline your application, and secure quick disbursement for your business needs.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="bg-gray-900/80 rounded-lg px-6 py-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">1Cr+</div>
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
            <a href="#" className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full shadow transition">Start Application</a>
            <a href="tel:18005710607" className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-full shadow transition">Call: 1800 571 0607</a>
          </div>
        </div>
      </div>
    </main>
  );
}
