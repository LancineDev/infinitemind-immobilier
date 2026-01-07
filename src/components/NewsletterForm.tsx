"use client";

import React, { FormEvent } from "react";
import ButtonCircle from "@/shared/ButtonCircle";
import Input from "@/shared/Input";

const NewsletterForm: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = (e.target as HTMLFormElement).querySelector('input[type="email"]') as HTMLInputElement;
    const email = emailInput?.value;
    if (email) {
      // Simuler l'inscription à la newsletter
      alert(`Merci pour votre inscription avec l'email: ${email}`);
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <form 
      className="mt-10 relative max-w-sm"
      onSubmit={handleSubmit}
    >
      <Input
        required
        aria-required
        placeholder="Entrez votre email"
        type="email"
        rounded="rounded-full"
        sizeClass="h-12 px-5 py-3"
      />
      <ButtonCircle
        type="submit"
        className="absolute transform top-1/2 -translate-y-1/2 right-1.5"
        size="w-10 h-10"
      >
        <i className="las la-arrow-right text-xl"></i>
      </ButtonCircle>
    </form>
  );
};

export default NewsletterForm;
