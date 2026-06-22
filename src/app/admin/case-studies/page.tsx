"use client";

import { JsonCollectionEditor } from "@/components/admin/JsonCollectionEditor";

export default function AdminCaseStudiesPage() {
  return (
    <JsonCollectionEditor
      resource="caseStudies"
      title="Case Studies Management"
      description="Create, edit, and delete case studies."
      defaultItem={{
        id: "",
        slug: "new-case-study",
        title: "New Case Study",
        industry: "Dentists",
        businessOverview: "Business overview",
        challenges: ["Challenge 1"],
        strategy: "Strategy description",
        websiteImprovements: ["Improvement 1"],
        conversionImprovements: ["Conversion 1"],
        seoImprovements: ["SEO 1"],
        expectedOutcome: "Expected outcome description",
      }}
    />
  );
}
