import React, { FC } from "react";
import SectionGridHasMap from "../SectionGridHasMap";
import { DEMO_PROPERTY_LISTINGS } from "@/data/listings";

export interface ListingStayMapPageProps {}

const ListingStayMapPage: FC<ListingStayMapPageProps> = ({}) => {
  return (
    <div className="container pb-24 lg:pb-28 2xl:pl-10 xl:pr-0 xl:max-w-none">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Carte des Propriétés
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explorez les propriétés immobilières en Côte d'Ivoire sur la carte interactive
        </p>
      </div>
      <SectionGridHasMap />
    </div>
  );
};

export default ListingStayMapPage;
