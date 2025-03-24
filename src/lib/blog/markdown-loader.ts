import { BlogPost } from '@/types/blog';
import { parseMarkdown } from '../markdown';
import { calculateReadingTime } from '../utils';
import matter from 'gray-matter';

// Interface for frontmatter in markdown blog files
export interface BlogFrontmatter {
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags?: string[];
  coverImage: string;
  author: {
    name: string;
    title: string;
    avatar: string;
    bio?: string;
    twitter?: string;
  };
  seoDescription?: string;
  canonical?: string;
}

/**
 * Parse a markdown string with frontmatter into a BlogPost object
 */
export function parseMarkdownBlog(source: string, slug: string, id?: string): BlogPost {
  // Parse frontmatter
  const { data, content } = matter(source);
  const frontmatter = data as BlogFrontmatter;
  
  // Parse markdown content to HTML
  const htmlContent = parseMarkdown(content);
  
  // Calculate reading time if not provided
  const readingTime = calculateReadingTime(content);
  
  // Convert to BlogPost format
  return {
    id: id || slug,
    slug,
    title: frontmatter.title,
    excerpt: frontmatter.excerpt,
    content: htmlContent,
    publishedAt: frontmatter.publishedAt,
    updatedAt: frontmatter.updatedAt,
    category: frontmatter.category,
    tags: frontmatter.tags || [],
    readingTime,
    coverImage: frontmatter.coverImage,
    author: frontmatter.author,
    seoDescription: frontmatter.seoDescription,
    canonical: frontmatter.canonical
  };
}

/**
 * Serialize a BlogPost object back to markdown with frontmatter
 */
export function serializeBlogToMarkdown(post: BlogPost): string {
  // Create frontmatter object
  const frontmatter: BlogFrontmatter = {
    title: post.title,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    category: post.category,
    tags: post.tags,
    coverImage: post.coverImage,
    author: post.author,
    seoDescription: post.seoDescription,
    canonical: post.canonical
  };
  
  // Convert HTML content back to markdown
  // Note: This is a simplified approach. For a more accurate HTML-to-Markdown
  // conversion, consider using libraries like turndown
  let markdownContent = post.content
    .replace(/<h1>(.*?)<\/h1>/g, '# $1')
    .replace(/<h2>(.*?)<\/h2>/g, '## $1')
    .replace(/<h3>(.*?)<\/h3>/g, '### $1')
    .replace(/<p>(.*?)<\/p>/g, '$1\n\n')
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<em>(.*?)<\/em>/g, '*$1*')
    .replace(/<ul class=".*?">(.*?)<\/ul>/g, '$1')
    .replace(/<li>(.*?)<\/li>/g, '- $1\n')
    .replace(/<a href="(.*?)".*?>(.*?)<\/a>/g, '[$2]($1)')
    .replace(/<code.*?>(.*?)<\/code>/g, '`$1`')
    .replace(/<pre.*?><code.*?>(.*?)<\/code><\/pre>/g, '```\n$1\n```')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/<blockquote.*?>(.*?)<\/blockquote>/g, '> $1');
  
  // Combine frontmatter and markdown content
  return `---
${Object.entries(frontmatter)
  .filter(([_, value]) => value !== undefined)
  .map(([key, value]) => {
    if (typeof value === 'object') {
      return `${key}:\n${Object.entries(value)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `  ${k}: "${v}"`)
        .join('\n')}`;
    }
    if (Array.isArray(value)) {
      return `${key}: [${value.map(v => `"${v}"`).join(', ')}]`;
    }
    return `${key}: "${value}"`;
  })
  .join('\n')}
---

${markdownContent.trim()}`;
}