import { useEffect } from "react";
import { MapPin, Search, TrendingDown, TrendingUp, Zap } from "lucide-react";
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
      <div className="bg-zinc-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <header className="border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid w-full">
          <div className="flex px-12 py-4 justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="size-9 font-bold rounded-lg bg-[#155dfc] text-[#1c398e] flex justify-center items-center">
                DS
              </div>
              <span className="font-bold tracking-tight">
                Digital Solutions
              </span>
            </div>
            <nav className="flex items-center gap-6">
              <a className="font-medium text-[#155dfc] text-sm leading-5 border-[#155dfc] border-t-0 border-r-0 border-b-2 border-l-0 border-solid pb-1">
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
              Free Audit
            </Button>
          </div>
        </header>
        <main className="flex p-12 flex-col gap-12">
          <section className="flex flex-col gap-8">
            <div className="text-center flex flex-col items-center gap-2">
              <span className="inline-flex bg-[oklch(0.769_0.188_70.08/0.15)] text-[oklch(0.769_0.188_70.08)] font-semibold uppercase rounded-full text-xs leading-4 tracking-widest px-3 py-1 items-center">
                Results
              </span>
              <h2 className="leading-tight font-bold text-neutral-50 text-[40px] tracking-tight">
                Data-Driven Growth You Can Measure
              </h2>
            </div>
            <Card className="rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid p-8 gap-6">
              <CardContent className="grid grid-cols-2 p-0 gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-neutral-50 text-sm leading-5">
                      Lead Generation Growth
                    </span>
                    <span className="inline-flex bg-[oklch(0.696_0.17_162.48/0.15)] text-[oklch(0.696_0.17_162.48)] font-bold rounded-full text-xs leading-4 px-2 py-1 items-center gap-1">
                      <TrendingUp className="size-3" />
                      +147%
                    </span>
                  </div>
                  <div className="rounded-xl bg-zinc-800/40 flex p-4 items-end gap-3 h-56">
                    <div className="flex flex-col items-center flex-1 gap-2">
                      <div className="bg-[linear-gradient(to_top,oklch(0.488_0.243_264.376),oklch(0.546_0.245_262.881))] h-[30%] rounded-t-md w-full" />
                      <span className="text-[#9f9fa9] text-[10px]">Jan</span>
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-2">
                      <div className="bg-[linear-gradient(to_top,oklch(0.488_0.243_264.376),oklch(0.546_0.245_262.881))] h-[42%] rounded-t-md w-full" />
                      <span className="text-[#9f9fa9] text-[10px]">Feb</span>
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-2">
                      <div className="bg-[linear-gradient(to_top,oklch(0.488_0.243_264.376),oklch(0.546_0.245_262.881))] h-[55%] rounded-t-md w-full" />
                      <span className="text-[#9f9fa9] text-[10px]">Mar</span>
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-2">
                      <div className="bg-[linear-gradient(to_top,oklch(0.488_0.243_264.376),oklch(0.546_0.245_262.881))] h-[68%] rounded-t-md w-full" />
                      <span className="text-[#9f9fa9] text-[10px]">Apr</span>
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-2">
                      <div className="bg-[linear-gradient(to_top,oklch(0.488_0.243_264.376),oklch(0.546_0.245_262.881))] h-[80%] rounded-t-md w-full" />
                      <span className="text-[#9f9fa9] text-[10px]">May</span>
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-2">
                      <div className="relative bg-[linear-gradient(to_top,oklch(0.696_0.17_162.48),oklch(0.769_0.188_70.08/0.6))] h-[100%] rounded-t-md w-full">
                        <span className="left-1/2 -translate-x-1/2 whitespace-nowrap text-[oklch(0.696_0.17_162.48)] font-bold text-[10px] absolute -top-6">
                          +147%
                        </span>
                      </div>
                      <span className="font-semibold text-neutral-50 text-[10px]">
                        Jun
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-zinc-800/40 flex p-4 flex-col justify-center items-center gap-2">
                    <div className="size-20 bg-[conic-gradient(oklch(0.546_0.245_262.881)_96%,oklch(0.274_0.006_286.033)_0)] rounded-full flex justify-center items-center">
                      <div className="size-14 font-bold rounded-full bg-zinc-900 text-neutral-50 text-xl leading-7 flex justify-center items-center">
                        96
                      </div>
                    </div>
                    <span className="font-medium text-[#9f9fa9] text-xs leading-4">
                      Performance
                    </span>
                  </div>
                  <div className="rounded-xl bg-zinc-800/40 flex p-4 flex-col justify-center items-center gap-2">
                    <div className="size-20 bg-[conic-gradient(oklch(0.696_0.17_162.48)_94%,oklch(0.274_0.006_286.033)_0)] rounded-full flex justify-center items-center">
                      <div className="size-14 font-bold rounded-full bg-zinc-900 text-neutral-50 text-xl leading-7 flex justify-center items-center">
                        94
                      </div>
                    </div>
                    <span className="font-medium text-[#9f9fa9] text-xs leading-4">
                      SEO
                    </span>
                  </div>
                  <div className="rounded-xl bg-zinc-800/40 flex p-4 flex-col justify-center items-center gap-2">
                    <div className="size-20 bg-[conic-gradient(oklch(0.696_0.17_162.48)_98%,oklch(0.274_0.006_286.033)_0)] rounded-full flex justify-center items-center">
                      <div className="size-14 font-bold rounded-full bg-zinc-900 text-neutral-50 text-xl leading-7 flex justify-center items-center">
                        98
                      </div>
                    </div>
                    <span className="font-medium text-[#9f9fa9] text-xs leading-4">
                      Mobile
                    </span>
                  </div>
                  <div className="rounded-xl bg-zinc-800/40 flex p-4 flex-col justify-center items-center gap-2">
                    <div className="size-20 bg-[conic-gradient(oklch(0.769_0.188_70.08)_100%,oklch(0.274_0.006_286.033)_0)] rounded-full flex justify-center items-center">
                      <div className="size-14 font-bold rounded-full bg-zinc-900 text-neutral-50 text-xl leading-7 flex justify-center items-center">
                        100
                      </div>
                    </div>
                    <span className="font-medium text-[#9f9fa9] text-xs leading-4">
                      Accessibility
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="grid grid-cols-4 p-0 gap-4">
                <div className="rounded-xl bg-zinc-800/40 flex p-4 flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[oklch(0.696_0.17_162.48)] font-bold text-2xl leading-8">
                      -38%
                    </span>
                    <TrendingDown className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                  </div>
                  <span className="text-[#9f9fa9] text-xs leading-4">
                    Bounce Rate
                  </span>
                </div>
                <div className="rounded-xl bg-zinc-800/40 flex p-4 flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[oklch(0.696_0.17_162.48)] font-bold text-2xl leading-8">
                      1.4s
                    </span>
                    <Zap className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                  </div>
                  <span className="text-[#9f9fa9] text-xs leading-4">
                    Load Time
                  </span>
                </div>
                <div className="rounded-xl bg-zinc-800/40 flex p-4 flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[oklch(0.546_0.245_262.881)] font-bold text-2xl leading-8">
                      +89%
                    </span>
                    <TrendingUp className="size-4 text-[oklch(0.546_0.245_262.881)]" />
                  </div>
                  <span className="text-[#9f9fa9] text-xs leading-4">
                    Conversion
                  </span>
                </div>
                <div className="rounded-xl bg-zinc-800/40 flex p-4 flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[oklch(0.769_0.188_70.08)] font-bold text-2xl leading-8">
                      Top 3
                    </span>
                    <MapPin className="size-4 text-[oklch(0.769_0.188_70.08)]" />
                  </div>
                  <span className="text-[#9f9fa9] text-xs leading-4">
                    Local Rankings
                  </span>
                </div>
              </CardFooter>
            </Card>
          </section>
          <section className="flex flex-col items-center gap-8">
            <div className="text-center flex flex-col items-center gap-2">
              <span className="inline-flex bg-[oklch(0.769_0.188_70.08/0.15)] text-[oklch(0.769_0.188_70.08)] font-semibold uppercase rounded-full text-xs leading-4 tracking-widest px-3 py-1 items-center">
                Free Audit
              </span>
              <h2 className="leading-tight font-bold text-neutral-50 text-[40px] tracking-tight">
                See Exactly What's Holding Your Website Back
              </h2>
            </div>
            <Card className="max-w-3xl rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid p-8 gap-6 w-full">
              <CardHeader className="flex p-0 flex-row items-center gap-6">
                <div className="size-28 bg-[conic-gradient(oklch(0.704_0.191_22.216)_52%,oklch(0.274_0.006_286.033)_0)] rounded-full flex justify-center items-center">
                  <div className="size-20 rounded-full bg-zinc-900 flex flex-col justify-center items-center">
                    <span className="text-[oklch(0.704_0.191_22.216)] font-bold text-2xl leading-8">
                      52
                    </span>
                    <span className="text-[#9f9fa9] text-[10px]">/100</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold uppercase text-[#9f9fa9] text-sm leading-5 tracking-wide">
                    Website Audit Score
                  </span>
                  <span className="font-bold text-neutral-50 text-3xl leading-9">
                    52/100
                  </span>
                  <span className="text-[oklch(0.704_0.191_22.216)] text-sm leading-5">
                    Significant improvements needed
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex p-0 flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="text-sm leading-5 flex justify-between items-center">
                    <span className="font-medium text-neutral-50">Mobile</span>
                    <span className="text-[oklch(0.704_0.191_22.216)] font-semibold">
                      38/100 · Critical
                    </span>
                  </div>
                  <div className="rounded-full bg-zinc-800 w-full h-2">
                    <div className="bg-[oklch(0.704_0.191_22.216)] w-[38%] rounded-full h-2" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm leading-5 flex justify-between items-center">
                    <span className="font-medium text-neutral-50">Speed</span>
                    <span className="text-[oklch(0.769_0.188_70.08)] font-semibold">
                      45/100 · Needs Work
                    </span>
                  </div>
                  <div className="rounded-full bg-zinc-800 w-full h-2">
                    <div className="bg-[oklch(0.769_0.188_70.08)] w-[45%] rounded-full h-2" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm leading-5 flex justify-between items-center">
                    <span className="font-medium text-neutral-50">SEO</span>
                    <span className="text-[oklch(0.769_0.188_70.08)] font-semibold">
                      61/100 · Needs Work
                    </span>
                  </div>
                  <div className="rounded-full bg-zinc-800 w-full h-2">
                    <div className="bg-[oklch(0.769_0.188_70.08)] w-[61%] rounded-full h-2" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm leading-5 flex justify-between items-center">
                    <span className="font-medium text-neutral-50">
                      Conversion
                    </span>
                    <span className="text-[oklch(0.704_0.191_22.216)] font-semibold">
                      42/100 · Critical
                    </span>
                  </div>
                  <div className="rounded-full bg-zinc-800 w-full h-2">
                    <div className="bg-[oklch(0.704_0.191_22.216)] w-[42%] rounded-full h-2" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm leading-5 flex justify-between items-center">
                    <span className="font-medium text-neutral-50">
                      Security
                    </span>
                    <span className="text-[oklch(0.696_0.17_162.48)] font-semibold">
                      78/100 · Good
                    </span>
                  </div>
                  <div className="rounded-full bg-zinc-800 w-full h-2">
                    <div className="bg-[oklch(0.696_0.17_162.48)] w-[78%] rounded-full h-2" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm leading-5 flex justify-between items-center">
                    <span className="font-medium text-neutral-50">
                      Accessibility
                    </span>
                    <span className="text-[oklch(0.769_0.188_70.08)] font-semibold">
                      55/100 · Needs Work
                    </span>
                  </div>
                  <div className="rounded-full bg-zinc-800 w-full h-2">
                    <div className="bg-[oklch(0.769_0.188_70.08)] w-[55%] rounded-full h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button className="shadow-[0_0_30px_oklch(0.546_0.245_262.881/0.5)] font-semibold rounded-lg bg-[#155dfc] text-[#1c398e] text-base leading-6 px-8 py-6">
              <Search className="size-5" />
              Get Your Free Audit
            </Button>
          </section>
        </main>
      </div>
    </div>
  );
}
