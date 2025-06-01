# Cloudflare Configuration for AutoYield.io

## Page Rules for WWW to Non-WWW Redirects

Since domain-level redirects cannot be handled in `_redirects` file for Cloudflare Pages, you need to set up Page Rules in your Cloudflare dashboard.

### Steps to Configure:

1. **Login to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com
   - Select your `autoyield.io` domain

2. **Navigate to Page Rules**
   - Go to "Rules" → "Page Rules" in the left sidebar

3. **Create WWW to Non-WWW Redirect Rule**
   - Click "Create Page Rule"
   - URL pattern: `www.autoyield.io/*`
   - Setting: "Forwarding URL" → "301 - Permanent Redirect"
   - Destination URL: `https://autoyield.io/$1`
   - Click "Save and Deploy"

4. **Verify HTTPS is Enforced**
   - Go to "SSL/TLS" → "Edge Certificates"
   - Ensure "Always Use HTTPS" is enabled
   - This will handle HTTP to HTTPS redirects automatically

### Current _redirects File Coverage

The `public/_redirects` file now handles:
- ✅ Trailing slash removal for consistency
- ✅ Case sensitivity fixes for Legal page parameters  
- ✅ SPA routing fallback

### Domain-Level Redirects (Handle in Cloudflare Dashboard)
- ❗ `www.autoyield.io/*` → `autoyield.io/*` (301)
- ❗ `http://autoyield.io/*` → `https://autoyield.io/*` (handled by "Always Use HTTPS")
- ❗ `http://www.autoyield.io/*` → `https://autoyield.io/*` (combination of above rules)

## DNS Configuration

Ensure your DNS records are correctly set:
- `A` record: `autoyield.io` → Cloudflare Pages IP
- `CNAME` record: `www.autoyield.io` → `autoyield.io`

## Deployment Notes

After setting up these Cloudflare Page Rules:
1. Test the redirects work properly
2. Check Google Search Console for improvements
3. Monitor indexing status over 2-4 weeks
4. Verify canonical URLs are working correctly
