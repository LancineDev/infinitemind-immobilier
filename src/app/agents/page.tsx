import React from "react";
import { DEMO_AUTHORS } from "@/data/authors";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

// Agents immobiliers ivoiriens
const IVORIAN_AGENTS = [
  {
    id: 1,
    name: "A. Kouassi",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    city: "Abidjan",
    country: "Côte d'Ivoire",
    rating: 4.9,
    properties: 45,
    experience: "8 ans",
    specialties: ["Villas", "Appartements", "Terrains"],
    phone: "+2250712129409",
    email: "a.kouassi@immobilier.ci",
    bio: "Agent immobilier spécialisé dans les biens de luxe à Abidjan et ses environs."
  },
  {
    id: 2,
    name: "M. Traoré",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    city: "Cocody",
    country: "Côte d'Ivoire",
    rating: 4.8,
    properties: 38,
    experience: "6 ans",
    specialties: ["Appartements", "Maisons", "Commercial"],
    phone: "+2250712129409",
    email: "m.traore@immobilier.ci",
    bio: "Expert en transactions immobilières résidentielles et commerciales à Cocody."
  },
  {
    id: 3,
    name: "S. Koffi",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    city: "Plateau",
    country: "Côte d'Ivoire",
    rating: 4.8,
    properties: 52,
    experience: "10 ans",
    specialties: ["Bureaux", "Commerce", "Investissement"],
    phone: "+2250712129409",
    email: "s.koffi@immobilier.ci",
    bio: "Spécialiste en biens commerciaux et investissements immobiliers au Plateau."
  },
  {
    id: 4,
    name: "R. Yao",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    city: "Yopougon",
    country: "Côte d'Ivoire",
    rating: 4.7,
    properties: 31,
    experience: "5 ans",
    specialties: ["Maisons", "Villas", "Terrains"],
    phone: "+2250712129409",
    email: "r.yao@immobilier.ci",
    bio: "Agent dédié aux transactions immobilières résidentielles à Yopougon."
  },
  {
    id: 5,
    name: "L. N'Dri",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    city: "Marcory",
    country: "Côte d'Ivoire",
    rating: 4.7,
    properties: 28,
    experience: "4 ans",
    specialties: ["Appartements", "Studios", "Colocations"],
    phone: "+2250712129409",
    email: "l.ndri@immobilier.ci",
    bio: "Expert en locations et colocations dans le quartier de Marcory."
  },
  {
    id: 6,
    name: "F. Zadi",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    city: "Abidjan",
    country: "Côte d'Ivoire",
    rating: 4.6,
    properties: 35,
    experience: "7 ans",
    specialties: ["Villas", "Maisons", "Investissement"],
    phone: "+2250712129409",
    email: "f.zadi@immobilier.ci",
    bio: "Agent immobilier expérimenté pour les projets d'investissement à Abidjan."
  },
  {
    id: 7,
    name: "C. Ouattara",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    city: "Cocody",
    country: "Côte d'Ivoire",
    rating: 4.6,
    properties: 29,
    experience: "5 ans",
    specialties: ["Appartements", "Maisons", "Commercial"],
    phone: "+2250712129409",
    email: "c.ouattara@immobilier.ci",
    bio: "Spécialiste en transactions résidentielles et commerciales à Cocody."
  },
  {
    id: 8,
    name: "D. Mensah",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    city: "Marcory",
    country: "Côte d'Ivoire",
    rating: 4.5,
    properties: 24,
    experience: "3 ans",
    specialties: ["Studios", "Appartements", "Locations"],
    phone: "+2250712129409",
    email: "d.mensah@immobilier.ci",
    bio: "Agent spécialisé dans les locations courtes et longues durées à Marcory."
  },
  {
    id: 9,
    name: "E. Kone",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    city: "Plateau",
    country: "Côte d'Ivoire",
    rating: 4.5,
    properties: 27,
    experience: "4 ans",
    specialties: ["Bureaux", "Commerce", "Services"],
    phone: "+2250712129409",
    email: "e.kone@immobilier.ci",
    bio: "Expert en biens commerciaux et de services au Plateau d'Abidjan."
  },
  {
    id: 10,
    name: "G. Coulibaly",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    city: "Yopougon",
    country: "Côte d'Ivoire",
    rating: 4.4,
    properties: 18,
    experience: "2 ans",
    specialties: ["Maisons", "Terrains", "Nouveaux projets"],
    phone: "+2250712129409",
    email: "g.coulibaly@immobilier.ci",
    bio: "Jeune agent dynamique spécialisé dans les nouveaux projets immobiliers."
  }
];

const AgentCard = ({ agent }: { agent: typeof IVORIAN_AGENTS[0] }) => {
  const waLink = `https://wa.me/2250712129409?text=${encodeURIComponent(
    `Bonjour, je suis intéressé par les services de ${agent.name}. Pouvez-vous me contacter ?`
  )}`;

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img
              src={agent.avatar}
              alt={agent.name}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
              {agent.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {agent.city} · {agent.country}
            </p>
            <div className="flex items-center mt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIconSolid
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(agent.rating)
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {agent.rating}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">{agent.properties}</span>
            <span className="ml-1">propriétés</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">{agent.experience}</span>
            <span className="ml-1">d'expérience</span>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {agent.specialties.slice(0, 3).map((specialty, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {agent.bio}
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-medium transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.373-.05-.572-.099-.197-.944-2.313-1.299-3.165-.355-.851-.711-.736-.974-.752-.252-.015-.541-.015-.83-.015-.288 0-.756.109-1.153.547-.398.438-1.518 1.48-1.518 3.614 0 2.134 1.558 4.196 1.777 4.487.219.291 3.07 4.687 7.433 6.574 1.039.447 1.851.714 2.484.915.1.032.2.062.298.089.735.236 1.402.202 1.933.123.59-.087 1.758-.718 2.006-1.411.248-.693.248-1.286.173-1.411-.074-.124-.272-.198-.57-.347m-7.438 9.878h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0010.052 0C4.495 0 .028 4.463.028 9.995c0 1.76.433 3.46 1.258 4.986L0 24l9.203-2.415a11.94 11.94 0 005.732 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>
          <a
            href={`mailto:${agent.email}`}
            className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default function AgentsPage() {
  return (
    <div className="nc-PageAgents overflow-hidden">
      <div className="container py-16 lg:py-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nos Agents Immobiliers
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Découvrez nos agents immobiliers expérimentés dans toute la Côte d'Ivoire. 
            Chaque agent est spécialisé dans son secteur et prêt à vous aider à trouver la propriété de vos rêves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonPrimary href="/add-listing-protected">
              Ajouter une annonce
            </ButtonPrimary>
            <a
              href="/agents/signup"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Devenir agent
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Agents actifs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">300+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Propriétés vendues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">4.8</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Note moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">5+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Ans d'expérience</div>
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IVORIAN_AGENTS.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Vous êtes agent immobilier ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Rejoignez notre réseau d'agents immobiliers en Côte d'Ivoire et bénéficiez d'une 
            visibilité accrue, d'outils professionnels et d'un accès à un large portefeuille de clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonPrimary href="/agents/signup">
              Postuler maintenant
            </ButtonPrimary>
            <a
              href="mailto:contact@immobilier.ci"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
