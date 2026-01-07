import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LogoGrid from "@/components/LogoGrid";
import CTASection from "@/components/CTASection";
import ProcessSteps from "@/components/ProcessSteps";
import ImpactStats from "@/components/ImpactStats";
import GovernmentSchemes from "@/components/GovernmentSchemes";
import FundingOptions from "@/components/FundingOptions";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MSME Funding & Startup Enablement | Ewolyn",
    description:
      "Get ₹5 Lakhs to ₹10 Crores with India's fastest MSME funding platform. 48hrs approval, 95% success rate, 100% online process.",
  };
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* Consultation Form - Home Page */}
      <section className="my-10">
        <form className="w-full max-w-md mx-auto rounded-2xl bg-white/90 shadow-xl p-6 flex flex-col gap-5 animate-fade-in">
          <h3 className="text-xl font-bold text-brand mb-2 text-center">Request a Free Consultation</h3>
          <div className="flex flex-col gap-3">
            <input
              id="name-home"
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-brand focus:outline-none bg-slate-50"
            />
            <input
              id="email-home"
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-brand focus:outline-none bg-slate-50"
            />
            <input
              id="phone-home"
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-brand focus:outline-none bg-slate-50"
            />
            <textarea
              id="message-home"
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
      </section>
      <LogoGrid />
      <ImpactStats />
      <GovernmentSchemes />
      <FundingOptions />
      <ProcessSteps />
      <CTASection />
    </main>
  );
}
