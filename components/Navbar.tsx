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
    title: "Business Funding & Financial Consultancy",
    description: "Access grants, loans, and NBFC solutions",
    icon: "💰",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    href: "/funding",
    subItems: [
      {
        title: "Grants",
        description: "Non-repayable government funding for startups & MSMEs. Subsidies, innovation, export, sector schemes.",
        icon: "🏛️",
        iconBg: "bg-blue-50",
        href: "/services/grants"
      },
      {
        title: "Loans",
        description: "Business loans for growth, working capital, expansion. Bank, NBFC, government schemes. Fast approval.",
        icon: "🏦",
        iconBg: "bg-green-50",
        href: "/services/loans"
      },
      {
        title: "NBFC",
        description: "Quick, flexible business funding. Unsecured, revenue-based, equipment, supply chain loans. 24–72hr disbursement.",
        icon: "💳",
        iconBg: "bg-teal-50",
        href: "/services/nbfc"
      },
    ]
  },
  {
    title: "Business Registration",
    description: "Company formation & compliance",
    icon: "📋",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    href: "/services/business-registration",
  },
  {
    title: "Certifications & IP",
    description: "ISO, patents & trademarks",
    icon: "🏆",
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
    title: "M&A Advisory",
    description: "Merger & acquisition support",
    icon: "🤝",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    href: "/services/ma-advisory",
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
    title: "Legal Consultancy",
    description: "Legal advice & documentation",
    icon: "⚖️",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    href: "/services/legal",
  },
];

const nav = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/funding", label: "Blogs", icon: "📝" },
  { href: "/about", label: "About Us", icon: "👥" },
  { href: "/contact", label: "Contact Us", icon: "✉️" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
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

  return (
    <>
      {/* Floating Glassmorphism Navbar */}
      <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'top-0 px-0' : 'top-3 px-6'}`}>
        <div className={`mx-auto w-full transition-all duration-300 ${isScrolled ? 'px-0' : 'px-4'}`}>
          <div className={`glass-navbar flex items-center justify-between transition-all duration-300 ${isScrolled ? 'px-8 py-3' : 'px-12 py-4 rounded-full'}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Ewolyn - Evolving Indian StartUps & MSMEs"
                width={isScrolled ? 140 : 180}
                height={isScrolled ? 40 : 56}
                className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'} w-auto`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Home Link */}
              <Link
                href="/"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${pathname === "/" ? "text-accent-green" : "text-white hover:text-accent-green"}`}
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
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${pathname.startsWith("/services") || pathname === "/funding" ? "text-accent-green" : "text-white hover:text-accent-green"}`}
                >
                  Services
                  <svg className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Desktop Mega Menu Dropdown */}
                {servicesOpen && (
                  <div
                    className="absolute top-full -left-64 w-[900px] pt-4"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="glass-navbar p-8 rounded-3xl shadow-2xl border border-white/20 animate-in fade-in slide-in-from-top-2 duration-300 overflow-hidden">
                      <div className="grid grid-cols-12 gap-8 relative z-10">
                        {/* Featured Section: Funding & Consultancy */}
                        <div className="col-span-8">
                          <div className="mb-6">
                            <h3 className="text-white font-bold text-xl mb-1 flex items-center gap-2">
                              <span>{services[0].icon}</span>
                              {services[0].title}
                            </h3>
                            <p className="text-gray-400 text-sm">{services[0].description}</p>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            {services[0].subItems?.map((subItem, idx) => (
                              <Link
                                key={idx}
                                href={subItem.href}
                                className="group/item flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-green/50 hover:bg-white/10 transition-all duration-300"
                              >
                                <div className={`w-10 h-10 rounded-xl ${subItem.iconBg} flex items-center justify-center text-xl mb-3 group-hover/item:scale-110 transition-transform`}>
                                  {subItem.icon}
                                </div>
                                <div className="font-semibold text-white text-sm mb-1 group-hover/item:text-accent-green transition-colors">{subItem.title}</div>
                                <div className="text-gray-400 text-xs leading-relaxed line-clamp-2">{subItem.description}</div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Other Services Section */}
                        <div className="col-span-4 border-l border-white/10 pl-8">
                          <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
                          <div className="flex flex-col gap-2">
                            {services.slice(1).map((service, idx) => (
                              <Link
                                key={idx}
                                href={service.href}
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/link"
                              >
                                <div className={`w-8 h-8 rounded-lg ${service.iconBg} flex items-center justify-center text-lg shrink-0 group-hover/link:scale-110 transition-transform`}>
                                  {service.icon}
                                </div>
                                <div>
                                  <div className="text-white text-sm font-medium group-hover/link:text-accent-green transition-colors">{service.title}</div>
                                  <div className="text-gray-400 text-[10px] line-clamp-1">{service.description}</div>
                                </div>
                              </Link>
                            ))}
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${pathname === n.href ? "text-accent-green" : "text-white hover:text-accent-green"}`}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            {/* Right Side Icons & Info */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Business Hours */}
              <div className="text-white text-xs mr-2">
                <div className="font-medium text-accent-green">9:30 AM - 6:00 PM</div>
                <div className="text-gray-400">Monday - Saturday</div>
              </div>

              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/919876543210"
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
                href="tel:+919876543210"
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand transition-all duration-300"
              >
                <svg className="w-4.5 h-4.5 text-white hover:text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {servicesOpen ? (
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

          {/* Mobile Menu */}
          {servicesOpen && (
            <div className="lg:hidden mt-2 glass-navbar p-6 rounded-2xl animate-in slide-in-from-top-4 duration-300 max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col gap-1">
                <Link href="/" onClick={() => setServicesOpen(false)} className={`px-4 py-3 rounded-xl text-lg font-medium transition-colors ${pathname === "/" ? "text-accent-green bg-white/5" : "text-white hover:bg-white/5"}`}>
                  Home
                </Link>

                <div className="mt-4 mb-2 px-4 text-accent-green text-xs font-bold uppercase tracking-widest">Our Services</div>

                {services.map((service, index) => (
                  <div key={index} className="flex flex-col">
                    <Link
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-white/5 transition-colors"
                    >
                      <span>{service.icon}</span>
                      <span className="font-medium">{service.title}</span>
                    </Link>

                    {/* If service has subitems, show them nested in mobile too */}
                    {service.subItems && (
                      <div className="ml-8 flex flex-col gap-1 border-l border-white/10 pl-4 py-1">
                        {service.subItems.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            onClick={() => setServicesOpen(false)}
                            className="py-2 text-sm text-gray-400 hover:text-accent-green transition-colors"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="h-px bg-white/10 my-4"></div>

                {nav.slice(1).map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setServicesOpen(false)}
                    className={`px-4 py-3 rounded-xl text-lg font-medium transition-colors ${pathname === n.href ? "text-accent-green bg-white/5" : "text-white hover:bg-white/5"}`}
                  >
                    {n.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-24"></div>

    </>
  );
}
