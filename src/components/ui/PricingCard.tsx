"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "./Button";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  popular?: boolean;
  className?: string;
}

export default function PricingCard({
  name,
  price,
  period = "/mois",
  description,
  features,
  cta,
  href,
  popular = false,
  className = "",
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative rounded-2xl p-8 ${
        popular
          ? "border-2 border-primary-600 bg-white shadow-xl shadow-primary-600/10"
          : "border border-gray-200 bg-white"
      } ${className}`}
    >
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-primary-600 px-4 py-1 text-sm font-semibold text-white">
            Populaire
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold tracking-tight text-gray-900">
          {price}
        </span>
        {period && (
          <span className="ml-1 text-base text-gray-500">{period}</span>
        )}
      </div>

      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-success-500" />
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={popular ? "primary" : "secondary"}
        href={href}
        className="w-full"
      >
        {cta}
      </Button>
    </motion.div>
  );
}
