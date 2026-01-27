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

      {/* Floating Abstract Shape - Top Right */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-20 floating-shape hidden lg:block">
        <Image
          src="/abstract-shape.png"
          alt=""
          width={256}
          height={256}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Floating Abstract Shape - Bottom Left */}
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
        {/* Split Layout: Content + Image */}
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
            <p className="text-lg md:text-xl text-slate-300 mb-6">
              Government schemes, company registration & business certifications
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

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="stats-card text-center animate-fade-in-up animate-delay-100">
                <p className="text-3xl md:text-4xl font-bold text-accent-green">48hrs</p>
                <p className="text-xs text-slate-400 mt-1">Quick Approval</p>
              </div>
              <div className="stats-card text-center animate-fade-in-up animate-delay-200">
                <p className="text-3xl md:text-4xl font-bold text-accent-green">₹500Cr+</p>
                <p className="text-xs text-slate-400 mt-1">Funded</p>
              </div>
              <div className="stats-card text-center animate-fade-in-up animate-delay-300">
                <p className="text-3xl md:text-4xl font-bold text-accent-green">95%</p>
                <p className="text-xs text-slate-400 mt-1">Success Rate</p>
              </div>
              <div className="stats-card text-center animate-fade-in-up animate-delay-400">
                <p className="text-3xl md:text-4xl font-bold text-accent-green">20K+</p>
                <p className="text-xs text-slate-400 mt-1">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Side - Business Meeting Image */}
          <div className="hidden lg:block animate-fade-in-up animate-delay-200">
            <div className="relative">
              {/* Main Image with Glow Effect */}
              <div className="image-glow overflow-hidden rounded-2xl">
                <Image
                  src="/hero-business-meeting.png"
                  alt="Professional business meeting - MSME funding consultation"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

