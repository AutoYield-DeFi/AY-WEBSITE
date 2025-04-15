
/**
 * A comprehensive utility for sanitizing user-generated content to prevent XSS attacks
 */

// Allowlist of HTML elements and attributes that are considered safe
const ELEMENT_ALLOWLIST = new Set([
  'a', 'abbr', 'article', 'b', 'blockquote', 'br', 'caption', 'code', 'col', 'colgroup', 
  'dd', 'div', 'dl', 'dt', 'em', 'figcaption', 'figure', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'hr', 'i', 'img', 'li', 'mark', 'ol', 'p', 'pre', 'q', 's', 'small', 'span', 'strong', 
  'sub', 'sup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'u', 'ul'
]);

const ATTR_ALLOWLIST: Record<string, string[]> = {
  a: ['href', 'title', 'target', 'rel'],
  img: ['src', 'alt', 'title', 'width', 'height'],
  // Add other elements and their allowed attributes as needed
};

// URLs that start with these protocols are considered safe
const SAFE_URL_PATTERNS = [
  'https://',
  'http://',
  'mailto:',
  'tel:',
  '/',
  './',
  '../',
  '#',
];

/**
 * Comprehensive HTML sanitizer to prevent XSS attacks
 * For production use, consider using DOMPurify or other established libraries
 */
export function sanitizeHtml(html: string): string {
  if (!html) return '';
  
  // Replace script tags and their content
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Remove all on* event handlers
  sanitized = sanitized.replace(/\son\w+\s*=\s*["'][^"']*["']/gi, '');
  
  // Handle potentially dangerous tags
  const dangerousTags = ['iframe', 'object', 'embed', 'form', 'input', 'button', 'meta', 'link', 'style', 'svg', 'math'];
  dangerousTags.forEach(tag => {
    const regex = new RegExp(`<${tag}\\b[^<]*(?:(?!<\\/${tag}>)<[^<]*)*<\\/${tag}>`, 'gi');
    sanitized = sanitized.replace(regex, '');
    
    // Also remove self-closing versions
    const selfClosingRegex = new RegExp(`<${tag}\\b[^>]*\\/?>`, 'gi');
    sanitized = sanitized.replace(selfClosingRegex, '');
  });
  
  // Filter data: URLs which can contain JavaScript
  sanitized = sanitized.replace(/data:[^;]*;base64,/gi, 'removed:');
  
  // Remove javascript: URLs
  sanitized = sanitized.replace(/javascript:/gi, 'removed:');
  
  // Remove expression(...) and other CSS injection vectors
  sanitized = sanitized.replace(/expression\s*\([^)]*\)/gi, '');
  sanitized = sanitized.replace(/-moz-binding[^;]*;/gi, '');
  
  // Validate all URLs in href and src attributes to ensure they start with safe protocols
  sanitized = sanitized.replace(/(<[^>]*\s(href|src|action)\s*=\s*["'])(.*?)(["'][^>]*>)/gi, (match, prefix, attr, url, suffix) => {
    const isSafe = SAFE_URL_PATTERNS.some(pattern => url.toLowerCase().startsWith(pattern));
    return isSafe ? match : `${prefix}#${suffix}`;
  });
  
  return sanitized;
}

/**
 * Sanitize markdown content before rendering
 * This function applies additional protection specific to markdown content
 */
export function sanitizeMarkdown(markdown: string): string {
  if (typeof markdown !== "string") return '';
  if (!markdown) return '';
  
  // Remove potential script injections in markdown code blocks
  let sanitized = markdown.replace(/```(?:html|javascript|js|jsx|tsx)([^```]*)```/gi, '```\n$1\n```');
  
  // Remove HTML comments that could contain malicious code
  sanitized = sanitized.replace(/<!--[\s\S]*?-->/g, '');
  
  // Handle potential HTML inside markdown (especially dangerous in comments, etc.)
  sanitized = sanitizeHtml(sanitized);
  
  return sanitized;
}

/**
 * Sanitize code snippets to prevent XSS when displaying in code blocks
 */
export function sanitizeCode(code: string): string {
  if (!code) return '';
  
  // Encode HTML entities to prevent execution when rendered
  return code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Sanitize JSON to prevent prototype pollution and other attacks
 */
export function sanitizeJson(json: unknown): unknown {
  if (typeof json !== 'object' || json === null) {
    return json;
  }
  
  // Create a clean copy without prototype pollution risks
  const sanitized = Array.isArray(json) ? [] : {};
  
  // Recursive sanitization of nested objects
  Object.keys(json).forEach(key => {
    // Skip __proto__ and constructor keys to prevent prototype pollution
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return;
    }
    
    const value = (json as Record<string, unknown>)[key];
    
    if (typeof value === 'object' && value !== null) {
      // Recursively sanitize nested objects
      (sanitized as Record<string, unknown>)[key] = sanitizeJson(value);
    } else {
      // Copy primitive values directly
      (sanitized as Record<string, unknown>)[key] = value;
    }
  });
  
  return sanitized;
}

/**
 * Validate and sanitize URL parameters
 */
export function sanitizeUrlParam(param: string): string {
  if (!param) return '';
  
  // Remove any potentially dangerous characters
  return param
    .replace(/[<>'"()*%&+]/g, '')  // Remove dangerous characters
    .trim();
}

export default {
  sanitizeHtml,
  sanitizeMarkdown,
  sanitizeCode,
  sanitizeJson,
  sanitizeUrlParam,
};
