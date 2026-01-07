+"use client";
import React, { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { SHEETS_CSV_URL, SHEETS_ENDPOINT } from "@/lib/config";
import { parseCSV } from "@/lib/csv";
import { PropertyDataType } from "@/data/types";

type SheetRow = Record<string, string>;

export default function OwnerDashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [listings, setListings] = useState<PropertyDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      if (!u) {
        if (typeof window !== "undefined") window.location.href = "/login";
      } else {
        setUser(u);
      }
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        if (!SHEETS_CSV_URL) {
          setError("SHEETS_CSV_URL non configuré");
          // nothing to show
          setListings([]);
          setLoading(false);
          return;
        }
        const res = await fetch(SHEETS_CSV_URL);
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const text = await res.text();
        const rows = parseCSV(text);
        // Map rows (expected header: id,ownerId,title,city,district,type,price,description,phone,images,createdAt,status)
        const mapped = rows.map((r, i) => ({
          id: r.id || `sheet_${i}`,
          author: {
            id: r.ownerId || "",
            firstName: "",
            lastName: "",
            displayName: "Propriétaire",
            avatar: "",
            count: 0,
            desc: "",
            jobName: "",
            href: "/",
          },
          date: r.createdAt || new Date().toISOString(),
          href: "/listing-stay-detail",
          title: r.title || "",
          featuredImage: (r.images || "").split("|")[0] || "",
          commentCount: 0,
          viewCount: 0,
          address: `${r.city || ''}${r.district ? ', ' + r.district : ''}`,
          reviewStart: 0,
          reviewCount: 0,
          like: false,
          galleryImgs: (r.images || "").split("|").filter(Boolean),
          price: r.price || "",
          listingCategory: { id: r.city || "0", name: r.city || "Autre", href: "/", taxonomy: "category" },
          propertyType: (r.type || "house") as any,
          bedrooms: 0,
          bathrooms: 0,
          saleOff: null,
          isAds: false,
          map: { lat: 0, lng: 0 },
        } as PropertyDataType));

        // filter for ownerId
        const uid = user?.uid;
        const filtered = uid ? mapped.filter((m) => (m as any).author.id === uid) : [];
        setListings(filtered);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        setError(msg);
      } finally {
        setLoading(false);
      }
    }
    if (user) load();
  }, [user]);

  async function sendAction(payload: Record<string, unknown>) {
    if (!SHEETS_ENDPOINT) throw new Error("SHEETS_ENDPOINT not configured");
    const res = await fetch(SHEETS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const j = await res.json();
    if (!j.success) throw new Error(j.message || "Server error");
    return j;
  }

  async function handleDelete(id: string) {
    if (!confirm("Confirmer la suppression ?")) return;
    try {
      if (!user) throw new Error("Not authenticated");
      await sendAction({ action: "delete", id, ownerId: user.uid });
      setListings((s) => s.filter((l) => String(l.id) !== id));
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : String(err));
    }
  }

  // simple inline edit
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editState, setEditState] = useState<Record<string, string>>({});

  function startEdit(l: PropertyDataType) {
    setEditingId(String(l.id));
    setEditState({ title: l.title || "", price: String(l.price || ""), description: l.title || "" });
  }

  async function submitEdit(id: string) {
    try {
      if (!user) throw new Error("Not authenticated");
      const payload: Record<string, unknown> = {
        action: "update",
        id,
        ownerId: user.uid,
        title: editState.title,
        price: Number(editState.price),
        description: editState.description,
        status: "pending",
      };
      await sendAction(payload);
      // refresh local listing
      setListings((s) => s.map((it) => (String(it.id) === id ? { ...it, title: String(editState.title), price: String(editState.price), description: String(editState.description) } : it)));
      setEditingId(null);
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : String(err));
    }
  }

  if (loading) return <div className="container py-12">Chargement…</div>;
  if (error) return <div className="container py-12 text-red-500">Erreur: {error}</div>;

  return (
    <div className="container py-12">
      <h1 className="text-2xl font-semibold mb-4">Mes propriétés</h1>
      {listings.length === 0 && <div>Aucune propriété trouvée.</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((l) => (
          <div key={String(l.id)} className="border rounded p-4">
            <div className="h-40 bg-gray-100 mb-3">
              {l.featuredImage ? <img src={String(l.featuredImage)} className="w-full h-40 object-cover" alt="" /> : <div className="p-6">No image</div>}
            </div>
            {editingId === String(l.id) ? (
              <div>
                <input className="w-full border p-2 mb-2" value={editState.title} onChange={(e) => setEditState((s) => ({ ...s, title: e.target.value }))} />
                <input className="w-full border p-2 mb-2" value={editState.price} onChange={(e) => setEditState((s) => ({ ...s, price: e.target.value }))} />
                <textarea className="w-full border p-2 mb-2" value={editState.description} onChange={(e) => setEditState((s) => ({ ...s, description: e.target.value }))} />
                <div className="flex gap-2">
                  <button onClick={() => submitEdit(String(l.id))} className="px-3 py-2 bg-green-600 text-white rounded">Enregistrer</button>
                  <button onClick={() => setEditingId(null)} className="px-3 py-2 bg-gray-400 text-white rounded">Annuler</button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="font-semibold">{l.title}</h3>
                <div className="text-sm text-neutral-500">{l.address}</div>
                <div className="mt-2">Prix: {l.price} FCFA</div>
                <div className="mt-2">Status: {(l as any).status || 'pending'}</div>
                <div className="flex gap-2 mt-3">
                  <button onClick={() => startEdit(l)} className="px-3 py-2 bg-yellow-500 text-white rounded">Éditer</button>
                  <button onClick={() => handleDelete(String(l.id))} className="px-3 py-2 bg-red-500 text-white rounded">Supprimer</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
