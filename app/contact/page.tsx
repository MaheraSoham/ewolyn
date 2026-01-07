import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { company } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us",
    description:
      "Get in touch with the Ewolyn team for consultations, funding-readiness support, and any service inquiries.",
  };
}

export default function ContactPage() {
  return (
    <main className="section bg-gradient-to-br from-pink-50 via-white to-blue-50 min-h-screen">
      <div className="container-max py-10">
        <SectionHeading
          align="left"
          title="Contact Us"
          subtitle="Reach out for consultations, funding-readiness support, or any questions."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card border-l-4 border-blue-400 bg-white/80 shadow-lg animate-fade-in">
            <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">📧 Email</h3>
            <p className="mt-2 text-sm text-muted">{company.email}</p>
          </div>
          <div className="card border-l-4 border-pink-400 bg-white/80 shadow-lg animate-fade-in">
            <h3 className="text-lg font-semibold text-pink-700 flex items-center gap-2">⏰ Hours</h3>
            <p className="mt-2 text-sm text-muted">Monday – Saturday, 9 AM – 6 PM IST</p>
          </div>
          <div className="card border-l-4 border-green-400 bg-white/80 shadow-lg animate-fade-in">
            <h3 className="text-lg font-semibold text-green-700 flex items-center gap-2">🌍 Coverage</h3>
            <p className="mt-2 text-sm text-muted">Pan-India, remote-first service</p>
          </div>
          <div className="card border-l-4 border-yellow-400 bg-white/80 shadow-lg animate-fade-in">
            <h3 className="text-lg font-semibold text-yellow-700 flex items-center gap-2">📝 Consultation Request</h3>
            <p className="mt-2 text-sm text-muted">Drop an email with your business stage, goal, and preferred time.</p>
          </div>
        </div>

        <form className="mt-10 w-full max-w-md mx-auto rounded-2xl bg-white/90 shadow-xl p-6 flex flex-col gap-5 animate-fade-in">
          <h3 className="text-xl font-bold text-brand mb-2 text-center">Request a Free Consultation</h3>
          <div className="flex flex-col gap-3">
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-brand focus:outline-none bg-slate-50"
            />
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-brand focus:outline-none bg-slate-50"
            />
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-brand focus:outline-none bg-slate-50"
            />
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Your Query / Business Stage"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-brand focus:outline-none bg-slate-50"
            />
          </div>
          <button type="submit" className="btn w-full py-3 text-lg font-semibold rounded-lg bg-brand text-white hover:bg-brand-dark transition">
            Get Free Consultation
          </button>
        </form>
      </div>
      <CTASection />
    </main>
  );
}
