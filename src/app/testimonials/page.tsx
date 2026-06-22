import type { Metadata } from "next";
import { Star } from "lucide-react";
import { getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { PageHero, FinalCTA } from "@/components/sections/ContentSections";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  return buildMetadata("testimonials", data.seo.testimonials, "/testimonials");
}

export default async function TestimonialsPage() {
  const data = await getSiteData();

  return (
    <>
      <PageHero
        badge="Testimonials"
        title="Trusted by Local Business Owners"
        description="See what our partners say about working with Digital Solutions."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.testimonials.map((item) => (
              <Card key={item.id} className="flex flex-col">
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-muted">&ldquo;{item.review}&rdquo;</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted">{item.business}</p>
                  <p className="text-xs text-muted">{item.industry}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA content={data.content.cta} />
    </>
  );
}
