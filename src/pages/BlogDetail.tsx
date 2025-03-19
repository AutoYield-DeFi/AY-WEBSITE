
import React, { useMemo, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Separator } from '@/components/ui/separator';
import { fetchBlogPostById, fetchRelatedPosts, fetchBlogPosts } from '@/lib/blog';
import { useToast } from '@/components/ui/use-toast';
import BlogAuthor from '@/components/blog/BlogAuthor';
import BlogContent from '@/components/blog/BlogContent';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogCoverImage from '@/components/blog/BlogCoverImage';
import BackButton from '@/components/blog/BackButton';
import BlogJsonLd from '@/components/blog/BlogJsonLd';
import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb';
import { BlogPost } from '@/types/blog';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [availablePosts, setAvailablePosts] = useState<{id: string, slug: string}[]>([]);
  
  // Debug available posts
  useEffect(() => {
    async function debugPosts() {
      if (id) {
        console.log(`Blog detail page loaded with ID/slug: ${id}`);
        const posts = await fetchBlogPosts();
        const simplifiedPosts = posts.map(post => ({
          id: post.id,
          slug: post.slug
        }));
        console.log("Available posts:", simplifiedPosts);
        setAvailablePosts(simplifiedPosts);
      }
    }
    debugPosts();
  }, [id]);
  
  const { 
    data: post, 
    isLoading: isPostLoading, 
    error 
  } = useQuery({
    queryKey: ['blogPost', id],
    queryFn: async () => {
      console.log(`Fetching post with ID: ${id}`);
      if (!id) return undefined;
      
      try {
        const posts = await fetchBlogPosts();
        
        // First try to find by ID
        let post = posts.find(post => post.id === id);
        
        // If not found by ID, try by slug
        if (!post) {
          console.log(`Post not found by ID, trying slug: ${id}`);
          post = posts.find(post => post.slug === id);
        }
        
        if (!post) {
          console.error(`Post not found with ID or slug: ${id}`, 
            posts.map(p => ({ id: p.id, slug: p.slug })));
          return undefined;
        } else {
          console.log(`Post found: ${post.title}`);
          return post;
        }
      } catch (error) {
        console.error(`Error fetching post by ID/slug ${id}:`, error);
        throw error;
      }
    },
    enabled: !!id,
    retry: 2,
  });

  const { data: relatedPosts = [] } = useQuery({
    queryKey: ['relatedPosts', post?.category, id],
    queryFn: () => {
      if (!post?.category || !id) return [];
      return fetchRelatedPosts(post.category, id);
    },
    enabled: !!post && !!post.category && !!id,
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
          <p className="mb-4">The blog post you're looking for doesn't exist or has been removed.</p>
          <p className="mb-4 text-sm text-gray-500">Requested ID/slug: {id}</p>
          {availablePosts.length > 0 && (
            <div className="mb-4">
              <p className="font-medium">Available posts:</p>
              <ul className="text-sm text-gray-600 mt-2">
                {availablePosts.map((p, index) => (
                  <li key={index}>ID: {p.id}, Slug: {p.slug}</li>
                ))}
              </ul>
            </div>
          )}
          <Link to="/blog" className="text-primary hover:underline">
            Return to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
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

      <article className="pt-20 pb-16">
        {/* Breadcrumb and Back Button */}
        <div className="container mx-auto px-4 mb-6">
          <div className="flex justify-between items-center">
            <BlogBreadcrumb post={post} />
            <BackButton onClick={handleBackClick} />
          </div>
        </div>

        {/* Article header */}
        {post && (
          <BlogHeader 
            title={post.title}
            description={post.excerpt}
            authorName={post.author?.name}
            authorTitle={post.author?.title}
            date={formattedDate}
            readingTime={post.readingTime}
          />
        )}

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

      <Footer />
    </div>
  );
};

export default React.memo(BlogDetail);
