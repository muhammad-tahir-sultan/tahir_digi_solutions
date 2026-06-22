"use client";

import { motion } from "framer-motion";
import { ArrowRight, Home, Quote, Scale, Star, Stethoscope } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

const industryStyles: Record<string, { bg: string; text: string; icon: typeof Stethoscope }> = {
  Dentists: { bg: "bg-primary/15 text-emerald-400", text: "text-emerald-400", icon: Stethoscope },
  "Law Firms": { bg: "bg-amber-400/15 text-amber-400", text: "text-amber-400", icon: Scale },
  "Real Estate": { bg: "bg-emerald-500/15 text-emerald-400", text: "text-emerald-400", icon: Home },
  "Real Estate Agencies": { bg: "bg-emerald-500/15 text-emerald-400", text: "text-emerald-400", icon: Home },
  Accounting: { bg: "bg-emerald-500/15 text-emerald-400", text: "text-emerald-400", icon: Stethoscope },
  "Accounting Firms": { bg: "bg-emerald-500/15 text-emerald-400", text: "text-emerald-400", icon: Stethoscope },
};

const avatarColors = ["bg-primary", "bg-amber-400", "bg-emerald-500"];

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
  const style = industryStyles[item.industry] ?? industryStyles.Dentists;
  const Icon = style.icon;
  const initials = item.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.45 }}
      className="flow-card border-primary/30 p-6 shadow-[0_8px_28px_rgba(0,0,0,0.35)]"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white",
              avatarColors[index % avatarColors.length]
            )}
          >
            {initials}
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">{item.name}</p>
            <p className="text-xs text-muted">{item.business}</p>
          </div>
        </div>
        <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide", style.bg)}>
          <Icon className="h-3 w-3" aria-hidden="true" />
          {item.industry.split(" ")[0]}
        </span>
      </div>

      <div className="mt-4 flex gap-0.5 text-amber-400" aria-label={`${item.rating} out of 5 stars`}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
        ))}
      </div>

      <blockquote className="mt-4 text-sm italic leading-relaxed text-zinc-300">
        &ldquo;{item.review}&rdquo;
      </blockquote>
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
    <section className="relative overflow-hidden py-16 sm:py-20">
      <Container className="relative">
        {showHeading && (
          <SectionHeading
            badge="Testimonials"
            badgeIcon={Quote}
            badgeVariant="amber"
            title={title}
            description={description}
          />
        )}

        <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${showHeading ? "mt-10" : ""}`}>
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
