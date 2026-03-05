"use client";

import { useState } from "react";
import Image from "next/image";
import { usePopup } from "./PopupContext";

const IconX = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
);
const IconUser = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);
const IconMail = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);
const IconPhone = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const IconCheck = ({ size = 40, className }: { size?: number; className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
);
const IconArrow = () => (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
);

const setupCards = [
    {
        id: "business-registration",
        title: "Business Registration",
        desc: "Company formation & compliance",
        emoji: "🏢",
        image: "/business_registration_hero_premium_1769686804174.png",
        tag: "Popular",
        tagColor: "bg-blue-500",
    },
    {
        id: "tax-exemption",
        title: "Tax & Compliance",
        desc: "GST, income tax & TDS returns",
        emoji: "📊",
        image: "/tax_compliance_hero_premium.png",
        tag: "Save More",
        tagColor: "bg-emerald-500",
    },
    {
        id: "dpiit",
        title: "Certifications & IP",
        desc: "ISO, patents & trademarks",
        emoji: "✅",
        image: "/certifications_hero_image_premium_1769686077900.png",
        tag: "Govt. Backed",
        tagColor: "bg-amber-500",
    },
    {
        id: "digital-growth",
        title: "Marketing & Branding",
        desc: "Digital marketing solutions",
        emoji: "📣",
        image: "/marketing_branding_hero_premium_1769687063274.png",
        tag: "Growth",
        tagColor: "bg-pink-500",
    },
    {
        id: "scheme-benefit",
        title: "Grants & Funding",
        desc: "Government grants & schemes",
        emoji: "🏛️",
        image: "/government_grants_hero_premium_1769686253475.png",
        tag: "Free Money",
        tagColor: "bg-purple-500",
    },
    {
        id: "funding-roadmap",
        title: "CIBIL Assistance",
        desc: "Credit score improvement",
        emoji: "💳",
        image: "/cibil_assistance_hero_premium.png",
        tag: "Boost Score",
        tagColor: "bg-rose-500",
    },
];

/* ─── Eligibility Form ─── */
function EligibilityForm({ service, onClose }: { service: string; onClose: () => void }) {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const message = `Hello Ewolyn Team! I want to check my eligibility.\n\n*Service:* ${service || "General Enquiry"}\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n\nPlease get back to me. Thank you!`;
        await new Promise((r) => setTimeout(r, 800));
        setIsSubmitting(false);
        setIsSubmitted(true);
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
        setTimeout(onClose, 2000);
    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md" onClick={onClose} style={{ animation: "fadeIn 0.25s ease" }}>
            <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl shadow-2xl border border-white/10" onClick={(e) => e.stopPropagation()} style={{ animation: "slideUp 0.3s ease" }}>
                <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-sm border border-white/20">
                    <IconX size={18} />
                </button>
                <div className="flex flex-col md:flex-row min-h-[520px]">
                    {/* Left Panel */}
                    <div className="w-full md:w-[42%] relative overflow-hidden" style={{ background: "linear-gradient(160deg, #1B4F8C 0%, #0d2f57 60%, #0a1f3d 100%)" }}>
                        {/* Background image */}
                        <div className="absolute inset-0">
                            <Image src="/popup_hero_banner.png" alt="Ewolyn Team" fill className="object-cover opacity-20" />
                        </div>
                        {/* Dot grid */}
                        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "18px 18px" }} />
                        {/* Glow */}
                        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#2eb85c]/25 rounded-full blur-[90px]" />
                        <div className="absolute -top-16 -left-16 w-56 h-56 bg-blue-500/15 rounded-full blur-[80px]" />

                        <div className="relative z-10 flex flex-col justify-between h-full p-8">
                            {/* Header */}
                            <div>
                                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 border border-white/20 mb-4 backdrop-blur-sm">
                                    <span className="w-2 h-2 rounded-full bg-[#2eb85c] animate-pulse" />
                                    <span className="text-white/90 text-xs font-bold">Ewolyn · Active Now</span>
                                </div>
                                <h3 className="text-2xl font-black text-white mb-1">Talk to an Expert</h3>
                                <p className="text-white/50 text-sm">Free consultation for your business</p>

                                <div className="mt-8 space-y-4">
                                    {[
                                        { icon: "📍", label: "Location", value: "Nehru Nagar, Ahmedabad – 380015" },
                                        { icon: "📞", label: "Phone", value: "+91 98765 43210" },
                                        { icon: "✉️", label: "Email", value: "info@ewolyn.co.in" },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-start gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-base shrink-0 backdrop-blur-sm">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-white/40 text-[10px] uppercase tracking-wider font-bold">{item.label}</p>
                                                <p className="text-white text-sm font-semibold mt-0.5">{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Trust badges */}
                            <div className="mt-8 flex flex-wrap gap-2">
                                {["500+ Clients", "Pan India", "10+ Years"].map((badge) => (
                                    <span key={badge} className="text-[11px] text-white/70 bg-white/10 border border-white/15 rounded-full px-3 py-1 font-medium">
                                        ✓ {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="w-full md:w-[58%] bg-white p-8 md:p-10 flex flex-col justify-center">
                        {!isSubmitted ? (
                            <>
                                <div className="mb-6">
                                    <span className="inline-block text-xs font-bold text-[#2eb85c] bg-[#2eb85c]/10 rounded-full px-3 py-1 mb-3">Free Consultation</span>
                                    <h2 className="text-2xl font-black text-[#0a1628] mb-1">Check Your Eligibility</h2>
                                    <p className="text-sm text-slate-400">Our expert will contact you within 2 hours.</p>
                                    {service && (
                                        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
                                            <span className="w-2 h-2 rounded-full bg-[#2eb85c]" />
                                            Service: <span className="font-bold text-[#1B4F8C]">{service}</span>
                                        </div>
                                    )}
                                </div>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {[
                                        { label: "Full Name", type: "text", placeholder: "Enter your full name", key: "name", Icon: IconUser },
                                        { label: "Email Address", type: "email", placeholder: "your@email.com", key: "email", Icon: IconMail },
                                        { label: "Mobile Number", type: "tel", placeholder: "10-digit mobile number", key: "phone", Icon: IconPhone },
                                    ].map(({ label, type, placeholder, key, Icon }) => (
                                        <div key={key}>
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">{label} <span className="text-red-400">*</span></label>
                                            <div className="relative">
                                                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300"><Icon size={16} /></div>
                                                <input
                                                    type={type}
                                                    required
                                                    placeholder={placeholder}
                                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 font-medium focus:outline-none focus:border-[#2eb85c] focus:ring-2 focus:ring-[#2eb85c]/20 transition-all placeholder:text-slate-300"
                                                    value={formData[key as keyof typeof formData]}
                                                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    <button type="submit" disabled={isSubmitting} className="w-full py-3.5 rounded-xl font-black text-sm tracking-wide transition-all mt-2 text-white" style={{ background: "linear-gradient(135deg, #2eb85c 0%, #1da045 100%)", boxShadow: "0 4px 20px rgba(46,184,92,0.35)" }}>
                                        {isSubmitting
                                            ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                                            : "Get Free Consultation →"}
                                    </button>
                                    <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5 mt-1">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                        100% Private. No spam guaranteed.
                                    </p>
                                </form>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center text-center py-10">
                                <div className="w-20 h-20 bg-[#2eb85c]/10 rounded-full flex items-center justify-center mb-6 border border-[#2eb85c]/30">
                                    <IconCheck size={40} className="text-[#2eb85c]" />
                                </div>
                                <h3 className="text-2xl font-black text-[#0a1628] mb-2">You&apos;re Connected!</h3>
                                <p className="text-slate-500 text-sm">Opening WhatsApp to connect you with our experts.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─── Main Popup ─── */
export default function ConsultationPopup() {
    const { stage, selectedService, closePopup, openEligibilityPopup } = usePopup();

    if (stage === "closed") return null;

    if (stage === "eligibility") {
        return <EligibilityForm service={selectedService} onClose={closePopup} />;
    }

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-md"
            onClick={closePopup}
            style={{ animation: "fadeIn 0.25s ease" }}
        >
            <style>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes shimmer { 0%,100% { opacity:0.7; } 50% { opacity:1; } }
            `}</style>

            <div
                className="relative w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
                style={{ animation: "slideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
            >
                {/* Close Button */}
                <button
                    onClick={closePopup}
                    className="absolute top-3.5 right-3.5 z-30 w-8 h-8 bg-white/15 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-all border border-white/20 backdrop-blur-sm"
                >
                    <IconX size={15} />
                </button>

                {/* ── Hero Banner ── */}
                <div className="relative h-[130px] overflow-hidden" style={{ background: "linear-gradient(135deg, #0d2f57 0%, #1B4F8C 50%, #0d2f57 100%)" }}>
                    <Image src="/popup_hero_banner.png" alt="Ewolyn Business Consulting" fill className="object-cover opacity-30" />
                    {/* Dot grid */}
                    <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "16px 16px" }} />
                    {/* Glow blobs */}
                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#2eb85c]/30 rounded-full blur-[60px]" />
                    <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px]" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
                        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3.5 py-1.5 border border-white/20 mb-2 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-[#2eb85c] animate-pulse" />
                            <span className="text-white text-xs font-bold tracking-wide">EWOLYN · Free Consultation Available</span>
                        </div>
                        <h2 className="text-[22px] font-black text-white text-center leading-tight">
                            Grow Your Business with <span className="text-[#2eb85c]">Expert Support</span>
                        </h2>
                        <p className="text-white/60 text-[11px] mt-1">Choose a service to check your eligibility instantly</p>
                    </div>
                </div>

                {/* ── Service Cards Grid ── */}
                <div className="bg-[#f8fafc] p-4">
                    <div className="grid grid-cols-3 gap-2.5">
                        {setupCards.map((card) => (
                            <button
                                key={card.id}
                                onClick={() => openEligibilityPopup(card.title)}
                                className="group relative text-left rounded-2xl overflow-hidden border border-slate-200 hover:border-[#2eb85c]/50 hover:shadow-lg transition-all duration-300 bg-white shadow-sm"
                                style={{ transform: "translateZ(0)" }}
                            >
                                {/* Tag */}
                                <span className={`absolute top-2 right-2 z-10 text-[9px] font-black text-white rounded-full px-1.5 py-0.5 ${card.tagColor}`}>
                                    {card.tag}
                                </span>

                                {/* Card Image */}
                                <div className="relative h-[72px] overflow-hidden">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                    {/* Emoji */}
                                    <span className="absolute bottom-1.5 left-2 text-lg leading-none">{card.emoji}</span>
                                </div>

                                {/* Card Text */}
                                <div className="p-2.5 pb-3">
                                    <h4 className="text-[11px] font-black text-[#0a1628] leading-tight mb-0.5 group-hover:text-[#1B4F8C] transition-colors">
                                        {card.title}
                                    </h4>
                                    <p className="text-[9px] text-slate-400 leading-tight line-clamp-2">{card.desc}</p>
                                </div>

                                {/* Arrow on hover */}
                                <div className="absolute bottom-2.5 right-2.5 w-5 h-5 rounded-full bg-[#2eb85c] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 text-white">
                                    <IconArrow />
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Bottom CTA strip */}
                    <div className="mt-3 flex items-center justify-between bg-white rounded-2xl px-4 py-2.5 border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🚀</span>
                            <div>
                                <p className="text-[11px] font-black text-[#0a1628]">Not sure where to start?</p>
                                <p className="text-[10px] text-slate-400">Talk to an expert for free</p>
                            </div>
                        </div>
                        <button
                            onClick={() => openEligibilityPopup("General Enquiry")}
                            className="flex items-center gap-1.5 text-[11px] font-black text-white rounded-full px-3 py-1.5 transition-all hover:shadow-md"
                            style={{ background: "linear-gradient(135deg, #2eb85c 0%, #1da045 100%)" }}
                        >
                            Get Help <IconArrow />
                        </button>
                    </div>
                </div>

                {/* ── Footer ── */}
                <div className="bg-[#0d2f57] flex items-center justify-between px-5 py-2.5">
                    <p className="text-white font-black text-[12px]">
                        Humara Support. <span className="text-[#2eb85c]">Aapki Safalta.</span>
                    </p>
                    <div className="flex gap-1.5">
                        {["⭐", "⭐", "⭐", "⭐", "⭐"].map((s, i) => (
                            <span key={i} className="text-[10px]">{s}</span>
                        ))}
                        <span className="text-white/50 text-[10px] ml-1">500+ Reviews</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
