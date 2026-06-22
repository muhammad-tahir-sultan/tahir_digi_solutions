import { useEffect } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building,
  Building2,
  MoveHorizontal,
  Scale,
  Smile,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function App() {
  return (
    <div>
      <div className="bg-zinc-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <header className="backdrop-blur-md bg-zinc-900/60 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid w-full">
          <div className="max-w-[1140px] flex mx-auto px-8 justify-between items-center gap-8 h-16">
            <div className="flex items-center gap-2">
              <div className="size-9 bg-gradient-to-br from-primary to-[oklch(0.685_0.16_237)] font-bold rounded-lg text-[#1c398e] flex justify-center items-center">
                DS
              </div>
              <span className="font-semibold tracking-tight">
                Digital Solutions
              </span>
            </div>
            <nav className="flex items-center gap-6">
              <a className="relative font-medium text-neutral-50 text-sm leading-5">
                Services
              </a>
              <a className="font-medium text-[#9f9fa9] text-sm leading-5">
                Industries
              </a>
              <a className="font-medium text-[#9f9fa9] text-sm leading-5">
                Portfolio
              </a>
              <a className="font-medium text-[#9f9fa9] text-sm leading-5">
                Case Studies
              </a>
              <a className="font-medium text-[#9f9fa9] text-sm leading-5">
                Process
              </a>
              <a className="font-medium text-[#9f9fa9] text-sm leading-5">
                Pricing
              </a>
              <a className="font-medium text-[#9f9fa9] text-sm leading-5">
                About
              </a>
              <a className="font-medium text-[#9f9fa9] text-sm leading-5">
                Contact
              </a>
            </nav>
            <Button className="rounded-lg bg-[#155dfc] text-[#1c398e]">
              <Sparkles className="size-4" />
              Free Audit
            </Button>
          </div>
        </header>
        <main className="max-w-[1140px] flex mx-auto px-8 py-12 flex-col gap-12">
          <section className="flex flex-col gap-8">
            <div className="text-center flex flex-col items-center gap-4">
              <span className="inline-flex border-[oklch(0.685_0.16_237)]/30 bg-[oklch(0.685_0.16_237)]/10 text-[oklch(0.769_0.15_237)] font-semibold uppercase rounded-full text-xs leading-4 tracking-widest border-black/1 border-1 border-solid px-3 py-1 items-center gap-1.5">
                <Zap className="size-3" />
                Transformation
              </span>
              <h2 className="max-w-2xl leading-tight font-bold text-neutral-50 text-[40px] tracking-tight">
                See the Difference a Premium Website Makes
              </h2>
              <p className="text-[#9f9fa9] text-base leading-6">
                Drag slider to compare outdated vs redesigned website
              </p>
            </div>
            <div className="relative shadow-2xl rounded-2xl border-white/10 border-1 border-solid w-full overflow-hidden">
              <div className="relative aspect-[16/8] w-full">
                <img
                  alt="Redesigned modern website"
                  className="object-cover absolute inset-0 w-full h-full"
                  data-authorname="Luke Chesser"
                  data-authorurl="https://unsplash.com/@lukechesser"
                  data-blurhash="LUDvl^00-;9Z~qM{IUt7_2M_Ios:"
                  data-photoid="JKUTrJ4vK00"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXJrJTIwd2Vic2l0ZSUyMGRlc2lnbiUyMGRhc2hib2FyZHxlbnwxfDB8fHwxNzgyMTUxMjUxfDA&ixlib=rb-4.1.0&q=80&w=400"
                />
                <div className="bg-gradient-to-r from-transparent to-background/50 absolute inset-0" />
                <div className="font-semibold rounded-full bg-[#155dfc] text-[#1c398e] text-xs leading-4 absolute right-4 top-4 px-3 py-1">
                  After · Premium Redesign
                </div>
                <div className="w-1/2 border-black/1 border-0 border-solid absolute left-0 inset-y-0 overflow-hidden">
                  <img
                    alt="Outdated 2016 website"
                    className="object-cover grayscale-[0.4] sepia-[0.15] w-full h-full"
                    data-authorname="Le Buzz Studio"
                    data-authorurl="https://unsplash.com/@le_buzz"
                    data-blurhash="LOHLYn~q0K%M-;IT9FWET0tRjEM_"
                    data-photoid="KiEiI2b9GkU"
                    src="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxvbGQlMjBvdXRkYXRlZCUyMGNsdXR0ZXJlZCUyMHdlYnNpdGUlMjBzY3JlZW58ZW58MXwwfHx8MTc4MjE1MTI1MHww&ixlib=rb-4.1.0&q=80&w=400"
                  />
                  <div className="bg-[oklch(0.3_0.02_60)]/30 absolute inset-0" />
                  <div className="font-semibold rounded-full bg-zinc-800 text-neutral-50 text-xs leading-4 absolute left-4 top-4 px-3 py-1">
                    Before · 2016 Site
                  </div>
                </div>
                <div className="left-1/2 -translate-x-1/2 bg-[oklch(0.685_0.16_237)] shadow-[0_0_20px_oklch(0.685_0.16_237/0.6)] absolute inset-y-0 w-1" />
                <div className="left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 border-[oklch(0.685_0.16_237)] shadow-xl rounded-full bg-[#155dfc] text-[#1c398e] border-black/1 border-4 border-solid flex absolute justify-center items-center">
                  <MoveHorizontal className="size-5" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <Card className="relative shadow-lg bg-zinc-900 border-white/10 border-0 border-solid p-6 gap-2 overflow-hidden">
                <CardHeader className="flex p-0 flex-row justify-between items-center gap-2">
                  <span className="font-medium text-[#9f9fa9] text-sm leading-5">
                    Load Time
                  </span>
                  <div className="size-8 bg-[oklch(0.696_0.17_162.48)]/15 text-[oklch(0.696_0.17_162.48)] rounded-lg flex justify-center items-center">
                    <ArrowDownRight className="size-4" />
                  </div>
                </CardHeader>
                <CardContent className="items-baseline flex p-0 gap-2">
                  <span className="line-through font-medium text-[#9f9fa9] text-sm leading-5">
                    8.2s
                  </span>
                  <ArrowRight className="size-4 text-[#9f9fa9]" />
                  <span className="text-[oklch(0.696_0.17_162.48)] font-bold text-3xl leading-9">
                    1.4s
                  </span>
                </CardContent>
              </Card>
              <Card className="relative shadow-lg bg-zinc-900 border-white/10 border-0 border-solid p-6 gap-2 overflow-hidden">
                <CardHeader className="flex p-0 flex-row justify-between items-center gap-2">
                  <span className="font-medium text-[#9f9fa9] text-sm leading-5">
                    Mobile Score
                  </span>
                  <div className="size-8 bg-[oklch(0.769_0.15_237)]/15 text-[oklch(0.769_0.15_237)] rounded-lg flex justify-center items-center">
                    <ArrowUpRight className="size-4" />
                  </div>
                </CardHeader>
                <CardContent className="items-baseline flex p-0 gap-2">
                  <span className="line-through font-medium text-[#9f9fa9] text-sm leading-5">
                    42
                  </span>
                  <ArrowRight className="size-4 text-[#9f9fa9]" />
                  <span className="text-[oklch(0.769_0.15_237)] font-bold text-3xl leading-9">
                    98
                  </span>
                </CardContent>
              </Card>
              <Card className="relative shadow-lg bg-zinc-900 border-white/10 border-0 border-solid p-6 gap-2 overflow-hidden">
                <CardHeader className="flex p-0 flex-row justify-between items-center gap-2">
                  <span className="font-medium text-[#9f9fa9] text-sm leading-5">
                    Monthly Leads
                  </span>
                  <div className="size-8 text-[oklch(0.685_0.245_262.881)] rounded-lg bg-[#155dfc]/15 flex justify-center items-center">
                    <ArrowUpRight className="size-4" />
                  </div>
                </CardHeader>
                <CardContent className="items-baseline flex p-0 gap-2">
                  <span className="line-through font-medium text-[#9f9fa9] text-sm leading-5">
                    12
                  </span>
                  <ArrowRight className="size-4 text-[#9f9fa9]" />
                  <span className="text-[oklch(0.685_0.245_262.881)] font-bold text-3xl leading-9">
                    47
                  </span>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="flex flex-col gap-8">
            <div className="text-center flex flex-col items-center gap-4">
              <span className="inline-flex border-[oklch(0.685_0.16_237)]/30 bg-[oklch(0.685_0.16_237)]/10 text-[oklch(0.769_0.15_237)] font-semibold uppercase rounded-full text-xs leading-4 tracking-widest border-black/1 border-1 border-solid px-3 py-1 items-center gap-1.5">
                <Building2 className="size-3" />
                Industries
              </span>
              <h2 className="leading-tight font-bold text-neutral-50 text-[40px] tracking-tight">
                Built for Businesses Like Yours
              </h2>
            </div>
            <div className="grid grid-cols-5 gap-4">
              <Card className="group bg-[oklch(0.21_0.006_285.885)] shadow-lg transition-all border-t-primary border-white/10 border-t-2 border-r-0 border-b-0 border-l-0 border-solid p-0 gap-0 overflow-hidden">
                <div className="bg-gradient-to-br from-primary/30 to-[oklch(0.546_0.245_262.881)]/5 flex p-4 items-center gap-2">
                  <div className="size-9 text-[oklch(0.685_0.245_262.881)] rounded-lg bg-[#155dfc]/20 flex justify-center items-center">
                    <Smile className="size-5" />
                  </div>
                  <span className="font-semibold text-neutral-50 text-sm leading-5">
                    Dentist
                  </span>
                </div>
                <div className="px-4 pt-4">
                  <div className="rounded-lg border-white/10 border-1 border-solid overflow-hidden">
                    <div className="bg-zinc-800 flex px-2 py-1.5 items-center gap-1">
                      <div className="size-1.5 rounded-full bg-[#ff6467]" />
                      <div className="size-1.5 bg-[oklch(0.769_0.188_70.08)] rounded-full" />
                      <div className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                    </div>
                    <img
                      alt="Bright Smile Dental site"
                      className="object-cover w-full h-20"
                      data-authorname="Le Buzz Studio"
                      data-authorurl="https://unsplash.com/@le_buzz"
                      data-blurhash="LOHLYn~q0K%M-;IT9FWET0tRjEM_"
                      data-photoid="KiEiI2b9GkU"
                      src="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjB3ZWJzaXRlJTIwaG9tZXBhZ2V8ZW58MXwwfHx8MTc4MjE1MTI1MXww&ixlib=rb-4.1.0&q=80&w=400"
                    />
                  </div>
                </div>
                <div className="flex p-4 flex-col gap-2">
                  <p className="text-[#9f9fa9] text-xs leading-4">
                    Bright Smile Dental — more appointment bookings.
                  </p>
                  <a className="inline-flex text-[oklch(0.685_0.245_262.881)] font-semibold text-xs leading-4 items-center gap-1">
                    Explore solutions
                    <ArrowRight className="size-3" />
                  </a>
                </div>
              </Card>
              <Card className="group bg-[oklch(0.21_0.006_285.885)] shadow-lg transition-all border-t-[oklch(0.769_0.188_70.08)] border-white/10 border-t-2 border-r-0 border-b-0 border-l-0 border-solid p-0 gap-0 overflow-hidden">
                <div className="bg-gradient-to-br from-[oklch(0.769_0.188_70.08)]/30 to-secondary flex p-4 items-center gap-2">
                  <div className="size-9 bg-[oklch(0.769_0.188_70.08)]/20 text-[oklch(0.769_0.188_70.08)] rounded-lg flex justify-center items-center">
                    <Scale className="size-5" />
                  </div>
                  <span className="font-semibold text-neutral-50 text-sm leading-5">
                    Law Firm
                  </span>
                </div>
                <div className="px-4 pt-4">
                  <div className="rounded-lg border-white/10 border-1 border-solid overflow-hidden">
                    <div className="bg-zinc-800 flex px-2 py-1.5 items-center gap-1">
                      <div className="size-1.5 rounded-full bg-[#ff6467]" />
                      <div className="size-1.5 bg-[oklch(0.769_0.188_70.08)] rounded-full" />
                      <div className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                    </div>
                    <img
                      alt="Rodriguez Law site"
                      className="object-cover w-full h-20"
                      data-authorname="PiggyBank"
                      data-authorurl="https://unsplash.com/@piggybank"
                      data-blurhash="LRGl9dSi9Zr?0LjFVrWrH?S$%goK"
                      data-photoid="0UDem7QBxZU"
                      src="https://images.unsplash.com/photo-1642143231828-786fbd515a13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxsYXclMjBmaXJtJTIwcHJvZmVzc2lvbmFsJTIwb2ZmaWNlJTIwd2Vic2l0ZXxlbnwxfDB8fHwxNzgyMTUxMjUxfDA&ixlib=rb-4.1.0&q=80&w=400"
                    />
                  </div>
                </div>
                <div className="flex p-4 flex-col gap-2">
                  <p className="text-[#9f9fa9] text-xs leading-4">
                    Rodriguez Law — more consultation requests.
                  </p>
                  <a className="inline-flex text-[oklch(0.769_0.188_70.08)] font-semibold text-xs leading-4 items-center gap-1">
                    Explore solutions
                    <ArrowRight className="size-3" />
                  </a>
                </div>
              </Card>
              <Card className="group bg-[oklch(0.21_0.006_285.885)] shadow-lg transition-all border-t-[oklch(0.696_0.17_162.48)] border-white/10 border-t-2 border-r-0 border-b-0 border-l-0 border-solid p-0 gap-0 overflow-hidden">
                <div className="bg-gradient-to-br from-[oklch(0.696_0.17_162.48)]/30 to-[oklch(0.6_0.13_200)]/5 flex p-4 items-center gap-2">
                  <div className="size-9 bg-[oklch(0.696_0.17_162.48)]/20 text-[oklch(0.696_0.17_162.48)] rounded-lg flex justify-center items-center">
                    <Building className="size-5" />
                  </div>
                  <span className="font-semibold text-neutral-50 text-sm leading-5">
                    Real Estate
                  </span>
                </div>
                <div className="px-4 pt-4">
                  <div className="rounded-lg border-white/10 border-1 border-solid overflow-hidden">
                    <div className="bg-zinc-800 flex px-2 py-1.5 items-center gap-1">
                      <div className="size-1.5 rounded-full bg-[#ff6467]" />
                      <div className="size-1.5 bg-[oklch(0.769_0.188_70.08)] rounded-full" />
                      <div className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                    </div>
                    <img
                      alt="Chen Realty site"
                      className="object-cover w-full h-20"
                      data-authorname="Daniel Barnes"
                      data-authorurl="https://unsplash.com/@dannybarness"
                      data-blurhash="LGDu[3$y59Nd}^s9IqR+0;R*s+WC"
                      data-photoid="RKdLlTyjm5g"
                      src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbHV4dXJ5JTIwd2Vic2l0ZXxlbnwxfDB8fHwxNzgyMTUxMjUxfDA&ixlib=rb-4.1.0&q=80&w=400"
                    />
                  </div>
                </div>
                <div className="flex p-4 flex-col gap-2">
                  <p className="text-[#9f9fa9] text-xs leading-4">{`Chen Realty — more seller & buyer leads.`}</p>
                  <a className="inline-flex text-[oklch(0.696_0.17_162.48)] font-semibold text-xs leading-4 items-center gap-1">
                    Explore solutions
                    <ArrowRight className="size-3" />
                  </a>
                </div>
              </Card>
              <Card className="group bg-[oklch(0.21_0.006_285.885)] shadow-lg transition-all border-t-[oklch(0.769_0.188_70.08)] border-white/10 border-t-2 border-r-0 border-b-0 border-l-0 border-solid p-0 gap-0 overflow-hidden">
                <div className="bg-gradient-to-br from-[oklch(0.769_0.188_70.08)]/30 to-destructive/10 flex p-4 items-center gap-2">
                  <div className="size-9 bg-[oklch(0.769_0.188_70.08)]/20 text-[oklch(0.769_0.188_70.08)] rounded-lg flex justify-center items-center">
                    <BarChart3 className="size-5" />
                  </div>
                  <span className="font-semibold text-neutral-50 text-sm leading-5">
                    Accountant
                  </span>
                </div>
                <div className="px-4 pt-4">
                  <div className="rounded-lg border-white/10 border-1 border-solid overflow-hidden">
                    <div className="bg-zinc-800 flex px-2 py-1.5 items-center gap-1">
                      <div className="size-1.5 rounded-full bg-[#ff6467]" />
                      <div className="size-1.5 bg-[oklch(0.769_0.188_70.08)] rounded-full" />
                      <div className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                    </div>
                    <img
                      alt="Thompson CPA site"
                      className="object-cover w-full h-20"
                      data-authorname="Carlos Muza"
                      data-authorurl="https://unsplash.com/@kmuza"
                      data-blurhash="LJEfTn-?D$8w_3ozf+M{9EV@%gx]"
                      data-photoid="hpjSkU2UYSU"
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxhY2NvdW50aW5nJTIwZmluYW5jZSUyMGRhc2hib2FyZCUyMHdlYnNpdGV8ZW58MXwwfHx8MTc4MjE1MTI1MXww&ixlib=rb-4.1.0&q=80&w=400"
                    />
                  </div>
                </div>
                <div className="flex p-4 flex-col gap-2">
                  <p className="text-[#9f9fa9] text-xs leading-4">{`Thompson CPA — tax season leads & trust.`}</p>
                  <a className="inline-flex text-[oklch(0.769_0.188_70.08)] font-semibold text-xs leading-4 items-center gap-1">
                    Explore solutions
                    <ArrowRight className="size-3" />
                  </a>
                </div>
              </Card>
              <Card className="group bg-[oklch(0.21_0.006_285.885)] shadow-lg transition-all border-t-[oklch(0.769_0.15_237)] border-white/10 border-t-2 border-r-0 border-b-0 border-l-0 border-solid p-0 gap-0 overflow-hidden">
                <div className="bg-gradient-to-br from-[oklch(0.769_0.15_237)]/30 to-[oklch(0.769_0.15_237)]/5 flex p-4 items-center gap-2">
                  <div className="size-9 bg-[oklch(0.769_0.15_237)]/20 text-[oklch(0.769_0.15_237)] rounded-lg flex justify-center items-center">
                    <Activity className="size-5" />
                  </div>
                  <span className="font-semibold text-neutral-50 text-sm leading-5">
                    Physiotherapy
                  </span>
                </div>
                <div className="px-4 pt-4">
                  <div className="rounded-lg border-white/10 border-1 border-solid overflow-hidden">
                    <div className="bg-zinc-800 flex px-2 py-1.5 items-center gap-1">
                      <div className="size-1.5 rounded-full bg-[#ff6467]" />
                      <div className="size-1.5 bg-[oklch(0.769_0.188_70.08)] rounded-full" />
                      <div className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                    </div>
                    <img
                      alt="Active Life Physio site"
                      className="object-cover w-full h-20"
                      data-authorname="Marc Zeman"
                      data-authorurl="https://unsplash.com/@der_zeman"
                      data-blurhash="LoOg1sad.8t7~qM{aeRiE1t7Riof"
                      data-photoid="uLWW09LLG04"
                      src="https://images.unsplash.com/photo-1706353399656-210cca727a33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwY2xpbmljJTIwd2VsbG5lc3MlMjB3ZWJzaXRlfGVufDF8MHx8fDE3ODIxNTEyNTF8MA&ixlib=rb-4.1.0&q=80&w=400"
                    />
                  </div>
                </div>
                <div className="flex p-4 flex-col gap-2">
                  <p className="text-[#9f9fa9] text-xs leading-4">
                    Active Life Physio — more session bookings.
                  </p>
                  <a className="inline-flex text-[oklch(0.769_0.15_237)] font-semibold text-xs leading-4 items-center gap-1">
                    Explore solutions
                    <ArrowRight className="size-3" />
                  </a>
                </div>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
