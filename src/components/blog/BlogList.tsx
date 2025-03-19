
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BlogCard from './BlogCard';
import type { BlogPost } from '@/types/blog';

interface BlogListProps {
  posts: BlogPost[];
  isLoading: boolean;
  isError: boolean;
  authorFilter?: string | null;
  tagFilter?: string | null;
  onRetry: () => void;
  onClearFilter: () => void;
}

const BlogList = ({ 
  posts, 
  isLoading, 
  isError, 
  authorFilter, 
  tagFilter, 
  onRetry, 
  onClearFilter 
}: BlogListProps) => {
  const getHeadingText = () => {
    if (posts && posts.length > 0) {
      if (authorFilter) return `Articles by ${authorFilter}`;
      if (tagFilter) return `Posts tagged with #${tagFilter}`;
      return "Latest Articles";
    }
    return "No articles found";
  };

  return (
    <div className="mb-10 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
        {getHeadingText()}
      </h2>
      
      {posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border rounded-lg">
          <p className="text-lg text-muted-foreground">
            {authorFilter 
              ? `No articles found by ${authorFilter}.`
              : tagFilter 
                ? `No articles found for tag "${tagFilter}".` 
                : "No articles found."
            }
          </p>
          <Button variant="outline" className="mt-4" onClick={onClearFilter}>
            View all articles
          </Button>
        </div>
      )}

      {posts && posts.length > 9 && (
        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/blog/archive">
              See more articles
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
