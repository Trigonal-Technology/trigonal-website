# Trigonal Stack - Production Deployment Guide

This guide walks you through deploying the Trigonal stack to a production Ubuntu server.

## Prerequisites

- Fresh Ubuntu 22.04/24.04 server instance
- Root SSH access
- Domain name (trigonaltechnology.com) pointing to your server IP
- Your local SSH public key

## Quick Start

### Phase 1: Server Setup

1. **SSH into your server as root:**
   ```bash
   ssh root@your-server-ip
   ```

2. **Run the setup script:**
   ```bash
   # Upload setup-server.sh to your server first
   chmod +x setup-server.sh
   sudo ./setup-server.sh
   ```

3. **Switch to the engineer user:**
   ```bash
   su - engineer
   ```

### Phase 2: Deploy Application

1. **Clone or upload your codebase to `/opt/trigonal-stack`:**
   ```bash
   cd /opt/trigonal-stack
   git clone <your-repo> .
   # OR upload files via SCP/SFTP
   ```

2. **Configure environment:**
   ```bash
   cp .env.example .env
   nano .env  # Edit with your actual values
   ```

3. **Initialize the stack:**
   ```bash
   chmod +x deploy/*.sh
   ./deploy/init-stack.sh
   ```

### Phase 3: SSL Setup (if not done automatically)

If SSL certificate setup failed during initialization:

```bash
cd /opt/trigonal-stack
./deploy/setup-ssl.sh
```

## File Structure

```
/opt/trigonal-stack/
├── docker-compose.prod.yml    # Production compose file
├── .env                        # Environment variables (create from .env.example)
├── nginx/
│   ├── nginx.conf              # Main Nginx config
│   └── conf.d/
│       └── trigonal.conf       # Site configuration
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── main.py
├── data/
│   ├── postgres/               # Database data
│   ├── ollama/                 # AI models
│   └── chroma/                 # Vector store
├── certbot/
│   ├── conf/                   # SSL certificates
│   └── www/                    # ACME challenge
└── deploy/
    ├── setup-server.sh         # Initial server hardening
    ├── init-stack.sh           # Stack initialization
    ├── backup.sh               # Backup script
    └── setup-ssl.sh            # SSL certificate setup
```

## Maintenance

### View Logs

```bash
cd /opt/trigonal-stack
docker compose -f docker-compose.prod.yml logs -f [service-name]
```

### Restart Services

```bash
docker compose -f docker-compose.prod.yml restart [service-name]
```

### Backup Database

```bash
./deploy/backup.sh
```

### Update Application

```bash
cd /opt/trigonal-stack
git pull  # or upload new files
docker compose -f docker-compose.prod.yml up -d --build
```

## Monitoring

### Check Resource Usage

```bash
# System resources
htop

# Docker containers
docker stats

# Service health
docker compose -f docker-compose.prod.yml ps
```

### Check Disk Space

```bash
df -h
du -sh /opt/trigonal-stack/data/*
```

## Security Checklist

- [x] SSH password authentication disabled
- [x] Root login disabled
- [x] UFW firewall configured
- [x] Fail2Ban installed
- [x] SSL certificates configured
- [x] Non-root Docker user created
- [x] Database not exposed publicly
- [x] Backend API not exposed publicly
- [x] Ollama not exposed publicly

## Troubleshooting

### Services won't start

1. Check logs: `docker compose -f docker-compose.prod.yml logs`
2. Verify `.env` file has correct values
3. Check disk space: `df -h`
4. Verify ports 80/443 are not in use: `sudo netstat -tulpn | grep -E ':(80|443)'`

### SSL certificate issues

1. Ensure domain DNS points to server IP
2. Check port 80 is accessible: `curl http://your-domain.com`
3. Review certbot logs: `docker compose -f docker-compose.prod.yml logs certbot`

### Database connection errors

1. Verify database is healthy: `docker compose -f docker-compose.prod.yml ps db`
2. Check database logs: `docker compose -f docker-compose.prod.yml logs db`
3. Verify `.env` has correct `POSTGRES_PASSWORD`

## Support

For issues or questions, refer to the main project documentation or contact the Trigonal engineering team.
