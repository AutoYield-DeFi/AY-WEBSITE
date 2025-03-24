import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Sanitize a JSON object to prevent prototype pollution and other attacks
 * This is particularly important for DeFi applications handling financial data
 */
export function sanitizeJson(json: unknown): unknown {
  if (typeof json !== 'object' || json === null) {
    return json;
  }
  
  // Create a clean copy without prototype pollution risks
  const sanitized = Array.isArray(json) ? [] : {};
  
  // Recursive sanitization of nested objects
  Object.keys(json as object).forEach(key => {
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
 * Calculate estimated reading time for a text
 * @param text Content to calculate reading time for
 * @param wordsPerMinute Reading speed, defaults to 225 WPM
 * @returns Reading time in minutes (rounded up)
 */
export function calculateReadingTime(text: string, wordsPerMinute = 225): number {
  const cleanText = text
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
    
  const words = cleanText.split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  
  // Return at least 1 minute
  return Math.max(1, readingTime);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
