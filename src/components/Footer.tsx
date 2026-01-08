"use client";

import Logo from "@/shared/Logo";
import { CustomLink } from "@/data/types";
import React from "react";
import FooterNav from "./FooterNav";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

// Simple site menu for real estate
const siteMenu: CustomLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/listings", label: "Biens immobiliers" },
  { href: "/add-listing-protected", label: "Ajouter une annonce" },
  { href: "/agents", label: "Page agent" },
  { href: "https://wa.me/2250712129409", label: "Nous contacter (WhatsApp)" },
];

// Sample top agents (Top 10 du mois) — content immobilier CI
const TOP_AGENTS = [
  { id: 1, name: "A. Kouassi", city: "Abidjan", rating: 4.9 },
  { id: 2, name: "M. Traoré", city: "Cocody", rating: 4.8 },
  { id: 3, name: "S. Koffi", city: "Plateau", rating: 4.8 },
  { id: 4, name: "R. Yao", city: "Yopougon", rating: 4.7 },
  { id: 5, name: "L. N'Dri", city: "Marcory", rating: 4.7 },
  { id: 6, name: "F. Zadi", city: "Abidjan", rating: 4.6 },
  { id: 7, name: "C. Ouattara", city: "Cocody", rating: 4.6 },
  { id: 8, name: "D. Mensah", city: "Marcory", rating: 4.5 },
  { id: 9, name: "E. Kone", city: "Plateau", rating: 4.5 },
  { id: 10, name: "G. Coulibaly", city: "Yopougon", rating: 4.4 },
];

const Footer: React.FC = () => {
  const wa = process?.env?.NEXT_PUBLIC_WHATSAPP_DEFAULT || "+2250712129409";
  const waDigits = wa.toString().replace(/\D/g, "");
  const waUrl = `https://wa.me/${waDigits}?text=${encodeURIComponent(
    "Bonjour, je suis intéressé par un bien immobilier. Pouvez-vous me contacter ?"
  )}`;

  const renderAgent = (agent: any, index: number) => {
    const avatar = agent.name.split(" ")[0].charAt(0);
    return (
      <div key={index} className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-sm font-semibold">
          {avatar}
        </div>
        <div className="flex-1 text-sm">
          <div className="font-medium">{agent.name}</div>
          <div className="text-neutral-500 text-xs">{agent.city} · Côte d’Ivoire</div>
        </div>
        <div className="text-sm font-semibold">{agent.rating}</div>
      </div>
    );
  };

  return (
    <>
      <FooterNav />

      <div className="nc-Footer relative py-16 lg:py-20 border-t border-neutral-200 dark:border-neutral-700">
        <div className="container grid grid-cols-1 gap-y-8 gap-x-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-10 ">
          {/* Logo + Contact */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
              Plateforme immobilière dédiée à la Côte d’Ivoire. Trouvez, publiez et contactez facilement des propriétaires et agents.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm"
            >
              Contact WhatsApp : +225 07 12 12 94 09
            </a>
          </div>

          {/* Top agents */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-lg font-semibold">Nos meilleurs agents – Top 10 du mois</h3>
            <p className="text-sm text-neutral-500 mt-1">Classement basé sur les avis clients et la qualité des biens proposés</p>

            <div className="mt-4 space-y-3">
              {TOP_AGENTS.slice(0, 5).map(renderAgent)}
            </div>

            <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <a href="/agents" className="inline-flex items-center justify-center px-4 py-2 border rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Voir plus</a>
              <a href="/agents/signup" className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition-colors">Devenir agent</a>
            </div>
          </div>

          {/* Simple menu */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold">Menu</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {siteMenu.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-neutral-700 dark:text-neutral-300 hover:underline">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
