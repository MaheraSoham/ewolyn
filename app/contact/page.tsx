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
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>

        <div className="container-max relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-bold mb-8 shadow-xl">
              <span>👋</span>
              Let's Connect
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
              <span className="text-accent-green">Get in</span> <br />
              <span className="text-white">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
              Reach out for consultations, funding-readiness support, or any questions you have about our services.
            </p>
          </div>
        </div>
      </section>

      <div className="container-max py-20 relative z-10">
        <div className="grid gap-6 md:grid-cols-2">
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

        <form className="mt-20 w-full max-w-md mx-auto rounded-3xl bg-white shadow-2xl p-10 flex flex-col gap-5 animate-fade-in border border-slate-100">
          <h3 className="text-2xl font-bold text-brand mb-4 text-center">Request Consultation</h3>
          <div className="flex flex-col gap-4">
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-slate-200 px-5 py-4 text-base focus:border-brand focus:outline-none bg-slate-50 transition-all"
            />
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full rounded-xl border border-slate-200 px-5 py-4 text-base focus:border-brand focus:outline-none bg-slate-50 transition-all"
            />
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full rounded-xl border border-slate-200 px-5 py-4 text-base focus:border-brand focus:outline-none bg-slate-50 transition-all"
            />
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Your Query / Business Stage"
              className="w-full rounded-xl border border-slate-200 px-5 py-4 text-base focus:border-brand focus:outline-none bg-slate-50 transition-all"
            />
          </div>
          <button type="submit" className="btn w-full py-4 text-lg font-bold rounded-xl bg-brand text-white hover:bg-brand-dark transition shadow-xl shadow-brand/20">
            Send Message
          </button>
        </form>
      </div>
      <CTASection />
    </main>
  );
}
