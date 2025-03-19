
import React, { useMemo, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Separator } from '@/components/ui/separator';
import { fetchBlogPostById, fetchRelatedPosts } from '@/lib/blog';
import { useToast } from '@/components/ui/use-toast';
import BlogAuthor from '@/components/blog/BlogAuthor';
import BlogContent from '@/components/blog/BlogContent';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogCoverImage from '@/components/blog/BlogCoverImage';
import BackButton from '@/components/blog/BackButton';
import BlogJsonLd from '@/components/blog/BlogJsonLd';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    console.log(`Blog detail page loaded with ID/slug: ${id}`);
  }, [id]);
  
  const { data: post, isLoading: isPostLoading, error } = useQuery({
    queryKey: ['blogPost', id],
    queryFn: () => fetchBlogPostById(id as string),
    enabled: !!id,
    retry: 2,
  });

  const { data: relatedPosts = [] } = useQuery({
    queryKey: ['relatedPosts', post?.category, id],
    queryFn: () => fetchRelatedPosts(post?.category as string, id as string),
    enabled: !!post && !!post.category,
  });

  // Log errors for debugging
  useEffect(() => {
    if (error) {
      console.error('Error loading blog post:', error);
      toast({
        title: "Error loading blog post",
        description: "There was an issue loading this article. Please try again.",
        variant: "destructive"
      });
    }
  }, [error, toast]);

  // Memoize date formatting
  const formattedDate = useMemo(() => {
    if (!post) return '';
    const publishDate = new Date(post.publishedAt);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(publishDate);
  }, [post?.publishedAt]);

  const handleBackClick = () => {
    navigate('/blog');
  };

  if (isPostLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="btn-primary">
            Return to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={post.title}
        description={post.seoDescription || post.excerpt}
        keywords={`${post.category}, ${post.tags?.join(', ')}, AutoYield blog, DeFi, Solana, liquidity management`}
        ogImage={post.coverImage}
        canonical={post.canonical || undefined}
        ogType="article"
        jsonLd={<BlogJsonLd post={post} />}
      />
      <Navbar />

      <article className="pt-20 pb-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-6">
          <BackButton onClick={handleBackClick} />
        </div>

        {/* Article header */}
        <BlogHeader post={post} formattedDate={formattedDate} />

        {/* Cover image */}
        <BlogCoverImage src={post.coverImage} alt={post.title} />

        {/* Article body */}
        <div className="container mx-auto px-4">
          <BlogContent content={post.content} tags={post.tags} />
          <Separator className="my-12" />
          <BlogAuthor author={post.author} />
        </div>

        {/* Related posts */}
        <RelatedPosts posts={relatedPosts} />
      </article>

      <Footer />
    </div>
  );
};

export default React.memo(BlogDetail);
