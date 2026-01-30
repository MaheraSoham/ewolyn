"use client";

import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { company } from "@/lib/content";
import { motion } from "framer-motion";
import { useState } from "react";

const faqData = [
    {
        question: "How long does the funding process take?",
        answer: "Timelines vary by scheme. MUDRA loans can take 7–10 days, while larger PMEGP or CGTMSE applications may take 30–45 days. Our readiness support significantly speeds up this process."
    },
    {
        question: "Do you guarantee funding approval?",
        answer: "While no one can guarantee government approvals, our expert documentation and eligibility mapping result in a 95% success rate for eligible businesses."
    },
    {
        question: "Is there a consultation fee?",
        answer: "Our initial funding eligibility check and basic consultation are free. We charge a service fee only for detailed project reports (DPR) and application processing."
    },
];

export default function ContactContent() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');

        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get("name") as string;
        const phone = formData.get("phone") as string;
        const email = formData.get("email") as string;
        const type = formData.get("type") as string;
        const messageVal = formData.get("message") as string;

        // WhatsApp number and message formatting
        const whatsappNumber = "919876543210";
        const message = `Hello Ewolyn Team, I have an inquiry regarding *${type}*.\n\n*My Details:*\n👤 *Name:* ${name}\n📱 *Mobile:* ${phone}\n📧 *Email:* ${email}\n\n*Message:* ${messageVal}\n\nPlease get back to me.`;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Simulate submission
        setTimeout(() => {
            setFormStatus('success');
            window.open(whatsappUrl, '_blank');
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-slate-50 overflow-x-hidden">
            {/* 1. Corporate Hero Section - Redesigned for Premium Look */}
            <section className="relative pt-32 pb-44 bg-brand-navy text-white overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[url('/consulting_team_premium.png')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>

                <div className="container-max relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-accent-green text-xs font-black uppercase tracking-widest mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
                        We respond within 24 hours
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-black mb-6 leading-tight"
                    >
                        Let's Start Your <br />
                        <span className="text-accent-green">Success Story</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-blue-100/70 max-w-2xl mx-auto font-medium"
                    >
                        Have a question about funding, registration, or compliance? Our team of experts is ready to map your business to the right opportunities.
                    </motion.p>
                </div>
            </section>

            {/* 2. Floating Info Cards - Premium Design */}
            <div className="container-max relative z-20 -mt-24 mb-24">
                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        { title: "Call Us", sub: "Mon-Sat from 9am to 6pm", val: "+91 98765 43210", icon: "📞", link: "tel:+919876543210", btn: "Call Now" },
                        { title: "Email Us", sub: "Priority Support Inboxes", val: company.email, icon: "✉️", link: `mailto:${company.email}`, btn: "Send Email" },
                        { title: "Visit Office", sub: "Headquarters In Ahmedabad", val: "Nehru Nagar, Ahmedabad", icon: "📍", link: "https://maps.google.com", btn: "Get Directions" }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                            className="bg-white rounded-[2.5rem] shadow-2xl p-10 text-center group border border-slate-100 hover:border-accent-green transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full blur-2xl -z-10 group-hover:bg-accent-green/10 transition-colors"></div>
                            <div className="w-20 h-20 mx-auto bg-slate-50 text-brand-navy rounded-[1.5rem] flex items-center justify-center text-3xl mb-8 group-hover:bg-brand-navy group-hover:text-white transition-all transform group-hover:rotate-6 shadow-sm">
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-black text-brand-navy mb-2">{card.title}</h3>
                            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-6">{card.sub}</p>
                            <div className="text-lg font-black text-slate-800 mb-8 break-words h-14 flex items-center justify-center italic">
                                {card.val}
                            </div>
                            <a
                                href={card.link}
                                className="inline-flex items-center justify-center w-full py-4 bg-slate-50 text-brand-navy font-black rounded-2xl hover:bg-brand-navy hover:text-white transition-all shadow-sm"
                            >
                                {card.btn}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 3. Main Content: Form & Map */}
            <div className="container-max pb-32">
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left: Detailed Form (7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 border border-slate-100"
                    >
                        <div className="mb-12">
                            <span className="text-accent-green font-black tracking-[0.3em] text-[10px] uppercase">Message Us</span>
                            <h2 className="text-4xl font-black text-brand-navy mt-4 leading-tight">Drop us a line and let's <br /><span className="text-accent-green">get started.</span></h2>
                        </div>

                        {formStatus === 'success' ? (
                            <div className="min-h-[400px] flex flex-col items-center justify-center text-center p-6 bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
                                <div className="w-24 h-24 bg-accent-green/10 text-accent-green rounded-full flex items-center justify-center text-5xl mb-8 animate-bounce">✓</div>
                                <h3 className="text-3xl font-black text-brand-navy mb-2">Message Received!</h3>
                                <p className="text-slate-500 font-medium max-w-sm mx-auto">Thank you for reaching out. We've assigned an expert to review your inquiry. Expect a call within 2 hours.</p>
                                <button
                                    onClick={() => setFormStatus('idle')}
                                    className="mt-8 text-brand-navy font-black hover:text-accent-green transition-colors"
                                >
                                    ← Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                                        <input type="text" name="name" required placeholder="Enter your name" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all outline-none text-brand-navy font-medium" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                                        <input type="tel" name="phone" required placeholder="10-digit mobile" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all outline-none text-brand-navy font-medium" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                                        <input type="email" name="email" required placeholder="your@email.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all outline-none text-brand-navy font-medium" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Inquiry Type</label>
                                        <select name="type" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all outline-none text-brand-navy font-medium appearance-none">
                                            <option>Funding & Loans</option>
                                            <option>Business Registration</option>
                                            <option>Legal & Compliance</option>
                                            <option>Marketing & Branding</option>
                                            <option>Other Services</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                                    <textarea rows={5} name="message" required placeholder="Tell us how we can help your business grow..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all outline-none text-brand-navy font-medium resize-none"></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className="w-full py-5 bg-brand-navy text-white font-black rounded-2xl shadow-xl hover:bg-accent-green transition-all disabled:opacity-70 active:scale-95"
                                >
                                    {formStatus === 'submitting' ? 'Processing...' : 'Send Message Now'}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Right: Map & Hours (5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 space-y-10"
                    >
                        {/* Map Widget */}
                        <div className="bg-white rounded-[2.5rem] shadow-2xl p-3 border border-slate-100 h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.944983084364!2d72.53568777507914!3d23.025793679173256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84c62c355555%3A0x6b0f0b0b0b0b0b0b!2sNehru%20Nagar%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709876543210!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '2rem' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Address Details - Premium Card */}
                        <div className="bg-brand-navy rounded-[2.5rem] shadow-2xl p-12 text-white relative overflow-hidden group hover:shadow-accent-green/10 transition-all border border-white/5">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-green opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>

                            <h3 className="text-2xl font-black mb-8 flex items-center gap-4">
                                <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-base">📍</span>
                                Local HQ
                            </h3>
                            <p className="text-blue-100/70 text-lg leading-relaxed mb-10 font-medium">
                                B-304/2 Gopal Palace, <br />
                                Near Shiromani Complex,<br />
                                Nehru Nagar, Ahmedabad-380015
                            </p>

                            <div className="space-y-6 pt-10 border-t border-white/10">
                                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-accent-green">Direct Contact</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5 hover:border-accent-green/30 transition-colors">
                                        <span className="text-xs font-bold text-blue-100/50">WhatsApp</span>
                                        <span className="text-sm font-black text-white">+91 98765 43210</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5 hover:border-accent-green/30 transition-colors">
                                        <span className="text-xs font-bold text-blue-100/50">Support</span>
                                        <span className="text-sm font-black text-white">hello@ewolyn.co.in</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* FAQ Section - Redesigned */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-32 max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-green mb-3">Support FAQ</h2>
                        <h3 className="text-4xl font-black text-brand-navy">Common Questions</h3>
                    </div>
                    <div className="grid gap-6">
                        {faqData.map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-accent-green transition-all flex gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 text-brand-navy group-hover:bg-brand-navy group-hover:text-white flex items-center justify-center font-black text-lg shrink-0 transition-colors shadow-sm">?</div>
                                <div>
                                    <h3 className="font-black text-brand-navy text-xl mb-3">{faq.question}</h3>
                                    <p className="text-slate-500 leading-relaxed font-medium">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <CTASection />
        </main>
    );
}
