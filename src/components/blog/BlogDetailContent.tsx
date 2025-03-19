
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogCoverImage from '@/components/blog/BlogCoverImage';
import BlogContent from '@/components/blog/BlogContent';
import BlogAuthor from '@/components/blog/BlogAuthor';
import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb';
import BackButton from '@/components/blog/BackButton';
import RelatedPosts from '@/components/blog/RelatedPosts';
import type { BlogPost } from '@/types/blog';

interface BlogDetailContentProps {
  post: BlogPost;
  formattedDate: string;
  relatedPosts: BlogPost[];
}

const BlogDetailContent = ({ post, formattedDate, relatedPosts }: BlogDetailContentProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/blog');
  };

  return (
    <article className="pt-20 pb-16">
      {/* Breadcrumb and Back Button */}
      <div className="container mx-auto px-4 mb-6">
        <div className="flex justify-between items-center">
          <BlogBreadcrumb post={post} />
          <BackButton onClick={handleBackClick} />
        </div>
      </div>

      {/* Article header */}
      <BlogHeader post={post} formattedDate={formattedDate} />

      {/* Cover image */}
      <BlogCoverImage src={post.coverImage} alt={post.title} />

      {/* Article body */}
      <div className="container mx-auto px-4">
        <BlogContent 
          content={post.content} 
          tags={post.tags || []} 
          title={post.title}
          slug={post.slug}
        />
        <Separator className="my-12" />
        {post.author && <BlogAuthor author={post.author} />}
      </div>

      {/* Related posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <RelatedPosts posts={relatedPosts} />
      )}
    </article>
  );
};

export default BlogDetailContent;
