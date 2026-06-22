import type { Metadata } from "next";
import { getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { PageHero, FinalCTA } from "@/components/sections/ContentSections";
import { IndustriesDetailSection } from "@/components/sections/premium/IndustriesDetailSection";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  return buildMetadata("industries", data.seo.industries, "/industries");
}

export default async function IndustriesPage() {
  const data = await getSiteData();

  return (
    <>
      <PageHero
        badge="Industries"
        title="Specialized Solutions for Your Industry"
        description="We understand the unique challenges local businesses face in your market."
      />
      <IndustriesDetailSection industries={data.industries} />
      <FinalCTA content={data.content.cta} />
    </>
  );
}
