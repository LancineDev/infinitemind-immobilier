import React, { useState, useEffect } from 'react';

// Données locales pour les filtres
const villes = [
  "Abidjan",
  "Bouaké",
  "Yamoussoukro",
  "San Pedro",
  "Daloa"
];

const communes = {
  Abidjan: ["Cocody", "Yopougon", "Marcory", "Bingerville", "Plateau"],
  Bouaké: ["Air France", "Koko", "Dar Es Salam"],
  Yamoussoukro: ["Habitat", "Morofé", "Kossou"],
  SanPedro: ["Assinie", "Grand-Béréby"],
  Daloa: ["Zone 1", "Zone 2"]
};

const typesBien = [
  "Villa",
  "Appartement",
  "Studio",
  "Maison basse",
  "Duplex",
  "Terrain"
];

// Fonctions utilitaires pour les filtres
const getCommunesByVille = (ville: string): string[] => {
  return communes[ville as keyof typeof communes] || [];
};

const getAllCommunes = (): string[] => {
  return Object.values(communes).flat();
};

const isCommuneInVille = (commune: string, ville: string): boolean => {
  const communesDeLaVille = getCommunesByVille(ville);
  return communesDeLaVille.includes(commune);
};

interface FilterSelectsProps {
  onFilterChange?: (filters: {
    ville: string;
    commune: string;
    typeBien: string;
  }) => void;
}

const FilterSelects: React.FC<FilterSelectsProps> = ({ onFilterChange }) => {
  const [selectedVille, setSelectedVille] = useState('');
  const [selectedCommune, setSelectedCommune] = useState('');
  const [selectedTypeBien, setSelectedTypeBien] = useState('');
  const [communesDisponibles, setCommunesDisponibles] = useState<string[]>([]);

  // Mettre à jour les communes quand la ville change
  useEffect(() => {
    if (selectedVille) {
      const communesDeLaVille = getCommunesByVille(selectedVille);
      setCommunesDisponibles(communesDeLaVille);
      setSelectedCommune(''); // Réinitialiser la commune
    } else {
      setCommunesDisponibles([]);
      setSelectedCommune('');
    }
  }, [selectedVille]);

  // Notifier le parent quand les filtres changent
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({
        ville: selectedVille,
        commune: selectedCommune,
        typeBien: selectedTypeBien
      });
    }
  }, [selectedVille, selectedCommune, selectedTypeBien, onFilterChange]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
      {/* Sélecteur de ville */}
      <div className="space-y-2">
        <label htmlFor="ville" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Ville
        </label>
        <select
          id="ville"
          value={selectedVille}
          onChange={(e) => setSelectedVille(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:text-white"
        >
          <option value="">Sélectionner une ville</option>
          {villes.map((ville) => (
            <option key={ville} value={ville}>
              {ville}
            </option>
          ))}
        </select>
      </div>

      {/* Sélecteur de commune */}
      <div className="space-y-2">
        <label htmlFor="commune" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Commune
        </label>
        <select
          id="commune"
          value={selectedCommune}
          onChange={(e) => setSelectedCommune(e.target.value)}
          disabled={!selectedVille}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">
            {selectedVille ? 'Sélectionner une commune' : 'D\'abord sélectionner une ville'}
          </option>
          {communesDisponibles.map((commune) => (
            <option key={commune} value={commune}>
              {commune}
            </option>
          ))}
        </select>
      </div>

      {/* Sélecteur de type de bien */}
      <div className="space-y-2">
        <label htmlFor="typeBien" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Type de bien
        </label>
        <select
          id="typeBien"
          value={selectedTypeBien}
          onChange={(e) => setSelectedTypeBien(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:text-white"
        >
          <option value="">Sélectionner un type</option>
          {typesBien.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSelects;
