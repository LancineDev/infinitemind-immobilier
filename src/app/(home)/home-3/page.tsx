import React from "react";
import BackgroundSection from "@/components/BackgroundSection";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox";
import SectionHero3 from "@/app/(server-components)/SectionHero3";
import CardCategory6 from "@/components/CardCategory6";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";

const CATEGORIES_IMMOBILIERES: TaxonomyType[] = [
  {
    id: "1",
    href: "/listings?type=Maison",
    name: "Maisons de luxe",
    taxonomy: "category",
    count: 1245,
    thumbnail:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listings?type=Appartement",
    name: "Appartements modernes",
    taxonomy: "category",
    count: 856,
    thumbnail:
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listings?type=Villa",
    name: "Villas prestige",
    taxonomy: "category",
    count: 623,
    thumbnail:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listings?type=Terrain",
    name: "Terrains à bâtir",
    taxonomy: "category",
    count: 412,
    thumbnail:
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listings?type=Local commercial",
    name: "Propriétés commerciales",
    taxonomy: "category",
    count: 389,
    thumbnail:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome3() {
  return (
    <main className="nc-PageHome3 relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      {/* SECTION HERO */}
      <div className="container px-1 sm:px-4 mb-24 ">
        <SectionHero3 className="" />
      </div>

      <div className="container relative space-y-24 mb-24 ">
        {/* SECTION 1 */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex">
            <CardCategory6 taxonomy={CATEGORIES_IMMOBILIERES[0]} />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 grid grid-rows-2 gap-6">
            <CardCategory6 taxonomy={CATEGORIES_IMMOBILIERES[3]} />
            <CardCategory6 taxonomy={CATEGORIES_IMMOBILIERES[1]} />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex">
            <CardCategory6 taxonomy={CATEGORIES_IMMOBILIERES[4]} />
          </div>
        </div>

        {/* SECTION */}
        <SectionGridCategoryBox />

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridAuthorBox boxCard="box2" />
        </div>

        <SectionGridFeaturePlaces />

      </div>
    </main>
  );
}

export default PageHome3;
