"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

type CellValue = boolean | string;

interface ComparisonRow {
  feature: string;
  starter: CellValue;
  pro: CellValue;
  agence: CellValue;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Workspaces",
    starter: "1",
    pro: "3",
    agence: "Illimit\és",
  },
  {
    feature: "Plateformes connect\ées",
    starter: "3",
    pro: "Illimit\ées",
    agence: "Illimit\ées",
  },
  {
    feature: "Dashboard unifi\é",
    starter: true,
    pro: true,
    agence: true,
  },
  {
    feature: "Analytics avanc\és",
    starter: false,
    pro: true,
    agence: true,
  },
  {
    feature: "Leads/mois",
    starter: "500",
    pro: "Illimit\és",
    agence: "Illimit\és",
  },
  {
    feature: "Templates campagnes",
    starter: "Basiques",
    pro: "Tous",
    agence: "Tous",
  },
  {
    feature: "Insights IA",
    starter: false,
    pro: true,
    agence: true,
  },
  {
    feature: "Gestion d\'\équipe",
    starter: false,
    pro: false,
    agence: "4 r\ôles",
  },
  {
    feature: "API access",
    starter: false,
    pro: false,
    agence: true,
  },
  {
    feature: "Support",
    starter: "Email",
    pro: "Prioritaire (< 4h)",
    agence: "Account manager",
  },
  {
    feature: "Rapports",
    starter: "Mensuels",
    pro: "Personnalis\és",
    agence: "Personnalis\és",
  },
  {
    feature: "Export donn\ées",
    starter: false,
    pro: "CSV/PDF",
    agence: "CSV/PDF",
  },
  {
    feature: "White-label",
    starter: false,
    pro: false,
    agence: "Bient\ôt",
  },
  {
    feature: "SLA garanti",
    starter: false,
    pro: false,
    agence: true,
  },
];

function CellContent({ value }: { value: CellValue }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-success-500" />
    ) : (
      <X className="mx-auto h-5 w-5 text-gray-300" />
    );
  }

  if (value === "Bient\ôt") {
    return (
      <span className="inline-flex items-center gap-1 text-sm text-gray-500">
        <Minus className="h-4 w-4" />
        {value}
      </span>
    );
  }

  return <span className="text-sm font-medium text-gray-700">{value}</span>;
}

const tableVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function ComparisonTable() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comparez les <span className="gradient-text">plans en d&eacute;tail</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Toutes les fonctionnalit&eacute;s, plan par plan.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={tableVariants}
          className="mt-12 overflow-x-auto"
        >
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-4 pr-4 text-left text-sm font-semibold text-gray-500 sm:w-1/4">
                  Fonctionnalit&eacute;
                </th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-gray-900 sm:w-1/4">
                  Starter
                </th>
                <th className="px-4 py-4 text-center sm:w-1/4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">
                    Pro
                  </span>
                </th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-gray-900 sm:w-1/4">
                  Agence
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={row.feature}
                  className={`border-b border-gray-100 transition-colors hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <td className="py-4 pr-4 text-sm font-medium text-gray-700">
                    {row.feature}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <CellContent value={row.starter} />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <CellContent value={row.pro} />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <CellContent value={row.agence} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
