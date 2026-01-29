"use client";

import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { serviceGroups } from "@/lib/content";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem, ButtonHover } from "@/components/ui/AnimationWrappers";

export default function ServicesClient() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center pt-24 pb-20 hero-navy-gradient text-white overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[120px]"></div>

                <div className="container-max relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-white text-sm font-bold mb-6 border border-blue-500/30">
                                <span>🚀</span>
                                Enterprise Scale Solutions
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                                <span className="text-accent-green">Comprehensive</span> <br />
                                <span className="text-white">Business Ecosystem</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                                From initial registration to multi-crore funding—we provide the institutional
                                support required to scale your business in the Indian ecosystem.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <ButtonHover>
                                    <Link href="/contact" className="btn-hero-green">
                                        Explore Our Services
                                    </Link>
                                </ButtonHover>
                                <ButtonHover>
                                    <a href="tel:18005710607" className="btn-hero-outline">
                                        Free Consultation
                                    </a>
                                </ButtonHover>
                            </div>
                        </FadeIn>

                        <SlideIn direction="right">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent-green to-blue-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                    <Image
                                        src="/success-celebration.png"
                                        alt="Business Success and Growth"
                                        width={800}
                                        height={800}
                                        className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
                                </div>
                            </div>
                        </SlideIn>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white">
                <div className="container-max">
                    <StaggerContainer>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {serviceGroups.map((g, idx) => (
                                <StaggerItem key={g.title}>
                                    <ServiceCard title={g.title} items={g.items} image={g.image} />
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
