"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const serviceCategories = [
    "Select Service...",
    "PMEGP Scheme",
    "CGTMSE Guarantee",
    "Mudra Loan",
    "Stand-Up India",
    "Company Registration",
    "ISO Certification",
    "Digital Marketing",
    "Website Development",
    "Other",
];

export default function ContactCTA() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `Hello Ewolyn! I'm ${formData.name}. I'm interested in ${formData.service || "your services"}. Please call me at ${formData.phone}.`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, "_blank");
    };

    return (
        <section className="bg-[#113670] py-12 sm:py-20">
            <div className="container-max max-w-6xl">
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">

                    {/* ----- LEFT: Direct Connectivity ----- */}
                    <div className="lg:col-span-5 bg-[#0f2d5f] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xl border border-white/5">
                        <div>
                            <h2 className="text-3xl font-black text-white mb-3 tracking-tight">Direct Connectivity</h2>
                            <p className="text-base text-blue-100/80 mb-10 leading-relaxed">
                                Reach out to our senior advisors for immediate assistance regarding MSME funding & registration.
                            </p>

                            {/* Call Now Card */}
                            <div className="bg-[#1d4380] rounded-[1.25rem] p-5 mb-5 border border-white/5 shadow-inner flex items-stretch">
                                <div className="bg-[#ef6c00] text-white w-14 rounded-xl flex flex-col items-center justify-center shrink-0 shadow-sm mr-4">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
                                    </svg>
                                </div>
                                <div className="flex-grow flex flex-col justify-center">
                                    <p className="text-xs font-black uppercase tracking-widest text-blue-200 mb-2 mt-1">CALL NOW</p>
                                    <a href="tel:+919876543210" className="flex items-center justify-between group py-1 border-b border-white/10 mb-2 pb-2">
                                        <span className="text-lg font-black text-white">+91 98765 43210</span>
                                        <svg className="w-4 h-4 text-blue-300 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                    <a href="tel:+919876543210" className="flex items-center justify-between group py-1">
                                        <span className="text-lg font-black text-white">+91 98765 43210</span>
                                        <svg className="w-4 h-4 text-blue-300 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* WhatsApp Card */}
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-[#1d4380] rounded-[1.25rem] p-5 border border-white/5 shadow-inner flex items-center group cursor-pointer hover:bg-[#235099] transition-colors">
                                <div className="bg-[#2e7d32] text-white w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-sm mr-4">
                                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-blue-200/60 mb-0.5">WHATSAPP</p>
                                    <p className="text-xl font-black text-white">Chat with Experts</p>
                                </div>
                            </a>
                        </div>

                        {/* Bottom Row: Email & Location Cards */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-white rounded-[1.25rem] p-5 shadow-lg">
                                <div className="bg-[#ef6c00] text-white w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">EMAIL US</p>
                                <p className="text-xs font-black text-[#113670] mb-0.5">info@ewolyn.co.in</p>
                                <p className="text-xs text-slate-500 font-medium">Detailed Inquiry</p>
                            </div>
                            <div className="bg-white rounded-[1.25rem] p-5 shadow-lg">
                                <div className="bg-[#113670] text-white w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">LOCATION</p>
                                <p className="text-xs font-black text-[#113670] mb-0.5">Ahmedabad, Gujarat</p>
                                <p className="text-xs text-slate-500 font-medium">Serving Pan India</p>
                            </div>
                        </div>
                    </div>

                    {/* ----- RIGHT: Request Expert Callback Form ----- */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-black text-[#113670] mb-2 tracking-tight">Request Expert Callback</h2>
                            <p className="text-sm font-medium text-slate-500 mb-10">
                                Fill out the form and we'll analyze your requirements before calling.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-xs font-black uppercase tracking-widest text-[#113670] mb-2 block">YOUR FULL NAME</label>
                                        <input
                                            type="text"
                                            placeholder="Jane Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full rounded-xl bg-slate-50 border-none px-5 py-4 text-sm font-bold text-[#113670] placeholder-slate-400 focus:ring-2 focus:ring-[#ef6c00] outline-none transition-all shadow-inner"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-black uppercase tracking-widest text-[#113670] mb-2 block">MOBILE NUMBER</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full rounded-xl bg-slate-50 border-none px-5 py-4 text-sm font-bold text-[#113670] placeholder-slate-400 focus:ring-2 focus:ring-[#ef6c00] outline-none transition-all shadow-inner"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-black uppercase tracking-widest text-[#113670] mb-2 block">CHOOSE SERVICE CATEGORY</label>
                                    <select
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        className="w-full rounded-xl bg-slate-50 border-none px-5 py-4 text-sm font-bold text-[#113670] focus:ring-2 focus:ring-[#ef6c00] outline-none transition-all shadow-inner appearance-none cursor-pointer"
                                    >
                                        {serviceCategories.map((cat) => (
                                            <option key={cat} value={cat === "Select Service..." ? "" : cat} className="font-medium text-slate-800">
                                                {cat}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full rounded-xl bg-[#ef6c00] text-white font-black py-4 text-lg hover:bg-[#d86000] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ef6c00]/30 transition-all flex items-center justify-center gap-2"
                                    >
                                        Confirm Callback Request
                                        <svg className="w-5 h-5 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Bottom trust indicators */}
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs font-black text-slate-500 mt-10 tracking-widest uppercase">
                            <span className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                100% SECURE
                            </span>
                            <span className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                VERIFIED EXPERTS
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
