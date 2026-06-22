"use client";

import { JsonCollectionEditor } from "@/components/admin/JsonCollectionEditor";

export default function AdminServicesPage() {
  return (
    <JsonCollectionEditor
      resource="services"
      title="Services Management"
      description="Create, edit, and delete services."
      defaultItem={{
        id: "",
        title: "New Service",
        description: "Service description",
        benefits: ["Benefit 1"],
        deliverables: ["Deliverable 1"],
        process: ["Step 1"],
        faqs: [{ question: "Question?", answer: "Answer." }],
      }}
    />
  );
}
