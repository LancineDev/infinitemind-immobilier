import React, { FC } from "react";
import Textarea from "@/shared/Textarea";

export interface PageAddListing6Props {}

const PageAddListing6: FC<PageAddListing6Props> = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">
          Description de votre logement pour les clients
        </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Mentionnez les meilleures caractéristiques de votre logement, tout
          équipement spécial comme le Wi-Fi rapide ou le parking, ainsi que ce
          que vous aimez dans le quartier.
        </span>
      </div>

      <Textarea placeholder="Écrivez ici la description de votre logement..." rows={14} />
    </>
  );
};

export default PageAddListing6;
