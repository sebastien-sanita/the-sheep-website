export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Meta-Advertising",
  url: "https://the-sheep.fr",
  logo: "https://the-sheep.fr/logo.png",
  email: "sebastien@meta-advertising.io",
  description:
    "Meta-Advertising développe The Sheep, la plateforme SaaS de gestion publicitaire multi-plateformes.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "FR",
  },
  sameAs: [],
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "The Sheep",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://the-sheep.fr",
  description:
    "Plateforme SaaS de gestion centralisée des campagnes publicitaires Meta Ads, Google Ads et Instagram.",
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "49",
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "99",
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Agence",
      price: "249",
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Sheep",
  url: "https://the-sheep.fr",
  description:
    "Pilotez toutes vos pubs depuis un seul endroit. The Sheep centralise vos campagnes Meta Ads, Google Ads et Instagram.",
  inLanguage: "fr-FR",
  publisher: {
    "@type": "Organization",
    name: "Meta-Advertising",
  },
};
