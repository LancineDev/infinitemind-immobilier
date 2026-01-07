"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LockClosedIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function AddListingProtected() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    // Simuler un délai pour l'effet de chargement
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Récupérer le mot de passe depuis les variables d'environnement
    const correctPassword = process.env.NEXT_PUBLIC_ADD_LISTING_PASSWORD || "infintemind7";
    
    if (password === correctPassword) {
      // Stocker l'accès autorisé dans un cookie (valide 1 jour)
      document.cookie = 'addListingAuth=true; path=/; max-age=86400';
      // Rediriger vers la page d'ajout d'annonce
      router.push('/add-listing');
    } else {
      setError("Mot de passe incorrect");
      setPassword("");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Card principal */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
          {/* Header avec design moderne */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <LockClosedIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Accès Sécurisé
            </h1>
            <p className="text-blue-100 text-sm">
              Zone réservée aux administrateurs
            </p>
            <div className="mt-4">
              <div className="flex flex-wrap justify-center gap-2 text-blue-100 text-xs">
                <span className="px-2 py-1 bg-blue-700 rounded">Abidjan</span>
                <span className="px-2 py-1 bg-blue-600 rounded">Yamoussoukro</span>
                <span className="px-2 py-1 bg-blue-800 rounded">Bouaké</span>
                <span className="px-2 py-1 bg-blue-900 rounded">San Pédro</span>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="px-8 py-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Déposer une annonce
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Entrez votre mot de passe pour accéder à l'interface de dépôt d'annonces
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-all duration-200"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || !password}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Vérification en cours...
                  </span>
                ) : (
                  "Accéder au dépôt d'annonces"
                )}
              </button>
            </form>

            
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Cette zone est protégée pour des raisons de sécurité
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-gray-500 text-xs">
            <span className="px-2 py-1 bg-gray-700 rounded">Abidjan</span>
            <span className="px-2 py-1 bg-gray-600 rounded">Yamoussoukro</span>
            <span className="px-2 py-1 bg-gray-500 rounded">Bouaké</span>
            <span className="px-2 py-1 bg-gray-400 rounded">San Pédro</span>
          </div>
        </div>
      </div>
    </div>
  );
}
