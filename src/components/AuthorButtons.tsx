"use client";

import React from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";

const AuthorButtons: React.FC = () => {
  const handleViewMore = () => {
    window.location.href = '/author';
  };

  const handleBecomeAgent = () => {
    window.location.href = '/signup';
  };

  return (
    <div className="mt-16 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-5">
      <ButtonSecondary 
        loading={false}
        onClick={handleViewMore}
      >
        Voir plus
      </ButtonSecondary>
      <ButtonPrimary 
        onClick={handleBecomeAgent}
      >
        Devenir agent
      </ButtonPrimary>
    </div>
  );
};

export default AuthorButtons;
