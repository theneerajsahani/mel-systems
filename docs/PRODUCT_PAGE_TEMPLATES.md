# Product Page Generation Templates

## Manual Product Data Template

Use this template to add new products to your `src/lib/products.ts` file:

```typescript
// [PRODUCT_NAME] specifications
export const [PRODUCT_ID_CAMEL_CASE]Specs: TechnicalSpecsSection[] = [
  {
    title: "PRODUCT INFORMATION",
    specs: [
      { label: "Name", value: "[PRODUCT_NAME]" },
      { label: "Product No.", value: "[PRODUCT_NUMBER]" },
    ]
  },
  // Add more specification sections here...
];

// [PRODUCT_NAME] data
export const [PRODUCT_ID_CAMEL_CASE]Data: ProductData = {
  id: "[PRODUCT_ID]",
  name: "[PRODUCT_NAME]",
  category: "[CATEGORY]", // e.g., "oil-conditioning"
  subcategory: "[SUBCATEGORY]", // e.g., "tandelta"
  brand: "[BRAND]", // e.g., "TanDelta"
  images: [
    {
      src: "/products/[IMAGE_PATH]/[IMAGE_NAME].jpg",
      alt: "[IMAGE_ALT_TEXT]"
    }
    // Add more images as needed...
  ],
  description: [
    "[FIRST_PARAGRAPH_OF_DESCRIPTION]",
    "[SECOND_PARAGRAPH_OF_DESCRIPTION]",
    // Add more paragraphs as needed...
  ],
  features: [ // Optional - only include if product has features
    {
      title: "[FEATURE_TITLE]",
      description: "[FEATURE_DESCRIPTION]"
    }
    // Add more features as needed...
  ],
  additionalSections: [ // Optional - for extra content like guides, charts, etc.
    {
      title: "[SECTION_TITLE]",
      content: "[SECTION_CONTENT]", // Optional text content
      image: { // Optional image
        src: "/products/[IMAGE_PATH]/[IMAGE_NAME].png",
        alt: "[IMAGE_ALT_TEXT]"
      }
    }
  ],
  technicalSpecs: [PRODUCT_ID_CAMEL_CASE]Specs,
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "[CATEGORY_DISPLAY_NAME]", href: "/products/[CATEGORY]" },
    { label: "[SUBCATEGORY_DISPLAY_NAME]", href: "/products/[CATEGORY]/[SUBCATEGORY]" },
    { label: "[PRODUCT_NAME]" }
  ]
};
```

## Manual Page Template

Create a new file at `src/app/products/[category]/[subcategory]/[product-id]/page.tsx`:

```tsx
import DynamicProductPage from "@/components/DynamicProductPage"
import { [PRODUCT_ID_CAMEL_CASE]Data } from "@/lib/products"

export default function [PRODUCT_NAME_PASCAL_CASE]Page() {
    return <DynamicProductPage productData={[PRODUCT_ID_CAMEL_CASE]Data} />
}
```

## Step-by-Step Process

1. **Gather Product Information:**
   - Product name and ID (URL slug)
   - Category and subcategory
   - Brand name
   - Image paths and descriptions
   - Product description paragraphs
   - Technical specifications
   - Any additional sections (features, guides, etc.)

2. **Create Technical Specifications:**
   - Add the specs array to `src/lib/products.ts`
   - Follow the existing format with sections and specs

3. **Create Product Data:**
   - Add the product data object to `src/lib/products.ts`
   - Add it to the `productsDatabase` object

4. **Create Page File:**
   - Create the directory structure: `src/app/products/[category]/[subcategory]/[product-id]/`
   - Create `page.tsx` using the template above

5. **Update Database Reference:**
   ```typescript
   // In src/lib/products.ts, add to productsDatabase
   export const productsDatabase: Record<string, ProductData> = {
     "oqsx-g2-oil-quality-sensor": oqsxG2OilQualitySensorData,
     "[NEW_PRODUCT_ID]": [NEW_PRODUCT_ID_CAMEL_CASE]Data,
     // ... other products
   };
   ```

## Quick Reference

### Naming Conventions:
- **Product ID**: kebab-case (e.g., "oqsx-g2-oil-quality-sensor")
- **Variable Names**: camelCase (e.g., "oqsxG2OilQualitySensorData")
- **Page Component**: PascalCase (e.g., "OQSXG2OilQualitySensorPage")

### Image Path Format:
```
/products/[category display name]/[brand]/[product name]/[image-file].jpg
```

### Required vs Optional Fields:
**Required:**
- id, name, category, subcategory, brand
- images (at least one)
- description (at least one paragraph)
- technicalSpecs
- breadcrumbItems

**Optional:**
- features
- additionalSections
