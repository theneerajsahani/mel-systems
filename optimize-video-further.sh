#!/bin/bash

# Further optimize video files for web performance
# This script creates highly compressed versions of videos

echo "Creating ultra-optimized videos for web..."

# Create ultra-compressed mobile version (target: 500KB)
ffmpeg -i "public/hero-mobile.mp4" \
  -c:v libx264 \
  -preset slow \
  -crf 28 \
  -vf "scale=640:360" \
  -r 24 \
  -c:a aac \
  -b:a 64k \
  -movflags +faststart \
  "public/hero-mobile-ultra.mp4"

# Create ultra-compressed desktop version (target: 2MB)
ffmpeg -i "public/hero-optimized.mp4" \
  -c:v libx264 \
  -preset slow \
  -crf 26 \
  -vf "scale=1280:720" \
  -r 24 \
  -c:a aac \
  -b:a 96k \
  -movflags +faststart \
  "public/hero-desktop-ultra.mp4"

# Create WebM versions for better compression
ffmpeg -i "public/hero-mobile.mp4" \
  -c:v libvpx-vp9 \
  -crf 32 \
  -vf "scale=640:360" \
  -r 24 \
  -c:a libopus \
  -b:a 64k \
  "public/hero-mobile-ultra.webm"

ffmpeg -i "public/hero-optimized.mp4" \
  -c:v libvpx-vp9 \
  -crf 30 \
  -vf "scale=1280:720" \
  -r 24 \
  -c:a libopus \
  -b:a 96k \
  "public/hero-desktop-ultra.webm"

echo "Ultra-optimized videos created!"
echo "File sizes:"
ls -lh public/hero-*ultra*
