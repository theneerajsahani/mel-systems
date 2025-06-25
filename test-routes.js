const http = require('http');
const https = require('https');

// Test routes configuration
const baseUrl = 'http://localhost:3000';
const routes = [
  // Main pages
  '/',
  '/products',
  '/applications',
  '/contact',
  '/careers',
  
  // Product categories
  '/products/oil-conditioning',
  '/products/systems',
  
  // Oil conditioning subcategories
  '/products/oil-conditioning/evamo',
  '/products/oil-conditioning/filtertechnik',
  '/products/oil-conditioning/hydrotechnik',
  '/products/oil-conditioning/tandelta',
  
  // Systems subcategories
  '/products/systems/crane-cameras',
  '/products/systems/fork-cameras',
  '/products/systems/front-camera-system',
  '/products/systems/rear-view-cameras',
  '/products/systems/digital-monitors',
  '/products/systems/digital-cameras',
  '/products/systems/video-control-units',
  '/products/systems/transmissions',
  
  // Specific product pages (sample)
  '/products/oil-conditioning/hydrotechnik/watchlog-usb',
  '/products/oil-conditioning/hydrotechnik/watchlog-csv-visualizer-software',
  '/products/oil-conditioning/hydrotechnik/watchlog-pro-remote-monitoring',
  '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps',
  '/products/oil-conditioning/filtertechnik/particle-pal',
  '/products/oil-conditioning/filtertechnik/s120-digital-imaging-particle-counter',
  '/products/systems/rear-view-cameras/mc3000b',
  '/products/systems/video-control-units/mvcd2000',
];

function testRoute(url) {
  return new Promise((resolve) => {
    const request = http.get(url, (response) => {
      const statusCode = response.statusCode;
      const statusMessage = getStatusMessage(statusCode);
      resolve({
        url: url.replace(baseUrl, ''),
        status: statusCode,
        message: statusMessage,
        success: statusCode >= 200 && statusCode < 400
      });
    }).on('error', (error) => {
      resolve({
        url: url.replace(baseUrl, ''),
        status: 'ERROR',
        message: error.message,
        success: false
      });
    });
    
    // Set timeout
    request.setTimeout(10000, () => {
      request.destroy();
      resolve({
        url: url.replace(baseUrl, ''),
        status: 'TIMEOUT',
        message: 'Request timeout',
        success: false
      });
    });
  });
}

function getStatusMessage(statusCode) {
  switch (statusCode) {
    case 200: return 'OK';
    case 404: return 'Not Found';
    case 500: return 'Internal Server Error';
    case 301: case 302: case 307: case 308: return 'Redirect';
    default: return `HTTP ${statusCode}`;
  }
}

async function runTests() {
  console.log('🚀 Testing Mel Systems Website Routes...\n');
  console.log(`Base URL: ${baseUrl}\n`);
  
  const results = [];
  let successCount = 0;
  let failureCount = 0;
  
  for (const route of routes) {
    const fullUrl = baseUrl + route;
    const result = await testRoute(fullUrl);
    results.push(result);
    
    if (result.success) {
      successCount++;
      console.log(`✅ ${result.url} - ${result.message}`);
    } else {
      failureCount++;
      console.log(`❌ ${result.url} - ${result.message}`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`📊 Test Results Summary:`);
  console.log(`   Total Routes Tested: ${routes.length}`);
  console.log(`   ✅ Successful: ${successCount}`);
  console.log(`   ❌ Failed: ${failureCount}`);
  console.log(`   📈 Success Rate: ${((successCount / routes.length) * 100).toFixed(1)}%`);
  
  if (failureCount > 0) {
    console.log('\n❌ Failed Routes:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`   ${r.url} - ${r.message}`);
    });
  }
  
  console.log('\n✨ Route testing completed!');
  
  if (failureCount === 0) {
    console.log('🎉 All routes are working correctly! Ready for client demo.');
  } else {
    console.log('⚠️  Some routes need attention before the demo.');
  }
}

// Start testing
runTests().catch(console.error);
