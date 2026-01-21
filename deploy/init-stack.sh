#!/bin/bash
# ===================================================
# Trigonal Stack - Initialization Script
# ===================================================
# Phase 5: Deployment & Initialization
# ===================================================

set -e

STACK_DIR="/opt/trigonal-stack"
cd "$STACK_DIR" || exit 1

echo "=========================================="
echo "Trigonal Stack - Initialization"
echo "=========================================="

# ===================================================
# 5.1. First Boot
# ===================================================
echo ""
echo "[5.1] Starting Docker services..."

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating from template..."
    if [ -f env.example ]; then
        cp env.example .env
    elif [ -f .env.example ]; then
        cp .env.example .env
    else
        echo "✗ No environment template found. Please create .env manually."
        exit 1
    fi
    echo "⚠️  Please edit .env with your actual values before continuing!"
    exit 1
fi

# Build and start services
echo "Building and starting containers..."
docker compose -f docker-compose.prod.yml up -d --build

echo "Waiting for services to be healthy..."
sleep 10

# Check service status
docker compose -f docker-compose.prod.yml ps

# ===================================================
# 5.2. AI Model Initialization
# ===================================================
echo ""
echo "[5.2] Initializing AI model (Phi-3)..."

echo "Pulling Phi-3 model (this may take several minutes)..."
docker compose -f docker-compose.prod.yml exec -T ollama ollama pull phi3

echo "Verifying model..."
docker compose -f docker-compose.prod.yml exec -T ollama ollama run phi3 "Hello world"

echo "✓ AI model initialized"

# ===================================================
# 5.3. Database Migration
# ===================================================
echo ""
echo "[5.3] Running database migrations..."

# Wait for database to be ready
echo "Waiting for database..."
sleep 5

# Run migrations (if using Alembic)
if [ -f backend/alembic.ini ]; then
    docker compose -f docker-compose.prod.yml exec backend alembic upgrade head
    echo "✓ Database migrations completed"
else
    echo "⚠️  No Alembic config found. Skipping migrations."
    echo "   If you have a custom init script, run it manually."
fi

# ===================================================
# 5.4. SSL Certificate Setup
# ===================================================
echo ""
echo "[5.4] Setting up SSL certificate..."

DOMAIN="trigonaltechnology.com"
EMAIL="${SSL_EMAIL:-admin@trigonaltechnology.com}"

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
    echo "✓ SSL certificate obtained"
    echo "Restarting Nginx..."
    docker compose -f docker-compose.prod.yml restart nginx
else
    echo "⚠️  SSL certificate setup failed. Check logs."
    echo "   You can retry later with: ./deploy/setup-ssl.sh"
fi

# ===================================================
# 5.5. Setup Cron Jobs
# ===================================================
echo ""
echo "[5.5] Setting up automated maintenance..."

if [ -f deploy/setup-cron.sh ]; then
    chmod +x deploy/setup-cron.sh
    ./deploy/setup-cron.sh
    echo "✓ Cron jobs configured"
else
    echo "⚠️  Cron setup script not found. Skipping."
fi

echo ""
echo "=========================================="
echo "✓ Stack initialization complete!"
echo "=========================================="
echo ""
echo "Services are running. Check logs with:"
echo "  docker compose -f docker-compose.prod.yml logs -f"
echo ""
echo "Next steps:"
echo "1. Verify services: docker compose -f docker-compose.prod.yml ps"
echo "2. Check logs: docker compose -f docker-compose.prod.yml logs -f [service]"
echo "3. Test SSL: curl -I https://trigonaltechnology.com"
echo ""
