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
