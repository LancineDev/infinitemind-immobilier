"use client";

import React from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";

const ViewAllPropertiesButton: React.FC = () => {
  const handleClick = () => {
    window.location.href = '/listing-real-estate';
  };

  return (
    <ButtonPrimary
      onClick={handleClick}
      className="px-8 py-3"
    >
      Voir toutes les propriétés
    </ButtonPrimary>
  );
};

export default ViewAllPropertiesButton;
