"use client";

import { useState, useEffect } from "react";

// Inline SVG Icons for better portability
const IconX = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
);

const IconSend = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
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

const IconTarget = ({ size = 14, className }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
);

const IconZap = ({ size = 14, className }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 14.899 13 2v9.101L9 11h11l-9 12.899V14.899h4Z" /></svg>
);

const IconShieldCheck = ({ size = 14, className }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
);

export default function ConsultationPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Show popup every time the user visits or refreshes
        setIsOpen(true);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Format message for WhatsApp
        const whatsappNumber = "919876543210";
        const message = `Hello Ewolyn Team, I would like to get a *Free Consultation*.

My Details:
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

Please get back to me. Thank you!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Simulate a short delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Open WhatsApp
        window.open(whatsappUrl, "_blank");

        // Auto close after success message
        setTimeout(() => {
            handleClose();
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in"
            onClick={handleClose}
        >
            <div
                className="relative w-full max-w-5xl overflow-hidden rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.4)] animate-fade-in-up border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Background Decoration */}
                <div className="absolute inset-0 bg-[#0f172a] z-0"></div>
                <div className="absolute inset-0 opacity-10 pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col md:flex-row min-h-[600px]">

                    {/* Left Side: Original Consultation Branding */}
                    <div className="w-full md:w-[45%] p-12 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-[#1B4F8C] via-[#0f172a] to-[#1B4F8C]">
                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                                Get <span className="text-accent-green">Free</span> <br />
                                <span className="text-evolyn-teal">Consultation</span>
                            </h2>
                            <p className="text-slate-300 text-xl leading-relaxed mb-12 max-sm:text-lg">
                                Share your details and our experts will get back to you within 24 hours with the best solution for your business needs.
                            </p>

                            <div className="space-y-6 md:space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all">
                                        <IconTarget size={28} className="text-crimson-light" />
                                    </div>
                                    <div>
                                        <div className="text-white text-xl md:text-2xl font-black mb-0.5 md:mb-1">1000+ Funded</div>
                                        <div className="text-white/40 text-xs md:text-sm font-bold uppercase tracking-wider">Trusted by Businesses</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all">
                                        <IconZap size={28} className="text-yellow-400" />
                                    </div>
                                    <div>
                                        <div className="text-white text-xl md:text-2xl font-black mb-0.5 md:mb-1">24hr Response</div>
                                        <div className="text-white/40 text-xs md:text-sm font-bold uppercase tracking-wider">Fast Expert Turnaround</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all">
                                        <IconShieldCheck size={28} className="text-accent-green" />
                                    </div>
                                    <div>
                                        <div className="text-white text-xl md:text-2xl font-black mb-0.5 md:mb-1">Expert Team</div>
                                        <div className="text-white/40 text-xs md:text-sm font-bold uppercase tracking-wider">Certified Professionals</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-evolyn-teal/10 rounded-full blur-[100px]"></div>
                        <div className="absolute top-20 -right-20 w-64 h-64 bg-accent-green/5 rounded-full blur-[80px]"></div>
                    </div>

                    {/* Right Side: Original Lead Form */}
                    <div className="w-full md:w-[55%] p-10 md:p-16 bg-[#161a3d]/95 backdrop-blur-2xl relative flex items-center">
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-8 right-8 md:top-10 md:right-10 p-2.5 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all border border-white/5"
                        >
                            <IconX size={24} />
                        </button>

                        {!isSubmitted ? (
                            <div className="w-full max-w-md mx-auto">
                                <div className="mb-8 md:mb-10">
                                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2 md:mb-3 tracking-tight">Reserve Your Slot</h2>
                                    <p className="text-white/50 text-base md:text-lg leading-relaxed">Fill the form below and start your growth journey today.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] ml-1">Your Name *</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20">
                                                <IconUser size={18} />
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Enter your full name"
                                                className="w-full pl-12 pr-4 py-4 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-evolyn-teal/50 focus:bg-white/[0.05] transition-all font-medium text-lg"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] ml-1">Email Address *</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20">
                                                <IconMail size={18} />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="your@email.com"
                                                className="w-full pl-12 pr-4 py-4 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-evolyn-teal/50 focus:bg-white/[0.05] transition-all font-medium text-lg"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] ml-1">Phone Number *</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20">
                                                <IconPhone size={18} />
                                            </div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="10-digit mobile number"
                                                className="w-full pl-12 pr-4 py-4 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-evolyn-teal/50 focus:bg-white/[0.05] transition-all font-medium text-lg"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 md:py-5 rounded-xl md:rounded-2xl bg-gradient-to-r from-accent-green to-green-600 shadow-[0_8px_30px_rgba(34,197,94,0.3)] text-white font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 mt-2 md:mt-4 uppercase tracking-[0.2em]"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-7 h-7 border-3 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
                                        ) : (
                                            <div className="flex items-center justify-center gap-3">
                                                <IconSend size={24} />
                                                Get Free Consultation
                                            </div>
                                        )}
                                    </button>

                                    <p className="text-[10px] text-white/20 text-center font-bold tracking-[0.1em] uppercase mt-4 md:mt-6">
                                        🔒 Your information is secure & will not be shared
                                    </p>
                                </form>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center w-full h-full text-center py-10 scale-110">
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-accent-green/20 rounded-full flex items-center justify-center mb-6 md:mb-8 border border-accent-green/30">
                                    <IconShieldCheck size={40} className="text-accent-green md:size-[48px]" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-white mb-3 md:mb-4 tracking-tight">Well Done!</h3>
                                <p className="text-white/60 text-lg md:text-xl leading-relaxed">Opening WhatsApp to connect you <br /> with our experts.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
