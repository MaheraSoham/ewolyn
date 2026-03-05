"use client";

import { useState } from "react";
import { usePopup } from "./PopupContext";

const IconX = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
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
const IconShieldCheck = ({ size = 40, className }: { size?: number; className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
);

const setupCards = [
    { id: "business-registration", title: "Business Registration", desc: "Set the right registration so your business is recognized and ready for next steps.", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { id: "tax-exemption", title: "80-Lac Tax Exemption", desc: "Prepare your 80-IAC readiness with the right eligibility path and documents.", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" /></svg> },
    { id: "dpiit", title: "DPIIT Startup Recognition", desc: "Prepare and file your DPIIT application with the right documents.", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg> },
    { id: "digital-growth", title: "Digital Growth Boost", desc: "Build a strong digital presence that supports trust and steady enquiries.", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
    { id: "scheme-benefit", title: "Scheme & Benefit Fit Check", desc: "Identify MSME and government schemes that fit your business.", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg> },
    { id: "funding-roadmap", title: "Funding Readiness Roadmap", desc: "Build a simple plan before you approach banks, grants, or investors.", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg> },
];

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
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-md animate-fade-in" onClick={onClose}>
            <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl shadow-2xl border border-white/10 animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all">
                    <IconX size={20} />
                </button>
                <div className="flex flex-col md:flex-row min-h-[500px]">
                    <div className="w-full md:w-[42%] relative overflow-hidden flex flex-col justify-between p-8" style={{ background: "linear-gradient(160deg, #3b3d8f 0%, #1B4F8C 50%, #312e81 100%)" }}>
                        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "18px 18px" }} />
                        <div className="relative z-10">
                            <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-2">OUR OFFICE</p>
                            <h3 className="text-3xl font-black text-white mb-8">Gujarat</h3>
                            <div className="relative">
                                <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-white/20 z-0" />
                                <div className="relative z-10 flex items-center gap-4 mb-6">
                                    <div className="w-9 h-9 rounded-full bg-[#2eb85c] flex items-center justify-center shrink-0 border-2 border-white/30 shadow-lg">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div><p className="text-white font-black text-base">Location: Ahmedabad</p><p className="text-white/50 text-xs mt-0.5">Nehru Nagar, Gujarat – 380015</p></div>
                                </div>
                                <div className="relative z-10 flex items-center gap-4 mb-6">
                                    <div className="w-9 h-9 rounded-full bg-[#1e3a6b] flex items-center justify-center shrink-0 border-2 border-white/20 shadow-lg">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div><p className="text-white font-black text-base">+91 98765 43210</p><p className="text-white/50 text-xs mt-0.5">Mon–Sat, 9 AM – 6 PM IST</p></div>
                                </div>
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="w-9 h-9 rounded-full bg-[#0d9488] flex items-center justify-center shrink-0 border-2 border-white/20 shadow-lg">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div><p className="text-white font-black text-base">info@ewolyn.co.in</p><p className="text-white/50 text-xs mt-0.5">Priority support inbox</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10 mt-6">
                            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20">
                                <span className="w-2 h-2 rounded-full bg-[#2eb85c] animate-pulse" />
                                <span className="text-white/80 text-xs font-bold">Serving Pan India</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#2eb85c]/20 rounded-full blur-[80px]" />
                    </div>
                    <div className="w-full md:w-[58%] bg-white p-8 md:p-10 flex flex-col justify-center">
                        {!isSubmitted ? (
                            <>
                                <div className="mb-6">
                                    <h2 className="text-2xl font-black text-[#0a1628] mb-1">Check Your Eligibility</h2>
                                    <p className="text-sm font-bold text-[#2eb85c]">Get Instant Access</p>
                                    {service && (<p className="mt-2 text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">Service: <span className="font-bold text-[#1B4F8C]">{service}</span></p>)}
                                </div>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">Full Name <span className="text-red-500">*</span></label>
                                        <div className="relative"><div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300"><IconUser size={16} /></div><input type="text" required placeholder="Enter your name" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 font-medium focus:outline-none focus:border-[#2eb85c] focus:ring-1 focus:ring-[#2eb85c] transition-all" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} /></div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">Email <span className="text-red-500">*</span></label>
                                        <div className="relative"><div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300"><IconMail size={16} /></div><input type="email" required placeholder="your@email.com" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 font-medium focus:outline-none focus:border-[#2eb85c] focus:ring-1 focus:ring-[#2eb85c] transition-all" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">Phone <span className="text-red-500">*</span></label>
                                        <div className="relative"><div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300"><IconPhone size={16} /></div><input type="tel" required placeholder="10-digit mobile" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 font-medium focus:outline-none focus:border-[#2eb85c] focus:ring-1 focus:ring-[#2eb85c] transition-all" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} /></div>
                                    </div>
                                    <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl bg-[#2eb85c] hover:bg-[#28a550] text-white font-black text-base tracking-wide transition-all hover:shadow-lg hover:shadow-[#2eb85c]/30 disabled:opacity-70 mt-2">
                                        {isSubmitting ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" /> : "Get Offer Now →"}
                                    </button>
                                    <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5 mt-1">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                        We respect your privacy. No spam guaranteed.
                                    </p>
                                </form>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center text-center py-10">
                                <div className="w-20 h-20 bg-[#2eb85c]/10 rounded-full flex items-center justify-center mb-6 border border-[#2eb85c]/30">
                                    <IconShieldCheck size={40} className="text-[#2eb85c]" />
                                </div>
                                <h3 className="text-2xl font-black text-[#0a1628] mb-2">You are connected!</h3>
                                <p className="text-slate-500 text-sm">Opening WhatsApp to connect you with our experts.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ConsultationPopup() {
    const { stage, selectedService, closePopup, openEligibilityPopup } = usePopup();

    if (stage === "closed") return null;

    if (stage === "eligibility") {
        return <EligibilityForm service={selectedService} onClose={closePopup} />;
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in" onClick={closePopup}>
            <div className="relative w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl border border-white/10 animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
                <button onClick={closePopup} className="absolute top-3 right-3 z-20 w-8 h-8 bg-white text-[#1B4F8C] rounded-full flex items-center justify-center hover:bg-slate-100 transition-all shadow-md font-bold">
                    <IconX size={16} />
                </button>
                <div className="relative overflow-hidden px-5 pt-4 pb-3 text-center" style={{ background: "linear-gradient(135deg, #1B4F8C 0%, #0d2f57 60%, #1B4F8C 100%)" }}>
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                    <div className="relative z-10 mb-2 flex justify-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 border border-white/20">
                            <span className="text-[#2eb85c] font-black text-sm">&#9889;</span>
                            <span className="text-white font-black text-sm tracking-wide">EWOLYN</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-black text-white tracking-tight relative z-10">EWOLYN SETUP</h2>
                    <p className="text-[#a7f3d0] text-[10px] font-bold uppercase tracking-[0.2em] mt-1 relative z-10">Founder-Ready Setup for Growth and Funding</p>
                </div>
                <div className="bg-white p-3">
                    <div className="grid grid-cols-2 gap-2">
                        {setupCards.map((card) => (
                            <button key={card.id} onClick={() => openEligibilityPopup(card.title)} className="group text-left p-2.5 rounded-xl border border-slate-100 hover:border-[#2eb85c]/40 hover:bg-[#2eb85c]/5 transition-all duration-200 shadow-sm hover:shadow-md">
                                <div className="w-8 h-8 rounded-full bg-[#e8f5ee] border-2 border-[#2eb85c]/30 flex items-center justify-center text-[#1B4F8C] group-hover:bg-[#2eb85c] group-hover:text-white group-hover:border-[#2eb85c] transition-all mb-1.5 [&>svg]:w-4 [&>svg]:h-4">
                                    {card.icon}
                                </div>
                                <h4 className="text-xs font-black text-[#0a1628] leading-tight">{card.title}</h4>
                            </button>
                        ))}
                    </div>
                    <div className="mt-3 text-center">
                        <p className="text-[10px] font-bold text-[#1B4F8C] uppercase tracking-wider border border-[#1B4F8C]/20 rounded-full px-4 py-1.5 inline-block">Click on a card to apply</p>
                    </div>
                </div>
                <div className="bg-[#0d2f57] text-center py-3 px-5">
                    <p className="text-white font-black text-sm">Humara Support. <span className="text-[#2eb85c]">Aapki Safalta.</span></p>
                    <p className="text-[#a7f3d0]/60 text-[11px] mt-0.5">Connect with the Ewolyn Team</p>
                </div>
            </div>
        </div>
    );
}
