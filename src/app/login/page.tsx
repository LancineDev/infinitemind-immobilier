"use client";
import { Route } from "@/routers/types";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import facebookSvg from "@/images/Facebook.svg";
import twitterSvg from "@/images/Twitter.svg";
import googleSvg from "@/images/Google.svg";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";

const loginSocials = [
  { name: "Continuer avec Facebook", href: "#", icon: facebookSvg },
  { name: "Continuer avec Twitter", href: "#", icon: twitterSvg },
  { name: "Continuer avec Google", href: "#", icon: googleSvg },
];

export default function PageLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    // Mock authentication for demo purposes
    try {
      // Simple validation
      if (email && password) {
        // Store mock user session
        localStorage.setItem('user', JSON.stringify({ email }));
        router.push("/owner-dashboard");
      } else {
        setError("Veuillez remplir tous les champs");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="nc-PageLogin container py-12 max-w-md mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
        Connexion
      </h2>

      {/* Social login buttons */}
      <div className="grid gap-3 mb-6">
        {loginSocials.map((item, index) => (
          <a
            key={index}
            href={item.href}
            aria-label={item.name}
            className="flex items-center w-full rounded-lg bg-primary-50 px-4 py-3 hover:translate-y-[-2px] transition-transform"
          >
            <Image src={item.icon} alt={item.name} width={24} height={24} />
            <span className="flex-grow text-center text-sm font-medium">
              {item.name}
            </span>
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="relative text-center mb-6">
        <span className="relative z-10 inline-block px-4 text-sm font-medium bg-white">
          OR
        </span>
        <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-200"></div>
      </div>

      {/* Email/password login form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <ButtonPrimary type="submit" disabled={loading}>
          {loading ? "Loading..." : "Continue"}
        </ButtonPrimary>
      </form>

      {/* Footer links */}
      <div className="mt-4 text-center text-sm text-neutral-700">
        Nouveau sur le site?{" "}
        <Link href="/signup" className="font-semibold underline">
          Créer un compte
        </Link>
      </div>
      <div className="mt-2 text-center text-sm">
        <Link href={"/forgot-password" as Route} className="underline font-medium">
  Mot de passe oublié ?
</Link>0.32.+6
      </div>
    </div>
  );
}
