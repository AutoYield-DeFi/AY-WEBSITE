
import React from 'react';
import { Button } from '@/components/ui/button';

interface BlogErrorProps {
  onRetry: () => void;
}

const BlogError = ({ onRetry }: BlogErrorProps) => {
  return (
    <div className="text-center py-12 border rounded-lg max-w-5xl mx-auto">
      <p className="text-lg text-muted-foreground mb-4">
        Unable to load blog posts. Please try again later.
      </p>
      <Button onClick={onRetry}>
        Retry
      </Button>
    </div>
  );
};

export default BlogError;
