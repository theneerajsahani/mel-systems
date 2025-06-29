const fs = require('fs');
const path = require('path');

// Read the oil conditioning products data file
const productsDataPath = path.join(__dirname, '../src/lib/oil-conditioning-products.ts');
const productsDataContent = fs.readFileSync(productsDataPath, 'utf8');

// Extract all product data exports
const productDataRegex = /export const (\w+): ProductData = {[\s\S]*?};/g;
const matches = [...productsDataContent.matchAll(productDataRegex)];

// Base directory for product pages
const baseDir = path.join(__dirname, '../src/app/products/oil-conditioning');

// Template for product page
const productPageTemplate = (productDataVar, productDataName) => `import DynamicProductPage from "@/components/DynamicProductPage"
import { ${productDataVar} } from "@/lib/oil-conditioning-products"

export default function ${productDataName}Page() {
    return <DynamicProductPage productData={${productDataVar}} />
}
`;

// Function to create directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Created directory: ${dirPath}`);
    }
}

// Function to create product page
function createProductPage(productId, productDataVar, productDataName) {
    // Parse the product ID to get category and subcategory
    const parts = productId.split('-');
    
    // Determine category and subcategory based on product ID patterns
    let category = 'oil-conditioning';
    let subcategory = '';
    
    // Extract subcategory from product ID
    if (productId.includes('tandelta') || productId.includes('oqsx') || productId.includes('mot') || 
        productId.includes('sense') || productId.includes('gateway') || productId.includes('manifold') ||
        productId.includes('cable') || productId.includes('oqde')) {
        subcategory = 'tandelta';
    } else if (productId.includes('filtertechnik') || productId.includes('particle') || 
               productId.includes('s120') || productId.includes('pal')) {
        subcategory = 'filtertechnik';
    } else if (productId.includes('hydrotechnik') || productId.includes('watchlog') || 
               productId.includes('wlb') || productId.includes('wlw') || productId.includes('ht')) {
        subcategory = 'hydrotechnik';
    } else if (productId.includes('evamo')) {
        subcategory = 'evamo';
    }
    
    // Create the directory path
    const productDir = path.join(baseDir, subcategory, productId);
    ensureDirectoryExists(productDir);
    
    // Create the page file
    const pagePath = path.join(productDir, 'page.tsx');
    
    // Check if page already exists
    if (fs.existsSync(pagePath)) {
        console.log(`Page already exists: ${pagePath}`);
        return;
    }
    
    // Write the page file
    fs.writeFileSync(pagePath, productPageTemplate(productDataVar, productDataName));
    console.log(`Created product page: ${pagePath}`);
}

// Process all product data exports
console.log('Generating oil conditioning product pages...\n');

matches.forEach(match => {
    const productDataVar = match[1];
    
    // Extract the product ID from the data object
    const dataObject = match[0];
    const idMatch = dataObject.match(/id:\s*"([^"]+)"/);
    
    if (idMatch) {
        const productId = idMatch[1];
        
        // Convert variable name to component name (remove 'Data' suffix and convert to PascalCase)
        const productDataName = productDataVar.replace('Data', '');
        
        createProductPage(productId, productDataVar, productDataName);
    } else {
        console.warn(`Could not extract product ID for ${productDataVar}`);
    }
});

console.log('\nProduct page generation completed!');
console.log(`Total products processed: ${matches.length}`); 