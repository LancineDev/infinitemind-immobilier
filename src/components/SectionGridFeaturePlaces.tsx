import React, { FC, ReactNode } from "react";
import { DEMO_PROPERTY_LISTINGS } from "@/data/listings";
import { PropertyDataType } from "@/data/types";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import PropertyCard from "./PropertyCard";
import PropertyCard2 from "./PropertyCard2";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: PropertyDataType[] = DEMO_PROPERTY_LISTINGS.filter((_, i) => i < 8);

//
export interface SectionGridFeaturePlacesProps {
  stayListings?: PropertyDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
  cardType?: "card1" | "card2";
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
  stayListings = DEMO_DATA,
  gridClass = "",
  heading = "Propriétés en vedette",
  subHeading = "Les propriétés les plus populaires que nous vous recommandons",
  headingIsCenter,
  tabs = ["Abidjan", "Yamoussoukro", "Bouaké", "San-Pédro"],
  cardType = "card2",
}) => {
  const renderCard = (stay: PropertyDataType) => {
    let CardName = PropertyCard;
    switch (cardType) {
      case "card1":
        CardName = PropertyCard;
        break;
      case "card2":
        CardName = PropertyCard2;
        break;

      default:
        CardName = PropertyCard;
    }

    return <CardName key={stay.id} data={stay} />;
  };

  return (
    <div className="nc-SectionGridFeaturePlaces relative">
      <HeaderFilter
        tabActive={"Abidjan"}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
      />
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
      >
        {stayListings.map((stay) => renderCard(stay))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <ButtonPrimary loading>Voir plus</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionGridFeaturePlaces;
