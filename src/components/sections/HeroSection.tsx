"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarCheck,
  Gauge,
  Search,
  Smartphone,
  Target,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FlowStepHeroMockup } from "@/components/mockups/FlowStepHeroMockup";
import type { SiteContent } from "@/lib/types";

const trustIndicators = [
  { icon: Smartphone, label: "Mobile Optimized" },
  { icon: TrendingUp, label: "SEO Ready" },
  { icon: Gauge, label: "Fast Loading" },
  { icon: Target, label: "Conversion Focused" },
];

export function HeroSection({ content }: { content: SiteContent["hero"] }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-border py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(21,93,252,0.35),transparent_70%)] blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
          >
            <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-zinc-900 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                Local Business Growth Partner
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              {content.headline}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              {content.subheadline}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/free-audit" size="lg" className="flow-glow font-semibold">
                <Search className="h-4 w-4" />
                {content.primaryCta}
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="font-semibold">
                <CalendarCheck className="h-4 w-4" />
                {content.secondaryCta}
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 pt-2">
              {trustIndicators.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-muted"
                >
                  <Icon className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <FlowStepHeroMockup />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
