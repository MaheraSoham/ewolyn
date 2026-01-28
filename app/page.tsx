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
      <Hero />

      {/* 2. TRUST & CREDIBILITY BAR (LogoGrid) */}
      <LogoGrid />

      {/* 3. IMPACT METRICS (ImpactStats) */}
      <ImpactStats />

      {/* 4. GOVERNMENT SCHEMES */}
      <GovernmentSchemes />

      {/* 5. FUNDING OPTIONS */}
      <FundingOptions />

      {/* 6. HOW EVOLYN WORKS (ProcessSteps) */}
      <ProcessSteps />

      {/* 7. FINAL CTA SECTION (CTASection) */}
      <CTASection />
    </main>
  );
}
