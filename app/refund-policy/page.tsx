import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy — Ewolyn",
  description:
    "Ewolyn's Refund & Cancellation Policy for MSME and startup consultancy services. Understand when refunds apply and how to request them.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-20 hero-navy-gradient text-white overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-accent-green/10 rounded-full blur-[120px]" />
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
          <nav className="flex items-center gap-2 text-sm text-gray-300 mb-8">
            <Link href="/" className="hover:text-accent-green transition-colors flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-300">Refund Policy</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-green/15 backdrop-blur-sm rounded-full text-sm font-bold mb-6 border border-accent-green/25">
              <svg className="w-4 h-4 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              <span className="text-accent-green">Refund &amp; Cancellation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Refund <span className="text-accent-green">Policy</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              We are committed to delivering quality consultancy services. This policy outlines the circumstances under which refunds may apply, and our cancellation procedures.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Last updated: March 2026
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
                Refunds processed in 7–10 business days
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY STATS */}
      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: "7–10 Days", label: "Refund Processing Time", icon: "⏱️" },
              { value: "Bank Transfer", label: "Refund Mode", icon: "🏦" },
              { value: "Written Request", label: "Cancellation Method", icon: "📧" },
              { value: "info@ewolyn.co.in", label: "Refund Contact", icon: "✉️" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-5 border border-slate-200 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-base font-bold text-accent-green">{item.value}</p>
                <p className="text-xs text-slate-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-14">
        <div className="container-max">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Section 1 */}
            <div id="nature" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-accent-green uppercase tracking-widest">01</span>
                  <h2 className="text-2xl font-bold text-slate-900">Nature of Our Services</h2>
                </div>
              </div>
              <div className="pl-[52px] space-y-4">
                <p className="text-slate-600 leading-relaxed text-sm">
                  Ewolyn provides professional business consultancy services — including government scheme facilitation, business registration, project report preparation, certification assistance, and strategic advisory. These services are primarily intellectual, time-based, and knowledge-driven in nature.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Unlike physical goods, professional services involve significant upfront investment of time, expertise, and resources by our team upon engagement. Accordingly, our refund policy is structured to be fair to both parties while reflecting the nature of knowledge-based service delivery.
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <p className="text-blue-800 text-sm font-semibold mb-1">Important Clarification</p>
                  <p className="text-blue-700 text-sm">Our service fee is separate from any government fees, certification body charges, stamp duties, filing fees, or other third-party costs. The refund policy below applies only to Ewolyn's service fee component.</p>
                </div>
              </div>
            </div>

            {/* Section 2 — Refund eligibility */}
            <div id="when-refunds-apply" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-accent-green uppercase tracking-widest">02</span>
                  <h2 className="text-2xl font-bold text-slate-900">When Refunds Apply</h2>
                </div>
              </div>
              <div className="pl-[52px]">
                <p className="text-slate-600 text-sm mb-5">You may be eligible for a full or partial refund in the following circumstances:</p>
                <div className="space-y-3">
                  {[
                    {
                      title: "Service Not Commenced",
                      description: "If you cancel your engagement before our team has commenced any work (i.e., no documents reviewed, no applications initiated, no reports drafted), a full refund of Ewolyn's service fee will be processed within 7–10 business days.",
                    },
                    {
                      title: "Duplicate / Erroneous Payment",
                      description: "If you have made a payment in error (duplicate payment, wrong amount, incorrect service), the excess amount will be fully refunded upon verification by our finance team, typically within 5–7 business days.",
                    },
                    {
                      title: "Service Cancellation by Ewolyn",
                      description: "If Ewolyn is unable to deliver the agreed service due to reasons solely attributable to us (and not due to client-side issues, incorrect information, or government/bank decisions), a proportionate refund of the undelivered portion of work will be processed.",
                    },
                    {
                      title: "Early Cancellation with Partial Work",
                      description: "If you cancel after work has commenced but before completion, refund eligibility will be assessed based on the percentage of work completed. The value of completed work will be retained by Ewolyn, and the balance (if any) will be refunded. This assessment will be communicated in writing within 7 business days of your cancellation request.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-4 bg-green-50 border border-green-100 rounded-xl">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800 mb-1">{item.title}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3 — Non-refundable */}
            <div id="non-refundable" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-accent-green uppercase tracking-widest">03</span>
                  <h2 className="text-2xl font-bold text-slate-900">Non-Refundable Cases</h2>
                </div>
              </div>
              <div className="pl-[52px]">
                <p className="text-slate-600 text-sm mb-5">Refunds will <strong>not</strong> be applicable in the following situations:</p>
                <div className="space-y-3">
                  {[
                    "Government fees, statutory dues, filing charges, stamp duty, or any payment made to government portals on your behalf — these are non-recoverable and outside Ewolyn's control.",
                    "Third-party certification body fees (e.g., ISO, BIS, FSSAI certification costs) paid to accredited bodies.",
                    "Applications rejected by banks, NBFCs, or financial institutions due to client credit history, CIBIL score, or other factors beyond Ewolyn's control.",
                    "Applications rejected by government authorities due to policy ineligibility, incomplete client-provided information, or change in scheme guidelines.",
                    "Services that have been fully delivered and accepted by the client.",
                    "Situations where the client has provided inaccurate, incomplete, or fraudulent information that led to application rejection or service failure.",
                    "Refund requests made more than 30 days after the issue or event giving rise to the claim.",
                    "Change of mind after the service has been completed or substantially progressed.",
                    "Dissatisfaction arising solely from government or bank decisions that are outside the scope of Ewolyn's direct control.",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 p-3 bg-red-50 border border-red-100 rounded-xl">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                          <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 4 — Cancellation */}
            <div id="cancellation" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-accent-green uppercase tracking-widest">04</span>
                  <h2 className="text-2xl font-bold text-slate-900">Cancellation Policy</h2>
                </div>
              </div>
              <div className="pl-[52px] space-y-4">
                <h3 className="text-base font-semibold text-slate-800">How to Cancel</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To cancel an engagement, you must send a written cancellation request to{" "}
                  <a href="mailto:info@ewolyn.co.in" className="text-accent-green font-medium hover:underline">info@ewolyn.co.in</a>{" "}
                  with the subject line <strong>"Cancellation Request — [Your Business Name]"</strong>. Please include your contact number, the service you wish to cancel, and the reason for cancellation.
                </p>

                <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="text-left px-4 py-3 font-semibold text-slate-700">Cancellation Timing</th>
                        <th className="text-left px-4 py-3 font-semibold text-slate-700">Refund Entitlement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {[
                        ["Before work commencement", "100% of Ewolyn service fee"],
                        ["Within 24 hours of payment (if no work done)", "100% of Ewolyn service fee"],
                        ["After 10–50% work completion", "Balance of incomplete work portion"],
                        ["After 50–80% work completion", "At Ewolyn's discretion (case-by-case)"],
                        ["After 80%+ work completion or full delivery", "No refund applicable"],
                        ["Government / third-party fees (any stage)", "Non-refundable in all cases"],
                      ].map(([timing, refund], i) => (
                        <tr key={i} className="hover:bg-slate-50">
                          <td className="px-4 py-3 text-slate-600">{timing}</td>
                          <td className={`px-4 py-3 font-medium ${refund.startsWith("100") ? "text-green-600" : refund.startsWith("No") ? "text-red-500" : "text-amber-600"}`}>{refund}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section 5 — Refund Process */}
            <div id="refund-process" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-accent-green uppercase tracking-widest">05</span>
                  <h2 className="text-2xl font-bold text-slate-900">Refund Process</h2>
                </div>
              </div>
              <div className="pl-[52px]">
                <div className="space-y-4">
                  {[
                    {
                      step: "01",
                      title: "Submit Request",
                      desc: "Email info@ewolyn.co.in with your refund request, client details, and the reason for the request. Attach proof of payment.",
                    },
                    {
                      step: "02",
                      title: "Acknowledgement",
                      desc: "We will acknowledge your request within 2 business days and begin reviewing the status of your engagement.",
                    },
                    {
                      step: "03",
                      title: "Review & Decision",
                      desc: "Our team will assess refund eligibility within 5 business days based on work completed and the applicable policy. We will communicate our decision in writing.",
                    },
                    {
                      step: "04",
                      title: "Refund Processing",
                      desc: "Approved refunds are processed via the original payment method or direct bank transfer within 7–10 business days from the date of approval.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-accent-green/10 border-2 border-accent-green/20 flex items-center justify-center text-xs font-bold text-accent-green">
                        {item.step}
                      </div>
                      <div className="pb-4 border-b border-slate-100 flex-1">
                        <p className="text-sm font-semibold text-slate-800 mb-1">{item.title}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 6 — Dispute Resolution */}
            <div id="dispute" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-accent-green uppercase tracking-widest">06</span>
                  <h2 className="text-2xl font-bold text-slate-900">Dispute Resolution</h2>
                </div>
              </div>
              <div className="pl-[52px] space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  If you are not satisfied with Ewolyn's response to your refund request, you may escalate the matter by writing to our senior management at <a href="mailto:info@ewolyn.co.in" className="text-accent-green font-medium hover:underline">info@ewolyn.co.in</a> with the subject <strong>"Escalation — Refund Dispute"</strong>. We are committed to resolving all disputes within 15 business days.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Any unresolved disputes shall be subject to the jurisdiction of courts in Ahmedabad, Gujarat, India, as per the governing law provisions in our Terms & Conditions. You also retain your rights under the Consumer Protection Act, 2019 and may approach the appropriate consumer forum.
                </p>
              </div>
            </div>

            {/* Contact box */}
            <div className="bg-gradient-to-r from-accent-green/5 to-transparent border border-accent-green/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Questions About a Refund?</h3>
              <p className="text-slate-600 text-sm mb-4">
                Our support team is available Monday to Saturday, 9 AM – 6 PM IST. Don't hesitate to reach out with any questions about this policy.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:info@ewolyn.co.in" className="inline-flex items-center gap-2 text-sm text-accent-green font-semibold hover:underline">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@ewolyn.co.in
                </a>
                <a href="tel:+919876543210" className="inline-flex items-center gap-2 text-sm text-accent-green font-semibold hover:underline">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-navy-gradient text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="container-max text-center relative z-10">
          <div className="w-14 h-14 mx-auto bg-accent-green/15 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-7 h-7 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-3">
            Need Help Before <span className="text-accent-green">You Start?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Have a question about our services, pricing, or what to expect? Talk to our team before engaging — we're transparent about everything.
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
