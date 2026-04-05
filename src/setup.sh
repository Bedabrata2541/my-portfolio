#!/bin/bash

# Portfolio Setup Script
# This script helps organize your portfolio files for local development

echo "🚀 Setting up Bedabrata Paul Portfolio..."

# Create necessary directories if they don't exist
mkdir -p src/components/figma
mkdir -p src/components/ui
mkdir -p src/styles
mkdir -p public

# Copy component files to src
if [ -d "components" ] && [ "$(ls -A components)" ]; then
  echo "📁 Copying component files to src/components..."
  cp -r components/* src/components/ 2>/dev/null || true
fi

# Copy styles
if [ -d "styles" ] && [ "$(ls -A styles)" ]; then
  echo "🎨 Copying styles to src/styles..."
  cp -r styles/* src/styles/ 2>/dev/null || true
fi

# Copy App.tsx if it exists in root
if [ -f "App.tsx" ]; then
  echo "📄 Copying App.tsx to src..."
  cp App.tsx src/App.tsx 2>/dev/null || true
fi

echo "✅ File structure organized!"
echo ""
echo "📦 Next steps:"
echo "1. Install dependencies: npm install"
echo "2. Start development server: npm run dev"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "🎉 Happy coding!"
