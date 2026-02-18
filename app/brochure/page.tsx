import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Brochure | Ewolyn Services Pvt Ltd",
    description:
        "Download or view the official Ewolyn Services brochure — your complete guide to our MSME funding, startup enablement, and business growth solutions.",
};

export default function BrochurePage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero strip */}
            <section className="hero-navy-gradient text-white pt-28 pb-16 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-green/5 rounded-full blur-[100px] -z-10" />

                <div className="container-max relative z-10">
                    <span className="inline-block bg-accent-green/20 text-accent-green text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        Company Brochure
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        <span className="text-accent-green">Ewolyn</span>{" "}
                        <span className="text-white">Services Brochure</span>
                    </h1>
                    <p className="text-slate-300/90 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
                        Explore our complete range of MSME funding, government scheme
                        assistance, business registration, and growth strategy services.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href="/brochure.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md border border-slate-200"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View PDF
                        </a>
                        <a
                            href="/brochure.pdf"
                            download="Ewolyn_Brochure.pdf"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-accent-green hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-green-500/20"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                            Download Brochure
                        </a>
                    </div>
                </div>
            </section>

            {/* Embedded PDF */}
            <section className="py-12">
                <div className="container-max">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                        <iframe
                            src="/brochure.pdf"
                            className="w-full"
                            style={{ height: "85vh" }}
                            title="Ewolyn Services Brochure"
                        >
                            <p className="p-8 text-center">
                                Your browser does not support PDFs.
                                <a href="/brochure.pdf" className="text-accent-green font-bold underline ml-1">Download the brochure</a>
                                to view it.
                            </p>
                        </iframe>
                    </div>
                </div>
            </section>
        </main>
    );
}
