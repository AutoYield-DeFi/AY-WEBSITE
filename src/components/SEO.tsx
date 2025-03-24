
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { sanitizeJson } from '@/lib/sanitize';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  jsonLd?: Record<string, any>;
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  canonical,
  keywords = "AI liquidity management, Solana, DeFi, DLMM, Meteora, yield optimization, AutoYield",
  ogType = "website",
  ogImage = "/og-image.png", 
  twitterCard = "summary_large_image",
  jsonLd,
  noindex = false
}: SEOProps) => {
  const siteTitle = "AutoYield";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
  const baseUrl = import.meta.env.PROD ? "https://autoyield.io" : "http://localhost:8080";
  const fullCanonical = canonical ? canonical : undefined;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`;
  
  // Create a strong CSP header for a financial application
  const cspDirectives = [
    // Default sources restriction
    "default-src 'self'",
    
    // Scripts - only allow from self and specific CDNs needed for functionality
    "script-src 'self' 'unsafe-inline' cdn.gpteng.co", 
    
    // Styles - allow inline for shadcn/ui components and Google Fonts
    "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
    
    // Fonts - allow Google Fonts
    "font-src 'self' fonts.gstatic.com",
    
    // Images - allow self, data URIs for small images, and specific image hosts
    "img-src 'self' data: images.unsplash.com https://raw.githubusercontent.com https://*.githubusercontent.com",
    
    // Connect - API endpoints, restrict to known domains
    "connect-src 'self' https://*.autoyield.io",
    
    // Prevent embedding in iframes (anti-clickjacking)
    "frame-ancestors 'none'",
    
    // Media restrictions
    "media-src 'self'",
    
    // Object restrictions (prevent Flash, etc.)
    "object-src 'none'",
    
    // Form actions restricted to same origin
    "form-action 'self'",
    
    // Base URI restricted to prevent base tag hijacking
    "base-uri 'self'",
    
    // Block mixed content
    "upgrade-insecure-requests",
    
    // Manifest files
    "manifest-src 'self'"
  ].join("; ");
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={fullCanonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Security Headers */}
      <meta httpEquiv="Content-Security-Policy" content={cspDirectives} />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
      <meta httpEquiv="Strict-Transport-Security" content="max-age=63072000; includeSubDomains; preload" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteTitle} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:site" content="@AutoYield" />
      {fullCanonical && <meta property="twitter:url" content={fullCanonical} />}
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImage} />
      
      {/* Structured Data (JSON-LD) */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(sanitizeJson(jsonLd))}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
