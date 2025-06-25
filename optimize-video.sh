#!/bin/bash

# Video Optimization Script for Hero Video
# This script requires ffmpeg to be installed

echo "🎥 Hero Video Optimization Script"
echo "=================================="

VIDEO_PATH="/home/neeraj/freelance/mel-systems/public/Mel Systems - Hero.mp4"
OUTPUT_DIR="/home/neeraj/freelance/mel-systems/public"

if [ ! -f "$VIDEO_PATH" ]; then
    echo "❌ Video file not found: $VIDEO_PATH"
    exit 1
fi

echo "📊 Original video size:"
ls -lh "$VIDEO_PATH"

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ FFmpeg is not installed. Install it with:"
    echo "   Ubuntu/Debian: sudo apt update && sudo apt install ffmpeg"
    echo "   macOS: brew install ffmpeg"
    echo "   Windows: Download from https://ffmpeg.org/download.html"
    exit 1
fi

echo ""
echo "🚀 Creating optimized versions..."

# 1. Create a highly compressed web-optimized version (target: under 10MB)
echo "Creating web-optimized version..."
ffmpeg -i "$VIDEO_PATH" \
    -c:v libx264 \
    -preset faster \
    -crf 28 \
    -c:a aac \
    -b:a 128k \
    -movflags +faststart \
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
    -r 30 \
    -t 15 \
    "$OUTPUT_DIR/hero-optimized.mp4" -y

# 2. Create a mobile-optimized version (target: under 5MB)
echo "Creating mobile-optimized version..."
ffmpeg -i "$VIDEO_PATH" \
    -c:v libx264 \
    -preset faster \
    -crf 32 \
    -c:a aac \
    -b:a 96k \
    -movflags +faststart \
    -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2" \
    -r 24 \
    -t 10 \
    "$OUTPUT_DIR/hero-mobile.mp4" -y

# 3. Create a WebM version for better compression
echo "Creating WebM version..."
ffmpeg -i "$VIDEO_PATH" \
    -c:v libvpx-vp9 \
    -crf 30 \
    -b:v 0 \
    -c:a libopus \
    -b:a 128k \
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
    -r 30 \
    -t 15 \
    "$OUTPUT_DIR/hero-optimized.webm" -y

echo ""
echo "✅ Optimization complete! File sizes:"
echo "Original:"
ls -lh "$VIDEO_PATH"
echo ""
echo "Optimized versions:"
ls -lh "$OUTPUT_DIR"/hero-*.mp4 "$OUTPUT_DIR"/hero-*.webm 2>/dev/null

echo ""
echo "🎯 Recommendations:"
echo "1. Use hero-optimized.mp4 for desktop (should be under 10MB)"
echo "2. Use hero-mobile.mp4 for mobile devices (should be under 5MB)"
echo "3. Use hero-optimized.webm for modern browsers (best compression)"
echo ""
echo "📝 Update your Hero.tsx to use these optimized versions!"
