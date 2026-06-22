"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Award, TrendingUp, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import { GrowthIllustration } from "@/components/illustrations/IndustryIllustrations";
import type { SiteContent } from "@/lib/types";

const values = [
  {
    icon: Shield,
    title: "Transparency",
    description: "Clear timelines, honest pricing, and open communication throughout every project.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Enterprise-quality design and development standards for every local business we serve.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Results",
    description: "Every decision is driven by measurable outcomes — leads, bookings, and customer growth.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Heart,
    title: "Long-Term Partnerships",
    description: "We build lasting relationships, not one-off projects. Your growth is our success.",
    gradient: "from-rose-500 to-pink-600",
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
            className="glass-strong rounded-2xl p-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-700">
              <Target className="h-7 w-7 text-white" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-4 text-muted">{about.mission}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-strong rounded-2xl p-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-cyan-600">
              <Eye className="h-7 w-7 text-white" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-foreground">Our Vision</h2>
            <p className="mt-4 text-muted">{about.vision}</p>
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
          <div className="glass rounded-2xl p-8" aria-hidden="true">
            <div className="h-32">
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
                className="glass flex items-start gap-3 rounded-xl p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-muted">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading title="Core Values" description="The principles that guide every project we deliver." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-strong overflow-hidden rounded-2xl text-center"
              >
                <div className={`bg-gradient-to-br ${value.gradient} px-6 py-8`}>
                  <value.icon className="mx-auto h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
