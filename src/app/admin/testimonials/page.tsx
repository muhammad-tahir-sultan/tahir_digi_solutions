"use client";

import { JsonCollectionEditor } from "@/components/admin/JsonCollectionEditor";

export default function AdminTestimonialsPage() {
  return (
    <JsonCollectionEditor
      resource="testimonials"
      title="Testimonials Management"
      description="Create, edit, and delete testimonials."
      defaultItem={{
        id: "",
        name: "Client Name",
        business: "Business Name",
        industry: "Dentists",
        rating: 5,
        review: "Client review text",
      }}
    />
  );
}
