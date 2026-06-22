"use client";

import { JsonCollectionEditor } from "@/components/admin/JsonCollectionEditor";

export default function AdminPricingPage() {
  return (
    <JsonCollectionEditor
      resource="pricing"
      title="Pricing Management"
      description="Create, edit, and delete pricing packages."
      defaultItem={{
        id: "",
        name: "New Package",
        price: "From $X",
        description: "Package description",
        features: ["Feature 1"],
        deliverables: ["Deliverable 1"],
        timeline: "4-6 weeks",
        featured: false,
      }}
    />
  );
}
