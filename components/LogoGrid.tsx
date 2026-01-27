import Image from "next/image";

// Strategic partners - add your logo files to public/logos/
const partners = [
  { name: "SIDBI", logo: "/logos/sidbi.png" },
  { name: "Startup India", logo: "/logos/startup-india.png" },
  { name: "HDFC Bank", logo: "/logos/hdfc-bank.png" },
  { name: "MUDRA", logo: "/logos/mudra.png" },
  { name: "NABARD", logo: "/logos/nabard.png" },
  { name: "SBI", logo: "/logos/sbi.png" },
  { name: "Bank of Baroda", logo: "/logos/bank-of-baroda.png" },
  { name: "CGTMSE", logo: "/logos/cgtmse.png" },
];

const certifications = [
  { title: "DPIIT Recognition", description: "Officially recognized by DPIIT", icon: "✓" },
  { title: "ISO 9001:2015", description: "Quality management certified", icon: "✓" },
  { title: "GeM Registered", description: "Government e-Marketplace vendor", icon: "✓" },
  { title: "Top 100 Fintech", description: "Leading emerging fintech", icon: "✓" },
];

export default function LogoGrid() {
  return (
    <section className="section section-light-green">
      <div className="container-max">
        {/* Trusted Network Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-cyan/10 rounded-full px-5 py-2.5 animate-pulse-glow">
            <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-sm font-medium text-cyan">Trusted Network</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-ink">
          Our Strategic <span className="gradient-text">Partners</span>
        </h2>
        <p className="text-center text-muted mt-3">
          Collaborating with leaders to bring you the best funding solutions
        </p>

        {/* Partner Logos Scrolling Carousel - Right to Left */}
        <div className="mt-10 overflow-hidden relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f0fdf4] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f0fdf4] to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex animate-scroll-rtl">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-1-${index}`}
                className="flex-shrink-0 mx-3 flex items-center justify-center p-4 bg-white border border-slate-200 rounded-xl hover:shadow-glow hover:border-cyan/50 hover:scale-105 transition-all duration-300 min-w-[160px] h-[80px]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={45}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-2-${index}`}
                className="flex-shrink-0 mx-3 flex items-center justify-center p-4 bg-white border border-slate-200 rounded-xl hover:shadow-glow hover:border-cyan/50 hover:scale-105 transition-all duration-300 min-w-[160px] h-[80px]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={45}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Recognitions */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-ink mb-8">
            Certifications & Recognitions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-green/10 text-accent-green text-xl font-bold">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-ink">{cert.title}</h4>
                  <p className="text-sm text-muted">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-12 animated-gradient rounded-2xl p-10 text-white text-center shadow-glow-lg">
          <p className="text-xl font-medium">
            Facilitated over <span className="gradient-text-green font-bold text-2xl">₹500 Crore</span> in MSME funding through strategic partnerships
          </p>
          <p className="text-slate-300 mt-3 text-base">Trusted by 20,000+ businesses across India</p>
        </div>
      </div>
    </section>
  );
}
