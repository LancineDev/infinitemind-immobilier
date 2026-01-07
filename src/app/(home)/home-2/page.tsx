import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import React from "react";
import SectionHowItWork from "@/components/SectionHowItWork";
import BackgroundSection from "@/components/BackgroundSection";
import { TaxonomyType } from "@/data/types";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";
//
import logo1 from "@/images/logos/nomal/1.png";
import logo1Dark from "@/images/logos/dark/1.png";
//
import logo2 from "@/images/logos/nomal/2.png";
import logo2Dark from "@/images/logos/dark/2.png";
//
import logo3 from "@/images/logos/nomal/3.png";
import logo3Dark from "@/images/logos/dark/3.png";
//
import logo4 from "@/images/logos/nomal/4.png";
import logo4Dark from "@/images/logos/dark/4.png";
//
import logo5 from "@/images/logos/nomal/5.png";
import logo5Dark from "@/images/logos/dark/5.png";
//
import HIW1img from "@/images/HIW2-1.png";
import HIW2img from "@/images/HIW2-2.png";
import HIW3img from "@/images/HIW2-3.png";
import HIW1imgDark from "@/images/HIW2-1-dark.png";
import HIW2imgDark from "@/images/HIW2-2-dark.png";
import HIW3imgDark from "@/images/HIW2-3-dark.png";
import rightImgPng from "@/images/our-features-2.png";

import SectionGridFeatureProperty from "../SectionGridFeatureProperty";
import SectionDowloadApp from "../SectionDowloadApp";
import SectionHero2 from "@/app/(server-components)/SectionHero2";
import Image from "next/image";

const CATEGORIES_IMMOBILIERES: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-real-estate",
    name: "Maisons de luxe",
    taxonomy: "category",
    count: 1245,
    thumbnail:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-real-estate",
    name: "Appartements modernes",
    taxonomy: "category",
    count: 856,
    thumbnail:
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-real-estate",
    name: "Villas prestige",
    taxonomy: "category",
    count: 623,
    thumbnail:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-real-estate",
    name: "Terrains à bâtir",
    taxonomy: "category",
    count: 412,
    thumbnail:
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-real-estate",
    name: "Propriétés commerciales",
    taxonomy: "category",
    count: 389,
    thumbnail:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "6",
    href: "/listing-real-estate",
    name: "Studios meublés",
    taxonomy: "category",
    count: 267,
    thumbnail:
      "https://images.pexels.com/photos/271644/pexels-photo-271644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "7",
    href: "/listing-real-estate",
    name: "Maisons de ville",
    taxonomy: "category",
    count: 298,
    thumbnail:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome2() {
  return (
    <main className="nc-PageHome2 relative overflow-hidden">
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <SectionHero2 className="" />

        <div className="ncSectionLogos grid grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-16">
          <div className="flex items-end justify-center">
            <Image className="block dark:hidden" src={logo1} alt="logo1" />
            <Image className="hidden dark:block" src={logo1Dark} alt="logo1" />
          </div>
          <div className="flex items-end justify-center">
            <Image className="block dark:hidden" src={logo4} alt="logo4" />
            <Image className="hidden dark:block" src={logo4Dark} alt="logo4" />
          </div>
          <div className="flex items-end justify-center">
            <Image className="block dark:hidden" src={logo2} alt="logo2" />
            <Image className="hidden dark:block" src={logo2Dark} alt="logo2" />
          </div>
          <div className="flex items-end justify-center">
            <Image className="block dark:hidden" src={logo3} alt="logo3" />
            <Image className="hidden dark:block" src={logo3Dark} alt="logo3" />
          </div>

          <div className="flex items-end justify-center">
            <Image className="block dark:hidden" src={logo5} alt="logo5" />
            <Image className="hidden dark:block" src={logo5Dark} alt="logo5" />
          </div>
        </div>

        <SectionHowItWork
          data={[
            {
              id: 1,
              img: HIW1img,
              imgDark: HIW1imgDark,
              title: "Recherche intelligente",
              desc: "Indiquez la zone ou le type de bien que vous recherchez dans la barre de recherche. Notre application trouvera la correspondance parfaite.",
            },
            {
              id: 2,
              img: HIW2img,
              imgDark: HIW2imgDark,
              title: "Choisissez votre propriété",
              desc: "Parmi les nombreuses options que notre application vous fournira, vous pouvez sélectionner la propriété que vous souhaitez explorer.",
            },
            {
              id: 3,
              img: HIW3img,
              imgDark: HIW3imgDark,
              title: "Réservez votre propriété",
              desc: "Trouvez une maison ou un espace grâce à notre barre de recherche. Entrez votre localisation spécifique, le type de propriété et votre budget.",
            },
          ]}
        />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridFeatureProperty />
        </div>


        <SectionDowloadApp />

        <SectionSliderNewCategories
          categories={CATEGORIES_IMMOBILIERES}
          categoryCardType="card4"
          itemPerRow={4}
          heading="Suggestions de propriétés"
          subHeading="Propriétés populaires à découvrir"
        />

        <div className="relative py-16">
          <BackgroundSection className="bg-neutral-100 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox boxCard="box2" />
        </div>

        <SectionSliderNewCategories
          heading="Explorez par type de propriétés"
          subHeading="Explorez les propriétés par différents types"
          categoryCardType="card5"
          itemPerRow={5}
          categories={CATEGORIES_IMMOBILIERES}
        />
      </div>
    </main>
  );
}

export default PageHome2;
