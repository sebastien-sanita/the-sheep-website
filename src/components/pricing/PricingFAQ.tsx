"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Puis-je changer de plan en cours de route\u00a0?",
    answer:
      "Oui, vous pouvez upgrader ou downgrader \u00e0 tout moment. Le changement est effectif imm\u00e9diatement et le montant est proratis\u00e9.",
  },
  {
    question: "Y a-t-il des frais cach\u00e9s\u00a0?",
    answer:
      "Non. Le prix affich\u00e9 est le prix que vous payez. Pas de frais de setup, pas de frais de r\u00e9siliation.",
  },
  {
    question: "Comment fonctionne la facturation\u00a0?",
    answer:
      "La facturation est mensuelle ou annuelle selon votre choix. Paiement par carte bancaire ou virement SEPA. Factures disponibles dans votre espace.",
  },
  {
    question: "Proposez-vous des tarifs sur mesure\u00a0?",
    answer:
      "Oui, pour les grands comptes et agences avec des besoins sp\u00e9cifiques, contactez-nous pour un devis personnalis\u00e9.",
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.4,
        ease: "easeOut" as const,
      }}
      className="border-b border-gray-200"
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary-600"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-gray-900 pr-4">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Questions <span className="gradient-text">fr&eacute;quentes</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Tout ce que vous devez savoir sur nos tarifs.
          </p>
        </div>

        <div className="mt-12">
          {faqItems.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
