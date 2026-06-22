"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building,
  Scale,
  Smile,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { industryFlowConfig } from "@/lib/flowstep-assets";
import type { Industry } from "@/lib/types";
import { cn } from "@/lib/utils";

const iconMap = {
  Smile,
  Scale,
  Building,
  BarChart3,
  Activity,
} as const;

export function IndustryShowcaseSection({ industries }: { industries: Industry[] }) {
  const items = industryFlowConfig.map((config) => {
    const industry = industries.find((i) => i.slug === config.key);
    return { ...config, industry };
  });

  return (
    <section className="border-y border-border py-16 sm:py-20">
      <Container>
        <SectionHeading
          badge="Industries"
          badgeVariant="amber"
          title="Built for Businesses Like Yours"
          description="Industry-specific designs that speak your clients' language and drive real results."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Smile;

            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
              >
                <Link href={`/industries#${item.key}`} className="group block h-full">
                  <article
                    className={cn(
                      "flow-card flex h-full flex-col overflow-hidden border-t-2 transition-transform hover:-translate-y-1",
                      item.borderColor
                    )}
                  >
                    <div className={cn("relative h-24 bg-gradient-to-br", item.headerGradient)}>
                      <div className="absolute inset-0">
                        <Image
                          src={item.image}
                          alt={`${item.name} website preview`}
                          fill
                          className="object-cover opacity-40"
                          sizes="220px"
                        />
                      </div>
                      <div className="relative flex h-full flex-col justify-end p-4">
                        <div className={cn("mb-2 flex h-8 w-8 items-center justify-center rounded-lg", item.iconBg)}>
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">
                          {item.label}
                        </p>
                        <h3 className="text-sm font-bold text-white">{item.name}</h3>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-4">
                      <p className="text-xs leading-relaxed text-muted">
                        {item.industry?.challenges[0] ?? item.blurb}
                      </p>
                      <p className={cn("mt-3 flex items-center gap-1 text-xs font-semibold opacity-0 transition-opacity group-hover:opacity-100", item.linkColor)}>
                        Explore
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </p>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button href="/industries" variant="outline">
            Explore All Industries
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
