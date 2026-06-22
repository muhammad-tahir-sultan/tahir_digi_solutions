"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, Save } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { generateId } from "@/lib/utils";

interface JsonEditorProps {
  resource: string;
  title: string;
  description?: string;
  defaultItem?: Record<string, unknown>;
}

export function JsonCollectionEditor({
  resource,
  title,
  description,
  defaultItem = { id: "", title: "New Item" },
}: JsonEditorProps) {
  const [items, setItems] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    fetch(`/api/admin/${resource}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [resource]);

  async function handleSave() {
    setSaving(true);
    setMessage("");

    try {
      const res = await fetch(`/api/admin/${resource}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(items),
      });

      if (!res.ok) throw new Error("Save failed");
      setMessage("Saved successfully!");
    } catch {
      setMessage("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  function handleAdd() {
    const newItem = { ...defaultItem, id: generateId() };
    setItems([...items, newItem]);
    setSelectedIndex(items.length);
  }

  function handleDelete(index: number) {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
    setSelectedIndex(Math.max(0, index - 1));
  }

  function handleUpdate(jsonStr: string) {
    try {
      const parsed = JSON.parse(jsonStr);
      const updated = [...items];
      updated[selectedIndex] = parsed;
      setItems(updated);
    } catch {
      // invalid JSON while typing
    }
  }

  if (loading) {
    return <p className="text-muted">Loading...</p>;
  }

  const selectedItem = items[selectedIndex];

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          {description && <p className="mt-2 text-muted">{description}</p>}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleAdd}>
            <Plus className="h-4 w-4" />
            Add New
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            <Save className="h-4 w-4" />
            {saving ? "Saving..." : "Save All"}
          </Button>
        </div>
      </div>

      {message && (
        <p className={`mt-4 text-sm ${message.includes("success") ? "text-green-600" : "text-red-500"}`}>
          {message}
        </p>
      )}

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <h2 className="font-semibold text-foreground">Items ({items.length})</h2>
          <ul className="mt-4 max-h-96 space-y-1 overflow-auto">
            {items.map((item, index) => (
              <li key={String(item.id || index)}>
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    selectedIndex === index
                      ? "bg-primary/10 text-primary"
                      : "text-muted hover:bg-secondary"
                  }`}
                >
                  {String(item.title || item.name || item.id || `Item ${index + 1}`)}
                </button>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="lg:col-span-2">
          {selectedItem ? (
            <>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-semibold text-foreground">Edit Item</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDelete(selectedIndex)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </div>
              <textarea
                className="h-[500px] w-full rounded-lg border border-border bg-background p-4 font-mono text-xs text-foreground"
                value={JSON.stringify(selectedItem, null, 2)}
                onChange={(e) => handleUpdate(e.target.value)}
              />
              <p className="mt-2 text-xs text-muted">
                Edit the JSON directly. Click Save All to persist changes.
              </p>
            </>
          ) : (
            <p className="text-muted">No items yet. Click Add New to create one.</p>
          )}
        </Card>
      </div>
    </div>
  );
}
