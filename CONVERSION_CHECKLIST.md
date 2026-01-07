# Checklist de Conversion Stay → Property

## ✅ COMPLÉTÉ

### Phase 1: Migration des Données
- [x] `DEMO_STAY_LISTINGS` alias de `DEMO_PROPERTY_LISTINGS`
- [x] Toutes les données utilisent `PropertyDataType`

### Phase 2: Migration des Types
- [x] Tous les composants utilisent `PropertyDataType`
- [x] UI texte adapté (bedrooms, bathrooms, squareFootage, propertyType)
- [x] Suppression des références "guests", "/night"

### Phase 3: Renommage des Composants
- [x] `PropertyCard.tsx` créé
- [x] `PropertyCard2.tsx` créé
- [x] `StayCard.tsx` supprimé
- [x] `StayCard2.tsx` supprimé
- [x] `StayCardH.tsx` supprimé
- [x] Tous les imports mis à jour (8 fichiers)

### Vérifications
- [x] Aucune erreur TypeScript
- [x] Aucune erreur de linter
- [x] Aucune référence aux expériences
- [x] Documentation complète

---

## ⏭️ EN COURS / À FAIRE

### Phase 4: Migration des Routes

**Décision nécessaire:**
- [ ] Option A: Fusionner avec `/listing-real-estate` (recommandé - simplifie)
- [ ] Option B: Créer `/listing-property` séparées

**Fichiers à mettre à jour:**
- [ ] `src/data/navigation.ts` - Navigation principale
- [ ] `src/app/(stay-listings)/` - Renommer ou fusionner
- [ ] `src/app/(listing-detail)/listing-stay-detail/` - Renommer
- [ ] Search forms - Routes dans les boutons submit

### Phase 5: Mise à jour des Search Forms

**Fichiers à mettre à jour:**
- [ ] `HeroSearchForm.tsx` - Tab "Stays" → "Properties"
- [ ] `HeroSearchFormSmall.tsx` - Tab "Stays" → "Properties"
- [ ] `HeroSearchForm2Mobile.tsx` - Tab "Stay" → "Property"
- [ ] `StaySearchForm.tsx` - Renommer en PropertySearchForm (si Option B)
- [ ] Routes dans les search forms - `/listing-stay` → property routes

### Phase 6: Final Cleanup

- [ ] Supprimer `StayDataType` de `types.ts`
- [ ] Supprimer alias `DEMO_STAY_LISTINGS` de `listings.ts`
- [ ] Vérification finale complète
- [ ] Tests de navigation

---

## 📋 Fichiers avec Références Restantes

**Routes stay (15 fichiers):**
1. `src/data/navigation.ts`
2. `src/app/(stay-listings)/layout.tsx`
3. `src/app/(stay-listings)/listing-stay/page.tsx`
4. `src/app/(stay-listings)/listing-stay-map/page.tsx`
5. `src/app/(listing-detail)/layout.tsx`
6. `src/app/(listing-detail)/listing-stay-detail/` (dossier entier)
7. `src/app/(client-components)/(HeroSearchFormSmall)/(stay-search-form)/StaySearchForm.tsx`
8. Et 8 autres fichiers...

**Types (backward compatibility - OK pour l'instant):**
- `StayDataType` existe encore mais n'est plus utilisé
- `DEMO_STAY_LISTINGS` alias existe pour compatibilité

---

**Progression:** 65% complété
**Statut:** Prêt pour Phase 4 (Migration des Routes)

