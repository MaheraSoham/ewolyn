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
    company: "Shri Ganesh Textiles",
    founder: "Mahesh Patel",
    location: "Surat, Gujarat",
    industry: "Textile",
    category: "Manufacturing",
    scheme: "PMEGP",
    amount: "₹35 Lakhs",
    amountColor: "#2eb85c",
    result: "35% Capital Subsidy + Full Loan Disbursed",
    story:
      "Mahesh struggled to get bank approval for 3 years. Ewolyn's team prepared his PMEGP application, arranged the DPR, and secured ₹35L disbursement within 40 days.",
    badge: "PMEGP",
    badgeColor: "#1B4F8C",
    tags: ["PMEGP", "Textile", "Gujarat"],
    icon: "🧵",
  },
  {
    id: 2,
    company: "FreshMart Agro Foods",
    founder: "Sunita Sharma",
    location: "Pune, Maharashtra",
    industry: "Food Processing",
    category: "Food",
    scheme: "MUDRA - Tarun",
    amount: "₹10 Lakhs",
    amountColor: "#f97316",
    result: "No Collateral, Disbursed in 18 Days",
    story:
      "Sunita's food processing unit needed working capital. With MUDRA Tarun, Ewolyn helped her get ₹10L without any collateral in under 3 weeks.",
    badge: "MUDRA",
    badgeColor: "#f97316",
    tags: ["MUDRA", "Food Processing", "Women"],
    icon: "🥗",
  },
  {
    id: 3,
    company: "GreenTech Innovations",
    founder: "Arjun Mehta",
    location: "Bengaluru, Karnataka",
    industry: "Tech Startup",
    category: "Tech",
    scheme: "Startup India Seed Fund",
    amount: "₹50 Lakhs",
    amountColor: "#6366f1",
    result: "DPIIT Recognized + ₹20L Grant + ₹30L Debt",
    story:
      "Arjun's clean-tech startup needed DPIIT recognition before approaching investors. Ewolyn fast-tracked the process and helped them receive ₹50L in combined funding.",
    badge: "STARTUP INDIA",
    badgeColor: "#6366f1",
    tags: ["Startup India", "Tech", "Green Energy"],
    icon: "🚀",
  },
  {
    id: 4,
    company: "Rani Crafts Pvt Ltd",
    founder: "Priya Verma",
    location: "Jaipur, Rajasthan",
    industry: "Handicraft",
    category: "Women Entrepreneur",
    scheme: "Stand-Up India",
    amount: "₹80 Lakhs",
    amountColor: "#ec4899",
    result: "Priority Processing + Lower Interest Rate",
    story:
      "As an SC/ST woman entrepreneur, Priya qualified for Stand-Up India. Ewolyn helped her set up a Pvt Ltd, apply for the scheme, and expand her handicraft export business.",
    badge: "STAND-UP INDIA",
    badgeColor: "#ec4899",
    tags: ["Stand-Up India", "Women", "SC/ST", "Export"],
    icon: "👩‍💼",
  },
  {
    id: 5,
    company: "Annapurna Agri Hub",
    founder: "Ramesh Yadav",
    location: "Indore, Madhya Pradesh",
    industry: "Agriculture",
    category: "Food",
    scheme: "NAIF Scheme",
    amount: "₹2 Crores",
    amountColor: "#22c55e",
    result: "3% Interest Subvention + Cold Storage Setup",
    story:
      "Ramesh wanted to build cold-chain infrastructure for farmers. With NAIF, Ewolyn helped him access ₹2Cr at 3% effective interest, creating 60+ farmer livelihoods.",
    badge: "NAIF",
    badgeColor: "#22c55e",
    tags: ["NAIF", "Agriculture", "Cold Chain"],
    icon: "🌾",
  },
  {
    id: 6,
    company: "SwiftCare Clinics",
    founder: "Dr. Neha Gupta",
    location: "Hyderabad, Telangana",
    industry: "Healthcare",
    category: "Services",
    scheme: "CGTMSE",
    amount: "₹1.5 Crores",
    amountColor: "#14b8a6",
    result: "100% Collateral-free Guarantee",
    story:
      "Dr. Neha needed funds to open 3 more clinics but had no collateral. CGTMSE guarantee enabled the full ₹1.5Cr loan. Ewolyn handled the entire banker presentation.",
    badge: "CGTMSE",
    badgeColor: "#14b8a6",
    tags: ["CGTMSE", "Healthcare", "Collateral-free"],
    icon: "🏥",
  },
  {
    id: 7,
    company: "EduRise Institute",
    founder: "Karan Singh",
    location: "Chandigarh, Punjab",
    industry: "Education",
    category: "Services",
    scheme: "PMEGP",
    amount: "₹25 Lakhs",
    amountColor: "#2eb85c",
    result: "25% Subsidy + MSME Registration",
    story:
      "Karan's vocational training institute qualified for PMEGP under service sector. Ewolyn secured ₹25L with 25% subsidy and full MSME Udyam registration in one month.",
    badge: "PMEGP",
    badgeColor: "#1B4F8C",
    tags: ["PMEGP", "Education", "Vocational Training"],
    icon: "📚",
  },
  {
    id: 8,
    company: "Nexus Retail Chain",
    founder: "Santosh Kumar",
    location: "Lucknow, Uttar Pradesh",
    industry: "Retail",
    category: "Services",
    scheme: "MUDRA - Kishor",
    amount: "₹7 Lakhs",
    amountColor: "#f97316",
    result: "Quick Disbursal + GeM Registration",
    story:
      "Santosh wanted to expand his retail chain and sell to government buyers. Ewolyn secured MUDRA Kishor funding and completed his GeM registration for ₹3L+ Cr market access.",
    badge: "MUDRA + GeM",
    badgeColor: "#f97316",
    tags: ["MUDRA", "GeM", "Retail"],
    icon: "🛒",
  },
  {
    id: 9,
    company: "SunPower Energy",
    founder: "Vikram Reddy",
    location: "Chennai, Tamil Nadu",
    industry: "Renewable Energy",
    category: "Manufacturing",
    scheme: "Startup India + CGTMSE",
    amount: "₹1.2 Crores",
    amountColor: "#eab308",
    result: "DPIIT + 80-IAC Tax Exemption + Funding",
    story:
      "Vikram's solar panel startup needed DPIIT registration for 3-year tax benefits. Ewolyn secured DPIIT recognition, 80-IAC tax exemption, and ₹1.2Cr funding in 60 days.",
    badge: "STARTUP INDIA",
    badgeColor: "#6366f1",
    tags: ["Startup India", "Renewable", "Tax Exemption"],
    icon: "☀️",
  },
  {
    id: 10,
    company: "QuickShip Logistics",
    founder: "Anil Kapoor",
    location: "Mumbai, Maharashtra",
    industry: "Logistics",
    category: "Services",
    scheme: "CGTMSE",
    amount: "₹3 Crores",
    amountColor: "#14b8a6",
    result: "Fleet Expansion + 45% Revenue Growth",
    story:
      "Anil needed ₹3Cr to expand his fleet of trucks. CGTMSE guarantee removed the collateral barrier. Ewolyn's expert team prepared the banker-ready DPR and project feasibility report.",
    badge: "CGTMSE",
    badgeColor: "#14b8a6",
    tags: ["CGTMSE", "Logistics", "Fleet"],
    icon: "🚚",
  },
  {
    id: 11,
    company: "BuildRight Construction",
    founder: "Sanjay Mishra",
    location: "Patna, Bihar",
    industry: "Construction",
    category: "Manufacturing",
    scheme: "NSIC + PMEGP",
    amount: "₹45 Lakhs",
    amountColor: "#2eb85c",
    result: "Tender Priority + 35% Subsidy",
    story:
      "Sanjay's construction firm needed NSIC certification to bid for government tenders. Ewolyn got NSIC done in 20 days + ₹45L PMEGP subsidy, transforming his B2G business.",
    badge: "NSIC + PMEGP",
    badgeColor: "#1B4F8C",
    tags: ["NSIC", "PMEGP", "Construction", "Tender"],
    icon: "🏗️",
  },
  {
    id: 12,
    company: "TrendKart E-Commerce",
    founder: "Riya Shah",
    location: "Ahmedabad, Gujarat",
    industry: "E-Commerce",
    category: "Tech",
    scheme: "Digital Growth + MUDRA",
    amount: "₹15 Lakhs",
    amountColor: "#a855f7",
    result: "300% Online Revenue Growth in 6 Months",
    story:
      "Riya's fashion e-commerce startup struggled with digital marketing. Ewolyn handled MUDRA funding, CRM setup, and full digital marketing — revenues jumped 300% in 6 months.",
    badge: "DIGITAL + MUDRA",
    badgeColor: "#a855f7",
    tags: ["MUDRA", "Digital", "E-Commerce", "Women"],
    icon: "🛍️",
  },
  {
    id: 13,
    company: "Dhruv Pharma Labs",
    founder: "Dr. Suresh Mehta",
    location: "Vadodara, Gujarat",
    industry: "Pharmaceutical",
    category: "Manufacturing",
    scheme: "PMEGP + ISO Certification",
    amount: "₹60 Lakhs",
    amountColor: "#2eb85c",
    result: "ISO 9001 + GMP Compliance + Full Funding",
    story:
      "Dr. Suresh needed ISO certification and funding to set up his pharma manufacturing unit. Ewolyn delivered ISO 9001, GMP compliance support, and ₹60L PMEGP disbursement.",
    badge: "PMEGP",
    badgeColor: "#1B4F8C",
    tags: ["PMEGP", "ISO", "Pharma", "Manufacturing"],
    icon: "💊",
  },
  {
    id: 14,
    company: "GreenGrow Farms",
    founder: "Lakshmi Devi",
    location: "Coimbatore, Tamil Nadu",
    industry: "Agri-Processing",
    category: "Women Entrepreneur",
    scheme: "Stand-Up India + NAIF",
    amount: "₹1.2 Crores",
    amountColor: "#22c55e",
    result: "₹50L Stand-Up India + ₹70L NAIF",
    story:
      "Lakshmi, an SC category woman entrepreneur, wanted to set up an organic processing unit. Ewolyn orchestrated a dual-scheme approach — Stand-Up India for startup capital, NAIF for infrastructure.",
    badge: "STAND-UP + NAIF",
    badgeColor: "#ec4899",
    tags: ["Stand-Up India", "NAIF", "Women", "Organic"],
    icon: "🌱",
  },
];

const categories = ["All", "Manufacturing", "Tech", "Food", "Services", "Women Entrepreneur"];

const stats = [
  { value: "₹48Cr+", label: "Total Funding Secured" },
  { value: "1000+", label: "Clients Served" },
  { value: "28+", label: "States Covered" },
  { value: "95%", label: "Success Rate" },
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
                      className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full text-white"
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
                  <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5 mb-3">
                    {s.founder} · {s.industry}
                  </p>

                  {/* Funding Amount */}
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-2xl font-black" style={{ color: s.amountColor }}>{s.amount}</span>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">via {s.scheme}</span>
                  </div>

                  {/* Result */}
                  <div className="flex items-start gap-1.5 mb-3">
                    <svg className="w-3.5 h-3.5 text-[#2eb85c] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-[11px] text-slate-600 font-semibold">{s.result}</p>
                  </div>

                  {/* Story */}
                  <p className="text-[11px] text-slate-500 leading-relaxed flex-grow">{s.story}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-4">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-black uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
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
