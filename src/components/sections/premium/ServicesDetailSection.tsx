"use client";

import { motion } from "framer-motion";
import {
  Palette,
  RefreshCw,
  Building2,
  Layout,
  TrendingUp,
  Search,
  Wrench,
  CheckCircle2,
  Package,
  ListOrdered,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import { GrowthIllustration } from "@/components/illustrations/IndustryIllustrations";
import type { Service } from "@/lib/types";
import { cn } from "@/lib/utils";

const serviceIcons: LucideIcon[] = [
  Palette,
  RefreshCw,
  Building2,
  Layout,
  TrendingUp,
  Search,
  Wrench,
];

const serviceGradients = [
  "from-blue-500 to-indigo-700",
  "from-violet-500 to-purple-700",
  "from-emerald-500 to-teal-700",
  "from-cyan-500 to-blue-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-700",
  "from-slate-600 to-slate-800",
];

function ListBlock({
  title,
  icon: Icon,
  items,
  variant = "check",
}: {
  title: string;
  icon: LucideIcon;
  items: string[];
  variant?: "check" | "number" | "faq";
}) {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      {variant === "faq" ? (
        <div className="mt-4 space-y-4">
          {items.map((item, i) => {
            const [question, answer] = item.split("|||");
            return (
              <div key={i}>
                <p className="text-sm font-medium text-foreground">{question}</p>
                <p className="mt-1 text-sm text-muted">{answer}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <ul className="mt-4 space-y-2.5">
          {items.map((item, i) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted">
              {variant === "number" ? (
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {i + 1}
                </span>
              ) : (
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              )}
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ServicesDetailSection({ services }: { services: Service[] }) {
  return (
    <section className="relative overflow-hidden py-20">
      <BackgroundEffects variant="default" />
      <Container className="relative">
        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            const gradient = serviceGradients[index % serviceGradients.length];
            const isReversed = index % 2 === 1;
            const faqItems = service.faqs.map((f) => `${f.question}|||${f.answer}`);

            return (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-24"
              >
                <div
                  className={cn(
                    "grid items-start gap-10 lg:grid-cols-5 lg:gap-12",
                    isReversed && "lg:[direction:rtl]"
                  )}
                >
                  <div className={cn("lg:col-span-2", isReversed && "lg:[direction:ltr]")}>
                    <div className={cn("overflow-hidden rounded-2xl bg-gradient-to-br p-8", gradient)}>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                        <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                      </div>
                      <Badge className="mt-6 bg-white/20 text-white">Service {index + 1}</Badge>
                      <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{service.title}</h2>
                      <p className="mt-4 text-sm text-white/80">{service.description}</p>
                    </div>

                    {index === 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-6 hidden lg:block"
                        aria-hidden="true"
                      >
                        <div className="glass rounded-2xl p-6">
                          <div className="h-20">
                            <GrowthIllustration />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div
                    className={cn(
                      "grid gap-4 sm:grid-cols-2 lg:col-span-3",
                      isReversed && "lg:[direction:ltr]"
                    )}
                  >
                    <ListBlock title="Benefits" icon={CheckCircle2} items={service.benefits} />
                    <ListBlock title="Deliverables" icon={Package} items={service.deliverables} />
                    <ListBlock
                      title="Process"
                      icon={ListOrdered}
                      items={service.process}
                      variant="number"
                    />
                    <ListBlock title="FAQs" icon={HelpCircle} items={faqItems} variant="faq" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
