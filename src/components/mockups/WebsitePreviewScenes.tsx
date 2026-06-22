import { cn } from "@/lib/utils";
import type { IndustryKey } from "@/components/illustrations/IndustryIllustrations";

export const industryDomains: Record<IndustryKey, string> = {
  dentists: "brightsmiledental.com",
  "law-firms": "rodriguezlaw.com",
  "real-estate": "chenrealty.com",
  accounting: "thompsoncpa.com",
  physiotherapy: "activelifephysio.com",
};

function NavBar({
  logo,
  links,
  cta,
  dark = false,
  mobile = false,
}: {
  logo: React.ReactNode;
  links: string[];
  cta: string;
  dark?: boolean;
  mobile?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-3 py-2",
        dark ? "bg-slate-900 text-white" : "border-b border-black/5 bg-white"
      )}
    >
      <div className="shrink-0 font-bold">{logo}</div>
      {!mobile && (
        <div className="hidden items-center gap-3 sm:flex">
          {links.map((link) => (
            <span
              key={link}
              className={cn("text-[9px]", dark ? "text-slate-300" : "text-slate-500")}
            >
              {link}
            </span>
          ))}
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[8px] font-semibold",
              dark ? "bg-amber-500 text-slate-900" : "bg-blue-600 text-white"
            )}
          >
            {cta}
          </span>
        </div>
      )}
      {mobile && (
        <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[7px] font-semibold text-white">
          {cta}
        </span>
      )}
    </div>
  );
}

function StarRating({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 12 12" className="h-2 w-2 fill-amber-400">
          <path d="M6 1l1.5 3.5H11l-3 2.5 1.2 3.5L6 8.5 2.8 10.5 4 7 1 4.5h3.5z" />
        </svg>
      ))}
      <span className="ml-1 text-[8px] font-semibold text-slate-600">4.9</span>
    </div>
  );
}

function DentalPreview({ mobile }: { mobile?: boolean }) {
  return (
    <div className="flex h-full flex-col bg-slate-50">
      <NavBar
        mobile={mobile}
        logo={<span className="text-[10px] text-blue-700">🦷 Bright Smile</span>}
        links={["Services", "Team", "Reviews"]}
        cta="Book Now"
      />
      <div className="relative flex-1 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-3 py-3">
        <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/10" />
        <div className="absolute bottom-2 right-2 h-12 w-12 rounded-full bg-white/5" />
        <p className="text-[11px] font-bold leading-tight text-white sm:text-sm">
          Your Family&apos;s
          <br />
          Trusted Dental Care
        </p>
        <p className="mt-1 text-[8px] text-blue-100">Cosmetic &amp; General Dentistry</p>
        <div className="mt-2 inline-block rounded-full bg-white px-2.5 py-1 text-[8px] font-bold text-blue-700">
          Book Appointment →
        </div>
        {!mobile && (
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {["Cleaning", "Whitening", "Emergency"].map((s) => (
              <div key={s} className="rounded-lg bg-white/15 px-1 py-1.5 text-center backdrop-blur-sm">
                <div className="mx-auto mb-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white/25 text-[8px]">
                  ✓
                </div>
                <p className="text-[7px] font-medium text-white">{s}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between bg-white px-3 py-1.5">
        <StarRating />
        <span className="text-[7px] text-slate-400">500+ Happy Patients</span>
      </div>
    </div>
  );
}

function LawFirmPreview({ mobile }: { mobile?: boolean }) {
  return (
    <div className="flex h-full flex-col bg-slate-100">
      <NavBar
        dark
        mobile={mobile}
        logo={<span className="text-[9px] text-amber-400">⚖ Rodriguez Law</span>}
        links={["Practice Areas", "Attorneys", "Results"]}
        cta="Free Consult"
      />
      <div className="relative flex-1 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 px-3 py-3">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 200 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
            <line x1="0" y1="80" x2="200" y2="20" stroke="#fbbf24" strokeWidth="0.5" />
            <line x1="0" y1="60" x2="200" y2="40" stroke="#fbbf24" strokeWidth="0.5" />
          </svg>
        </div>
        <p className="relative text-[11px] font-bold leading-tight text-white">
          Fighting For
          <br />
          <span className="text-amber-400">Your Rights</span>
        </p>
        <p className="relative mt-1 text-[8px] text-slate-400">Personal Injury · Family Law · Criminal Defense</p>
        <div className="relative mt-2 inline-block rounded border border-amber-500/50 bg-amber-500/10 px-2.5 py-1 text-[8px] font-semibold text-amber-400">
          Free Consultation →
        </div>
        {!mobile && (
          <div className="relative mt-3 grid grid-cols-3 gap-1">
            {[
              { label: "Cases Won", val: "850+" },
              { label: "Years Exp.", val: "25+" },
              { label: "Rating", val: "5.0★" },
            ].map((stat) => (
              <div key={stat.label} className="rounded bg-white/5 px-1 py-1 text-center">
                <p className="text-[9px] font-bold text-amber-400">{stat.val}</p>
                <p className="text-[6px] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bg-slate-900 px-3 py-1.5 text-[7px] text-slate-500">
        ★ Bar Certified · Confidential Consultations
      </div>
    </div>
  );
}

function RealEstatePreview({ mobile }: { mobile?: boolean }) {
  return (
    <div className="flex h-full flex-col bg-white">
      <NavBar
        mobile={mobile}
        logo={<span className="text-[10px] text-emerald-700">🏠 Chen Realty</span>}
        links={["Listings", "Neighborhoods", "About"]}
        cta="Get Valuation"
      />
      <div className="relative flex-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700" />
        <svg viewBox="0 0 200 80" className="absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="xMidYMid slice">
          <rect x="60" y="30" width="80" height="50" fill="white" opacity="0.3" />
          <polygon points="100,10 50,35 150,35" fill="white" opacity="0.4" />
          <rect x="85" y="50" width="15" height="30" fill="white" opacity="0.2" />
          <rect x="110" y="45" width="12" height="12" fill="white" opacity="0.2" />
        </svg>
        <div className="relative px-3 py-3">
          <p className="text-[11px] font-bold text-white">Find Your Dream Home</p>
          <p className="text-[8px] text-emerald-100">127 Active Listings · Local Expert</p>
          <div className="mt-2 flex gap-1">
            <div className="flex-1 rounded bg-white/20 px-2 py-1 text-[7px] text-white backdrop-blur-sm">
              🔍 Search listings...
            </div>
            <div className="rounded bg-white px-2 py-1 text-[7px] font-bold text-emerald-700">Go</div>
          </div>
        </div>
        {!mobile && (
          <div className="relative grid grid-cols-3 gap-1 px-3 pb-2">
            {[
              { price: "$425K", beds: "3 bed" },
              { price: "$680K", beds: "4 bed" },
              { price: "$310K", beds: "2 bed" },
            ].map((home) => (
              <div key={home.price} className="overflow-hidden rounded-md bg-white shadow-sm">
                <div className="h-6 bg-gradient-to-br from-emerald-200 to-teal-300" />
                <div className="p-1">
                  <p className="text-[8px] font-bold text-emerald-800">{home.price}</p>
                  <p className="text-[6px] text-slate-500">{home.beds}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function AccountingPreview({ mobile }: { mobile?: boolean }) {
  return (
    <div className="flex h-full flex-col bg-amber-50">
      <NavBar
        mobile={mobile}
        logo={<span className="text-[10px] text-amber-800">📊 Thompson CPA</span>}
        links={["Services", "About", "Resources"]}
        cta="Get Started"
      />
      <div className="flex-1 px-3 py-3">
        <div className="rounded-lg bg-gradient-to-br from-amber-600 to-orange-700 px-3 py-2.5">
          <p className="text-[11px] font-bold text-white">Tax Season Made Simple</p>
          <p className="mt-0.5 text-[8px] text-amber-100">Expert accounting for businesses &amp; individuals</p>
          <div className="mt-2 inline-block rounded bg-white px-2 py-0.5 text-[8px] font-bold text-amber-700">
            Schedule Consultation
          </div>
        </div>
        {!mobile && (
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            {["Tax Prep", "Bookkeeping", "Payroll", "Advisory"].map((svc) => (
              <div key={svc} className="flex items-center gap-1 rounded-md border border-amber-200 bg-white px-2 py-1.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-100 text-[8px]">$</span>
                <span className="text-[8px] font-medium text-amber-900">{svc}</span>
              </div>
            ))}
          </div>
        )}
        <div className="mt-2 flex items-center gap-2 rounded-md border border-amber-200 bg-white px-2 py-1">
          <span className="rounded bg-amber-600 px-1 py-0.5 text-[6px] font-bold text-white">CPA</span>
          <span className="text-[7px] text-slate-500">Certified · 20+ Years · 300+ Clients</span>
        </div>
      </div>
    </div>
  );
}

function PhysiotherapyPreview({ mobile }: { mobile?: boolean }) {
  return (
    <div className="flex h-full flex-col bg-cyan-50">
      <NavBar
        mobile={mobile}
        logo={<span className="text-[10px] text-cyan-700">💪 Active Life Physio</span>}
        links={["Treatments", "Team", "Book"]}
        cta="Book Session"
      />
      <div className="relative flex-1 overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600 px-3 py-3">
        <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-white/10" />
        <p className="text-[11px] font-bold leading-tight text-white">
          Move Better.
          <br />
          Live Better.
        </p>
        <p className="mt-1 text-[8px] text-cyan-100">Sports · Recovery · Wellness</p>
        <div className="mt-2 inline-block rounded-full bg-white px-2.5 py-1 text-[8px] font-bold text-cyan-700">
          Book Your Session →
        </div>
        {!mobile && (
          <div className="mt-3 grid grid-cols-3 gap-1">
            {[
              { icon: "🏃", label: "Sports" },
              { icon: "🔄", label: "Recovery" },
              { icon: "💆", label: "Massage" },
            ].map((t) => (
              <div key={t.label} className="rounded-lg bg-white/20 py-1.5 text-center backdrop-blur-sm">
                <span className="text-sm">{t.icon}</span>
                <p className="text-[7px] font-medium text-white">{t.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between bg-white px-3 py-1.5">
        <StarRating />
        <span className="text-[7px] text-slate-400">Same-week appointments</span>
      </div>
    </div>
  );
}

const previewComponents: Record<
  IndustryKey,
  React.ComponentType<{ mobile?: boolean }>
> = {
  dentists: DentalPreview,
  "law-firms": LawFirmPreview,
  "real-estate": RealEstatePreview,
  accounting: AccountingPreview,
  physiotherapy: PhysiotherapyPreview,
};

export function WebsitePreviewScene({
  industry,
  mobile = false,
  className,
}: {
  industry: IndustryKey;
  mobile?: boolean;
  className?: string;
}) {
  const Preview = previewComponents[industry];

  return (
    <div className={cn("h-full w-full overflow-hidden", className)}>
      <Preview mobile={mobile} />
    </div>
  );
}

export function BeforeWebsiteScene({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full flex-col bg-slate-300", className)}>
      <div className="bg-slate-400 px-3 py-2">
        <p className="text-[10px] font-serif text-slate-600">My Business Website</p>
      </div>
      <div className="flex-1 p-3">
        <div className="mb-2 h-8 w-full bg-slate-400/80" />
        <div className="mb-1 h-2 w-3/4 bg-slate-400/60" />
        <div className="mb-1 h-2 w-full bg-slate-400/50" />
        <div className="mb-3 h-2 w-5/6 bg-slate-400/50" />
        <div className="grid grid-cols-2 gap-2">
          <div className="h-12 bg-slate-400/40" />
          <div className="h-12 bg-slate-400/40" />
        </div>
        <p className="mt-4 text-center text-[9px] font-medium text-red-600">
          ⚠ Not Mobile Friendly · Slow · Outdated
        </p>
      </div>
    </div>
  );
}

export function AfterWebsiteScene({
  industry,
  className,
}: {
  industry?: IndustryKey;
  className?: string;
}) {
  return (
    <div className={cn("h-full w-full", className)}>
      <WebsitePreviewScene industry={industry ?? "dentists"} />
    </div>
  );
}
