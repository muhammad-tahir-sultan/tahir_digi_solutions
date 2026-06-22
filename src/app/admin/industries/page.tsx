"use client";

import { JsonCollectionEditor } from "@/components/admin/JsonCollectionEditor";

export default function AdminIndustriesPage() {
  return (
    <JsonCollectionEditor
      resource="industries"
      title="Industries Management"
      description="Create, edit, and delete industry sections."
      defaultItem={{
        id: "",
        slug: "new-industry",
        name: "New Industry",
        challenges: ["Challenge 1"],
        opportunities: ["Opportunity 1"],
        websiteFeatures: ["Feature 1"],
        conversionElements: ["Element 1"],
      }}
    />
  );
}
