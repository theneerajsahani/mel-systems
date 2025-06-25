# Product Template Guide - Updated Structure

## Overview
I've reorganized the products file to match your exact product hierarchy. The file `/src/lib/products.ts` now follows the correct structure with proper categorization.

## Current Structure (Reorganized)

### ✅ Completed Products (with real data)
- **TanDelta - OQSx-G2 Oil Quality Sensor** ✅
- **TanDelta - OQSx-G2 HAZ Oil Quality Sensor** ✅

### 📝 Template Products Created (need data)

#### TanDelta Products (Oil Conditioning) - In Correct Order
1. [x] MOT – Mobile Oil Test Kit
2. [x] OQSX-G2 Sensor kit
3. [x] SENSE2 Display Kit
4. [x] SENSE3 Gateway Kit
5. [x] Gateway (OQTg)
6. [x] OQDe-G2 Display Express
7. [x] Gateway Hub
8. [x] Manifold
9. **Cables** (Started - only Cable J template created)
   - [x] Cable J ⚠️ Template created
   - [ ] Cable X ❌ Need template
   - [ ] Cable M ❌ Need template
   - [ ] Cable HP ❌ Need template
   - [ ] Cable BBHaz ❌ Need template
   - [ ] Cable BBSt ❌ Need template
   - [ ] Cable DB ❌ Need template
   - [ ] Cable HB ❌ Need template
   - [ ] Cable GH ❌ Need template
   - [ ] Cable SD ❌ Need template
   - [ ] Cable SB ❌ Need template
   - [ ] Cable SH ❌ Need template
   - [ ] Cable HH ❌ Need template
   - [ ] Cable HCP-1 ❌ Need template

### ❌ Major Categories Missing Templates

#### Hydrotechnik Products (Oil Conditioning)
- **Watchlog USB** (2 products)
- **Watchlog Bluetooth Sensors, Gauges and Mobile Apps** (15+ products)
- **Watchlog Wireless Pressure, Temperature and Flow Sensors** (13+ products)
- **Watchlog Pro Remote Monitoring** (4 products)
- **Watchlog CSV Visualizer Software** (1 product)

#### Filtertechnik Products (Oil Conditioning)
- **S120 Digital Imaging Particle Counter** (1 product)
- **Particle Pal** (15+ variants)

#### Evamo Products (Oil Conditioning)
- No products listed yet

#### Motec Products (Systems)
- **Rear View Cameras** (10 specific models)
- **Front Camera System** (1 specific model)
- **Digital Camera's** (5 specific models)
- **Monitors** (5 specific models)
- **Digital Monitors** (3 specific models)
- **Fork Camera's** (4 specific models)
- **Video Control Units** (10 specific models)
- **Crane Camera's** (3 specific models)
- **Transmissions** (10+ products including cables)

## Key Changes Made

### 1. **Reorganized TanDelta Products**
- Reordered to match your exact sequence
- Separated cables into individual products instead of one "Cables" category
- Added proper hierarchical breadcrumbs for cables

### 2. **Cable Structure**
Instead of one "Cables" category, now each cable is a separate product:
```typescript
// Each cable gets its own template like this:
export const cableJData: ProductData = {
  id: "cable-j",
  name: "Cable J",
  category: "oil-conditioning",
  subcategory: "tandelta",
  brand: "TanDelta",
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Tandelta", href: "/products/oil-conditioning/tandelta" },
    { label: "Cables", href: "/products/oil-conditioning/tandelta/cables" },
    { label: "Cable J" }
  ]
};
```

### 3. **Removed Generic Templates**
- Removed generic Motec product templates
- Will need specific templates for each individual product model

## Next Steps - Priority Order

### Immediate (High Priority)
1. **Complete remaining 13 TanDelta cable templates**
2. **Fill data for existing TanDelta product templates**

### Short Term (Medium Priority)  
3. **Create Hydrotechnik product templates** (50+ products)
4. **Create Filtertechnik product templates** (16+ products)

### Long Term (Lower Priority)
5. **Create individual Motec product templates** (40+ specific models)
6. **Add Evamo products** when information is available

## Template Pattern for Individual Products

For products with specific model numbers (like Motec products), use this pattern:

```typescript
// Technical Specification Table - MC3000B
export const mc3000bSpecs: TechnicalSpecsSection[] = [
  {
    title: "PRODUCT INFORMATION",
    specs: [
      { label: "Name", value: "MC3000B Rear View Camera" },
      { label: "Product No.", value: "MC3000B" },
    ]
  },
  // ... more specs
]

// Product Data - MC3000B
export const mc3000bData: ProductData = {
  id: "mc3000b",
  name: "MC3000B",
  category: "systems",
  subcategory: "motec",
  brand: "Motec",
  // ... rest of data
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Systems", href: "/products/systems" },
    { label: "Motec", href: "/products/systems/motec" },
    { label: "Rear View Cameras", href: "/products/systems/motec/rear-view-cameras" },
    { label: "MC3000B" }
  ]
};
```

## File Organization
- **Lines 1-300**: Interfaces and completed products (OQSx-G2 variants)
- **Lines 301-600**: TanDelta product templates (ordered correctly)
- **Lines 601-650**: Cable templates (Cable J + TODO comments for remaining)
- **Lines 651+**: Placeholders for other brands with detailed TODO lists

The structure now accurately reflects your product hierarchy and is ready for systematic data entry!
