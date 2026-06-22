import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getPortfolioBySlug, getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

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
      title: `${item.title} | Digital Solutions Portfolio`,
      description: item.overview,
    },
    `/portfolio/${slug}`
  );
}

const industryColors: Record<string, string> = {
  Dentists: "from-blue-500 to-blue-700",
  "Law Firms": "from-slate-600 to-slate-800",
  "Real Estate": "from-emerald-500 to-emerald-700",
  Accounting: "from-amber-500 to-amber-700",
  Physiotherapy: "from-cyan-500 to-cyan-700",
};

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = await getPortfolioBySlug(slug);

  if (!item) notFound();

  return (
    <>
      <div
        className={`h-64 bg-gradient-to-br sm:h-80 ${industryColors[item.industry] || "from-primary to-accent"}`}
      />
      <section className="py-12">
        <Container>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="mt-8 max-w-3xl">
            <Badge>{item.industry}</Badge>
            <h1 className="mt-4 text-4xl font-bold text-foreground">{item.title}</h1>
            <p className="mt-4 text-lg text-muted">{item.overview}</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Card>
              <h2 className="font-semibold text-foreground">Technologies Used</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech} className="bg-secondary text-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card>
              <h2 className="font-semibold text-foreground">Key Features</h2>
              <ul className="mt-4 space-y-2">
                {item.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted">
                    • {feature}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="mt-8">
            <Button href={item.demoUrl} variant="outline">
              View Live Demo
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
