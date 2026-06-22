"use client";

import { motion } from "framer-motion";
import { MapPin, TrendingDown, TrendingUp, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionStagger, MotionItem } from "@/components/visual/MotionSection";

function ScoreRing({ score, label, color }: { score: number; label: string; color: string }) {
  const circumference = 2 * Math.PI * 36;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-24 w-24">
        <svg className="h-24 w-24 -rotate-90" viewBox="0 0 80 80" aria-hidden="true">
          <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="6" className="text-zinc-800" />
          <motion.circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            className={color}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-foreground">{score}</span>
        </div>
      </div>
      <p className="mt-2 text-xs font-medium text-muted">{label}</p>
    </div>
  );
}

function LeadChart() {
  const bars = [35, 48, 42, 65, 58, 78, 92];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  return (
    <div className="flow-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">Lead Generation</p>
          <p className="text-xs text-muted">Monthly inquiries</p>
        </div>
        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-400">
          +147%
        </span>
      </div>
      <div className="flex h-32 items-end justify-between gap-2" role="img" aria-label="Lead generation chart showing growth from 35 to 92 over 7 months">
        {bars.map((height, i) => (
          <div key={months[i]} className="flex flex-1 flex-col items-center gap-1">
            <motion.div
              className="w-full rounded-t-md bg-gradient-to-t from-primary to-sky-400"
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            />
            <span className="text-[10px] text-muted">{months[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AnalyticsDashboardSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <Container className="relative">
        <SectionHeading
          badge="Results"
          badgeVariant="emerald"
          title="Data-Driven Growth You Can Measure"
          description="Every website we build is optimized for measurable outcomes — leads, rankings, and performance."
        />

        <MotionStagger className="mt-10 grid gap-6 lg:grid-cols-3">
          <MotionItem className="lg:col-span-2">
            <LeadChart />
          </MotionItem>

          <MotionItem>
            <div className="flow-card flex h-full flex-col items-center justify-center p-6">
              <p className="mb-6 text-sm font-semibold text-foreground">Performance Scores</p>
              <div className="grid grid-cols-2 gap-6">
                <ScoreRing score={96} label="Performance" color="text-emerald-400" />
                <ScoreRing score={94} label="SEO Score" color="text-primary" />
                <ScoreRing score={98} label="Mobile" color="text-violet-400" />
                <ScoreRing score={100} label="Accessibility" color="text-amber-400" />
              </div>
            </div>
          </MotionItem>

          <MotionItem className="lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Bounce Rate", value: "-38%", icon: TrendingDown, color: "text-emerald-400" },
                { label: "Load Time", value: "1.4s", icon: Zap, color: "text-emerald-400" },
                { label: "Conversion", value: "+89%", icon: TrendingUp, color: "text-primary" },
                { label: "Local Rankings", value: "Top 3", icon: MapPin, color: "text-amber-400" },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flow-card p-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                      <Icon className={`h-4 w-4 ${stat.color}`} aria-hidden="true" />
                    </div>
                    <p className="mt-1 text-xs text-muted">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </MotionItem>
        </MotionStagger>
      </Container>
    </section>
  );
}
