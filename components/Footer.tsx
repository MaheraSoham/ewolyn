import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      {/* Main Footer */}
      <div className="container-max py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Image
              src="/logo.png"
              alt="Ewolyn Services Private Limited"
              width={200}
              height={70}
              className="h-14 w-auto mb-5"
              unoptimized
            />
            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
              Ewolving Indian startups and MSMEs with registration, certification,
              funding enablement, and growth consulting.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { label: "LinkedIn", icon: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5m.02 4.5H0v16h5V8m7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8" },
                { label: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3" },
                { label: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37m1.5-4.87h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2" },
              ].map((s) => (
                <span key={s.label} className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center hover:bg-[#37AFE1] hover:border-[#37AFE1] hover:text-white transition-all cursor-pointer">
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Funding", href: "/funding" },
                { label: "Impact", href: "/impact" },
                { label: "Blogs", href: "/blogs" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link className="text-sm text-slate-500 hover:text-[#37AFE1] transition-colors" href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Schemes */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-5">Funding Schemes</h4>
            <ul className="space-y-3">
              {[
                { label: "PMEGP Scheme", href: "/funding/pmegp" },
                { label: "PM MUDRA Yojana", href: "/funding/pm-mudra-yojana" },
                { label: "CGTMSE Guarantee", href: "/funding" },
                { label: "Startup India Seed Fund", href: "/funding" },
                { label: "NAIF Scheme", href: "/funding/naif-scheme" },
                { label: "View All Schemes →", href: "/schemes" },
              ].map((link) => (
                <li key={link.label}>
                  <Link className="text-sm text-slate-500 hover:text-[#37AFE1] transition-colors" href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-5">Get in Touch</h4>
            <div className="space-y-4">
              {[
                { icon: "📍", text: "Nehru Nagar, Ahmedabad – 380015" },
                { icon: "📧", text: "info@ewolyn.co.in" },
                { icon: "📞", text: "+91 98765 43210" },
                { icon: "🕐", text: "Mon – Sat, 9:30 AM – 6:00 PM" },
              ].map((item) => (
                <div key={item.icon} className="flex items-start gap-3">
                  <span className="text-base mt-0.5">{item.icon}</span>
                  <span className="text-sm text-slate-500 leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
            <Link className="mt-6 inline-flex items-center gap-2 bg-[#37AFE1] text-white font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-[#2B8DB5] transition-colors" href="/contact">
              Start Your Journey
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="container-max py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Ewolyn Services Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="text-xs text-slate-400 hover:text-slate-700 transition">Privacy Policy</Link>
            <Link href="/terms-conditions" className="text-xs text-slate-400 hover:text-slate-700 transition">Terms & Conditions</Link>
            <Link href="/refund-policy" className="text-xs text-slate-400 hover:text-slate-700 transition">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
