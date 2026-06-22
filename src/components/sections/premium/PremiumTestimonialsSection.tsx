"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import { getIndustryKey, industryGradients } from "@/components/illustrations/IndustryIllustrations";
import type { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-700 text-sm font-bold text-white shadow-md"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function CompanyLogo({ business }: { business: string }) {
  const words = business.split(" ");
  const abbr =
    words.length > 1
      ? words.slice(0, 2).map((w) => w[0]).join("")
      : business.slice(0, 3);

  return (
    <div className="flex h-8 items-center rounded-md border border-border bg-secondary/80 px-2.5">
      <span className="text-xs font-bold tracking-wide text-muted uppercase">{abbr}</span>
    </div>
  );
}

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
  const industryKey = getIndustryKey(item.industry);
  const gradient = industryGradients[industryKey];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.45 }}
      whileHover={{ y: -6 }}
      className="glass-strong relative flex flex-col overflow-hidden rounded-2xl"
    >
      <div className={cn("h-1.5 w-full bg-gradient-to-r", gradient)} aria-hidden="true" />

      <div className="flex flex-1 flex-col p-6">
        <Quote className="h-8 w-8 text-primary/20" aria-hidden="true" />

        <div className="mt-2 flex gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
          ))}
        </div>

        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted">
          &ldquo;{item.review}&rdquo;
        </blockquote>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
          <div className="flex items-center gap-3">
            <Avatar name={item.name} />
            <div>
              <p className="font-semibold text-foreground">{item.name}</p>
              <CompanyLogo business={item.business} />
            </div>
          </div>
          <Badge className="shrink-0">{item.industry}</Badge>
        </div>
      </div>
    </motion.article>
  );
}

export function PremiumTestimonialsSection({
  testimonials,
  limit = 3,
  showAll = false,
  showHeading = true,
  showViewAll = true,
  title = "Trusted by Local Business Leaders",
  description = "Real results from dentists, attorneys, agents, accountants, and clinic owners.",
}: {
  testimonials: Testimonial[];
  limit?: number;
  showAll?: boolean;
  showHeading?: boolean;
  showViewAll?: boolean;
  title?: string;
  description?: string;
}) {
  const items = showAll ? testimonials : testimonials.slice(0, limit);

  return (
    <section className="relative overflow-hidden py-20">
      <BackgroundEffects variant="default" />
      <Container className="relative">
        {showHeading && (
          <SectionHeading badge="Testimonials" title={title} description={description} />
        )}

        <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${showHeading ? "mt-12" : ""}`}>
          {items.map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {showViewAll && !showAll && testimonials.length > limit && (
          <div className="mt-10 text-center">
            <Button href="/testimonials" variant="outline">
              Read All Testimonials
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
