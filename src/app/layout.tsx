import type { Metadata } from "next";
import localFont from "next/font/local";
import { AnalyticsConsentScript, CookieBanner, Footer, Header } from "@/components";
import { getSanityContent } from '@/sanity/content';
import { Providers } from "./provider";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next"


const manrope = localFont({
  src: "./fonts/manrope-latin-variable.woff2",
  weight: "200 800",
  variable: "--font-manrope",
  display: "swap",
});
const sourceSans = localFont({
  src: "./fonts/source-sans-3-latin-variable.woff2",
  weight: "200 900",
  variable: "--font-source-sans-3",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const {site} = await getSanityContent();

  return {
  metadataBase: new URL(site.siteUrl || 'https://novexpower.com'),
  title: site.metadata.title,
  description: site.metadata.description,
  openGraph: {
    title: site.metadata.title,
    description: site.metadata.description,
    url: site.siteUrl,
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 675,
        alt: site.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.metadata.title,
    description: site.metadata.description,
    images: ['/images/twitter-image.jpg'],
  },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {site, footer, navigation} = await getSanityContent();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${sourceSans.variable} antialiased`}>
        <AnalyticsConsentScript analyticsId={site.googleAnalyticsId || ""} />
        <Analytics />
        <Providers>
          <Header siteName={site.siteName} navigation={navigation} />
          <main>{children}</main>
          <Footer footer={footer} siteName={site.siteName} />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
