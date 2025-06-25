const http = require('http');

// Test specific button/link routes
const baseUrl = 'http://localhost:3000';
const buttonRoutes = [
  '/',
  '/products',
  '/products/oil-conditioning',
  '/contact',
  '/applications',
  '/products/systems/crane-cameras/mws',
  '/products/systems/digital-cameras/mcdb7000a',
  '/products/systems/digital-monitors/mdde1072',
  '/products/systems/fork-cameras/mc9000',
  '/products/systems/front-camera-system/mc3050b-4-vkms',
  '/products/systems/monitors/md3071a',
  '/products/systems/rear-view-cameras',
  '/products/systems/rear-view-cameras/mc3000b',
  '/products/systems/transmissions/mvrd1100',
  '/products/systems/video-control-units/mvcd2000',
  '/products/oil-conditioning/filtertechnik/particle-pal/laser-portable'
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
    
    request.setTimeout(5000, () => {
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

async function main() {
  console.log('🔗 Testing Button and Link Routes...\n');
  
  let successCount = 0;
  let failureCount = 0;
  
  for (const route of buttonRoutes) {
    const fullUrl = baseUrl + route;
    const result = await testRoute(fullUrl);
    
    if (result.success) {
      successCount++;
      console.log(`✅ ${result.url} - ${result.message}`);
    } else {
      failureCount++;
      console.log(`❌ ${result.url} - ${result.message}`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 Button/Link Route Test Results:');
  console.log(`   Total Routes: ${buttonRoutes.length}`);
  console.log(`   ✅ Working: ${successCount}`);
  console.log(`   ❌ Broken: ${failureCount}`);
  console.log(`   📈 Success Rate: ${((successCount / buttonRoutes.length) * 100).toFixed(1)}%`);
  
  if (failureCount > 0) {
    console.log('\n❌ Broken Button/Link Routes:');
    console.log('These routes are referenced by buttons/links but return 404:');
  }
}

main().catch(console.error);
