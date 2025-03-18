
import { generateSecureAccess, formatExpiryDate, clearSecureAccess } from './auth';

/**
 * Generate a secure access token and password for blog administration
 * Returns the URL path, password, and expiry time
 */
export const generateBlogToken = async (): Promise<{
  fullUrl: string;
  password: string;
  expiresAt: string;
}> => {
  // Clear any existing tokens before generating a new one
  clearSecureAccess();
  
  // Generate secure access
  const { urlPath, password, expiresAt } = await generateSecureAccess();
  
  // Format the full URL with the correct domain
  const baseUrl = window.location.origin;
  const fullUrl = `${baseUrl}/blog/${urlPath}`;
  
  // Format expiry date for display
  const expiryFormatted = formatExpiryDate(expiresAt);
  
  console.log('Generated new blog token with URL:', fullUrl);
  console.log('Token expires at:', expiryFormatted);
  console.log('Current time:', formatExpiryDate(new Date()));
  
  return {
    fullUrl,
    password,
    expiresAt: expiryFormatted
  };
};
