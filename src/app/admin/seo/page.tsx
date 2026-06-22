"use client";

import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import type { SeoSettings } from "@/lib/types";

const pages = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "services", label: "Services" },
  { key: "industries", label: "Industries" },
  { key: "portfolio", label: "Portfolio" },
  { key: "case-studies", label: "Case Studies" },
  { key: "process", label: "Process" },
  { key: "pricing", label: "Pricing" },
  { key: "testimonials", label: "Testimonials" },
  { key: "contact", label: "Contact" },
  { key: "free-audit", label: "Free Audit" },
];

export default function AdminSeoPage() {
  const [seo, setSeo] = useState<SeoSettings | null>(null);
  const [activePage, setActivePage] = useState("home");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/admin/seo")
      .then((res) => res.json())
      .then((data) => {
        setSeo(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  async function handleSave() {
    if (!seo) return;
    setSaving(true);
    setMessage("");

    try {
      const res = await fetch("/api/admin/seo", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(seo),
      });

      if (!res.ok) throw new Error("Save failed");
      setMessage("SEO settings saved successfully!");
    } catch {
      setMessage("Failed to save SEO settings.");
    } finally {
      setSaving(false);
    }
  }

  if (loading || !seo) {
    return <p className="text-muted">Loading...</p>;
  }

  const current = seo[activePage] || { title: "", description: "" };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">SEO Management</h1>
          <p className="mt-2 text-muted">Manage meta titles, descriptions, and Open Graph tags</p>
        </div>
        <Button onClick={handleSave} disabled={saving}>
          <Save className="h-4 w-4" />
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      {message && (
        <p className={`mt-4 text-sm ${message.includes("success") ? "text-green-600" : "text-red-500"}`}>
          {message}
        </p>
      )}

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <h2 className="font-semibold text-foreground">Pages</h2>
          <ul className="mt-4 space-y-1">
            {pages.map((page) => (
              <li key={page.key}>
                <button
                  type="button"
                  onClick={() => setActivePage(page.key)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    activePage === page.key
                      ? "bg-primary/10 text-primary"
                      : "text-muted hover:bg-secondary"
                  }`}
                >
                  {page.label}
                </button>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="lg:col-span-2">
          <h2 className="font-semibold text-foreground">Edit: {activePage}</h2>
          <div className="mt-4 space-y-4">
            <Input
              label="Meta Title"
              value={current.title}
              onChange={(e) =>
                setSeo({
                  ...seo,
                  [activePage]: { ...current, title: e.target.value },
                })
              }
            />
            <Textarea
              label="Meta Description"
              value={current.description}
              onChange={(e) =>
                setSeo({
                  ...seo,
                  [activePage]: { ...current, description: e.target.value },
                })
              }
            />
            <Input
              label="Open Graph Title"
              value={current.ogTitle || ""}
              onChange={(e) =>
                setSeo({
                  ...seo,
                  [activePage]: { ...current, ogTitle: e.target.value },
                })
              }
            />
            <Textarea
              label="Open Graph Description"
              value={current.ogDescription || ""}
              onChange={(e) =>
                setSeo({
                  ...seo,
                  [activePage]: { ...current, ogDescription: e.target.value },
                })
              }
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
