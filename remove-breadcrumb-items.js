const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'src/lib/oil-conditioning-products.ts');
const BREADCRUMB_REGEX = /,?\s*breadcrumbItems:\s*\[[\s\S]*?\](,?)/gm;

fs.readFile(FILE, 'utf8', (err, data) => {
  if (err) throw err;

  const cleaned = data.replace(BREADCRUMB_REGEX, '');
  fs.writeFile(FILE, cleaned, 'utf8', (err) => {
    if (err) throw err;
    console.log('All breadcrumbItems properties removed!');
  });
}); 