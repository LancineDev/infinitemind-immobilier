import React, { FC } from "react";
import Heading from "@/shared/Heading";

export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
}

const FOUNDER_DEMO: Statistic[] = [
  {
    id: "1",
    heading: "50 000+",
    subHeading:
      "Propriétés immobilières publiées en Côte d'Ivoire (au 30 septembre 2026)",
  },
  {
    id: "2",
    heading: "25 000+",
    subHeading: "Utilisateurs enregistrés (au 30 septembre 2026)",
  },
  {
    id: "3",
    heading: "15+",
    subHeading:
      "Villes couvertes en Côte d'Ivoire (au 30 septembre 2026)",
  },
];

export interface SectionStatisticProps {
  className?: string;
}

const SectionStatistic: FC<SectionStatisticProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading
        desc="Nous sommes impartiaux et indépendants, et chaque jour nous créons des programmes
          et contenus de classe mondiale"
      >
        🚀 Chiffres Clés
      </Heading>
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
        {FOUNDER_DEMO.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
          >
            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
              {item.heading}
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
              {item.subHeading}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionStatistic;
