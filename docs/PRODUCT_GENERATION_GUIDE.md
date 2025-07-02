# Product Page Generation System

This system streamlines the creation of product pages for the Mel Systems website. All product pages follow the same structure and can be generated automatically from data.

## 🎯 Overview

Every product page includes:

- **Media Gallery** - Product images with thumbnail navigation
- **Description** - Multiple paragraphs of product information
- **Features** (optional) - Key product features in a grid layout
- **Additional Sections** (optional) - Extra content like guides, charts, etc.
- **Technical Specifications** - Structured technical data in tables

## 🏗️ System Architecture

### Core Components

1. **`DynamicProductPage`** - Universal template component that renders any product
2. **`ProductData` interface** - TypeScript interface defining product structure
3. **`products.ts`** - Central database of all product information
4. **Generation Scripts** - Automated tools for creating new pages

### File Structure

```
src/
├── components/
│   └── DynamicProductPage.tsx      # Universal product template
├── lib/
│   └── products.ts                 # Central product database
├── app/products/
│   └── [category]/
│       └── [subcategory]/
│           └── [product-id]/
│               └── page.tsx        # Individual product pages
scripts/
├── generate-product-page.js        # Interactive single product generator
└── bulk-generate-products.js      # Bulk generator from JSON data
docs/
└── PRODUCT_PAGE_TEMPLATES.md      # Manual templates and reference
```

## 🚀 Quick Start

### Method 1: Interactive Generator (Recommended for single products)

```bash
npm run generate:product
```

This will prompt you for:

- Product ID, name, category, subcategory, brand
- Image paths and descriptions
- Product description paragraphs
- Technical specifications

### Method 2: Bulk Generator (Best for multiple products)

1. Create `products-data.json` in the project root:

```bash
npm run generate:products:bulk
```

2. Edit the generated `products-data.json` with your product data

3. Run the bulk generator again:

```bash
npm run generate:products:bulk
```

### Method 3: Manual Creation

Use the templates in `docs/PRODUCT_PAGE_TEMPLATES.md` to create products manually.

## 📋 Data Structure

### ProductData Interface

```typescript
interface ProductData {
  id: string; // URL slug (kebab-case)
  name: string; // Display name
  category: string; // Main category (e.g., "oil-conditioning")
  subcategory: string; // Brand/subcategory (e.g., "tandelta")
  brand: string; // Brand display name
  images: ProductImage[]; // Array of product images
  description: string[]; // Array of description paragraphs
  features?: ProductFeature[]; // Optional features array
  additionalSections?: AdditionalSection[]; // Optional extra content
  technicalSpecs: TechnicalSpecsSection[]; // Technical specifications
  breadcrumbItems: BreadcrumbItem[]; // Navigation breadcrumb
}
```

### Example Product Data

```typescript
export const sampleProductData: ProductData = {
  id: "sample-product",
  name: "Sample Product Name",
  category: "oil-conditioning",
  subcategory: "tandelta",
  brand: "TanDelta",
  images: [
    {
      src: "/products/oil conditioning/TanDelta/Sample Product/image1.jpg",
      alt: "Sample Product Main View",
    },
  ],
  description: [
    "First paragraph describing the product...",
    "Second paragraph with more details...",
  ],
  features: [
    {
      title: "Advanced Technology",
      description: "Description of the advanced technology feature.",
    },
  ],
  technicalSpecs: sampleProductSpecs,
  breadcrumbItems: [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "TanDelta", href: "/products/oil-conditioning/tandelta" },
    { label: "Sample Product" },
  ],
};
```

## 🛠️ Step-by-Step Process

### 1. Gather Product Information

- Product name and unique ID
- Category and subcategory paths
- Brand information
- High-quality product images
- Detailed product description
- Technical specifications
- Any additional content (guides, charts, etc.)

### 2. Prepare Images

- Place images in `/public/products/[category]/[brand]/[product-name]/`
- Use descriptive filenames
- Ensure good quality and consistent sizing
- Create alt text for accessibility

### 3. Create Technical Specifications

```typescript
export const productSpecs: TechnicalSpecsSection[] = [
  {
    title: "PRODUCT INFORMATION",
    specs: [
      { label: "Name", value: "Product Name" },
      { label: "Model", value: "Model Number" },
    ],
  },
  {
    title: "PHYSICAL SPECIFICATIONS",
    specs: [
      { label: "Dimensions", value: "100 x 50 x 25mm" },
      { label: "Weight", value: "500g" },
    ],
  },
];
```

### 4. Add to Product Database

```typescript
// In src/lib/products.ts
export const productsDatabase: Record<string, ProductData> = {
  "existing-product": existingProductData,
  "new-product-id": newProductData,
};
```

### 5. Create Page File

```typescript
// src/app/products/[category]/[subcategory]/[product-id]/page.tsx
import DynamicProductPage from "@/components/DynamicProductPage"
import { newProductData } from "@/lib/products"

export default function NewProductPage() {
    return <DynamicProductPage productData={newProductData} />
}
```

## 📁 File Organization

### Image Naming Convention

```
/public/products/[category display name]/[brand]/[product name]/
├── [product-name]-1.jpg          # Main product image
├── [product-name]-2.jpg          # Additional views
├── [product-name]-guide.png      # Guides or charts
└── [product-name]-manual.pdf     # Documentation (if needed)
```

### Code Naming Convention

- **Product ID**: kebab-case (`"oqsx-g2-oil-quality-sensor"`)
- **Variable names**: camelCase (`oqsxG2OilQualitySensorData`)
- **Component names**: PascalCase (`OQSXG2OilQualitySensorPage`)
- **File names**: kebab-case (`oqsx-g2-oil-quality-sensor`)

## 🔧 Advanced Features

### Optional Features Section

```typescript
features: [
  {
    title: "Real-time Monitoring",
    description: "Continuous oil condition analysis with instant alerts.",
  },
  {
    title: "Universal Compatibility",
    description: "Works with any oil type and equipment configuration.",
  },
];
```

### Additional Sections

```typescript
additionalSections: [
  {
    title: "Installation Guide",
    content: "Step-by-step installation instructions...",
    image: {
      src: "/products/.../installation-guide.png",
      alt: "Installation Guide Diagram",
    },
  },
];
```

## 🎨 Customization

### Modifying the Template

Edit `src/components/DynamicProductPage.tsx` to:

- Change layout structure
- Add new sections
- Modify styling
- Add interactive features

### Adding New Fields

1. Update the `ProductData` interface in `src/lib/products.ts`
2. Modify `DynamicProductPage.tsx` to render the new fields
3. Update generation scripts if needed

## 📚 Troubleshooting

### Common Issues

**Images not displaying:**

- Check file paths are correct and start with `/`
- Ensure images exist in the `public` directory
- Verify image file extensions match the code

**TypeScript errors:**

- Ensure all required fields are provided
- Check that technical specs array is properly exported
- Verify product is added to `productsDatabase`

**Page not found (404):**

- Check directory structure matches the URL pattern
- Ensure `page.tsx` file exists in the correct location
- Verify navigation.ts includes the product route

### Getting Help

1. Check the console for error messages
2. Verify all required dependencies are installed
3. Ensure the product data follows the correct interface
4. Check that all referenced files exist

## 🚀 Next Steps

1. **Add your product data** to `src/lib/products.ts`
2. **Generate pages** using the provided scripts
3. **Test thoroughly** to ensure everything works
4. **Update navigation** if adding new categories
5. **Optimize images** for web performance

The system is designed to be scalable and maintainable, allowing you to add dozens of products quickly while maintaining consistency across your site.
