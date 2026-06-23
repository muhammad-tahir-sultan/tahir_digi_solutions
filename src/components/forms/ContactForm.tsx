"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Calendar } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Select } from "@/components/ui/Input";

const industryOptions = [
  { value: "", label: "Select your industry" },
  { value: "Dentists", label: "Dentists" },
  { value: "Law Firms", label: "Law Firms" },
  { value: "Real Estate", label: "Real Estate Agencies" },
  { value: "Accounting", label: "Accounting Firms" },
  { value: "Physiotherapy", label: "Physiotherapy Clinics" },
  { value: "Other", label: "Other" },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    businessName: "",
    industry: "",
    websiteUrl: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({
        name: "",
        email: "",
        businessName: "",
        industry: "",
        websiteUrl: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
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
      </div>
      <Input
        label="Business Name"
        name="businessName"
        required
        value={form.businessName}
        onChange={(e) => setForm({ ...form, businessName: e.target.value })}
      />
      <Select
        label="Industry"
        name="industry"
        required
        options={industryOptions}
        value={form.industry}
        onChange={(e) => setForm({ ...form, industry: e.target.value })}
      />
      <Input
        label="Website URL"
        name="websiteUrl"
        type="url"
        placeholder="https://"
        value={form.websiteUrl}
        onChange={(e) => setForm({ ...form, websiteUrl: e.target.value })}
      />
      <Textarea
        label="Message"
        name="message"
        required
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
      {status === "success" && (
        <p className="text-sm text-green-600">Thank you! We&apos;ll be in touch soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}

export function ContactPageContent() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Contact
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Let&apos;s Talk About Your Growth
            </h1>
            <p className="mt-4 text-lg text-muted">
              Book a free consultation or send us a message. We&apos;d love to hear about your business.
            </p>
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <Card>
              <h2 className="text-xl font-bold text-foreground">Send Us a Message</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Card>

            <div className="space-y-6">
              <Card>
                <h3 className="font-semibold text-foreground">Contact Information</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center gap-3 text-sm text-muted">
                    <Mail className="h-5 w-5 text-primary" />
                    {BRAND.email}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted">
                    <Phone className="h-5 w-5 text-primary" />
                    (555) 123-4567
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted">
                    <MapPin className="h-5 w-5 text-primary" />
                    Your City, ST
                  </li>
                </ul>
              </Card>

              <Card>
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground">Book a Consultation</h3>
                </div>
                <p className="mt-3 text-sm text-muted">
                  Schedule a free 30-minute consultation to discuss your website and growth goals.
                </p>
                <div className="mt-4 flex h-48 items-center justify-center rounded-xl border-2 border-dashed border-border bg-secondary/30 text-sm text-muted">
                  Calendly Integration Placeholder
                </div>
              </Card>

              <Card className="overflow-hidden p-0">
                <div className="flex h-48 items-center justify-center bg-secondary/50 text-sm text-muted">
                  <MapPin className="mr-2 h-5 w-5" />
                  Google Map Placeholder
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
