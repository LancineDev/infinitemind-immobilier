"use client";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  CurrencyDollarIcon,
  CurrencyEuroIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { SVGProps } from "react";

/* ✅ Correct Heroicons type */
type IconType = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>
>;

type CurrencyType = {
  id: string;
  name: string;
  symbol: string;
  icon: IconType;
};

export const headerCurrency: CurrencyType[] = [
  {
    id: "XOF",
    name: "FCFA",
    symbol: "FCFA",
    icon: BanknotesIcon,
  },
  {
    id: "XOF",
    name: "XOF",
    symbol: "XOF",
    icon: BanknotesIcon,
  },
  {
    id: "EUR",
    name: "Euro",
    symbol: "€",
    icon: CurrencyEuroIcon,
  },
  {
    id: "USD",
    name: "Dollar",
    symbol: "$",
    icon: CurrencyDollarIcon,
  },
];

export default function CurrencyDropdown() {
  const [activeCurrency, setActiveCurrency] = useState<CurrencyType>(
    headerCurrency[0]
  );

  return (
    <div className="CurrencyDropdown">
      <Popover className="relative">
        {({ open, close }) => (
          <>
            {/* BUTTON */}
            <Popover.Button
              className="group px-3 py-1.5 border border-neutral-300 dark:border-neutral-700
              rounded-full inline-flex items-center text-sm font-medium
              text-gray-700 dark:text-neutral-300 hover:border-neutral-400"
            >
              <activeCurrency.icon className="w-5 h-5 opacity-80" />
              <span className="ml-2">{activeCurrency.symbol}</span>
              <ChevronDownIcon
                className={`ml-2 h-4 w-4 transition ${
                  open ? "-rotate-180" : ""
                }`}
              />
            </Popover.Button>

            {/* DROPDOWN */}
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-10 mt-3 w-44">
                <div className="rounded-2xl bg-white dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="p-3 space-y-1">
                    {headerCurrency.map((currency) => (
                      <button
                        key={currency.id}
                        onClick={() => {
                          setActiveCurrency(currency);
                          close();
                        }}
                        className={`flex w-full items-center gap-2 px-3 py-2 rounded-lg text-sm
                          ${
                            activeCurrency.id === currency.id
                              ? "bg-gray-100 dark:bg-neutral-700 font-semibold"
                              : "hover:bg-gray-100 dark:hover:bg-neutral-700 opacity-80"
                          }`}
                      >
                        <currency.icon className="w-4 h-4" />
                        <span>{currency.name}</span>
                        <span className="ml-auto">{currency.symbol}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
