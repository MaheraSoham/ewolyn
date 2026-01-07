import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-900 text-white">
      <div className="container-max grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="mb-4">
            <Image 
              src="/logo.jpg" 
              alt="Ewolyn - Evolving Indian StartUps & MSMEs" 
              width={200} 
              height={70} 
              className="h-16 w-auto bg-white rounded p-1"
            />
          </div>
          <p className="text-sm text-slate-400">
            Empowering Indian startups and MSMEs with registration, certification,
            funding enablement, and growth consulting.
          </p>
          <p className="mt-4 text-sm text-slate-400" style={{ fontFamily: 'system-ui' }}>
            आपकी सफलता, हमारी ज़िम्मेदारी
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Company</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link className="hover:text-brand transition" href="/about">About Us</Link></li>
            <li><Link className="hover:text-brand transition" href="/services">Services</Link></li>
            <li><Link className="hover:text-brand transition" href="/funding">Funding</Link></li>
            <li><Link className="hover:text-brand transition" href="/impact">Impact</Link></li>
            <li><Link className="hover:text-brand transition" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Funding Schemes</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link className="hover:text-brand transition" href="/services/naif-scheme">NAIF Scheme</Link></li>
            <li><Link className="hover:text-brand transition" href="/services/pm-mudra-yojana">PM MUDRA</Link></li>
            <li><Link className="hover:text-brand transition" href="/funding">CGTMSE</Link></li>
            <li><Link className="hover:text-brand transition" href="/funding">Startup India Seed Fund</Link></li>
            <li><Link className="hover:text-brand transition" href="/funding">View All Schemes →</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">📍</span>
              <span>B-304/2 Gopal Palace, Near Shiromani Complex, opposite Ocean Park, Nehru Nagar, Ahmedabad-380015</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📧</span> hello@ewolyn.co.in
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <span>🕐</span> Mon–Sat, 9 AM – 6 PM
            </li>
          </ul>
          <div className="mt-4">
            <Link className="btn" href="/contact">Start Your Journey →</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6">
        <div className="container-max flex flex-col items-center justify-between gap-3 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Ewolyn. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-300 transition">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
