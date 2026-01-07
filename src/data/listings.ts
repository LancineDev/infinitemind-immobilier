import __stayListing from "./jsons/__stayListing.json";
import {
  DEMO_STAY_CATEGORIES,
} from "./taxonomies";
import { PropertyDataType } from "./types";
import { DEMO_AUTHORS } from "./authors";
import { Route } from "@/routers/types";

// Map property types based on index (simple mapping - can be improved later)
const propertyTypes: PropertyDataType["propertyType"][] = ["house", "apartment", "villa", "townhouse", "land", "commercial"];

const DEMO_PROPERTY_LISTINGS = __stayListing.map((post, index): PropertyDataType => {
  //  ##########  GET CATEGORY BY CAT ID ######## //
  const category = DEMO_STAY_CATEGORIES.filter(
    (taxonomy) => taxonomy.id === post.listingCategoryId
  )[0];

  const propertyType = propertyTypes[index % propertyTypes.length];

  return {
    ...post,
    id: `propertyListing_${index}_`,
    saleOff: !index ? "-20% today" : post.saleOff,
    isAds: !index ? true : post.isAds,
    author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
    listingCategory: category,
    href: post.href as Route,
    propertyType: propertyType,
    squareFootage: (post.bedrooms * 200) + (post.bathrooms * 50) + Math.floor(Math.random() * 500), // Estimate square footage
  };
});

// Export DEMO_STAY_LISTINGS as alias to DEMO_PROPERTY_LISTINGS for backward compatibility during migration
export const DEMO_STAY_LISTINGS = DEMO_PROPERTY_LISTINGS;

export { DEMO_PROPERTY_LISTINGS };
