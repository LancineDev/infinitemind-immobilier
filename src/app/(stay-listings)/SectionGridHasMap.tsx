"use client";

import React, { FC, useEffect, useState } from "react";
import AnyReactComponent from "@/components/AnyReactComponent/AnyReactComponent";
// import GoogleMapReact from "google-map-react"; // Désactivé pour éviter les erreurs
import { DEMO_PROPERTY_LISTINGS } from "@/data/listings";
import ButtonClose from "@/shared/ButtonClose";
import Checkbox from "@/shared/Checkbox";
import Pagination from "@/shared/Pagination";
import TabFilters from "./TabFilters";
import Heading2 from "@/shared/Heading2";
import PropertyCard2 from "@/components/PropertyCard2";
import { useSearchParams } from "next/navigation";

const DEMO_STAYS = DEMO_PROPERTY_LISTINGS.filter((_, i) => i < 12);
export interface SectionGridHasMapProps {}

const SectionGridHasMap: FC<SectionGridHasMapProps> = () => {
  const searchParams = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState(DEMO_STAYS);
  const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);
  const [showFullMapFixed, setShowFullMapFixed] = useState(false);
  const [groupedProperties, setGroupedProperties] = useState<Record<string, typeof DEMO_STAYS>>({});
  const [typeOrder, setTypeOrder] = useState<string[]>(['Villa', 'Appartement', 'Maison', 'Terrain', 'Local commercial']);

  // Filtrer les propriétés selon les paramètres URL
  useEffect(() => {
    const type = searchParams.get('type');
    const city = searchParams.get('city');
    
    let filtered = DEMO_STAYS;
    
    // Filtrer par type
    if (type) {
      filtered = filtered.filter(property => 
        property.listingCategory?.name.toLowerCase() === type.toLowerCase()
      );
    }
    
    // Filtrer par ville
    if (city) {
      filtered = filtered.filter(property => 
        property.address.toLowerCase().includes(city.toLowerCase()) ||
        city.toLowerCase().includes(property.address.toLowerCase())
      );
    }
    
    // Trier les propriétés : le type sélectionné en premier, puis les autres
    const sortedFiltered = [...filtered].sort((a, b) => {
      // Si un type est sélectionné
      if (type) {
        // Priorité 1: Les propriétés du type sélectionné
        const aIsSelectedType = a.listingCategory?.name.toLowerCase() === type.toLowerCase();
        const bIsSelectedType = b.listingCategory?.name.toLowerCase() === type.toLowerCase();
        
        if (aIsSelectedType && !bIsSelectedType) return -1;
        if (!aIsSelectedType && bIsSelectedType) return 1;
      }
      
      // Priorité 2: Ordre alphabétique par type
      const aType = a.listingCategory?.name || '';
      const bType = b.listingCategory?.name || '';
      return aType.localeCompare(bType);
    });

    // Regrouper les propriétés par type
    const groupedProperties = sortedFiltered.reduce((groups, property) => {
      const type = property.listingCategory?.name || 'Autre';
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(property);
      return groups;
    }, {} as Record<string, typeof sortedFiltered>);

    // Ordre des types pour l'affichage
    const typeOrder = ['Villa', 'Appartement', 'Maison', 'Terrain', 'Local commercial'];
    
    setFilteredProperties(sortedFiltered);
    setGroupedProperties(groupedProperties);
    setTypeOrder(typeOrder);
  }, [searchParams]);

  return (
    <div>
      <div className="relative flex min-h-screen">
        {/* CARDSSSS */}
        <div className="min-h-screen w-full xl:w-[60%] 2xl:w-[60%] max-w-[1184px] flex-shrink-0 xl:px-8 ">
          <Heading2 className="!mb-8" />
          <div className="mb-8 lg:mb-11">
            <TabFilters />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 2xl:gap-x-6 gap-y-8">
            {filteredProperties.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setCurrentHoverID((_) => item.id)}
                onMouseLeave={() => setCurrentHoverID((_) => -1)}
              >
                <PropertyCard2 data={item} />
              </div>
            ))}
          </div>
          
          {/* Grid des propriétés groupées par type */}
          <div className="space-y-12 mt-12">
            {typeOrder.map((type) => {
              const properties = groupedProperties[type];
              if (!properties || properties.length === 0) return null;
              
              return (
                <div key={type} className="space-y-6">
                  {/* En-tête de section */}
                  <div className="flex items-center space-x-3 border-b border-gray-200 dark:border-gray-700 pb-3">
                    <div className="w-2 h-8 bg-primary-500 rounded-full"></div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      {type} ({properties.length})
                    </h2>
                  </div>
                  
                  {/* Grid des propriétés de ce type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 2xl:gap-x-6 gap-y-8">
                    {properties.map((property) => (
                      <div
                        key={property.id}
                        onMouseEnter={() => setCurrentHoverID((_) => property.id)}
                        onMouseLeave={() => setCurrentHoverID((_) => -1)}
                      >
                        <PropertyCard2 data={property} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Message si aucun résultat */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 dark:text-gray-400 mb-4">
                Aucune propriété trouvée pour vos critères
              </div>
            </div>
          )}
          <div className="flex mt-16 justify-center items-center">
            <Pagination />
          </div>
        </div>

        {!showFullMapFixed && (
          <div
            className={`flex xl:hidden items-center justify-center fixed bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-neutral-900 text-white shadow-2xl rounded-full z-30  space-x-3 text-sm cursor-pointer`}
            onClick={() => setShowFullMapFixed(true)}
          >
            <i className="text-lg las la-map"></i>
            <span>Afficher la carte</span>
          </div>
        )}

        {/* MAPPPPP */}
        <div
          className={`xl:flex-1 xl:static xl:block ${
            showFullMapFixed ? "fixed inset-0 z-50" : "hidden"
          }`}
        >
          {showFullMapFixed && (
            <ButtonClose
              onClick={() => setShowFullMapFixed(false)}
              className="bg-white absolute z-50 left-3 top-3 shadow-lg rounded-xl w-10 h-10"
            />
          )}

          {/* MAP SECTION - Placeholder pour éviter les erreurs Google Maps */}
          <div className="hidden xl:block flex-shrink-0 xl:w-[40%] 2xl:w-[40%]">
            <div className="sticky top-28 h-screen bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden">
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-neutral-500 dark:text-neutral-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
                    Carte des propriétés
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    La carte interactive sera bientôt disponible
                  </p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">
                    {filteredProperties.length} propriété{filteredProperties.length > 1 ? 's' : ''} trouvée{filteredProperties.length > 1 ? 's' : ''}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionGridHasMap;
