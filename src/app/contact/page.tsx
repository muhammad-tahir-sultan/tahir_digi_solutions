import type { Metadata } from "next";
import { getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { ContactPageContent } from "@/components/forms/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  return buildMetadata("contact", data.seo.contact, "/contact");
}

export default function ContactPage() {
  return <ContactPageContent />;
}
