import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Ewolyn",
  description:
    "Ewolyn's Privacy Policy — how we collect, use, and protect your personal data in compliance with Indian IT laws.",
};

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    content: [
      {
        subtitle: "Personal Information",
        body: "When you contact us, register for a consultation, or use our services, we may collect: your full name, business name, mobile/phone number, email address, Aadhaar number (where required for government scheme applications), PAN number, GST number, business registration details, address, and financial information necessary to process funding applications on your behalf.",
      },
      {
        subtitle: "Automatically Collected Information",
        body: "When you visit our website, we automatically collect certain technical data including your IP address, browser type, operating system, referring URLs, pages visited, time spent on pages, and device identifiers. This information is collected via cookies and similar tracking technologies to improve our website performance and user experience.",
      },
      {
        subtitle: "Communication Records",
        body: "We retain records of communications between you and Ewolyn, including emails, WhatsApp messages (where applicable), consultation notes, and any documents you share with us in connection with government scheme applications, funding assistance, or business advisory services.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    content: [
      {
        subtitle: "Service Delivery",
        body: "To provide our consultancy, funding assistance, registration, certification, and business advisory services. This includes preparing Detailed Project Reports (DPRs), submitting applications to government portals, facilitating bank introductions, and coordinating with regulatory authorities on your behalf.",
      },
      {
        subtitle: "Communication & Support",
        body: "To send you service updates, appointment confirmations, document requests, consultation reminders, and status updates on your government scheme applications. We may contact you via phone, email, or WhatsApp for these purposes.",
      },
      {
        subtitle: "Legal & Regulatory Compliance",
        body: "To comply with applicable Indian laws including the Income Tax Act, 1961, the Information Technology Act, 2000, the Companies Act, 2013, MSMED Act, 2006, SEBI regulations, and any other applicable regulations. We may be required to disclose your information to government authorities or courts as mandated by law.",
      },
      {
        subtitle: "Marketing & Updates",
        body: "With your explicit consent, to send you newsletters, scheme updates, government policy changes, and information about new services relevant to your business. You may opt out of marketing communications at any time by writing to info@ewolyn.co.in.",
      },
    ],
  },
  {
    id: "data-sharing",
    title: "Data Sharing & Disclosure",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    content: [
      {
        subtitle: "Government Portals & Banks",
        body: "As part of providing our services, we submit your information to relevant government portals (Udyam Registration, PMEGP, NSIC, GeM, DPIIT Startup India, etc.) and financial institutions (banks, NBFCs) strictly as required to process your applications. This is done only with your knowledge and consent.",
      },
      {
        subtitle: "Authorised Third-Party Partners",
        body: "We may share your data with trusted service partners such as chartered accountants, legal consultants, ISO certification bodies, and technology platforms that assist us in delivering services. All such partners are bound by confidentiality agreements and may not use your data for any other purpose.",
      },
      {
        subtitle: "No Sale of Personal Data",
        body: "Ewolyn does not sell, rent, or trade your personal information to any third party for marketing or commercial purposes. Your data is used exclusively for the purposes described in this policy.",
      },
      {
        subtitle: "Legal Obligation",
        body: "We may disclose your information if required to do so by law, court order, or government authority, or to protect the rights, property, or safety of Ewolyn, our clients, or others.",
      },
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    content: [
      {
        subtitle: "Technical Safeguards",
        body: "We implement industry-standard security measures including SSL/TLS encryption for data in transit, secure cloud storage, access controls, and password-protected systems to protect your personal and financial information from unauthorized access, misuse, or disclosure.",
      },
      {
        subtitle: "Organisational Measures",
        body: "Access to client data is restricted to Ewolyn team members who need it to perform their duties. All team members are bound by confidentiality obligations. We conduct periodic reviews of our data handling practices to ensure compliance with this policy.",
      },
      {
        subtitle: "No Absolute Guarantee",
        body: "While we take every reasonable precaution, no digital transmission or storage system can be guaranteed to be 100% secure. If you suspect any unauthorized use of your account or information, please contact us immediately at info@ewolyn.co.in.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: [
      {
        subtitle: "Retention Period",
        body: "We retain your personal information for as long as necessary to provide services to you and for as long as required by applicable Indian laws. Financial records and documents related to government scheme applications are typically retained for 7 years as required under Indian accounting and tax regulations.",
      },
      {
        subtitle: "Deletion Requests",
        body: "You may request deletion of your personal data by writing to info@ewolyn.co.in. We will process your request within 30 days, subject to our legal obligations to retain certain records. Note that deletion of data may require termination of any ongoing service engagement.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    content: [
      {
        subtitle: "What We Use",
        body: "Our website uses essential cookies for functionality, analytics cookies (e.g., Google Analytics) to understand how visitors use our site, and preference cookies to remember your settings. We do not use advertising or profiling cookies.",
      },
      {
        subtitle: "Your Choices",
        body: "You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of our website. By continuing to use our website, you consent to our use of cookies as described in this policy.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    content: [
      {
        subtitle: "Access & Correction",
        body: "You have the right to access, correct, or update the personal information we hold about you. To exercise this right, write to us at info@ewolyn.co.in with your request. We will respond within 15 working days.",
      },
      {
        subtitle: "Withdrawal of Consent",
        body: "Where we process your data based on your consent (e.g., marketing emails), you have the right to withdraw that consent at any time. Note that withdrawal does not affect the legality of processing done before withdrawal.",
      },
      {
        subtitle: "Grievance Redressal",
        body: "In accordance with the Information Technology Act, 2000, and the rules made thereunder, you may contact our Grievance Officer: Name: Legal & Compliance Team, Ewolyn | Email: info@ewolyn.co.in | Address: B-304/2 Gopal Palace, Near Shiromani Complex, Nehru Nagar, Ahmedabad – 380015.",
      },
    ],
  },
  {
    id: "policy-changes",
    title: "Changes to This Policy",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    content: [
      {
        subtitle: "Updates",
        body: "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. The updated policy will be posted on this page with a revised effective date. We encourage you to review this policy periodically. Continued use of our services after any change constitutes your acceptance of the updated policy.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
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
            <span className="text-gray-300">Privacy Policy</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/15 backdrop-blur-sm rounded-full text-sm font-bold mb-6 border border-primary/25">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-primary">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              This policy explains how Ewolyn collects, uses, and protects your personal information. We are committed to safeguarding your data in full compliance with the Information Technology Act, 2000 and other applicable Indian laws.
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
                Applicable in India
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
            {sections.map((s, i) => (
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

      {/* INTRO */}
      <section className="py-14">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary rounded-r-2xl p-6 mb-10">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Overview
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                This Privacy Policy ("Policy") applies to <strong>Ewolyn</strong> ("Company", "we", "us", "our"), a business consultancy operating from B-304/2 Gopal Palace, Near Shiromani Complex, Nehru Nagar, Ahmedabad – 380015, Gujarat, India. This Policy governs the collection, use, storage, and disclosure of information of all users ("you", "your", "client") who access our website at <strong>ewolyn.co.in</strong> or engage with our services. By using our website or services, you consent to the practices described in this Policy.
              </p>
            </div>

            {/* Sections */}
            {sections.map((section, idx) => (
              <div key={section.id} id={section.id} className="mb-14 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {section.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{String(idx + 1).padStart(2, "0")}</span>
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
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 hero-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container-max text-center relative z-10">
          <div className="w-14 h-14 mx-auto bg-primary/15 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-3">
            Questions About Your <span className="text-primary">Privacy?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Write to us at <a href="mailto:info@ewolyn.co.in" className="text-primary hover:underline">info@ewolyn.co.in</a> or call us at <a href="tel:+919876543210" className="text-primary hover:underline">+91 98765 43210</a>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-hero-green">Contact Us →</Link>
            <Link href="/terms-conditions" className="btn-hero-outline">Terms &amp; Conditions</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
