"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const matchedSchemes = [
    {
        title: "PMEGP (Government Grant)",
        matchScore: 98,
        amount: "Up to ₹50 Lakhs",
        subsidy: "15% to 35%",
        tenure: "7 Years",
        special: "New units only",
        category: "Grant / Loan",
        benefits: [
            "Bank-financed loan with subsidy",
            "Minimal personal contribution",
            "No third-party guarantee"
        ],
        isPopular: true,
        icon: "🏦"
    },
    {
        title: "MUDRA Loan Scheme",
        matchScore: 95,
        amount: "Up to ₹10 Lakhs",
        interest: "8.05% onwards",
        tenure: "5-7 Years",
        special: "Microunits focal",
        category: "Working Capital",
        benefits: [
            "Zero collateral required",
            "Fast-track processing",
            "Shishu, Kishore, Tarun categories"
        ],
        icon: "📋"
    },
    {
        title: "CGTMSE Guarantee",
        matchScore: 88,
        amount: "Up to ₹5 Crores",
        guarantee: "75% to 85%",
        tenure: "Flexible",
        special: "Collateral-free",
        category: "Term Loan",
        benefits: [
            "No collateral or 3rd party",
            "Enterprise expansion focal",
            "Wider bank eligibility"
        ],
        icon: "🛡️"
    },
    {
        title: "Startup India Seed Fund",
        matchScore: 82,
        amount: "Up to ₹50 Lakhs",
        type: "Equity / Grant",
        stage: "Early Stage",
        special: "DPIIT Registered",
        category: "Seed Funding",
        benefits: [
            "No interest on grant portion",
            "Mentorship & incubation",
            "Prototype to market support"
        ],
        icon: "🚀"
    }
];

export default function EligibilityResults() {
    const [loading, setLoading] = useState(true);
    const [showConfetti, setShowConfetti] = useState(false);
    const [selectedScheme, setSelectedScheme] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setShowConfetti(true);
        }, 1800);
        return () => clearTimeout(timer);
    }, []);

    const openModal = (scheme: any) => {
        setSelectedScheme(scheme);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedScheme(null);
        setIsSubmitted(false);
        document.body.style.overflow = "unset";
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get("name") as string;
        const phone = formData.get("phone") as string;
        const email = formData.get("email") as string;
        const company = formData.get("company") as string;
        const requirements = formData.get("requirements") as string;

        // WhatsApp number and message formatting
        const whatsappNumber = "919876543210";
        const message = `Hello Ewolyn Team, I would like to apply for *${selectedScheme.title}*.\n\n*My Details:*\n👤 *Name:* ${name}\n📱 *Mobile:* ${phone}\n📧 *Email:* ${email}\n🏢 *Company:* ${company || 'N/A'}\n📝 *Requirements:* ${requirements || 'N/A'}\n\nPlease guide me with the further process.`;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Simulate a brief loading state before redirect
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            window.open(whatsappUrl, '_blank');
        }, 1200);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-brand-navy flex flex-col items-center justify-center relative overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-accent-green/40 rounded-full"
                        animate={{
                            y: [0, -600],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: i * 0.4
                        }}
                        style={{ bottom: -10, left: `${15 + i * 15}%` }}
                    />
                ))}

                <div className="relative z-10 text-center">
                    <div className="relative w-20 h-20 mx-auto mb-8">
                        <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
                        <motion.div
                            className="absolute inset-0 border-4 border-accent-green border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        ></motion.div>
                    </div>
                    <h2 className="text-white font-bold text-2xl mb-2 tracking-tight">Processing Excellence</h2>
                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em]">Ewolyn AI Mapping Active</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-dark-deep text-white selection:bg-accent-green/30">
            <Navbar />

            <main className="pb-24">
                <section className="hero-navy-gradient pt-32 pb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[120px]"></div>

                    <div className="container-max relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-6"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="inline-flex items-center gap-2 bg-accent-green/10 text-accent-green px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest border border-accent-green/20"
                                >
                                    <span className="w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse" />
                                    Eligibility Verified ✓
                                </motion.div>

                                <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tighter">
                                    <span className="text-accent-green">Congratulations!</span><br />
                                    <span className="text-white">You're Eligible</span>
                                </h1>

                                <p className="text-gray-300 text-xl leading-relaxed max-w-xl">
                                    Our AI matching engine has identified <span className="text-accent-green font-bold">{matchedSchemes.length} priority schemes</span> that match your business profile perfectly.
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {["Bank Linkage", "Subsidy Focus", "Zero Upfront Fee"].map(tag => (
                                        <span key={tag} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-[11px] font-bold text-slate-300 border border-white/10">
                                            <svg className="w-3.5 h-3.5 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <Link href="#personalized-options">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="btn-hero-green"
                                        >
                                            View Matched Options
                                        </motion.button>
                                    </Link>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-5">
                                {[
                                    { label: "High Match", val: "4", icon: "🟢", color: "from-accent-green/20 to-accent-green/5", border: "border-accent-green/20" },
                                    { label: "Max Funding", val: "₹5Cr", icon: "💰", color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/20" },
                                    { label: "Direct Approval", val: "48hrs", icon: "⚡", color: "from-cyan-500/20 to-cyan-500/5", border: "border-cyan-500/20" },
                                    { label: "Active Support", val: "24/7", icon: "🤝", color: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/20" }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        className={`bg-gradient-to-br ${stat.color} ${stat.border} border rounded-[2rem] p-8 backdrop-blur-md relative overflow-hidden group`}
                                    >
                                        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform w-fit">{stat.icon}</div>
                                        <div className="text-3xl font-bold mb-1 text-white">{stat.val}</div>
                                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-20 bg-slate-50">
                    <div className="container-max pb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-brand-navy border border-accent-green/20 rounded-2xl p-6 mb-20 flex flex-col md:flex-row items-center justify-center gap-4 text-center"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">📢</span>
                                <p className="text-sm font-semibold">
                                    <span className="text-accent-green">Priority Window Open:</span> <span className="text-white">Our panel of experts can fast-track your PMEGP/MSME application today.</span>
                                </p>
                            </div>
                            <Link href="/contact" className="text-accent-green font-black text-sm hover:underline">Book Free Call →</Link>
                        </motion.div>

                        <div id="personalized-options" className="scroll-mt-32">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                                        Your <span className="text-accent-green">Custom</span> Funding Plan
                                    </h2>
                                    <p className="text-gray-400 text-lg">Detailed analysis of matched government initiatives</p>
                                </div>
                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                    <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" /> Live Analysis
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {matchedSchemes.map((scheme, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + idx * 0.1 }}
                                        onClick={() => openModal(scheme)}
                                        className="bg-white rounded-[1.5rem] p-6 relative group border-2 border-slate-100 hover:border-accent-green hover:shadow-xl transition-all flex flex-col h-full overflow-hidden shadow-lg cursor-pointer"
                                    >
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent-green/5 rounded-full blur-2xl -z-10"></div>

                                        {scheme.isPopular && (
                                            <div className="absolute top-5 right-6 bg-accent-green text-white text-[7px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest shadow-md">
                                                Best Match
                                            </div>
                                        )}

                                        <div className="flex gap-4 mb-5">
                                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-2xl border border-slate-200 group-hover:bg-accent-green group-hover:text-white group-hover:border-accent-green transition-all duration-500">
                                                {scheme.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold mb-1 leading-tight text-brand-navy">{scheme.title}</h3>
                                                <div className="inline-flex items-center gap-2 bg-accent-green/10 text-accent-green text-[8px] font-black px-2 py-0.5 rounded-md border border-accent-green/20">
                                                    ELITE MATCH
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-x-3 gap-y-4 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                            <div>
                                                <div className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mb-1">Max Amount</div>
                                                <div className="text-sm font-black text-brand-navy">{scheme.amount}</div>
                                            </div>
                                            <div>
                                                <div className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mb-1">{scheme.subsidy ? 'Subsidy' : scheme.stage ? 'Stage' : 'ROI'}</div>
                                                <div className="text-sm font-black text-brand-navy">{scheme.subsidy || scheme.stage || scheme.interest}</div>
                                            </div>
                                            <div>
                                                <div className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mb-1">Tenure</div>
                                                <div className="text-sm font-black text-brand-navy">{scheme.tenure}</div>
                                            </div>
                                            <div>
                                                <div className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mb-1">Advantage</div>
                                                <div className="text-sm font-black text-accent-green">{scheme.special}</div>
                                            </div>
                                        </div>

                                        <div className="mb-6 flex-1">
                                            <ul className="space-y-2">
                                                {scheme.benefits.map((benefit, bidx) => (
                                                    <li key={bidx} className="flex items-start gap-2 text-[11px] text-slate-600 leading-tight font-semibold">
                                                        <div className="mt-1 w-1 h-1 rounded-full bg-accent-green" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-auto">
                                            <motion.button
                                                whileHover={{ y: -3 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full bg-brand-navy hover:bg-accent-green text-white py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2"
                                            >
                                                Enroll Now
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-24 p-12 md:p-16 bg-brand-navy rounded-[3rem] shadow-[0_20px_50px_rgba(27,79,140,0.3)] flex flex-col md:flex-row items-center justify-between gap-10 border border-white/10"
                        >
                            <div className="space-y-4 text-center md:text-left">
                                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">Ready to take the <br /><span className="text-accent-green">next step?</span></h3>
                                <p className="text-blue-100/70 text-lg max-w-md font-medium">Join 20,000+ businesses who secured their future via Ewolyn expert guidance.</p>
                            </div>
                            <div className="flex flex-col items-center gap-6">
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-accent-green hover:bg-white hover:text-accent-green text-white px-12 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all duration-300"
                                    >
                                        Get Priority Consultation
                                    </motion.button>
                                </Link>
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-navy bg-slate-200" />
                                        ))}
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] text-accent-green font-black uppercase tracking-widest">Trusted MSMEs</div>
                                        <div className="text-[9px] text-white/50 font-bold uppercase tracking-tight">Across 28+ Industries</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Popup Application Modal */}
            <AnimatePresence>
                {isModalOpen && selectedScheme && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white z-50"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-brand-navy transition-colors hover:bg-slate-100 z-10"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="p-8 md:p-10">
                                <AnimatePresence mode="wait">
                                    {!isSubmitted ? (
                                        <motion.div
                                            key="form"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                        >
                                            <div className="mb-8">
                                                <h3 className="text-2xl font-black text-brand-navy mb-2 leading-tight">Apply for {selectedScheme.title}</h3>
                                                <p className="text-slate-500 text-sm leading-relaxed">Fill this quick form and our expert will guide you through the entire process</p>
                                            </div>

                                            <form className="space-y-4" onSubmit={handleSubmit}>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                                                        <input
                                                            required
                                                            name="name"
                                                            type="text"
                                                            placeholder="Enter your name"
                                                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all outline-none text-brand-navy"
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Mobile Number</label>
                                                        <input
                                                            required
                                                            name="phone"
                                                            type="tel"
                                                            pattern="[0-9]{10}"
                                                            placeholder="10-digit number"
                                                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all outline-none text-brand-navy"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                                                    <input
                                                        required
                                                        name="email"
                                                        type="email"
                                                        placeholder="your@email.com"
                                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all outline-none text-brand-navy"
                                                    />
                                                </div>

                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Company Name</label>
                                                    <input
                                                        name="company"
                                                        type="text"
                                                        placeholder="Your business name (optional)"
                                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all outline-none text-brand-navy"
                                                    />
                                                </div>

                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Additional Requirements</label>
                                                    <textarea
                                                        name="requirements"
                                                        rows={3}
                                                        placeholder="Any specific requirements or questions?"
                                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all outline-none resize-none text-brand-navy"
                                                    />
                                                </div>

                                                <motion.button
                                                    disabled={isSubmitting}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className={`w-full ${isSubmitting ? 'bg-accent-green/50 cursor-not-allowed' : 'bg-brand-navy hover:bg-accent-green'} text-white py-4 rounded-xl font-black text-sm shadow-xl flex items-center justify-center gap-3 transition-all mt-6`}
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                            Submitting...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            Submit Application
                                                        </>
                                                    )}
                                                </motion.button>

                                                <div className="text-center pt-2">
                                                    <p className="text-[10px] text-slate-400 font-medium flex items-center justify-center gap-2">
                                                        <svg className="w-3 h-3 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                        </svg>
                                                        Your information is 100% secure and encrypted
                                                    </p>
                                                </div>
                                            </form>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-10"
                                        >
                                            <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <motion.svg
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.2 }}
                                                    className="w-10 h-10 text-accent-green"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </motion.svg>
                                            </div>
                                            <h3 className="text-2xl font-black text-brand-navy mb-2">Application Received!</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed">
                                                Thank you for applying. An Ewolyn expert will contact you within the next 24 hours.
                                            </p>
                                            <button
                                                onClick={closeModal}
                                                className="mt-8 text-accent-green font-bold text-sm hover:underline"
                                            >
                                                Close Window
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />

            <AnimatePresence>
                {showConfetti && (
                    <div className="fixed inset-0 pointer-events-none z-50">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 0, scale: 0 }}
                                animate={{
                                    opacity: [0, 1, 0],
                                    y: -400 - Math.random() * 400,
                                    x: (Math.random() - 0.5) * 1000,
                                    scale: Math.random() * 1.5,
                                    rotate: Math.random() * 360
                                }}
                                transition={{ duration: 4, delay: Math.random() * 0.8 }}
                                className="absolute text-4xl"
                                style={{ top: '90%', left: '50%' }}
                            >
                                {['💰', '✨', '🏆', '🚀'][i % 4]}
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
