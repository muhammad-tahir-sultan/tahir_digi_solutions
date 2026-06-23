import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getSiteData } from "@/lib/data";
import { buildMetadata, SITE_NAME } from "@/lib/seo";
import { CaseStudyDetailShowcase } from "@/components/sections/premium/CaseStudyDetailShowcase";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const data = await getSiteData();
  return data.caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return {};

  return buildMetadata(
    "case-studies",
    {
      title: `${study.title} | ${SITE_NAME} Case Study`,
      description: study.businessOverview,
    },
    `/case-studies/${slug}`
  );
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) notFound();

  return <CaseStudyDetailShowcase study={study} />;
}
