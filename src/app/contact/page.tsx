"use client";

import React, { FC, useState } from "react";
import SocialsList from "@/shared/SocialsList";
import Label from "@/components/Label";
import Input from "@/shared/Input";
import Textarea from "@/shared/Textarea";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface PageContactProps {}

const info = [
  {
    title: "🗺 ADRESSE",
    desc: "Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter",
  },
  {
    title: "💌 EMAIL",
    desc: "nc.example@example.com",
  },
  {
    title: "☎ TÉLÉPHONE",
    desc: "000-123-456-7890",
  },
];

const PageContact: FC<PageContactProps> = () => {
  const [fullName, setFullName] = useState("");
  const [emailAddr, setEmailAddr] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Numéro WhatsApp en Côte d'Ivoire
    const waPhone = "2250712129409";
    const text = `Contact via le site\nNom: ${fullName}\nEmail: ${emailAddr}\nMessage: ${msg}`;
    const waLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(text)}`;
    window.open(waLink, "_blank");
  };

  return (
    <div className={`nc-PageContact overflow-hidden`}>
      <div className="mb-24 lg:mb-32">
        <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Contact
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
            {/* Infos de contact */}
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  🌏 RÉSEAUX SOCIAUX
                </h3>
                <SocialsList className="mt-2" />
              </div>
            </div>

            {/* Formulaire */}
            <div>
              <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                <label className="block">
                  <Label>Nom complet</Label>
                  <Input
                    placeholder="Exemple Doe"
                    type="text"
                    className="mt-1"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </label>
                <label className="block">
                  <Label>Adresse email</Label>
                  <Input
                    type="email"
                    placeholder="exemple@exemple.com"
                    className="mt-1"
                    value={emailAddr}
                    onChange={(e) => setEmailAddr(e.target.value)}
                  />
                </label>
                <label className="block">
                  <Label>Message</Label>
                  <Textarea
                    className="mt-1"
                    rows={6}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </label>
                <div>
                  <ButtonPrimary type="submit">Envoyer le message</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Autres sections peuvent être ajoutées ici */}
    </div>
  );
};

export default PageContact;
