import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — Ewolyn",
  description:
    "Terms & Conditions governing the use of Ewolyn's website and professional services for MSMEs and startups in India.",
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    content: [
      {
        subtitle: "Agreement to Terms",
        body: "By accessing our website (ewolyn.co.in) or engaging our services, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree with any part of these terms, please refrain from using our services.",
      },
      {
        subtitle: "Capacity to Contract",
        body: "By using our services, you represent that you are at least 18 years of age and have the legal authority to enter into a binding agreement. If you are entering into these terms on behalf of a business entity, you represent that you have the authority to bind that entity.",
      },
    ],
  },
  {
    id: "services",
    title: "Services Description",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    content: [
      {
        subtitle: "Scope of Services",
        body: "Ewolyn provides professional consultancy services to Indian MSMEs and startups including but not limited to: business registration (Udyam, GST, Company/LLP), MSME certifications (ISO, FSSAI, BIS), government funding facilitation (MUDRA, PMEGP, CGTMSE, Stand-Up India, Startup India), project report (DPR) preparation, legal and compliance advisory, GeM registration, trademark filing, import-export documentation, merger & acquisition advisory, NBFC formation assistance, and business growth strategy.",
      },
      {
        subtitle: "Consultancy Nature",
        body: "Ewolyn is a business consultancy firm. Our services are advisory in nature. We assist, facilitate, and guide clients through government processes but do not constitute a law firm, CA firm, or SEBI-registered entity. For legal advice, tax filing, and regulated financial services, please engage appropriately licensed professionals.",
      },
      {
        subtitle: "Service Modifications",
        body: "Ewolyn reserves the right to modify, suspend, or discontinue any service at any time. We will provide reasonable notice for material changes. Continuation of the engagement after notice constitutes acceptance of the modifications.",
      },
    ],
  },
  {
    id: "fees-payment",
    title: "Fees & Payment",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: [
      {
        subtitle: "Service Fees",
        body: "Our service fees are communicated upfront before commencement of any paid engagement. Fees vary by service type, complexity, and the specific requirements of your business. An initial consultation and eligibility check are provided free of charge. Detailed Project Reports (DPRs), application processing, and ongoing retainer services are subject to separate fee agreements.",
      },
      {
        subtitle: "Government Fees & Third-Party Costs",
        body: "Our service fee is distinct from any government fees, statutory charges, filing fees, or third-party costs (such as ISO certification body fees, trademark filing fees, stamp duty, or notary charges). All such third-party and government fees are to be paid by the client directly or reimbursed to Ewolyn as per prior agreement.",
      },
      {
        subtitle: "Payment Terms",
        body: "Unless otherwise agreed in writing, fees are payable as follows: an advance portion upon confirmation of the engagement, and the balance upon delivery of agreed deliverables or completion of specified milestones. Payments can be made via bank transfer, UPI, or other modes specified in your service agreement.",
      },
      {
        subtitle: "GST & Taxes",
        body: "All fees quoted are exclusive of Goods and Services Tax (GST) unless explicitly stated. Applicable GST at the prevailing rate will be charged in addition to the service fee and reflected in tax invoices issued by Ewolyn.",
      },
      {
        subtitle: "Late Payment",
        body: "In the event of delayed payment, Ewolyn reserves the right to pause or suspend work on the engagement until dues are cleared. Outstanding amounts may attract simple interest at 18% per annum from the due date.",
      },
    ],
  },
  {
    id: "client-obligations",
    title: "Client Obligations",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    content: [
      {
        subtitle: "Accurate Information",
        body: "You agree to provide accurate, complete, and up-to-date information as required for the provision of services. Providing false or misleading information to Ewolyn, government portals, or financial institutions is a violation of these terms and may constitute a criminal offence under applicable Indian law.",
      },
      {
        subtitle: "Cooperation",
        body: "You agree to cooperate with Ewolyn in a timely manner, including responding to requests for documents, providing authorizations (such as power of attorney where required), attending bank meetings or government offices when requested, and completing tasks assigned to you within agreed timelines.",
      },
      {
        subtitle: "Document Authenticity",
        body: "You warrant that all documents provided to Ewolyn are genuine, authentic, and legally obtained. Ewolyn shall not be liable for any consequences arising from submission of fraudulent or incorrect documents provided by the client.",
      },
      {
        subtitle: "Legal Compliance",
        body: "You agree to comply with all applicable laws and regulations in connection with your business activities and the services engaged from Ewolyn. You agree not to use Ewolyn's services for any unlawful, fraudulent, or prohibited purpose.",
      },
    ],
  },
  {
    id: "no-guarantee",
    title: "No Guarantee of Outcomes",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: [
      {
        subtitle: "Government & Bank Approvals",
        body: "Ewolyn facilitates and supports the process of applying for government schemes, loans, subsidies, and certifications. However, the final decision to approve or reject any application rests solely with the relevant government authority, bank, or financial institution. Ewolyn does not guarantee approval of any application, loan sanction, or government scheme benefit.",
      },
      {
        subtitle: "Best Efforts Commitment",
        body: "Ewolyn commits to providing services with due diligence, professional care, and best efforts. Our high success rate (95%+ for eligible businesses) reflects our expertise and commitment, but does not constitute a contractual guarantee of any specific outcome.",
      },
      {
        subtitle: "Eligibility Assessment",
        body: "Our eligibility assessments are based on current government scheme guidelines, your provided information, and our professional experience. Changes in government policy, scheme guidelines, bank credit policies, or inaccuracies in client-provided information can affect eligibility and outcomes.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    content: [
      {
        subtitle: "Ownership",
        body: "All content on the Ewolyn website including text, graphics, logos, icons, images, blog articles, templates, guides, and software is the intellectual property of Ewolyn or its content licensors and is protected under Indian copyright law (Copyright Act, 1957) and other applicable intellectual property laws.",
      },
      {
        subtitle: "Deliverables",
        body: "Detailed Project Reports (DPRs), business plans, financial models, and other deliverables prepared by Ewolyn specifically for a client are owned by the client upon full payment of associated fees. However, the underlying frameworks, templates, and methodologies remain Ewolyn's intellectual property.",
      },
      {
        subtitle: "Restrictions",
        body: "You may not copy, reproduce, modify, republish, distribute, or create derivative works from any Ewolyn content without prior written permission. Unauthorized use of Ewolyn's intellectual property may result in civil and criminal liability.",
      },
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
      </svg>
    ),
    content: [
      {
        subtitle: "Maximum Liability",
        body: "In no event shall Ewolyn's total liability to you for any claim arising out of or related to these terms or our services exceed the total fees paid by you to Ewolyn in the three-month period preceding the event giving rise to the claim.",
      },
      {
        subtitle: "Exclusion of Consequential Damages",
        body: "Ewolyn shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, business opportunity, goodwill, or data, even if advised of the possibility of such damages.",
      },
      {
        subtitle: "Force Majeure",
        body: "Ewolyn shall not be liable for delays or failures in performance resulting from causes beyond our reasonable control, including government policy changes, acts of God, civil unrest, pandemic, system failures, bank freeze orders, or court injunctions.",
      },
      {
        subtitle: "Third-Party Actions",
        body: "Ewolyn is not responsible for the decisions, actions, or omissions of government authorities, banks, financial institutions, certification bodies, or any other third parties involved in the service delivery process.",
      },
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    content: [
      {
        subtitle: "Mutual Confidentiality",
        body: "Both parties agree to maintain the confidentiality of non-public information shared during the engagement. Ewolyn will not disclose your business plans, financial data, or proprietary information to any third party except where required for service delivery (with your knowledge) or by law.",
      },
      {
        subtitle: "Testimonials & Case Studies",
        body: "Ewolyn may reference your business as a success case in marketing materials only with your prior written consent. We will not disclose specific financial figures or sensitive business information without explicit permission.",
      },
    ],
  },
  {
    id: "termination",
    title: "Termination",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    content: [
      {
        subtitle: "By Client",
        body: "You may terminate a service engagement at any time by providing written notice to info@ewolyn.co.in. Fees for work completed up to the termination date will be payable. Please refer to our Refund Policy for details on any refundable amounts.",
      },
      {
        subtitle: "By Ewolyn",
        body: "Ewolyn reserves the right to terminate or suspend services if: you breach these Terms; you provide fraudulent or misleading information; you fail to make payments when due; or continued service would violate applicable law. In such cases, no refund will be issued for fees already paid.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law & Disputes",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    content: [
      {
        subtitle: "Jurisdiction",
        body: "These Terms & Conditions are governed by the laws of India. Any disputes arising from or in connection with these terms or our services shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India.",
      },
      {
        subtitle: "Dispute Resolution",
        body: "Before initiating legal proceedings, both parties agree to attempt in good faith to resolve any dispute through direct negotiation. If a dispute cannot be resolved within 30 days of written notice, either party may seek resolution through competent courts in Ahmedabad.",
      },
      {
        subtitle: "Consumer Protection",
        body: "Nothing in these terms limits your rights under the Consumer Protection Act, 2019, the Information Technology Act, 2000, or any other applicable mandatory consumer protection legislation in India.",
      },
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-20 hero-navy-gradient text-white overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-[-5%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="container-max relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-300">Terms &amp; Conditions</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/15 backdrop-blur-sm rounded-full text-sm font-bold mb-6 border border-primary/25">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span className="text-primary">Terms of Engagement</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Terms &amp; <span className="text-primary">Conditions</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              These terms govern your use of Ewolyn's website and professional services. Please read them carefully before engaging our services for your MSME or startup.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Last updated: March 2026
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Governed by Indian Law
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container-max">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Quick Navigation</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-primary/10 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors flex-shrink-0">
                  {s.icon}
                </div>
                <span className="text-sm text-slate-600 group-hover:text-primary transition-colors leading-snug">{s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-14">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            {/* Intro notice */}
            <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary rounded-r-2xl p-6 mb-10">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Important Notice
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                These Terms & Conditions ("Terms") constitute a legally binding agreement between <strong>Ewolyn</strong> ("Company", "we", "us"), operating from B-304/2 Gopal Palace, Near Shiromani Complex, Nehru Nagar, Ahmedabad – 380015, Gujarat, India and you ("Client", "User"). These Terms are effective as of your first use of our website or services.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              {[
                { label: "Service Type", value: "Professional Consultancy", icon: "💼" },
                { label: "Jurisdiction", value: "Ahmedabad, Gujarat, India", icon: "⚖️" },
                { label: "Language", value: "English (Governing)", icon: "📄" },
              ].map((item) => (
                <div key={item.label} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-slate-800">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Sections */}
            {sections.map((section, idx) => (
              <div key={section.id} id={section.id} className="mb-14 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {section.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{String(idx + 1).padStart(2, "0")}</span>
                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                </div>

                <div className="space-y-5 pl-[52px]">
                  {section.content.map((item) => (
                    <div key={item.subtitle}>
                      <h3 className="text-base font-semibold text-slate-800 mb-2">{item.subtitle}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Final note */}
            <div className="mt-10 bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Entire Agreement</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                These Terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement between you and Ewolyn with respect to our services. They supersede all prior discussions, representations, or agreements. If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container-max text-center relative z-10">
          <div className="w-14 h-14 mx-auto bg-primary/15 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-3">
            Have Questions About Our <span className="text-primary">Terms?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Our team is happy to explain any clause before you engage our services. Transparency is core to how we operate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-hero-green">Talk to Us →</Link>
            <Link href="/refund-policy" className="btn-hero-outline">Refund Policy</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
