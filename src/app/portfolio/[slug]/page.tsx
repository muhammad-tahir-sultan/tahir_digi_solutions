import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPortfolioBySlug, getSiteData } from "@/lib/data";
import { buildMetadata, SITE_NAME } from "@/lib/seo";
import { PortfolioDetailShowcase } from "@/components/portfolio/PortfolioDetailShowcase";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const data = await getSiteData();
  return data.portfolio.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await getPortfolioBySlug(slug);
  if (!item) return {};

  return buildMetadata(
    "portfolio",
    {
      title: `${item.title} | ${SITE_NAME} Portfolio`,
      description: item.overview,
    },
    `/portfolio/${slug}`
  );
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = await getPortfolioBySlug(slug);

  if (!item) notFound();

  return <PortfolioDetailShowcase item={item} />;
}
