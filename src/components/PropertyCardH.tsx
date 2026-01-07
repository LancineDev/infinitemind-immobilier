import React, { FC } from "react";
import GallerySlider from "@/components/GallerySlider";
import { DEMO_PROPERTY_LISTINGS } from "@/data/listings";
import StartRating from "@/components/StartRating";
import BtnLikeIcon from "@/components/BtnLikeIcon";
import SaleOffBadge from "@/components/SaleOffBadge";
import Badge from "@/shared/Badge";
import { PropertyDataType } from "@/data/types";
import Link from "next/link";

export interface PropertyCardHProps {
  className?: string;
  data?: PropertyDataType;
}

const DEMO_DATA = DEMO_PROPERTY_LISTINGS[0];

// Numéro de téléphone de l'agent
const AGENT_PHONE = "2250712129409";

const formatPriceXOF = (price: any) => {
  try {
    const n = Number(String(price).replace(/[^0-9]/g, ""));
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "XOF",
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    return price;
  }
};

const PropertyCardH: FC<PropertyCardHProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  const {
    galleryImgs,
    title,
    href,
    like,
    saleOff,
    isAds,
    price,
    reviewStart,
    reviewCount,
    id,
  } = data;

  const formattedPrice = formatPriceXOF(price);

  const whatsappUrl = `https://wa.me/${AGENT_PHONE}?text=${encodeURIComponent(
    `Bonjour, je suis intéressé par ce bien immobilier : ${title}. Prix : ${formattedPrice}. Lieu : Abidjan. Merci.`
  )}`;

  return (
    <div
      className={`nc-PropertyCardH group relative bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-700 rounded-3xl overflow-hidden ${className}`}
    >
      {/* CARD LINK */}
      <Link href={href} className="absolute inset-0 z-0"></Link>

      <div className="relative z-10 h-full w-full flex flex-col sm:flex-row sm:items-center">
        {/* IMAGE */}
        <div className="flex-shrink-0 p-3 w-full sm:w-64 relative">
          <GallerySlider
            ratioClass="aspect-w-1 aspect-h-1"
            galleryImgs={galleryImgs}
            className="w-full h-full rounded-2xl overflow-hidden"
            uniqueID={`PropertyCardH_${id}`}
            href={href}
          />
          {saleOff && (
            <SaleOffBadge className="absolute left-5 top-5 !bg-orange-500" />
          )}
        </div>

        {/* CONTENT */}
        <div className="flex-grow p-3 sm:pr-6 flex flex-col items-start">
          <div className="space-y-4 w-full">
            <div className="inline-flex space-x-3">
              <Badge name="4 Network" />
              <Badge name="Family" color="yellow" />
            </div>

            <div className="flex items-center space-x-2">
              {isAds && <Badge name="ADS" color="green" />}
              <h2 className="text-lg font-medium line-clamp-2">{title}</h2>
            </div>

            <div className="w-14 border-b border-neutral-200/80 dark:border-neutral-700"></div>

            <div className="flex w-full justify-between items-end">
              <StartRating reviewCount={reviewCount} point={reviewStart} />
              <span className="px-3 py-1.5 border-2 border-secondary-500 rounded-lg text-sm font-medium text-secondary-500">
                {formattedPrice}
              </span>
            </div>

            {/* WHATSAPP CTA */}
            <div className="w-full flex justify-end pointer-events-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 mr-2"
                >
                  <path d="M20.52 3.48A11.95 11.95 0 0012 0C5.37 0 0 4.96 0 11.08c0 1.95.51 3.86 1.48 5.55L0 24l7.78-2.03A11.96 11.96 0 0012 22c6.63 0 12-4.96 12-10.92 0-2.96-1.09-5.73-3.48-7.6z" />
                </svg>
                Contacter sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <BtnLikeIcon
        isLiked={like}
        className="absolute right-5 top-5 sm:right-3 sm:top-3 z-20"
      />
    </div>
  );
};

export default PropertyCardH;
