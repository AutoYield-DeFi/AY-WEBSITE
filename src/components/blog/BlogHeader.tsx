
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/typography';

interface BlogHeaderProps {
  title: string;
  description: string;
  tagFilter?: string | null;
  authorFilter?: string | null;
  onClearFilter: () => void;
}

const BlogHeader = ({ title, description, tagFilter, authorFilter, onClearFilter }: BlogHeaderProps) => {
  return (
    <header className="mb-12 text-center max-w-2xl mx-auto">
      <Heading as="h1" size="4xl" serif className="mb-4">
        {title}
      </Heading>
      
      {authorFilter ? (
        <div className="space-y-4">
          <p className="text-xl text-muted-foreground">
            Articles written by <span className="text-primary font-medium">{authorFilter}</span>
          </p>
          <Button variant="outline" size="sm" onClick={onClearFilter}>
            View all articles
          </Button>
        </div>
      ) : tagFilter ? (
        <div className="space-y-4">
          <p className="text-xl text-muted-foreground">
            Showing posts tagged with <span className="text-primary font-medium">#{tagFilter}</span>
          </p>
          <Button variant="outline" size="sm" onClick={onClearFilter}>
            Clear filter
          </Button>
        </div>
      ) : (
        <p className="text-xl text-muted-foreground">{description}</p>
      )}
    </header>
  );
};

export default BlogHeader;
