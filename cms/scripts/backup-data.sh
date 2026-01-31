#!/bin/bash

# Backup Strapi content to JSON file
# Run this before schema changes in production

echo "🔮 Backing up Strapi data..."

# Read from environment
STRAPI_URL=${VITE_STRAPI_URL:-"http://localhost:1337"}
API_TOKEN=${VITE_STRAPI_API_TOKEN}

if [ -z "$API_TOKEN" ]; then
  echo "❌ VITE_STRAPI_API_TOKEN not set"
  echo "Usage: VITE_STRAPI_API_TOKEN=xxx ./backup-data.sh"
  exit 1
fi

# Backup directory
BACKUP_DIR="./backups"
mkdir -p "$BACKUP_DIR"

# Filename with timestamp
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/strapi_backup_$TIMESTAMP.json"

# Fetch testimonials
echo "📥 Fetching testimonials..."
curl -s -H "Authorization: Bearer $API_TOKEN" \
  "$STRAPI_URL/api/testimonials?populate=*" \
  | jq '.' > "$BACKUP_FILE"

if [ $? -eq 0 ]; then
  echo "✅ Backup saved to: $BACKUP_FILE"
  echo "📊 File size: $(wc -c < "$BACKUP_FILE") bytes"
else
  echo "❌ Backup failed!"
  exit 1
fi
