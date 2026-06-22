import type { Metadata } from "next";
import { getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { PageHero, FinalCTA } from "@/components/sections/ContentSections";
import {
  ProcessTimelineSection,
  detailedProcessSteps,
} from "@/components/sections/premium/ProcessTimelineSection";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  return buildMetadata("process", data.seo.process, "/process");
}

export default async function ProcessPage() {
  const data = await getSiteData();

  return (
    <>
      <PageHero
        badge="Our Process"
        title="From Discovery to Growth — A Proven 6-Step Process"
        description="A transparent, structured approach that delivers results for local businesses."
      />
      <ProcessTimelineSection steps={detailedProcessSteps} showHeading={false} />
      <FinalCTA content={data.content.cta} />
    </>
  );
}
