"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Award,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import { GrowthIllustration } from "@/components/illustrations/IndustryIllustrations";
import { flowstepImages } from "@/lib/flowstep-assets";
import type { SiteContent } from "@/lib/types";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Shield,
    title: "Transparency",
    description: "Clear timelines, honest pricing, and open communication throughout every project.",
    gradient: "from-blue-600/90 via-indigo-600/85 to-indigo-900/90",
    image: flowstepImages.industries.lawFirms,
    imageAlt: "Professional consultation representing transparent business communication",
    accent: "100% Clear",
    accentClass: "bg-blue-500/20 text-blue-300 border-blue-400/30",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Enterprise-quality design and development standards for every local business we serve.",
    gradient: "from-violet-600/90 via-purple-600/85 to-fuchsia-900/90",
    image: flowstepImages.hero.dentalDesktop,
    imageAlt: "Premium website design showcasing quality craftsmanship",
    accent: "Premium Build",
    accentClass: "bg-violet-500/20 text-violet-300 border-violet-400/30",
  },
  {
    icon: TrendingUp,
    title: "Results",
    description: "Every decision is driven by measurable outcomes — leads, bookings, and customer growth.",
    gradient: "from-emerald-600/90 via-teal-600/85 to-emerald-900/90",
    image: flowstepImages.beforeAfter.after,
    imageAlt: "Analytics dashboard showing measurable business growth",
    accent: "+147% Leads",
    accentClass: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  },
  {
    icon: Heart,
    title: "Long-Term Partnerships",
    description: "We build lasting relationships, not one-off projects. Your growth is our success.",
    gradient: "from-rose-600/90 via-pink-600/85 to-rose-900/90",
    image: flowstepImages.industries.physiotherapy,
    imageAlt: "Healthcare team partnership focused on client success",
    accent: "Ongoing Support",
    accentClass: "bg-rose-500/20 text-rose-300 border-rose-400/30",
  },
];

export function AboutDetailSection({ about }: { about: SiteContent["about"] }) {
  return (
    <section className="relative overflow-hidden py-20">
      <BackgroundEffects variant="default" />
      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="flow-card overflow-hidden p-8"
          >
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-700 shadow-lg shadow-primary/25">
              <Target className="h-7 w-7 text-white" aria-hidden="true" />
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-card" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-muted">{about.mission}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="flow-card overflow-hidden p-8"
          >
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-cyan-600 shadow-lg shadow-cyan-500/20">
              <Eye className="h-7 w-7 text-white" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-foreground">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-muted">{about.vision}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid items-center gap-10 lg:grid-cols-2"
        >
          <div>
            <SectionHeading
              align="left"
              badge="Our Story"
              title="Built for Local Businesses, by People Who Care"
              description={about.story}
            />
          </div>
          <div className="flow-card relative overflow-hidden p-8" aria-hidden="true">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,93,252,0.15),transparent_55%)]" />
            <div className="relative h-32">
              <GrowthIllustration />
            </div>
          </div>
        </motion.div>

        <div className="mt-20">
          <SectionHeading
            title="Why Businesses Choose Us"
            description="What sets us apart when local businesses need a growth partner they can trust."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {about.whyChooseUs.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ x: 4 }}
                className="flow-card flex items-start gap-3 p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-muted">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading
            badge="Values"
            badgeIcon={Sparkles}
            badgeVariant="amber"
            title="Core Values"
            description="The principles that guide every project we deliver."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group flow-card overflow-hidden text-center transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={value.image}
                      alt={value.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className={cn("absolute inset-0 bg-gradient-to-br", value.gradient)} />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_45%)]" />

                    <span
                      className={cn(
                        "absolute left-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-sm",
                        value.accentClass
                      )}
                    >
                      {value.accent}
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
