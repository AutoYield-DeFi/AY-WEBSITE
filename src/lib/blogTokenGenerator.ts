
import { generateSecureAccess, formatExpiryDate, clearSecureAccess } from './auth';
import { toast } from '@/hooks/use-toast';

/**
 * Generate a secure access token and password for blog administration
 * Returns the URL path, password, and expiry time
 */
export const generateBlogToken = async (): Promise<{
  fullUrl: string;
  password: string;
  expiresAt: string;
}> => {
  try {
    // Clear any existing tokens before generating a new one
    clearSecureAccess();
    
    // Generate secure access
    const { urlPath, password, expiresAt } = await generateSecureAccess();
    
    // Format the full URL with the correct domain
    const baseUrl = window.location.origin;
    const fullUrl = `${baseUrl}/blog/${urlPath}`;
    
    // Format expiry date for display
    const expiryFormatted = formatExpiryDate(expiresAt);
    
    console.log('Successfully generated new blog token');
    console.log('URL:', fullUrl);
    console.log('Token expires at:', expiryFormatted);
    console.log('Current time:', formatExpiryDate(new Date()));
    
    toast({
      title: "Blog token generated",
      description: `Valid until ${expiryFormatted}`,
    });
    
    return {
      fullUrl,
      password,
      expiresAt: expiryFormatted
    };
  } catch (error) {
    console.error('Error generating blog token:', error);
    toast({
      title: "Error generating token",
      description: "Please try again",
      variant: "destructive",
    });
    throw error;
  }
};
