"use client";

import { MapPinIcon } from "@heroicons/react/24/solid";
import LocationMarker from "@/components/AnyReactComponent/LocationMarker";
import Label from "@/components/Label";
import GoogleMapReact from "google-map-react";
import React, { FC } from "react";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../FormItem";

export interface PageAddListing2Props {}

const PageAddListing2: FC<PageAddListing2Props> = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold">
        Localisation de votre logement
      </h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

      {/* FORMULAIRE */}
      <div className="space-y-8">
        <ButtonSecondary>
          <MapPinIcon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          <span className="ml-3">Utiliser ma position actuelle</span>
        </ButtonSecondary>

        {/* ITEM */}
        <FormItem label="Pays / Région">
          <Select>
            <option value="Côte d'Ivoire">Côte d’Ivoire</option>
            <option value="Ghana">Ghana</option>
            <option value="Nigeria">Nigéria</option>
            <option value="Senegal">Sénégal</option>
            <option value="France">France</option>
            <option value="Canada">Canada</option>
            <option value="...">Autre</option>
          </Select>
        </FormItem>

        <FormItem label="Rue / Quartier">
          <Input placeholder="Ex : Cocody Angré, Rue des Jardins" />
        </FormItem>

        <FormItem label="Numéro de porte (facultatif)">
          <Input />
        </FormItem>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
          <FormItem label="Ville">
            <Input placeholder="Abidjan" />
          </FormItem>
          <FormItem label="Commune / Région">
            <Input placeholder="Cocody, Yopougon…" />
          </FormItem>
          <FormItem label="Code postal">
            <Input placeholder="00225" />
          </FormItem>
        </div>

        <div>
          <Label>Adresse détaillée</Label>
          <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Exemple : Cocody Angré, près de la pharmacie Saint-Viateur
          </span>

          <div className="mt-4">
            <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
              <div className="rounded-xl overflow-hidden">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY",
                  }}
                  yesIWantToUseGoogleMapApiInternals
                  defaultZoom={15}
                  defaultCenter={{
                    lat: 5.3600, // Abidjan
                    lng: -4.0083,
                  }}
                >
                  <LocationMarker lat={5.3600} lng={-4.0083} />
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAddListing2;
