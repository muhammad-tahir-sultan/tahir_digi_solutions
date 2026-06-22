"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import { DesktopMockup, MobileMockup } from "@/components/mockups/DeviceMockups";
import type { SiteContent } from "@/lib/types";

const trustIndicators = [
  "Mobile Optimized",
  "SEO Ready",
  "Fast Loading",
  "Conversion Focused",
];

const floatingStats = [
  { icon: TrendingUp, label: "Avg. Lead Increase", value: "+147%", delay: 0 },
  { icon: Zap, label: "Page Speed Score", value: "96/100", delay: 0.15 },
  { icon: Users, label: "Businesses Served", value: "120+", delay: 0.3 },
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

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <DesktopMockup industry="dentists" className="relative z-10 mx-auto max-w-md" />

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -right-2 top-8 z-20 w-28 sm:-right-6 sm:w-32 lg:-right-8"
              >
                <MobileMockup industry="dentists" />
              </motion.div>

              {floatingStats.map((stat, index) => {
                const positions = [
                  "absolute -left-4 top-4 z-30 sm:-left-8",
                  "absolute -left-2 bottom-16 z-30 sm:-left-6",
                  "absolute -right-4 bottom-4 z-30 sm:-right-2 lg:right-4",
                ];
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + stat.delay }}
                    className={positions[index]}
                  >
                    <motion.div
                      animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                      transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                      className="glass-strong rounded-2xl px-4 py-3 shadow-lg"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-lg font-bold text-foreground">{stat.value}</p>
                          <p className="text-[10px] font-medium uppercase tracking-wide text-muted">
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
