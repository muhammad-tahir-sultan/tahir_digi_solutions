import { useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  GitBranch,
  LayoutGrid,
  Lightbulb,
  PenTool,
  Rocket,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

export default function App() {
  return (
    <div>
      <div className="font-sans bg-zinc-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <header className="sticky z-50 backdrop-blur-md bg-zinc-950/80 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0 w-full">
          <div className="max-w-[1140px] flex mx-auto px-8 justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="size-9 bg-gradient-to-br from-primary to-[oklch(0.696_0.17_232)] font-bold rounded-lg text-[#1c398e] flex justify-center items-center">
                DS
              </div>
              <span className="font-semibold text-neutral-50 text-base leading-6 tracking-tight">
                Digital Solutions
              </span>
            </div>
            <nav className="hidden items-center gap-6">
              <a
                className="transition-colors text-[#9f9fa9] text-sm leading-5"
                href="#"
              >
                Services
              </a>
              <a
                className="transition-colors text-[#9f9fa9] text-sm leading-5"
                href="#"
              >
                Industries
              </a>
              <a
                className="relative font-medium text-neutral-50 text-sm leading-5"
                href="#"
              >
                Portfolio
              </a>
              <a
                className="transition-colors text-[#9f9fa9] text-sm leading-5"
                href="#"
              >
                Case Studies
              </a>
              <a
                className="transition-colors text-[#9f9fa9] text-sm leading-5"
                href="#"
              >
                Process
              </a>
              <a
                className="transition-colors text-[#9f9fa9] text-sm leading-5"
                href="#"
              >
                Pricing
              </a>
              <a
                className="transition-colors text-[#9f9fa9] text-sm leading-5"
                href="#"
              >
                About
              </a>
              <a
                className="transition-colors text-[#9f9fa9] text-sm leading-5"
                href="#"
              >
                Contact
              </a>
            </nav>
            <Button className="bg-[#155dfc] text-[#1c398e]">
              <Sparkles className="size-4" />
              Free Audit
            </Button>
          </div>
        </header>
        <main className="max-w-[1140px] mx-auto px-8">
          <section className="py-12">
            <div className="text-center flex flex-col items-center gap-4">
              <span className="inline-flex border-[oklch(0.696_0.17_232/30%)] bg-[oklch(0.696_0.17_232/10%)] text-[oklch(0.769_0.17_232)] font-semibold uppercase rounded-full text-xs leading-4 tracking-widest border-black/1 border-1 border-solid px-3 py-1 items-center gap-1.5">
                <LayoutGrid className="size-3.5" />
                Portfolio
              </span>
              <h2 className="font-bold text-neutral-50 text-4xl leading-10 tracking-tight">
                Websites That Win Clients
              </h2>
              <p className="max-w-xl text-[#9f9fa9] text-sm leading-5">
                Real projects engineered to turn local visitors into booked
                clients.
              </p>
            </div>
            <div className="grid grid-cols-2 mt-12 items-center gap-12">
              <div className="relative">
                <div className="shadow-2xl shadow-primary/10 rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid overflow-hidden">
                  <div className="bg-zinc-800 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-4 items-center gap-1.5 h-8">
                    <span className="size-2.5 rounded-full bg-[#ff6467]/70" />
                    <span className="size-2.5 bg-[oklch(0.769_0.188_70.08)] rounded-full" />
                    <span className="size-2.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                  </div>
                  <img
                    alt="Dental clinic website UI"
                    className="object-cover w-full h-56"
                    data-authorname="Benyamin Bohlouli"
                    data-authorurl="https://unsplash.com/@benyamin_bohlouli"
                    data-blurhash="LTLq%{ROM|bc.TM|RjslM{t8oen$"
                    data-photoid="LQ698TTvGpA"
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjB3ZWJzaXRlJTIwaG9tZXBhZ2V8ZW58MXwwfHx8MTc4MjE1MTI0N3ww&ixlib=rb-4.1.0&q=80&w=400"
                  />
                </div>
                <div className="shadow-xl rounded-2xl bg-zinc-900 border-zinc-900 border-4 border-solid absolute -right-4 -bottom-6 w-28 overflow-hidden">
                  <img
                    alt="Dental mobile UI"
                    className="object-cover w-full h-40"
                    data-authorname="Balázs Kétyi"
                    data-authorurl="https://unsplash.com/@balazsketyi"
                    data-blurhash="LODl{20JkqxstmI9nif,xbs;IUs:"
                    data-photoid="OjhDFiVLrFQ"
                    src="https://images.unsplash.com/photo-1558655146-6c222b05fce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXwxfHx8MTc4MjE1MTI0N3ww&ixlib=rb-4.1.0&q=80&w=400"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="inline-flex text-[oklch(0.7_0.18_262)] font-semibold rounded-full bg-[#155dfc]/15 text-xs leading-4 px-3 py-1 items-center gap-1.5 w-fit">
                  Industry: Dental
                </span>
                <h3 className="font-bold text-neutral-50 text-2xl leading-8 tracking-tight">
                  Demo Dental Clinic Redesign
                </h3>
                <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                  A complete redesign that modernized the booking experience and
                  lifted appointment requests through a clean, trust-building
                  interface.
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-neutral-50 text-sm leading-5 flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[oklch(0.769_0.17_232)]" />
                    Appointment booking integration
                  </li>
                  <li className="text-neutral-50 text-sm leading-5 flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[oklch(0.769_0.17_232)]" />
                    Local SEO optimized
                  </li>
                  <li className="text-neutral-50 text-sm leading-5 flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[oklch(0.769_0.17_232)]" />
                    Mobile-first design
                  </li>
                </ul>
                <a
                  className="inline-flex text-[oklch(0.7_0.18_262)] transition-colors font-semibold text-sm leading-5 items-center gap-1.5 w-fit"
                  href="#"
                >
                  View Project
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
            <div className="bg-white/10 my-12 w-full h-px" />
            <div className="grid grid-cols-2 items-center gap-12">
              <div className="flex flex-col gap-4">
                <span className="inline-flex bg-[oklch(0.769_0.188_70.08/15%)] text-[oklch(0.8_0.16_75)] font-semibold rounded-full text-xs leading-4 px-3 py-1 items-center gap-1.5 w-fit">
                  Industry: Law
                </span>
                <h3 className="font-bold text-neutral-50 text-2xl leading-8 tracking-tight">
                  Demo Law Firm Website
                </h3>
                <p className="leading-relaxed text-[#9f9fa9] text-sm leading-5">
                  An authoritative, conversion-focused site designed to build
                  instant credibility and drive qualified consultation requests.
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-neutral-50 text-sm leading-5 flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[oklch(0.769_0.17_232)]" />
                    Consultation request forms
                  </li>
                  <li className="text-neutral-50 text-sm leading-5 flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[oklch(0.769_0.17_232)]" />
                    Practice area structure
                  </li>
                  <li className="text-neutral-50 text-sm leading-5 flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[oklch(0.769_0.17_232)]" />
                    {`Trust & testimonial sections`}
                  </li>
                </ul>
                <a
                  className="inline-flex text-[oklch(0.7_0.18_262)] transition-colors font-semibold text-sm leading-5 items-center gap-1.5 w-fit"
                  href="#"
                >
                  View Project
                  <ArrowRight className="size-4" />
                </a>
              </div>
              <div className="shadow-2xl shadow-primary/10 rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid overflow-hidden">
                <div className="bg-zinc-800 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-4 items-center gap-1.5 h-8">
                  <span className="size-2.5 rounded-full bg-[#ff6467]/70" />
                  <span className="size-2.5 bg-[oklch(0.769_0.188_70.08)] rounded-full" />
                  <span className="size-2.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                  <div className="rounded-full bg-zinc-950/60 ml-3 flex-1 h-4" />
                </div>
                <img
                  alt="Law firm website UI"
                  className="object-cover w-full h-56"
                  data-authorname="Erik Mclean"
                  data-authorurl="https://unsplash.com/@introspectivedsgn"
                  data-blurhash="LIECqO~qIpS5%MNGD%RiShIUoJ%M"
                  data-photoid="24ZOFLNY4hA"
                  src="https://images.unsplash.com/photo-1630265927428-a62b061a5270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxsYXclMjBmaXJtJTIwcHJvZmVzc2lvbmFsJTIwd2Vic2l0ZXxlbnwxfDB8fHwxNzgyMTUxMjQ3fDA&ixlib=rb-4.1.0&q=80&w=400"
                />
              </div>
            </div>
          </section>
          <section className="border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid py-12">
            <div className="text-center flex flex-col items-center gap-4">
              <span className="inline-flex border-[oklch(0.696_0.17_232/30%)] bg-[oklch(0.696_0.17_232/10%)] text-[oklch(0.769_0.17_232)] font-semibold uppercase rounded-full text-xs leading-4 tracking-widest border-black/1 border-1 border-solid px-3 py-1 items-center gap-1.5">
                <GitBranch className="size-3.5" />
                Our Process
              </span>
              <h2 className="font-bold text-neutral-50 text-4xl leading-10 tracking-tight">
                From First Call to First Lead
              </h2>
            </div>
            <div className="relative max-w-3xl mx-auto mt-12">
              <div className="left-1/2 -translate-x-1/2 bg-gradient-to-b from-primary via-[oklch(0.696_0.17_232)] to-primary shadow-[0_0_20px_2px_oklch(0.546_0.245_262.881/60%)] absolute top-0 w-0.5 h-full" />
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6">
                  <Card className="backdrop-blur-sm bg-zinc-900/60 border-white/10 border-0 border-solid p-4 flex-1 gap-1">
                    <CardHeader className="flex p-0 flex-row justify-end items-center gap-2">
                      <div className="flex flex-col items-end gap-0.5">
                        <span className="font-bold text-neutral-50 text-base leading-6 flex items-center gap-1.5">
                          Discovery
                          <Search className="size-4 text-[oklch(0.769_0.17_232)]" />
                        </span>
                        <span className="text-[#9f9fa9] text-xs leading-4">
                          We learn your business, goals and ideal local
                          customer.
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                  <div className="relative z-10 size-12 shrink-0 bg-gradient-to-br from-primary to-[oklch(0.696_0.17_232)] shadow-lg shadow-primary/40 font-bold rounded-full text-[#1c398e] text-base leading-6 flex justify-center items-center">
                    1
                  </div>
                  <div className="flex-1" />
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex-1" />
                  <div className="relative z-10 size-12 shrink-0 bg-gradient-to-br from-primary to-[oklch(0.696_0.17_232)] shadow-lg shadow-primary/40 font-bold rounded-full text-[#1c398e] text-base leading-6 flex justify-center items-center">
                    2
                  </div>
                  <Card className="backdrop-blur-sm bg-zinc-900/60 border-white/10 border-0 border-solid p-4 flex-1 gap-1">
                    <CardHeader className="flex p-0 flex-row items-center gap-2">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-neutral-50 text-base leading-6 flex items-center gap-1.5">
                          <Lightbulb className="size-4 text-[oklch(0.769_0.17_232)]" />
                          Strategy
                        </span>
                        <span className="text-[#9f9fa9] text-xs leading-4">
                          We map the conversion path and content that drives
                          leads.
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
                <div className="flex items-center gap-6">
                  <Card className="backdrop-blur-sm bg-zinc-900/60 border-white/10 border-0 border-solid p-4 flex-1 gap-1">
                    <CardHeader className="flex p-0 flex-row justify-end items-center gap-2">
                      <div className="flex flex-col items-end gap-0.5">
                        <span className="font-bold text-neutral-50 text-base leading-6 flex items-center gap-1.5">
                          Design
                          <PenTool className="size-4 text-[oklch(0.769_0.17_232)]" />
                        </span>
                        <span className="text-[#9f9fa9] text-xs leading-4">
                          Premium, on-brand visuals built to win trust fast.
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                  <div className="relative z-10 size-12 shrink-0 bg-gradient-to-br from-primary to-[oklch(0.696_0.17_232)] shadow-lg shadow-primary/40 font-bold rounded-full text-[#1c398e] text-base leading-6 flex justify-center items-center">
                    3
                  </div>
                  <div className="flex-1" />
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex-1" />
                  <div className="relative z-10 size-12 shrink-0 bg-gradient-to-br from-primary to-[oklch(0.696_0.17_232)] shadow-lg shadow-primary/40 font-bold rounded-full text-[#1c398e] text-base leading-6 flex justify-center items-center">
                    4
                  </div>
                  <Card className="backdrop-blur-sm bg-zinc-900/60 border-white/10 border-0 border-solid p-4 flex-1 gap-1">
                    <CardHeader className="flex p-0 flex-row items-center gap-2">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-neutral-50 text-base leading-6 flex items-center gap-1.5">
                          <Code2 className="size-4 text-[oklch(0.769_0.17_232)]" />
                          Development
                        </span>
                        <span className="text-[#9f9fa9] text-xs leading-4">
                          Fast, secure builds optimized for speed and SEO.
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
                <div className="flex items-center gap-6">
                  <Card className="backdrop-blur-sm bg-zinc-900/60 border-white/10 border-0 border-solid p-4 flex-1 gap-1">
                    <CardHeader className="flex p-0 flex-row justify-end items-center gap-2">
                      <div className="flex flex-col items-end gap-0.5">
                        <span className="font-bold text-neutral-50 text-base leading-6 flex items-center gap-1.5">
                          Launch
                          <Rocket className="size-4 text-[oklch(0.769_0.17_232)]" />
                        </span>
                        <span className="text-[#9f9fa9] text-xs leading-4">
                          A smooth go-live with testing and full handoff.
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                  <div className="relative z-10 size-12 shrink-0 bg-gradient-to-br from-primary to-[oklch(0.696_0.17_232)] shadow-lg shadow-primary/40 font-bold rounded-full text-[#1c398e] text-base leading-6 flex justify-center items-center">
                    5
                  </div>
                  <div className="flex-1" />
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex-1" />
                  <div className="relative z-10 size-12 shrink-0 bg-gradient-to-br from-primary to-[oklch(0.696_0.17_232)] shadow-lg shadow-primary/40 font-bold rounded-full text-[#1c398e] text-base leading-6 flex justify-center items-center">
                    6
                  </div>
                  <Card className="backdrop-blur-sm bg-zinc-900/60 border-white/10 border-0 border-solid p-4 flex-1 gap-1">
                    <CardHeader className="flex p-0 flex-row items-center gap-2">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-neutral-50 text-base leading-6 flex items-center gap-1.5">
                          <TrendingUp className="size-4 text-[oklch(0.769_0.17_232)]" />
                          Growth
                        </span>
                        <span className="text-[#9f9fa9] text-xs leading-4">
                          Ongoing optimization to keep leads flowing in.
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
