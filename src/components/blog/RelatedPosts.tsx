
import React from 'react';
import type { BlogPost } from '@/types/blog';
import BlogCard from './BlogCard';

interface RelatedPostsProps {
  posts: BlogPost[];
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (posts.length === 0) return null;
  return (
    <div className="mt-12 mb-6">
      <div className="container mx-auto px-4">
        <div className="relative block mb-6">
          <h2 className="text-2xl font-sans font-bold">
            Related Articles
          </h2>
        </div>        <div className="flex flex-col gap-6">
          {posts.map(post => (
            <BlogCard 
              key={post.id} 
              post={post}
              className="flex flex-col md:flex-row w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(RelatedPosts);
