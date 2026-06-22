import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCaseStudyBySlug, getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

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
      title: `${study.title} | Digital Solutions Case Study`,
      description: study.businessOverview,
    },
    `/case-studies/${slug}`
  );
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) notFound();

  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-16">
        <Container>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
          <Badge className="mt-6">{study.industry}</Badge>
          <h1 className="mt-4 text-4xl font-bold text-foreground">{study.title}</h1>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-4xl space-y-12">
            <div>
              <h2 className="text-xl font-bold text-foreground">Business Overview</h2>
              <p className="mt-4 text-muted">{study.businessOverview}</p>
            </div>

            <Card>
              <h2 className="font-semibold text-foreground">Challenges</h2>
              <ul className="mt-4 space-y-2">
                {study.challenges.map((c) => (
                  <li key={c} className="text-sm text-muted">• {c}</li>
                ))}
              </ul>
            </Card>

            <div>
              <h2 className="text-xl font-bold text-foreground">Strategy</h2>
              <p className="mt-4 text-muted">{study.strategy}</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <h3 className="font-semibold text-foreground">Website Improvements</h3>
                <ul className="mt-4 space-y-2">
                  {study.websiteImprovements.map((item) => (
                    <li key={item} className="text-sm text-muted">• {item}</li>
                  ))}
                </ul>
              </Card>
              <Card>
                <h3 className="font-semibold text-foreground">Conversion Improvements</h3>
                <ul className="mt-4 space-y-2">
                  {study.conversionImprovements.map((item) => (
                    <li key={item} className="text-sm text-muted">• {item}</li>
                  ))}
                </ul>
              </Card>
              <Card>
                <h3 className="font-semibold text-foreground">SEO Improvements</h3>
                <ul className="mt-4 space-y-2">
                  {study.seoImprovements.map((item) => (
                    <li key={item} className="text-sm text-muted">• {item}</li>
                  ))}
                </ul>
              </Card>
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <h2 className="font-semibold text-foreground">Expected Outcome</h2>
              <p className="mt-4 text-muted">{study.expectedOutcome}</p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
