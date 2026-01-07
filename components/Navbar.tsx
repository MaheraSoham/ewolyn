"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const services = [
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
  const [expandedService, setExpandedService] = useState<number | null>(0);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-white py-2 px-4">
        <div className="container-max flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400">New:</span>
            <span>Genesis Fund ₹490Cr for Tech Startups</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="hover:text-brand flex items-center gap-1">
              📋 Track Application
            </Link>
            <a href="tel:+919737799937" className="bg-slate-800 px-3 py-1 rounded-full hover:bg-slate-700 flex items-center gap-1">
              📞 +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container-max flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.jpg" 
              alt="Ewolyn - Evolving Indian StartUps & MSMEs" 
              width={160} 
              height={50} 
              className="h-12 w-auto"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {/* Home Link */}
            <Link
              href="/"
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition ${
                pathname === "/" 
                  ? "bg-slate-100 text-brand" 
                  : "text-ink hover:bg-slate-50"
              }`}
            >
              <span>🏠</span>
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition ${
                  pathname.startsWith("/services") || pathname === "/funding"
                    ? "bg-slate-100 text-brand" 
                    : "text-ink hover:bg-slate-50"
                }`}
              >
                <span>📋</span>
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-[450px] bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-50">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">Our Services</h3>
                    <p className="text-sm text-gray-500">Comprehensive solutions for your business growth</p>
                  </div>

                  <div className="space-y-1">
                    {services.map((service, index) => (
                      <div key={index}>
                        {service.subItems ? (
                          <div>
                            {/* For Grants, Loans, NBFC, make the card clickable and open the respective page */}
                            {service.subItems ? (
                              <div className="grid grid-cols-3 gap-2">
                                {service.subItems.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.href}
                                    className="flex flex-col items-center p-3 rounded-lg border border-gray-100 hover:border-brand hover:bg-red-50 transition text-center"
                                  >
                                    <div className={`w-8 h-8 rounded-lg ${subItem.iconBg} flex items-center justify-center text-lg mb-1`}>
                                      {subItem.icon}
                                    </div>
                                    <div className="font-medium text-sm text-gray-900">{subItem.title}</div>
                                    <div className="text-xs text-gray-500">{subItem.description}</div>
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              <Link
                                href={service.href}
                                className="w-full flex items-center gap-3 p-3 rounded-lg transition hover:bg-gray-50"
                              >
                                <div className={`w-10 h-10 rounded-lg ${service.iconBg} flex items-center justify-center text-xl`}>
                                  {service.icon}
                                </div>
                                <div className="flex-1 text-left">
                                  <div className="font-medium text-gray-900">{service.title}</div>
                                  <div className="text-sm text-gray-500">{service.description}</div>
                                </div>
                              </Link>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={service.href}
                            className="flex items-center gap-3 p-3 rounded-lg transition hover:bg-gray-50"
                          >
                            <div className={`w-10 h-10 rounded-lg ${service.iconBg} flex items-center justify-center text-xl`}>
                              {service.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-900">{service.title}</div>
                              <div className="text-sm text-gray-500">{service.description}</div>
                            </div>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Items */}
            {nav.slice(1).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition ${
                  pathname === n.href 
                    ? "bg-slate-100 text-brand" 
                    : "text-ink hover:bg-slate-50"
                }`}
              >
                <span>{n.icon}</span>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden gap-3 md:flex">
            <Link href="/funding" className="btn">
              Start Funding Journey →
            </Link>
          </div>

          {/* Mobile Menu */}
          <details className="lg:hidden">
            <summary className="cursor-pointer rounded-md p-2 hover:bg-slate-50">
              <span className="sr-only">Menu</span>
              <div className="h-5 w-6 border-t-2 border-ink before:block before:h-2 before:w-full before:border-t-2 before:border-ink after:block after:h-2 after:w-full after:border-t-2 after:border-ink"></div>
            </summary>
            <div className="absolute left-0 right-0 mt-2 border-b bg-white p-4 shadow-lg z-50">
              <div className="grid gap-3">
                <Link href="/" className="flex items-center gap-2 text-sm font-medium p-2 rounded hover:bg-slate-50">
                  <span>🏠</span>
                  Home
                </Link>
                
                {/* Mobile Services Accordion */}
                <div className="border rounded-lg">
                  <button 
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between gap-2 text-sm font-medium p-3 rounded hover:bg-slate-50"
                  >
                    <span className="flex items-center gap-2">
                      <span>📋</span>
                      Services
                    </span>
                    <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="p-2 border-t space-y-1">
                      {services.map((service, index) => (
                        <Link 
                          key={index}
                          href={service.href}
                          className="flex items-center gap-2 p-2 text-sm rounded hover:bg-slate-50"
                        >
                          <span>{service.icon}</span>
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {nav.slice(1).map((n) => (
                  <Link key={n.href} href={n.href} className="flex items-center gap-2 text-sm font-medium p-2 rounded hover:bg-slate-50">
                    <span>{n.icon}</span>
                    {n.label}
                  </Link>
                ))}
                <Link href="/funding" className="btn mt-2">Start Funding Journey →</Link>
              </div>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
