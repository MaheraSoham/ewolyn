import type { Metadata } from "next";
import Hero from "@/components/Hero";
import GovernmentSchemes from "@/components/GovernmentSchemes";
import FundingOptions from "@/components/FundingOptions";
import BusinessSolutions from "@/components/BusinessSolutions";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import GoogleReviews from "@/components/GoogleReviews";
import DigitalServices from "@/components/DigitalServices";
import ContactCTA from "@/components/ContactCTA";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MSME Funding Made Easy | Ewolyn",
    description:
      "Government schemes, company registration & business certifications. Expert guidance for PMEGP, CGTMSE, Mudra & other MSME schemes across India.",
    icons: {
      icon: "/logo.png",
    },
  };
}

export default function HomePage() {
  return (
    <main>
      {/* 1. HERO + Stats Bar + Success Stories */}
      <Hero />

      {/* 2. Government Schemes (Dark stats + White cards) */}
      <GovernmentSchemes />

      {/* 3. Find Your Funding Match (Comparison Table) */}
      <FundingOptions />

      {/* 4. Complete Business Solutions (6 cards) */}
      <BusinessSolutions />

      {/* 5. Scale Your Business Digitally (8 cards) */}
      <DigitalServices />

      {/* 6. From Application to Approval (Horizontal Steps) */}
      <ProcessSteps />

      {/* 7. Real Businesses, Real Results (Testimonials) */}
      <Testimonials />

      {/* 7b. Google Reviews Carousel */}
      <GoogleReviews />

      {/* 8. Frequently Asked Questions (Accordion) */}
      <FAQ />

      {/* 9. Let's Discuss Your Business Needs (Contact CTA) */}
      <ContactCTA />
    </main>
  );
}
