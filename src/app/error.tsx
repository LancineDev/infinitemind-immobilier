"use client";
import React from "react";
import Link from "next/link";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-2xl font-semibold">Une erreur est survenue</h1>
      <p className="mt-4 text-sm text-neutral-600">{error?.message || "Erreur inconnue"}</p>
      <div className="mt-6">
        <Link href="/" className="px-4 py-2 bg-primary-600 text-white rounded">Retour à l'accueil</Link>
      </div>
    </div>
  );
}
