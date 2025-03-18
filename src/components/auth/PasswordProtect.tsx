import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heading, Paragraph } from '@/components/ui/typography';
import { toast } from 'sonner';
import { validateSecureAccess, isValidSecureUrlPath } from '@/lib/secureAccess';
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
      setIsInvalidUrl(true);
      return;
    }
    
    const isValid = isValidSecureUrlPath(urlToken);
    
    if (!isValid) {
      setIsExpired(true);
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple hardcoded password for demonstration
    // In a real app, you would use a proper authentication system
    if (password === 'autoyield2024') {
      localStorage.setItem(passwordKey, 'true');
      setIsAuthenticated(true);
      toast.success('Authentication successful');
    } else {
      toast.error('Incorrect password');
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
              This secure access link has expired
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Paragraph className="mb-4">
              Secure access links are valid for 24 hours only. Please request a new access link to continue.
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
            Please enter the admin password to access this area
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="space-y-4">
              <Paragraph>
                This area is for authorized personnel only. Enter the password to continue.
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
            <Button type="submit" className="w-full">
              Authenticate
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default PasswordProtect;
