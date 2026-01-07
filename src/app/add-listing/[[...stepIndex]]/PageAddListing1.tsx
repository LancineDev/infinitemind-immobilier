import React, { FC } from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../FormItem";

export interface PageAddListing1Props {}

const PageAddListing1: FC<PageAddListing1Props> = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold">
        Choisir les catégories d’annonces
      </h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

      {/* FORMULAIRE */}
      <div className="space-y-8">
        {/* ITEM */}
        <FormItem
          label="Choisir un type de propriété"
          desc="Hôtel : établissements d’hébergement professionnels ayant généralement un style ou un thème unique qui définit leur marque et leur décoration."
        >
          <Select>
            <option value="Hotel">Hôtel</option>
            <option value="Cottage">Cottage</option>
            <option value="Villa">Villa</option>
            <option value="Cabin">Cabane</option>
            <option value="Farm stay">Séjour à la ferme</option>
            <option value="Houseboat">Maison flottante</option>
            <option value="Lighthouse">Phare</option>
          </Select>
        </FormItem>

        <FormItem
          label="Nom du logement"
          desc="Un nom accrocheur inclut généralement : nom de la maison + nom de la chambre + caractéristique principale du bien + destination touristique."
        >
          <Input placeholder="Nom du logement" />
        </FormItem>

        <FormItem
          label="Type de location"
          desc="Logement entier : les voyageurs disposent de tout le logement — entrée privée et aucun espace partagé. Une chambre, une salle de bain et une cuisine sont généralement incluses."
        >
          <Select>
            <option value="Entire place">Logement entier</option>
            <option value="Private room">Chambre privée</option>
            <option value="Share room">Chambre partagée</option>
          </Select>
        </FormItem>
      </div>
    </>
  );
};

export default PageAddListing1;
