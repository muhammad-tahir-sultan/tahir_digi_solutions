"use client";

import { useState } from "react";
import { CheckCircle2, Smartphone, Gauge, Search, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const auditIncludes = [
  { icon: Smartphone, title: "Mobile Analysis", description: "How your site performs on phones and tablets." },
  { icon: Gauge, title: "Speed Review", description: "Page load times and performance bottlenecks." },
  { icon: Search, title: "SEO Review", description: "On-page SEO, metadata, and local search readiness." },
  { icon: TrendingUp, title: "Conversion Review", description: "CTAs, forms, and user journey optimization." },
];

export function AuditPageContent() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    businessName: "",
    websiteUrl: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", businessName: "", websiteUrl: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="border-b border-border bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Free Lead Magnet
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get Your Free Website Audit
            </h1>
            <p className="mt-4 text-lg text-muted">
              Discover exactly what&apos;s holding your website back from generating more leads and bookings.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Your Audit Includes</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {auditIncludes.map((item) => (
                  <Card key={item.title}>
                    <item.icon className="h-8 w-8 text-primary" />
                    <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted">{item.description}</p>
                  </Card>
                ))}
              </div>
              <ul className="mt-8 space-y-3">
                {[
                  "Personalized report within 48 hours",
                  "Actionable recommendations",
                  "No obligation consultation",
                  "Industry-specific insights",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Card>
              <h2 className="text-xl font-bold text-foreground">Request Your Free Audit</h2>
              <p className="mt-2 text-sm text-muted">
                Fill out the form and we&apos;ll analyze your website and send you a detailed report.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <Input
                  label="Name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <Input
                  label="Business Name"
                  name="businessName"
                  required
                  value={form.businessName}
                  onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                />
                <Input
                  label="Website URL"
                  name="websiteUrl"
                  type="url"
                  required
                  placeholder="https://"
                  value={form.websiteUrl}
                  onChange={(e) => setForm({ ...form, websiteUrl: e.target.value })}
                />
                <Button type="submit" disabled={status === "loading"} className="w-full">
                  {status === "loading" ? "Submitting..." : "Get Free Website Audit"}
                </Button>
                {status === "success" && (
                  <p className="text-sm text-green-600">
                    Thank you! We&apos;ll send your audit report within 48 hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
                )}
              </form>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
