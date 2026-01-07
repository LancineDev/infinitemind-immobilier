import React, { FC } from "react";
import Checkbox from "@/shared/Checkbox";

export interface PageAddListing4Props {}

const PageAddListing4: FC<PageAddListing4Props> = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Équipements</h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          De nombreux clients recherchent un logement en fonction des
          équipements disponibles
        </span>
      </div>

      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

      {/* FORMULAIRE */}
      <div className="space-y-8">
        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold">
            Équipements généraux
          </label>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Checkbox label="Wi-Fi" name="Wifi" defaultChecked />
            <Checkbox label="Internet" name="Internet" />
            <Checkbox label="Télévision" name="TV" defaultChecked />
            <Checkbox label="Climatisation" name="Air conditioning" />
            <Checkbox label="Ventilateur" name="Fan" />
            <Checkbox label="Entrée privée" name="Private entrance" />
            <Checkbox label="Sèche-linge" name="Dryer" defaultChecked />
            <Checkbox label="Chauffage" name="Heater" />
            <Checkbox label="Machine à laver" name="Washing machine" />
            <Checkbox label="Lessive" name="Detergent" defaultChecked />
            <Checkbox label="Séchoir à vêtements" name="Clothes dryer" />
            <Checkbox label="Lit bébé" name="Baby cot" />
            <Checkbox label="Bureau" name="Desk" defaultChecked />
            <Checkbox label="Réfrigérateur" name="Fridge" />
            <Checkbox label="Sèche-linge" name="Dryer" defaultChecked />
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold">
            Autres équipements
          </label>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Checkbox label="Armoire" name="Wardrobe" defaultChecked />
            <Checkbox label="Porte-manteau" name="Cloth hook" />
            <Checkbox
              label="Coussins supplémentaires"
              name="Extra cushion"
              defaultChecked
            />
            <Checkbox label="Cuisinière à gaz" name="Gas stove" />
            <Checkbox label="Papier toilette" name="Toilet paper" />
            <Checkbox
              label="Articles de toilette gratuits"
              name="Free toiletries"
              defaultChecked
            />
            <Checkbox label="Table de maquillage" name="Makeup table" />
            <Checkbox label="Marmite / Hot pot" name="Hot pot" />
            <Checkbox label="Chauffe-eau salle de bain" name="Bathroom heaters" />
            <Checkbox label="Bouilloire" name="Kettle" defaultChecked />
            <Checkbox label="Lave-vaisselle" name="Dishwasher" />
            <Checkbox label="Barbecue" name="BBQ grill" defaultChecked />
            <Checkbox label="Grille-pain" name="Toaster" defaultChecked />
            <Checkbox label="Serviettes" name="Towel" />
            <Checkbox label="Table à manger" name="Dining table" />
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold">
            Équipements de sécurité
          </label>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Checkbox label="Alarme incendie" name="Fire siren" defaultChecked />
            <Checkbox label="Extincteur" name="Fire extinguisher" />
            <Checkbox label="Clé antivol" name="Anti-theft key" />
            <Checkbox label="Coffre-fort" name="Safe vault" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAddListing4;
