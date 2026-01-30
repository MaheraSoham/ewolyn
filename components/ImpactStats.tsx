"use client";
import IndiaMap from "./IndiaMap";
import { motion } from "framer-motion";

const stats = [
  { value: "47,700K+", label: "MSMEs Registered", sublabel: "On Udyam Portal" },
  { value: "₹757Cr+", label: "Credit Facilitated", sublabel: "Since 2020" },
  { value: "95%", label: "Success Rate", sublabel: "Approval Rate" },
  { value: "28/36", label: "Pan India Coverage", sublabel: "States & UTs" },
];

const topStates = [
  { state: "Maharashtra", count: "82L+", percentage: 100 },
  { state: "Tamil Nadu", count: "49L+", percentage: 60 },
  { state: "Gujarat", count: "41L+", percentage: 50 },
  { state: "Uttar Pradesh", count: "39L+", percentage: 48 },
  { state: "Karnataka", count: "34L+", percentage: 42 },
];

const sectors = [
  { name: "Manufacturing", percent: 31, icon: "🏭" },
  { name: "Trading", percent: 36, icon: "🛒" },
  { name: "Services", percent: 33, icon: "💼" },
];

export default function ImpactStats() {
  return (
    <>
      {/* Horizontal Stats Bar - Navy Background */}
      <section className="section-navy py-12">
        <div className="container-max">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((s, index) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-white group-hover:scale-110 transition-transform duration-300">
                  {s.value}
                </div>
                <div className="mt-2 font-semibold text-white text-lg">{s.label}</div>
                <div className="text-sm text-slate-300">{s.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Sector Distribution Section - Light Green */}
      <section className="section section-light-green">
        <div className="container-max">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-cyan/10 text-cyan text-sm font-medium px-5 py-2 rounded-full mb-4 animate-pulse-glow">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink">
              Driving MSME Success <span className="gradient-text">Across India</span>
            </h2>
            <p className="text-muted mt-3 max-w-2xl mx-auto">
              4.77 crore MSMEs registered on Udyam portal, transforming India&apos;s economic landscape
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Pan-India Presence with Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card bg-white"
              style={{ overflow: 'visible' }}
            >
              <h3 className="text-xl font-bold text-ink mb-6">Pan-India Presence</h3>

              {/* Interactive India Map */}
              <div className="mb-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 border border-cyan/10" style={{ minHeight: '500px' }}>
                <IndiaMap />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-cyan/10 to-cyan/5 rounded-lg p-4 text-center border border-cyan/20 hover:shadow-cyan-glow transition-all duration-300">
                  <div className="text-2xl font-bold text-cyan">28/36</div>
                  <div className="text-sm text-muted">Active States</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-bold text-ink">West India</div>
                  <div className="text-sm text-muted">Top Region</div>
                </div>
              </div>

              <h4 className="font-semibold text-ink mb-3">Top MSME States</h4>
              <div className="space-y-3">
                {topStates.map((item) => (
                  <div key={item.state} className="space-y-1">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted font-medium">{item.state}</span>
                      <span className="font-bold text-cyan">{item.count}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="bg-gradient-cyan h-full rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sector Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card bg-white"
            >
              <h3 className="text-xl font-bold text-ink mb-6">Sector Distribution</h3>

              {/* Circular Gauges */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {sectors.map((sector) => (
                  <div key={sector.name} className="text-center group">
                    {/* Circular Progress */}
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                        {/* Background circle */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="8"
                        />
                        {/* Progress circle */}
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#0BA5D8"
                          strokeWidth="8"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: sector.percent / 100 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-cyan">{sector.percent}%</span>
                      </div>
                    </div>
                    <div className="text-3xl mb-2 transform transition-transform group-hover:scale-125">
                      {sector.icon}
                    </div>
                    <div className="text-sm font-medium text-muted">{sector.name}</div>
                  </div>
                ))}
              </div>

              {/* Government Support Programs */}
              <div className="bg-brand rounded-xl p-6 text-white shadow-glow">
                <h4 className="font-semibold mb-4 text-lg">Government Support Programs</h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-accent-green text-lg">✓</span>
                    <span className="text-slate-100">₹4.14L Cr MUDRA loans disbursed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-accent-green text-lg">✓</span>
                    <span className="text-slate-100">₹7,593 Cr SRI Fund invested</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-accent-green text-lg">✓</span>
                    <span className="text-slate-100">200+ RAMP proposals approved</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-accent-green text-lg">✓</span>
                    <span className="text-slate-100">20.5% Women-owned MSMEs</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
