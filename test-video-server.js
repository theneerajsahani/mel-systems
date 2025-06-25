// Video Testing Script for Server Environment
// Tests video files accessibility from the development server

const http = require('http');

console.log('🎬 Testing Mel Systems Hero Video Files');

const testVideoUrls = [
  'http://localhost:3000/hero-optimized.mp4',
  'http://localhost:3000/hero-mobile.mp4', 
  'http://localhost:3000/hero-optimized.webm'
];

function testVideoFile(url) {
  return new Promise((resolve) => {
    const request = http.get(url, (response) => {
      const size = response.headers['content-length'];
      const sizeKB = size ? Math.round(size / 1024) : 'unknown';
      const contentType = response.headers['content-type'];
      
      console.log(`✅ ${url}`);
      console.log(`   Status: ${response.statusCode}`);
      console.log(`   Size: ${sizeKB}KB`);
      console.log(`   Content-Type: ${contentType}`);
      console.log('');
      
      resolve(response.statusCode === 200);
    }).on('error', (error) => {
      console.error(`❌ ${url} - Error:`, error.message);
      resolve(false);
    });
    
    // Set timeout
    request.setTimeout(5000, () => {
      console.error(`❌ ${url} - Timeout`);
      request.destroy();
      resolve(false);
    });
  });
}

async function testAllVideos() {
  console.log('📋 Testing video file accessibility from dev server...\n');
  
  let allPassed = true;
  for (const url of testVideoUrls) {
    const result = await testVideoFile(url);
    if (!result) allPassed = false;
  }
  
  console.log(allPassed ? '✅ All video files are accessible!' : '❌ Some video files failed to load');
  return allPassed;
}

testAllVideos().catch(console.error);
