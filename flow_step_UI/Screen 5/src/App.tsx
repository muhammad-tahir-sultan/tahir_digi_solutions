import { useEffect } from "react";
import {
  ArrowRight,
  FileText,
  Gauge,
  Home,
  LayoutGrid,
  MapPin,
  MapPinOff,
  MousePointerClick,
  PenTool,
  Quote,
  RefreshCw,
  Scale,
  Search,
  Smartphone,
  Sparkles,
  Star,
  Stethoscope,
  Store,
  Target,
  TrendingDown,
  TrendingUp,
  TriangleAlert,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function App() {
  return (
    <div>
      <div className="font-sans bg-zinc-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <header className="sticky z-50 backdrop-blur-md bg-zinc-950/80 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0 w-full">
          <div className="max-w-[1140px] flex mx-auto px-8 py-4 justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="size-9 font-bold rounded-lg bg-[#155dfc] text-[#1c398e] flex justify-center items-center">
                DS
              </div>
              <span className="font-bold text-lg leading-7 tracking-tight">
                Digital Solutions
              </span>
            </div>
            <nav className="hidden items-center gap-6">
              <a className="font-medium text-[#155dfc] text-sm leading-5 border-[#155dfc] border-t-0 border-r-0 border-b-2 border-l-0 border-solid pb-1">
                Services
              </a>
              <a className="transition-colors font-medium text-[#9f9fa9] text-sm leading-5">
                Industries
              </a>
              <a className="transition-colors font-medium text-[#9f9fa9] text-sm leading-5">
                Portfolio
              </a>
              <a className="transition-colors font-medium text-[#9f9fa9] text-sm leading-5">
                Case Studies
              </a>
              <a className="transition-colors font-medium text-[#9f9fa9] text-sm leading-5">
                Process
              </a>
              <a className="transition-colors font-medium text-[#9f9fa9] text-sm leading-5">
                Pricing
              </a>
              <a className="transition-colors font-medium text-[#9f9fa9] text-sm leading-5">
                About
              </a>
              <a className="transition-colors font-medium text-[#9f9fa9] text-sm leading-5">
                Contact
              </a>
            </nav>
            <Button className="bg-[#155dfc] text-[#1c398e]">
              <Search className="size-4" />
              Free Audit
            </Button>
          </div>
        </header>
        <main className="max-w-[1140px] mx-auto px-8">
          <section className="py-12">
            <div className="text-center flex flex-col items-center gap-4">
              <span className="inline-flex bg-[oklch(0.769_0.188_70.08/0.15)] text-[oklch(0.769_0.188_70.08)] font-semibold uppercase rounded-full text-xs leading-4 tracking-widest px-4 py-1.5 items-center gap-2">
                <TriangleAlert className="size-3.5" />
                The Problem
              </span>
              <h2 className="max-w-2xl font-bold text-4xl leading-10 tracking-tight">
                Is Your Website Costing You Customers?
              </h2>
            </div>
            <div className="grid grid-cols-5 mt-8 gap-4">
              <Card className="group border-[oklch(0.704_0.191_22.216/0.2)] bg-[oklch(0.21_0.006_285.885)] transition-all p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="size-10 bg-[oklch(0.704_0.191_22.216/0.15)] text-[oklch(0.704_0.191_22.216)] rounded-lg flex justify-center items-center">
                    <PenTool className="size-5" />
                  </div>
                  <CardTitle className="font-bold text-base leading-6">
                    Outdated Design
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                    A dated look makes visitors leave before they ever contact
                    you.
                  </p>
                </CardContent>
              </Card>
              <Card className="group border-[oklch(0.704_0.191_22.216/0.2)] bg-[oklch(0.21_0.006_285.885)] transition-all p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="size-10 bg-[oklch(0.704_0.191_22.216/0.15)] text-[oklch(0.704_0.191_22.216)] rounded-lg flex justify-center items-center">
                    <Smartphone className="size-5" />
                  </div>
                  <CardTitle className="font-bold text-base leading-6">
                    Poor Mobile Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                    Most local searches happen on phones — a broken layout loses
                    them.
                  </p>
                </CardContent>
              </Card>
              <Card className="group border-[oklch(0.704_0.191_22.216/0.2)] bg-[oklch(0.21_0.006_285.885)] transition-all p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="size-10 bg-[oklch(0.704_0.191_22.216/0.15)] text-[oklch(0.704_0.191_22.216)] rounded-lg flex justify-center items-center">
                    <Gauge className="size-5" />
                  </div>
                  <CardTitle className="font-bold text-base leading-6">
                    Slow Loading Speed
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                    Every extra second of load time quietly drains your
                    conversions.
                  </p>
                </CardContent>
              </Card>
              <Card className="group border-[oklch(0.704_0.191_22.216/0.2)] bg-[oklch(0.21_0.006_285.885)] transition-all p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="size-10 bg-[oklch(0.704_0.191_22.216/0.15)] text-[oklch(0.704_0.191_22.216)] rounded-lg flex justify-center items-center">
                    <TrendingDown className="size-5" />
                  </div>
                  <CardTitle className="font-bold text-base leading-6">
                    Low Lead Generation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                    Traffic without clear calls-to-action means missed
                    appointments.
                  </p>
                </CardContent>
              </Card>
              <Card className="group border-[oklch(0.704_0.191_22.216/0.2)] bg-[oklch(0.21_0.006_285.885)] transition-all p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="size-10 bg-[oklch(0.704_0.191_22.216/0.15)] text-[oklch(0.704_0.191_22.216)] rounded-lg flex justify-center items-center">
                    <MapPinOff className="size-5" />
                  </div>
                  <CardTitle className="font-bold text-base leading-6">
                    Weak Local Presence
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                    Competitors outrank you locally and capture nearby
                    customers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="py-12">
            <div className="text-center flex flex-col items-center gap-4">
              <span className="inline-flex bg-[oklch(0.696_0.17_162.48/0.15)] text-[oklch(0.696_0.17_162.48)] font-semibold uppercase rounded-full text-xs leading-4 tracking-widest px-4 py-1.5 items-center gap-2">
                <Sparkles className="size-3.5" />
                The Solution
              </span>
              <h2 className="max-w-3xl font-bold text-4xl leading-10 tracking-tight">
                We Don't Just Build Websites — We Build Growth Engines
              </h2>
            </div>
            <div className="grid grid-cols-4 mt-8 gap-6">
              <Card className="bg-[oklch(0.21_0.006_285.885)] transition-transform border-white/10 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="size-11 bg-[oklch(0.546_0.245_262.881/0.18)] text-[oklch(0.546_0.245_262.881)] rounded-xl flex justify-center items-center">
                    <Target className="size-5" />
                  </div>
                  <CardTitle className="font-bold text-base leading-6">
                    Conversion-Focused Design
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                    Layouts engineered to turn visitors into booked leads.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[oklch(0.21_0.006_285.885)] transition-transform border-white/10 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="size-11 bg-[oklch(0.769_0.188_70.08/0.15)] text-[oklch(0.0_0_0)] rounded-xl flex justify-center items-center">
                    <Smartphone className="size-5 text-[oklch(0.769_0.188_70.08)]" />
                  </div>
                  <CardTitle className="font-bold text-base leading-6">
                    Mobile-First
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                    Flawless experiences on every device your customers use.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[oklch(0.21_0.006_285.885)] transition-transform border-white/10 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="size-11 bg-[oklch(0.696_0.17_162.48/0.18)] text-[oklch(0.696_0.17_162.48)] rounded-xl flex justify-center items-center">
                    <MapPin className="size-5" />
                  </div>
                  <CardTitle className="font-bold text-base leading-6">
                    Local SEO
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                    Rank in your area so nearby customers find you first.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[oklch(0.21_0.006_285.885)] transition-transform border-white/10 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="size-11 bg-[oklch(0.769_0.188_70.08/0.18)] text-[oklch(0.769_0.188_70.08)] rounded-xl flex justify-center items-center">
                    <Zap className="size-5" />
                  </div>
                  <CardTitle className="font-bold text-base leading-6">
                    Performance Optimized
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                    Lightning-fast pages that keep visitors engaged and
                    converting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="py-12">
            <div className="text-center flex flex-col items-center gap-4">
              <span className="inline-flex bg-[oklch(0.769_0.188_70.08/0.0)] text-[oklch(0.769_0.188_70.08)] border-[oklch(0.769_0.188_70.08/0.4)] font-semibold uppercase rounded-full text-xs leading-4 tracking-widest border-black/1 border-1 border-solid px-4 py-1.5 items-center gap-2">
                <LayoutGrid className="size-3.5" />
                Services
              </span>
              <h2 className="max-w-2xl font-bold text-4xl leading-10 tracking-tight">
                Everything You Need to Grow Online
              </h2>
            </div>
            <div className="grid grid-cols-3 mt-8 gap-6">
              <Card className="bg-[oklch(0.21_0.006_285.885)] transition-all border-white/10 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="size-10 bg-[oklch(0.546_0.245_262.881/0.18)] text-[oklch(0.546_0.245_262.881)] rounded-lg flex justify-center items-center">
                    <MousePointerClick className="size-5" />
                  </div>
                  <CardTitle className="font-bold text-base leading-6">
                    High-Converting Website Design
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                    Custom designs built around your goals to maximize leads and
                    bookings.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[oklch(0.21_0.006_285.885)] transition-all border-white/10 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="size-10 bg-[oklch(0.488_0.243_264.376/0.18)] text-[oklch(0.696_0.17_162.48)] rounded-lg flex justify-center items-center">
                    <RefreshCw className="size-5" />
                  </div>
                  <CardTitle className="font-bold text-base leading-6">
                    Website Redesign
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                    Transform an outdated site into a modern, trust-building
                    experience.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[oklch(0.21_0.006_285.885)] transition-all border-white/10 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="size-10 bg-[oklch(0.696_0.17_162.48/0.18)] text-[oklch(0.696_0.17_162.48)] rounded-lg flex justify-center items-center">
                    <Store className="size-5" />
                  </div>
                  <CardTitle className="font-bold text-base leading-6">
                    Local Business Websites
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                    Tailored sites that connect you with customers in your
                    community.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[oklch(0.21_0.006_285.885)] transition-all border-white/10 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="size-10 bg-[oklch(0.769_0.188_70.08/0.18)] text-[oklch(0.769_0.188_70.08)] rounded-lg flex justify-center items-center">
                    <FileText className="size-5" />
                  </div>
                  <CardTitle className="font-bold text-base leading-6">
                    Landing Pages
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                    Focused, fast pages designed to capture leads from every
                    campaign.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[oklch(0.21_0.006_285.885)] transition-all border-white/10 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="size-10 bg-[oklch(0.627_0.265_303.9/0.18)] text-[oklch(0.627_0.265_303.9)] rounded-lg flex justify-center items-center">
                    <TrendingUp className="size-5" />
                  </div>
                  <CardTitle className="font-bold text-base leading-6">
                    Conversion Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                    Data-driven tweaks that turn more of your visitors into
                    customers.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[oklch(0.21_0.006_285.885)] transition-all border-white/10 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="size-10 bg-[oklch(0.546_0.245_262.881/0.18)] text-[oklch(0.546_0.245_262.881)] rounded-lg flex justify-center items-center">
                    <Search className="size-5" />
                  </div>
                  <CardTitle className="font-bold text-base leading-6">
                    Technical SEO
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                    Clean code and fast performance that search engines love to
                    rank.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex mt-8 justify-center">
              <Button
                className="bg-transparent text-neutral-50 border-white/10 border-0 border-solid"
                variant="outline"
              >
                View All Services
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </section>
          <section className="py-12">
            <div className="text-center flex flex-col items-center gap-4">
              <span className="inline-flex border-[oklch(0.769_0.188_70.08/0.4)] text-[oklch(0.769_0.188_70.08)] font-semibold uppercase rounded-full text-xs leading-4 tracking-widest border-black/1 border-1 border-solid px-4 py-1.5 items-center gap-2">
                <Quote className="size-3.5" />
                Testimonials
              </span>
              <h2 className="max-w-2xl font-bold text-4xl leading-10 tracking-tight">
                Trusted by Local Business Leaders
              </h2>
            </div>
            <div className="grid grid-cols-3 mt-8 gap-6">
              <Card className="border-[oklch(0.546_0.245_262.881/0.3)] bg-[oklch(0.21_0.006_285.885)] shadow-[0_8px_28px_oklch(0_0_0/0.35)] p-6 gap-4">
                <CardHeader className="p-0 gap-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="size-11 bg-[oklch(0.546_0.245_262.881)] font-bold rounded-full text-[#1c398e] text-sm leading-5 flex justify-center items-center">
                        SM
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm leading-5">
                          Dr. Sarah Mitchell
                        </span>
                        <span className="text-[#9f9fa9] text-xs leading-4">
                          Bright Smile Dental
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex bg-[oklch(0.546_0.245_262.881/0.15)] text-[oklch(0.696_0.17_162.48)] font-semibold uppercase rounded-full text-[10px] tracking-wide px-2.5 py-1 items-center gap-1">
                      <Stethoscope className="size-3" />
                      Dental
                    </span>
                  </div>
                  <div className="text-[oklch(0.769_0.188_70.08)] flex gap-0.5">
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[oklch(0.871_0.006_286)] italic text-sm leading-5">
                    \"Our new website tripled appointment bookings within two
                    months. The team understood exactly what local patients were
                    looking for.\"
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[oklch(0.546_0.245_262.881/0.3)] bg-[oklch(0.21_0.006_285.885)] shadow-[0_8px_28px_oklch(0_0_0/0.35)] p-6 gap-4">
                <CardHeader className="p-0 gap-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="size-11 bg-[oklch(0.769_0.188_70.08)] text-[oklch(0.141_0.005_285.823)] font-bold rounded-full text-sm leading-5 flex justify-center items-center">
                        JR
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm leading-5">
                          James Rodriguez
                        </span>
                        <span className="text-[#9f9fa9] text-xs leading-4">
                          Rodriguez Law
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex bg-[oklch(0.769_0.188_70.08/0.15)] text-[oklch(0.769_0.188_70.08)] font-semibold uppercase rounded-full text-[10px] tracking-wide px-2.5 py-1 items-center gap-1">
                      <Scale className="size-3" />
                      Law
                    </span>
                  </div>
                  <div className="text-[oklch(0.769_0.188_70.08)] flex gap-0.5">
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[oklch(0.871_0.006_286)] italic text-sm leading-5">
                    \"Consultation requests doubled after launch. The site
                    finally reflects the credibility our firm has built over
                    decades.\"
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[oklch(0.546_0.245_262.881/0.3)] bg-[oklch(0.21_0.006_285.885)] shadow-[0_8px_28px_oklch(0_0_0/0.35)] p-6 gap-4">
                <CardHeader className="p-0 gap-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="size-11 bg-[oklch(0.696_0.17_162.48)] text-[oklch(0.141_0.005_285.823)] font-bold rounded-full text-sm leading-5 flex justify-center items-center">
                        EC
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm leading-5">
                          Emily Chen
                        </span>
                        <span className="text-[#9f9fa9] text-xs leading-4">
                          Chen Realty
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex bg-[oklch(0.696_0.17_162.48/0.15)] text-[oklch(0.696_0.17_162.48)] font-semibold uppercase rounded-full text-[10px] tracking-wide px-2.5 py-1 items-center gap-1">
                      <Home className="size-3" />
                      Real Estate
                    </span>
                  </div>
                  <div className="text-[oklch(0.769_0.188_70.08)] flex gap-0.5">
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[oklch(0.871_0.006_286)] italic text-sm leading-5">
                    \"We now rank top three for local searches and our seller
                    leads have never been stronger. Truly a growth engine.\"
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
