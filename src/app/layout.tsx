import type { Metadata } from "next";
import localFont from "next/font/local";
import { AnalyticsConsentScript, CookieBanner, Footer, Header } from "@/components";
import { siteDetails } from '@/data';
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

export const metadata: Metadata = {
  metadataBase: new URL(siteDetails.siteUrl || 'https://novexpower.com'),
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${sourceSans.variable} antialiased`}>
        <AnalyticsConsentScript analyticsId={siteDetails.googleAnalyticsId || ""} />
        <Analytics />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
