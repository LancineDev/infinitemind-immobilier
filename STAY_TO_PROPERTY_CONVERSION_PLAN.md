# Stay to Property Conversion Plan

## Goal
Convert the remaining "Stay" module into a pure Real Estate (Property) module.

## Current State
- `StayDataType` exists and is used by stay listings
- `PropertyDataType` exists and is used by real estate listings  
- Both types currently use the same data source (__stayListing.json)
- Stay listings use StayCard components
- Real estate listings use PropertyCardH component
- Both coexist but serve different purposes

## Target State
- All listings become Property listings
- All StayDataType usage → PropertyDataType
- All StayCard components → PropertyCard components
- All stay routes → property routes
- All stay search forms → property search forms
- Remove StayDataType entirely
- Clean, property-only real estate website

---

## Conversion Strategy

### Phase 1: Data Migration (Safe, No Breaking Changes)
1. Ensure PropertyDataType has all needed fields
2. Migrate DEMO_STAY_LISTINGS to use PropertyDataType
3. Keep StayDataType temporarily for transition

### Phase 2: Component Renaming (Incremental)
1. Rename StayCard → PropertyCard
2. Rename StayCard2 → PropertyCard2  
3. Rename StayCardH → PropertyCardH (or merge with existing PropertyCardH)
4. Update all imports

### Phase 3: Route & Page Migration
1. Rename (stay-listings) folder → (property-listings) OR merge with (real-estate-listings)
2. Update route paths from /listing-stay to /listing-property or use /listing-real-estate
3. Update listing-stay-detail → listing-property-detail

### Phase 4: Search Forms & Navigation
1. Update HeroSearchForm to use property search
2. Update navigation to property routes
3. Remove stay-specific search forms

### Phase 5: Final Cleanup
1. Remove StayDataType
2. Remove DEMO_STAY_LISTINGS
3. Update remaining references
4. Verify no broken imports

---

## Key Decisions Needed

1. **Routing Strategy:**
   - Option A: Rename stay routes to property routes (/listing-stay → /listing-property)
   - Option B: Merge with existing real estate routes (use /listing-real-estate)
   - **Recommendation:** Option B - merge into real estate routes since they serve the same purpose

2. **Component Strategy:**
   - PropertyCardH already exists for real estate
   - Should we merge StayCard variants into PropertyCardH or create separate PropertyCard components?
   - **Recommendation:** Keep PropertyCardH as is, rename StayCard to PropertyCard for consistency

3. **Search Forms:**
   - Real estate already has HeroRealEstateSearchForm
   - Should we replace StaySearchForm with property search?
   - **Recommendation:** Yes, update to property-focused search

---

## Execution Order

1. ✅ Analyze current state (DONE)
2. ⏭️ Migrate data (DEMO_STAY_LISTINGS → use PropertyDataType)
3. ⏭️ Rename components (StayCard → PropertyCard)
4. ⏭️ Update routes and pages
5. ⏭️ Update navigation
6. ⏭️ Update search forms
7. ⏭️ Remove StayDataType
8. ⏭️ Final verification

---

**Status:** Planning Complete - Ready to Execute

