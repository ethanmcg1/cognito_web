# Vercel Environment Variables Setup

## Required Changes

You need to update this environment variable in your Vercel project settings:

### 1. Update APP_URL
Go to Vercel Dashboard → Your Project → Settings → Environment Variables

**Variable:** `NEXT_PUBLIC_APP_URL`
**Current Value:** `https://bolt.new`
**New Value:** Your actual Vercel URL (e.g., `https://cognito-8qk9xs67i-incog97565-webs-projects.vercel.app`)

## How to Update

1. Go to https://vercel.com/dashboard
2. Click on your project (cognito-web)
3. Go to Settings → Environment Variables
4. Find `NEXT_PUBLIC_APP_URL`
5. Click Edit and update the value to your actual Vercel deployment URL
6. Save and redeploy

## All Environment Variables Currently Set

These are already configured in Vercel (from your .env file):

- `NEXT_PUBLIC_SUPABASE_URL` ✓
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` ✓
- `STRIPE_SECRET_KEY` ✓
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` ✓
- `STRIPE_PROFESSIONAL_PRICE_ID` ✓
- `DISCORD_BOT_TOKEN` ✓
- `DISCORD_GUILD_ID` ✓

## Image Files Note

The market overview images on the homepage are currently placeholders. To fix them:
1. Replace the files in `/public/` folder with your actual image files
2. Keep the same filenames (btc.png, eth.png, gbpusd.png, etc.)
3. Push the changes to GitHub
