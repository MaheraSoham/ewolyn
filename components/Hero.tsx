"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [businessStage, setBusinessStage] = useState("Early");

  return (
    <section className="hero-navy-gradient text-white py-24 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Floating Abstract Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-20 floating-shape hidden lg:block">
        <Image
          src="/abstract-shape.png"
          alt=""
          width={256}
          height={256}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-20 left-10 w-48 h-48 opacity-15 floating-shape hidden lg:block" style={{ animationDelay: '2s' }}>
        <Image
          src="/abstract-shape.png"
          alt=""
          width={192}
          height={192}
          className="w-full h-full object-contain transform rotate-180"
        />
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-[58%_42%] gap-12 items-center">

          {/* Left Side - Content */}
          <div className="animate-fade-in-up">
            {/* Floating Success Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-800/60 backdrop-blur-sm rounded-full px-5 py-2.5 mb-6 animate-pulse-glow border border-accent-green/30">
              <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
              <span className="text-sm font-medium">
                <span className="text-accent-green font-semibold">TechVision Solutions</span> got ₹45L PMEGP approval ✓
              </span>
            </div>

            {/* Hindi Tagline */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'system-ui' }}>
              <span className="text-accent-green">Humara Support</span>{" "}
              <span className="text-white">Aapki Safalta</span>
            </h2>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Get ₹10L to ₹5Cr
              <br />
              <span className="text-white">MSME Funding</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-300 mb-8">
              Government schemes, company registration & business certifications.
              Get ₹5 Lakhs to ₹10 Crores with India&apos;s fastest MSME funding platform.
            </p>

            {/* Feature Bullets */}
            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-slate-300 mb-8">
              <span className="flex items-center gap-2">
                <span className="text-accent-green text-lg">✓</span> Expert guidance
              </span>
              <span className="flex items-center gap-2">
                <span className="text-accent-green text-lg">✓</span> Fast approvals
              </span>
              <span className="flex items-center gap-2">
                <span className="text-accent-green text-lg">✓</span> Transparent process
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/funding" className="btn-hero-green group">
                <span>Apply for Funding</span>
                <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link href="/services" className="btn-hero-outline">
                Explore Services
              </Link>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 text-accent-green text-sm px-3 py-1 rounded-full">
                ✓ Zero Collateral
              </span>
              <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 text-accent-green text-sm px-3 py-1 rounded-full">
                ✓ Minimal Docs
              </span>
              <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 text-accent-green text-sm px-3 py-1 rounded-full">
                ✓ Expert Support
              </span>
            </div>
          </div>

          {/* Right Side - Form & Visuals */}
          <div className="space-y-8 animate-fade-in-up animate-delay-200">
            {/* Eligibility Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900 border border-white/20">
              <h2 className="text-2xl font-bold">Check Your Eligibility</h2>
              <p className="text-slate-500 mt-1">Get instant funding options in 30 seconds</p>

              <form className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">Business Type</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none">
                    <option>Select Business Type</option>
                    <option>Private Limited</option>
                    <option>LLP</option>
                    <option>Partnership</option>
                    <option>Proprietorship</option>
                    <option>NGO / Trust</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-accent-green text-white font-bold py-4 rounded-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-200">
                  Check Eligibility Now
                </button>
              </form>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="stats-card text-center">
                <p className="text-2xl md:text-3xl font-bold text-accent-green">48hrs</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Quick Approval</p>
              </div>
              <div className="stats-card text-center">
                <p className="text-2xl md:text-3xl font-bold text-accent-green">₹500Cr+</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Funded</p>
              </div>
              <div className="stats-card text-center">
                <p className="text-2xl md:text-3xl font-bold text-accent-green">95%</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Success Rate</p>
              </div>
              <div className="stats-card text-center">
                <p className="text-2xl md:text-3xl font-bold text-accent-green">20K+</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Happy Clients</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

