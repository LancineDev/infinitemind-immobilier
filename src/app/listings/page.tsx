"use client";

import React, { FC, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { DEMO_PROPERTY_LISTINGS } from "@/data/listings";
import { PropertyDataType } from "@/data/types";
import Pagination from "@/shared/Pagination";
import Heading2 from "@/shared/Heading2";
import PropertyCardH from "@/components/PropertyCardH";
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

export interface ListingsPageProps {}

const ListingsPage: FC<ListingsPageProps> = ({}) => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Gérer les paramètres URL
  useEffect(() => {
    const city = searchParams.get('city');
    const type = searchParams.get('type');
    
    if (city) {
      setSelectedCity(city);
    }
    if (type) {
      setSelectedType(type);
    }
  }, [searchParams]);

  // Filtrer les propriétés
  const filteredProperties = DEMO_PROPERTY_LISTINGS.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Améliorer le filtrage par ville - recherche plus flexible
    const matchesCity = !selectedCity || 
      property.address.toLowerCase().includes(selectedCity.toLowerCase()) ||
      selectedCity.toLowerCase().includes(property.address.toLowerCase());
    
    // Filtrage par type de propriété - utilisation de listingCategory.name qui est plus précis
    const matchesType = !selectedType || 
      property.listingCategory?.name.toLowerCase().includes(selectedType.toLowerCase()) ||
      selectedType.toLowerCase().includes(property.listingCategory?.name.toLowerCase() || "");
    
    const matchesPrice = !priceRange || true; // Simplifié pour l'instant
    
    return matchesSearch && matchesCity && matchesType && matchesPrice;
  });

  // Villes ivoiriennes et communes d'Abidjan
  const ivorianCities = [
    // Communes d'Abidjan
    "Cocody", "Yopougon", "Marcory", "Treichville", 
    "Koumassi", "Plateau", "Abobo", "Port-Bouët", "Attécoubé",
    // Autres villes
    "Yamoussoukro", "Bouaké", "San-Pédro", "Korhogo", 
    "Daloa", "Gagnoa", "Man", "Sassandra", "Divo", "Grand-Bassam"
  ];

  // Types de propriétés disponibles dans les données (basé sur listingCategory.name)
  // Debug: Afficher les types réels disponibles
  const availableTypes = Array.from(new Set(DEMO_PROPERTY_LISTINGS.map(p => p.listingCategory?.name).filter(Boolean)));
  console.log("Types disponibles:", availableTypes);
  
  const propertyTypes = [
    "Villa", "Appartement", "Maison", "Terrain", "Local commercial"
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Propriétés Immobilières
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Découvrez notre sélection de biens immobiliers en Côte d'Ivoire
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Champ de recherche */}
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher une propriété..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                />
              </div>
            </div>

            {/* Bouton filtres mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
              Filtres
            </button>
          </div>

          {/* Filtres */}
          <div className={`mt-4 space-y-4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Filtre ville */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Ville
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                >
                  <option value="">Toutes les villes</option>
                  {ivorianCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtre type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Type de propriété
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                >
                  <option value="">Tous les types</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtre prix */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Fourchette de prix
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                >
                  <option value="">Tous les prix</option>
                  <option value="0-50000000">Moins de 50M FCFA</option>
                  <option value="50000000-100000000">50M - 100M FCFA</option>
                  <option value="100000000-200000000">100M - 200M FCFA</option>
                  <option value="200000000+">Plus de 200M FCFA</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Résultats */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            {filteredProperties.length} propriété{filteredProperties.length > 1 ? 's' : ''} trouvée{filteredProperties.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Grid des propriétés */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {filteredProperties.map((property) => (
            <PropertyCardH key={property.id} data={property} />
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 dark:text-gray-400 mb-4">
              {selectedCity ? (
                <>
                  Aucune propriété trouvée à <strong>{selectedCity}</strong>
                  <br />
                  <span className="text-sm mt-2 block">
                    Essayez avec une autre commune d'Abidjan ou une autre ville comme Yamoussoukro, Bouaké ou San-Pédro
                  </span>
                </>
              ) : (
                "Aucune propriété trouvée pour vos critères"
              )}
            </div>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCity("");
                setSelectedType("");
                setPriceRange("");
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredProperties.length > 0 && (
          <div className="flex justify-center">
            <Pagination />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingsPage;
