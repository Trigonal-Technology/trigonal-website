#!/bin/bash
# ===================================================
# Trigonal Stack - Backup Script
# ===================================================
# Phase 6: Maintenance & Backups
# ===================================================

set -e

STACK_DIR="/opt/trigonal-stack"
BACKUP_DIR="/opt/trigonal-stack/backups"
DATE=$(date +%Y%m%d_%H%M%S)

echo "=========================================="
echo "Trigonal Stack - Backup"
echo "=========================================="

# Create backup directory
mkdir -p "$BACKUP_DIR"

# ===================================================
# Database Backup
# ===================================================
echo ""
echo "[1] Backing up PostgreSQL database..."

DB_BACKUP_FILE="$BACKUP_DIR/postgres_$DATE.sql"

docker compose -f "$STACK_DIR/docker-compose.prod.yml" exec -T db \
    pg_dump -U "${POSTGRES_USER:-trigonal}" "${POSTGRES_DB:-trigonal_db}" > "$DB_BACKUP_FILE"

if [ $? -eq 0 ]; then
    # Compress backup
    gzip "$DB_BACKUP_FILE"
    echo "✓ Database backed up to: ${DB_BACKUP_FILE}.gz"
    
    # Keep only last 7 days of backups
    find "$BACKUP_DIR" -name "postgres_*.sql.gz" -mtime +7 -delete
    echo "✓ Old backups cleaned (kept last 7 days)"
else
    echo "✗ Database backup failed!"
    exit 1
fi

# ===================================================
# Ollama Models Backup
# ===================================================
echo ""
echo "[2] Backing up Ollama models..."

OLLAMA_BACKUP_FILE="$BACKUP_DIR/ollama_$DATE.tar.gz"

docker compose -f "$STACK_DIR/docker-compose.prod.yml" exec -T ollama \
    tar czf - /root/.ollama > "$OLLAMA_BACKUP_FILE" 2>/dev/null || true

if [ -f "$OLLAMA_BACKUP_FILE" ] && [ -s "$OLLAMA_BACKUP_FILE" ]; then
    echo "✓ Ollama models backed up to: $OLLAMA_BACKUP_FILE"
    
    # Keep only last 3 backups
    ls -t "$BACKUP_DIR"/ollama_*.tar.gz | tail -n +4 | xargs -r rm
else
    echo "⚠️  Ollama backup skipped (may be empty)"
fi

# ===================================================
# SSL Certificates Backup
# ===================================================
echo ""
echo "[3] Backing up SSL certificates..."

CERT_BACKUP_FILE="$BACKUP_DIR/certbot_$DATE.tar.gz"

if [ -d "$STACK_DIR/certbot/conf" ]; then
    tar czf "$CERT_BACKUP_FILE" -C "$STACK_DIR" certbot/conf
    echo "✓ SSL certificates backed up to: $CERT_BACKUP_FILE"
else
    echo "⚠️  No SSL certificates found"
fi

# ===================================================
# Summary
# ===================================================
echo ""
echo "=========================================="
echo "✓ Backup complete!"
echo "=========================================="
echo ""
echo "Backup location: $BACKUP_DIR"
echo ""

# Optional: Sync to external storage (uncomment and configure)
# if command -v rclone &> /dev/null; then
#     echo "Syncing to external storage..."
#     rclone copy "$BACKUP_DIR" remote:trigonal-backups/ --include "*.gz"
#     echo "✓ Synced to external storage"
# fi
