import type { Metadata } from "next";
import { getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  return buildMetadata("portfolio", data.seo.portfolio, "/portfolio");
}

export default async function PortfolioPage() {
  const data = await getSiteData();

  return <PortfolioGrid portfolio={data.portfolio} cta={data.content.cta} />;
}
