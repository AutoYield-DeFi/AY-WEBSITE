
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heading, Paragraph } from '@/components/ui/typography';
import { toast } from 'sonner';
import { validateSecureAccess, isValidSecureUrlPath, clearSecureAccess } from '@/lib/secureAccess';
import { useLocation, Navigate } from 'react-router-dom';

interface PasswordProtectProps {
  children: React.ReactNode;
  passwordKey?: string;
}

const PasswordProtect: React.FC<PasswordProtectProps> = ({ 
  children, 
  passwordKey = 'blog-admin-auth' 
}) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if already authenticated
    if (typeof window !== 'undefined') {
      const storedAuth = localStorage.getItem(passwordKey);
      return storedAuth === 'true';
    }
    return false;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const [isInvalidUrl, setIsInvalidUrl] = useState(false);
  const location = useLocation();

  // Extract the URL token from the path
  const getUrlToken = (): string | null => {
    const pathParts = location.pathname.split('/');
    const lastPart = pathParts[pathParts.length - 1];
    
    // Check if it matches our URL pattern (admin-timestamp-token)
    if (lastPart.startsWith('admin-')) {
      return lastPart;
    }
    
    return null;
  };

  // Validate the URL on component mount
  useEffect(() => {
    const urlToken = getUrlToken();
    
    if (!urlToken) {
      console.log('Invalid URL format, no token found');
      setIsInvalidUrl(true);
      return;
    }
    
    console.log('Checking if URL is valid:', urlToken);
    const isValid = isValidSecureUrlPath(urlToken);
    
    if (!isValid) {
      console.log('URL has expired or is invalid');
      setIsExpired(true);
    } else {
      console.log('URL is valid and not expired');
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const urlToken = getUrlToken();
      
      if (!urlToken) {
        toast.error('Invalid access URL');
        return;
      }
      
      const isValid = await validateSecureAccess(urlToken, password);
      
      if (isValid) {
        localStorage.setItem(passwordKey, 'true');
        setIsAuthenticated(true);
        toast.success('Authentication successful');
      } else {
        toast.error('Incorrect password or expired link');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      toast.error('Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle invalid URL case
  if (isInvalidUrl) {
    return <Navigate to="/404" replace />;
  }

  // Handle expired link case
  if (isExpired) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>
              <Heading as="h1" size="xl">Link Expired</Heading>
            </CardTitle>
            <CardDescription>
              This secure access link has expired or is invalid
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Paragraph className="mb-4">
              Secure access links are valid for 24 hours only. Please generate a new access link to continue.
            </Paragraph>
            <Paragraph className="text-sm text-muted-foreground mt-2">
              Note: If you just generated this link and are seeing this message, there might be an issue with your browser's date and time settings.
            </Paragraph>
          </CardContent>
          <CardFooter>
            <Button onClick={() => window.location.href = '/'} className="w-full">
              Return to Home
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>
            <Heading as="h1" size="xl">Protected Area</Heading>
          </CardTitle>
          <CardDescription>
            Please enter the secure password to access this area
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="space-y-4">
              <Paragraph>
                This area is for authorized personnel only. Enter the password provided to continue.
              </Paragraph>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Authenticating...' : 'Authenticate'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default PasswordProtect;
