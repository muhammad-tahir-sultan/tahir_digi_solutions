"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import {
  MacbookMockup,
  BrowserMockup,
  MobileMockup,
  ScreenshotFrame,
} from "@/components/mockups/DeviceMockups";
import {
  getIndustryKey,
  industryGradients,
  IndustryIllustration,
} from "@/components/illustrations/IndustryIllustrations";
import type { PortfolioItem } from "@/lib/types";
import { cn } from "@/lib/utils";

export function PortfolioDetailShowcase({ item }: { item: PortfolioItem }) {
  const industryKey = getIndustryKey(item.industry);
  const gradient = industryGradients[industryKey];

  return (
    <>
      <section className={cn("relative overflow-hidden bg-gradient-to-br py-16 sm:py-20", gradient)}>
        <BackgroundEffects variant="subtle" />
        <Container className="relative">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-white/90 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Portfolio
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-white/20 text-white">{item.industry}</Badge>
              <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">{item.title}</h1>
              <p className="mt-4 text-lg text-white/80">{item.overview}</p>
              <div className="mt-8">
                <Button
                  href={item.demoUrl}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  View Live Demo
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -right-4 top-8 z-20 w-24 sm:w-28">
                <MobileMockup industry={industryKey} />
              </div>
              <MacbookMockup industry={industryKey} className="relative z-10" />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20">
        <BackgroundEffects variant="default" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground">Project Showcase</h2>
            <p className="mt-2 text-muted">Multiple device previews for this concept project.</p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass-strong overflow-hidden rounded-2xl p-4"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Browser View</p>
              <BrowserMockup industry={industryKey} title={item.title} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-strong overflow-hidden rounded-2xl p-4"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Full Screen</p>
              <ScreenshotFrame industry={industryKey} label={item.title} />
            </motion.div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10">
                  <IndustryIllustration industry={industryKey} />
                </div>
                <h2 className="font-semibold text-foreground">Technologies Used</h2>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech} className="bg-primary/10 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="glass-strong rounded-2xl p-8"
            >
              <h2 className="font-semibold text-foreground">Key Features</h2>
              <ul className="mt-4 space-y-2.5">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
