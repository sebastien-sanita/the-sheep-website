"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const faqs = [
  {
    question: "Qu\'est-ce que The Sheep ?",
    answer:
      "The Sheep est une plateforme SaaS qui centralise la gestion de vos campagnes publicitaires Meta Ads, Google Ads et Instagram. Vous pouvez cr\éer, analyser et optimiser vos campagnes depuis un seul dashboard.",
  },
  {
    question: "Quelles plateformes sont support\ées ?",
    answer:
      "Actuellement, The Sheep supporte Meta Ads (Facebook & Instagram Ads), Google Ads et Instagram. LinkedIn Ads et TikTok Ads arrivent prochainement.",
  },
  {
    question: "L\'essai gratuit est-il vraiment sans engagement ?",
    answer:
      "Oui, l\'essai de 14 jours est 100% gratuit et sans carte bancaire. Vous pouvez tester toutes les fonctionnalit\és du plan Pro.",
  },
  {
    question: "Puis-je connecter plusieurs comptes publicitaires ?",
    answer:
      "Oui, selon votre plan. Le plan Starter permet 3 connexions, le Pro est illimit\é, et le plan Agence permet de g\érer plusieurs clients avec des workspaces d\édi\és.",
  },
  {
    question: "Mes donn\ées sont-elles s\écuris\ées ?",
    answer:
      "Absolument. Nous utilisons les API officielles de Meta et Google avec OAuth 2.0. Vos donn\ées sont chiffr\ées et h\éberg\ées en Europe, conform\ément au RGPD.",
  },
  {
    question: "Comment fonctionne le support ?",
    answer:
      "Le plan Starter inclut le support par email. Le plan Pro offre un support prioritaire avec un temps de r\éponse sous 4h. Le plan Agence dispose d\'un account manager d\édi\é.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary-600"
      >
        <span className="pr-4 text-base font-semibold text-gray-900">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className="text-gray-500" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 leading-relaxed text-gray-500">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle title="Questions fr\équentes" />
        </AnimatedSection>

        <div className="mt-12">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
