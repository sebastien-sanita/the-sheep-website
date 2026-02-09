"use client";

import { motion } from "framer-motion";

interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (annual: boolean) => void;
}

export function PricingToggle({ isAnnual, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className={`text-sm font-medium transition-colors duration-200 ${
          !isAnnual ? "text-gray-900" : "text-gray-400"
        }`}
      >
        Mensuel
      </span>

      <button
        type="button"
        role="switch"
        aria-checked={isAnnual}
        onClick={() => onToggle(!isAnnual)}
        className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 ${
          isAnnual ? "bg-primary-600" : "bg-gray-300"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`inline-block h-5 w-5 rounded-full bg-white shadow-md ${
            isAnnual ? "ml-6" : "ml-1"
          }`}
        />
      </button>

      <span
        className={`text-sm font-medium transition-colors duration-200 ${
          isAnnual ? "text-gray-900" : "text-gray-400"
        }`}
      >
        Annuel
      </span>

      {isAnnual && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center rounded-full bg-success-50 px-3 py-0.5 text-xs font-semibold text-success-600"
        >
          -20%
        </motion.span>
      )}
    </div>
  );
}
