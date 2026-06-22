import { cn } from "@/lib/utils";
import type { IndustryKey } from "@/components/illustrations/IndustryIllustrations";

export type CaseStudySlug =
  | "demo-dental-clinic-redesign"
  | "demo-law-firm-growth";

function Stars({ size = "sm" }: { size?: "sm" | "xs" }) {
  const cls = size === "xs" ? "text-[7px]" : "text-[8px]";
  return <span className={cn("text-amber-400", cls)}>★★★★★</span>;
}

/* ─── BEFORE: Outdated / template sites ─── */

function DentalBefore() {
  return (
    <div className="flex h-full flex-col bg-[#eef2f5] font-serif">
      <div className="bg-[#2c5282] px-3 py-2 text-center">
        <p className="text-[9px] text-white">Welcome to Smith Family Dental — Est. 1998</p>
      </div>
      <div className="flex flex-1">
        <div className="w-1/4 border-r border-slate-400 bg-[#cbd5e1] p-1.5">
          {["Home", "About", "Services", "Contact"].map((l) => (
            <p key={l} className="mb-1 border border-slate-400 bg-[#94a3b8] px-1 py-0.5 text-[7px] text-white">
              {l}
            </p>
          ))}
        </div>
        <div className="flex-1 p-2">
          <div className="mb-2 h-12 bg-[#94a3b8] text-center text-[7px] leading-[3rem] text-white">
            [ Stock Photo Missing ]
          </div>
          <p className="text-[8px] font-bold text-[#2c5282]">We Are A Full Service Dental Practice</p>
          <p className="mt-1 text-[6px] leading-relaxed text-slate-600">
            Lorem ipsum dolor sit amet consectetur. Please call us at (555) 000-0000 for appointments.
            Our office hours are Monday through Friday 9am to 5pm.
          </p>
          <p className="mt-2 text-[6px] text-red-600">⚠ Site last updated 2016 · Not mobile friendly</p>
        </div>
      </div>
      <div className="bg-[#64748b] py-1 text-center text-[6px] text-white">
        © 2016 Smith Family Dental · Best viewed in IE11
      </div>
    </div>
  );
}

function LawBefore() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="border-b-2 border-slate-300 bg-slate-200 px-3 py-2">
        <p className="text-[9px] font-bold text-slate-700">GENERIC LAW TEMPLATE #4821</p>
      </div>
      <div className="h-14 bg-gradient-to-r from-slate-400 to-slate-500 text-center text-[7px] leading-[3.5rem] text-white">
        [ Generic Courthouse Stock Image ]
      </div>
      <div className="flex flex-1 gap-2 p-2">
        <div className="flex-1">
          <p className="text-[9px] font-bold text-slate-800">Welcome To Our Law Firm</p>
          <p className="mt-1 text-[6px] text-slate-500">
            We handle all types of legal matters. Contact us today for more information about our services.
          </p>
          <div className="mt-2 space-y-1">
            {["Legal Services", "Our Lawyers", "Contact Form"].map((t) => (
              <div key={t} className="border border-slate-200 bg-slate-50 px-2 py-1 text-[6px] text-slate-600">
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3 border border-slate-200 bg-slate-50 p-1.5">
          <p className="text-[6px] font-bold text-slate-600">Sidebar</p>
          <p className="mt-1 text-[5px] text-slate-400">Same template as 50+ competitors</p>
        </div>
      </div>
      <div className="bg-slate-700 py-1 text-center text-[6px] text-slate-300">
        Powered by FreeWebsiteBuilder.com
      </div>
    </div>
  );
}

/* ─── AFTER: Premium rich redesigns ─── */

function DentalAfter() {
  return (
    <div className="flex h-full flex-col bg-white">
      {/* Nav */}
      <div className="flex items-center justify-between border-b border-blue-100 bg-white px-3 py-2">
        <span className="text-[10px] font-bold text-blue-700">🦷 Bright Smile Dental</span>
        <div className="hidden items-center gap-2 sm:flex">
          {["Services", "Team", "Reviews", "Insurance"].map((l) => (
            <span key={l} className="text-[7px] text-slate-500">{l}</span>
          ))}
          <span className="text-[7px] font-semibold text-blue-600">📞 (555) 234-5678</span>
          <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[7px] font-bold text-white">Book Now</span>
        </div>
      </div>

      {/* Hero + booking widget */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-3 py-3">
        <div className="grid grid-cols-5 gap-2">
          <div className="col-span-3">
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-[6px] font-semibold text-white">
              ✨ New Patients Welcome — $99 Cleaning Special
            </span>
            <p className="mt-1.5 text-[12px] font-bold leading-tight text-white">
              Exceptional Dental Care for Your Whole Family
            </p>
            <p className="mt-1 text-[7px] text-blue-100">
              Cosmetic · General · Emergency · Same-week appointments
            </p>
            <div className="mt-2 flex gap-1.5">
              <span className="rounded-lg bg-white px-2.5 py-1 text-[7px] font-bold text-blue-700">Book Online</span>
              <span className="rounded-lg border border-white/40 px-2 py-1 text-[7px] text-white">Virtual Tour</span>
            </div>
            <div className="mt-2 flex gap-2">
              {["4.9★ Google", "500+ Reviews", "15+ Years"].map((b) => (
                <span key={b} className="rounded bg-white/15 px-1.5 py-0.5 text-[6px] text-white">{b}</span>
              ))}
            </div>
          </div>
          <div className="col-span-2 rounded-lg bg-white p-2 shadow-xl">
            <p className="text-[7px] font-bold text-slate-800">Book Appointment</p>
            <div className="mt-1 grid grid-cols-3 gap-0.5">
              {["Mon 10", "Tue 2", "Wed 11", "Thu 3", "Fri 9", "Sat 1"].map((slot) => (
                <span key={slot} className="rounded border border-blue-200 bg-blue-50 py-0.5 text-center text-[5px] text-blue-700">{slot}</span>
              ))}
            </div>
            <div className="mt-1.5 rounded bg-blue-600 py-1 text-center text-[6px] font-bold text-white">Confirm Booking</div>
          </div>
        </div>
      </div>

      {/* Insurance trust */}
      <div className="flex items-center justify-center gap-3 border-b border-slate-100 bg-slate-50 py-1.5">
        <span className="text-[6px] text-slate-400">We accept:</span>
        {["Delta", "Cigna", "Aetna", "MetLife"].map((ins) => (
          <span key={ins} className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[6px] font-semibold text-slate-600">{ins}</span>
        ))}
      </div>

      {/* Services */}
      <div className="px-3 py-2">
        <p className="text-[7px] font-bold uppercase tracking-wider text-slate-400">Popular Treatments</p>
        <div className="mt-1.5 grid grid-cols-3 gap-1">
          {[
            { t: "Teeth Whitening", d: "Professional results in 1 visit", e: "✨" },
            { t: "Invisalign", d: "Clear aligners · Free consult", e: "😁" },
            { t: "Emergency Care", d: "Same-day appointments", e: "🚨" },
          ].map((s) => (
            <div key={s.t} className="rounded-lg border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-1.5">
              <span className="text-sm">{s.e}</span>
              <p className="text-[7px] font-bold text-slate-800">{s.t}</p>
              <p className="text-[5px] text-slate-500">{s.d}</p>
              <p className="mt-0.5 text-[5px] font-semibold text-blue-600">Learn more →</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="border-t border-slate-100 bg-slate-50 px-3 py-2">
        <p className="text-[7px] font-bold uppercase tracking-wider text-slate-400">Meet Our Doctors</p>
        <div className="mt-1.5 grid grid-cols-3 gap-1">
          {[
            { n: "Dr. Sarah M.", r: "Cosmetic Dentistry" },
            { n: "Dr. James L.", r: "General Dentistry" },
            { n: "Dr. Emily R.", r: "Pediatric Care" },
          ].map((doc) => (
            <div key={doc.n} className="rounded-lg bg-white p-1.5 text-center shadow-sm">
              <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-[8px] font-bold text-white">
                {doc.n[4]}
              </div>
              <p className="mt-0.5 text-[6px] font-bold text-slate-800">{doc.n}</p>
              <p className="text-[5px] text-slate-500">{doc.r}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-2 gap-1.5 px-3 py-2">
        {[
          { q: "Best dental experience ever! The team made me feel so comfortable.", n: "Jennifer K." },
          { q: "Online booking was seamless. In and out in 30 minutes.", n: "Michael T." },
        ].map((r) => (
          <div key={r.n} className="rounded-lg border border-slate-100 bg-white p-1.5">
            <Stars size="xs" />
            <p className="mt-0.5 text-[5px] italic text-slate-600">&ldquo;{r.q}&rdquo;</p>
            <p className="mt-0.5 text-[5px] font-semibold text-slate-800">— {r.n}</p>
          </div>
        ))}
      </div>

      {/* CTA banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-center">
        <p className="text-[8px] font-bold text-white">Ready for a Healthier Smile?</p>
        <span className="mt-1 inline-block rounded-full bg-white px-3 py-0.5 text-[7px] font-bold text-blue-700">Schedule Free Consultation</span>
      </div>

      {/* Footer */}
      <div className="grid grid-cols-4 gap-1 bg-slate-900 px-3 py-1.5">
        {["Services", "Hours", "Location", "Contact"].map((col) => (
          <div key={col}>
            <p className="text-[5px] font-bold text-white">{col}</p>
            <p className="text-[4px] text-slate-500">Mon–Sat 8–6</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LawAfter() {
  return (
    <div className="flex h-full flex-col bg-slate-950">
      {/* Nav */}
      <div className="flex items-center justify-between bg-slate-900 px-3 py-2">
        <span className="text-[9px] font-bold text-amber-400">⚖ Rodriguez & Associates</span>
        <div className="hidden items-center gap-2 sm:flex">
          {["Practice Areas", "Attorneys", "Results", "Blog"].map((l) => (
            <span key={l} className="text-[7px] text-slate-400">{l}</span>
          ))}
          <span className="rounded bg-amber-500 px-2 py-0.5 text-[7px] font-bold text-slate-900">Free Consultation</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-black px-3 py-3">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-amber-500/30 to-transparent" />
        </div>
        <div className="relative grid grid-cols-5 gap-2">
          <div className="col-span-3">
            <span className="text-[6px] font-semibold uppercase tracking-widest text-amber-500">
              Personal Injury · Family Law · Criminal Defense
            </span>
            <p className="mt-1 text-[12px] font-bold leading-tight text-white">
              Aggressive Advocacy.<br />
              <span className="text-amber-400">Proven Results.</span>
            </p>
            <p className="mt-1 text-[7px] text-slate-400">
              $50M+ recovered for clients · 25 years of experience · No fee unless we win
            </p>
            <div className="mt-2 flex gap-1.5">
              <span className="rounded border border-amber-500/50 bg-amber-500/10 px-2.5 py-1 text-[7px] font-bold text-amber-400">
                Free Case Review →
              </span>
              <span className="rounded border border-slate-600 px-2 py-1 text-[7px] text-slate-400">📞 24/7 Hotline</span>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-1">
            {[
              { v: "$50M+", l: "Recovered" },
              { v: "850+", l: "Cases Won" },
              { v: "25+", l: "Years" },
              { v: "5.0★", l: "Rating" },
            ].map((s) => (
              <div key={s.l} className="rounded-lg border border-slate-700 bg-slate-800/80 p-1.5 text-center">
                <p className="text-[9px] font-bold text-amber-400">{s.v}</p>
                <p className="text-[5px] text-slate-500">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Practice areas */}
      <div className="border-b border-slate-800 bg-slate-900 px-3 py-2">
        <p className="text-[7px] font-bold uppercase tracking-wider text-slate-500">Practice Areas</p>
        <div className="mt-1.5 grid grid-cols-4 gap-1">
          {[
            { t: "Personal Injury", d: "Car accidents, slip & fall", e: "⚡" },
            { t: "Family Law", d: "Divorce, custody, support", e: "👨‍👩‍👧" },
            { t: "Criminal Defense", d: "DUI, felonies, misdemeanors", e: "🛡" },
            { t: "Immigration", d: "Visas, green cards, citizenship", e: "🌎" },
          ].map((a) => (
            <div key={a.t} className="rounded-lg border border-slate-700 bg-slate-800 p-1.5">
              <span className="text-xs">{a.e}</span>
              <p className="text-[6px] font-bold text-white">{a.t}</p>
              <p className="text-[5px] text-slate-500">{a.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Attorneys */}
      <div className="px-3 py-2">
        <p className="text-[7px] font-bold uppercase tracking-wider text-slate-500">Our Attorneys</p>
        <div className="mt-1.5 grid grid-cols-3 gap-1">
          {[
            { n: "James Rodriguez", r: "Managing Partner", c: "850+ cases" },
            { n: "Maria Santos", r: "Senior Associate", c: "Personal Injury" },
            { n: "David Chen", r: "Partner", c: "Family Law" },
          ].map((atty) => (
            <div key={atty.n} className="overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
              <div className="h-8 bg-gradient-to-br from-slate-600 to-slate-800" />
              <div className="p-1.5">
                <p className="text-[6px] font-bold text-white">{atty.n}</p>
                <p className="text-[5px] text-amber-400">{atty.r}</p>
                <p className="text-[5px] text-slate-500">{atty.c}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results + testimonial */}
      <div className="grid grid-cols-2 gap-1.5 px-3 py-1">
        <div className="rounded-lg border border-emerald-800/50 bg-emerald-950/50 p-1.5">
          <p className="text-[6px] font-bold text-emerald-400">Recent Case Results</p>
          {["$2.4M — Auto Accident", "$890K — Medical Malpractice", "$450K — Workplace Injury"].map((r) => (
            <p key={r} className="mt-0.5 text-[5px] text-slate-400">{r}</p>
          ))}
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-800 p-1.5">
          <Stars size="xs" />
          <p className="mt-0.5 text-[5px] italic text-slate-300">
            &ldquo;Rodriguez Law fought tirelessly for my family. Highly recommend.&rdquo;
          </p>
          <p className="text-[5px] font-semibold text-amber-400">— Client Review</p>
        </div>
      </div>

      {/* Consultation form preview */}
      <div className="mx-3 mb-2 rounded-lg border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-transparent p-2">
        <p className="text-[7px] font-bold text-white">Get Your Free Consultation</p>
        <div className="mt-1 grid grid-cols-2 gap-1">
          <div className="rounded border border-slate-600 bg-slate-800 px-1.5 py-1 text-[5px] text-slate-500">Your Name</div>
          <div className="rounded border border-slate-600 bg-slate-800 px-1.5 py-1 text-[5px] text-slate-500">Phone Number</div>
        </div>
        <div className="mt-1 rounded bg-amber-500 py-1 text-center text-[6px] font-bold text-slate-900">Request Free Consultation</div>
      </div>

      {/* Trust + footer */}
      <div className="mt-auto flex items-center justify-center gap-2 border-t border-slate-800 bg-slate-900 py-1.5">
        {["Bar Certified", "Super Lawyers", "AV Preeminent", "Confidential"].map((b) => (
          <span key={b} className="text-[5px] text-slate-500">{b}</span>
        ))}
      </div>
    </div>
  );
}

const beforeMap: Record<CaseStudySlug, React.ComponentType> = {
  "demo-dental-clinic-redesign": DentalBefore,
  "demo-law-firm-growth": LawBefore,
};

const afterMap: Record<CaseStudySlug, React.ComponentType> = {
  "demo-dental-clinic-redesign": DentalAfter,
  "demo-law-firm-growth": LawAfter,
};

function resolveSlug(slug: string): CaseStudySlug {
  if (slug in beforeMap) return slug as CaseStudySlug;
  return "demo-dental-clinic-redesign";
}

export function CaseStudyBeforePreview({ slug, className }: { slug: string; className?: string }) {
  const Preview = beforeMap[resolveSlug(slug)];
  return (
    <div className={cn("h-full w-full overflow-hidden", className)}>
      <Preview />
    </div>
  );
}

export function CaseStudyAfterPreview({ slug, className }: { slug: string; className?: string }) {
  const Preview = afterMap[resolveSlug(slug)];
  return (
    <div className={cn("h-full w-full overflow-hidden", className)}>
      <Preview />
    </div>
  );
}

/** Fallback by industry when slug not available */
export function CaseStudyAfterByIndustry({ industry, className }: { industry: IndustryKey; className?: string }) {
  const slugMap: Record<IndustryKey, CaseStudySlug> = {
    dentists: "demo-dental-clinic-redesign",
    "law-firms": "demo-law-firm-growth",
    "real-estate": "demo-dental-clinic-redesign",
    accounting: "demo-dental-clinic-redesign",
    physiotherapy: "demo-dental-clinic-redesign",
  };
  return <CaseStudyAfterPreview slug={slugMap[industry]} className={className} />;
}

export function CaseStudyBeforeByIndustry({ industry, className }: { industry: IndustryKey; className?: string }) {
  const slugMap: Record<IndustryKey, CaseStudySlug> = {
    dentists: "demo-dental-clinic-redesign",
    "law-firms": "demo-law-firm-growth",
    "real-estate": "demo-dental-clinic-redesign",
    accounting: "demo-dental-clinic-redesign",
    physiotherapy: "demo-dental-clinic-redesign",
  };
  return <CaseStudyBeforePreview slug={slugMap[industry]} className={className} />;
}
