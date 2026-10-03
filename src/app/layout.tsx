import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Manrope } from "next/font/google";
import "./globals.css";

const fontHeading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontButton = Manrope({
  subsets: ["latin"],
  variable: "--font-button",
});

export const metadata: Metadata = {
  title: "Solar Safety Films | Premium Window Solutions",
  description: "Premium window film solutions for homes, businesses, and vehicles in Dubai. Experience unmatched comfort, protection, and style powered by Solar Gard technology.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlobalCta } from "@/components/shared/GlobalCta";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { GlobalWhatsApp } from "@/components/shared/GlobalWhatsApp";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontSans.variable} ${fontButton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <GlobalCta />
        <Footer />
        <GlobalWhatsApp />
      </body>
    </html>
  );
}
