import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ewolyn.co.in"),
    title: {
        default: `${company.name} — Startup & MSME Enablement`,
        template: `%s — ${company.name}`,
    },
    description:
        "Ewolyn empowers startups and MSMEs with end-to-end support across registrations, certifications, funding readiness, and digital growth.",
    keywords: [
        "Startup India",
        "MSME",
        "Registration",
        "Certification",
        "Funding",
        "Udyam",
        "ISO",
        "ZED",
        "Section 8",
    ],
    openGraph: {
        title: `${company.name} — Startup & MSME Enablement`,
        description:
            "End-to-end registrations, certifications, funding readiness & digital growth services.",
        url: "https://www.ewolyn.co.in/",
        siteName: company.name,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `${company.name} — Startup & MSME Enablement`,
        description:
            "End-to-end registrations, certifications, funding readiness & digital growth services.",
    },
};
