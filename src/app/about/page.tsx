import type { Metadata } from "next";
import { Target, Eye, Heart, Shield, Award, TrendingUp } from "lucide-react";
import { getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { PageHero, FinalCTA } from "@/components/sections/ContentSections";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  return buildMetadata("about", data.seo.about, "/about");
}

const values = [
  { icon: Shield, title: "Transparency", description: "Clear timelines, honest pricing, and open communication throughout every project." },
  { icon: Award, title: "Quality", description: "Enterprise-quality design and development standards for every local business we serve." },
  { icon: TrendingUp, title: "Results", description: "Every decision is driven by measurable outcomes — leads, bookings, and customer growth." },
  { icon: Heart, title: "Long-Term Partnerships", description: "We build lasting relationships, not one-off projects. Your growth is our success." },
];

export default async function AboutPage() {
  const data = await getSiteData();
  const { about, cta } = data.content;

  return (
    <>
      <PageHero
        badge="About Us"
        title="Your Local Business Growth Partner"
        description="We help local businesses attract more customers through high-converting websites."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <Target className="h-8 w-8 text-primary" />
              <h2 className="mt-4 text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-4 text-muted">{about.mission}</p>
            </Card>
            <Card>
              <Eye className="h-8 w-8 text-primary" />
              <h2 className="mt-4 text-2xl font-bold text-foreground">Our Vision</h2>
              <p className="mt-4 text-muted">{about.vision}</p>
            </Card>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground">Our Story</h2>
            <p className="mt-4 max-w-3xl text-lg text-muted">{about.story}</p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground">Why Businesses Choose Us</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {about.whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-secondary/30 p-4">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground">Core Values</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <value.icon className="mx-auto h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <FinalCTA content={cta} />
    </>
  );
}
