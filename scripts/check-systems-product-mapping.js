const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '../src/lib/systems-products.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

const idRegex = /id: "([^"]+)"/g;
const mappingRegex = /"([^"]+)": ([a-zA-Z0-9_]+),/g;
const slugPathRegex = /slugPath: \[([^\]]+)\]/g;

const allIds = [];
let match;
while ((match = idRegex.exec(fileContent))) {
  allIds.push(match[1]);
}

const allMappings = [];
while ((match = mappingRegex.exec(fileContent))) {
  allMappings.push({
    path: match[1],
    varName: match[2],
  });
}

const allSlugPaths = [];
while ((match = slugPathRegex.exec(fileContent))) {
  allSlugPaths.push(match[1]);
}

// Check that every mapping variable is defined with a slugPath
const missingSlugPaths = allMappings.filter(m => {
  const varPattern = new RegExp(`${m.varName}[^]*?slugPath:`);
  return !varPattern.test(fileContent);
});

if (missingSlugPaths.length > 0) {
  console.warn('Mappings missing slugPath:', missingSlugPaths.map(m => m.varName));
} else {
  console.log('All mappings have slugPath.');
}

// Check that every id in mapping is in allIds
const missingIds = allMappings.filter(m => !allIds.includes(m.varName.replace('Data', '')));
if (missingIds.length > 0) {
  console.warn('Mappings missing id:', missingIds.map(m => m.varName));
} else {
  console.log('All mappings have id.');
}

console.log('Check complete.'); 