# Trigonal Stack - Production Deployment Checklist

This document provides a complete checklist for deploying the Trigonal stack to production.

## Phase 1: Server Provisioning & Hardening

### 1.1. Initial Access & User Management

- [ ] SSH into the fresh Ubuntu 22.04/24.04 instance as root
- [ ] Run `./deploy/setup-server.sh` to create sudo user and harden SSH
- [ ] Copy your local SSH public key to the new user's `.ssh/authorized_keys`
- [ ] Verify SSH access works with the new user
- [ ] Switch to the new user: `su - engineer`

### 1.2. Firewall Configuration (UFW)

- [ ] UFW installed and enabled (handled by `setup-server.sh`)
- [ ] SSH (Port 22) explicitly allowed
- [ ] HTTP (Port 80) allowed
- [ ] HTTPS (Port 443) allowed
- [ ] Verify: `sudo ufw status`

### 1.3. Dependency Installation

- [ ] OS packages updated (`apt update && apt upgrade`)
- [ ] Docker Engine installed
- [ ] Docker Compose V2 installed
- [ ] Fail2Ban installed and running
- [ ] Verify: `docker --version` and `docker compose version`

## Phase 2: Application Architecture & Optimization

### 2.1. Frontend Optimization (Next.js)

- [x] `next.config.ts` has `output: 'standalone'` configured
- [x] Sharp image optimization configured in `next.config.ts`
- [x] `sharp` package added to `package.json`

### 2.2. Backend Preparation (FastAPI)

- [x] `backend/requirements.txt` created with all dependencies
- [x] `backend/Dockerfile` uses `python:3.11-slim` image
- [ ] Implement your FastAPI routes in `backend/main.py`

### 2.3. AI Model Selection

- [ ] Decision made: Phi-3 Mini (3.8GB) or Gemma 2B (1.5GB)
- [ ] Model will be pulled during initialization
- [ ] Model stored in Docker volume for persistence

## Phase 3: Docker Orchestration

### 3.1. Directory Structure Setup

- [x] Directory structure created by `setup-server.sh`:
  - `/opt/trigonal-stack/nginx/conf.d`
  - `/opt/trigonal-stack/backend`
  - `/opt/trigonal-stack/frontend`
  - `/opt/trigonal-stack/data/postgres`
  - `/opt/trigonal-stack/data/ollama`
  - `/opt/trigonal-stack/data/chroma`

### 3.2. Docker Compose Definition

- [x] `docker-compose.prod.yml` created with all services:
  - [x] Database (Postgres 15 Alpine)
  - [x] AI Engine (Ollama with memory limits)
  - [x] Backend (FastAPI)
  - [x] Frontend (Next.js standalone)
  - [x] Gateway (Nginx)
  - [x] Certbot (SSL renewal)

## Phase 4: The Gateway (Nginx & SSL)

### 4.1. Nginx Configuration

- [x] `nginx/nginx.conf` created with performance optimizations
- [x] `nginx/conf.d/trigonal.conf` created with:
  - [x] Frontend routing (`/` → `frontend:3000`)
  - [x] API routing (`/api/` → `backend:8000`)
  - [x] Security headers configured
  - [x] Gzip compression enabled
  - [x] Static asset caching

### 4.2. SSL Certificate (Certbot)

- [ ] Domain DNS pointing to server IP
- [ ] Run `./deploy/setup-ssl.sh` or let `init-stack.sh` handle it
- [ ] SSL certificates obtained and verified
- [ ] Nginx configured to use certificates
- [ ] Cron job for SSL renewal configured (handled by Certbot container)

## Phase 5: Deployment & Initialization

### 5.1. First Boot

- [ ] Copy application files to `/opt/trigonal-stack`
- [ ] Create `.env` file from `env.example`
- [ ] Edit `.env` with actual values (passwords, URLs, etc.)
- [ ] Run `./deploy/init-stack.sh`
- [ ] Verify all services are running: `docker compose -f docker-compose.prod.yml ps`

### 5.2. AI Model Initialization

- [ ] Ollama container started
- [ ] Model pulled: `docker compose -f docker-compose.prod.yml exec ollama ollama pull phi3`
- [ ] Model verified: `docker compose -f docker-compose.prod.yml exec ollama ollama run phi3 "Hello world"`

### 5.3. Database Migration

- [ ] Database container healthy
- [ ] Run migrations: `docker compose -f docker-compose.prod.yml exec backend alembic upgrade head`
- [ ] Or run custom init script if not using Alembic

## Phase 6: Maintenance & Backups

### 6.1. Backup Strategy

- [x] `deploy/backup.sh` script created
- [x] Daily backup cron job configured (2 AM)
- [ ] Test backup script manually: `./deploy/backup.sh`
- [ ] Verify backup files created in `/opt/trigonal-stack/backups`
- [ ] Optional: Configure rclone for external storage sync

### 6.2. Monitoring

- [ ] Install `htop` for system monitoring: `sudo apt-get install htop`
- [ ] Monitor RAM usage: `htop`
- [ ] Check Docker stats: `docker stats`
- [ ] Review logs: `docker compose -f docker-compose.prod.yml logs -f`

## Quick Reference Commands

### Service Management

```bash
# Start all services
docker compose -f docker-compose.prod.yml up -d

# Stop all services
docker compose -f docker-compose.prod.yml down

# Restart a service
docker compose -f docker-compose.prod.yml restart [service-name]

# View logs
docker compose -f docker-compose.prod.yml logs -f [service-name]

# Check service status
docker compose -f docker-compose.prod.yml ps
```

### Database Operations

```bash
# Access database shell
docker compose -f docker-compose.prod.yml exec db psql -U trigonal -d trigonal_db

# Backup database manually
docker compose -f docker-compose.prod.yml exec db pg_dump -U trigonal trigonal_db > backup.sql
```

### AI Model Operations

```bash
# Pull a model
docker compose -f docker-compose.prod.yml exec ollama ollama pull phi3

# List models
docker compose -f docker-compose.prod.yml exec ollama ollama list

# Test model
docker compose -f docker-compose.prod.yml exec ollama ollama run phi3 "Your prompt"
```

### SSL Certificate Management

```bash
# Renew certificate manually
docker compose -f docker-compose.prod.yml run --rm certbot renew

# Check certificate expiry
docker compose -f docker-compose.prod.yml exec certbot certbot certificates
```

## Troubleshooting

### Services won't start

1. Check logs: `docker compose -f docker-compose.prod.yml logs`
2. Verify `.env` file has correct values
3. Check disk space: `df -h`
4. Verify ports are not in use: `sudo netstat -tulpn | grep -E ':(80|443|3000|8000)'`

### SSL certificate issues

1. Ensure domain DNS points to server IP
2. Check port 80 is accessible: `curl http://your-domain.com`
3. Review certbot logs: `docker compose -f docker-compose.prod.yml logs certbot`

### Database connection errors

1. Verify database is healthy: `docker compose -f docker-compose.prod.yml ps db`
2. Check database logs: `docker compose -f docker-compose.prod.yml logs db`
3. Verify `.env` has correct `POSTGRES_PASSWORD`

### High memory usage

1. Check Ollama memory limit (set to 3G in docker-compose.prod.yml)
2. Monitor with `docker stats`
3. Consider reducing Ollama memory limit if needed
4. Check system memory: `free -h`

## Security Checklist

- [x] SSH password authentication disabled
- [x] Root login disabled
- [x] UFW firewall configured
- [x] Fail2Ban installed
- [x] SSL certificates configured
- [x] Non-root Docker users created
- [x] Database not exposed publicly (internal network only)
- [x] Backend API not exposed publicly (routed through Nginx)
- [x] Ollama not exposed publicly (internal network only)
- [x] Security headers configured in Nginx

## Next Steps After Deployment

1. **Test the application:**
   - Visit `https://trigonaltechnology.com` in a browser
   - Test API endpoints: `https://trigonaltechnology.com/api/health`
   - Verify SSL certificate is valid

2. **Set up monitoring:**
   - Configure uptime monitoring (e.g., UptimeRobot)
   - Set up error tracking (e.g., Sentry)
   - Configure log aggregation if needed

3. **Performance optimization:**
   - Enable CDN for static assets (if needed)
   - Configure database connection pooling
   - Optimize Docker resource limits based on usage

4. **Documentation:**
   - Document any custom configurations
   - Create runbooks for common operations
   - Document backup restoration procedures
