"use client";

import { cn } from "@/lib/utils";
import {
  resolveIndustryKey,
  type IndustryKey,
} from "@/components/illustrations/IndustryIllustrations";
import {
  WebsitePreviewScene,
  industryDomains,
} from "@/components/mockups/WebsitePreviewScenes";

function resolveKey(industry: IndustryKey | string): IndustryKey {
  return resolveIndustryKey(industry);
}

function BrowserChrome({ industry }: { industry: IndustryKey }) {
  return (
    <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900 px-3 py-2">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
      </div>
      <div className="mx-auto flex min-w-0 flex-1 max-w-[280px] items-center justify-center gap-1 rounded-md bg-slate-800 px-3 py-1 text-[10px] text-slate-400">
        <span className="shrink-0 text-emerald-400">🔒</span>
        <span className="truncate">{industryDomains[industry]}</span>
      </div>
    </div>
  );
}

export function BrowserMockup({
  industry = "dentists",
  className,
  title,
  hideChrome = false,
  size = "default",
}: {
  industry?: IndustryKey | string;
  className?: string;
  title?: string;
  hideChrome?: boolean;
  size?: "default" | "large";
}) {
  const key = resolveKey(industry);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-2xl ring-1 ring-white/5",
        className
      )}
      role="img"
      aria-label={title ?? `${industry} website preview`}
    >
      {!hideChrome && <BrowserChrome industry={key} />}
      <div
        className={cn(
          "w-full",
          size === "large" ? "aspect-[16/10] min-h-[280px] sm:min-h-[340px]" : "aspect-[16/10] min-h-[200px]"
        )}
      >
        <WebsitePreviewScene industry={key} variant="desktop" />
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
      <div className="rounded-t-2xl border border-slate-600 bg-gradient-to-b from-slate-700 to-slate-900 p-2.5 shadow-2xl">
        <BrowserMockup industry={industry} size="large" className="rounded-lg border-0 shadow-none" />
      </div>
      <div className="mx-auto h-2.5 w-32 rounded-b-xl bg-slate-700" />
      <div className="mx-auto h-1 w-48 rounded-b bg-slate-600" />
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
  const key = resolveKey(industry);

  return (
    <div
      className={cn(
        "relative mx-auto w-[130px] shrink-0 sm:w-[150px]",
        className
      )}
      role="img"
      aria-label="Mobile website preview"
    >
      <div className="overflow-hidden rounded-[1.75rem] border-[3px] border-slate-700 bg-slate-800 p-1 shadow-2xl">
        <div className="absolute left-1/2 top-2 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-slate-900" />
        <div className="aspect-[9/16] overflow-hidden rounded-[1.4rem] bg-white">
          <WebsitePreviewScene industry={key} variant="mobile" />
        </div>
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
    <div className={cn("relative w-full", className)}>
      <div className="rounded-t-2xl border border-slate-600 bg-gradient-to-b from-slate-600 to-slate-800 p-3 pt-4 shadow-2xl">
        <div className="overflow-hidden rounded-lg border border-slate-500/80 shadow-inner">
          <BrowserMockup industry={industry} size="large" className="rounded-none border-0" />
        </div>
      </div>
      <div className="relative mx-auto max-w-full">
        <div className="h-4 rounded-b-2xl bg-gradient-to-b from-slate-500 to-slate-700" />
        <div className="absolute inset-x-0 top-0 mx-auto h-0.5 w-24 rounded-b bg-slate-400" />
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
  const key = resolveKey(industry);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/10 shadow-2xl ring-1 ring-white/5",
        className
      )}
      role="img"
      aria-label={label ?? "Full screen website screenshot"}
    >
      <div className="aspect-video min-h-[240px] w-full">
        <WebsitePreviewScene industry={key} variant="desktop" />
      </div>
    </div>
  );
}

export function WebsiteShowcase({
  industry = "dentists",
  className,
  title,
}: {
  industry?: IndustryKey | string;
  className?: string;
  title?: string;
}) {
  const key = resolveKey(industry);

  return (
    <div className={cn("relative w-full", className)}>
      <BrowserMockup industry={key} size="large" title={title} />
    </div>
  );
}

/** Desktop + mobile side-by-side — no overlapping */
export function DevicePairShowcase({
  industry = "dentists",
  className,
  title,
}: {
  industry?: IndustryKey | string;
  className?: string;
  title?: string;
}) {
  const key = resolveKey(industry);

  return (
    <div className={cn("flex items-end justify-center gap-4 sm:gap-6 lg:gap-8", className)}>
      <div className="min-w-0 flex-1 max-w-2xl">
        <BrowserMockup industry={key} size="large" title={title} />
      </div>
      <div className="hidden shrink-0 pb-2 sm:block">
        <MobileMockup industry={key} />
      </div>
    </div>
  );
}

/** Hero-specific layout with glow */
export function HeroDeviceShowcase({ industry = "dentists" }: { industry?: IndustryKey | string }) {
  const key = resolveKey(industry);

  return (
    <div className="relative mx-auto w-full max-w-xl pr-0 sm:max-w-2xl sm:pr-4 lg:max-w-none lg:pr-16">
      <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="relative flex items-end justify-center gap-3 sm:gap-5">
        <div className="min-w-0 flex-1">
          <DesktopMockup industry={key} />
        </div>
        <div className="mb-6 shrink-0 sm:mb-10">
          <MobileMockup industry={key} className="w-[100px] sm:w-[130px]" />
        </div>
      </div>
    </div>
  );
}
