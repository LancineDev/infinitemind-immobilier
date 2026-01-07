import React, { FC } from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../FormItem";

export interface PageAddListing8Props {}

const PageAddListing8: FC<PageAddListing8Props> = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Tarifiez votre logement</h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          {`Les revenus de l'hôte dépendent directement de la fixation des tarifs
            et des règles concernant le nombre de clients, le nombre de nuits
            et la politique d'annulation.`}
        </span>
      </div>

      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

      {/* FORMULAIRE */}
      <div className="space-y-8">
        {/* ITEM */}
        <FormItem label="Devise">
          <Select>
            <option value="USD">USD</option>
            <option value="XOF">XOF (Franc CFA)</option>
            <option value="EUR">EUR</option>
          </Select>
        </FormItem>

        <FormItem label="Prix de base (Lundi - Jeudi)">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <Input className="!pl-8 !pr-10" placeholder="0,00" />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500">USD</span>
            </div>
          </div>
        </FormItem>

        <FormItem label="Prix de base (Vendredi - Dimanche)">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <Input className="!pl-8 !pr-10" placeholder="0,00" />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500">USD</span>
            </div>
          </div>
        </FormItem>

        <FormItem label="Prix long terme (Remise mensuelle)">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">%</span>
            </div>
            <Input className="!pl-8 !pr-10" placeholder="0,00" />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500">par mois</span>
            </div>
          </div>
        </FormItem>
      </div>
    </>
  );
};

export default PageAddListing8;
