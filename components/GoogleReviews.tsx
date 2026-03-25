"use client";

import { useState, useEffect, useCallback } from "react";

// ─── Google Icon ─────────────────────────────────────────────────────────────
const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
);

// ─── Star Rating ─────────────────────────────────────────────────────────────
const Stars = ({ count = 5 }: { count?: number }) => (
    <div className="flex gap-0.5">
        {Array.from({ length: count }).map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
        ))}
    </div>
);

// ─── Review Data ──────────────────────────────────────────────────────────────
const reviews = [
    {
        id: 1,
        name: "Prashant M.",
        business: "E-commerce Startup, Ahmedabad",
        initials: "PM",
        text: "Absolutely outstanding service! Ewolyn helped us secure our MSME registration and DPIIT certification in record time. The team was incredibly professional and guided us through every step.",
        full: "Absolutely outstanding service! Ewolyn helped us secure our MSME registration and DPIIT certification in record time. The team was incredibly professional and guided us through every step. Highly recommend for any startup founder.",
        date: "2 weeks ago",
    },
    {
        id: 2,
        name: "Roshan Mehta",
        business: "Manufacturing MSME, Surat",
        initials: "RM",
        text: "I had a great experience working with Ewolyn. They helped us prepare our pitch deck and MSME documentation. The team is highly professional and very responsive.",
        full: "I had a great experience working with Ewolyn. They helped us prepare our pitch deck and MSME documentation. The team is highly professional and very responsive. Next-Gen Business Consultant was prompt and explained everything clearly.",
        date: "1 month ago",
    },
    {
        id: 3,
        name: "RCPK Jewellers",
        business: "Retail Business, Rajkot",
        initials: "RJ",
        text: "Next Gen Business Consultant offers top-notch service! Krishna Kathiriya was incredibly professional and made the entire process seamless and hassle-free.",
        full: "Next Gen Business Consultant offers top-notch service! Krishna Kathiriya was incredibly professional and made the entire process seamless and hassle-free. They took care of our GST registration and compliance with zero stress on our end.",
        date: "3 weeks ago",
    },
    {
        id: 4,
        name: "Ankit Shah",
        business: "Tech Startup, Bangalore",
        initials: "AS",
        text: "Excellent support throughout the entire funding journey. They helped us navigate PMEGP scheme and got us ₹75 Lakhs in funding. The process was transparent and efficient.",
        full: "Excellent support throughout the entire funding journey. They helped us navigate PMEGP scheme and got us ₹75 Lakhs in funding. The process was transparent and efficient. Would 100% recommend to any MSME owner.",
        date: "1 month ago",
    },
    {
        id: 5,
        name: "Kavita Patel",
        business: "Food & Beverage, Vadodara",
        initials: "KP",
        text: "Ewolyn transformed our business! From FSSAI certification to Udyam registration, they handled everything professionally. The team is knowledgeable and always available to help.",
        full: "Ewolyn transformed our business! From FSSAI certification to Udyam registration, they handled everything professionally. The team is knowledgeable and always available to help. Our business scaling has been smoother than ever before.",
        date: "2 months ago",
    },
];

// ─── Carousel helpers ─────────────────────────────────────────────────────────
function mod(n: number, m: number) {
    return ((n % m) + m) % m;
}

interface CardProps {
    review: {
        id: number | string;
        name: string;
        business?: string;
        initials: string;
        text: string;
        full: string;
        date: string;
    };
    position: "center" | "left" | "right" | "hidden";
    onClick?: () => void;
}

function ReviewCard({ review, position, onClick }: CardProps) {
    const positionStyles: Record<string, React.CSSProperties> = {
        center: {
            transform: "translateX(-50%) scale(1)",
            zIndex: 20,
            opacity: 1,
        },
        left: {
            transform: "translateX(calc(-50% - 58%)) scale(0.82)",
            zIndex: 10,
            opacity: 0.55,
        },
        right: {
            transform: "translateX(calc(-50% + 58%)) scale(0.82)",
            zIndex: 10,
            opacity: 0.55,
        },
        hidden: {
            transform: "translateX(-50%) scale(0.7)",
            zIndex: 0,
            opacity: 0,
            pointerEvents: "none" as const,
        },
    };

    const style = positionStyles[position] ?? positionStyles.hidden;

    return (
        <div
            className="absolute top-0 left-1/2 w-[340px] sm:w-[400px] cursor-pointer select-none"
            style={{
                transition: "transform 0.45s cubic-bezier(0.34,1.2,0.64,1), opacity 0.45s ease, z-index 0s",
                ...style,
            }}
            onClick={onClick}
        >
            <div
                className="rounded-2xl p-6 shadow-2xl border"
                style={{
                    background: position === "center"
                        ? "linear-gradient(145deg, #1B4F8C 0%, #0d2f57 100%)"
                        : "linear-gradient(145deg, #1e3a5f 0%, #152844 100%)",
                    borderColor: position === "center" ? "rgba(55,175,225,0.3)" : "rgba(255,255,255,0.08)",
                    boxShadow: position === "center"
                        ? "0 20px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(55,175,225,0.2)"
                        : "0 8px 30px rgba(0,0,0,0.2)",
                }}
            >
                {/* Top row */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <GoogleIcon />
                        <span className="text-white/80 text-sm font-semibold tracking-wide">Google Reviews</span>
                    </div>
                    <Stars />
                </div>

                {/* Reviewer */}
                <div className="flex items-center gap-3 mb-4">
                    <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-xs shrink-0"
                        style={{ background: "linear-gradient(135deg, #37AFE1 0%, #1B4F8C 100%)" }}
                    >
                        {review.initials}
                    </div>
                    <div>
                        <p className="text-white font-black text-sm">{review.name}</p>
                        <p className="text-white/45 text-xs font-medium">{review.business}</p>
                    </div>
                    <span className="ml-auto text-white/30 text-xs">{review.date}</span>
                </div>

                {/* Review text */}
                <p className="text-white/75 text-sm leading-relaxed line-clamp-4">
                    &ldquo;{review.text}&rdquo;
                </p>

                {/* Read More */}
                <a
                    href="https://www.google.com/maps/place/Ewolyn"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 mt-4 text-[#37AFE1] text-xs font-bold hover:underline"
                >
                    Read More
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4-4 4M3 12h18" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function GoogleReviews() {
    const [current, setCurrent] = useState(0);
    const [displayReviews, setDisplayReviews] = useState(reviews);
    const [overallRating, setOverallRating] = useState("4.9");
    const [totalRatings, setTotalRatings] = useState("500+");

    useEffect(() => {
        async function fetchLiveReviews() {
            try {
                const res = await fetch("/api/google-reviews");
                if (res.ok) {
                    const data = await res.json();
                    if (data.reviews && data.reviews.length > 0) {
                        const formatted = data.reviews
                            .filter((r: any) => r.text && r.text.length > 10)
                            .map((r: any, i: number) => {
                                const initials = r.author_name
                                    ? r.author_name.split(" ").map((n: string) => n[0]).join("").substring(0, 2).toUpperCase()
                                    : "U";
                                return {
                                    id: `api-review-${i}`,
                                    name: r.author_name,
                                    business: "", // Google API doesn't list the reviewer's business
                                    initials,
                                    text: r.text,
                                    full: r.text,
                                    date: r.relative_time_description,
                                };
                            });

                        // Only override if we get enough reviews to populate the carousel
                        if (formatted.length >= 3) {
                            setDisplayReviews(formatted);
                            if (data.rating) setOverallRating(data.rating.toString());
                            if (data.totalRatings) setTotalRatings(data.totalRatings.toString());
                        }
                    }
                }
            } catch (err) {
                console.error("Failed to fetch live Google Reviews.", err);
            }
        }

        fetchLiveReviews();
    }, []);

    const total = displayReviews.length;

    const next = useCallback(() => setCurrent((c) => mod(c + 1, total)), [total]);
    const prev = useCallback(() => setCurrent((c) => mod(c - 1, total)), [total]);

    // Auto-rotate every 4s
    useEffect(() => {
        const timer = setInterval(next, 4000);
        return () => clearInterval(timer);
    }, [next]);

    function getPosition(index: number): "center" | "left" | "right" | "hidden" {
        const diff = mod(index - current, total);
        if (diff === 0) return "center";
        if (diff === 1 || diff === total - 1) return diff === 1 ? "right" : "left";
        return "hidden";
    }

    return (
        <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-[#f0f4f8] to-[#e8edf5]">
            {/* Subtle dot grid */}
            <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, #1B4F8C 1px, transparent 0)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="container-max relative z-10">
                {/* Heading */}
                <div className="mb-14 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#1B4F8C]/20 bg-[#1B4F8C]/08 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1B4F8C] mb-4">
                        <GoogleIcon />
                        Verified Google Reviews
                    </span>
                    <h2 className="text-3xl font-bold text-[#1B4F8C] sm:text-4xl">
                        What Our Clients{" "}
                        <span className="text-[#37AFE1]">Say</span>
                    </h2>
                    <p className="mt-3 mx-auto max-w-xl text-sm text-slate-500">
                        Discover how our clients describe their experience with us — their trust
                        and satisfaction inspire everything we do.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative h-[320px] sm:h-[290px]">
                    {displayReviews.map((review, i) => (
                        <ReviewCard
                            key={review.id}
                            review={review}
                            position={getPosition(i)}
                            onClick={() => setCurrent(i)}
                        />
                    ))}

                    {/* Left arrow */}
                    <button
                        onClick={prev}
                        aria-label="Previous review"
                        className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-[#1B4F8C] hover:bg-[#1B4F8C] hover:text-white transition-all duration-200"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right arrow */}
                    <button
                        onClick={next}
                        aria-label="Next review"
                        className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-[#1B4F8C] hover:bg-[#1B4F8C] hover:text-white transition-all duration-200"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dot indicators */}
                <div className="mt-6 flex justify-center gap-2">
                    {displayReviews.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to review ${i + 1}`}
                            className="rounded-full transition-all duration-300"
                            style={{
                                width: i === current ? "24px" : "8px",
                                height: "8px",
                                background: i === current ? "#37AFE1" : "#cbd5e1",
                            }}
                        />
                    ))}
                </div>

                {/* Overall rating strip */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
                    <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-3 shadow-md border border-slate-200">
                        <GoogleIcon />
                        <div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-2xl font-black text-[#1B4F8C]">{overallRating}</span>
                                <Stars />
                            </div>
                            <p className="text-xs text-slate-500 font-semibold mt-0.5">Based on {totalRatings} Google Reviews</p>
                        </div>
                    </div>
                    <a
                        href="https://www.google.com/maps/place/Ewolyn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#1B4F8C] border-2 border-[#1B4F8C] rounded-xl px-6 py-2.5 hover:bg-[#1B4F8C] hover:text-white transition-all duration-200"
                    >
                        <GoogleIcon />
                        View All Reviews on Google
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
