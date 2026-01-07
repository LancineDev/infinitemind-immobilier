# Stay to Property Conversion - Current Status

## ✅ COMPLETED (Phases 1-2)

### 1. Data Migration ✅
- All listings now use `PropertyDataType`
- `DEMO_STAY_LISTINGS` aliases `DEMO_PROPERTY_LISTINGS` for backward compatibility
- No breaking changes to existing functionality

### 2. Type Migration ✅  
All components updated to use `PropertyDataType`:
- ✅ StayCard.tsx
- ✅ StayCard2.tsx  
- ✅ StayCardH.tsx
- ✅ AnyReactComponent
- ✅ SectionGridFeaturePlaces
- ✅ SectionGridFilterCard
- ✅ SectionGridHasMap

### 3. UI Text Updates ✅
- "beds" → "bedrooms"
- Removed "guests" field from StayCardH
- Removed "/night" from price displays
- Updated headings: "Featured places to stay" → "Featured properties"

### 4. Component Files Created ✅
- ✅ `PropertyCard.tsx` created (ready to replace StayCard)
- ✅ `PropertyCard2.tsx` created (ready to replace StayCard2)

## 🔄 IN PROGRESS (Phase 3)

### Component Renaming
- ✅ PropertyCard.tsx created
- ✅ PropertyCard2.tsx created  
- ⏭️ Need to update imports in 7 files
- ⏭️ Need to delete StayCard.tsx, StayCard2.tsx
- ⏭️ Handle StayCardH → PropertyCardH (PropertyCardH already exists!)

### Files Needing Import Updates:
1. `src/components/AnyReactComponent/AnyReactComponent.tsx`
2. `src/components/SectionGridFeaturePlaces.tsx`
3. `src/app/(stay-listings)/SectionGridFilterCard.tsx`
4. `src/app/(stay-listings)/SectionGridHasMap.tsx`
5. `src/app/author/page.tsx`
6. `src/app/(account-pages)/account-savelists/page.tsx`
7. `src/app/add-listing/[...stepIndex]/PageAddListing10.tsx`

## ⏭️ PENDING (Phases 4-6)

### Phase 4: Route Migration
- Rename `/listing-stay` → `/listing-property` or merge with `/listing-real-estate`
- Update route folders
- Update navigation

### Phase 5: Search Forms
- Update StaySearchForm → PropertySearchForm
- Adapt form fields for real estate

### Phase 6: Final Cleanup
- Remove `StayDataType` interface
- Remove `DEMO_STAY_LISTINGS` alias
- Final verification

## 📊 Progress: ~45% Complete

**Current Status:** Core migrations complete. Component files created. Ready for import updates and route migration.

**Next Immediate Step:** Update imports to use PropertyCard/PropertyCard2, then handle StayCardH conflict.

---

**Recommendation:** Continue with import updates to complete component renaming, then proceed with route migration based on your preference (merge with real-estate routes or create separate property routes).

