#!/bin/bash
# ===================================================
# Trigonal Stack - SSL Certificate Setup
# ===================================================
# Standalone script for SSL certificate management
# ===================================================

set -e

STACK_DIR="/opt/trigonal-stack"
DOMAIN="${DOMAIN:-trigonaltechnology.com}"
EMAIL="${SSL_EMAIL:-admin@trigonaltechnology.com}"

cd "$STACK_DIR" || exit 1

echo "=========================================="
echo "Trigonal Stack - SSL Certificate Setup"
echo "=========================================="

# Ensure Nginx is running (for ACME challenge)
echo "Starting Nginx for ACME challenge..."
docker compose -f docker-compose.prod.yml up -d nginx

sleep 5

# Request certificate
echo ""
echo "Requesting Let's Encrypt certificate for $DOMAIN..."
docker compose -f docker-compose.prod.yml run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email "$EMAIL" \
    --agree-tos \
    --no-eff-email \
    -d "$DOMAIN" \
    -d "www.$DOMAIN"

if [ $? -eq 0 ]; then
    echo ""
    echo "✓ SSL certificate obtained successfully!"
    echo ""
    echo "Restarting Nginx to apply SSL configuration..."
    docker compose -f docker-compose.prod.yml restart nginx
    echo ""
    echo "✓ SSL setup complete!"
    echo ""
    echo "Your site should now be accessible at: https://$DOMAIN"
else
    echo ""
    echo "✗ SSL certificate setup failed!"
    echo ""
    echo "Common issues:"
    echo "1. Domain DNS not pointing to this server"
    echo "2. Port 80 not accessible from internet"
    echo "3. Firewall blocking port 80"
    echo ""
    echo "Check logs: docker compose -f docker-compose.prod.yml logs certbot"
    exit 1
fi
