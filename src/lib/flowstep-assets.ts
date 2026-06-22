/** Visual assets — self-hosted under /public/images/flowstep (no external fetch at runtime) */

const img = (filename: string) => `/images/flowstep/${filename}`;

export const flowstepImages = {
  hero: {
    dentalDesktop: img("hero-dental-desktop.jpg"),
    dentalMobile: img("hero-dental-mobile.jpg"),
  },
  beforeAfter: {
    before: img("before-website.jpg"),
    after: img("after-website.jpg"),
  },
  industries: {
    dentists: img("before-website.jpg"),
    lawFirms: img("industry-law.jpg"),
    realEstate: img("industry-realestate.jpg"),
    accounting: img("industry-accounting.jpg"),
    physiotherapy: img("industry-physio.jpg"),
  },
  portfolio: {
    dental: img("hero-dental-desktop.jpg"),
    dentalMobile: img("portfolio-dental-mobile.jpg"),
    lawFirm: img("portfolio-law.jpg"),
    realEstate: img("industry-realestate.jpg"),
    accounting: img("industry-accounting.jpg"),
  },
} as const;

export const industryFlowConfig = [
  {
    key: "dentists",
    label: "Dentist",
    name: "Dentists",
    icon: "Smile",
    borderColor: "border-t-primary",
    headerGradient: "from-primary/30 to-blue-600/5",
    iconBg: "bg-primary/20 text-primary",
    linkColor: "text-primary",
    blurb: "Bright Smile Dental — more appointment bookings.",
    image: flowstepImages.industries.dentists,
  },
  {
    key: "law-firms",
    label: "Law Firm",
    name: "Law Firms",
    icon: "Scale",
    borderColor: "border-t-amber-400",
    headerGradient: "from-amber-400/30 to-zinc-800",
    iconBg: "bg-amber-400/20 text-amber-400",
    linkColor: "text-amber-400",
    blurb: "Rodriguez Law — more consultation requests.",
    image: flowstepImages.industries.lawFirms,
  },
  {
    key: "real-estate",
    label: "Real Estate",
    name: "Real Estate Agencies",
    icon: "Building",
    borderColor: "border-t-emerald-500",
    headerGradient: "from-emerald-500/30 to-teal-600/5",
    iconBg: "bg-emerald-500/20 text-emerald-400",
    linkColor: "text-emerald-400",
    blurb: "Chen Realty — more seller & buyer leads.",
    image: flowstepImages.industries.realEstate,
  },
  {
    key: "accounting",
    label: "Accountant",
    name: "Accounting Firms",
    icon: "BarChart3",
    borderColor: "border-t-amber-500",
    headerGradient: "from-amber-500/30 to-orange-600/5",
    iconBg: "bg-amber-500/20 text-amber-500",
    linkColor: "text-amber-500",
    blurb: "Thompson CPA — tax season leads & trust.",
    image: flowstepImages.industries.accounting,
  },
  {
    key: "physiotherapy",
    label: "Physiotherapy",
    name: "Physiotherapy Clinics",
    icon: "Activity",
    borderColor: "border-t-sky-400",
    headerGradient: "from-sky-400/30 to-blue-600/5",
    iconBg: "bg-sky-400/20 text-sky-400",
    linkColor: "text-sky-400",
    blurb: "Active Life Physio — more session bookings.",
    image: flowstepImages.industries.physiotherapy,
  },
] as const;
