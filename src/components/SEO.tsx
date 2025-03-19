
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterCreator?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  jsonLd?: React.ReactNode;
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
  twitterCreator,
  publishedTime,
  modifiedTime,
  author,
  section,
  jsonLd,
  noindex = false
}: SEOProps) => {
  const siteTitle = "AutoYield";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
  const baseUrl = import.meta.env.PROD ? "https://autoyield.io" : "http://localhost:8080";
  const fullCanonical = canonical ? canonical : undefined;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={fullCanonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Security Headers */}
      <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' cdn.gpteng.co; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: images.unsplash.com;" />
      <meta http-equiv="X-Content-Type-Options" content="nosniff" />
      <meta http-equiv="X-Frame-Options" content="DENY" />
      <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteTitle} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Article specific Open Graph tags */}
      {ogType === "article" && author && <meta property="article:author" content={author} />}
      {ogType === "article" && section && <meta property="article:section" content={section} />}
      {ogType === "article" && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {ogType === "article" && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@AutoYield" />
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
      {fullCanonical && <meta name="twitter:url" content={fullCanonical} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Structured Data (JSON-LD) */}
      {jsonLd}
    </Helmet>
  );
};

export default SEO;
