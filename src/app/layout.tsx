import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AdminFooterGuard } from "@/components/layout/AdminFooterGuard";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { BRAND } from "@/lib/brand";
import { getSiteData } from "@/lib/data";
import { buildMetadata, organizationJsonLd, localBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  const pageMeta = buildMetadata("home", data.seo.home, "/");
  return {
    ...pageMeta,
    metadataBase: new URL(BRAND.url),
    applicationName: BRAND.name,
    icons: {
      icon: "/brand-logo.svg",
      apple: "/brand-logo.svg",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <JsonLd data={[organizationJsonLd(), localBusinessJsonLd()]} />
          <Header />
          <main className="flex-1">{children}</main>
          <AdminFooterGuard>
            <Footer />
          </AdminFooterGuard>
        </ThemeProvider>
      </body>
    </html>
  );
}
