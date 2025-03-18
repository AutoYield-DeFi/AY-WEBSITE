
import { generateSecureToken, generateSecurePassword, hashPassword } from './tokenUtils';
import { saveSecureAccess, getSecureAccess, clearSecureAccess as clearStorage } from './storage';
import { formatExpiryDate } from './formatUtils';
import type { SecureAccess } from './types';

/**
 * Generate a new secure access token (URL path and password)
 */
export const generateSecureAccess = async (): Promise<{
  urlPath: string;
  password: string;
  expiresAt: Date;
}> => {
  // Create timestamp and expiration (24 hours from now)
  const timestamp = Date.now();
  const expiresAt = timestamp + (24 * 60 * 60 * 1000);
  
  // Generate random tokens
  const urlToken = generateSecureToken(10);
  const password = generateSecurePassword();
  const salt = generateSecureToken(16);
  
  // Hash the password with salt
  const hashedPassword = await hashPassword(password, salt);
  
  // Create unique URL path
  const urlPath = `admin-${timestamp}-${urlToken}`;
  
  // Store the secure access data (but not the plain text password)
  const secureAccess: SecureAccess = {
    urlPath,
    hashedPassword,
    salt,
    timestamp,
    expiresAt,
  };
  
  // Clear any existing tokens before saving the new one
  clearSecureAccess();
  
  // Save to localStorage (encrypted in a real app)
  saveSecureAccess(secureAccess);
  
  console.log('Created new secure access token');
  console.log('Current time:', new Date().toISOString());
  console.log('Expires at:', new Date(expiresAt).toISOString());
  
  return {
    urlPath,
    password,
    expiresAt: new Date(expiresAt),
  };
};

/**
 * Validate a password against a secure access token
 */
export const validateSecureAccess = async (
  urlPath: string,
  password: string
): Promise<boolean> => {
  // Get stored access data
  const accessData = getSecureAccess();
  if (!accessData) {
    console.log('No access data found');
    return false;
  }
  
  // Check if URL path matches
  if (accessData.urlPath !== urlPath) {
    console.log('URL path does not match');
    return false;
  }
  
  const now = Date.now();
  
  // Check if expired
  if (now > accessData.expiresAt) {
    console.log('Token has expired:', { 
      current: new Date(now).toISOString(),
      expiry: new Date(accessData.expiresAt).toISOString() 
    });
    // Clean up expired token
    clearSecureAccess();
    return false;
  }
  
  // Validate password by hashing input with stored salt
  const hashedInput = await hashPassword(password, accessData.salt);
  const isValid = hashedInput === accessData.hashedPassword;
  
  console.log('Password validation:', isValid);
  
  return isValid;
};

/**
 * Check if a URL path is valid and not expired
 */
export const isValidSecureUrlPath = (urlPath: string): boolean => {
  const accessData = getSecureAccess();
  if (!accessData) {
    console.log('No access data found when checking URL path');
    return false;
  }
  
  // Check if URL path matches
  if (accessData.urlPath !== urlPath) {
    console.log('URL path does not match stored path');
    return false;
  }
  
  const now = Date.now();
  
  // Check if expired
  if (now > accessData.expiresAt) {
    console.log('Token has expired:', { 
      current: new Date(now).toISOString(),
      expiry: new Date(accessData.expiresAt).toISOString() 
    });
    // Clean up expired token
    clearSecureAccess();
    return false;
  }
  
  console.log('URL path is valid and not expired');
  return true;
};

/**
 * Clear secure access data from localStorage
 */
export const clearSecureAccess = (): void => {
  clearStorage();
};

// Re-export formatExpiryDate for backward compatibility
export { formatExpiryDate };
