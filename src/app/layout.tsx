import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AIConcierge } from "@/components/layout/AIConcierge";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trigonal Technology | AI-Powered Digital Health Systems",
  description:
    "We design interoperable digital health systems used by hospitals, clinics, and public health programs worldwide. Built on OpenMRS, Bahmni, and HL7 FHIR.",
  keywords: [
    "Digital Health",
    "NidanEHR",
    "OpenMRS",
    "Bahmni",
    "HL7 FHIR",
    "Healthcare Interoperability",
    "Nepal MoHP Directive 2081",
  ],
  authors: [{ name: "Trigonal Technology Pvt. Ltd." }],
  openGraph: {
    title: "Trigonal Technology | AI-Powered Digital Health Systems",
    description:
      "We design interoperable digital health systems used by hospitals, clinics, and public health programs worldwide.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <AIConcierge />
      </body>
    </html>
  );
}
