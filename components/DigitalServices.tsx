"use client";
import { motion } from "framer-motion";
import { usePopup } from "./PopupContext";

const digitalServices = [
    {
        title: "CRM Software",
        subtitle: "CUSTOMER MANAGEMENT",
        stat: "3x",
        statLabel: "FASTER SALES",
        desc: "Streamline customer relationships with custom CRM solutions. Track leads, automate sales pipeline, and...",
        features: [
            "Lead tracking & automation",
            "Sales pipeline management",
            "Customer analytics dashboard",
        ],
        tags: ["ZOHO CRM", "CUSTOM SOLUTIONS", "INTEGRATION API"],
        buttonColor: "bg-[#025a6e]",
        iconColor: "text-[#025a6e]",
        statColor: "text-[#025a6e]",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        href: "/services",
    },
    {
        title: "Digital Marketing",
        subtitle: "360° ONLINE PRESENCE",
        stat: "5x",
        statLabel: "MORE LEADS",
        desc: "Complete digital marketing solutions from SEO to paid ads. Drive traffic, generate leads, and grow your bran...",
        features: [
            "SEO & content marketing",
            "Google/Facebook ads",
            "Social media management",
        ],
        tags: ["GOOGLE ADS", "META BUSINESS", "SEO TOOLS"],
        buttonColor: "bg-[#a855f7]",
        iconColor: "text-[#a855f7]",
        statColor: "text-[#a855f7]",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        href: "/services",
    },
    {
        title: "Email Marketing",
        subtitle: "AUTOMATED CAMPAIGNS",
        stat: "40%",
        statLabel: "OPEN RATE",
        desc: "Design, automate, and track email campaigns that convert. Build customer relationships with...",
        features: [
            "Automated email sequences",
            "Template design & testing",
            "Performance analytics",
        ],
        tags: ["MAILCHIMP", "SENDGRID", "CUSTOM SMTP"],
        buttonColor: "bg-[#22c55e]",
        iconColor: "text-[#22c55e]",
        statColor: "text-[#22c55e]",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        href: "/services",
    },
    {
        title: "WhatsApp Marketing",
        subtitle: "DIRECT CUSTOMER REACH",
        stat: "98%",
        statLabel: "OPEN RATE",
        desc: "Engage customers on WhatsApp with bulk messaging, chatbots, and automated responses. 90% open rat...",
        features: [
            "Bulk messaging campaigns",
            "AI chatbot integration",
            "Click-to-WhatsApp ads",
        ],
        tags: ["WHATSAPP BUSINESS API", "CHATBOTS", "ANALYTICS"],
        buttonColor: "bg-[#0d9488]",
        iconColor: "text-[#0d9488]",
        statColor: "text-[#0d9488]",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        href: "/services",
    },
    {
        title: "Website Development",
        subtitle: "MODERN & RESPONSIVE",
        stat: "<3s",
        statLabel: "LOAD TIME",
        desc: "Professional websites and web applications built with latest technologies. Fast, secure, and...",
        features: [
            "Custom web development",
            "E-commerce platforms",
            "Mobile-responsive design",
        ],
        tags: ["REACT/NEXT.JS", "WORDPRESS", "SHOPIFY"],
        buttonColor: "bg-[#22c55e]",
        iconColor: "text-[#22c55e]",
        statColor: "text-[#22c55e]",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        href: "/services",
    },
    {
        title: "Mobile App Development",
        subtitle: "IOS & ANDROID",
        stat: "4.8★",
        statLabel: "AVG RATING",
        desc: "Native and cross-platform mobile apps for your business. Seamless user experience across all devices.",
        features: [
            "Native & hybrid apps",
            "App store optimization",
            "Push notification system",
        ],
        tags: ["REACT NATIVE", "FLUTTER", "NATIVE IOS/ANDROID"],
        buttonColor: "bg-[#ef4444]",
        iconColor: "text-[#ef4444]",
        statColor: "text-[#ef4444]",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        href: "/services",
    },
    {
        title: "SEO Optimization",
        subtitle: "RANK HIGHER ON GOOGLE",
        stat: "Top 3",
        statLabel: "RANKINGS",
        desc: "Comprehensive SEO services to improve search rankings. On-page, off-page, and technical SEO expertise.",
        features: [
            "Keyword research & strategy",
            "On-page optimization",
            "Link building & content",
        ],
        tags: ["GOOGLE SEARCH CONSOLE", "AHREFS", "SEMRUSH"],
        buttonColor: "bg-[#6366f1]",
        iconColor: "text-[#6366f1]",
        statColor: "text-[#6366f1]",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        href: "/services",
    },
    {
        title: "Social Media Marketing",
        subtitle: "BUILD YOUR BRAND",
        stat: "10x",
        statLabel: "ENGAGEMENT",
        desc: "Grow your social media presence with engaging content, influencer partnerships, and targeted...",
        features: [
            "Content creation & posting",
            "Influencer collaborations",
            "Paid social campaigns",
        ],
        tags: ["INSTAGRAM", "LINKEDIN", "FACEBOOK"],
        buttonColor: "bg-[#0ea5e9]",
        iconColor: "text-[#0ea5e9]",
        statColor: "text-[#0ea5e9]",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
        ),
        href: "/services",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DigitalServices() {
    const { openEligibilityPopup } = usePopup();
    return (
        <section className="bg-[rgba(55,175,225,0.95)] py-20 pb-24">
            <div className="container-max">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold text-white uppercase tracking-widest mb-4">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        DIGITAL TRANSFORMATION
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                        Scale Your Business <span className="text-white">Digitally</span>
                    </h2>
                    <p className="text-base text-white/95 max-w-xl mx-auto">
                        End-to-end digital solutions designed to improve brand visibility and customer acquisition for MSMEs.
                    </p>
                </div>

                {/* 4x2 Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {digitalServices.map((svc) => (
                        <motion.div
                            key={svc.title}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
                        >
                            {/* Top: Icon + Stat (flex-between) */}
                            <div className="flex items-start justify-between mb-8">
                                <div className={`p-2 rounded-xl bg-white/50 ring-1 ring-slate-100 shadow-sm ${svc.iconColor}`}>
                                    {svc.icon}
                                </div>
                                <div className="text-right">
                                    <p className={`text-2xl font-black tracking-tighter ${svc.statColor} leading-none mb-1`}>{svc.stat}</p>
                                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest">{svc.statLabel}</p>
                                </div>
                            </div>

                            {/* Title & Subtitle */}
                            <h3 className="text-xl font-black text-[#1B4F8C] leading-tight mb-1">
                                {svc.title}
                            </h3>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                                {svc.subtitle}
                            </p>

                            {/* Description */}
                            <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                                {svc.desc}
                            </p>

                            {/* Features with blue-ish checks */}
                            <ul className="space-y-2.5 mb-8">
                                {svc.features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <svg
                                            className="w-3.5 h-3.5 text-[#1B4F8C] shrink-0 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={3}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-xs font-black text-[#1B4F8C] leading-tight">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Spacing to push bottom elements down */}
                            <div className="flex-grow"></div>

                            {/* Tags (light pale pills with colored text matching button) */}
                            <div className="flex flex-wrap gap-1.5 mb-6">
                                {svc.tags.map((t, i) => (
                                    <span
                                        key={i}
                                        className={`text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-md ${svc.iconColor.replace('text-', 'bg-').replace(']', '/10]')}`}
                                        style={{ backgroundColor: `${svc.buttonColor.replace('bg-[', '').replace(']', '')}15` }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Button */}
                            <button
                                onClick={() => openEligibilityPopup(svc.title)}
                                className={`w-full flex items-center justify-center gap-2 rounded-xl ${svc.buttonColor} text-white py-3.5 text-xs font-black hover:opacity-90 transition-opacity`}
                            >
                                LEARN MORE
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
