import React, { FC } from "react";
import imagePng from "@/images/hero-right.png";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
            Propriétés immobilières
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Trouvez la propriété de vos rêves en Côte d'Ivoire. Maisons, appartements, villas et terrains à vendre ou à louer.
          </span>
          <ButtonPrimary href="/listing-real-estate" sizeClass="px-5 py-4 sm:px-7">
            Découvrir nos propriétés
          </ButtonPrimary>
        </div>
        <div className="flex-grow">
          <Image 
            className="w-full rounded-2xl shadow-2xl" 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop" 
            alt="Villa moderne de luxe en Côte d'Ivoire - Architecture contemporaine à Abidjan" 
            priority 
            width={600}
            height={400}
          />
        </div>
      </div>

      <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;