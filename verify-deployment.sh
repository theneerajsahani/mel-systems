#!/bin/bash

echo "🔍 Vercel Deployment Verification Script"
echo "========================================"

# Check if git is clean
echo "📋 Checking Git Status..."
git status --porcelain
if [ $? -eq 0 ] && [ -z "$(git status --porcelain)" ]; then
    echo "✅ Git working tree is clean"
else
    echo "⚠️ Git has uncommitted changes"
fi

# Show latest commits
echo ""
echo "📝 Latest Git Commits:"
git log --oneline -5

# Check build status
echo ""
echo "🔨 Testing Local Build..."
npm run build > build.log 2>&1
if [ $? -eq 0 ]; then
    echo "✅ Local build successful"
    echo "📊 Bundle sizes:"
    tail -20 build.log | grep -E "(Route|First Load JS)"
else
    echo "❌ Local build failed - check build.log"
fi

# Check key files
echo ""
echo "🔍 Checking Key Files:"
echo "📄 next.config.ts exists: $([ -f next.config.ts ] && echo "✅" || echo "❌")"
echo "📄 vercel.json exists: $([ -f vercel.json ] && echo "✅" || echo "❌")"
echo "📄 Hero.tsx exists: $([ -f src/components/home/Hero.tsx ] && echo "✅" || echo "❌")"

# Check video files
echo ""
echo "🎬 Checking Video Files:"
echo "📹 hero-mobile.mp4: $([ -f public/hero-mobile.mp4 ] && echo "✅ $(du -h public/hero-mobile.mp4 | cut -f1)" || echo "❌")"
echo "📹 hero-optimized.mp4: $([ -f public/hero-optimized.mp4 ] && echo "✅ $(du -h public/hero-optimized.mp4 | cut -f1)" || echo "❌")"
echo "📹 hero-optimized.webm: $([ -f public/hero-optimized.webm ] && echo "✅ $(du -h public/hero-optimized.webm | cut -f1)" || echo "❌")"

echo ""
echo "🎯 Next Steps:"
echo "1. Commit and push these debugging changes"
echo "2. Wait for Vercel deployment to complete"
echo "3. Check browser console for performance optimization logs"
echo "4. Look for 'Perf Opt v2.1 🚀' indicator with timestamp"
echo "5. Monitor Network tab to see delayed video loading"

echo ""
echo "🔗 Key URLs to check:"
echo "- Your production site"
echo "- Vercel preview URL (if different)"
echo "- Vercel deployment logs"
