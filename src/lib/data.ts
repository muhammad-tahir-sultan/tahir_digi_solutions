import { promises as fs } from "fs";
import path from "path";
import type { SiteData, DataCollection } from "./types";

const DATA_FILE = path.join(process.cwd(), "data", "site-data.json");

async function readDataFile(): Promise<SiteData> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as SiteData;
  } catch {
    const seed = await fs.readFile(
      path.join(process.cwd(), "data", "site-data.json"),
      "utf-8"
    );
    return JSON.parse(seed) as SiteData;
  }
}

async function writeDataFile(data: SiteData): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function getSiteData(): Promise<SiteData> {
  return readDataFile();
}

export async function getCollection<K extends DataCollection>(
  key: K
): Promise<SiteData[K]> {
  const data = await readDataFile();
  return data[key];
}

export async function updateCollection<K extends DataCollection>(
  key: K,
  items: SiteData[K]
): Promise<SiteData[K]> {
  const data = await readDataFile();
  data[key] = items;
  await writeDataFile(data);
  return data[key];
}

export async function getContent() {
  const data = await readDataFile();
  return data.content;
}

export async function updateContent(content: SiteData["content"]) {
  const data = await readDataFile();
  data.content = content;
  await writeDataFile(data);
  return data.content;
}

export async function getSeoSettings() {
  const data = await readDataFile();
  return data.seo;
}

export async function updateSeoSettings(seo: SiteData["seo"]) {
  const data = await readDataFile();
  data.seo = seo;
  await writeDataFile(data);
  return data.seo;
}

export async function addContactLead(
  lead: Omit<SiteData["contactLeads"][0], "id" | "createdAt">
) {
  const data = await readDataFile();
  const newLead = {
    ...lead,
    id: `lead-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  data.contactLeads.unshift(newLead);
  await writeDataFile(data);
  return newLead;
}

export async function addAuditRequest(
  request: Omit<SiteData["auditRequests"][0], "id" | "createdAt">
) {
  const data = await readDataFile();
  const newRequest = {
    ...request,
    id: `audit-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  data.auditRequests.unshift(newRequest);
  await writeDataFile(data);
  return newRequest;
}

export async function getContactLeads() {
  const data = await readDataFile();
  return data.contactLeads;
}

export async function getAuditRequests() {
  const data = await readDataFile();
  return data.auditRequests;
}

export async function getPortfolioBySlug(slug: string) {
  const data = await readDataFile();
  return data.portfolio.find((p) => p.slug === slug);
}

export async function getCaseStudyBySlug(slug: string) {
  const data = await readDataFile();
  return data.caseStudies.find((c) => c.slug === slug);
}

export async function getIndustryBySlug(slug: string) {
  const data = await readDataFile();
  return data.industries.find((i) => i.slug === slug);
}
