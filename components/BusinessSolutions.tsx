"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePopup } from "./PopupContext";

const solutions = [
    {
        title: "Government Schemes",
        subtitle: "₹10L TO ₹5CR FUNDING",
        stat: "₹45Cr+",
        statLabel: "DISBURSED",
        desc: "Access government schemes with subsidies and benefits. We handle everything from MUDRA, Stand-Up India to Startup funding.",
        features: ["Zero collateral options", "Subsidy benefits", "Expert guidance"],
        tags: ["MUDRA", "STAND-UP INDIA", "STARTUP INDIA", "+1 MORE"],
        href: "/schemes",
        iconBg: "bg-blue-600",
        icon: "📊",
    },
    {
        title: "Startup Funding",
        subtitle: "SEED TO SERIES A",
        stat: "120+",
        statLabel: "STARTUPS FUNDED",
        desc: "Complete support for startups from seed funding to venture capital. Get up to ₹50L through government seed funds.",
        features: ["Equity & debt funding", "Pitch deck preparation", "Investor connections"],
        tags: ["STARTUP INDIA", "SEED FUND", "ANGEL NETWORKS", "+1 MORE"],
        href: "/services/startup-seed-fund",
        iconBg: "bg-purple-600",
        icon: "🚀",
        badge: "POPULAR",
    },
    {
        title: "Digital Services",
        subtitle: "GROW YOUR BUSINESS ONLINE",
        stat: "300%",
        statLabel: "AVG ROI",
        desc: "Complete digital transformation solutions including CRM, digital marketing, website development, and more.",
        features: ["CRM & automation", "Digital marketing", "Website & app development"],
        tags: ["CRM SOFTWARE", "SEO", "SOCIAL MEDIA", "+1 MORE"],
        href: "/services",
        iconBg: "bg-primary",
        icon: "💻",
    },
    {
        title: "Women Entrepreneur",
        subtitle: "SPECIAL BENEFITS",
        stat: "180+",
        statLabel: "WOMEN HELPED",
        desc: "Exclusive schemes for women entrepreneurs with enhanced subsidies, lower interest rates, and priority processing.",
        features: ["Extra 5% subsidy", "Priority processing", "Mentorship support"],
        tags: ["MAHILA UDYAM", "STAND-UP INDIA", "TREAD", "+1 MORE"],
        href: "/services/stand-up-india",
        iconBg: "bg-orange-500",
        icon: "👩‍💼",
    },
    {
        title: "Registration & Compliance",
        subtitle: "COMPLETE DOCUMENTATION",
        stat: "2 Days",
        statLabel: "QUICK PROCESS",
        desc: "End-to-end support for business registrations, GST, MSME certificates, and all compliance requirements.",
        features: ["Company incorporation", "GST & MSME registration", "License & permits"],
        tags: ["PVT LTD", "LLP", "OPC", "+1 MORE"],
        href: "/services/business-registration",
        iconBg: "bg-primary",
        icon: "📋",
    },
    {
        title: "Subsidy & Grants",
        subtitle: "NON-REPAYABLE FUNDS",
        stat: "₹8Cr+",
        statLabel: "SUBSIDIES",
        desc: "Identify and secure government subsidies and grants. Get up to 35% capital subsidy for your business.",
        features: ["Capital subsidies", "R&D grants", "Export incentives"],
        tags: ["CLCSS", "FURTI", "ASPIRE", "+1 MORE"],
        href: "/schemes",
        iconBg: "bg-teal-500",
        icon: "💰",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BusinessSolutions() {
    const { openEligibilityPopup } = usePopup();
    return (
        <section className="bg-slate-50 py-16">
            <div className="container-max">
                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-2">OUR EXPERTISE</p>
                    <h2 className="text-3xl md:text-4xl font-black text-[#1B4F8C]">
                        Complete Business Solutions
                    </h2>
                    <p className="mt-3 text-sm text-slate-500 max-w-lg mx-auto">
                        Strategic guidance and end-to-end support for Indian MSMEs and Startups
                    </p>
                    {/* Disbursed badge */}
                    <div className="mt-4 inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2">
                        <span className="text-xl font-black text-primary">₹45Cr+</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">DISBURSED</span>
                    </div>
                </div>

                {/* 3x2 Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {solutions.map((sol) => (
                        <motion.div
                            key={sol.title}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden"
                        >
                            {/* Top row: icon + stat + optional badge */}
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl ${sol.iconBg} flex items-center justify-center text-white text-xl shrink-0`}>
                                    {sol.icon}
                                </div>
                                <div className="text-right flex flex-col items-end gap-1">
                                    {"badge" in sol && sol.badge && (
                                        <span className="text-[9px] font-black uppercase tracking-widest bg-orange-500 text-white px-2.5 py-0.5 rounded-full">
                                            {sol.badge}
                                        </span>
                                    )}
                                    <p className="text-lg font-black text-[#1B4F8C] leading-tight">{sol.stat}</p>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{sol.statLabel}</p>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-black text-[#1B4F8C]">{sol.title}</h3>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-orange-500 mb-2">{sol.subtitle}</p>

                            {/* Description */}
                            <p className="text-xs text-slate-500 leading-relaxed mb-4">{sol.desc}</p>

                            {/* Features */}
                            <ul className="space-y-1.5 mb-4 flex-grow">
                                {sol.features.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                                        <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {sol.tags.map((tag) => (
                                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Learn More */}
                            <button
                                onClick={() => openEligibilityPopup(sol.title)}
                                className="inline-flex items-center gap-1 rounded-lg bg-[rgba(115,150,121,0.92)] text-white px-5 py-2.5 text-xs font-bold hover:bg-primary hover:text-[#1B4F8C] transition-all w-fit"
                            >
                                LEARN MORE →
                            </button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Need Help Bar */}
                <div className="mt-10 rounded-2xl bg-gradient-to-r from-[rgba(115,150,121,0.92)] to-[#162240] p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-black text-white">Need Help Choosing?</h3>
                        <p className="text-xs text-white/80 mt-1">Our experts will guide you to the best solution for your business.</p>
                    </div>
                    <button
                        onClick={() => openEligibilityPopup()}
                        className="inline-flex items-center gap-2 rounded-lg bg-white text-primary px-6 py-3 text-sm font-bold hover:bg-[#1B4F8C] hover:text-white transition-all shrink-0"
                    >
                        🎯 Get Free Consultation
                    </button>
                </div>

                {/* View All */}
                <div className="mt-6 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-600 font-semibold py-2.5 px-6 rounded-lg hover:border-[rgba(115,150,121,0.92)] hover:text-[#1B4F8C] transition-all text-sm"
                    >
                        View All Professional Services →
                    </Link>
                </div>
            </div>
        </section>
    );
}
