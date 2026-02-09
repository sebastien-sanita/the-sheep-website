import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://the-sheep.fr"),
  title: {
    default: "The Sheep — Pilotez toutes vos pubs depuis un seul endroit",
    template: "%s | The Sheep",
  },
  description:
    "The Sheep centralise vos campagnes Meta Ads, Google Ads et Instagram. Dashboard unifié, analytics, CRM, insights IA. Essai gratuit 14 jours.",
  keywords: [
    "gestion campagnes publicitaires",
    "dashboard publicitaire",
    "Meta Ads",
    "Google Ads",
    "Instagram Ads",
    "ROAS",
    "agence marketing",
    "SaaS publicitaire",
    "The Sheep",
    "gestion multi-plateforme",
  ],
  authors: [{ name: "Meta-Advertising" }],
  creator: "Meta-Advertising",
  publisher: "Meta-Advertising",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://the-sheep.fr",
    siteName: "The Sheep",
    title: "The Sheep — Pilotez toutes vos pubs depuis un seul endroit",
    description:
      "Centralisez vos campagnes Meta Ads, Google Ads et Instagram. Dashboard unifié, analytics avancés, CRM et insights IA.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Sheep - Plateforme de gestion publicitaire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sheep — Pilotez toutes vos pubs depuis un seul endroit",
    description:
      "Centralisez vos campagnes Meta Ads, Google Ads et Instagram. Dashboard unifié, analytics avancés, CRM et insights IA.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://the-sheep.fr",
    languages: {
      "fr-FR": "https://the-sheep.fr",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
