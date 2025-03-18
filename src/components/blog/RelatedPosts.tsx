
import React from 'react';
import type { BlogPost } from '@/types/blog';
import BlogCard from './BlogCard';

interface RelatedPostsProps {
  posts: BlogPost[];
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (posts.length === 0) return null;

  return (
    <div className="mt-20 bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-serif font-bold mb-8 max-w-5xl mx-auto">
          More from AutoYield Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(RelatedPosts);
