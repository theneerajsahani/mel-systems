const fs = require('fs');
const path = require('path');

// Extract button/link patterns from files
function extractButtonsAndLinks(content, filePath) {
  const results = [];
  
  // Find Link components
  const linkRegex = /<Link[^>]*href=["']([^"']+)["'][^>]*>([^<]*(?:<[^>]*>[^<]*)*)<\/Link>/g;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    results.push({
      type: 'Link',
      href: match[1],
      text: match[2].replace(/<[^>]*>/g, '').trim(),
      file: filePath.replace('/home/neeraj/freelance/mel-systems/', ''),
      line: content.substring(0, match.index).split('\n').length
    });
  }
  
  // Find button elements with onClick or navigation
  const buttonRegex = /<button[^>]*(?:onClick|href)[^>]*>([^<]*(?:<[^>]*>[^<]*)*)<\/button>/g;
  while ((match = buttonRegex.exec(content)) !== null) {
    results.push({
      type: 'Button',
      href: 'interactive',
      text: match[1].replace(/<[^>]*>/g, '').trim(),
      file: filePath.replace('/home/neeraj/freelance/mel-systems/', ''),
      line: content.substring(0, match.index).split('\n').length
    });
  }
  
  // Find href attributes in other elements
  const hrefRegex = /href=["']([^"']+)["']/g;
  while ((match = hrefRegex.exec(content)) !== null) {
    // Skip if already captured by Link regex
    const beforeMatch = content.substring(Math.max(0, match.index - 100), match.index);
    if (!beforeMatch.includes('<Link')) {
      results.push({
        type: 'href',
        href: match[1],
        text: 'href link',
        file: filePath.replace('/home/neeraj/freelance/mel-systems/', ''),
        line: content.substring(0, match.index).split('\n').length
      });
    }
  }
  
  return results;
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

// Check button functionality in files
function checkButtonsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return extractButtonsAndLinks(content, filePath);
  } catch (error) {
    return [];
  }
}

async function main() {
  console.log('🔍 Checking Buttons, Links, and Interactive Elements...\n');
  
  const sourceFiles = getAllSourceFiles('/home/neeraj/freelance/mel-systems/src');
  let allButtons = [];
  
  console.log('📋 Found Interactive Elements:\n');
  
  for (const file of sourceFiles) {
    const buttons = checkButtonsInFile(file);
    allButtons = allButtons.concat(buttons);
  }
  
  // Group by file for better organization
  const fileGroups = {};
  allButtons.forEach(button => {
    if (!fileGroups[button.file]) {
      fileGroups[button.file] = [];
    }
    fileGroups[button.file].push(button);
  });
  
  // Display results organized by file
  Object.keys(fileGroups).forEach(file => {
    if (fileGroups[file].length > 0) {
      console.log(`📄 ${file}:`);
      fileGroups[file].forEach(button => {
        const status = button.href.startsWith('http') ? '🌐' : 
                     button.href === 'interactive' ? '⚡' : 
                     button.href.startsWith('/') ? '🔗' : '❓';
        console.log(`   ${status} ${button.type}: "${button.text}" → ${button.href}`);
      });
      console.log('');
    }
  });
  
  // Summary
  console.log('='.repeat(60));
  console.log('📊 Interactive Elements Summary:');
  
  const linkCount = allButtons.filter(b => b.type === 'Link').length;
  const buttonCount = allButtons.filter(b => b.type === 'Button').length;
  const hrefCount = allButtons.filter(b => b.type === 'href').length;
  const internalLinks = allButtons.filter(b => b.href.startsWith('/')).length;
  const externalLinks = allButtons.filter(b => b.href.startsWith('http')).length;
  const interactiveElements = allButtons.filter(b => b.href === 'interactive').length;
  
  console.log(`   🔗 Total Link Components: ${linkCount}`);
  console.log(`   ⚡ Total Button Elements: ${buttonCount}`);
  console.log(`   🌐 Total href attributes: ${hrefCount}`);
  console.log(`   📍 Internal Links: ${internalLinks}`);
  console.log(`   🌍 External Links: ${externalLinks}`);
  console.log(`   ⚡ Interactive Elements: ${interactiveElements}`);
  console.log(`   📱 Total Interactive Elements: ${allButtons.length}`);
  
  // Check for potential issues
  console.log('\n🔍 Potential Issues:');
  const issues = [];
  
  // Check for broken internal links (simplified check)
  const internalLinkPaths = allButtons
    .filter(b => b.href.startsWith('/') && !b.href.startsWith('http'))
    .map(b => b.href);
  
  const uniquePaths = [...new Set(internalLinkPaths)];
  console.log(`   📋 Unique internal paths to verify: ${uniquePaths.length}`);
  
  // List some common paths
  const commonPaths = uniquePaths.slice(0, 20);
  commonPaths.forEach(path => {
    console.log(`   📂 ${path}`);
  });
  
  if (uniquePaths.length > 20) {
    console.log(`   ... and ${uniquePaths.length - 20} more paths`);
  }
  
  console.log('\n✨ Button and link analysis completed!');
}

main().catch(console.error);
