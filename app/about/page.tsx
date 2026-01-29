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
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[120px]"></div>

        <div className="container-max relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-bold mb-8 shadow-xl">
              <span>💎</span>
              Innovation & Trust
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
              <span className="text-accent-green">About</span> <br />
              <span className="text-white">{company.name}</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
              {company.tagline}
            </p>
          </div>
        </div>
      </section>

      <div className="container-max max-w-4xl py-20 relative z-10">
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
