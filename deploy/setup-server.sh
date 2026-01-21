#!/bin/bash
# ===================================================
# Trigonal Stack - Server Setup Script
# ===================================================
# Phase 1: Server Provisioning & Hardening
# ===================================================

set -e

echo "=========================================="
echo "Trigonal Stack - Server Setup"
echo "=========================================="

# ===================================================
# 1.1. Initial Access & User Management
# ===================================================
echo ""
echo "[1.1] Setting up user management..."

# Create sudo user (if not exists)
if ! id -u engineer &>/dev/null; then
    echo "Creating 'engineer' user..."
    adduser --disabled-password --gecos "" engineer
    usermod -aG sudo engineer
    echo "engineer ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers.d/engineer
    echo "✓ User 'engineer' created"
else
    echo "✓ User 'engineer' already exists"
fi

# Setup SSH directory
mkdir -p /home/engineer/.ssh
chmod 700 /home/engineer/.ssh

# Copy SSH key (if provided)
if [ -f ~/.ssh/authorized_keys ]; then
    cp ~/.ssh/authorized_keys /home/engineer/.ssh/authorized_keys
    chmod 600 /home/engineer/.ssh/authorized_keys
    chown -R engineer:engineer /home/engineer/.ssh
    echo "✓ SSH key copied to engineer user"
fi

# ===================================================
# 1.2. SSH Hardening
# ===================================================
echo ""
echo "[1.2] Hardening SSH configuration..."

SSH_CONFIG="/etc/ssh/sshd_config"
BACKUP_CONFIG="/etc/ssh/sshd_config.backup.$(date +%Y%m%d_%H%M%S)"

# Backup original config
cp "$SSH_CONFIG" "$BACKUP_CONFIG"

# Apply security settings
sed -i 's/#PermitRootLogin yes/PermitRootLogin no/' "$SSH_CONFIG"
sed -i 's/PermitRootLogin yes/PermitRootLogin no/' "$SSH_CONFIG"
sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' "$SSH_CONFIG"
sed -i 's/PasswordAuthentication yes/PasswordAuthentication no/' "$SSH_CONFIG"

# Restart SSH service
systemctl restart sshd
echo "✓ SSH hardened (root login disabled, password auth disabled)"

# ===================================================
# 1.3. Firewall Configuration (UFW)
# ===================================================
echo ""
echo "[1.3] Configuring firewall..."

# Install UFW if not present
if ! command -v ufw &> /dev/null; then
    apt-get update
    apt-get install -y ufw
fi

# Allow SSH first (CRITICAL!)
ufw allow 22/tcp comment 'SSH'
echo "✓ SSH port 22 allowed"

# Allow HTTP/HTTPS
ufw allow 80/tcp comment 'HTTP'
ufw allow 443/tcp comment 'HTTPS'
echo "✓ HTTP/HTTPS ports allowed"

# Enable firewall
ufw --force enable
echo "✓ UFW enabled"

# ===================================================
# 1.4. Dependency Installation
# ===================================================
echo ""
echo "[1.4] Installing dependencies..."

# Update system
apt-get update
apt-get upgrade -y

# Install Docker
if ! command -v docker &> /dev/null; then
    echo "Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
    usermod -aG docker engineer
    echo "✓ Docker installed"
else
    echo "✓ Docker already installed"
fi

# Install Docker Compose V2
if ! command -v docker compose &> /dev/null; then
    echo "Installing Docker Compose V2..."
    apt-get install -y docker-compose-plugin
    echo "✓ Docker Compose V2 installed"
else
    echo "✓ Docker Compose V2 already installed"
fi

# Install Fail2Ban
if ! command -v fail2ban-server &> /dev/null; then
    apt-get install -y fail2ban
    systemctl enable fail2ban
    systemctl start fail2ban
    echo "✓ Fail2Ban installed and enabled"
else
    echo "✓ Fail2Ban already installed"
fi

# ===================================================
# 1.5. Directory Structure Setup
# ===================================================
echo ""
echo "[1.5] Creating directory structure..."

mkdir -p /opt/trigonal-stack/{nginx/conf.d,backend,frontend}
mkdir -p /opt/trigonal-stack/data/{postgres,ollama,chroma}
mkdir -p /opt/trigonal-stack/certbot/{conf,www}

chown -R engineer:engineer /opt/trigonal-stack
echo "✓ Directory structure created at /opt/trigonal-stack"

echo ""
echo "=========================================="
echo "✓ Server setup complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Switch to 'engineer' user: su - engineer"
echo "2. Copy your application files to /opt/trigonal-stack"
echo "3. Run: ./deploy/init-stack.sh"
echo ""
