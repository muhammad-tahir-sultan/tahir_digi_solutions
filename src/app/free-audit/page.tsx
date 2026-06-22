import type { Metadata } from "next";
import { getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { AuditPageContent } from "@/components/forms/AuditForm";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  return buildMetadata("free-audit", data.seo["free-audit"], "/free-audit");
}

export default function FreeAuditPage() {
  return <AuditPageContent />;
}
