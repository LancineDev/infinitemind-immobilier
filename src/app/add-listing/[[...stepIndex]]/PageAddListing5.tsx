import React, { FC } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";

export interface PageAddListing5Props {}

const PageAddListing5: FC<PageAddListing5Props> = () => {
  const renderRadio = (
    name: string,
    id: string,
    label: string,
    defaultChecked?: boolean
  ) => {
    return (
      <div className="flex items-center">
        <input
          defaultChecked={defaultChecked}
          id={id + name}
          name={name}
          type="radio"
          className="focus:ring-primary-500 h-6 w-6 text-primary-500 border-neutral-300 !checked:bg-primary-500 bg-transparent"
        />
        <label
          htmlFor={id + name}
          className="ml-3 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          {label}
        </label>
      </div>
    );
  };

  const renderNoInclude = (text: string) => {
    return (
      <div className="flex items-center justify-between py-3">
        <span className="text-neutral-6000 dark:text-neutral-400 font-medium">
          {text}
        </span>
        <i className="text-2xl text-neutral-400 las la-times-circle hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer"></i>
      </div>
    );
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">
          Définir les règles de la maison pour vos invités
        </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Les invités doivent accepter vos règles avant de réserver.
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

      {/* FORMULAIRE */}
      <div className="space-y-8">
        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold">
            Fumer / Tabac
          </label>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renderRadio("Smoking", "Do", "Interdit")}
            {renderRadio("Smoking", "Allow", "Autorisé", true)}
            {renderRadio("Smoking", "Charge", "Payant")}
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold">Animaux</label>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renderRadio("Pet", "Do", "Interdits")}
            {renderRadio("Pet", "Allow", "Autorisés", true)}
            {renderRadio("Pet", "Charge", "Payants")}
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold">Organisation de fêtes</label>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renderRadio("Partyorganizing", "Do", "Interdit")}
            {renderRadio("Partyorganizing", "Allow", "Autorisé", true)}
            {renderRadio("Partyorganizing", "Charge", "Payant")}
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold">Cuisine</label>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renderRadio("Cooking", "Do", "Interdit")}
            {renderRadio("Cooking", "Allow", "Autorisé", true)}
            {renderRadio("Cooking", "Charge", "Payant")}
          </div>
        </div>

        {/* ----------- */}
        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
        <span className="block text-lg font-semibold">Règles supplémentaires</span>
        <div className="flow-root">
          <div className="-my-3 divide-y divide-neutral-100 dark:divide-neutral-800">
            {renderNoInclude("Interdiction de fumer dans les espaces communs")}
            {renderNoInclude("Ne pas porter de chaussures dans la maison")}
            {renderNoInclude("Interdiction de cuisiner dans la chambre")}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between space-y-3 sm:space-y-0 sm:space-x-5">
          <Input className="!h-full" placeholder="Ajouter une règle..." />
          <ButtonPrimary className="flex-shrink-0">
            <i className="text-xl las la-plus"></i>
            <span className="ml-3">Ajouter un tag</span>
          </ButtonPrimary>
        </div>
      </div>
    </>
  );
};

export default PageAddListing5;
