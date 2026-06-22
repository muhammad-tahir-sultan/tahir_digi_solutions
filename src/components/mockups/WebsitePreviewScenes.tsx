import { cn } from "@/lib/utils";
import type { IndustryKey } from "@/components/illustrations/IndustryIllustrations";

export const industryDomains: Record<IndustryKey, string> = {
  dentists: "brightsmiledental.com",
  "law-firms": "rodriguezlaw.com",
  "real-estate": "chenrealty.com",
  accounting: "thompsoncpa.com",
  physiotherapy: "activelifephysio.com",
};

type Variant = "desktop" | "mobile";

interface Theme {
  navBg: string;
  navText: string;
  cta: string;
  hero: string;
  accent: string;
  logo: string;
  body: string;
}

const themes: Record<IndustryKey, Theme> = {
  dentists: {
    navBg: "bg-white border-b border-blue-100",
    navText: "text-slate-600",
    cta: "bg-blue-600 text-white",
    hero: "from-blue-600 via-blue-700 to-indigo-800",
    accent: "text-blue-600",
    logo: "text-blue-700",
    body: "bg-slate-50",
  },
  "law-firms": {
    navBg: "bg-slate-900",
    navText: "text-slate-300",
    cta: "bg-amber-500 text-slate-900",
    hero: "from-slate-800 via-slate-900 to-black",
    accent: "text-amber-400",
    logo: "text-amber-400",
    body: "bg-slate-100",
  },
  "real-estate": {
    navBg: "bg-white border-b border-emerald-100",
    navText: "text-slate-600",
    cta: "bg-emerald-600 text-white",
    hero: "from-emerald-600 via-emerald-700 to-teal-800",
    accent: "text-emerald-600",
    logo: "text-emerald-700",
    body: "bg-white",
  },
  accounting: {
    navBg: "bg-white border-b border-amber-100",
    navText: "text-slate-600",
    cta: "bg-amber-600 text-white",
    hero: "from-amber-600 via-orange-600 to-amber-800",
    accent: "text-amber-700",
    logo: "text-amber-800",
    body: "bg-amber-50/50",
  },
  physiotherapy: {
    navBg: "bg-white border-b border-cyan-100",
    navText: "text-slate-600",
    cta: "bg-cyan-600 text-white",
    hero: "from-cyan-500 via-cyan-600 to-blue-700",
    accent: "text-cyan-600",
    logo: "text-cyan-700",
    body: "bg-cyan-50/40",
  },
};

interface IndustryContent {
  brand: string;
  icon: string;
  headline: string;
  sub: string;
  cta: string;
  nav: string[];
  services: { label: string; icon: string }[];
  stats: { val: string; label: string }[];
  trust: string;
  footer: string;
}

const content: Record<IndustryKey, IndustryContent> = {
  dentists: {
    brand: "Bright Smile Dental",
    icon: "🦷",
    headline: "Your Family's Trusted Dental Care",
    sub: "Cosmetic & general dentistry · Same-week appointments",
    cta: "Book Appointment",
    nav: ["Services", "Our Team", "Reviews", "Contact"],
    services: [
      { label: "Teeth Cleaning", icon: "✨" },
      { label: "Cosmetic", icon: "💎" },
      { label: "Emergency", icon: "🚨" },
      { label: "Invisalign", icon: "😁" },
    ],
    stats: [
      { val: "4.9★", label: "Rating" },
      { val: "500+", label: "Patients" },
      { val: "15yr", label: "Experience" },
    ],
    trust: "★★★★★ Loved by local families",
    footer: "Mon–Sat 8am–6pm · (555) 234-5678",
  },
  "law-firms": {
    brand: "Rodriguez & Associates",
    icon: "⚖",
    headline: "Fighting For Your Rights",
    sub: "Personal injury · Family law · Criminal defense",
    cta: "Free Consultation",
    nav: ["Practice Areas", "Attorneys", "Results", "Contact"],
    services: [
      { label: "Personal Injury", icon: "📋" },
      { label: "Family Law", icon: "👨‍👩‍👧" },
      { label: "Criminal Defense", icon: "🛡" },
      { label: "Immigration", icon: "🌎" },
    ],
    stats: [
      { val: "850+", label: "Cases Won" },
      { val: "25+", label: "Years" },
      { val: "5.0★", label: "Rating" },
    ],
    trust: "Bar Certified · Confidential consultations",
    footer: "Available 24/7 for emergencies",
  },
  "real-estate": {
    brand: "Chen Realty Group",
    icon: "🏠",
    headline: "Find Your Dream Home",
    sub: "127 active listings · Top-rated local agent",
    cta: "Get Free Valuation",
    nav: ["Listings", "Neighborhoods", "About", "Contact"],
    services: [
      { label: "$425K", icon: "3bd" },
      { label: "$680K", icon: "4bd" },
      { label: "$310K", icon: "2bd" },
      { label: "$550K", icon: "3bd" },
    ],
    stats: [
      { val: "127", label: "Listings" },
      { val: "$42M", label: "Sold" },
      { val: "98%", label: "Satisfied" },
    ],
    trust: "Top 1% agent in the region",
    footer: "Free home valuation · No obligation",
  },
  accounting: {
    brand: "Thompson & Co. CPA",
    icon: "📊",
    headline: "Tax Season Made Simple",
    sub: "Business & personal accounting · CPA certified",
    cta: "Schedule Consultation",
    nav: ["Services", "About", "Resources", "Contact"],
    services: [
      { label: "Tax Preparation", icon: "📑" },
      { label: "Bookkeeping", icon: "📒" },
      { label: "Payroll", icon: "💰" },
      { label: "Advisory", icon: "📈" },
    ],
    stats: [
      { val: "300+", label: "Clients" },
      { val: "20+", label: "Years" },
      { val: "CPA", label: "Certified" },
    ],
    trust: "Trusted by local businesses since 2004",
    footer: "Tax deadline support · Secure portal",
  },
  physiotherapy: {
    brand: "Active Life Physio",
    icon: "💪",
    headline: "Move Better. Live Better.",
    sub: "Sports rehab · Pain relief · Wellness programs",
    cta: "Book Your Session",
    nav: ["Treatments", "Our Team", "Insurance", "Book"],
    services: [
      { label: "Sports Rehab", icon: "🏃" },
      { label: "Back Pain", icon: "🔄" },
      { label: "Massage", icon: "💆" },
      { label: "Post-Op", icon: "🏥" },
    ],
    stats: [
      { val: "4.9★", label: "Rating" },
      { val: "2k+", label: "Patients" },
      { val: "Same Week", label: "Booking" },
    ],
    trust: "Direct insurance billing available",
    footer: "Mon–Fri 7am–7pm · Sat 9am–2pm",
  },
};

function Stars() {
  return (
    <span className="text-amber-400">
      {"★★★★★"}
    </span>
  );
}

function DesktopNav({ industry, t }: { industry: IndustryKey; t: Theme }) {
  const c = content[industry];
  return (
    <div className={cn("flex items-center justify-between px-4 py-2.5", t.navBg)}>
      <span className={cn("text-[11px] font-bold", t.logo)}>
        {c.icon} {c.brand.split(" ")[0]} {c.brand.split(" ")[1] ?? ""}
      </span>
      <div className="flex items-center gap-3">
        {c.nav.map((link) => (
          <span key={link} className={cn("text-[9px] font-medium", t.navText)}>
            {link}
          </span>
        ))}
        <span className={cn("rounded-full px-2.5 py-1 text-[8px] font-bold", t.cta)}>
          {c.cta}
        </span>
      </div>
    </div>
  );
}

function MobileNav({ industry, t }: { industry: IndustryKey; t: Theme }) {
  const c = content[industry];
  return (
    <div className={cn("flex items-center justify-between px-3 py-2", t.navBg)}>
      <span className={cn("text-[9px] font-bold", t.logo)}>
        {c.icon} {c.brand.split(" ")[0]}
      </span>
      <div className="flex items-center gap-2">
        <span className={cn("rounded-full px-2 py-0.5 text-[7px] font-bold", t.cta)}>
          {c.cta.split(" ")[0]}
        </span>
        <div className="flex flex-col gap-0.5">
          <span className="h-0.5 w-3.5 rounded bg-slate-400" />
          <span className="h-0.5 w-3.5 rounded bg-slate-400" />
          <span className="h-0.5 w-2.5 rounded bg-slate-400" />
        </div>
      </div>
    </div>
  );
}

function DesktopPreview({ industry }: { industry: IndustryKey }) {
  const t = themes[industry];
  const c = content[industry];
  const isRealEstate = industry === "real-estate";
  const isLaw = industry === "law-firms";

  return (
    <div className={cn("flex h-full flex-col", t.body)}>
      <DesktopNav industry={industry} t={t} />

      {/* Hero */}
      <div className={cn("relative bg-gradient-to-br px-4 py-4", t.hero)}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white" />
          <div className="absolute bottom-0 left-1/4 h-20 w-20 rounded-full bg-white" />
        </div>
        <div className="relative grid grid-cols-5 gap-3">
          <div className="col-span-3">
            <p className="text-[13px] font-bold leading-snug text-white">{c.headline}</p>
            <p className="mt-1 text-[9px] text-white/75">{c.sub}</p>
            <div className={cn("mt-2.5 inline-flex rounded-full px-3 py-1 text-[9px] font-bold shadow-lg", isLaw ? "bg-amber-500 text-slate-900" : "bg-white text-slate-800")}>
              {c.cta} →
            </div>
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <div className="h-full w-full rounded-lg bg-white/15 p-2 backdrop-blur-sm">
              {isRealEstate ? (
                <svg viewBox="0 0 80 60" className="h-full w-full">
                  <polygon points="40,5 10,30 70,30" fill="white" opacity="0.5" />
                  <rect x="22" y="30" width="36" height="25" fill="white" opacity="0.35" />
                  <rect x="34" y="40" width="10" height="15" fill="white" opacity="0.25" />
                </svg>
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-1">
                  <span className="text-2xl">{c.icon}</span>
                  <Stars />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 border-b border-black/5 bg-white">
        {c.stats.map((s) => (
          <div key={s.label} className="border-r border-black/5 px-2 py-2 text-center last:border-0">
            <p className={cn("text-[11px] font-bold", t.accent)}>{s.val}</p>
            <p className="text-[7px] text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Services */}
      <div className="flex-1 px-4 py-3">
        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
          {isRealEstate ? "Featured Listings" : "Our Services"}
        </p>
        <div className="mt-2 grid grid-cols-4 gap-1.5">
          {c.services.map((svc) => (
            <div key={svc.label} className="rounded-lg border border-black/5 bg-white p-1.5 shadow-sm">
              {isRealEstate ? (
                <>
                  <div className="mb-1 h-8 rounded bg-gradient-to-br from-emerald-200 to-teal-300" />
                  <p className={cn("text-[9px] font-bold", t.accent)}>{svc.label}</p>
                  <p className="text-[7px] text-slate-400">{svc.icon}</p>
                </>
              ) : (
                <>
                  <span className="text-sm">{svc.icon}</span>
                  <p className="mt-0.5 text-[7px] font-medium leading-tight text-slate-700">{svc.label}</p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Testimonial strip */}
        <div className="mt-2.5 flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-[8px] font-bold text-slate-600">
            {c.brand[0]}
          </div>
          <div>
            <Stars />
            <p className="text-[7px] text-slate-500">{c.trust}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={cn("px-4 py-1.5 text-center text-[7px]", isLaw ? "bg-slate-900 text-slate-500" : "bg-slate-800 text-slate-400")}>
        {c.footer}
      </div>
    </div>
  );
}

function MobilePreview({ industry }: { industry: IndustryKey }) {
  const t = themes[industry];
  const c = content[industry];
  const isLaw = industry === "law-firms";
  const isRealEstate = industry === "real-estate";

  return (
    <div className={cn("flex h-full flex-col", t.body)}>
      <MobileNav industry={industry} t={t} />

      {/* Mobile hero — full bleed */}
      <div className={cn("bg-gradient-to-b px-3 py-3", t.hero)}>
        <p className="text-[10px] font-bold leading-tight text-white">{c.headline}</p>
        <p className="mt-1 text-[7px] leading-snug text-white/80">{c.sub}</p>
        <div className={cn("mt-2 w-full rounded-lg py-1.5 text-center text-[8px] font-bold", isLaw ? "bg-amber-500 text-slate-900" : "bg-white text-slate-800")}>
          {c.cta}
        </div>
      </div>

      {/* Mobile stats — horizontal scroll feel */}
      <div className="flex divide-x divide-black/5 border-b border-black/5 bg-white">
        {c.stats.map((s) => (
          <div key={s.label} className="flex-1 py-1.5 text-center">
            <p className={cn("text-[9px] font-bold", t.accent)}>{s.val}</p>
            <p className="text-[6px] text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Mobile services — 2x2 grid */}
      <div className="flex-1 px-2 py-2">
        <p className="mb-1.5 text-[7px] font-bold uppercase tracking-wider text-slate-500">
          {isRealEstate ? "Listings" : "Services"}
        </p>
        <div className="grid grid-cols-2 gap-1">
          {c.services.slice(0, 4).map((svc) => (
            <div key={svc.label} className="rounded-md border border-black/5 bg-white p-1.5">
              {isRealEstate ? (
                <>
                  <div className="mb-1 h-6 rounded bg-gradient-to-br from-emerald-200 to-teal-300" />
                  <p className={cn("text-[8px] font-bold", t.accent)}>{svc.label}</p>
                </>
              ) : (
                <>
                  <span className="text-xs">{svc.icon}</span>
                  <p className="text-[6px] font-medium text-slate-700">{svc.label}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sticky CTA bar */}
      <div className={cn("px-2 py-1.5 text-center text-[6px] text-white", isLaw ? "bg-slate-900" : "bg-slate-800")}>
        {c.footer}
      </div>
    </div>
  );
}

const previewMap: Record<IndustryKey, Record<Variant, React.ComponentType<{ industry: IndustryKey }>>> = {
  dentists: { desktop: DesktopPreview, mobile: MobilePreview },
  "law-firms": { desktop: DesktopPreview, mobile: MobilePreview },
  "real-estate": { desktop: DesktopPreview, mobile: MobilePreview },
  accounting: { desktop: DesktopPreview, mobile: MobilePreview },
  physiotherapy: { desktop: DesktopPreview, mobile: MobilePreview },
};

export function WebsitePreviewScene({
  industry,
  variant = "desktop",
  className,
}: {
  industry: IndustryKey;
  variant?: Variant;
  className?: string;
}) {
  const Preview = previewMap[industry][variant];

  return (
    <div className={cn("h-full w-full overflow-hidden", className)}>
      <Preview industry={industry} />
    </div>
  );
}

export function BeforeWebsiteScene({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full flex-col bg-[#c0c0c0]", className)}>
      <div className="bg-[#000080] px-3 py-1.5">
        <p className="text-[10px] font-serif text-white">My Business Website</p>
      </div>
      <div className="flex-1 p-3 font-serif">
        <table className="w-full border-collapse border border-slate-500 text-[8px] text-slate-700">
          <tbody>
            <tr>
              <td colSpan={2} className="border border-slate-500 bg-[#ffffcc] p-2 text-center font-bold">
                WELCOME TO OUR WEBSITE
              </td>
            </tr>
            <tr>
              <td className="w-1/4 border border-slate-500 bg-[#ddd] p-1">Home</td>
              <td className="border border-slate-500 p-2" rowSpan={3}>
                <p className="mb-1 font-bold underline">About Us</p>
                <p>Lorem ipsum dolor sit amet...</p>
                <p className="mt-2 text-red-600">Best viewed in Internet Explorer</p>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-500 bg-[#ddd] p-1">About</td>
            </tr>
            <tr>
              <td className="border border-slate-500 bg-[#ddd] p-1">Contact</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-center text-[8px] font-bold text-red-600">
          ⚠ Not Mobile Friendly · Slow · Outdated Design
        </p>
      </div>
    </div>
  );
}

export function AfterWebsiteScene({
  industry = "dentists",
  className,
}: {
  industry?: IndustryKey;
  className?: string;
}) {
  return (
    <div className={cn("h-full w-full", className)}>
      <WebsitePreviewScene industry={industry} variant="desktop" />
    </div>
  );
}
