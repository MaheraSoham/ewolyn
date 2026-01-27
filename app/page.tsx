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
      <LogoGrid />
      <ImpactStats />
      <GovernmentSchemes />
      <FundingOptions />
      <ProcessSteps />
      <CTASection />
    </main>
  );
}
