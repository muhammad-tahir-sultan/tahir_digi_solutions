"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import type {
  Service,
  Industry,
  PortfolioItem,
  CaseStudy,
  Testimonial,
  SiteContent,
} from "@/lib/types";

const industryColors: Record<string, string> = {
  Dentists: "from-blue-500 to-blue-700",
  "Law Firms": "from-slate-600 to-slate-800",
  "Real Estate": "from-emerald-500 to-emerald-700",
  Accounting: "from-amber-500 to-amber-700",
  Physiotherapy: "from-cyan-500 to-cyan-700",
};

export function ServicesOverview({ services }: { services: Service[] }) {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          badge="Services"
          title="Everything You Need to Grow Online"
          description="Comprehensive website solutions designed for local business growth."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card hover className="h-full">
                <h3 className="font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted line-clamp-3">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="outline">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function IndustriesPreview({ industries }: { industries: Industry[] }) {
  return (
    <section className="border-y border-border bg-secondary/30 py-20">
      <Container>
        <SectionHeading
          badge="Industries"
          title="Specialized for Your Industry"
          description="We understand the unique challenges and opportunities in your market."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={`/industries#${industry.slug}`}>
                <Card hover className="h-full">
                  <div
                    className={`mb-4 h-2 w-12 rounded-full bg-gradient-to-r ${industryColors[industry.name] || "from-primary to-accent"}`}
                  />
                  <h3 className="font-semibold text-foreground">{industry.name}</h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">
                    {industry.challenges[0]}
                  </p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/industries" variant="outline">
            Explore Industries
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function PortfolioPreview({ portfolio }: { portfolio: PortfolioItem[] }) {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          badge="Portfolio"
          title="Demo Projects for Local Businesses"
          description="Explore our concept projects across key industries."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={`/portfolio/${item.slug}`}>
                <Card hover className="h-full overflow-hidden p-0">
                  <div
                    className={`h-40 bg-gradient-to-br ${industryColors[item.industry] || "from-primary to-accent"}`}
                  />
                  <div className="p-6">
                    <Badge>{item.industry}</Badge>
                    <h3 className="mt-3 font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted line-clamp-2">{item.overview}</p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/portfolio" variant="outline">
            View Full Portfolio
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function CaseStudyPreview({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const study = caseStudies[0];
  if (!study) return null;

  return (
    <section className="border-y border-border bg-secondary/30 py-20">
      <Container>
        <SectionHeading
          badge="Case Study"
          title="How We Approach Growth Projects"
          description="See our strategic approach to helping local businesses succeed online."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="mx-auto max-w-4xl">
            <Badge>{study.industry}</Badge>
            <h3 className="mt-4 text-2xl font-bold text-foreground">{study.title}</h3>
            <p className="mt-4 text-muted">{study.businessOverview}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-foreground">Challenges</p>
                <p className="mt-1 text-sm text-muted">{study.challenges.length} identified</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Improvements</p>
                <p className="mt-1 text-sm text-muted">
                  {study.websiteImprovements.length} website updates
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Strategy</p>
                <p className="mt-1 text-sm text-muted line-clamp-2">{study.strategy}</p>
              </div>
            </div>
            <div className="mt-8">
              <Button href={`/case-studies/${study.slug}`}>
                Read Case Study
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}

export function TestimonialsPreview({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="What Local Business Owners Say"
          description="Real feedback from businesses we've partnered with."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full">
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted">&ldquo;{item.review}&rdquo;</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted">
                    {item.business} · {item.industry}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/testimonials" variant="outline">
            Read All Testimonials
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function FinalCTA({ content }: { content: SiteContent["cta"] }) {
  return (
    <section className="relative overflow-hidden py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-blue-700 px-8 py-16 text-center text-white sm:px-16"
        >
          <BackgroundEffects variant="subtle" />
          <div className="noise-overlay absolute inset-0 opacity-20" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">{content.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100">{content.subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="/free-audit"
                size="lg"
                className="bg-white text-primary hover:bg-blue-50"
              >
                {content.primaryCta}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                {content.secondaryCta}
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export function PageHero({
  badge,
  title,
  description,
}: {
  badge?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              {badge}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-lg text-muted">{description}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
