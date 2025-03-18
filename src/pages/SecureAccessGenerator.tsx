
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heading, Paragraph } from '@/components/ui/typography';
import { generateBlogToken } from '@/lib/blogTokenGenerator';
import { toast } from 'sonner';

const SecureAccessGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [accessDetails, setAccessDetails] = useState<{
    fullUrl: string;
    password: string;
    expiresAt: string;
  } | null>(null);

  const handleGenerateAccess = async () => {
    setIsGenerating(true);
    try {
      const details = await generateBlogToken();
      setAccessDetails(details);
      toast.success("Secure access token generated successfully");
    } catch (error) {
      console.error("Error generating access:", error);
      toast.error("Failed to generate secure access token");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyUrl = () => {
    if (accessDetails) {
      navigator.clipboard.writeText(accessDetails.fullUrl);
      toast.success("URL copied to clipboard");
    }
  };

  const handleCopyPassword = () => {
    if (accessDetails) {
      navigator.clipboard.writeText(accessDetails.password);
      toast.success("Password copied to clipboard");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Generate Blog Access - AutoYield</title>
        <meta name="description" content="Generate secure access to add blog posts" />
      </Helmet>

      <Navbar />

      <div className="container mx-auto px-4 py-16 mt-16">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-serif font-bold tracking-tight mb-2">Blog Admin Access</h1>
          <p className="text-muted-foreground">
            Generate secure, time-limited access to add blog posts
          </p>
        </header>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>
                <Heading as="h2" size="xl">Generate Secure Access</Heading>
              </CardTitle>
              <CardDescription>
                Create a temporary access link valid for 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!accessDetails ? (
                <div className="py-4">
                  <Paragraph className="mb-4">
                    Click the button below to generate a secure access link for adding blog posts.
                    This link will be valid for 24 hours.
                  </Paragraph>
                  <Button 
                    onClick={handleGenerateAccess} 
                    disabled={isGenerating} 
                    className="w-full"
                  >
                    {isGenerating ? 'Generating...' : 'Generate Secure Access'}
                  </Button>
                </div>
              ) : (
                <div className="space-y-6 py-4">
                  <div>
                    <Heading as="h3" size="sm" className="mb-2">Access URL</Heading>
                    <div className="flex items-center gap-2">
                      <div className="bg-muted p-3 rounded-md flex-1 text-sm font-mono break-all">
                        {accessDetails.fullUrl}
                      </div>
                      <Button variant="outline" size="sm" onClick={handleCopyUrl}>
                        Copy
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <Heading as="h3" size="sm" className="mb-2">Password</Heading>
                    <div className="flex items-center gap-2">
                      <div className="bg-muted p-3 rounded-md flex-1 text-sm font-mono">
                        {accessDetails.password}
                      </div>
                      <Button variant="outline" size="sm" onClick={handleCopyPassword}>
                        Copy
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <Heading as="h3" size="sm" className="mb-2">Expires</Heading>
                    <div className="bg-muted p-3 rounded-md text-sm">
                      {accessDetails.expiresAt}
                    </div>
                  </div>
                  
                  <Paragraph className="text-muted-foreground text-sm mt-4">
                    Share these credentials securely. For security reasons, this information will not be saved
                    and cannot be retrieved later.
                  </Paragraph>
                  
                  <Button onClick={handleGenerateAccess} className="w-full">
                    Generate New Access
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SecureAccessGenerator;
