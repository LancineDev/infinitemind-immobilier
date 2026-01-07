"use client";
import React, { useState, useEffect } from "react";
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET, SHEETS_ENDPOINT } from "@/lib/config";
import { auth } from "@/lib/firebase";

// ensure client-only

type FormState = {
  title: string;
  city: string;
  district: string;
  propertyType: string;
  price: string;
  description: string;
  phone: string;
  images: string[];
};

const CITIES = ["Abidjan", "Bouaké", "Yamoussoukro", "San Pedro", "Korhogo"];

export default function AddPropertyPage() {
  const [form, setForm] = useState<FormState>({
    title: "",
    city: "Abidjan",
    district: "",
    propertyType: "Maison",
    price: "",
    description: "",
    phone: "",
    images: [],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // Load Cloudinary widget script if cloud name is provided
    if (CLOUDINARY_CLOUD_NAME && typeof window !== "undefined") {
      const id = "cloudinary-script";
      if (!document.getElementById(id)) {
        const s = document.createElement("script");
        s.id = id;
        s.src = "https://widget.cloudinary.com/v2.0/global/all.js";
        s.async = true;
        document.body.appendChild(s);
      }
    }
    // ensure user is logged in
    const unsub = auth.onAuthStateChanged((u) => {
      if (!u) {
        // redirect to login
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
      }
    });
    return () => unsub();
  }, []);

  function normalizeCiPhone(raw: string): string | null {
    const digits = (raw || "").toString().replace(/\D/g, "");
    if (!digits) return null;
    if (digits.startsWith("225") && digits.length >= 11) return digits;
    if (digits.startsWith("0")) {
      const noZero = digits.replace(/^0+/, "");
      if (noZero.length >= 8) return `225${noZero}`;
    }
    if (digits.length >= 8 && digits.length <= 12) return `225${digits}`;
    return null;
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.title) e.title = "Titre requis";
    if (!form.city) e.city = "Ville requise";
    if (!form.propertyType) e.propertyType = "Type requis";
    const priceNum = parseFloat(form.price.replace(/\s|,/g, ""));
    if (!form.price || Number.isNaN(priceNum)) e.price = "Prix numérique requis";
    if (!form.description) e.description = "Description requise";
    const normalizedPhone = normalizeCiPhone(form.phone);
    if (!form.phone || !normalizedPhone) e.phone = "Téléphone CI valide requis";
    if (form.images.length < 3 || form.images.length > 6) e.images = "Télécharger entre 3 et 6 images";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  type CloudinaryResult = { event?: string; info?: { secure_url?: string } } | null;
  type CloudinaryWindow = {
    cloudinary?: {
      createUploadWidget: (
        opts: Record<string, unknown>,
        cb: (error: unknown, result: CloudinaryResult) => void
      ) => { open: () => void };
    };
  };

  function openWidget() {
    const win = (window as unknown) as CloudinaryWindow;
    if (!win || !win.cloudinary) {
      alert("Cloudinary widget non chargé. Vérifiez NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME et la connexion réseau.");
      return;
    }
    const widget = win.cloudinary.createUploadWidget(
      {
        cloudName: CLOUDINARY_CLOUD_NAME,
        uploadPreset: CLOUDINARY_UPLOAD_PRESET,
        multiple: true,
        maxFiles: 6,
        sources: ["local", "url", "camera"],
        folder: "user_uploads",
      },
      (_error, result) => {
        if (result && result.event === "success" && result.info && result.info.secure_url) {
          setForm((s) => ({ ...s, images: [...s.images, result.info!.secure_url!] }));
        }
      }
    );
    widget.open();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    if (!validate()) return;
    setSubmitting(true);
    try {
      if (!SHEETS_ENDPOINT) {
        setMessage("Aucun endpoint configuré. Définissez NEXT_PUBLIC_SHEETS_ENDPOINT (Apps Script) ou NEXT_PUBLIC_SHEETS_CSV_URL pour lecture). Voir README.");
        setSubmitting(false);
        return;
      }

      const normalizedPhone = normalizeCiPhone(form.phone);
      const priceNumber = parseFloat(form.price.replace(/\s|,/g, ""));

      const currentUser = auth.currentUser;
      if (!currentUser) {
        setMessage("Vous devez vous connecter pour ajouter une propriété.");
        setSubmitting(false);
        return;
      }

      const payload = {
        action: "add",
        id:
          typeof crypto !== "undefined" && (crypto as any).randomUUID
            ? (crypto as any).randomUUID()
            : `id_${Date.now()}`,
        ownerId: currentUser.uid,
        title: form.title,
        city: form.city,
        district: form.district,
        type: form.propertyType,
        price: priceNumber,
        description: form.description,
        phone: normalizedPhone,
        images: form.images.join("|"),
        createdAt: new Date().toISOString(),
        status: "pending",
      } as const;

      const res = await fetch(SHEETS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      setMessage("Soumission réussie — la propriété sera ajoutée après traitement.");
      setForm({ title: "", city: "Abidjan", district: "", propertyType: "Maison", price: "", description: "", phone: "", images: [] });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setMessage("Erreur lors de la soumission: " + msg);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="container py-12">
      <h1 className="text-2xl font-semibold">Ajouter une propriété</h1>
      <p className="text-sm text-neutral-500 mt-2">Formulaire frontend — aucune API custom requise.</p>
      <form onSubmit={handleSubmit} className="mt-6 max-w-3xl">
        <label className="block">
          <span className="text-sm">Titre</span>
          <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="mt-1 block w-full rounded border px-3 py-2" />
          {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
        </label>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <label>
            <span className="text-sm">Ville</span>
            <select value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="mt-1 block w-full rounded border px-3 py-2">
              {CITIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
          <label>
            <span className="text-sm">Quartier</span>
            <input value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })} className="mt-1 block w-full rounded border px-3 py-2" />
          </label>
          <label>
            <span className="text-sm">Type</span>
            <select value={form.propertyType} onChange={(e) => setForm({ ...form, propertyType: e.target.value })} className="mt-1 block w-full rounded border px-3 py-2">
              <option>Maison</option>
              <option>Appartement</option>
              <option>Terrain</option>
            </select>
          </label>
        </div>

        <label className="block mt-4">
          <span className="text-sm">Prix (FCFA)</span>
          <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="mt-1 block w-full rounded border px-3 py-2" />
        </label>

        <label className="block mt-4">
          <span className="text-sm">Description</span>
          <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="mt-1 block w-full rounded border px-3 py-2" rows={6} />
        </label>

        <label className="block mt-4">
          <span className="text-sm">Téléphone WhatsApp</span>
          <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 block w-full rounded border px-3 py-2" />
        </label>

        <div className="mt-4">
          <div className="flex items-center gap-3">
            <button type="button" onClick={openWidget} className="px-4 py-2 bg-blue-600 text-white rounded">Télécharger images</button>
            <span className="text-sm text-neutral-500">{form.images.length} images sélectionnées (3–6)</span>
          </div>
          {errors.images && <div className="text-red-500 text-sm">{errors.images}</div>}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {form.images.map((url, i) => (
              <img key={i} src={url} className="w-full h-28 object-cover rounded" alt={`img-${i}`} />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <button type="submit" disabled={submitting} className="px-6 py-2 bg-primary-600 text-white rounded">
            {submitting ? "Envoi…" : "Soumettre"}
          </button>
        </div>
        {message && <div className="mt-4 text-sm">{message}</div>}
      </form>
    </div>
  );
}
