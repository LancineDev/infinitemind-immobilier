import React from "react";
import { SHEETS_CSV_URL } from "@/lib/config";
import { parseCSV } from "@/lib/csv";
import PropertyCard from "@/components/PropertyCard";
import { PropertyDataType } from "@/data/types";
import { DEMO_STAY_LISTINGS } from "@/data/listings";

async function fetchSheetData(): Promise<PropertyDataType[]> {
  try {
    if (!SHEETS_CSV_URL) throw new Error("no sheet url");
    const res = await fetch(SHEETS_CSV_URL);
    if (!res.ok) throw new Error("Failed to fetch sheet");
    const text = await res.text();
    const rows = parseCSV(text);
    // Expected sheet columns: title,city,district,type,price,description,phone,images,createdAt
    const out: PropertyDataType[] = rows.map((r, i) => {
      const images = (r.images || "").split(";").join(",").split(",").map((s: string) => s.trim()).filter(Boolean);
      const title = r.title || `Propriété ${i + 1}`;
      const city = r.city || "";
      const district = r.district || "";
      return {
        id: `sheet_${i}`,
        author: {
          id: "owner",
          firstName: "Propriétaire",
          lastName: "",
          displayName: "Propriétaire",
          avatar: "",
          count: 0,
          desc: "",
          jobName: "",
          href: "/",
        },
        date: r.createdAt || new Date().toISOString(),
        href: "/listing-stay-detail",
        title,
        featuredImage: images[0] || "",
        commentCount: 0,
        viewCount: 0,
        address: `${city}${district ? ", " + district : ""}`,
        reviewStart: 0,
        reviewCount: 0,
        like: false,
        galleryImgs: images,
        price: r.price || "",
        listingCategory: { id: city || "0", name: city || "Autre", href: "/", taxonomy: "category" },
        propertyType: (r.type || "house") as any,
        bedrooms: 0,
        bathrooms: 0,
        saleOff: null,
        isAds: false,
        map: { lat: 0, lng: 0 },
      } as PropertyDataType;
    });
    return out;
  } catch (e) {
    return DEMO_STAY_LISTINGS as PropertyDataType[];
  }
}

export default async function PageListingStay() {
  const listings = await fetchSheetData();
  return (
    <main className="container py-12">
      <h1 className="text-2xl font-semibold mb-6">Liste des propriétés</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((l) => (
          <PropertyCard key={String(l.id)} data={l} />
        ))}
      </div>
    </main>
  );
}
