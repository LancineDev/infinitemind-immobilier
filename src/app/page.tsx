import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import BackgroundSection from "@/components/BackgroundSection";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox";
import BackToTop from "@/components/BackToTop";
import ViewAllPropertiesButton from "@/components/ViewAllPropertiesButton";

const CATEGORIES_IMMOBILIERES: TaxonomyType[] = [
  {
    id: "1",
    href: "/listings?type=Maison",
    name: "Maisons",
    taxonomy: "category",
    count: 1245,
    thumbnail:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listings?type=Appartement",
    name: "Appartements",
    taxonomy: "category",
    count: 856,
    thumbnail:
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listings?type=Villa",
    name: "Villas",
    taxonomy: "category",
    count: 623,
    thumbnail:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listings?type=Terrain",
    name: "Terrains",
    taxonomy: "category",
    count: 412,
    thumbnail:
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listings?type=Local commercial",
    name: "Commercial",
    taxonomy: "category",
    count: 389,
    thumbnail:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "6",
    href: "/listings?type=Maison",
    name: "Maisons de ville",
    taxonomy: "category",
    count: 298,
    thumbnail:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "7",
    href: "/listings?type=Appartement",
    name: "Studios",
    taxonomy: "category",
    count: 267,
    thumbnail:
      "https://images.pexels.com/photos/271644/pexels-photo-271644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const VILLES_MISES_EN_AVANT: TaxonomyType[] = [
  {
    id: "1",
    href: "/listings?city=Abidjan",
    name: "Abidjan",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listings?city=Yamoussoukro",
    name: "Yamoussoukro",
    taxonomy: "category",
    count: 145233,
    thumbnail:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listings?city=Bouaké",
    name: "Bouaké",
    taxonomy: "category",
    count: 98765,
    thumbnail:
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listings?city=San-Pédro",
    name: "San-Pédro",
    taxonomy: "category",
    count: 76543,
    thumbnail:
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listings?city=Korhogo",
    name: "Korhogo",
    taxonomy: "category",
    count: 54321,
    thumbnail:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: "6",
    href: "/listings?city=Daloa",
    name: "Daloa",
    taxonomy: "category",
    count: 43210,
    thumbnail:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "7",
    href: "/listings?city=Man",
    name: "Man",
    taxonomy: "category",
    count: 32109,
    thumbnail:
      "https://images.pexels.com/photos/271644/pexels-photo-271644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />

        {/* CATÉGORIES IMMOBILIÈRES */}
        <SectionSliderNewCategories 
          categories={CATEGORIES_IMMOBILIERES}
          heading="Types de propriétés"
          subHeading="Explorez notre sélection de biens immobiliers"
        />

        {/* PROPRIÉTÉS EN VEDETTE */}
        <SectionGridFeaturePlaces cardType="card2" />

        {/* COMMENT ÇA MARCHE */}
        <SectionHowItWork />

        {/* VILLES MISES EN AVANT */}
        <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black/20" />
          <SectionSliderNewCategories
            categories={VILLES_MISES_EN_AVANT}
            categoryCardType="card4"
            itemPerRow={4}
            heading="Propriétés par ville"
            subHeading="Découvrez les biens disponibles dans votre région"
            sliderStyle="style2"
          />
        </div>

        {/* CATÉGORIES DE PROPRIÉTÉS EN GRILLE */}
        <SectionGridCategoryBox />

        {/* EXPLORER PAR TYPE DE PROPRIÉTÉ */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewCategories
            heading="Explorez par type de propriété"
            subHeading="Trouvez le bien qui correspond à vos besoins"
            categoryCardType="card5"
            itemPerRow={5}
            categories={CATEGORIES_IMMOBILIERES}
          />
          {/* BOUTON VOIR TOUTES LES PROPRIÉTÉS */}
          <div className="mt-8 text-center">
            <ViewAllPropertiesButton />
          </div>
        </div>
      </div>
      
      {/* BOUTON RETOUR EN HAUT */}
      <BackToTop />
    </main>
  );
};

export default PageHome;