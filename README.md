This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Security Features

The consultation form includes multiple layers of protection:

### 1. Rate Limiting
- **Limit**: 3 requests per minute per IP address
- **Implementation**: In-memory rate limiter (for production, use Redis/Upstash)

### 2. Honeypot Protection
- Hidden form field that bots fill but humans don't
- Silent rejection of bot submissions

### 3. Cloudflare Turnstile CAPTCHA
- Invisible CAPTCHA verification
- Requires environment variables:
  - `NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY` - Public site key (frontend)
  - `CLOUDFLARE_TURNSTILE_SECRET` - Secret key (server-side verification)

### Setup Instructions

1. **Get Cloudflare Turnstile Keys**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to Turnstile
   - Create a new site
   - Copy the Site Key and Secret Key

2. **Add to Environment Variables**:
   ```bash
   # .env.local (for development)
   NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY=your_site_key_here
   CLOUDFLARE_TURNSTILE_SECRET=your_secret_key_here
   ```

3. **For Production** (Vercel):
   - Add these variables in Vercel Dashboard → Settings → Environment Variables

**Note**: If Turnstile keys are not configured, the form will still work but CAPTCHA verification will be skipped (for development).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
