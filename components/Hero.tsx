"use client";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [businessStage, setBusinessStage] = useState("Early");

  return (
    <section
      className="text-white py-16"
      style={{
        background: 'linear-gradient(120deg, #e6f7fa 0%, #f8fafc 60%, #0B3C5D 100%)',
        minHeight: '520px',
      }}
    >
      <div className="container-max grid items-start gap-10 lg:grid-cols-2">
        {/* Left Side - Content */}
        <div>
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-sm">Trusted by 20,000+ MSMEs</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Your Business Deserves
            <br />
            <span className="text-brand">Funding, Not Rejection</span>
          </h1>

          {/* Hindi Tagline */}
          <p className="mt-4 text-xl text-slate-300" style={{ fontFamily: 'system-ui' }}>
            आपकी सफलता, हमारी ज़िम्मेदारी
          </p>

          {/* Description */}
          <p className="mt-4 text-lg text-slate-400">
            Get ₹5 Lakhs to ₹10 Crores with India&apos;s fastest MSME funding platform
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-4 gap-4">
            <div>
              <p className="text-2xl font-bold text-blue-700">48hrs</p>
              <p className="text-xs text-blue-600">Quick Approval</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-700">₹500Cr+</p>
              <p className="text-xs text-blue-600">Funded</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-700">95%</p>
              <p className="text-xs text-blue-600">Success Rate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-700">100%</p>
              <p className="text-xs text-blue-600">Online Process</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/funding" className="btn">
              Apply for Funding →
            </Link>
            <Link href="/funding" className="btn-dark">
              View All Schemes
            </Link>
          </div>

          {/* Feature Tags */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1 bg-slate-800 text-green-400 text-sm px-3 py-1 rounded-full">
              ✓ Zero Collateral
            </span>
            <span className="inline-flex items-center gap-1 bg-slate-800 text-green-400 text-sm px-3 py-1 rounded-full">
              ✓ Minimal Docs
            </span>
            <span className="inline-flex items-center gap-1 bg-slate-800 text-green-400 text-sm px-3 py-1 rounded-full">
              ✓ Expert Support
            </span>
          </div>
        </div>

        {/* Right Side - Eligibility Form */}
        <div className="bg-white/90 rounded-2xl p-8 shadow-lg text-evolyn-blue">
          <h2 className="text-2xl font-bold">Check Your Eligibility</h2>
          <p className="text-slate-400 mt-1">Get instant funding options in 30 seconds</p>

          <form className="mt-6 space-y-4">
            {/* Business Type */}
            <div>
              <label className="block text-sm font-medium mb-2">Business Type</label>
              <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand focus:border-transparent">
                <option>Select Business Type</option>
                <option>Private Limited</option>
                <option>LLP</option>
                <option>Partnership</option>
                <option>Proprietorship</option>
                <option>NGO / Trust</option>
              </select>
            </div>

            {/* Funding Required */}
            <div>
              <label className="block text-sm font-medium mb-2">Funding Required</label>
              <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand focus:border-transparent">
                <option>Select Amount</option>
                <option>₹5 Lakh - ₹25 Lakh</option>
                <option>₹25 Lakh - ₹1 Crore</option>
                <option>₹1 Crore - ₹5 Crore</option>
                <option>₹5 Crore - ₹10 Crore</option>
                <option>Above ₹10 Crore</option>
              </select>
            </div>

            {/* Business Stage */}
            <div>
              <label className="block text-sm font-medium mb-2">Business Stage</label>
              <div className="grid grid-cols-3 gap-2">
                {["Idea", "Early", "Growth"].map((stage) => (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => setBusinessStage(stage)}
                    className={`py-3 rounded-lg font-medium transition ${
                      businessStage === stage
                        ? "bg-brand text-white"
                        : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-4 rounded-lg transition"
            >
              Get Instant Report →
            </button>
          </form>

          {/* Trust Indicators */}
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
            <span>✓ 100% Free</span>
            <span>✓ No Spam</span>
            <span>✓ Secure</span>
          </div>
        </div>
      </div>
    </section>
  );
}
