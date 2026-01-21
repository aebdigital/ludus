import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "LUDUS - Divadelná škola",
  description: "LUDUS - Divadelná škola v Bratislave. Herecké kurzy, workshopy, tábory a profesionálne divadelné predstavenia.",
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
        <CookieConsent />
      </body>
    </html>
  );
}
