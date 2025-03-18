
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heading, Paragraph } from '@/components/ui/typography';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { generateSecureAccess, formatExpiryDate } from '@/lib/secureAccess';
import PasswordProtect from '@/components/auth/PasswordProtect';

const SecureAccessGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedData, setGeneratedData] = useState<{
    url: string;
    password: string;
    expiresAt: Date;
  } | null>(null);

  const handleGenerateAccess = async () => {
    setIsGenerating(true);
    
    try {
      const { urlPath, password, expiresAt } = await generateSecureAccess();
      
      // Create full URL
      const baseUrl = window.location.origin;
      const fullUrl = `${baseUrl}/blog/${urlPath}`;
      
      setGeneratedData({
        url: fullUrl,
        password,
        expiresAt
      });
      
      toast.success('Secure access generated successfully');
    } catch (error) {
      console.error('Error generating secure access:', error);
      toast.error('Failed to generate secure access');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyToClipboard = (text: string, type: 'URL' | 'password') => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success(`${type} copied to clipboard`);
      })
      .catch(() => {
        toast.error(`Failed to copy ${type}`);
      });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Generate Secure Access - AutoYield</title>
        <meta name="description" content="Generate secure, temporary access to admin features" />
      </Helmet>

      <Navbar />

      <div className="container mx-auto px-4 py-16 mt-16">
        <PasswordProtect>
          <header className="mb-12 text-center">
            <h1 className="text-3xl font-serif font-bold tracking-tight mb-2">Secure Access Generator</h1>
            <p className="text-muted-foreground">
              Generate temporary secure access links for blog administration
            </p>
          </header>

          <div className="w-full max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Generate New Secure Access</CardTitle>
                <CardDescription>
                  Create a new temporary secure access link valid for 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!generatedData ? (
                  <div className="text-center py-6">
                    <Paragraph className="mb-6">
                      Click the button below to generate a new secure access link and password.
                      This link will be valid for exactly 24 hours from generation.
                    </Paragraph>
                    <Button 
                      onClick={handleGenerateAccess} 
                      disabled={isGenerating}
                      size="lg"
                    >
                      {isGenerating ? 'Generating...' : 'Generate Secure Access'}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="rounded-md bg-amber-50 p-4 border border-amber-200">
                      <Heading as="h3" size="sm" className="text-amber-800 mb-2">
                        Access Expires: {formatExpiryDate(generatedData.expiresAt)}
                      </Heading>
                      <Paragraph className="text-amber-700 text-sm">
                        This secure access link and password will automatically expire after 24 hours.
                        Save these credentials now - they cannot be retrieved later.
                      </Paragraph>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Secure Access URL</label>
                        <div className="flex">
                          <Input
                            value={generatedData.url}
                            readOnly
                            className="font-mono text-sm bg-muted"
                          />
                          <Button
                            variant="outline"
                            className="ml-2 whitespace-nowrap"
                            onClick={() => handleCopyToClipboard(generatedData.url, 'URL')}
                          >
                            Copy URL
                          </Button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Secure Password</label>
                        <div className="flex">
                          <Input
                            value={generatedData.password}
                            readOnly
                            className="font-mono text-sm bg-muted"
                          />
                          <Button
                            variant="outline"
                            className="ml-2 whitespace-nowrap"
                            onClick={() => handleCopyToClipboard(generatedData.password, 'password')}
                          >
                            Copy Password
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                {generatedData && (
                  <Button
                    variant="outline"
                    onClick={() => setGeneratedData(null)}
                  >
                    Reset
                  </Button>
                )}
                {generatedData && (
                  <Button
                    onClick={() => window.open(generatedData.url, '_blank')}
                  >
                    Open Secure URL
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
        </PasswordProtect>
      </div>

      <Footer />
    </div>
  );
};

export default SecureAccessGenerator;
