import SectionHeading from "@/components/SectionHeading";

export default function LoansPage() {
  return (
    <main className="section bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen">
      <div className="container-max max-w-5xl py-10">
        {/* Hero Section */}
        <div className="rounded-xl shadow-lg bg-gradient-to-r from-blue-900 via-green-900 to-indigo-900 p-8 text-center text-white mb-10">
          <div className="mb-2">
            <span className="inline-block bg-gray-800 text-yellow-300 px-4 py-1 rounded-full text-xs font-semibold">Business Finance • Debt Capital</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Business Loan Services</h1>
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">Term Loans • Working Capital • MSME Schemes • Collateral-Free Options</h2>
          <p className="mb-6 text-lg">Access optimal business financing with Ewolyn's specialized loan advisory services covering bank loans, NBFC financing, government schemes, and specialized credit products with end-to-end support from application to disbursement.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="bg-gray-900/80 rounded-lg px-6 py-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">₹500Cr+</div>
              <div className="text-sm text-gray-300">Loan Value Facilitated</div>
            </div>
            <div className="bg-gray-900/80 rounded-lg px-6 py-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">92%</div>
              <div className="text-sm text-gray-300">Approval Rate</div>
            </div>
            <div className="bg-gray-900/80 rounded-lg px-6 py-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">48hrs</div>
              <div className="text-sm text-gray-300">Quick Processing</div>
            </div>
            <div className="bg-gray-900/80 rounded-lg px-6 py-4 min-w-[120px]">
              <div className="text-2xl font-bold text-white">20+</div>
              <div className="text-sm text-gray-300">Lending Partners</div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-white/90 rounded-xl shadow p-8 mb-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">Overview</span>
            <h2 className="text-2xl font-bold mb-2">Business Loan Solutions for Every Need</h2>
            <p className="mb-4 text-gray-700">Business loans provide essential capital for growth initiatives, operational requirements, and strategic investments. From short-term working capital to long-term expansion financing, the right debt capital at the right time accelerates business development while preserving ownership and control.</p>
            <p className="mb-4 text-gray-700">Ewolyn specializes in connecting businesses with optimal financing solutions based on their specific needs, financial profile, and growth stage. Our expertise spans traditional banking, NBFC partnerships, government schemes, and specialized financing options, ensuring you receive the most favorable terms and efficient processing.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-green-700"><span>✔️</span> Personalized loan recommendations based on business requirements and eligibility</li>
              <li className="flex items-center gap-2 text-green-700"><span>✔️</span> Access to preferential rates and specialized schemes through our lending networks</li>
              <li className="flex items-center gap-2 text-green-700"><span>✔️</span> Comprehensive documentation support to streamline application processes</li>
              <li className="flex items-center gap-2 text-green-700"><span>✔️</span> Expert negotiation and structuring for optimal terms and conditions</li>
            </ul>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-green-100 rounded-lg p-4 text-center font-semibold">🔒 Secure</div>
            <div className="bg-blue-100 rounded-lg p-4 text-center font-semibold">⚡ Fast</div>
            <div className="bg-yellow-100 rounded-lg p-4 text-center font-semibold">💡 Flexible</div>
            <div className="bg-purple-100 rounded-lg p-4 text-center font-semibold">🏅 Trusted</div>
          </div>
        </div>

        {/* Loan Services */}
        <div className="mb-10">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">Services</span>
          <h2 className="text-2xl font-bold mb-6">Our Business Loan Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">📈</span><b>Term Loans</b><p className="text-sm mt-1">Long-term financing for business expansion, asset acquisition, and strategic investments with structured repayment schedules</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">💸</span><b>Working Capital Loans</b><p className="text-sm mt-1">Short-term financing for operational expenses, inventory management, and cash flow optimization</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">🏆</span><b>MSME Priority Lending</b><p className="text-sm mt-1">Special financing options under priority sector lending for micro, small, and medium enterprises</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">🔓</span><b>Collateral-Free Financing</b><p className="text-sm mt-1">CGTMSE-backed and unsecured loan options for businesses without sufficient collateral assets</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">📊</span><b>Project Financing</b><p className="text-sm mt-1">Specialized funding for specific projects with customized disbursement and repayment structures</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">🏛️</span><b>Government Scheme Loans</b><p className="text-sm mt-1">Access to PMMY (Mudra), Stand-Up India, CLCSS, and other government-sponsored financing programs</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">🚀</span><b>Startup Financing</b><p className="text-sm mt-1">Specialized lending options for startups through venture debt and innovative financing structures</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start"><span className="text-2xl mb-2">🌱</span><b>Business Expansion Loans</b><p className="text-sm mt-1">Tailored financing solutions for market expansion, capacity enhancement, and growth initiatives</p></div>
          </div>
        </div>

        {/* Eligibility Factors */}
        <div className="mb-10">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">Eligibility</span>
          <h2 className="text-2xl font-bold mb-6">Business Loan Eligibility Factors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-900/90 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Who Can Apply?</h3>
              <ul className="space-y-2 text-base">
                <li>✔️ Business vintage of at least 1-3 years</li>
                <li>✔️ Minimum annual turnover requirements based on loan amount and purpose</li>
                <li>✔️ Stable financial performance with positive growth trends</li>
                <li>✔️ Good credit history with minimal defaults and timely repayments</li>
                <li>✔️ Adequate debt service coverage ratio (DSCR) to support new loan obligations</li>
              </ul>
            </div>
            <div className="bg-blue-900/90 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Conditions</h3>
              <ul className="space-y-2 text-base">
                <li>🛡️ Complete KYC documentation for business and promoters</li>
                <li>🛡️ Proper business registration (Private Limited, LLP, Proprietorship, etc.)</li>
                <li>🛡️ GST registration and compliance (for applicable businesses)</li>
                <li>🛡️ ITR filings for both business and promoters for previous years</li>
                <li>🛡️ Collateral requirements based on loan type and lender policies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Loan Facilitation Process */}
        <div className="mb-10">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">Process</span>
          <h2 className="text-2xl font-bold mb-6">Our Loan Facilitation Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">1</span><b>Requirement Analysis</b><p className="text-sm mt-1 text-center">Understand your financing needs, purpose, timeline, and repayment capacity through detailed discussion</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">2</span><b>Eligibility Assessment</b><p className="text-sm mt-1 text-center">Evaluate your business profile against various loan options and lender criteria to identify optimal matches</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">3</span><b>Loan Structuring</b><p className="text-sm mt-1 text-center">Design appropriate loan parameters including amount, tenure, repayment structure, and security arrangements</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">4</span><b>Documentation Support</b><p className="text-sm mt-1 text-center">Prepare comprehensive application packages with all required financial statements and business documentation</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">5</span><b>Lender Submission</b><p className="text-sm mt-1 text-center">Present your case to selected lenders with proper positioning and follow-up to expedite processing</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">6</span><b>Term Negotiation</b><p className="text-sm mt-1 text-center">Secure favorable interest rates, processing fees, and other terms through expert negotiation</p></div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center"><span className="text-2xl mb-2">7</span><b>Disbursement Facilitation</b><p className="text-sm mt-1 text-center">Coordinate completion of pre-disbursement formalities and ensure timely fund release</p></div>
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
                <li>📄 Business registration documents (Incorporation Certificate, Partnership Deed, etc.)</li>
                <li>📄 GST registration certificate and returns (last 6-12 months)</li>
                <li>📄 Audited financial statements (Balance Sheet, P&L for last 2-3 years)</li>
                <li>📄 Proof of business premises (ownership/lease documentation)</li>
                <li>📄 Collateral documents (property papers, valuation reports if applicable)</li>
              </ul>
              <ul className="space-y-2 text-base">
                <li>📄 KYC documents of directors/partners/proprietors (PAN, Aadhar, etc.)</li>
                <li>📄 Income Tax Returns for business (last 2-3 years)</li>
                <li>📄 Bank statements (last 6-12 months)</li>
                <li>📄 Business profile and project report (for project/expansion financing)</li>
                <li>📄 Existing loan statements and repayment track record (if any)</li>
              </ul>
            </div>
            <div className="mt-4 text-yellow-200 text-sm">Important: Documentation requirements vary based on loan type, amount, lender policies, and your business structure. Our team provides customized checklists based on your specific loan requirements.</div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-10">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">FAQs</span>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">What types of business loans are available for MSMEs in India?</summary>
              <p className="mt-2 text-gray-700">Options include term loans, working capital loans, MSME priority lending, collateral-free loans, project financing, and government scheme loans.</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">How long does the business loan approval process take?</summary>
              <p className="mt-2 text-gray-700">Approval timelines vary, but can be as quick as 48 hours for some products. We help expedite your application.</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">What interest rates can I expect for business loans?</summary>
              <p className="mt-2 text-gray-700">Rates depend on your business profile, loan type, and lender. We help you secure the most favorable terms.</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">What collateral is required for business loans?</summary>
              <p className="mt-2 text-gray-700">Collateral requirements vary. We offer options for both secured and unsecured loans.</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">How can I improve my business loan eligibility?</summary>
              <p className="mt-2 text-gray-700">Maintain good financial records, positive credit history, and stable business performance. Our team can advise on eligibility improvement.</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">Can startups and new businesses get loans without significant operating history?</summary>
              <p className="mt-2 text-gray-700">Yes, there are options for startups, including venture debt and government-backed schemes. We help you explore all possibilities.</p>
            </details>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="rounded-xl shadow-lg bg-gradient-to-r from-blue-900 via-green-900 to-indigo-900 p-8 text-center text-white mb-10">
          <div className="mb-2">
            <span className="inline-block bg-gray-800 text-yellow-300 px-4 py-1 rounded-full text-xs font-semibold">Get Started Today</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">Ready to Secure Business Financing?</h2>
          <p className="mb-6 text-lg">Connect with our loan specialists to identify optimal financing options, assess your eligibility, and navigate the application process for successful funding.</p>
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
            <a href="#" className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full shadow transition">Start Application</a>
            <a href="tel:18005710607" className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-full shadow transition">Call: 1800 571 0607</a>
          </div>
        </div>
      </div>
    </main>
  );
}
