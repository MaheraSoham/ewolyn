import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Services | Ewolyn",
    description:
      "Registration, certification, and digital growth services tailored for startups and MSMEs.",
  };
}

export default function ServicesPage() {
  return <ServicesClient />;
}
