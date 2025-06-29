#!/usr/bin/env node

/**
 * Product Page Generator
 * 
 * This script helps you generate new product pages automatically.
 * Usage: node scripts/generate-product-page.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (prompt) => {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
};

async function generateProductPage() {
  console.log('🚀 Product Page Generator\n');

  // Collect product information
  const productId = await question('Product ID (URL slug, e.g., "oqsx-g2-oil-quality-sensor"): ');
  const productName = await question('Product Name (e.g., "OQSx-G2 Oil Quality Sensor"): ');
  const category = await question('Category (e.g., "oil-conditioning"): ');
  const subcategory = await question('Subcategory/Brand (e.g., "tandelta"): ');
  const brand = await question('Brand Name (e.g., "TanDelta"): ');
  
  console.log('\n📸 Image Information');
  const images = [];
  let addMoreImages = true;
  let imageIndex = 1;
  
  while (addMoreImages) {
    const imageSrc = await question(`Image ${imageIndex} path (relative to public/): `);
    const imageAlt = await question(`Image ${imageIndex} alt text: `);
    
    images.push({
      src: `/${imageSrc}`,
      alt: imageAlt
    });
    
    imageIndex++;
    const addAnother = await question('Add another image? (y/n): ');
    addMoreImages = addAnother.toLowerCase() === 'y';
  }
  
  console.log('\n📝 Product Description');
  const description = [];
  let addMoreParagraphs = true;
  let paragraphIndex = 1;
  
  while (addMoreParagraphs) {
    const paragraph = await question(`Description paragraph ${paragraphIndex}: `);
    description.push(paragraph);
    
    paragraphIndex++;
    const addAnother = await question('Add another paragraph? (y/n): ');
    addMoreParagraphs = addAnother.toLowerCase() === 'y';
  }

  // Generate breadcrumb
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: capitalizeWords(category.replace('-', ' ')), href: `/products/${category}` },
    { label: capitalizeWords(subcategory.replace('-', ' ')), href: `/products/${category}/${subcategory}` },
    { label: productName }
  ];

  // Generate product data
  const productData = {
    id: productId,
    name: productName,
    category: category,
    subcategory: subcategory,
    brand: brand,
    images: images,
    description: description,
    technicalSpecs: `${camelCase(productId)}Specs`,
    breadcrumbItems: breadcrumbItems
  };

  // Create directory structure
  const pagePath = path.join(process.cwd(), 'src', 'app', 'products', category, subcategory, productId);
  fs.mkdirSync(pagePath, { recursive: true });

  // Generate page.tsx file
  const pageContent = generatePageFile(productData);
  fs.writeFileSync(path.join(pagePath, 'page.tsx'), pageContent);

  // Generate product data entry for products.ts
  const productDataEntry = generateProductDataEntry(productData);
  
  console.log('\n✅ Product page generated successfully!');
  console.log(`📁 Page created at: ${pagePath}/page.tsx`);
  console.log('\n📋 Add this to your src/lib/products.ts file:');
  console.log('=' * 50);
  console.log(productDataEntry);
  console.log('=' * 50);
  console.log('\n⚠️  Don\'t forget to:');
  console.log('1. Add the technical specifications array to products.ts');
  console.log('2. Add the product to the productsDatabase object');
  console.log('3. Update the navigation.ts file if needed');

  rl.close();
}

function capitalizeWords(str) {
  return str.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

function camelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replace(/^[a-z]/, (g) => g.toUpperCase());
}

function generatePageFile(productData) {
  return `import DynamicProductPage from "@/components/DynamicProductPage"
import { ${productData.id.replace(/-/g, '')}Data } from "@/lib/products"

export default function ${camelCase(productData.id)}Page() {
    return <DynamicProductPage productData={${productData.id.replace(/-/g, '')}Data} />
}`;
}

function generateProductDataEntry(productData) {
  const imagesStr = productData.images.map(img => 
    `    {\n      src: "${img.src}",\n      alt: "${img.alt}"\n    }`
  ).join(',\n');

  const descriptionStr = productData.description.map(desc => 
    `    "${desc}"`
  ).join(',\n');

  const breadcrumbStr = productData.breadcrumbItems.map(item => 
    item.href ? `    { label: "${item.label}", href: "${item.href}" }` : `    { label: "${item.label}" }`
  ).join(',\n');

  return `// ${productData.name} data
export const ${productData.id.replace(/-/g, '')}Data: ProductData = {
  id: "${productData.id}",
  name: "${productData.name}",
  category: "${productData.category}",
  subcategory: "${productData.subcategory}",
  brand: "${productData.brand}",
  images: [
${imagesStr}
  ],
  description: [
${descriptionStr}
  ],
  technicalSpecs: ${productData.technicalSpecs}, // You need to create this array
  breadcrumbItems: [
${breadcrumbStr}
  ]
};`;
}

generateProductPage().catch(console.error);
