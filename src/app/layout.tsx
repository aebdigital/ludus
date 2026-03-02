import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL('https://ludus-space.sk'),
  title: {
    default: "LUDUS - Divadelná škola a divadlo v Bratislave",
    template: "%s | LUDUS"
  },
  description: "LUDUS v Bratislave spája divadelné vzdelávanie a tvorbu. Súkromná umelecká škola (SZUŠ), herecké kurzy pre dospelých, detské tábory a profesionálne predstavenia v našom Blackbox priestore.",
  keywords: ["divadlo Bratislava", "herecká škola", "divadelná škola", "herecké kurzy", "workshopy", "letný tábor", "vzdelávanie detí", "SZUŠ Ludus", "Ludus Academy"],
  authors: [{ name: "LUDUS" }],
  creator: "AEB Digital",
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    url: 'https://ludus-space.sk',
    siteName: 'LUDUS',
    title: 'LUDUS - Divadelná škola a divadlo v Bratislave',
    description: 'Divadelné vzdelávanie a tvorba pre všetky generácie v srdci Bratislavy.',
    images: [
      {
        url: '/images/loga-4/logo-main.webp',
        width: 1200,
        height: 630,
        alt: 'LUDUS Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUDUS - Divadelná škola a divadlo v Bratislave',
    description: 'Divadelné vzdelávanie a tvorba pre všetky generácie v srdci Bratislavy.',
    images: ['/images/loga-4/logo-main.webp'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.webp',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LUDUS",
  "alternateName": "Divadelná škola a divadlo LUDUS",
  "url": "https://ludus-space.sk",
  "logo": "https://ludus-space.sk/images/loga-4/logo-main.webp",
  "description": "Divadelná škola a profesionálne divadlo v Bratislave so zameraním na deti, mládež a dospelých.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Palackého 22",
    "addressLocality": "Bratislava",
    "postalCode": "811 02",
    "addressCountry": "SK"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+421-947-942-125",
    "contactType": "customer service",
    "email": "info@skolaludus.sk"
  },
  "sameAs": [
    "https://www.facebook.com/skolaludus/",
    "https://www.instagram.com/skolaludus",
    "https://www.instagram.com/ludusacademy.sk/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" suppressHydrationWarning>
      <body>
        <Script
          src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js"
          strategy="beforeInteractive"
        />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CookieConsent />
      </body>
    </html>
  );
}
