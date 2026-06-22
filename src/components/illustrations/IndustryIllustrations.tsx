import { cn } from "@/lib/utils";

type IndustryKey = "dentists" | "law-firms" | "real-estate" | "accounting" | "physiotherapy";

export type { IndustryKey };

const industryMap: Record<string, IndustryKey> = {
  Dentists: "dentists",
  "Law Firms": "law-firms",
  "Real Estate": "real-estate",
  "Real Estate Agencies": "real-estate",
  Accounting: "accounting",
  "Accounting Firms": "accounting",
  Physiotherapy: "physiotherapy",
  "Physiotherapy Clinics": "physiotherapy",
};

export function getIndustryKey(name: string): IndustryKey {
  return industryMap[name] ?? "dentists";
}

export function IndustryIllustration({
  industry,
  className,
}: {
  industry: IndustryKey | string;
  className?: string;
}) {
  const key = typeof industry === "string" && industry.includes("-")
    ? (industry as IndustryKey)
    : getIndustryKey(industry);

  const illustrations: Record<IndustryKey, React.ReactNode> = {
    dentists: (
      <svg viewBox="0 0 120 120" fill="none" className={cn("h-full w-full", className)} aria-hidden="true">
        <circle cx="60" cy="60" r="50" fill="currentColor" className="text-blue-500/10" />
        <path d="M45 55c0-8 7-15 15-15s15 7 15 15v8c0 6-4 11-10 11h-10c-6 0-10-5-10-11v-8z" fill="currentColor" className="text-blue-500/30" />
        <path d="M52 48c2-3 5-4 8-4s6 1 8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-600" />
        <rect x="38" y="72" width="44" height="6" rx="3" fill="currentColor" className="text-blue-400/50" />
        <circle cx="48" cy="58" r="3" fill="currentColor" className="text-blue-600" />
        <circle cx="72" cy="58" r="3" fill="currentColor" className="text-blue-600" />
      </svg>
    ),
    "law-firms": (
      <svg viewBox="0 0 120 120" fill="none" className={cn("h-full w-full", className)} aria-hidden="true">
        <circle cx="60" cy="60" r="50" fill="currentColor" className="text-slate-500/10" />
        <path d="M60 25L35 45v35h50V45L60 25z" fill="currentColor" className="text-slate-600/25" />
        <rect x="52" y="55" width="16" height="25" rx="1" fill="currentColor" className="text-slate-700/40" />
        <path d="M45 45h30M50 35h20" stroke="currentColor" strokeWidth="2" className="text-slate-600" />
        <circle cx="60" cy="68" r="2" fill="currentColor" className="text-amber-500" />
      </svg>
    ),
    "real-estate": (
      <svg viewBox="0 0 120 120" fill="none" className={cn("h-full w-full", className)} aria-hidden="true">
        <circle cx="60" cy="60" r="50" fill="currentColor" className="text-emerald-500/10" />
        <path d="M60 30L30 55v35h60V55L60 30z" fill="currentColor" className="text-emerald-500/25" />
        <rect x="52" y="62" width="16" height="28" rx="1" fill="currentColor" className="text-emerald-600/35" />
        <rect x="42" y="55" width="10" height="10" rx="1" fill="currentColor" className="text-emerald-400/40" />
        <rect x="68" y="55" width="10" height="10" rx="1" fill="currentColor" className="text-emerald-400/40" />
        <path d="M60 30v-5" stroke="currentColor" strokeWidth="2" className="text-emerald-600" />
      </svg>
    ),
    accounting: (
      <svg viewBox="0 0 120 120" fill="none" className={cn("h-full w-full", className)} aria-hidden="true">
        <circle cx="60" cy="60" r="50" fill="currentColor" className="text-amber-500/10" />
        <rect x="35" y="40" width="50" height="40" rx="4" fill="currentColor" className="text-amber-500/20" />
        <rect x="42" y="48" width="36" height="4" rx="1" fill="currentColor" className="text-amber-600/50" />
        <rect x="42" y="56" width="28" height="4" rx="1" fill="currentColor" className="text-amber-600/40" />
        <rect x="42" y="64" width="32" height="4" rx="1" fill="currentColor" className="text-amber-600/30" />
        <text x="60" y="92" textAnchor="middle" fill="currentColor" className="text-amber-600 text-[14px] font-bold">$</text>
      </svg>
    ),
    physiotherapy: (
      <svg viewBox="0 0 120 120" fill="none" className={cn("h-full w-full", className)} aria-hidden="true">
        <circle cx="60" cy="60" r="50" fill="currentColor" className="text-cyan-500/10" />
        <circle cx="60" cy="38" r="8" fill="currentColor" className="text-cyan-500/40" />
        <path d="M60 46v20M48 58h24M52 72l8 14 8-14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600" />
        <path d="M38 85c8-4 16-6 22-6s14 2 22 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-cyan-400/60" />
      </svg>
    ),
  };

  return illustrations[key];
}

export function GrowthIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" fill="none" className={cn("h-full w-full", className)} aria-hidden="true">
      <path d="M20 90 L60 70 L100 75 L140 45 L180 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/60" />
      <circle cx="60" cy="70" r="5" fill="currentColor" className="text-primary" />
      <circle cx="100" cy="75" r="5" fill="currentColor" className="text-primary" />
      <circle cx="140" cy="45" r="5" fill="currentColor" className="text-accent" />
      <circle cx="180" cy="30" r="6" fill="currentColor" className="text-accent" />
      <path d="M170 30 L180 30 L180 40" stroke="currentColor" strokeWidth="2" className="text-accent" />
    </svg>
  );
}

export function AuditIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={cn("h-full w-full", className)} aria-hidden="true">
      <rect x="30" y="20" width="60" height="80" rx="6" fill="currentColor" className="text-primary/10" stroke="currentColor" strokeWidth="2" />
      <rect x="40" y="35" width="30" height="4" rx="1" fill="currentColor" className="text-primary/40" />
      <rect x="40" y="45" width="40" height="3" rx="1" fill="currentColor" className="text-muted/30" />
      <rect x="40" y="52" width="35" height="3" rx="1" fill="currentColor" className="text-muted/30" />
      <circle cx="75" cy="70" r="12" fill="currentColor" className="text-emerald-500/20" />
      <path d="M70 70l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-emerald-600" />
    </svg>
  );
}

export const industryGradients: Record<IndustryKey, string> = {
  dentists: "from-blue-500 via-blue-600 to-indigo-700",
  "law-firms": "from-slate-600 via-slate-700 to-slate-900",
  "real-estate": "from-emerald-500 via-emerald-600 to-teal-700",
  accounting: "from-amber-500 via-amber-600 to-orange-700",
  physiotherapy: "from-cyan-500 via-cyan-600 to-blue-600",
};

export const industryPreviewColors: Record<IndustryKey, { bg: string; accent: string; nav: string }> = {
  dentists: { bg: "bg-sky-50", accent: "bg-blue-500", nav: "bg-white" },
  "law-firms": { bg: "bg-slate-100", accent: "bg-slate-700", nav: "bg-slate-800" },
  "real-estate": { bg: "bg-emerald-50", accent: "bg-emerald-600", nav: "bg-white" },
  accounting: { bg: "bg-amber-50", accent: "bg-amber-600", nav: "bg-white" },
  physiotherapy: { bg: "bg-cyan-50", accent: "bg-cyan-500", nav: "bg-white" },
};
