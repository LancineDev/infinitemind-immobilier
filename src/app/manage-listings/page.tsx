"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LockClosedIcon, PlusIcon, PencilIcon, TrashIcon, EyeIcon, MagnifyingGlassIcon, Squares2X2Icon, TableCellsIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { DEMO_PROPERTY_LISTINGS } from "@/data/listings";

interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  type: string;
  status: "active" | "inactive" | "pending";
  createdAt: string;
  views: number;
  address?: string;
  bedrooms?: number;
  bathrooms?: number;
  listingCategory?: {
    id: string | number;
    name: string;
  };
}

export default function ManageListings() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "inactive" | "pending">("all");
  const router = useRouter();

  useEffect(() => {
    // Vérifier l'authentification
    const authCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('addListingAuth='));
    if (authCookie) {
      setIsAuthenticated(true);
      loadProperties();
    }
  }, []);

  const loadProperties = () => {
    // Charger les propriétés depuis localStorage ou API
    const savedProperties = localStorage.getItem('properties');
    if (savedProperties) {
      setProperties(JSON.parse(savedProperties));
    } else {
      // Transformer les DEMO_PROPERTY_LISTINGS en format de gestion
      const managedProperties: Property[] = DEMO_PROPERTY_LISTINGS.map((property, index) => ({
        id: String(property.id),
        title: property.title,
        price: property.price,
        location: property.address,
        type: property.listingCategory?.name || 'Non défini',
        status: index % 3 === 0 ? "active" : index % 3 === 1 ? "pending" : "inactive",
        createdAt: new Date().toISOString().split('T')[0],
        views: Math.floor(Math.random() * 1000),
        address: property.address,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        listingCategory: property.listingCategory
      }));
      
      setProperties(managedProperties);
      // Sauvegarder dans localStorage pour la persistance
      localStorage.setItem('properties', JSON.stringify(managedProperties));
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    // Simuler un délai pour l'effet de chargement
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const correctPassword = process.env.NEXT_PUBLIC_ADD_LISTING_PASSWORD || "infintemind7";
    
    if (password === correctPassword) {
      document.cookie = 'addListingAuth=true; path=/; max-age=86400';
      setIsAuthenticated(true);
      loadProperties();
    } else {
      setError("Mot de passe incorrect");
      setPassword("");
    }
    
    setIsLoading(false);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette annonce ?")) {
      const updatedProperties = properties.filter(p => p.id !== id);
      setProperties(updatedProperties);
      localStorage.setItem('properties', JSON.stringify(updatedProperties));
    }
  };

  const handleStatusChange = (id: string, newStatus: "active" | "inactive") => {
    const updatedProperties = properties.map(p => 
      p.id === id ? { ...p, status: newStatus } : p
    );
    setProperties(updatedProperties);
    localStorage.setItem('properties', JSON.stringify(updatedProperties));
  };

  // Filtrer les propriétés
  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === "all" || property.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <LockClosedIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Gestion des Annonces
              </h1>
              <p className="text-blue-100 text-sm">
                Zone réservée aux administrateurs
              </p>
            </div>

            <div className="px-8 py-8">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Accès à la gestion
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Entrez votre mot de passe pour accéder à la gestion des annonces
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      className="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-all duration-200"
                      placeholder="•••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isLoading}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockClosedIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading || !password}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Vérification en cours...
                    </span>
                  ) : (
                    "Accéder à la gestion"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Gestion des Annonces
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Ajoutez, modifiez ou supprimez vos annonces immobilières
          </p>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {properties.length} annonce{properties.length > 1 ? 's' : ''} trouvée{properties.length > 1 ? 's' : ''}
            {filteredProperties.length !== properties.length && ` (${filteredProperties.length} affichée${filteredProperties.length > 1 ? 's' : ''})`}
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/add-listing"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <PlusIcon className="w-4 h-4 mr-2" />
              Ajouter une annonce
            </Link>
          </div>
        </div>

        {/* Filtres et contrôles */}
        <div className="mb-6 bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Recherche */}
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher une annonce..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                />
              </div>
            </div>

            {/* Filtre par statut */}
            <div className="lg:w-48">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
              >
                <option value="all">Tous les statuts</option>
                <option value="active">Actives</option>
                <option value="inactive">Inactives</option>
                <option value="pending">En attente</option>
              </select>
            </div>

            {/* Changement de vue */}
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
              <button
                onClick={() => setViewMode("table")}
                className={`p-2 rounded-l-lg ${viewMode === "table" ? "bg-blue-600 text-white" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700"}`}
                title="Vue tableau"
              >
                <TableCellsIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-r-lg ${viewMode === "grid" ? "bg-blue-600 text-white" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700"}`}
                title="Vue grille"
              >
                <Squares2X2Icon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Vue tableau */}
        {viewMode === "table" && (
          <div className="bg-white dark:bg-neutral-800 shadow-sm rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50 dark:bg-neutral-900">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Titre
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Prix
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Localisation
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Vues
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-neutral-800 divide-y divide-gray-200 dark:divide-neutral-700">
                  {filteredProperties.map((property) => (
                    <tr key={property.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {property.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">
                          {property.price}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">
                          {property.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">
                          {property.type}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          property.status === 'active' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : property.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}>
                          {property.status === 'active' ? 'Active' : property.status === 'pending' ? 'En attente' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">
                          {property.views}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleStatusChange(property.id, property.status === 'active' ? 'inactive' : 'active')}
                            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                            title={property.status === 'active' ? 'Désactiver' : 'Activer'}
                          >
                            <EyeIcon className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => router.push(`/add-listing?edit=${property.id}`)}
                            className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                            title="Modifier"
                          >
                            <PencilIcon className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(property.id)}
                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                            title="Supprimer"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Vue grille */}
        {viewMode === "grid" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <div key={property.id} className="relative group bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 relative">
                    {/* Status badge */}
                    <div className="absolute top-2 left-2">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        property.status === 'active' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : property.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {property.status === 'active' ? 'Active' : property.status === 'pending' ? 'En attente' : 'Inactive'}
                      </span>
                    </div>

                    {/* Actions overlay */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => handleStatusChange(property.id, property.status === 'active' ? 'inactive' : 'active')}
                          className={`p-2 rounded-lg backdrop-blur-sm ${
                            property.status === 'active' 
                              ? 'bg-green-500/80 text-white hover:bg-green-600/80'
                              : 'bg-gray-500/80 text-white hover:bg-gray-600/80'
                          }`}
                          title={property.status === 'active' ? 'Désactiver' : 'Activer'}
                        >
                          <EyeIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => router.push(`/add-listing?edit=${property.id}`)}
                          className="p-2 bg-blue-500/80 text-white rounded-lg backdrop-blur-sm hover:bg-blue-600/80"
                          title="Modifier"
                        >
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(property.id)}
                          className="p-2 bg-red-500/80 text-white rounded-lg backdrop-blur-sm hover:bg-red-600/80"
                          title="Supprimer"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="text-3xl mb-2">
                          {property.type === 'Villa' ? '🏰' : property.type === 'Appartement' ? '🏢' : property.type === 'Maison' ? '🏡' : '🏗️'}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {property.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {property.title}
                    </h3>
                    
                    <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900 dark:text-white">{property.price}</span>
                      </div>
                      <div className="flex items-center">
                        📍 {property.location}
                      </div>
                      {property.bedrooms && (
                        <div className="flex items-center">
                          🛏️ {property.bedrooms} {property.bedrooms === 1 ? 'chambre' : 'chambres'}
                        </div>
                      )}
                      <div className="flex items-center">
                      👁️ {property.views} vues
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => router.push(`/listing-stay-detail/${property.id}`)}
                        className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Voir l'annonce
                      </button>
                      <button
                        onClick={() => router.push(`/add-listing?edit=${property.id}`)}
                        className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
                      >
                        Modifier
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {filteredProperties.length === 0 && properties.length > 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 dark:text-gray-400 mb-4">
              Aucune annonce ne correspond à vos critères de recherche
            </div>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilterStatus("all");
              }}
              className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {properties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 dark:text-gray-400 mb-4">
              Aucune annonce trouvée
            </div>
            <Link
              href="/add-listing"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <PlusIcon className="w-5 h-5 mr-2" />
              Créer votre première annonce
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
