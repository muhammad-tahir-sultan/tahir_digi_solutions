import type { Metadata } from "next";
import { getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHero, FinalCTA } from "@/components/sections/ContentSections";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  return buildMetadata("process", data.seo.process, "/process");
}

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your business, goals, target customers, and current online presence through a detailed discovery call.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We create a strategic plan including site structure, conversion paths, content requirements, and project timeline.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our team creates custom designs focused on your brand, industry, and conversion goals for your approval.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build your website with clean code, mobile optimization, SEO foundations, and performance best practices.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "After thorough testing, we launch your site with analytics, forms, and tracking configured for success.",
  },
  {
    number: "06",
    title: "Support",
    description:
      "We provide post-launch support, performance monitoring, and ongoing optimization to keep your site growing.",
  },
];

export default async function ProcessPage() {
  const data = await getSiteData();

  return (
    <>
      <PageHero
        badge="Our Process"
        title="From Discovery to Growth — A Proven 6-Step Process"
        description="A transparent, structured approach that delivers results for local businesses."
      />
      <section className="py-20">
        <Container>
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-8 top-0 hidden h-full w-px bg-border md:block" />
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="relative flex gap-8">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <div className="pt-2">
                    <h2 className="text-xl font-bold text-foreground">{step.title}</h2>
                    <p className="mt-2 text-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <FinalCTA content={data.content.cta} />
    </>
  );
}
