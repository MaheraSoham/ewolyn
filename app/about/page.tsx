"use client";

import type { Metadata } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import ImpactStats from "@/components/ImpactStats";
import { company } from "@/lib/content";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* 1. Premium Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[url('/consulting_team_premium.png')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>

        <div className="container-max relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-accent-green/20 backdrop-blur-md px-4 py-2 rounded-full border border-accent-green/30 text-accent-green text-xs font-black uppercase tracking-widest mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
              Empowering Indian MSMEs
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-8"
            >
              The Bridge Between <br />
              <span className="text-accent-green">Ideas & Capital</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100/70 font-medium max-w-xl leading-relaxed"
            >
              At Ewolyn, we don't just provide consulting; we engineer growth pathways for the next generation of Indian entrepreneurs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Our Journey Section */}
      <section className="py-24 bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-green/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                <Image
                  src="/consulting_team_premium.png"
                  alt="Our Team"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-navy p-8 rounded-3xl shadow-2xl text-white max-w-[240px]">
                <div className="text-4xl font-black text-accent-green mb-1">10+</div>
                <div className="text-sm font-bold leading-tight opacity-70 italic">Years of combined expertise in Indian business ecosystem.</div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-green mb-3">Our Origin</h2>
                <h3 className="text-4xl font-black text-brand-navy leading-tight">Born to Solve the <br />MSME Transparency Gap</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Ewolyn was founded on a simple realization: Indian MSMEs are the backbone of the economy, yet they face the most hurdles in compliance and funding.
              </p>
              <p className="text-slate-500 leading-relaxed">
                We bridges this gap by providing high-touch, end-to-end consulting that transforms complex government schemes and banking requirements into clear, actionable roadmaps. Our goal is to make every eligible business "Funding Ready."
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-3xl font-black text-brand-navy mb-1">20,000+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Lives Impacted</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-brand-navy mb-1">₹500Cr+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Funding Enabled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy -skew-x-12 translate-x-1/3 -z-10"></div>
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 group hover:border-accent-green transition-all duration-500"
              >
                <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🎯</div>
                <h4 className="text-2xl font-black text-brand-navy mb-4">Our Mission</h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  To accelerate the growth of 1 Million Indian entrepreneurs by simplifying government compliance and unlocking democratic access to capital through technology and expertise.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 group hover:border-accent-green transition-all duration-500"
              >
                <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🌱</div>
                <h4 className="text-2xl font-black text-brand-navy mb-4">Our Vision</h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  To become India's most trusted partner for MSME growth, creating an ecosystem where "Made in India" businesses launch effortlessly and scale globally.
                </p>
              </motion.div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/business_vision_growth.png"
                  alt="Vision & Growth"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="py-24 bg-white">
        <div className="container-max text-center mb-16">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-green mb-3">Our Ethics</h2>
          <h3 className="text-4xl md:text-5xl font-black text-brand-navy">What We Stand For</h3>
        </div>
        <div className="container-max grid md:grid-cols-4 gap-6">
          {[
            { title: "Transparency", desc: "No hidden fees, no false promises. Just clear guidance.", icon: "💎" },
            { title: "Efficiency", desc: "We value your time. Our processes are optimized for speed.", icon: "⚡" },
            { title: "Integrity", desc: "Commitment to ethical practices and client data security.", icon: "🛡️" },
            { title: "Empowerment", desc: "We teach you how the ecosystem works while we help you navigate it.", icon: "✊" }
          ].map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 border border-slate-100 hover:border-accent-green/20 transition-all duration-300"
            >
              <div className="text-4xl mb-6">{val.icon}</div>
              <h4 className="text-xl font-bold text-brand-navy mb-3">{val.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Stats Overlay */}
      <div className="-mb-24 relative z-20">
        <ImpactStats />
      </div>

      {/* 6. Footer CTA */}
      <div className="pt-24">
        <CTASection />
      </div>
    </main>
  );
}
