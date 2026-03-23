"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { company } from "@/lib/content";
import CTASection from "@/components/CTASection";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const faqData = [
  {
    question: "How long does the funding process take?",
    answer:
      "Timelines vary by scheme. MUDRA loans can take 7–10 days, while larger PMEGP or CGTMSE applications may take 30–45 days. Our readiness support significantly speeds up this process.",
  },
  {
    question: "Do you guarantee funding approval?",
    answer:
      "While no one can guarantee government approvals, our expert documentation and eligibility mapping result in a 95% success rate for eligible businesses.",
  },
  {
    question: "Is there a consultation fee?",
    answer:
      "Our initial funding eligibility check and basic consultation are free. We charge a service fee only for detailed project reports (DPR) and application processing.",
  },
];

const contactCards = [
  {
    title: "Call Us",
    sub: "Mon–Sat from 9 am to 6 pm",
    val: "+91 98765 43210",
    link: "tel:+919876543210",
    btn: "Call Now",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: "bg-blue-500",
  },
  {
    title: "Email Us",
    sub: "Priority support inbox",
    val: company.email,
    link: `mailto:${company.email}`,
    btn: "Send Email",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-emerald-500",
  },
  {
    title: "Visit Office",
    sub: "Headquarters in Ahmedabad",
    val: "Nehru Nagar, Ahmedabad",
    link: "https://maps.google.com",
    btn: "Get Directions",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "bg-amber-500",
  },
  {
    title: "WhatsApp",
    sub: "Quick chat with our team",
    val: "+91 98765 43210",
    link: "https://wa.me/919876543210",
    btn: "Message Now",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: "bg-primary",
  },
];

const formBenefits = [
  {
    label: "Free Eligibility Check",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    label: "Expert Advisor Assigned",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  },
  {
    label: "Response Within 24 Hours",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    label: "No Hidden Charges",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    label: "Pan-India Coverage",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
];

export default function ContactContent() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    const fd = new FormData(e.target as HTMLFormElement);
    const name = fd.get("name") as string;
    const phone = fd.get("phone") as string;
    const email = fd.get("email") as string;
    const type = fd.get("type") as string;
    const messageVal = fd.get("message") as string;
    const whatsappNumber = "919876543210";
    const message = `Hello Ewolyn Team, I have an inquiry regarding *${type}*.\n\n*My Details:*\n👤 *Name:* ${name}\n📱 *Mobile:* ${phone}\n📧 *Email:* ${email}\n\n*Message:* ${messageVal}\n\nPlease get back to me.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      setFormStatus("success");
      window.open(whatsappUrl, "_blank");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-28 hero-navy-gradient text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('/consulting_team_premium.png')] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-[-5%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        {/* Floating icons */}
        <div className="absolute top-28 right-[14%] w-12 h-12 bg-primary/10 rounded-xl rotate-12 flex items-center justify-center text-primary/30 animate-float">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </div>
        <div className="absolute top-52 left-[7%] w-10 h-10 bg-blue-500/10 rounded-lg -rotate-6 flex items-center justify-center text-blue-400/30 animate-float" style={{ animationDelay: "1.2s" }}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        </div>

        <div className="container-max relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/15 backdrop-blur-sm rounded-full text-sm font-bold mb-8 border border-primary/25"
          >
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            <span className="text-primary">We respond within 24 hours</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Let&apos;s Start Your <br />
            <span className="text-primary">Success Story</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Have a question about funding, registration, or compliance? Our team of experts is ready to map your business to the right opportunities.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════ CONTACT CARDS ═══════════════ */}
      <div className="container-max relative z-20 -mt-16 mb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.link}
              target={card.link.startsWith("http") ? "_blank" : undefined}
              rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="group bg-white rounded-2xl shadow-lg p-6 border border-slate-100 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className={`w-14 h-14 mx-auto ${card.color} text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{card.title}</h3>
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">{card.sub}</p>
              <p className="text-sm font-bold text-slate-700 mb-4">{card.val}</p>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
                {card.btn}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* ═══════════════ FORM + SIDEBAR ═══════════════ */}
      <div className="container-max pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100"
          >
            <div className="mb-10">
              <span className="inline-block text-primary font-bold text-xs uppercase tracking-widest mb-2">Message Us</span>
              <h2 className="text-3xl font-bold text-slate-900">
                Drop us a line and let&apos;s <span className="text-primary">get started.</span>
              </h2>
            </div>

            {formStatus === "success" ? (
              <div className="min-h-[400px] flex flex-col items-center justify-center text-center p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Received!</h3>
                <p className="text-slate-500 max-w-sm mx-auto">
                  Thank you for reaching out. We&apos;ve assigned an expert to review your inquiry. Expect a call within 2 hours.
                </p>
                <button onClick={() => setFormStatus("idle")} className="mt-6 text-primary font-bold hover:underline">
                  ← Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                    <input type="text" name="name" required placeholder="Enter your name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-slate-900 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</label>
                    <input type="tel" name="phone" required placeholder="10-digit mobile" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-slate-900 font-medium" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                    <input type="email" name="email" required placeholder="your@email.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-slate-900 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Inquiry Type</label>
                    <select name="type" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-slate-900 font-medium appearance-none">
                      <option>Funding &amp; Loans</option>
                      <option>Business Registration</option>
                      <option>Legal &amp; Compliance</option>
                      <option>Marketing &amp; Branding</option>
                      <option>Other Services</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Message</label>
                  <textarea rows={5} name="message" required placeholder="Tell us how we can help your business grow..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-slate-900 font-medium resize-none" />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-green-500/20 hover:bg-emerald-600 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                      Processing…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Why Contact Us */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                What You&apos;ll Get
              </h3>
              <div className="space-y-4">
                {formBenefits.map((b) => (
                  <div key={b.label} className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">{b.icon}</div>
                    <span className="text-slate-700 font-medium">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg p-3 border border-slate-100 h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.944983084364!2d72.53568777507914!3d23.025793679173256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84c62c355555%3A0x6b0f0b0b0b0b0b0b!2sNehru%20Nagar%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709876543210!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "0.75rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address card */}
            <div className="bg-[rgba(115,150,121,0.92)] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Local HQ
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  B-304/2 Gopal Palace,<br />
                  Near Shiromani Complex,<br />
                  Nehru Nagar, Ahmedabad-380015
                </p>
                <div className="space-y-3 pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="text-xs text-gray-400">WhatsApp</span>
                    <span className="text-sm font-bold text-white">+91 98765 43210</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="text-xs text-gray-400">Support</span>
                    <span className="text-sm font-bold text-white">info@ewolyn.co.in</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════ FAQ ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-bold text-xs uppercase tracking-widest mb-2">Support FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Common Questions</h2>
          </div>
          <div className="grid gap-6">
            {faqData.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all flex gap-5 group">
                <div className="w-10 h-10 rounded-xl bg-slate-50 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{faq.question}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{faq.answer}</p>
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
