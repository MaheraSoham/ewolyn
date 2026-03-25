"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

type SubItem = {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  href: string;
};

type Service = {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  href: string;
  subItems?: SubItem[];
};

const services: Service[] = [
  {
    title: "MSME & Startup Funding Support",
    description: "Access grants and loans",
    icon: "💰",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    href: "/funding",
    subItems: [
      {
        title: "Grants",
        description: "Non-repayable government funding for startups & MSMEs. PMEGP, subsidies, sector-specific schemes.",
        icon: "🏛️",
        iconBg: "bg-blue-50",
        href: "/services/grants"
      },
      {
        title: "Loans",
        description: "Business loans up to ₹5Cr. CGTMSE, MUDRA, bank & government schemes. Fast approval.",
        icon: "🏦",
        iconBg: "bg-green-50",
        href: "/services/loans"
      },
    ]
  },
  {
    title: "Business Registration",
    description: "Company formation & compliance",
    icon: "🏢",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    href: "/services/business-registration",
  },
  {
    title: "Certifications & IP",
    description: "ISO, patents & trademarks",
    icon: "✅",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    href: "/services/certifications",
  },
  {
    title: "Growth Strategy",
    description: "Business expansion planning",
    icon: "📈",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
    href: "/services/growth-strategy",
  },
  {
    title: "Tax & Compliance",
    description: "GST, income tax & TDS returns",
    icon: "📊",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    href: "/services/tax-exemption-benefits",
  },
  {
    title: "Legal Services",
    description: "Legal advice & documentation",
    icon: "⚖️",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    href: "/services/legal",
  },
  {
    title: "Marketing & Branding",
    description: "Digital marketing solutions",
    icon: "📣",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
    href: "/services/marketing",
  },
  {
    title: "CIBIL Assistance",
    description: "Credit score improvement & disputes",
    icon: "💳",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    href: "/services/cibil-assistance",
  },
];

const nav = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/blogs", label: "Blogs", icon: "📝" },
  { href: "/schemes", label: "Schemes", icon: "📜" },
  { href: "/success-stories", label: "Success Stories", icon: "🏆" },
  { href: "/about", label: "About Us", icon: "👥" },
  { href: "/contact", label: "Contact", icon: "✉️" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Floating Glassmorphism Navbar */}
      <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'top-0 px-0' : 'top-3 px-3 sm:px-6'}`}>
        <div className={`mx-auto w-full transition-all duration-300 ${isScrolled ? 'px-0' : 'px-2 sm:px-4'}`}>
          <div className={`glass-navbar flex items-center justify-between transition-all duration-300 ${isScrolled ? 'px-4 sm:px-8 py-3' : 'px-4 sm:px-12 py-3 sm:py-4 rounded-full'}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Ewolyn Services Pvt Ltd - Evolving Indian StartUps & MSMEs"
                width={200}
                height={70}
                className={`transition-all duration-300 ${isScrolled ? 'h-9 sm:h-11' : 'h-11 sm:h-16'} w-auto`}
                priority
                unoptimized
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Home Link */}
              <Link
                href="/"
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${pathname === "/" ? "text-[#37AFE1]" : "text-slate-700 hover:text-[#37AFE1]"}`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative group/dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${pathname.startsWith("/services") || pathname === "/funding" ? "text-[#37AFE1]" : "text-slate-700 hover:text-[#37AFE1]"}`}
                >
                  Services
                  <svg className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Desktop Mega Menu Dropdown */}
                {servicesOpen && (
                  <div
                    className="absolute top-full -left-48 w-[950px] pt-4"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="glass-navbar p-6 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-[#37AFE1]/20 animate-in fade-in slide-in-from-top-2 duration-300 overflow-hidden bg-white/95 backdrop-blur-xl">
                      <div className="flex gap-8 relative z-10">
                        {/* Featured Section: Funding & Consultancy */}
                        <div className="w-[35%] shrink-0 flex flex-col pt-2">
                          <div className="mb-6">
                            <span className="inline-block px-3 py-1 bg-[#1B4F8C]/10 text-[#1B4F8C] text-xs font-bold uppercase tracking-wider rounded-lg mb-3">
                              Featured Focus
                            </span>
                            <h3 className="text-slate-900 font-bold text-xl mb-2 flex items-start gap-2 leading-tight">
                              <span className="mt-1">{services[0].icon}</span>
                              {services[0].title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{services[0].description}</p>
                          </div>
                          <div className="flex flex-col gap-3">
                            {services[0].subItems?.map((subItem, idx) => (
                              <Link
                                key={idx}
                                href={subItem.href}
                                className="group/item flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#37AFE1]/40 hover:bg-white hover:shadow-lg hover:shadow-[#37AFE1]/5 transition-all duration-300"
                              >
                                <div className={`w-12 h-12 shrink-0 rounded-xl ${subItem.iconBg} flex items-center justify-center text-2xl group-hover/item:scale-110 transition-transform`}>
                                  {subItem.icon}
                                </div>
                                <div className="flex flex-col">
                                  <div className="font-bold text-slate-800 text-sm mb-1 group-hover/item:text-[#1B4F8C] transition-colors">{subItem.title}</div>
                                  <div className="text-slate-500 text-xs leading-relaxed line-clamp-2">{subItem.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Other Services Section */}
                        <div className="w-[65%] border-l border-slate-100 pl-8 pt-2">
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="text-slate-900 font-bold text-lg">Comprehensive Services</h3>
                            <Link href="/services" className="text-[#37AFE1] text-xs font-bold hover:underline">View All →</Link>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                            {services.slice(1).map((service, idx) => (
                              <Link
                                key={idx}
                                href={service.href}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-200 group/link"
                              >
                                <div className={`w-10 h-10 rounded-lg ${service.iconBg} flex items-center justify-center text-xl shrink-0 group-hover/link:scale-110 group-hover/link:rotate-3 transition-transform`}>
                                  {service.icon}
                                </div>
                                <div className="pt-0.5">
                                  <div className="text-slate-800 text-sm font-bold group-hover/link:text-[#1B4F8C] transition-colors mb-0.5">{service.title}</div>
                                  <div className="text-slate-500 text-xs line-clamp-2 leading-relaxed pr-2">{service.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* Action callout */}
                          <div className="mt-8 rounded-xl bg-gradient-to-r from-[#1B4F8C] to-[#0d2f57] p-4 flex items-center justify-between text-white shadow-md">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                              </div>
                              <div>
                                <p className="font-bold text-sm">Need quick guidance?</p>
                                <p className="text-white/70 text-xs">Request a callback from our experts</p>
                              </div>
                            </div>
                            <Link href="/contact" className="px-4 py-2 bg-white text-[#1B4F8C] text-xs font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
                              Get Started
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Nav Items */}
              {nav.slice(1).map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${pathname === n.href ? "text-[#37AFE1]" : "text-slate-700 hover:text-[#37AFE1]"}`}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            {/* Right Side Icons & Info */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Business Hours */}
              <div className="text-slate-600 text-xs mr-2">
                <div className="font-semibold text-[#1B4F8C]">9:30 AM - 6:00 PM</div>
                <div className="text-slate-500">Monday - Saturday</div>
              </div>

              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/919737799937"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg shadow-green-500/20"
              >
                <svg className="w-4.5 h-4.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* Phone Icon */}
              <a
                href="tel:+919737799937"
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center hover:bg-[#37AFE1] hover:text-white transition-all duration-300"
              >
                <svg className="w-4.5 h-4.5 text-slate-600 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>

            {/* Mobile: Quick WhatsApp + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="https://wa.me/919737799937"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-green-500/20"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-700 p-2 hover:bg-[#37AFE1]/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-2 glass-navbar p-5 rounded-2xl animate-in slide-in-from-top-4 duration-300 max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col gap-1">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${pathname === "/" ? "text-[#37AFE1] bg-[#37AFE1]/10 font-bold" : "text-slate-700 hover:bg-[#37AFE1]/10"}`}>
                  🏠 Home
                </Link>

                <div className="mt-3 mb-2 px-4 text-[#1B4F8C] text-xs font-bold uppercase tracking-widest">Our Services</div>

                {services.map((service, index) => (
                  <div key={index} className="flex flex-col">
                    <Link
                      href={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-[#37AFE1]/10 transition-colors"
                    >
                      <span>{service.icon}</span>
                      <span className="font-medium text-sm">{service.title}</span>
                    </Link>

                    {service.subItems && (
                      <div className="ml-8 flex flex-col gap-1 border-l border-slate-200 pl-4 py-1">
                        {service.subItems.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-2 text-sm text-slate-500 hover:text-[#37AFE1] transition-colors"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="h-px bg-slate-200 my-3"></div>

                {nav.slice(1).map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${pathname === n.href ? "text-[#37AFE1] bg-[#37AFE1]/10 font-bold" : "text-slate-700 hover:bg-[#37AFE1]/10"}`}
                  >
                    {n.icon} {n.label}
                  </Link>
                ))}

                <div className="h-px bg-slate-200 my-3"></div>

                <div className="px-4 py-2 text-xs text-slate-500">
                  <div className="font-semibold text-[#1B4F8C] mb-1">9:30 AM – 6:00 PM · Mon–Sat</div>
                  <div>+91 97377 99937 &nbsp;|&nbsp; info@ewolyn.co.in</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* No spacer needed as Hero handles padding */}

    </>
  );
}
