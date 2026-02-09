"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { PricingToggle } from "./PricingToggle";

interface Plan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    monthlyPrice: 49,
    annualPrice: 39,
    description: "Id\éal pour les freelances et solo",
    features: [
      "1 workspace",
      "3 plateformes connect\ées",
      "Dashboard unifi\é",
      "500 leads/mois",
      "Templates basiques",
      "Support email",
      "Rapports mensuels",
    ],
    cta: "Commencer l\'essai gratuit",
    ctaHref: "#",
  },
  {
    name: "Pro",
    monthlyPrice: 99,
    annualPrice: 79,
    description: "Pour les PME et e-commerces ambitieux",
    features: [
      "3 workspaces",
      "Plateformes illimit\ées",
      "Analytics avanc\és",
      "Leads illimit\és",
      "Tous les templates",
      "Insights IA",
      "Support prioritaire (< 4h)",
      "Rapports personnalis\és",
      "Export CSV/PDF",
    ],
    cta: "Commencer l\'essai gratuit",
    ctaHref: "#",
    popular: true,
  },
  {
    name: "Agence",
    monthlyPrice: 249,
    annualPrice: 199,
    description: "Pour les agences multi-clients",
    features: [
      "Workspaces illimit\és",
      "Gestion d\'\équipe (4 r\ôles)",
      "Permissions granulaires",
      "API access",
      "White-label (bient\ôt)",
      "Account manager d\édi\é",
      "Onboarding personnalis\é",
      "SLA garanti",
    ],
    cta: "Contacter les ventes",
    ctaHref: "/contact",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-12">
      {/* Toggle */}
      <div className="mb-12">
        <PricingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative flex flex-col rounded-2xl p-8 ${
              plan.popular
                ? "border-2 border-primary-600 bg-white shadow-xl shadow-primary-600/10"
                : "border border-gray-200 bg-white shadow-sm"
            }`}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-600 px-4 py-1 text-sm font-semibold text-white">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  Populaire
                </span>
              </div>
            )}

            {/* Plan info */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
            </div>

            {/* Price */}
            <div className="mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isAnnual ? "annual" : "monthly"}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-baseline"
                >
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    <span className="text-3xl">&euro;</span>
                  </span>
                  <span className="ml-1 text-base text-gray-500">/mois</span>
                </motion.div>
              </AnimatePresence>
              {isAnnual && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-sm text-gray-400"
                >
                  Factur&eacute; {plan.annualPrice * 12}&euro;/an
                </motion.p>
              )}
            </div>

            {/* Features */}
            <ul className="mb-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-success-500" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              variant={plan.popular ? "primary" : "secondary"}
              href={plan.ctaHref}
              size="lg"
              className="w-full"
            >
              {plan.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
