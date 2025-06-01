// Generate sitemap with blog posts and all pages
import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const sanityClient = createClient({
  projectId: 'mtevlcny',
  dataset: 'production',
  apiVersion: '2024-04-15',
  useCdn: false
});

const BASE_URL = 'https://autoyield.io';

// Static pages
const staticPages = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/blog', changefreq: 'weekly', priority: '0.7' },
  { url: '/docs', changefreq: 'weekly', priority: '0.9' },
  { url: '/docs/welcome', changefreq: 'weekly', priority: '0.8' },
  { url: '/docs/getting-started', changefreq: 'weekly', priority: '0.8' },
  { url: '/docs/core-features', changefreq: 'weekly', priority: '0.8' },
  { url: '/docs/ai-strategies', changefreq: 'weekly', priority: '0.8' },
  { url: '/docs/security-model', changefreq: 'weekly', priority: '0.7' },
  { url: '/docs/fee-structure', changefreq: 'monthly', priority: '0.6' },
  { url: '/docs/guides', changefreq: 'weekly', priority: '0.7' },
  { url: '/docs/advanced-settings', changefreq: 'monthly', priority: '0.6' },
  { url: '/docs/faq', changefreq: 'monthly', priority: '0.7' },
  { url: '/docs/api-reference', changefreq: 'monthly', priority: '0.6' },
  { url: '/roadmap', changefreq: 'monthly', priority: '0.6' },
  { url: '/glossary', changefreq: 'monthly', priority: '0.5' },
  { url: '/faq', changefreq: 'monthly', priority: '0.8' },
  { url: '/legal', changefreq: 'monthly', priority: '0.3' }
];

async function generateSitemap() {
  try {
    console.log('Fetching blog posts for sitemap...');
    
    // Fetch blog posts from Sanity
    const blogPosts = await sanityClient.fetch(`
      *[_type == "post" && defined(slug)] | order(publishedAt desc) {
        "slug": slug.current,
        publishedAt,
        _updatedAt
      }
    `);

    console.log(`Found ${blogPosts.length} blog posts`);

    // Generate sitemap XML
    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Add static pages
    staticPages.forEach(page => {
      sitemapXml += `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    // Add blog posts
    blogPosts.forEach(post => {
      const lastmod = post._updatedAt ? new Date(post._updatedAt).toISOString().split('T')[0] : undefined;
      sitemapXml += `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ''}
  </url>`;
    });

    sitemapXml += `
</urlset>`;

    // Write sitemap to public folder
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapXml);
    
    console.log(`✅ Sitemap generated successfully with ${staticPages.length + blogPosts.length} URLs`);
    console.log(`📍 Saved to: ${sitemapPath}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the script
generateSitemap();
