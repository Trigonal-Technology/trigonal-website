#!/bin/bash
# ===================================================
# Trigonal Stack - Cron Job Setup
# ===================================================
# Sets up automated backups and SSL renewal
# ===================================================

set -e

STACK_DIR="/opt/trigonal-stack"
CRON_USER="${CRON_USER:-engineer}"

echo "=========================================="
echo "Trigonal Stack - Cron Job Setup"
echo "=========================================="

# ===================================================
# Backup Cron Job (Daily at 2 AM)
# ===================================================
echo ""
echo "[1] Setting up daily backup cron job..."

BACKUP_CRON="0 2 * * * $STACK_DIR/deploy/backup.sh >> $STACK_DIR/logs/backup.log 2>&1"

# Remove existing backup cron if exists
(crontab -u "$CRON_USER" -l 2>/dev/null | grep -v "backup.sh" || true) | crontab -u "$CRON_USER" -

# Add new backup cron
(crontab -u "$CRON_USER" -l 2>/dev/null || echo "") | grep -v "backup.sh" | { cat; echo "$BACKUP_CRON"; } | crontab -u "$CRON_USER" -

echo "✓ Daily backup scheduled at 2 AM"

# ===================================================
# SSL Renewal (Every 12 hours via Certbot container)
# ===================================================
echo ""
echo "[2] SSL renewal is handled by Certbot container"
echo "    (Runs automatically every 12 hours)"

# ===================================================
# Log Rotation
# ===================================================
echo ""
echo "[3] Setting up log rotation..."

LOG_DIR="$STACK_DIR/logs"
mkdir -p "$LOG_DIR"

# Create logrotate config
LOGROTATE_CONFIG="/etc/logrotate.d/trigonal-stack"
cat > "$LOGROTATE_CONFIG" <<EOF
$STACK_DIR/logs/*.log {
    daily
    rotate 7
    compress
    delaycompress
    missingok
    notifempty
    create 0644 $CRON_USER $CRON_USER
}
EOF

echo "✓ Log rotation configured"

# ===================================================
# Summary
# ===================================================
echo ""
echo "=========================================="
echo "✓ Cron jobs configured!"
echo "=========================================="
echo ""
echo "Active cron jobs for user '$CRON_USER':"
crontab -u "$CRON_USER" -l
echo ""
