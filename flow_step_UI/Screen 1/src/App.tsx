import { useEffect } from "react";
import {
  CalendarCheck,
  Gauge,
  Moon,
  Search,
  Smartphone,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div>
      <div className="bg-zinc-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <header className="sticky z-50 backdrop-blur-xl bg-zinc-950/70 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0 w-full">
          <div className="flex px-8 py-4 justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="size-9 font-bold rounded-lg bg-[#155dfc] text-[#1c398e] text-sm leading-5 tracking-tight flex justify-center items-center">
                DS
              </div>
              <span className="font-semibold text-neutral-50 tracking-tight">
                Digital Solutions
              </span>
            </div>
            <nav className="hidden items-center gap-1">
              <a className="relative font-medium text-neutral-50 text-sm leading-5 px-3 py-2">
                Services
              </a>
              <a className="font-medium text-[#9f9fa9] text-sm leading-5 px-3 py-2">
                Industries
              </a>
              <a className="font-medium text-[#9f9fa9] text-sm leading-5 px-3 py-2">
                Portfolio
              </a>
              <a className="font-medium text-[#9f9fa9] text-sm leading-5 px-3 py-2">
                Case Studies
              </a>
              <a className="font-medium text-[#9f9fa9] text-sm leading-5 px-3 py-2">
                Process
              </a>
              <a className="font-medium text-[#9f9fa9] text-sm leading-5 px-3 py-2">
                Pricing
              </a>
              <a className="font-medium text-[#9f9fa9] text-sm leading-5 px-3 py-2">
                About
              </a>
              <a className="font-medium text-[#9f9fa9] text-sm leading-5 px-3 py-2">
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <Button
                className="size-9 text-[#9f9fa9]"
                size="icon"
                variant="ghost"
              >
                <Moon className="size-4" />
              </Button>
              <Button className="font-semibold rounded-lg bg-[#155dfc] text-[#1c398e] px-4">
                <Zap className="size-4" />
                Free Audit
              </Button>
            </div>
          </div>
        </header>
        <section className="relative px-8 pt-12 pb-8 overflow-hidden">
          <div className="pointer-events-none right-[-10%] top-[10%] size-[520px] bg-[radial-gradient(circle,oklch(0.488_0.243_264.376/.35),transparent_70%)] blur-3xl rounded-full absolute" />
          <div className="relative grid grid-cols-2 items-center gap-12">
            <div className="flex flex-col gap-6">
              <div className="rounded-full bg-zinc-900 border-white/10 border-1 border-solid flex px-3 py-1.5 items-center gap-2 w-fit">
                <span className="size-1.5 bg-[oklch(0.769_0.188_70.08)] rounded-full" />
                <span className="text-[oklch(0.696_0.17_162.48)] font-semibold uppercase text-xs leading-4 tracking-widest">
                  Local Business Growth Partner
                </span>
              </div>
              <h1 className="font-bold text-neutral-50 text-[56px] leading-[59px] tracking-tight">{`Get More Leads & Bookings With a High-Converting Website`}</h1>
              <p className="max-w-lg leading-relaxed text-[#9f9fa9] text-lg leading-7">
                We help dentists, law firms, accountants, physiotherapy clinics,
                and real estate agencies turn website visitors into paying
                customers.
              </p>
              <div className="flex items-center gap-4">
                <Button className="font-semibold rounded-lg bg-[#155dfc] text-[#1c398e] text-base leading-6 p-6">
                  <Search className="size-4" />
                  Get Free Website Audit
                </Button>
                <Button
                  className="bg-transparent font-semibold rounded-lg text-neutral-50 text-base leading-6 border-white/10 border-0 border-solid p-6"
                  variant="outline"
                >
                  <CalendarCheck className="size-4" />
                  Book Free Consultation
                </Button>
              </div>
              <div className="flex pt-2 flex-wrap items-center gap-2">
                <span className="font-medium rounded-full bg-zinc-900 text-[#9f9fa9] text-xs leading-4 border-white/10 border-1 border-solid flex px-3 py-1.5 items-center gap-1.5">
                  <Smartphone className="size-3.5 text-[oklch(0.696_0.17_162.48)]" />
                  Mobile Optimized
                </span>
                <span className="font-medium rounded-full bg-zinc-900 text-[#9f9fa9] text-xs leading-4 border-white/10 border-1 border-solid flex px-3 py-1.5 items-center gap-1.5">
                  <TrendingUp className="size-3.5 text-[oklch(0.696_0.17_162.48)]" />
                  SEO Ready
                </span>
                <span className="font-medium rounded-full bg-zinc-900 text-[#9f9fa9] text-xs leading-4 border-white/10 border-1 border-solid flex px-3 py-1.5 items-center gap-1.5">
                  <Gauge className="size-3.5 text-[oklch(0.696_0.17_162.48)]" />
                  Fast Loading
                </span>
                <span className="font-medium rounded-full bg-zinc-900 text-[#9f9fa9] text-xs leading-4 border-white/10 border-1 border-solid flex px-3 py-1.5 items-center gap-1.5">
                  <Target className="size-3.5 text-[oklch(0.696_0.17_162.48)]" />
                  Conversion Focused
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="pointer-events-none bg-[radial-gradient(circle_at_center,oklch(0.546_0.245_262.881/.4),transparent_65%)] blur-3xl rounded-full absolute inset-0" />
              <div className="relative">
                <div className="shadow-2xl rounded-t-xl bg-zinc-900 border-white/10 border-1 border-solid p-2">
                  <div className="flex px-2 pb-2 items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-[#ff6467]/80" />
                    <span className="size-2.5 bg-[oklch(0.769_0.188_70.08)] rounded-full" />
                    <span className="size-2.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                  </div>
                  <div className="rounded-lg bg-zinc-950 overflow-hidden">
                    <div className="border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-4 py-2.5 justify-between items-center">
                      <span className="font-bold text-neutral-50 text-xs leading-4">
                        Bright Smile Dental
                      </span>
                      <div className="text-[#9f9fa9] text-[10px] flex items-center gap-3">
                        <span>Services</span>
                        <span>About</span>
                        <span className="rounded-sm bg-[#155dfc] text-[#1c398e] px-2 py-1">
                          Book Now
                        </span>
                      </div>
                    </div>
                    <div className="relative h-40">
                      <img
                        alt="Dental clinic"
                        className="size-full object-cover"
                        data-authorname="Benyamin Bohlouli"
                        data-authorurl="https://unsplash.com/@benyamin_bohlouli"
                        data-blurhash="LTLq%{ROM|bc.TM|RjslM{t8oen$"
                        data-photoid="LQ698TTvGpA"
                        src="https://images.unsplash.com/photo-1629909615184-74f495363b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjB3ZWJzaXRlJTIwaG9tZXBhZ2V8ZW58MXwwfHx8MTc4MjE1MTI0N3ww&ixlib=rb-4.1.0&q=80&w=400"
                      />
                      <div className="bg-[linear-gradient(90deg,oklch(0.141_0.005_285.823/.85),transparent_70%)] absolute inset-0" />
                      <div className="flex absolute inset-0 p-4 flex-col justify-center gap-1.5">
                        <span className="font-bold text-white text-sm leading-5">
                          Your Healthiest Smile Starts Here
                        </span>
                        <span className="text-white/70 text-[9px]">{`Trusted family & cosmetic dentistry`}</span>
                        <span className="font-semibold rounded-sm bg-[#155dfc] text-[#1c398e] text-[9px] px-2 py-1 w-fit">
                          Book Appointment
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 p-3 gap-2">
                      <div className="rounded-md bg-zinc-900 p-2">
                        <div className="size-4 rounded-sm bg-[#155dfc]/30 mb-1" />
                        <div className="rounded-sm bg-zinc-800 w-full h-1.5" />
                        <div className="w-2/3 rounded-sm bg-zinc-800 mt-1 h-1.5" />
                      </div>
                      <div className="rounded-md bg-zinc-900 p-2">
                        <div className="size-4 bg-[oklch(0.696_0.17_162.48)]/30 rounded-sm mb-1" />
                        <div className="rounded-sm bg-zinc-800 w-full h-1.5" />
                        <div className="w-2/3 rounded-sm bg-zinc-800 mt-1 h-1.5" />
                      </div>
                      <div className="rounded-md bg-zinc-900 p-2">
                        <div className="size-4 bg-[oklch(0.769_0.188_70.08)]/30 rounded-sm mb-1" />
                        <div className="rounded-sm bg-zinc-800 w-full h-1.5" />
                        <div className="w-2/3 rounded-sm bg-zinc-800 mt-1 h-1.5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[108%] -translate-x-[4%] shadow-xl rounded-b-xl bg-zinc-800 mx-auto h-3" />
                <div className="shadow-2xl rounded-xl bg-zinc-900 border-white/10 border-1 border-solid absolute right-2 -bottom-6 p-1.5 w-32">
                  <div className="rounded-lg bg-zinc-950 overflow-hidden">
                    <div className="relative h-28">
                      <img
                        alt="Dentist mobile"
                        className="size-full object-cover"
                        data-authorname="Filip Rankovic Grobgaard"
                        data-authorurl="https://unsplash.com/@filipgrobgaard"
                        data-blurhash="LUG+H=oz?^xa?b%MtSoLD%WBoLRk"
                        data-photoid="9_1Y_IKP4tY"
                        src="https://images.unsplash.com/photo-1667133295308-9ef24f71952e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZGVudGlzdCUyMHByb2Zlc3Npb25hbCUyMGNsaW5pY3xlbnwxfDF8fHwxNzgyMTUxMjQ3fDA&ixlib=rb-4.1.0&q=80&w=400"
                      />
                      <div className="bg-[linear-gradient(0deg,oklch(0.141_0.005_285.823/.9),transparent_60%)] absolute inset-0" />
                      <div className="absolute inset-x-2 bottom-2">
                        <span className="block font-bold text-white text-[8px]">
                          Bright Smile
                        </span>
                        <span className="block rounded-sm bg-[#155dfc] text-[#1c398e] text-[7px] mt-1 px-1.5 py-0.5 w-fit">
                          Book
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1 p-2">
                      <div className="rounded-sm bg-zinc-800 w-full h-1.5" />
                      <div className="w-3/4 rounded-sm bg-zinc-800 h-1.5" />
                    </div>
                  </div>
                </div>
                <div className="shadow-2xl backdrop-blur-md rounded-xl bg-zinc-900/80 border-white/10 border-1 border-solid flex absolute -left-4 top-8 px-3 py-2.5 items-center gap-2">
                  <div className="size-8 bg-[oklch(0.696_0.17_162.48)]/20 rounded-lg flex justify-center items-center">
                    <TrendingUp className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                  </div>
                  <div>
                    <div className="text-[oklch(0.696_0.17_162.48)] font-bold text-base leading-6">
                      +147%
                    </div>
                    <div className="text-[#9f9fa9] text-[10px]">Leads</div>
                  </div>
                </div>
                <div className="shadow-2xl backdrop-blur-md rounded-xl bg-zinc-900/80 border-white/10 border-1 border-solid flex absolute -left-2 bottom-2 px-3 py-2.5 items-center gap-2">
                  <div className="size-8 bg-[oklch(0.769_0.188_70.08)]/15 rounded-lg flex justify-center items-center">
                    <Gauge className="size-4 text-[oklch(0.769_0.188_70.08)]" />
                  </div>
                  <div>
                    <div className="text-[oklch(0.769_0.188_70.08)] font-bold text-base leading-6">
                      96/100
                    </div>
                    <div className="text-[#9f9fa9] text-[10px]">
                      Speed Score
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-8 pt-4 pb-12">
          <div className="rounded-2xl bg-zinc-900/40 border-white/10 border-1 border-solid px-8 py-6">
            <div className="flex items-center gap-8">
              <span className="shrink-0 font-medium text-[#9f9fa9] text-sm leading-5">
                Trusted by local businesses
              </span>
              <div className="flex justify-between items-center flex-1">
                <span className="font-semibold text-neutral-50/70 text-sm leading-5 tracking-tight">
                  Bright Smile Dental
                </span>
                <span className="bg-white/10 w-px h-4" />
                <span className="font-semibold text-neutral-50/70 text-sm leading-5 tracking-tight">
                  Rodriguez Law
                </span>
                <span className="bg-white/10 w-px h-4" />
                <span className="font-semibold text-neutral-50/70 text-sm leading-5 tracking-tight">
                  Chen Realty
                </span>
                <span className="bg-white/10 w-px h-4" />
                <span className="font-semibold text-neutral-50/70 text-sm leading-5 tracking-tight">
                  Thompson Accounting
                </span>
                <span className="bg-white/10 w-px h-4" />
                <span className="font-semibold text-neutral-50/70 text-sm leading-5 tracking-tight">
                  Active Life Physio
                </span>
                <span className="bg-white/10 w-px h-4" />
                <span className="font-semibold text-neutral-50/70 text-sm leading-5 tracking-tight">
                  Summit Legal Group
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
