import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Success Stories — Ewolyn | MSMEs & Startups Funded Across India",
  description:
    "Discover how 1000+ Indian MSMEs and startups secured government funding, registrations, and digital growth through Ewolyn. Real stories. Real results.",
};

const stories = [
  {
    id: 1,
    company: "Aeroette Skyways LLP",
    founder: "Mr. Sandeep Rathod",
    location: "Ahmedabad, Gujarat",
    industry: "Aviation Services",
    category: "Trademark",
    scheme: "Trademark Registration (TM)",
    amount: "TM Filed",
    amountColor: "#1B4F8C",
    result: "Completed on 24-11-2025",
    story:
      "Ewolyn supported Aeroette Skyways LLP with end-to-end trademark registration, including filing guidance and documentation support for a smooth TM process.",
    badge: "TM",
    badgeColor: "#1B4F8C",
    tags: ["Trademark", "Ahmedabad", "Gujarat"],
    icon: "🛡️",
  },
  {
    id: 2,
    company: "Scion Renewable Private Limited",
    founder: "Vaibhav Savaliya",
    location: "Rajkot, Gujarat",
    industry: "Renewable Energy",
    category: "Startup Funding",
    scheme: "Startup Seed",
    amount: "Seed Support",
    amountColor: "#2eb85c",
    result: "Completed on 05-09-2025",
    story:
      "Scion Renewable received Ewolyn's startup seed support with structured guidance for documentation and application flow tailored to their growth stage.",
    badge: "SEED",
    badgeColor: "#2eb85c",
    tags: ["Startup Seed", "Rajkot", "Renewable"],
    icon: "🌿",
  },
  {
    id: 3,
    company: "Pruthveek Raval Production Private Limited",
    founder: "Pravinbhai Raval",
    location: "Gandhidham, Gujarat",
    industry: "Media Production",
    category: "Startup Funding",
    scheme: "Start Up & Seed Fund",
    amount: "Seed Support",
    amountColor: "#2eb85c",
    result: "Completed on 18-09-2025",
    story:
      "Ewolyn assisted Pruthveek Raval Production Private Limited with startup and seed fund service support, helping streamline submissions and readiness.",
    badge: "SEED",
    badgeColor: "#2eb85c",
    tags: ["Seed Fund", "Gandhidham", "Startup"],
    icon: "🎬",
  },
  {
    id: 4,
    company: "Acticon Life Sciences Pvt Ltd",
    founder: "Gourav Patel",
    location: "Gandhinagar, Gujarat",
    industry: "Life Sciences",
    category: "Startup Funding",
    scheme: "Startup, Seed Fund",
    amount: "Seed Support",
    amountColor: "#2eb85c",
    result: "Completed on 07-10-2025",
    story:
      "Acticon Life Sciences benefited from Ewolyn's startup and seed fund consultancy, with practical guidance on process steps and required documents.",
    badge: "SEED",
    badgeColor: "#2eb85c",
    tags: ["Seed Fund", "Gandhinagar", "Life Sciences"],
    icon: "🧪",
  },
  {
    id: 5,
    company: "Storypitaara Private Limited",
    founder: "Ishan Behl",
    location: "Dewas, Madhya Pradesh",
    industry: "Content & Media",
    category: "Startup Funding",
    scheme: "Start Up & Seed Fund",
    amount: "Seed Support",
    amountColor: "#2eb85c",
    result: "Completed on 03-10-2025",
    story:
      "Storypitaara worked with Ewolyn for startup and seed fund assistance, receiving structured support throughout the submission lifecycle.",
    badge: "SEED",
    badgeColor: "#2eb85c",
    tags: ["Seed Fund", "Dewas", "Media"],
    icon: "📚",
  },
  {
    id: 6,
    company: "Saroj Jagdish Forensic LLP",
    founder: "Jay Dave",
    location: "Surat, Gujarat",
    industry: "Forensic Services",
    category: "Startup Funding",
    scheme: "Startup, Seed Fund",
    amount: "Seed Support",
    amountColor: "#2eb85c",
    result: "Completed on 25-09-2025",
    story:
      "Saroj Jagdish Forensic LLP engaged Ewolyn for startup seed support and received clear handholding from initial preparation to final application steps.",
    badge: "SEED",
    badgeColor: "#2eb85c",
    tags: ["Seed Fund", "Surat", "Forensic"],
    icon: "🔬",
  },
  {
    id: 7,
    company: "Ravni Farmers Producer Company",
    founder: "Bhautik Gajera",
    location: "Junagadh, Gujarat",
    industry: "Agriculture",
    category: "Startup Funding",
    scheme: "Startup, Seed Fund",
    amount: "Seed Support",
    amountColor: "#2eb85c",
    result: "Completed on 14-10-2025",
    story:
      "Ravni Farmers Producer Company partnered with Ewolyn for startup and seed fund support, enabling a guided and compliant application process.",
    badge: "SEED",
    badgeColor: "#2eb85c",
    tags: ["Seed Fund", "Junagadh", "Agriculture"],
    icon: "🌾",
  },
];

const categories = ["All", "Startup Funding", "Trademark", "Agriculture", "Renewable", "Life Sciences"];

const stats = [
  { value: "7", label: "Verified Client Stories" },
  { value: "2025", label: "Service Year" },
  { value: "6", label: "Cities Covered" },
  { value: "2", label: "Core Services" },
];

export default function SuccessStoriesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #9cd49fff 0%, #465f49ff 45%, #2eb85c 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(46,184,92,0.15) 0%, transparent 70%)" }} />
        <div className="container-max text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-[10px] font-black text-white uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2eb85c] animate-pulse" />
            Real Results. Real Founders.
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
            Success <span className="text-[#2eb85c]">Stories</span>
          </h1>
          <p className="text-base md:text-lg text-blue-100/70 max-w-2xl mx-auto font-medium">
            Over 1000 Indian MSMEs and startups have transformed their businesses with Ewolyn&apos;s expert guidance in funding, registration, and digital growth.
          </p>
        </div>

        {/* Stats bar */}
        <div className="container-max mt-14 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 text-center backdrop-blur-sm"
              >
                <p className="text-3xl font-black text-[#2eb85c]">{s.value}</p>
                <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter (static, shown for design) */}
      <section className="bg-slate-50 border-b border-slate-200 sticky top-16 z-30">
        <div className="container-max py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider cursor-pointer transition-all ${i === 0
                  ? "bg-[#1B4F8C] text-white shadow-lg shadow-[#1B4F8C]/30"
                  : "bg-white border border-slate-200 text-slate-500 hover:border-[#1B4F8C] hover:text-[#1B4F8C]"
                  }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="bg-slate-50 py-16">
        <div className="container-max">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {stories.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#2eb85c]/30 transition-all duration-300 flex flex-col"
              >
                {/* Video Placeholder */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 h-40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full text-white"
                      style={{ background: s.badgeColor }}
                    >
                      {s.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 text-2xl">{s.icon}</div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-xs text-white/70 font-medium">{s.location}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-black text-[#1B4F8C] leading-tight">{s.company}</h3>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-0.5 mb-3">
                    {s.founder} · {s.industry}
                  </p>

                  {/* Funding Amount */}
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-2xl font-black" style={{ color: s.amountColor }}>{s.amount}</span>
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">via {s.scheme}</span>
                  </div>

                  {/* Result */}
                  <div className="flex items-start gap-1.5 mb-3">
                    <svg className="w-3.5 h-3.5 text-[#2eb85c] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-[11px] text-slate-600 font-semibold">{s.result}</p>
                  </div>

                  {/* Story */}
                  <p className="text-xs text-slate-500 leading-relaxed flex-grow">{s.story}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-4">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-xs font-black uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[rgba(115,150,121,0.92)] py-16">
        <div className="container-max text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-[#2eb85c] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2eb85c] animate-pulse" />
            Your Story Could Be Next
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Ready to Write Your <span className="text-[#2eb85c]">Success Story?</span>
          </h2>
          <p className="text-base text-white/80 max-w-xl mx-auto mb-10">
            Join 1000+ Indian entrepreneurs who transformed their businesses with Ewolyn&apos;s expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/919876543210?text=${encodeURIComponent("Hello Ewolyn! I want to check my eligibility for government funding. Please guide me.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-white text-[#2eb85c] font-black px-8 py-4 hover:bg-[#1B4F8C] hover:text-white transition-all shadow-xl shadow-[#2eb85c]/30 text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Check My Eligibility Free
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/20 text-white font-black px-8 py-4 hover:bg-white/10 transition-all text-sm"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
