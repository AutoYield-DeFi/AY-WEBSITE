
import { nanoid } from 'nanoid';

// Define interfaces for secure access
interface SecureAccess {
  urlPath: string;
  hashedPassword: string;
  salt: string;
  timestamp: number;
  expiresAt: number;
}

// Store for secure access tokens
const SECURE_ACCESS_STORAGE_KEY = 'autoyield-secure-access';

/**
 * Generate a cryptographically secure random string
 */
const generateSecureToken = (length: number = 12): string => {
  return nanoid(length);
};

/**
 * Generate a secure random password (easy for humans to read)
 */
const generateSecurePassword = (): string => {
  // Create readable but secure password (avoid similar looking characters)
  const adjectives = ['Red', 'Blue', 'Green', 'Bold', 'Wise', 'Calm', 'Swift', 'Brave'];
  const nouns = ['Eagle', 'Tiger', 'Falcon', 'Dragon', 'Dolphin', 'Phoenix', 'Lion', 'Panda'];
  const numbers = Math.floor(1000 + Math.random() * 9000); // 4-digit number
  
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  
  return `${adjective}${noun}${numbers}`;
};

/**
 * Simple hash function for client-side password hashing
 * For a production app, you'd use a more robust solution like bcrypt in a server environment
 */
const hashPassword = async (password: string, salt: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + salt);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

/**
 * Generate a new secure access token (URL path and password)
 * Returns an object with the URL path, password, and expiry time
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
  
  // Save to localStorage (encrypted in a real app)
  saveSecureAccess(secureAccess);
  
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
  if (!accessData) return false;
  
  // Check if URL path matches
  if (accessData.urlPath !== urlPath) return false;
  
  // Check if expired
  if (Date.now() > accessData.expiresAt) {
    // Clean up expired token
    clearSecureAccess();
    return false;
  }
  
  // Validate password by hashing input with stored salt
  const hashedInput = await hashPassword(password, accessData.salt);
  return hashedInput === accessData.hashedPassword;
};

/**
 * Check if a URL path is valid and not expired
 */
export const isValidSecureUrlPath = (urlPath: string): boolean => {
  const accessData = getSecureAccess();
  if (!accessData) return false;
  
  // Check if URL path matches
  if (accessData.urlPath !== urlPath) return false;
  
  // Check if expired
  if (Date.now() > accessData.expiresAt) {
    // Clean up expired token
    clearSecureAccess();
    return false;
  }
  
  return true;
};

/**
 * Save secure access data to localStorage
 */
const saveSecureAccess = (accessData: SecureAccess): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(SECURE_ACCESS_STORAGE_KEY, JSON.stringify(accessData));
  }
};

/**
 * Get secure access data from localStorage
 */
const getSecureAccess = (): SecureAccess | null => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(SECURE_ACCESS_STORAGE_KEY);
    if (!data) return null;
    
    try {
      const parsed = JSON.parse(data) as SecureAccess;
      return parsed;
    } catch (e) {
      return null;
    }
  }
  return null;
};

/**
 * Clear secure access data from localStorage
 */
export const clearSecureAccess = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(SECURE_ACCESS_STORAGE_KEY);
  }
};

/**
 * Format a date as a readable string
 */
export const formatExpiryDate = (date: Date): string => {
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};
