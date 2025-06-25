// Video Testing Script
// Run this in browser console to test video functionality

console.log('🎬 Testing Mel Systems Hero Video');

// Check if video files exist
const testVideoUrls = [
  '/hero-optimized.mp4',
  '/hero-mobile.mp4', 
  '/hero-optimized.webm'
];

async function testVideoFile(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    const size = response.headers.get('content-length');
    const sizeKB = size ? Math.round(size / 1024) : 'unknown';
    
    console.log(`✅ ${url} - Status: ${response.status}, Size: ${sizeKB}KB`);
    return response.ok;
  } catch (error) {
    console.error(`❌ ${url} - Error:`, error);
    return false;
  }
}

async function testAllVideos() {
  console.log('📋 Testing video file accessibility...');
  
  for (const url of testVideoUrls) {
    await testVideoFile(url);
  }
  
  // Test video element creation
  console.log('\n🎥 Testing video element creation...');
  const video = document.createElement('video');
  video.src = '/hero-optimized.mp4';
  video.muted = true;
  video.style.display = 'none';
  document.body.appendChild(video);
  
  video.onloadeddata = () => {
    console.log('✅ Video element can load data');
    console.log(`📊 Video dimensions: ${video.videoWidth}x${video.videoHeight}`);
    console.log(`⏱️ Video duration: ${video.duration}s`);
    document.body.removeChild(video);
  };
  
  video.onerror = (e) => {
    console.error('❌ Video element error:', e);
    document.body.removeChild(video);
  };
  
  video.load();
}

// Run the test
testAllVideos();

// Test current hero video element
setTimeout(() => {
  const heroVideo = document.querySelector('section video');
  if (heroVideo) {
    console.log('\n🎯 Found hero video element');
    console.log('Current src:', heroVideo.currentSrc || 'none');
    console.log('Ready state:', heroVideo.readyState);
    console.log('Network state:', heroVideo.networkState);
    console.log('Paused:', heroVideo.paused);
    console.log('Muted:', heroVideo.muted);
  } else {
    console.log('❌ No hero video element found');
  }
}, 2000);
