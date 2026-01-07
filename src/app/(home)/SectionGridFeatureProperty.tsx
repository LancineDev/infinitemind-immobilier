import React, { FC, ReactNode } from "react";
import { DEMO_PROPERTY_LISTINGS } from "@/data/listings";
import { PropertyDataType } from "@/data/types";
import ButtonPrimary from "@/shared/ButtonPrimary";
import PropertyCardH from "@/components/PropertyCardH";
import HeaderFilter from "@/components/HeaderFilter";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: PropertyDataType[] = DEMO_PROPERTY_LISTINGS.filter((_, i) => i < 8);
//
export interface SectionGridFeaturePropertyProps {
  propertyListings?: PropertyDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
}

const SectionGridFeatureProperty: FC<SectionGridFeaturePropertyProps> = ({
  propertyListings = DEMO_DATA,
  gridClass = "",
  heading = "Featured Properties",
  subHeading = "Discover the best properties we have to offer",
  headingIsCenter,
  tabs = ["New York", "Tokyo", "Paris", "London"],
}) => {
  const renderCard = (property: PropertyDataType, index: number) => {
    return <PropertyCardH key={index} className="h-full" data={property} />;
  };

  return (
    <div className="nc-SectionGridFeatureProperty relative">
      <HeaderFilter
        tabActive={"New York"}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
      />
      <div
        className={`grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 ${gridClass}`}
      >
        {propertyListings.map(renderCard)}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <ButtonPrimary loading>Show me more</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionGridFeatureProperty;
