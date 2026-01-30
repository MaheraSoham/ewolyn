"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function EligibilityCard() {
    const router = useRouter();
    const [stage, setStage] = useState("Early");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            router.push("/eligibility-results");
        }, 1200);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 w-full max-w-[450px] mx-auto group"
        >
            {/* Ultra-Premium Glow Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-accent-green/30 via-cyan/20 to-brand-navy/30 rounded-[2.5rem] blur-2xl -z-10 group-hover:opacity-100 opacity-60 transition-opacity duration-700"></div>

            {/* Glassmorphic Container */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/95 backdrop-blur-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">

                {/* Visual Accent Top Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-brand-navy via-accent-green to-cyan"></div>

                {/* Header Section */}
                <div className="px-8 pt-8 pb-6 text-center">
                    <motion.h3
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl font-black text-brand-navy tracking-tight leading-tight"
                    >
                        Check <span className="text-accent-green">Eligibility</span>
                    </motion.h3>
                    <p className="mt-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Instant Funding Analysis</p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="px-8 pb-10 space-y-6">

                    {/* Business Selection */}
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Entity Type</label>
                        <div className="relative">
                            <select className="w-full appearance-none rounded-2xl border border-slate-100 bg-slate-50/50 px-5 py-3.5 text-sm text-brand-navy font-bold focus:border-accent-green focus:ring-4 focus:ring-accent-green/5 focus:outline-none transition-all cursor-pointer">
                                <option>Private Limited Company</option>
                                <option>Proprietorship Firm</option>
                                <option>LLP / Partnership</option>
                                <option>Trust / NGO</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-accent-green">
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Funding Amount */}
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Funding Required</label>
                        <div className="relative">
                            <select className="w-full appearance-none rounded-2xl border border-slate-100 bg-slate-50/50 px-5 py-3.5 text-sm text-brand-navy font-bold focus:border-accent-green focus:ring-4 focus:ring-accent-green/5 focus:outline-none transition-all cursor-pointer">
                                <option>Below ₹10 Lakhs</option>
                                <option>₹10L - ₹50L</option>
                                <option>₹50L - ₹2Cr</option>
                                <option>₹2Cr - ₹10Cr</option>
                                <option>Above ₹10 Crores</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-accent-green">
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Stage Selection - Modern Pill Toggle */}
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Growth Stage</label>
                        <div className="flex p-1.5 bg-slate-100/50 rounded-2xl border border-slate-100">
                            {["Idea", "Early", "Growth"].map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    onClick={() => setStage(s)}
                                    className={`flex-1 py-2.5 rounded-xl text-[11px] font-black transition-all duration-500 ${stage === s
                                        ? "bg-brand-navy text-white shadow-lg translate-y-[-1px]"
                                        : "text-slate-500 hover:text-brand-navy"
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Action Button - High Energy */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full group relative py-4 rounded-2xl font-black text-white transition-all overflow-hidden shadow-[0_12px_24px_-8px_rgba(34,197,94,0.5)] active:scale-95 ${loading ? 'bg-slate-300' : 'bg-accent-green hover:shadow-[0_16px_32px_-8px_rgba(34,197,94,0.6)]'}`}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2 text-sm uppercase tracking-widest">
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Analyzing...
                                    </>
                                ) : (
                                    <>
                                        Get Report Now
                                        <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                    </>
                                )}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                        </button>
                    </div>

                    {/* Trust Indicator */}
                    <div className="flex items-center justify-center gap-3 pt-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-slate-200 shadow-sm overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 text-[8px] font-bold text-slate-500 italic">EB</div>
                            ))}
                        </div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                            Joined by <span className="text-brand-navy">20,000+</span> Founders
                        </p>
                    </div>
                </form>

                {/* Bottom Decorative Circle */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-accent-green/5 rounded-full blur-3xl -z-10"></div>
            </div>
        </motion.div>
    );
}
