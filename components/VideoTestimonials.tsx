"use client";

import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
//  VIDEO DATA — replace youtubeId values with real IDs from your YouTube links
//  e.g. for https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  youtubeId: "dQw4w9WgXcQ"
// ─────────────────────────────────────────────────────────────────────────────
const videos = [
    {
        youtubeId: "PLACEHOLDER_1", // ← replace with real YouTube video ID
        title: "How Ewolyn Helped Us Secure ₹50 Lakh Funding",
        client: "Rahul Mehta",
        business: "Manufacturing MSME, Surat",
        tag: "MSME Funding",
    },
    {
        youtubeId: "PLACEHOLDER_2", // ← replace with real YouTube video ID
        title: "From Application to Approval in 48 Hours",
        client: "Priya Sharma",
        business: "D2C Brand Founder, Ahmedabad",
        tag: "Fast Approval",
    },
    {
        youtubeId: "PLACEHOLDER_3", // ← replace with real YouTube video ID
        title: "Government Scheme Support That Actually Works",
        client: "Amit Patel",
        business: "Startup Founder, Mumbai",
        tag: "Govt. Schemes",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
//  Utility — build a safe YouTube thumbnail URL from a video ID
// ─────────────────────────────────────────────────────────────────────────────
function ytThumb(id: string) {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

// ─────────────────────────────────────────────────────────────────────────────
//  Single video card — shows thumbnail until user clicks play
// ─────────────────────────────────────────────────────────────────────────────
function VideoCard({
    youtubeId,
    title,
    client,
    business,
    tag,
}: (typeof videos)[0]) {
    const [playing, setPlaying] = useState(false);
    const isPlaceholder = youtubeId.startsWith("PLACEHOLDER");

    return (
        <div className="group flex flex-col rounded-2xl overflow-hidden shadow-soft border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            {/* ── Video / Thumbnail area ── */}
            <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
                {playing && !isPlaceholder ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    />
                ) : (
                    <>
                        {/* Thumbnail */}
                        {!isPlaceholder ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={ytThumb(youtubeId)}
                                alt={title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            /* Placeholder gradient when no real ID yet */
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-cyan to-primary flex items-center justify-center">
                                <span className="text-white/40 text-xs font-mono uppercase tracking-widest">
                                    Video coming soon
                                </span>
                            </div>
                        )}

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                        {/* Play button */}
                        <button
                            onClick={() => !isPlaceholder && setPlaying(true)}
                            aria-label={`Play: ${title}`}
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${isPlaceholder
                                    ? "cursor-not-allowed opacity-40"
                                    : "cursor-pointer opacity-100"
                                }`}
                        >
                            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                                {/* SVG play icon */}
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    className="h-7 w-7 ml-1"
                                    aria-hidden="true"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </span>
                        </button>

                        {/* Tag badge */}
                        <span className="absolute top-3 left-3 rounded-full bg-cyan-bright/90 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white shadow">
                            {tag}
                        </span>
                    </>
                )}
            </div>

            {/* ── Text content ── */}
            <div className="flex flex-col gap-1 px-5 py-4">
                <p className="text-sm font-semibold text-ink leading-snug line-clamp-2">
                    {title}
                </p>
                <div className="mt-2 flex items-center gap-2">
                    {/* Avatar circle */}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-xs font-bold text-white">
                        {client[0]}
                    </span>
                    <div>
                        <p className="text-xs font-semibold text-evolyn-blue">{client}</p>
                        <p className="text-xs text-muted">{business}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Main section
// ─────────────────────────────────────────────────────────────────────────────
export default function VideoTestimonials() {
    return (
        <section className="relative overflow-hidden py-16 lg:py-20">
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1B4F8C] to-[#0f172a] opacity-95" />
            {/* Subtle pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="container-max relative z-10">
                {/* ── Heading ── */}
                <div className="mb-12 text-center">
                    {/* Eyebrow */}
                    <span className="inline-block rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan mb-4">
                        Real Stories · Real Results
                    </span>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Why Businesses{" "}
                        <span className="gradient-text-light">Choose Ewolyn</span>
                    </h2>
                    <p className="mt-3 mx-auto max-w-xl text-sm text-slate-300">
                        Hear directly from founders and MSME owners who secured funding and
                        scaled their businesses with Ewolyn&apos;s support.
                    </p>
                </div>

                {/* ── Video grid ── */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {videos.map((v) => (
                        <VideoCard key={v.youtubeId} {...v} />
                    ))}
                </div>

                {/* ── Bottom CTA ── */}
                <div className="mt-12 text-center">
                    <a
                        href="/contact"
                        className="btn inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold"
                    >
                        Start Your Success Story
                        <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
