import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Maturat Mesure — Instrumentation Industrielle",
    template: "%s | Maturat Mesure",
  },
  description:
    "Spécialiste en mesure industrielle, traitement du signal et traitement d'air comprimé. Solutions EXPEL, instrumentation, contrôle. Martigues, France.",
  keywords: [
    "mesure industrielle",
    "instrumentation",
    "capteur pression",
    "filtre air comprimé",
    "EXPEL",
    "Maturat Mesure",
    "Martigues",
  ],
  authors: [{ name: "Maturat Mesure" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Maturat Mesure",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
