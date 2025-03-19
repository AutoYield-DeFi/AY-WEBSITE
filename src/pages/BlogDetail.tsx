
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import BlogJsonLd from '@/components/blog/BlogJsonLd';
import BlogDetailSkeleton from '@/components/blog/BlogDetailSkeleton';
import BlogPostNotFound from '@/components/blog/BlogPostNotFound';
import BlogDetailContent from '@/components/blog/BlogDetailContent';
import { useBlogPost } from '@/hooks/use-blog-post';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { 
    post, 
    isPostLoading, 
    relatedPosts, 
    formattedDate, 
    availablePosts 
  } = useBlogPost(id);

  // Debug logging
  useEffect(() => {
    console.log(`BlogDetail component loaded for ID: ${id}`);
    console.log(`Post loading: ${isPostLoading}, Post found: ${!!post}`);
    if (post) {
      console.log(`Post title: ${post.title}, slug: ${post.slug}`);
    }
  }, [id, isPostLoading, post]);

  if (isPostLoading) {
    return <BlogDetailSkeleton />;
  }

  if (!post) {
    console.error(`No post found for ID/slug: ${id}`);
    return <BlogPostNotFound id={id} availablePosts={availablePosts} />;
  }

  // Calculate baseUrl for canonical URL
  const baseUrl = window.location.origin;
  const canonicalUrl = `${baseUrl}/blog/${post.slug}`;

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={post.title}
        description={post.seoDescription || post.excerpt}
        keywords={`${post.category}, ${post.tags?.join(', ')}, AutoYield blog, DeFi, Solana, liquidity management`}
        ogImage={post.coverImage}
        canonical={canonicalUrl}
        ogType="article"
        publishedTime={post.publishedAt}
        modifiedTime={post.updatedAt || post.publishedAt}
        author={post.author?.name}
        section={post.category}
        twitterCreator={post.author?.twitter ? `@${post.author.twitter}` : undefined}
        jsonLd={post ? <BlogJsonLd post={post} /> : null}
      />
      <Navbar />
      
      <BlogDetailContent 
        post={post} 
        formattedDate={formattedDate} 
        relatedPosts={relatedPosts} 
      />

      <Footer />
    </div>
  );
};

export default React.memo(BlogDetail);
