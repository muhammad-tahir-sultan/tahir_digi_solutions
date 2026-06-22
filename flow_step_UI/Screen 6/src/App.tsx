import { useEffect } from "react";
import {
  Calendar,
  Check,
  Clock,
  Crown,
  Gem,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function App() {
  return (
    <div>
      <div className="font-sans bg-zinc-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <header className="backdrop-blur-md bg-zinc-900/80 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid w-full">
          <div className="max-w-[1140px] flex mx-auto px-8 justify-between items-center gap-8 h-16">
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-lg bg-[#155dfc] flex justify-center items-center">
                <span className="font-bold text-[#1c398e] text-sm leading-5">
                  DS
                </span>
              </div>
              <span className="font-bold text-base leading-6 tracking-tight">
                Digital Solutions
              </span>
            </div>
            <nav className="hidden items-center gap-6">
              <a className="transition-colors text-[#9f9fa9] text-sm leading-5">
                Services
              </a>
              <a className="transition-colors text-[#9f9fa9] text-sm leading-5">
                Industries
              </a>
              <a className="transition-colors text-[#9f9fa9] text-sm leading-5">
                Portfolio
              </a>
              <a className="transition-colors text-[#9f9fa9] text-sm leading-5">
                Case Studies
              </a>
              <a className="transition-colors text-[#9f9fa9] text-sm leading-5">
                Process
              </a>
              <a className="font-semibold text-neutral-50 text-sm leading-5 border-[#155dfc] border-t-0 border-r-0 border-b-2 border-l-0 border-solid pb-0.5">
                Pricing
              </a>
              <a className="transition-colors text-[#9f9fa9] text-sm leading-5">
                About
              </a>
              <a className="transition-colors text-[#9f9fa9] text-sm leading-5">
                Contact
              </a>
            </nav>
            <Button className="font-semibold rounded-lg bg-[#155dfc] text-[#1c398e] text-sm leading-5">
              Free Audit
            </Button>
          </div>
        </header>
        <section className="px-8 py-12 w-full">
          <div className="max-w-[1140px] relative bg-[linear-gradient(120deg,#1E3A8A_0%,#1d4ed8_45%,#0EA5E9_100%)] rounded-3xl mx-auto overflow-hidden">
            <div className="bg-white/22 absolute inset-0" />
            <div className="relative text-center flex p-12 flex-col items-center gap-6">
              <div className="inline-flex font-semibold rounded-full bg-white/15 text-white text-xs leading-4 px-4 py-1.5 items-center gap-2">
                <Sparkles className="size-4" />
                Lead Generation Machine
              </div>
              <h1 className="max-w-3xl leading-tight font-bold text-white text-[44px]">
                Ready to Turn Your Website Into a Lead Generation Machine?
              </h1>
              <p className="max-w-xl text-white/80 text-lg leading-7">
                Get a free website audit and discover exactly how to attract
                more customers online.
              </p>
              <div className="flex pt-2 items-center gap-4">
                <Button className="font-semibold rounded-lg bg-white text-blue-700 text-base leading-6 px-8 h-12">
                  <Search className="size-5" />
                  Get Free Website Audit
                </Button>
                <Button
                  className="bg-transparent font-semibold rounded-lg text-white text-base leading-6 border-white/70 border-0 border-solid px-8 h-12"
                  variant="outline"
                >
                  <Calendar className="size-5" />
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="px-8 pb-12 w-full">
          <div className="max-w-[1140px] flex mx-auto flex-col gap-8">
            <div className="text-center flex flex-col items-center gap-2">
              <span className="font-bold uppercase text-sky-500 text-xs leading-4 tracking-widest">
                Pricing
              </span>
              <h2 className="max-w-2xl font-bold text-white text-4xl leading-10">
                Transparent Pricing for Local Business Websites
              </h2>
              <p className="text-slate-400 text-base leading-6">
                No hidden fees. No surprises. Just results.
              </p>
            </div>
            <div className="grid grid-cols-3 items-start gap-6">
              <Card className="rounded-2xl bg-slate-800 border-slate-700 border-1 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="flex items-center gap-2">
                    <Rocket className="size-5 text-slate-300" />
                    <span className="font-bold text-white text-lg leading-7">
                      Starter
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-5">
                    Perfect for new local businesses
                  </p>
                  <div className="flex pt-2 items-end gap-1">
                    <span className="font-bold text-white text-4xl leading-10">
                      $4,999
                    </span>
                  </div>
                  <div className="inline-flex text-slate-400 text-xs leading-4 items-center gap-1.5">
                    <Clock className="size-3.5" />
                    4-6 weeks delivery
                  </div>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-2">
                  <div className="bg-slate-700 w-full h-px" />
                  <div className="text-slate-300 text-sm leading-5 flex items-center gap-2">
                    <Check className="size-4 text-emerald-500" />
                    5-page custom website
                  </div>
                  <div className="text-slate-300 text-sm leading-5 flex items-center gap-2">
                    <Check className="size-4 text-emerald-500" />
                    Mobile responsive design
                  </div>
                  <div className="text-slate-300 text-sm leading-5 flex items-center gap-2">
                    <Check className="size-4 text-emerald-500" />
                    Basic on-page SEO
                  </div>
                  <div className="text-slate-300 text-sm leading-5 flex items-center gap-2">
                    <Check className="size-4 text-emerald-500" />
                    Contact form integration
                  </div>
                  <div className="text-slate-300 text-sm leading-5 flex items-center gap-2">
                    <Check className="size-4 text-emerald-500" />
                    Google Maps embed
                  </div>
                  <div className="text-slate-300 text-sm leading-5 flex items-center gap-2">
                    <Check className="size-4 text-emerald-500" />
                    Speed optimization
                  </div>
                </CardContent>
                <CardFooter className="p-0">
                  <Button
                    className="bg-transparent font-semibold rounded-lg text-white border-slate-600 border-0 border-solid w-full h-11"
                    variant="outline"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
              <div className="relative bg-[linear-gradient(160deg,#0EA5E9,#2563EB,#1E3A8A)] rounded-2xl -mt-4 p-[1.5px]">
                <Card className="rounded-[15px] bg-blue-900/35 border-black/1 border-0 border-solid p-6 gap-4">
                  <div className="left-1/2 -translate-x-1/2 inline-flex font-bold rounded-full bg-sky-500 text-white text-xs leading-4 absolute -top-3 px-4 py-1 items-center gap-1.5">
                    <Star className="size-3.5" />
                    Most Popular
                  </div>
                  <CardHeader className="px-0 pt-2 pb-0 gap-2">
                    <div className="flex items-center gap-2">
                      <Crown className="size-5 text-sky-500" />
                      <span className="font-bold text-white text-lg leading-7">
                        Professional
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm leading-5">
                      Best for growing local businesses
                    </p>
                    <div className="flex pt-2 items-end gap-1">
                      <span className="font-bold text-white text-5xl leading-12">
                        $7,499
                      </span>
                    </div>
                    <div className="inline-flex text-slate-300 text-xs leading-4 items-center gap-1.5">
                      <Clock className="size-3.5" />
                      6-8 weeks delivery
                    </div>
                  </CardHeader>
                  <CardContent className="flex p-0 flex-col gap-2">
                    <div className="bg-white/15 w-full h-px" />
                    <div className="text-slate-200 text-sm leading-5 flex items-center gap-2">
                      <Check className="size-4 text-emerald-500" />
                      Everything in Starter
                    </div>
                    <div className="text-slate-200 text-sm leading-5 flex items-center gap-2">
                      <Check className="size-4 text-emerald-500" />
                      10-page custom website
                    </div>
                    <div className="text-slate-200 text-sm leading-5 flex items-center gap-2">
                      <Check className="size-4 text-emerald-500" />
                      Advanced local SEO
                    </div>
                    <div className="text-slate-200 text-sm leading-5 flex items-center gap-2">
                      <Check className="size-4 text-emerald-500" />
                      Conversion optimization
                    </div>
                    <div className="text-slate-200 text-sm leading-5 flex items-center gap-2">
                      <Check className="size-4 text-emerald-500" />
                      Booking system integration
                    </div>
                    <div className="text-slate-200 text-sm leading-5 flex items-center gap-2">
                      <Check className="size-4 text-emerald-500" />
                      {`Blog & content setup`}
                    </div>
                    <div className="text-slate-200 text-sm leading-5 flex items-center gap-2">
                      <Check className="size-4 text-emerald-500" />
                      Analytics dashboard
                    </div>
                    <div className="text-slate-200 text-sm leading-5 flex items-center gap-2">
                      <Check className="size-4 text-emerald-500" />
                      Priority support
                    </div>
                  </CardContent>
                  <CardFooter className="p-0">
                    <Button className="font-semibold rounded-lg bg-[#155dfc] text-[#1c398e] w-full h-11">
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <Card className="rounded-2xl bg-slate-800 border-sky-500/50 border-1 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="flex items-center gap-2">
                    <Gem className="size-5 text-sky-500" />
                    <span className="font-bold text-white text-lg leading-7">
                      Premium
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-5">
                    Full growth package for established businesses
                  </p>
                  <div className="flex pt-2 items-end gap-1">
                    <span className="font-bold text-white text-4xl leading-10">
                      $9,999
                    </span>
                  </div>
                  <div className="inline-flex text-slate-400 text-xs leading-4 items-center gap-1.5">
                    <Clock className="size-3.5" />
                    8-10 weeks delivery
                  </div>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-2">
                  <div className="bg-slate-700 w-full h-px" />
                  <div className="text-slate-300 text-sm leading-5 flex items-center gap-2">
                    <Check className="size-4 text-sky-500" />
                    Everything in Professional
                  </div>
                  <div className="text-slate-300 text-sm leading-5 flex items-center gap-2">
                    <Check className="size-4 text-sky-500" />
                    Unlimited pages
                  </div>
                  <div className="text-slate-300 text-sm leading-5 flex items-center gap-2">
                    <Check className="size-4 text-sky-500" />
                    Custom illustrations
                  </div>
                  <div className="text-slate-300 text-sm leading-5 flex items-center gap-2">
                    <Check className="size-4 text-sky-500" />
                    Before/after showcases
                  </div>
                  <div className="text-slate-300 text-sm leading-5 flex items-center gap-2">
                    <Check className="size-4 text-sky-500" />
                    Multi-location SEO
                  </div>
                  <div className="text-slate-300 text-sm leading-5 flex items-center gap-2">
                    <Check className="size-4 text-sky-500" />
                    A/B testing setup
                  </div>
                  <div className="text-slate-300 text-sm leading-5 flex items-center gap-2">
                    <Check className="size-4 text-sky-500" />
                    CRM integration
                  </div>
                  <div className="text-slate-300 text-sm leading-5 flex items-center gap-2">
                    <Check className="size-4 text-sky-500" />
                    Email automation
                  </div>
                  <div className="text-slate-300 text-sm leading-5 flex items-center gap-2">
                    <Check className="size-4 text-sky-500" />
                    Dedicated account manager
                  </div>
                  <div className="text-slate-300 text-sm leading-5 flex items-center gap-2">
                    <Check className="size-4 text-sky-500" />
                    90-day growth support
                  </div>
                </CardContent>
                <CardFooter className="p-0">
                  <Button className="font-semibold rounded-lg bg-sky-500 text-white w-full h-11">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex pt-2 justify-center items-center gap-2">
              <ShieldCheck className="size-4 text-slate-400" />
              <p className="text-slate-400 text-sm leading-5">
                All packages include 30-day post-launch support. Custom quotes
                available for larger projects.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
