"use client";

import { cn } from "@/lib/utils";
import {
  getIndustryKey,
  industryPreviewColors,
  type IndustryKey,
} from "@/components/illustrations/IndustryIllustrations";

function WebsitePreviewContent({ industry }: { industry: IndustryKey }) {
  const colors = industryPreviewColors[industry];

  return (
    <div className={cn("flex h-full flex-col", colors.bg)}>
      <div className={cn("flex h-3 items-center gap-1 px-1.5", colors.nav)}>
        <div className="h-1 w-1 rounded-full bg-red-400" />
        <div className="h-1 w-1 rounded-full bg-amber-400" />
        <div className="h-1 w-1 rounded-full bg-emerald-400" />
        <div className="ml-1 h-1.5 flex-1 rounded-full bg-black/5" />
      </div>
      <div className={cn("mx-1.5 mt-1 h-4 rounded-sm", colors.accent, "opacity-90")} />
      <div className="flex flex-1 flex-col gap-1 p-1.5">
        <div className="h-1.5 w-3/4 rounded bg-black/10" />
        <div className="h-1 w-full rounded bg-black/5" />
        <div className="h-1 w-5/6 rounded bg-black/5" />
        <div className="mt-auto grid grid-cols-3 gap-0.5">
          <div className="h-3 rounded-sm bg-black/5" />
          <div className="h-3 rounded-sm bg-black/5" />
          <div className="h-3 rounded-sm bg-black/5" />
        </div>
      </div>
    </div>
  );
}

export function BrowserMockup({
  industry = "dentists",
  className,
  title,
}: {
  industry?: IndustryKey | string;
  className?: string;
  title?: string;
}) {
  const key = typeof industry === "string" && industry.includes("-")
    ? (industry as IndustryKey)
    : getIndustryKey(industry);

  return (
    <div
      className={cn("overflow-hidden rounded-xl border border-border bg-card shadow-xl", className)}
      role="img"
      aria-label={title ?? `${industry} website preview in browser`}
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-secondary/80 px-3 py-2">
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <div className="mx-auto h-4 w-2/3 max-w-[180px] rounded-md bg-background/80 text-center text-[8px] leading-4 text-muted">
          yourbusiness.com
        </div>
      </div>
      <div className="aspect-[16/10]">
        <WebsitePreviewContent industry={key} />
      </div>
    </div>
  );
}

export function DesktopMockup({
  industry = "dentists",
  className,
}: {
  industry?: IndustryKey | string;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="rounded-t-xl border border-b-0 border-border bg-slate-800 p-1.5 shadow-2xl">
        <BrowserMockup industry={industry} className="rounded-lg border-0 shadow-none" />
      </div>
      <div className="mx-auto h-2 w-24 rounded-b-lg bg-slate-700" />
      <div className="mx-auto h-1 w-40 rounded-b bg-slate-600" />
    </div>
  );
}

export function MobileMockup({
  industry = "dentists",
  className,
}: {
  industry?: IndustryKey | string;
  className?: string;
}) {
  const key = typeof industry === "string" && industry.includes("-")
    ? (industry as IndustryKey)
    : getIndustryKey(industry);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border-[3px] border-slate-800 bg-slate-800 p-1 shadow-2xl",
        className
      )}
      role="img"
      aria-label="Mobile website preview"
    >
      <div className="absolute left-1/2 top-1.5 z-10 h-1 w-8 -translate-x-1/2 rounded-full bg-slate-900" />
      <div className="aspect-[9/19] overflow-hidden rounded-[1.4rem] bg-card">
        <WebsitePreviewContent industry={key} />
      </div>
    </div>
  );
}

export function MacbookMockup({
  industry = "dentists",
  className,
}: {
  industry?: IndustryKey | string;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="rounded-t-2xl border border-border bg-gradient-to-b from-slate-700 to-slate-800 p-2 pt-3 shadow-2xl">
        <div className="overflow-hidden rounded-lg border border-slate-600">
          <BrowserMockup industry={industry} className="rounded-none border-0" />
        </div>
      </div>
      <div className="relative mx-auto">
        <div className="h-3 rounded-b-xl bg-gradient-to-b from-slate-600 to-slate-700" />
        <div className="absolute inset-x-0 top-0 mx-auto h-0.5 w-16 rounded-b bg-slate-500" />
      </div>
    </div>
  );
}

export function ScreenshotFrame({
  industry = "dentists",
  className,
  label,
}: {
  industry?: IndustryKey | string;
  className?: string;
  label?: string;
}) {
  const key = typeof industry === "string" && industry.includes("-")
    ? (industry as IndustryKey)
    : getIndustryKey(industry);

  return (
    <div
      className={cn("overflow-hidden rounded-2xl border border-border shadow-lg", className)}
      role="img"
      aria-label={label ?? "Full screen website screenshot"}
    >
      <div className="aspect-video">
        <WebsitePreviewContent industry={key} />
      </div>
    </div>
  );
}
