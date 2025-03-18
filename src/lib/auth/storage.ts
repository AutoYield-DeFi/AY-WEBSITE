
import type { SecureAccess } from './types';

// Store for secure access tokens
export const SECURE_ACCESS_STORAGE_KEY = 'autoyield-secure-access';

/**
 * Save secure access data to localStorage
 */
export const saveSecureAccess = (accessData: SecureAccess): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(SECURE_ACCESS_STORAGE_KEY, JSON.stringify(accessData));
  }
};

/**
 * Get secure access data from localStorage
 */
export const getSecureAccess = (): SecureAccess | null => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(SECURE_ACCESS_STORAGE_KEY);
    if (!data) return null;
    
    try {
      const parsed = JSON.parse(data) as SecureAccess;
      return parsed;
    } catch (e) {
      console.error('Error parsing secure access data:', e);
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
