"use client";

import { cn } from "@/lib/utils";
import {
  getIndustryKey,
  type IndustryKey,
} from "@/components/illustrations/IndustryIllustrations";
import {
  WebsitePreviewScene,
  industryDomains,
} from "@/components/mockups/WebsitePreviewScenes";

export function BrowserMockup({
  industry = "dentists",
  className,
  title,
  hideChrome = false,
}: {
  industry?: IndustryKey | string;
  className?: string;
  title?: string;
  hideChrome?: boolean;
}) {
  const key =
    typeof industry === "string" && industry.includes("-")
      ? (industry as IndustryKey)
      : getIndustryKey(industry);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-xl",
        className
      )}
      role="img"
      aria-label={title ?? `${industry} website preview in browser`}
    >
      {!hideChrome && (
        <div className="flex items-center gap-1.5 border-b border-border bg-slate-100 px-3 py-2 dark:bg-slate-800">
          <div className="flex gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="mx-auto flex h-5 w-2/3 max-w-[220px] items-center justify-center rounded-md bg-white px-2 text-[9px] text-slate-500 shadow-inner dark:bg-slate-900">
            🔒 {industryDomains[key]}
          </div>
        </div>
      )}
      <div className="aspect-[16/10] min-h-[180px]">
        <WebsitePreviewScene industry={key} />
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
      <div className="rounded-t-xl border border-b-0 border-slate-700 bg-slate-800 p-2 shadow-2xl">
        <BrowserMockup industry={industry} className="rounded-lg border-0 shadow-none" />
      </div>
      <div className="mx-auto h-2.5 w-28 rounded-b-lg bg-slate-700" />
      <div className="mx-auto h-1 w-44 rounded-b bg-slate-600" />
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
  const key =
    typeof industry === "string" && industry.includes("-")
      ? (industry as IndustryKey)
      : getIndustryKey(industry);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border-[4px] border-slate-800 bg-slate-800 p-1.5 shadow-2xl",
        className
      )}
      role="img"
      aria-label="Mobile website preview"
    >
      <div className="absolute left-1/2 top-2 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-slate-900" />
      <div className="aspect-[9/19] min-h-[200px] overflow-hidden rounded-[1.6rem] bg-white">
        <WebsitePreviewScene industry={key} mobile />
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
      <div className="rounded-t-2xl border border-slate-600 bg-gradient-to-b from-slate-600 to-slate-800 p-2.5 pt-4 shadow-2xl">
        <div className="overflow-hidden rounded-lg border border-slate-500 shadow-inner">
          <BrowserMockup industry={industry} className="rounded-none border-0" />
        </div>
      </div>
      <div className="relative mx-auto">
        <div className="h-3.5 rounded-b-2xl bg-gradient-to-b from-slate-500 to-slate-700" />
        <div className="absolute inset-x-0 top-0 mx-auto h-0.5 w-20 rounded-b bg-slate-400" />
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
  const key =
    typeof industry === "string" && industry.includes("-")
      ? (industry as IndustryKey)
      : getIndustryKey(industry);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border shadow-xl ring-1 ring-black/5",
        className
      )}
      role="img"
      aria-label={label ?? "Full screen website screenshot"}
    >
      <div className="aspect-video min-h-[200px]">
        <WebsitePreviewScene industry={key} />
      </div>
    </div>
  );
}

/** Large showcase preview — best for portfolio sections */
export function WebsiteShowcase({
  industry = "dentists",
  className,
  title,
}: {
  industry?: IndustryKey | string;
  className?: string;
  title?: string;
}) {
  const key =
    typeof industry === "string" && industry.includes("-")
      ? (industry as IndustryKey)
      : getIndustryKey(industry);

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
        <div className="aspect-[16/10] min-h-[220px] sm:min-h-[280px]">
          <WebsitePreviewScene industry={key} />
        </div>
      </div>
      <div className="absolute -bottom-3 -right-3 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
        {industryDomains[key]}
      </div>
      {title && (
        <p className="sr-only">{title}</p>
      )}
    </div>
  );
}
