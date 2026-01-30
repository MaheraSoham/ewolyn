import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us",
    description:
      "Get in touch with the Ewolyn team for consultations, funding-readiness support, and any service inquiries.",
  };
}

export default function ContactPage() {
  return <ContactContent />;
}
