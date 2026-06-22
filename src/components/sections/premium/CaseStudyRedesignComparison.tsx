"use client";

import { motion } from "framer-motion";
import {
  CaseStudyBeforePreview,
  CaseStudyAfterPreview,
} from "@/components/mockups/CaseStudyWebsitePreviews";

function PreviewFrame({
  label,
  variant,
  slug,
}: {
  label: string;
  variant: "before" | "after";
  slug: string;
}) {
  const isBefore = variant === "before";

  return (
    <div className="flex flex-col">
      <div className="mb-2 flex items-center gap-2">
        <span
          className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
            isBefore
              ? "bg-red-500/15 text-red-500"
              : "bg-emerald-500/15 text-emerald-500"
          }`}
        >
          {label}
        </span>
      </div>
      <div
        className={`overflow-hidden rounded-xl border shadow-2xl ${
          isBefore
            ? "border-red-500/20 ring-1 ring-red-500/10"
            : "border-emerald-500/20 ring-1 ring-emerald-500/10"
        }`}
      >
        <div className="aspect-[4/3] min-h-[280px] w-full sm:min-h-[320px] lg:min-h-[360px]">
          {isBefore ? (
            <CaseStudyBeforePreview slug={slug} />
          ) : (
            <CaseStudyAfterPreview slug={slug} />
          )}
        </div>
      </div>
    </div>
  );
}

export function CaseStudyRedesignComparison({ slug }: { slug: string }) {
  return (
    <section aria-label="Before and after website redesign comparison">
      <div className="mb-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Transformation</p>
        <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          Before &amp; After Redesign
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
          From outdated, low-converting websites to premium, conversion-focused designs.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <PreviewFrame label="Before Redesign" variant="before" slug={slug} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <PreviewFrame label="After Redesign" variant="after" slug={slug} />
        </motion.div>
      </div>
    </section>
  );
}

export function CaseStudyAfterShowcase({ slug, title }: { slug: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-emerald-500/20 shadow-2xl ring-1 ring-emerald-500/10">
      <div className="flex items-center justify-between border-b border-border bg-emerald-500/5 px-4 py-2">
        <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
          After Redesign
        </span>
        <span className="text-xs text-muted">{title}</span>
      </div>
      <div className="aspect-[4/3] min-h-[240px] w-full sm:min-h-[280px]">
        <CaseStudyAfterPreview slug={slug} />
      </div>
    </div>
  );
}
