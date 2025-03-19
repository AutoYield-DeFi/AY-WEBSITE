
import React from 'react';
import type { BlogPost } from '@/types/blog';

interface BlogJsonLdProps {
  post: BlogPost;
}

const BlogJsonLd = ({ post }: BlogJsonLdProps) => {
  if (!post) return null;
  
  const baseUrl = import.meta.env.PROD ? 'https://autoyield.io' : window.location.origin;
  const articleUrl = `${baseUrl}/blog/${post.slug}`;
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.seoDescription || post.excerpt,
    "image": post.coverImage,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "url": post.author.twitter ? `https://twitter.com/${post.author.twitter}` : undefined
    },
    "publisher": {
      "@type": "Organization",
      "name": "AutoYield",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "keywords": post.tags?.join(', ') || post.category,
    "articleSection": post.category,
    "wordCount": post.content.split(/\s+/).length
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default React.memo(BlogJsonLd);
