
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heading, Paragraph } from '@/components/ui/typography';
import { toast } from 'sonner';

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

  const handleSubmit = (e: React.FormEvent) => {
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
