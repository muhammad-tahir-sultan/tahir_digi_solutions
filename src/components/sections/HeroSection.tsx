"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import { HeroDeviceShowcase } from "@/components/mockups/DeviceMockups";
import type { SiteContent } from "@/lib/types";
import { cn } from "@/lib/utils";

const trustIndicators = [
  "Mobile Optimized",
  "SEO Ready",
  "Fast Loading",
  "Conversion Focused",
];

const floatingStats = [
  { icon: TrendingUp, label: "Avg. Lead Increase", value: "+147%", position: "left-[0%] top-[8%] sm:-left-[5%]" },
  { icon: Zap, label: "Page Speed Score", value: "96/100", position: "left-[2%] bottom-[28%] sm:-left-[3%]" },
  { icon: Users, label: "Businesses Served", value: "120+", position: "right-[0%] bottom-[12%] hidden sm:block" },
];

export function HeroSection({ content }: { content: SiteContent["hero"] }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-border py-16 sm:py-24 lg:py-28">
      <BackgroundEffects variant="hero" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                Local Business Growth Partner
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
                {content.headline}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
                {content.subheadline}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="/free-audit" size="lg">
                  {content.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  {content.secondaryCta}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-4 sm:gap-5"
            >
              {trustIndicators.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <HeroDeviceShowcase industry="dentists" />

              {floatingStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.12 }}
                    className={cn("absolute z-30", stat.position)}
                  >
                    <motion.div
                      animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                      transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                      className="glass-strong rounded-xl px-3 py-2.5 shadow-xl sm:rounded-2xl sm:px-4 sm:py-3"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 sm:h-8 sm:w-8">
                          <Icon className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-base font-bold text-foreground sm:text-lg">{stat.value}</p>
                          <p className="text-[9px] font-medium uppercase tracking-wide text-muted sm:text-[10px]">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
