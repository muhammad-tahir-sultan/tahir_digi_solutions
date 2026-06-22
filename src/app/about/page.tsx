import type { Metadata } from "next";
import { getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { PageHero, FinalCTA } from "@/components/sections/ContentSections";
import { AboutDetailSection } from "@/components/sections/premium/AboutDetailSection";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  return buildMetadata("about", data.seo.about, "/about");
}

export default async function AboutPage() {
  const data = await getSiteData();

  return (
    <>
      <PageHero
        badge="About Us"
        title="Your Local Business Growth Partner"
        description="We help local businesses attract more customers through high-converting websites."
      />
      <AboutDetailSection about={data.content.about} />
      <FinalCTA content={data.content.cta} />
    </>
  );
}
