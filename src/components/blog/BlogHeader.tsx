
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/typography';
import type { BlogPost } from '@/types/blog';

interface BlogHeaderProps {
  title?: string;
  description?: string;
  tagFilter?: string | null;
  authorFilter?: string | null;
  onClearFilter?: () => void;
  // Add these new props
  post?: BlogPost;
  formattedDate?: string;
}

const BlogHeader = ({ 
  title, 
  description, 
  tagFilter, 
  authorFilter, 
  onClearFilter, 
  post, 
  formattedDate 
}: BlogHeaderProps) => {
  // For blog detail page
  if (post) {
    return (
      <header className="container mx-auto max-w-[800px] px-4 pt-10 pb-6 text-center">
        <div className="mb-4 text-sm font-medium text-muted-foreground">
          {post.category && (
            <span className="mr-2">{post.category}</span>
          )}
          &#8226; 
          <time dateTime={post.publishedAt} className="ml-2">
            {formattedDate}
          </time>
          &#8226;
          <span className="ml-2">{post.readingTime} min read</span>
        </div>
        <Heading as="h1" size="4xl" serif className="mb-6">
          {post.title}
        </Heading>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {post.excerpt}
        </p>
      </header>
    );
  }
  
  // For the blog list page
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
