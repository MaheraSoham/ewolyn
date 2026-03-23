import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[rgba(115,150,121,0.92)] text-white">
      <div className="container-max grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="Ewolyn Services Pvt Ltd - Evolving Indian StartUps & MSMEs"
              width={450}
              height={160}
              className="h-24 md:h-44 w-auto animate-logo-shadow"
              unoptimized
            />
          </div>
          <p className="text-sm text-white/80">
            Empowering Indian startups and MSMEs with registration, certification,
            funding enablement, and growth consulting.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Company</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link className="text-white/80 hover:text-white transition" href="/about">About Us</Link></li>
            <li><Link className="text-white/80 hover:text-white transition" href="/services">Services</Link></li>
            <li><Link className="text-white/80 hover:text-white transition" href="/funding">Funding</Link></li>
            <li><Link className="text-white/80 hover:text-white transition" href="/impact">Impact</Link></li>
            <li><Link className="text-white/80 hover:text-white transition" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Funding Schemes</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link className="text-white/80 hover:text-white transition" href="/services/naif-scheme">NAIF Scheme</Link></li>
            <li><Link className="text-white/80 hover:text-white transition" href="/services/pm-mudra-yojana">PM MUDRA</Link></li>
            <li><Link className="text-white/80 hover:text-white transition" href="/funding">CGTMSE</Link></li>
            <li><Link className="text-white/80 hover:text-white transition" href="/funding">Startup India Seed Fund</Link></li>
            <li><Link className="text-white/80 hover:text-white transition" href="/funding">View All Schemes →</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">📍</span>
              <span>B-304/2 Gopal Palace, Near Shiromani Complex, opposite Ocean Park, Nehru Nagar, Ahmedabad-380015</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📧</span> info@ewolyn.co.in
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <span>🕐</span> Mon–Sat, 9:30 AM – 6 PM
            </li>
          </ul>
          <div className="mt-4">
            <Link className="btn-navy shadow-none" href="/contact">Start Your Journey →</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6">
        <div className="container-max flex flex-col items-center justify-between gap-3 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Ewolyn Services Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-white/60 hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms-conditions" className="text-white/60 hover:text-white transition">Terms &amp; Conditions</Link>
            <Link href="/refund-policy" className="text-white/60 hover:text-white transition">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
