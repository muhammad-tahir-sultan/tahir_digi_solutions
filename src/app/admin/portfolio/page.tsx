"use client";

import { JsonCollectionEditor } from "@/components/admin/JsonCollectionEditor";

export default function AdminPortfolioPage() {
  return (
    <JsonCollectionEditor
      resource="portfolio"
      title="Portfolio Management"
      description="Create, edit, and delete portfolio items."
      defaultItem={{
        id: "",
        slug: "new-project",
        title: "New Project",
        industry: "Dentists",
        overview: "Project overview",
        technologies: ["Next.js"],
        features: ["Feature 1"],
        demoUrl: "#",
        coverImage: "/images/portfolio-dental.jpg",
      }}
    />
  );
}
