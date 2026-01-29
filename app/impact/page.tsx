import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ImpactStats from "@/components/ImpactStats";
import CTASection from "@/components/CTASection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Impact",
    description:
      "See the breadth of Ewolyn's enablement services—coverage, categories, and pan-India support.",
  };
}

const highlights = [
  {
    title: "Registrations",
    desc: "Private Limited, LLP, Partnership, NGO, Section 8, CSR+, GeM, and many more.",
  },
  {
    title: "Certifications",
    desc: "Startup India, 80-IAC exemption, Udyam, ISO, ZED, DUNS, FSSAI, NSIC SPR.",
  },
  {
    title: "Funding Readiness",
    desc: "Eligibility mapping, scheme matching, compliant dossiers, and application support.",
  },
  {
    title: "Digital Growth",
    desc: "Branding, content, social, web, WhatsApp marketing, CRM & ERP setup.",
  },
];

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>

        <div className="container-max relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-bold mb-8 shadow-xl">
              <span>📊</span>
              Proven Results
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
              <span className="text-accent-green">Impact &</span> <br />
              <span className="text-white">Reach</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
              Breadth of solutions that accelerate compliance, certification, and funding progress for modern Indian enterprises.
            </p>
          </div>
        </div>
      </section>

      <div className="container-max py-20 relative z-10">
        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((h) => (
            <div key={h.title} className="card p-8 group hover:border-accent-green/30 transition-all">
              <h3 className="text-xl font-bold text-ink mb-4 group-hover:text-accent-green transition-colors">{h.title}</h3>
              <p className="text-muted leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <ImpactStats />
      <CTASection />
    </main>
  );
}
