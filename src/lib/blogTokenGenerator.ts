
import { generateSecureAccess, formatExpiryDate } from './secureAccess';

/**
 * Generate a secure access token and password for blog administration
 * Returns the URL path, password, and expiry time
 */
export const generateBlogToken = async (): Promise<{
  fullUrl: string;
  password: string;
  expiresAt: string;
}> => {
  // Generate secure access
  const { urlPath, password, expiresAt } = await generateSecureAccess();
  
  // Format the full URL with the correct domain
  const baseUrl = 'https://preview--pixel-perfect-astro.lovable.app';
  const fullUrl = `${baseUrl}/blog/${urlPath}`;
  
  // Format expiry date for display
  const expiryFormatted = formatExpiryDate(expiresAt);
  
  return {
    fullUrl,
    password,
    expiresAt: expiryFormatted
  };
};
