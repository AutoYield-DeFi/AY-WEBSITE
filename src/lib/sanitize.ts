
/**
 * A utility for sanitizing user-generated content to prevent XSS attacks
 */

const ATTR_WHITELIST = {
  a: ['href', 'title', 'target', 'rel'],
  img: ['src', 'alt', 'title', 'width', 'height'],
  // Add other elements and their allowed attributes as needed
};

/**
 * Simple HTML sanitizer to prevent XSS attacks
 * This is a basic implementation - for production, consider using DOMPurify or other established libraries
 */
export function sanitizeHtml(html: string): string {
  if (!html) return '';
  
  // Replace script tags
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Replace onclick and other event handlers
  sanitized = sanitized.replace(/on\w+="[^"]*"/gi, '');
  sanitized = sanitized.replace(/on\w+='[^']*'/gi, '');
  
  // Handle iframes and other potentially dangerous tags
  sanitized = sanitized.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
  sanitized = sanitized.replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '');
  sanitized = sanitized.replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '');
  
  // Filter data: URLs which can contain JavaScript
  sanitized = sanitized.replace(/data:[^;]*;base64,/gi, '');
  
  // Remove javascript: URLs
  sanitized = sanitized.replace(/javascript:/gi, 'removed:');
  
  return sanitized;
}

/**
 * Sanitize markdown content before rendering
 */
export function sanitizeMarkdown(markdown: string): string {
  if (!markdown) return '';
  
  // Remove potential script injections in markdown code blocks
  let sanitized = markdown.replace(/```(?:html|javascript|js|jsx|tsx)([^```]*)```/gi, '```\n$1\n```');
  
  // Handle potential HTML inside markdown (especially dangerous in comments, etc.)
  sanitized = sanitizeHtml(sanitized);
  
  return sanitized;
}

export default {
  sanitizeHtml,
  sanitizeMarkdown,
};
