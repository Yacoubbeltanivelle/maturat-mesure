import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { COMPANY, SITE_URL } from "@/lib/data";

const bodyFont = IBM_Plex_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const displayFont = Space_Grotesk({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const monoFont = IBM_Plex_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Maturat Mesure | Mesure industrielle et air comprimé",
    template: "%s | Maturat Mesure",
  },
  description:
    "Solutions de mesure industrielle, traitement d'air comprimé et traitement du signal pour les professionnels de l'industrie.",
  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: COMPANY.name,
    title: "Maturat Mesure | Mesure industrielle et air comprimé",
    description:
      "Une vitrine industrielle premium pour clarifier l'offre, valoriser EXPEL et simplifier la prise de contact.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Maturat Mesure",
    description:
      "Mesure industrielle, traitement d'air comprimé et traitement du signal.",
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}
      lang="fr"
    >
      <body>
        <a className="skip-link" href="#content">
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
