
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { generateBlogToken, getLastGeneratedToken } from '@/lib/blogTokenGenerator';
import { BlogTokenModal } from './BlogTokenModal';

export function BlogTokenGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleGenerateToken = async () => {
    try {
      setIsLoading(true);
      await generateBlogToken();
      setIsModalOpen(true);
    } catch (error) {
      console.error('Failed to generate token:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button 
        onClick={handleGenerateToken} 
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate Blog Admin Access'}
      </Button>
      
      <BlogTokenModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tokenData={getLastGeneratedToken()}
      />
    </div>
  );
}
