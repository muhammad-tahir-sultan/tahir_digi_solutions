"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PageHero, FinalCTA } from "@/components/sections/ContentSections";
import type { PortfolioItem, SiteContent } from "@/lib/types";

const filters = ["All", "Dentists", "Law Firms", "Real Estate", "Accounting", "Physiotherapy"];

const industryColors: Record<string, string> = {
  Dentists: "from-blue-500 to-blue-700",
  "Law Firms": "from-slate-600 to-slate-800",
  "Real Estate": "from-emerald-500 to-emerald-700",
  Accounting: "from-amber-500 to-amber-700",
  Physiotherapy: "from-cyan-500 to-cyan-700",
};

export function PortfolioGrid({
  portfolio,
  cta,
}: {
  portfolio: PortfolioItem[];
  cta: SiteContent["cta"];
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? portfolio
      : portfolio.filter((p) => p.industry === activeFilter);

  return (
    <>
      <PageHero
        badge="Portfolio"
        title="Demo Projects for Local Businesses"
        description="Explore our concept projects across dental, legal, real estate, accounting, and physiotherapy industries."
      />
      <section className="py-20">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <Link key={item.id} href={`/portfolio/${item.slug}`}>
                <Card hover className="h-full overflow-hidden p-0">
                  <div
                    className={`h-44 bg-gradient-to-br ${industryColors[item.industry] || "from-primary to-accent"}`}
                  />
                  <div className="p-6">
                    <Badge>{item.industry}</Badge>
                    <h3 className="mt-3 font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted line-clamp-2">{item.overview}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA content={cta} />
    </>
  );
}
