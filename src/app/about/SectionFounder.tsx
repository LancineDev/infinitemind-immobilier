import Heading from "@/shared/Heading";
import Image from "next/image";
import React from "react";
import Image1 from "@/images/avatars/Image-1.png";
import Image2 from "@/images/avatars/Image-2.png";
import Image3 from "@/images/avatars/Image-3.png";
import Image4 from "@/images/avatars/Image-4.png";

export interface People {
  id: string;
  name: string;
  job: string;
  avatar: any;
}

const FOUNDER_DEMO: People[] = [
  {
    id: "1",
    name: `Kouadio Yves`,
    job: "Co-fondateur et PDG",
    avatar: Image1,
  },
  {
    id: "4",
    name: `Touré Aminata`,
    job: "Co-fondatrice et Directrice Générale",
    avatar: Image2,
  },
  {
    id: "3",
    name: `Konaté Mamadou`,
    job: "Co-fondateur, Président",
    avatar: Image3,
  },
  {
    id: "2",
    name: `Bamba Fatou`,
    job: "Co-Fondatrice, Directrice Stratégique",
    avatar: Image4,
  },
];

const SectionFounder = () => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading
        desc="Nous sommes impartiaux et indépendants, et chaque jour nous créons des programmes
          et contenus de classe mondiale"
      >
        ⛱ Fondateurs
      </Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="max-w-sm">
            <div className="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden">
              <Image
                fill
                className=" object-cover"
                src={item.avatar}
                alt=""
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw"
              />
            </div>

            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
              {item.name}
            </h3>
            <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;
