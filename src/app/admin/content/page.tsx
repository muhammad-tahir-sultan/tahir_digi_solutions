"use client";

import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import type { SiteContent } from "@/lib/types";

export default function AdminContentPage() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/admin/content")
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  async function handleSave() {
    if (!content) return;
    setSaving(true);
    setMessage("");

    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });

      if (!res.ok) throw new Error("Save failed");
      setMessage("Content saved successfully!");
    } catch {
      setMessage("Failed to save content.");
    } finally {
      setSaving(false);
    }
  }

  if (loading || !content) {
    return <p className="text-muted">Loading...</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Website Content</h1>
          <p className="mt-2 text-muted">Manage hero, about, and CTA sections</p>
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

      <div className="mt-8 space-y-8">
        <Card>
          <h2 className="text-lg font-semibold text-foreground">Hero Section</h2>
          <div className="mt-4 space-y-4">
            <Input
              label="Headline"
              value={content.hero.headline}
              onChange={(e) =>
                setContent({ ...content, hero: { ...content.hero, headline: e.target.value } })
              }
            />
            <Textarea
              label="Subheadline"
              value={content.hero.subheadline}
              onChange={(e) =>
                setContent({ ...content, hero: { ...content.hero, subheadline: e.target.value } })
              }
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Primary CTA"
                value={content.hero.primaryCta}
                onChange={(e) =>
                  setContent({ ...content, hero: { ...content.hero, primaryCta: e.target.value } })
                }
              />
              <Input
                label="Secondary CTA"
                value={content.hero.secondaryCta}
                onChange={(e) =>
                  setContent({ ...content, hero: { ...content.hero, secondaryCta: e.target.value } })
                }
              />
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-foreground">About Section</h2>
          <div className="mt-4 space-y-4">
            <Textarea
              label="Mission"
              value={content.about.mission}
              onChange={(e) =>
                setContent({ ...content, about: { ...content.about, mission: e.target.value } })
              }
            />
            <Textarea
              label="Vision"
              value={content.about.vision}
              onChange={(e) =>
                setContent({ ...content, about: { ...content.about, vision: e.target.value } })
              }
            />
            <Textarea
              label="Company Story"
              value={content.about.story}
              onChange={(e) =>
                setContent({ ...content, about: { ...content.about, story: e.target.value } })
              }
            />
            <Textarea
              label="Why Choose Us (one per line)"
              value={content.about.whyChooseUs.join("\n")}
              onChange={(e) =>
                setContent({
                  ...content,
                  about: {
                    ...content.about,
                    whyChooseUs: e.target.value.split("\n").filter(Boolean),
                  },
                })
              }
            />
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-foreground">Final CTA Section</h2>
          <div className="mt-4 space-y-4">
            <Input
              label="Title"
              value={content.cta.title}
              onChange={(e) =>
                setContent({ ...content, cta: { ...content.cta, title: e.target.value } })
              }
            />
            <Textarea
              label="Subtitle"
              value={content.cta.subtitle}
              onChange={(e) =>
                setContent({ ...content, cta: { ...content.cta, subtitle: e.target.value } })
              }
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Primary CTA"
                value={content.cta.primaryCta}
                onChange={(e) =>
                  setContent({ ...content, cta: { ...content.cta, primaryCta: e.target.value } })
                }
              />
              <Input
                label="Secondary CTA"
                value={content.cta.secondaryCta}
                onChange={(e) =>
                  setContent({ ...content, cta: { ...content.cta, secondaryCta: e.target.value } })
                }
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
