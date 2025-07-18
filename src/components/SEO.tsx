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
  
  // Generate canonical URL
  // If no canonical is provided, use the current pathname without query parameters
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const defaultCanonical = `${baseUrl}${currentPath}`;
  const fullCanonical = canonical ? 
    (canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`) : 
    defaultCanonical;
  
  const safeOgImage = ogImage || "/og-image.png";
  const fullOgImage = safeOgImage.startsWith("http") ? safeOgImage : `${baseUrl}${safeOgImage}`;

  // Default organization structured data
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AutoYield",
    "url": baseUrl,
    "logo": `${baseUrl}/favicon.svg`,
    "sameAs": [
      "https://twitter.com/AutoYield",
      "https://autoyield.io"
    ],
    "description": "AI-powered DeFi liquidity management platform on Solana."
  };

  return (
    <Helmet>      {/* Basic Meta Tags - KEEP THESE */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {/* Always include canonical tag for better SEO */}
      <link rel="canonical" href={fullCanonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}      {/* Open Graph / Facebook - KEEP THESE */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />

      {/* Twitter - KEEP THESE */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:site" content="@AutoYield" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImage} />

      {/* Structured Data (JSON-LD) - KEEP THIS */}
      <script type="application/ld+json">
        {JSON.stringify(sanitizeJson(jsonLd || defaultJsonLd))}
      </script>
    </Helmet>
  );
};

export default SEO;
