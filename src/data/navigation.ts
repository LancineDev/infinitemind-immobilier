import { MegamenuItem, NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { Route } from "@/routers/types";
import __megamenu from "./jsons/__megamenu.json";

const megaMenuDemo: MegamenuItem[] = [
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Entreprise",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/",
      name: i.Company,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Application",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/",
      name: i.AppName,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5059013/pexels-photo-5059013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Ville",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/",
      name: i.City,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5159141/pexels-photo-5159141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Construction",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/",
      name: i.Contruction,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/7473041/pexels-photo-7473041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Country",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/",
      name: i.Country,
    })),
  },
];

const demoChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Réservation en ligne",
  },
  {
    id: ncNanoId(),
    href: "/home-2",
    name: "Immobilier",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/home-3",
    name: "Accueil 3",
    isNew: true,
  },
];

const otherPageChildMenus: NavItemType[] = [
  { id: ncNanoId(), href: "/blog", name: "Page blog" },
  { id: ncNanoId(), href: "/blog/single" as Route, name: "Article blog" },
  { id: ncNanoId(), href: "/about", name: "À propos" },
  { id: ncNanoId(), href: "/contact", name: "Nous contacter" },
  { id: ncNanoId(), href: "/login", name: "Connexion" },
  { id: ncNanoId(), href: "/signup", name: "Inscription" },
];

const templatesChildrenMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/add-listing/1" as Route,
    name: "Ajouter une annonce",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/add-listing/1" as Route,
        name: "Ajouter une annonce 1",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/2" as Route,
        name: "Ajouter une annonce 2",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/3" as Route,
        name: "Ajouter une annonce 3",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/4" as Route,
        name: "Ajouter une annonce 4",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/5" as Route,
        name: "Ajouter une annonce 5",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/6" as Route,
        name: "Ajouter une annonce 6",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/7" as Route,
        name: "Ajouter une annonce 7",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/8" as Route,
        name: "Ajouter une annonce 8",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/9" as Route,
        name: "Ajouter une annonce 9",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/10" as Route,
        name: "Ajouter une annonce 10",
      },
    ],
  },
  //
  { id: ncNanoId(), href: "/author", name: "Page auteur" },
  { id: ncNanoId(), href: "/account", name: "Page compte" },
  //
  {
    id: ncNanoId(),
    href: "/subscription",
    name: "Abonnement",
  },
];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Accueil",
    type: "dropdown",
    children: demoChildMenus,
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Five columns",
    type: "megaMenu",
    megaMenu: megaMenuDemo,
  },
  {
    id: ncNanoId(),
    href: "/listing-stay",
    name: "Pages de listes",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/listing-stay",
        name: "Listes de propriétés",
        type: "dropdown",
        children: [
          { id: ncNanoId(), href: "/listing-stay", name: "Page propriétés" },
          {
            id: ncNanoId(),
            href: "/listing-stay-map",
            name: "Page propriétés (carte)",
          },
          { id: ncNanoId(), href: "/listing-stay-detail", name: "Détail propriété" },
        ],
      },

      //
      {
        id: ncNanoId(),
        href: "/listing-real-estate",
        name: "Listes immobilières",
        type: "dropdown",
        children: [
          {
            id: ncNanoId(),
            href: "/listing-real-estate",
            name: "Listes immobilières",
          },
          {
            id: ncNanoId(),
            href: "/listing-real-estate-map",
            name: "Cartes immobilières",
          },
        ],
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/author",
    name: "Modèles",
    type: "dropdown",
    children: templatesChildrenMenus,
  },

  {
    id: ncNanoId(),
    href: "/blog",
    name: "Autres pages",
    type: "dropdown",
    children: otherPageChildMenus,
  },
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Accueil",
    type: "dropdown",
    children: demoChildMenus,
    isNew: true,
  },

  //
  {
    id: ncNanoId(),
    href: "/listing-stay",
    name: "Pages de listes",
    children: [
      { id: ncNanoId(), href: "/listing-stay", name: "Listes de propriétés" },
      {
        id: ncNanoId(),
        href: "/listing-stay-map",
        name: "Listes de propriétés (carte)",
      },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Détail propriété" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/listing-real-estate",
    name: "Pages de listes",
    children: [
      {
        id: ncNanoId(),
        href: "/listing-real-estate",
        name: "Listes immobilières",
      },
      {
        id: ncNanoId(),
        href: "/listing-real-estate-map",
        name: "Immobilier (carte)",
      },
    ],
  },

  //
  {
    id: ncNanoId(),
    href: "/author",
    name: "Modèles",
    type: "dropdown",
    children: templatesChildrenMenus,
  },

  //
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Autres pages",
    type: "dropdown",
    children: otherPageChildMenus,
  },
];
