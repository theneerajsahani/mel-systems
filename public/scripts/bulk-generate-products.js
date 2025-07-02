/**
 * Bulk Product Generator
 *
 * This utility helps you create multiple product pages from a JSON data file.
 *
 * Usage:
 * 1. Create a products-data.json file with your product information
 * 2. Run: node scripts/bulk-generate-products.js
 */

import fs from "fs";
import path from "path";

// Sample data structure for products-data.json
const sampleData = {
  products: [
    {
      id: "sample-product",
      name: "Sample Product Name",
      category: "oil-conditioning",
      subcategory: "tandelta",
      brand: "TanDelta",
      images: [
        {
          src: "/products/oil conditioning/Tandelta/Sample Product/image1.jpg",
          alt: "Sample Product Image 1",
        },
      ],
      description: [
        "First paragraph of product description.",
        "Second paragraph of product description.",
      ],
      features: [
        {
          title: "Feature 1",
          description: "Description of feature 1",
        },
      ],
      additionalSections: [
        {
          title: "Additional Section",
          content: "Content for additional section",
          image: {
            src: "/products/oil conditioning/Tandelta/Sample Product/guide.png",
            alt: "Guide Image",
          },
        },
      ],
      technicalSpecs: {
        sections: [
          {
            title: "PRODUCT INFORMATION",
            specs: [
              { label: "Name", value: "Sample Product" },
              { label: "Product No.", value: "SP-001" },
            ],
          },
        ],
      },
    },
  ],
};

function generateProducts() {
  const dataFile = path.join(process.cwd(), "products-data.json");

  // Check if data file exists
  if (!fs.existsSync(dataFile)) {
    console.log("⚠️  products-data.json not found. Creating sample file...");
    fs.writeFileSync(dataFile, JSON.stringify(sampleData, null, 2));
    console.log(
      "✅ Sample products-data.json created. Please edit it with your product data and run again.",
    );
    return;
  }

  const data = JSON.parse(fs.readFileSync(dataFile, "utf8"));

  if (!data.products || !Array.isArray(data.products)) {
    console.error(
      '❌ Invalid data format. Please ensure products-data.json has a "products" array.',
    );
    return;
  }

  console.log(`🚀 Generating ${data.products.length} product pages...\n`);

  let productDataEntries = [];
  let productSpecs = [];
  let databaseEntries = [];

  data.products.forEach((product, index) => {
    try {
      // Generate directory structure
      const pagePath = path.join(
        process.cwd(),
        "src",
        "app",
        "products",
        product.category,
        product.subcategory,
        product.id,
      );
      fs.mkdirSync(pagePath, { recursive: true });

      // Generate page file
      const pageContent = generatePageContent(product);
      fs.writeFileSync(path.join(pagePath, "page.tsx"), pageContent);

      // Generate data entries for products.ts
      const { specsEntry, dataEntry, dbEntry } =
        generateProductEntries(product);
      productSpecs.push(specsEntry);
      productDataEntries.push(dataEntry);
      databaseEntries.push(dbEntry);

      console.log(`✅ Generated: ${product.name}`);
    } catch (error) {
      console.error(`❌ Error generating ${product.name}:`, error.message);
    }
  });

  // Generate combined products.ts additions
  const productsAdditions = generateProductsFileAdditions(
    productSpecs,
    productDataEntries,
    databaseEntries,
  );
  fs.writeFileSync(
    path.join(process.cwd(), "generated-products-additions.ts"),
    productsAdditions,
  );

  console.log("\n✅ All product pages generated successfully!");
  console.log(
    "📋 Copy the content from generated-products-additions.ts to your src/lib/products.ts file",
  );
}

function camelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

function pascalCase(str) {
  return str.replace(/(^|-)([a-z])/g, (g) => g.replace("-", "").toUpperCase());
}

function generatePageContent(product) {
  const componentName = pascalCase(product.id);
  const dataName = camelCase(product.id) + "Data";

  return `import DynamicProductPage from "@/components/DynamicProductPage"
import { ${dataName} } from "@/lib/products"

export default function ${componentName}Page() {
    return <DynamicProductPage productData={${dataName}} />
}`;
}

function generateProductEntries(product) {
  const camelId = camelCase(product.id);
  const specsName = camelId + "Specs";
  const dataName = camelId + "Data";

  // Generate breadcrumb
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    {
      label: product.category
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      href: `/products/${product.category}`,
    },
    {
      label: product.subcategory
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      href: `/products/${product.category}/${product.subcategory}`,
    },
    { label: product.name },
  ];

  // Generate specs entry
  const specsEntry = `// ${product.name} specifications
export const ${specsName}: TechnicalSpecsSection[] = ${JSON.stringify(product.technicalSpecs.sections, null, 2).replace(/"/g, '"')};`;

  // Generate data entry
  const dataEntry = `// ${product.name} data
export const ${dataName}: ProductData = {
  id: "${product.id}",
  name: "${product.name}",
  category: "${product.category}",
  subcategory: "${product.subcategory}",
  brand: "${product.brand}",
  images: ${JSON.stringify(product.images, null, 2)},
  description: ${JSON.stringify(product.description, null, 2)},${
    product.features
      ? `
  features: ${JSON.stringify(product.features, null, 2)},`
      : ""
  }${
    product.additionalSections
      ? `
  additionalSections: ${JSON.stringify(product.additionalSections, null, 2)},`
      : ""
  }
  technicalSpecs: ${specsName},
  breadcrumbItems: ${JSON.stringify(breadcrumbItems, null, 2)}
};`;

  const dbEntry = `  "${product.id}": ${dataName}`;

  return { specsEntry, dataEntry, dbEntry };
}

function generateProductsFileAdditions(
  productSpecs,
  productDataEntries,
  databaseEntries,
) {
  return `// Generated product specifications and data
// Add these to your src/lib/products.ts file

${productSpecs.join("\n\n")}

${productDataEntries.join("\n\n")}

// Add these entries to your productsDatabase object:
/*
export const productsDatabase: Record<string, ProductData> = {
  // ... existing products
${databaseEntries.join(",\n")}
};
*/`;
}

if (require.main === module) {
  generateProducts();
}

module.exports = { generateProducts };
