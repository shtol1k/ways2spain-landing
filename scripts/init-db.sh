#!/bin/bash

# Initialize Supabase database with Payload tables
# This script starts Next.js locally with Supabase connection
# Payload will auto-create tables on first run

echo "🚀 Initializing Supabase database with Payload CMS..."
echo ""
echo "📋 This will:"
echo "   1. Start Next.js locally with Supabase DATABASE_URL"
echo "   2. Payload will auto-create tables in Supabase"
echo "   3. Stop after initialization"
echo ""
echo "⚠️  Make sure DATABASE_URL in .env.local points to Supabase"
echo ""

# Check if DATABASE_URL is set to Supabase
if grep -q "DATABASE_URL=postgresql://postgres.cfoowsx" .env.local; then
    echo "✅ Supabase DATABASE_URL detected"
else
    echo "❌ Supabase DATABASE_URL not found in .env.local"
    echo "   Please update DATABASE_URL to point to Supabase"
    exit 1
fi

echo ""
echo "🔧 Starting Next.js server (this will take 30-60 seconds)..."
echo "   Tables will be created automatically"
echo ""

# Start Next.js in background
npm run dev:next &
NEXT_PID=$!

# Wait for Payload to initialize
echo "⏳ Waiting for Payload to initialize (45 seconds)..."
sleep 45

# Check if process is still running
if ps -p $NEXT_PID > /dev/null; then
    echo ""
    echo "✅ Payload has initialized!"
    echo "   Database tables should be created in Supabase"
    echo ""
    
    # Kill the process
    kill $NEXT_PID 2>/dev/null
    wait $NEXT_PID 2>/dev/null
    
    echo "✨ Done!"
    echo ""
    echo "🎯 Next steps:"
    echo "   1. Go to Supabase Dashboard → Table Editor"
    echo "   2. Verify tables: users, users_sessions, testimonials, media"
    echo "   3. Restore your local DATABASE_URL"
    echo "   4. Access /admin on Vercel deployment"
    echo ""
else
    echo ""
    echo "❌ Next.js process stopped unexpectedly"
    echo "   Check the logs above for errors"
    exit 1
fi
