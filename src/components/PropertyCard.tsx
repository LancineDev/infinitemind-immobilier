import React, { FC } from "react";
import { DEMO_PROPERTY_LISTINGS } from "@/data/listings";
import { PropertyDataType } from "@/data/types";
import StartRating from "@/components/StartRating";
import BtnLikeIcon from "@/components/BtnLikeIcon";
import SaleOffBadge from "@/components/SaleOffBadge";
import Badge from "@/shared/Badge";
import Link from "next/link";
import GallerySlider from "./GallerySlider";

export interface PropertyCardProps {
  className?: string;
  data?: PropertyDataType;
  size?: "default" | "small";
}

const DEMO_DATA = DEMO_PROPERTY_LISTINGS[0];

const PropertyCard: FC<PropertyCardProps> = ({
  size = "default",
  className = "",
  data = DEMO_DATA,
}) => {
  const {
    galleryImgs,
    listingCategory,
    address,
    title,
    bedrooms,
    href,
    like,
    saleOff,
    isAds,
    price,
    reviewStart,
    reviewCount,
    id,
  } = data as PropertyDataType;

  const contactPhone = (data as any)?.contactPhone;

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full">
        <GallerySlider
          uniqueID={`PropertyCard_${id}`}
          ratioClass="aspect-w-4 aspect-h-3 "
          galleryImgs={galleryImgs}
          href={href}
          galleryClass={size === "default" ? undefined : ""}
        />
        <BtnLikeIcon isLiked={like} className="absolute right-3 top-3 z-[1]" />
        {saleOff && <SaleOffBadge className="absolute left-3 top-3" />}
      </div>
    );
  };

  const renderContent = () => {
    // Price handling: if price contains USD symbol, convert to XOF using a conservative default rate (1 USD = 600 XOF).
    const usdToXof = 600;
    let displayPrice = price;
    try {
      if (typeof price === "string" && price.includes("$")) {
        const num = parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
        displayPrice = `${num > 0 ? Math.round(num * usdToXof).toLocaleString("fr-FR") : 0} FCFA`;
      } else if (typeof price === "string" && /fcfa/i.test(price)) {
        displayPrice = price;
      } else if (typeof price === "string") {
        displayPrice = `${price} FCFA`;
      }
    } catch (e) {
      displayPrice = price;
    }

    // WhatsApp number fallback: listing's contactPhone -> env NEXT_PUBLIC_WHATSAPP_DEFAULT -> fallback provided number
    const envPhone = process?.env?.NEXT_PUBLIC_WHATSAPP_DEFAULT;
    const rawPhone = contactPhone || envPhone || "+2250712129409";
    let digits = (rawPhone || "").toString().replace(/\D/g, "");
    if (/^0/.test(digits)) digits = `225${digits.replace(/^0+/, "")}`;
    if (!/^225/.test(digits) && digits.length <= 8) digits = `225${digits}`;
    const waText = `Bonjour, je suis intéressé par \"${title}\" (ID:${id}). Pouvez-vous me contacter ?`;
    const waLink = `https://wa.me/${digits}?text=${encodeURIComponent(waText)}`;
    return (
      <div className={size === "default" ? "p-4 space-y-4" : "p-3 space-y-1"}>
        <div className={size === "default" ? "space-y-2" : "space-y-1"}>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {listingCategory.name} · {bedrooms} {bedrooms === 1 ? 'chambre' : 'chambres'}
          </span>
          <div className="flex items-center space-x-2">
            {isAds && <Badge name="ADS" color="green" />}
            <h2
              className={`font-semibold capitalize text-neutral-900 dark:text-white ${
                size === "default" ? "text-base" : "text-base"
              }`}
            >
              <span className="line-clamp-1">{title}</span>
            </h2>
          </div>
          <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-1.5">
            {size === "default" && (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
            <span className="">{address}</span>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
        <div className="flex justify-between items-center">
          <span className="text-base font-semibold">
            {displayPrice}
            {` `}
            {size === "default" && (
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                {/* localized label */}
                Prix
              </span>
            )}
          </span>
          {!!reviewStart && (
            <StartRating reviewCount={reviewCount} point={reviewStart} />
          )}
        </div>
        <div className="pt-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm"
            aria-label={`Contacter ${title} via WhatsApp`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Contacter via WhatsApp</span>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-PropertyCard group relative bg-white dark:bg-neutral-900 ${
        size === "default"
          ? "border border-neutral-100 dark:border-neutral-800 "
          : ""
      } rounded-2xl overflow-hidden hover:shadow-xl transition-shadow ${className}`}
      data-nc-id="PropertyCard"
    >
      {renderSliderGallery()}
      <div className="p-0">
        <div className={size === "default" ? "p-4" : "p-3"}>{renderContent()}</div>
      </div>
    </div>
  );
};

export default PropertyCard;

