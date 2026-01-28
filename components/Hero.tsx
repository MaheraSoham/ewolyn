"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  return (
    <section className="hero-navy-gradient text-white pt-16 pb-10 relative overflow-hidden min-h-[75vh] flex items-center">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container-max relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Side - Content */}
          <div className="animate-fade-in-up">
            {/* Floating Success Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900/40 backdrop-blur-md rounded-full px-3 py-1.5 mb-5 border border-cyan/20">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse" />
              <span className="text-[11px] font-medium tracking-wide">
                <span className="text-accent-green font-bold">TechVision Solutions</span> got ₹45L PMEGP approval ✓
              </span>
            </div>

            {/* Hindi Tagline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 tracking-wide">
              <span className="text-accent-green italic">Humara Support</span>{" "}
              <span className="text-white">Aapki Safalta</span>
            </h2>

            {/* Decorative Line */}
            <div className="w-12 h-0.5 bg-accent-green mb-4"></div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-4">
              Get <span className="text-accent-green">₹10L to ₹5Cr</span>
              <br />
              <span className="text-white">MSME Funding</span>
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-slate-300/90 mb-4 max-w-lg leading-relaxed">
              Government schemes, company registration & business certifications.
            </p>

            {/* Feature Bullets */}
            <p className="text-xs md:text-sm font-semibold text-white mb-6">
              <span className="text-accent-green">Expert guidance</span> • <span>Fast approvals</span> • <span>Transparent process</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/funding" className="btn-hero-green group bg-green-500 hover:bg-green-600 px-6 py-2.5 text-sm font-bold rounded-lg transition-all shadow-lg shadow-green-500/20">
                <span>Apply for Funding →</span>
              </Link>
              <Link href="/services" className="btn-hero-outline border-white/30 hover:bg-white/10 px-6 py-2.5 text-sm font-bold rounded-lg transition-all">
                Explore Services
              </Link>
            </div>

            {/* Stats Cards - Now below buttons in the same column */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
              <div className="bg-slate-900/40 backdrop-blur-md rounded-xl p-4 border border-white/5 hover:border-accent-green/30 transition-all group">
                <p className="text-xl md:text-2xl font-bold text-accent-green group-hover:scale-110 transition-transform">48hrs</p>
                <p className="text-[9px] text-slate-400 mt-0.5 font-medium uppercase tracking-widest">Quick Approval</p>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-md rounded-xl p-4 border border-white/5 hover:border-accent-green/30 transition-all group">
                <p className="text-xl md:text-2xl font-bold text-accent-green group-hover:scale-110 transition-transform">₹500Cr+</p>
                <p className="text-[9px] text-slate-400 mt-0.5 font-medium uppercase tracking-widest">Funded</p>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-md rounded-xl p-4 border border-white/5 hover:border-accent-green/30 transition-all group">
                <p className="text-xl md:text-2xl font-bold text-accent-green group-hover:scale-110 transition-transform">95%</p>
                <p className="text-[9px] text-slate-400 mt-0.5 font-medium uppercase tracking-widest">Success Rate</p>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-md rounded-xl p-4 border border-white/5 hover:border-accent-green/30 transition-all group">
                <p className="text-xl md:text-2xl font-bold text-accent-green group-hover:scale-110 transition-transform">20K+</p>
                <p className="text-[9px] text-slate-400 mt-0.5 font-medium uppercase tracking-widest">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Side - Visuals */}
          <div className="relative animate-fade-in-up animate-delay-200 hidden lg:block">
            <div className="relative z-10 rounded-xl overflow-hidden border-2 border-white/5 shadow-xl max-w-md ml-auto">
              <Image
                src="/hero-business-meeting.png"
                alt="Business Meeting"
                width={500}
                height={375}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Decorative Background Glows */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyan/10 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent-green/10 rounded-full blur-[100px] -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}


