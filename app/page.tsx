import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LogoGrid from "@/components/LogoGrid";
import CTASection from "@/components/CTASection";
import ProcessSteps from "@/components/ProcessSteps";
import ImpactStats from "@/components/ImpactStats";
import GovernmentSchemes from "@/components/GovernmentSchemes";
import FundingOptions from "@/components/FundingOptions";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

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
      {/* 1. HERO SECTION */}
      {/* HERO */}
      <Hero />

      {/* TRUST & CREDIBILITY BAR */}
      <LogoGrid />

      {/* HOW EVOLYN WORKS (4 STEPS) */}
      <section className="section bg-process-section">
        <ProcessSteps />
      </section>

      {/* SERVICES SECTION (FundingOptions) */}
      <section className="section">
        <FundingOptions />
      </section>

      {/* GOVERNMENT SCHEMES */}
      <section className="section" style={{ background: 'linear-gradient(90deg, #F8FAFC 60%, #E6F7FA 100%)' }}>
        <GovernmentSchemes />
      </section>

      {/* WHY EVOLYN */}
      <section className="section">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-evolyn-blue mb-6">Why Choose <span className="text-evolyn-teal">EVOLYN?</span></h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl text-evolyn-green mb-2">✔</span>
              <span className="font-semibold text-lg">High Approval Success</span>
              <span className="text-evolyn-charcoal mt-2">95%+ approval rate for eligible businesses</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl text-evolyn-green mb-2">✔</span>
              <span className="font-semibold text-lg">Expert Consultants</span>
              <span className="text-evolyn-charcoal mt-2">Seasoned professionals guiding you end-to-end</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl text-evolyn-green mb-2">✔</span>
              <span className="font-semibold text-lg">Transparent Process</span>
              <span className="text-evolyn-charcoal mt-2">No hidden fees, clear documentation, honest advice</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl text-evolyn-green mb-2">✔</span>
              <span className="font-semibold text-lg">Pan-India Presence</span>
              <span className="text-evolyn-charcoal mt-2">Serving startups & MSMEs across all states</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl text-evolyn-green mb-2">✔</span>
              <span className="font-semibold text-lg">Dedicated Support</span>
              <span className="text-evolyn-charcoal mt-2">Personalized help at every step</span>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT METRICS */}
      <section className="section" style={{ background: 'linear-gradient(90deg, #F8FAFC 60%, #E6F7FA 100%)' }}>
        <ImpactStats />
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <Testimonials />
      </section>

      {/* FINAL CTA SECTION (Short Form) */}
      <section className="section" style={{ background: 'linear-gradient(90deg, #1FA2B1 0%, #4AC7CF 100%)' }}>
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Evolve Your Business?</h2>
            <p className="text-lg text-white/90 mb-6">Get a free, no-obligation consultation with our experts. Discover your eligibility and funding options in minutes.</p>
          </div>
          <form className="w-full max-w-md bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col gap-5 animate-fade-in">
            <input
              id="name-final"
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-evolyn-teal focus:outline-none bg-slate-50"
            />
            <input
              id="phone-final"
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-evolyn-teal focus:outline-none bg-slate-50"
            />
            <input
              id="business-type-final"
              name="businessType"
              type="text"
              required
              placeholder="Business Type (e.g. Manufacturing, Services)"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-evolyn-teal focus:outline-none bg-slate-50"
            />
            <input
              id="funding-final"
              name="funding"
              type="text"
              required
              placeholder="Funding Requirement (₹)"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-evolyn-teal focus:outline-none bg-slate-50"
            />
            <button type="submit" className="btn w-full py-3 text-lg font-semibold rounded-lg">
              Get Free Consultation
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER is included globally in layout, so not repeated here */}
    </main>
  );
}
