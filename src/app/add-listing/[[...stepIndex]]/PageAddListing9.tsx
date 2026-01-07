"use client";

import DatePickerCustomDay from "@/components/DatePickerCustomDay";
import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
import NcInputNumber from "@/components/NcInputNumber";
import React, { FC, useState } from "react";
import DatePicker from "react-datepicker";

export interface PageAddListing9Props {}

const PageAddListing9: FC<PageAddListing9Props> = () => {
  const [dates, setDates] = useState<number[]>([
    new Date("2023/02/06").getTime(),
    new Date("2023/02/09").getTime(),
    new Date("2023/02/15").getTime(),
  ]);

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Durée du séjour des clients</h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          {`Des séjours plus courts peuvent générer plus de réservations, mais
            vous aurez à préparer votre logement plus souvent.`}
        </span>
      </div>

      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

      {/* FORMULAIRE */}
      <div className="space-y-7">
        {/* ITEM */}
        <NcInputNumber label="Nombre minimum de nuits" defaultValue={1} />
        <NcInputNumber label="Nombre maximum de nuits" defaultValue={99} />
      </div>

      {/* DISPONIBILITÉ */}
      <div>
        <h2 className="text-2xl font-semibold">Définissez vos disponibilités</h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Modifier votre calendrier est facile : sélectionnez simplement une date
          pour la bloquer ou la débloquer. Vous pouvez toujours faire des
          modifications après la publication.
        </span>
      </div>

      <div className="addListingDatePickerExclude">
        <DatePicker
          onChange={(date) => {
            let newDates = [];

            if (!date) return;

            const newTime = date.getTime();
            if (dates.includes(newTime)) {
              newDates = dates.filter((item) => item !== newTime);
            } else {
              newDates = [...dates, newTime];
            }
            setDates(newDates);
          }}
          monthsShown={2}
          showPopperArrow={false}
          excludeDates={dates.filter(Boolean).map((item) => new Date(item))}
          inline
          renderCustomHeader={(p) => <DatePickerCustomHeaderTwoMonth {...p} />}
          renderDayContents={(day, date) => (
            <DatePickerCustomDay dayOfMonth={day} date={date} />
          )}
        />
      </div>
    </>
  );
};

export default PageAddListing9;
