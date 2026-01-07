import React, { FC } from "react";
import Heading from "@/shared/Heading";

export interface SectionBecomeAnAuthorProps {
  className?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
}) => {
  return (
    <div className={`nc-SectionBecomeAnAuthor ${className}`} data-nc-id="SectionBecomeAnAuthor">
      <Heading isCenter desc="Rejoignez notre réseau d'agents et publiez vos annonces">
        Devenez un agent
      </Heading>

      <div className="mt-8 max-w-3xl mx-auto text-center">
        <p className="text-neutral-600 dark:text-neutral-300">
          Publiez des annonces, gérez vos clients et développez votre activité
          avec notre plateforme simple et sécurisée.
        </p>
        <div className="mt-6">
          <a
            className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg shadow hover:opacity-95"
            href="/signup"
          >
            S'inscrire
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
