#!/bin/bash

echo "🚀 Initializing Payload CMS..."
echo "📊 Database: w2s_local"
echo ""

# Check if PostgreSQL is running
if ! psql -U atamanov -d w2s_local -c '\q' 2>/dev/null; then
    echo "❌ Error: Cannot connect to PostgreSQL database 'w2s_local'"
    echo "Please ensure PostgreSQL is running and the database exists."
    exit 1
fi

echo "✅ PostgreSQL database connection successful"
echo ""
echo "📋 Payload Collections created:"
echo "  - Users (with role-based access control)"
echo "  - Testimonials (with i18n support)"
echo "  - Media (local storage)"
echo ""
echo "🎯 Next steps:"
echo "  1. Start Next.js dev server: npm run dev:next"
echo "  2. Access admin panel at: http://localhost:3000/admin"
echo "  3. Create first admin user through the admin panel"
echo ""
