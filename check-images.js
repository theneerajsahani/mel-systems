const fs = require('fs');
const path = require('path');
const http = require('http');

// Check if image files exist
function checkImageExists(imagePath) {
  const fullPath = path.join('/home/neeraj/freelance/mel-systems/public', imagePath);
  return fs.existsSync(fullPath);
}

// Extract image paths from files
function extractImagePaths(content) {
  const imageRegex = /(?:src=["']([^"']+)["']|\/images\/[^"'\s>]+|\/products\/[^"'\s>]+)/g;
  const matches = [];
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    if (match[1]) {
      matches.push(match[1]);
    } else {
      matches.push(match[0]);
    }
  }
  return matches;
}

// Check all images in a file
function checkImagesInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const imagePaths = extractImagePaths(content);
    const results = [];
    
    for (const imagePath of imagePaths) {
      // Skip external URLs and data URLs
      if (imagePath.startsWith('http') || imagePath.startsWith('data:') || imagePath.startsWith('//')) {
        continue;
      }
      
      // Clean path
      const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
      const exists = checkImageExists(cleanPath);
      
      results.push({
        path: imagePath,
        exists,
        file: filePath.replace('/home/neeraj/freelance/mel-systems/', '')
      });
    }
    
    return results;
  } catch (error) {
    return [];
  }
}

// Get all React/Next.js files
function getAllSourceFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== '.next') {
      getAllSourceFiles(fullPath, files);
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Check if public directory images exist
function checkPublicImages() {
  const publicDir = '/home/neeraj/freelance/mel-systems/public';
  const images = [];
  
  function scanDirectory(dir, relativePath = '') {
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath, path.join(relativePath, item));
        } else if (item.match(/\.(jpg|jpeg|png|gif|svg|webp|mp4|mov)$/i)) {
          images.push(path.join(relativePath, item));
        }
      }
    } catch (error) {
      // Directory doesn't exist or no access
    }
  }
  
  scanDirectory(publicDir);
  return images;
}

async function main() {
  console.log('🔍 Checking Images, Buttons, and Paths...\n');
  
  // 1. Check all available images in public directory
  console.log('📁 Available Images in Public Directory:');
  const availableImages = checkPublicImages();
  console.log(`Found ${availableImages.length} images in public directory`);
  
  // 2. Check image references in source files
  console.log('\n🖼️  Checking Image References in Source Files:');
  const sourceFiles = getAllSourceFiles('/home/neeraj/freelance/mel-systems/src');
  let totalImageRefs = 0;
  let missingImages = 0;
  let foundImages = 0;
  
  for (const file of sourceFiles) {
    const imageResults = checkImagesInFile(file);
    totalImageRefs += imageResults.length;
    
    for (const result of imageResults) {
      if (result.exists) {
        foundImages++;
        console.log(`✅ ${result.path} (in ${result.file})`);
      } else {
        missingImages++;
        console.log(`❌ ${result.path} (in ${result.file}) - FILE NOT FOUND`);
      }
    }
  }
  
  // 3. Check hero video specifically
  console.log('\n🎥 Checking Hero Video:');
  const heroVideoPath = 'Mel Systems - Hero.mp4';
  const heroVideoExists = checkImageExists(heroVideoPath);
  console.log(`${heroVideoExists ? '✅' : '❌'} ${heroVideoPath} ${heroVideoExists ? '- EXISTS' : '- NOT FOUND'}`);
  
  // 4. Check logo
  console.log('\n🏢 Checking Logo:');
  const logoPath = 'Mel-systems-logo.png';
  const logoExists = checkImageExists(logoPath);
  console.log(`${logoExists ? '✅' : '❌'} ${logoPath} ${logoExists ? '- EXISTS' : '- NOT FOUND'}`);
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Image Check Summary:');
  console.log(`   Total Image References: ${totalImageRefs}`);
  console.log(`   ✅ Found Images: ${foundImages}`);
  console.log(`   ❌ Missing Images: ${missingImages}`);
  console.log(`   📁 Available in Public: ${availableImages.length}`);
  
  if (missingImages === 0) {
    console.log('\n🎉 All image paths are working correctly!');
  } else {
    console.log('\n⚠️  Some images are missing and need attention.');
  }
  
  // List some sample available images
  console.log('\n📋 Sample Available Images:');
  availableImages.slice(0, 10).forEach(img => {
    console.log(`   📄 /${img}`);
  });
  
  if (availableImages.length > 10) {
    console.log(`   ... and ${availableImages.length - 10} more`);
  }
}

main().catch(console.error);
