# Stay to Property Conversion - Progress Report

## ✅ Phase 1: Data Migration (COMPLETE)

### Changes Made:
1. **`src/data/listings.ts`**
   - ✅ Removed separate `DEMO_STAY_LISTINGS` creation
   - ✅ `DEMO_STAY_LISTINGS` now aliases `DEMO_PROPERTY_LISTINGS` for backward compatibility
   - ✅ All data now uses `PropertyDataType`

### Result:
- All listings now use `PropertyDataType`
- Backward compatibility maintained via alias
- No breaking changes to existing code

---

## ✅ Phase 2: Type Migration (COMPLETE)

### Files Updated to Use PropertyDataType:
1. ✅ `src/components/StayCard.tsx`
   - Updated imports to use `DEMO_PROPERTY_LISTINGS` and `PropertyDataType`
   - Updated "beds" to "bedrooms" in UI text

2. ✅ `src/components/StayCard2.tsx`
   - Updated imports to use `DEMO_PROPERTY_LISTINGS` and `PropertyDataType`
   - Updated "beds" to "bedrooms" in UI text

3. ✅ `src/components/StayCardH.tsx`
   - Updated imports to use `DEMO_PROPERTY_LISTINGS` and `PropertyDataType`
   - **Removed "guests" field** (not relevant for real estate)
   - **Updated to use actual property data** (bedrooms, bathrooms, propertyType, squareFootage)
   - **Removed "/night" from price** (real estate prices are not per night)
   - Updated hardcoded values to use actual data properties

4. ✅ `src/components/AnyReactComponent/AnyReactComponent.tsx`
   - Updated to use `PropertyDataType`

5. ✅ `src/components/SectionGridFeaturePlaces.tsx`
   - Updated to use `PropertyDataType`
   - Changed default heading from "Featured places to stay" to "Featured properties"
   - Changed default subHeading to property-focused text

6. ✅ `src/app/(stay-listings)/SectionGridFilterCard.tsx`
   - Updated to use `PropertyDataType`

7. ✅ `src/app/(stay-listings)/SectionGridHasMap.tsx`
   - Updated to use `DEMO_PROPERTY_LISTINGS`

### Files Still Using DEMO_STAY_LISTINGS (Safe - it's now an alias):
- `src/app/author/page.tsx` - Uses alias, works correctly
- `src/app/(account-pages)/account-savelists/page.tsx` - Uses alias, works correctly
- `src/app/add-listing/[...stepIndex]/PageAddListing10.tsx` - Uses alias

### Result:
- All components now use `PropertyDataType`
- UI text updated for real estate context
- No TypeScript errors
- All imports resolved correctly

---

## 🔄 Phase 3: Component Renaming (PENDING)

### Components to Rename:
1. `StayCard.tsx` → `PropertyCard.tsx`
2. `StayCard2.tsx` → `PropertyCard2.tsx`
3. `StayCardH.tsx` → `PropertyCardH.tsx` (NOTE: PropertyCardH already exists! Need to merge or rename differently)

### Files That Import StayCard Components:
- `src/components/AnyReactComponent/AnyReactComponent.tsx`
- `src/components/SectionGridFeaturePlaces.tsx`
- `src/app/(stay-listings)/SectionGridFilterCard.tsx`
- `src/app/(stay-listings)/SectionGridHasMap.tsx`
- `src/app/author/page.tsx`
- `src/app/(account-pages)/account-savelists/page.tsx`
- Plus any other files...

**⚠️ Note:** Component renaming requires updating ALL imports across the codebase.

---

## 🔄 Phase 4: Route & Page Migration (PENDING)

### Routes to Update:
1. `/listing-stay` → `/listing-property` or merge with `/listing-real-estate`
2. `/listing-stay-map` → `/listing-property-map` or merge
3. `/listing-stay-detail` → `/listing-property-detail`

### Files/Folders to Rename:
- `src/app/(stay-listings)/` → `src/app/(property-listings)/` or merge with `(real-estate-listings)`
- `src/app/(listing-detail)/listing-stay-detail/` → `src/app/(listing-detail)/listing-property-detail/`

### Navigation Updates Needed:
- `src/data/navigation.ts` - Update all route references
- `src/app/(client-components)/(HeroSearchForm)/*` - Update search form routes
- Any other files referencing stay routes

**⚠️ Note:** Route changes will break existing URLs. Need to consider redirects or URL strategy.

---

## 🔄 Phase 5: Search Forms (PENDING)

### Search Forms to Update:
1. `src/app/(client-components)/(HeroSearchForm)/(stay-search-form)/StaySearchForm.tsx`
   - Rename to PropertySearchForm
   - Update form fields for real estate (remove guests, add property type, etc.)

2. `src/app/(client-components)/(HeroSearchFormSmall)/(stay-search-form)/StaySearchForm.tsx`
   - Same updates

3. `src/app/(client-components)/(HeroSearchForm2Mobile)/(stay-search-form)/StaySearchForm.tsx`
   - Same updates

### Hero Search Form Updates:
- `src/app/(client-components)/(HeroSearchForm)/HeroSearchForm.tsx`
  - Update to use PropertySearchForm instead of StaySearchForm
  - Update tab names from "Stays" to "Properties"

---

## 🔄 Phase 6: Final Cleanup (PENDING)

### Tasks:
1. Remove `StayDataType` interface from `src/data/types.ts`
2. Remove `DEMO_STAY_LISTINGS` alias from `src/data/listings.ts`
3. Update any remaining references
4. Verify no broken imports
5. Update documentation

---

## 📊 Current Status Summary

- ✅ **Data Migration:** Complete
- ✅ **Type Migration:** Complete
- 🔄 **Component Renaming:** Pending (requires import updates)
- 🔄 **Route Migration:** Pending (requires navigation updates)
- 🔄 **Search Forms:** Pending
- 🔄 **Final Cleanup:** Pending

---

## 🎯 Next Steps

1. **Component Renaming** - Rename StayCard components to PropertyCard (handle PropertyCardH conflict)
2. **Update All Imports** - Find and update all files importing StayCard components
3. **Route Migration** - Decide on routing strategy (merge with real-estate or create separate property routes)
4. **Search Forms** - Update search forms for real estate
5. **Final Cleanup** - Remove StayDataType and clean up

---

**Last Updated:** [Current Session]
**Status:** Phase 2 Complete, Phase 3 Ready to Start



