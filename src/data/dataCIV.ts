// Données principales pour l'immobilier en Côte d'Ivoire

export const villes = [
  "Abidjan",
  "Bouaké", 
  "Yamoussoukro",
  "San Pedro",
  "Daloa"
];

export const communes = {
  Abidjan: ["Cocody", "Yopougon", "Marcory", "Bingerville", "Plateau"],
  Bouaké: ["Air France", "Koko", "Dar Es Salam"],
  Yamoussoukro: ["Habitat", "Morofé", "Kossou"],
  SanPedro: ["Assinie", "Grand-Béréby"],
  Daloa: ["Zone 1", "Zone 2"]
};

export const typesBien = [
  "Villa",
  "Appartement", 
  "Studio",
  "Maison basse",
  "Duplex",
  "Terrain"
];

export const typesProprietes = [
  "Villa",
  "Appartement",
  "Maison",
  "Terrain",
  "Local commercial"
];

// Fonctions utilitaires pour les filtres
export const getCommunesByVille = (ville: string) => {
  return communes[ville as keyof typeof communes] || [];
};

export const getAllCommunes = () => {
  return Object.values(communes).flat();
};

export const isCommuneInVille = (commune: string, ville: string) => {
  const communesDeLaVille = getCommunesByVille(ville);
  return communesDeLaVille.includes(commune);
};
