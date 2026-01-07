import React, { FC } from "react";
import { DEMO_PROPERTY_LISTINGS } from "@/data/listings";
import { PropertyDataType } from "@/data/types";
import Pagination from "@/shared/Pagination";
import TabFilters from "./TabFilters";
import Heading2 from "@/shared/Heading2";
import PropertyCardH from "@/components/PropertyCardH";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: PropertyDataType[];
}

const DEMO_DATA: PropertyDataType[] = DEMO_PROPERTY_LISTINGS.filter((_, i) => i < 8);

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
    <div className={`nc-SectionGridFilterCard ${className}`}>
      <Heading2
        heading="Propriétés à Abidjan"
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
            112 propriétés
            <span className="mx-2">·</span>
            Côte d'Ivoire
          </span>
        }
      />

      <div className="mb-8 lg:mb-11">
        <TabFilters />
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 xl:grid-cols-2 ">
        {data.map((property) => (
          <PropertyCardH key={property.id} data={property} />
        ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <Pagination />
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
