import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section section-navy">
      <div className="container-max">
        <div className="rounded-2xl bg-gradient-to-r from-brand to-brand-dark p-10 text-white shadow-soft">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-3xl font-bold">Ready to Get Your Business Funded?</h3>
              <p className="mt-2 text-lg text-white/80">
                Join 20,000+ MSMEs who got funding through Ewolyn. Free eligibility check in 30 seconds.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-cyan">
                <span className="flex items-center gap-1">✓ 48hrs Approval</span>
                <span className="flex items-center gap-1">✓ Zero Collateral Options</span>
                <span className="flex items-center gap-1">✓ 95% Success Rate</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/funding" className="px-8 py-3 bg-cyan text-white font-bold rounded-lg hover:bg-cyan-dark transition shadow-lg shadow-cyan/20 text-center">
                Check Eligibility Free →
              </Link>
              <Link href="/contact" className="px-8 py-3 border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition text-center">
                Talk to Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
