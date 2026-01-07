import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { company } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us",
    description:
      "Learn about Ewolyn — empowering startups and MSMEs with compliant registrations, certifications, funding readiness, and digital growth services.",
  };
}

export default function AboutPage() {
  return (
    <main className="section bg-gradient-to-br from-blue-50 via-white to-pink-50 min-h-screen">
      <div className="container-max max-w-4xl py-10">
        <SectionHeading
          align="left"
          title={`About ${company.name}`}
          subtitle={company.tagline}
        />

        <div className="mt-8 grid gap-8">
          <div className="rounded-xl shadow-lg bg-white/80 p-8 border-l-4 border-blue-400 animate-fade-in">
            <h2 className="section-title !text-2xl text-blue-700 flex items-center gap-2"><span>🎯</span> Our Mission</h2>
            <p className="text-muted mt-2">
              To simplify and accelerate compliance, certification, and funding access for Indian startups and MSMEs—so founders spend less time on paperwork and more time building.
            </p>
          </div>
          <div className="rounded-xl shadow-lg bg-white/80 p-8 border-l-4 border-pink-400 animate-fade-in">
            <h2 className="section-title !text-2xl text-pink-700 flex items-center gap-2"><span>🌱</span> Our Vision</h2>
            <p className="text-muted mt-2">
              A thriving ecosystem where emerging businesses launch faster, qualify for the right programs, and operate with confidence—backed by expert, end-to-end enablement.
            </p>
          </div>
          <div className="rounded-xl shadow-lg bg-white/80 p-8 border-l-4 border-green-400 animate-fade-in">
            <h2 className="section-title !text-2xl text-green-700 flex items-center gap-2"><span>💡</span> Why Choose Ewolyn</h2>
            <ul className="list-disc list-inside text-muted space-y-2 mt-2">
              <li>20+ registration and licensing pathways</li>
              <li>15+ certification and compliance programs</li>
              <li>Funding-readiness advisory for schemes and lenders</li>
              <li>Digital growth services—design, content, social, and web</li>
              <li>Pan-India, remote-first support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <CTASection />
      </div>
    </main>
  );
}
