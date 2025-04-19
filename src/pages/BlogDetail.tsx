import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Separator } from '@/components/ui/separator';
import { fetchBlogPostById, fetchRelatedPosts } from '@/lib/blog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/components/ui/use-toast';
import BlogAuthor from '@/components/blog/BlogAuthor';
import BlogContent from '@/components/blog/BlogContent';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { Link } from 'react-router-dom';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const { data: post, isLoading: isPostLoading, error } = useQuery({
    queryKey: ['blogPost', slug],
    queryFn: () => fetchBlogPostById(slug as string),
    enabled: !!slug,
    retry: 2,
  });

  const { data: relatedPosts = [] } = useQuery({
    queryKey: ['relatedPosts', post?.category, slug],
    queryFn: () => fetchRelatedPosts(post?.category as string, slug as string),
    enabled: !!post && !!post.category,
  });

  // Log errors for debugging
  React.useEffect(() => {
    if (error) {
      console.error('Error loading blog post:', error);
    }
  }, [error]);

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

  // Generate BlogPosting structured data for SEO
  const blogPostingJsonLd = post ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.seoDescription || post.excerpt,
    "image": post.coverImage,
    "author": {
      "@type": "Person",
      "name": post.author?.name,
      "description": post.author?.bio,
      "jobTitle": post.author?.title
    },
    "publisher": {
      "@type": "Organization",
      "name": "AutoYield",
      "logo": {
        "@type": "ImageObject",
        "url": `${window.location.origin}/favicon.svg`
      }
    },
    "datePublished": post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": post.canonical || window.location.href
    }
  } : undefined;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Article link has been copied to clipboard",
    });
  };

  const handleBackClick = () => {
    navigate('/blog');
  };

  if (isPostLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          {/* Minimalist loading state */}
          <div className="max-w-3xl mx-auto animate-pulse">
            <div className="mb-12">
              <div className="h-8 bg-gray-100 rounded w-24 mx-auto mb-6"></div> {/* Category */}
              <div className="h-10 bg-gray-100 rounded w-3/4 mx-auto mb-4"></div> {/* Title */}
              <div className="h-6 bg-gray-100 rounded w-1/3 mx-auto"></div> {/* Meta */}
            </div>
            <div className="h-[400px] bg-gray-100 rounded mb-12"></div> {/* Image */}
            <div className="space-y-6 pt-4 mb-8">
              <div className="h-4 bg-gray-100 rounded"></div>
              <div className="h-4 bg-gray-100 rounded"></div>
              <div className="h-4 bg-gray-100 rounded w-5/6"></div>
              <div className="h-4 bg-gray-100 rounded w-3/4"></div>
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
        <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <p className="mb-8 text-gray-600">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
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
        keywords={`${post.category}, AutoYield blog, DeFi, Solana, liquidity management, ${post.tags?.join(', ')}`}
        ogImage={post.coverImage}
        canonical={post.canonical || undefined}
        ogType="article"
        jsonLd={blogPostingJsonLd}
      />
      <Navbar />

      {/* Back navigation */}
      <div className="container mx-auto px-4 md:px-8 pt-24 pb-6 max-w-3xl">
        <button 
          onClick={handleBackClick}
          className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} className="mr-1.5" />
          Back to all posts
        </button>
      </div>

      {/* Article container */}
      <article className="container mx-auto px-4 md:px-8 max-w-3xl pb-16">
        {/* Article header - Simple and centered */}
        <header className="mb-16 text-center">
          {/* Category */}
          {post.category && (
            <Link 
              to={`/blog?category=${encodeURIComponent(post.category)}`} 
              className="inline-block mb-3 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-primary/10 hover:text-primary transition-colors capitalize"
            >
              {post.category}
            </Link>
          )}
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium leading-tight mb-6">
            {post.title}
          </h1>
          
          {/* Meta info */}
          <div className="flex flex-wrap items-center justify-center text-sm text-gray-500 gap-4 mt-6">
            {/* Date */}
            <span className="inline-flex items-center">
              <Calendar size={14} className="mr-1.5 opacity-70" />
              <time dateTime={post.publishedAt}>{formattedDate}</time>
            </span>
            
            {/* Reading time */}
            <span className="inline-flex items-center">
              <Clock size={14} className="mr-1.5 opacity-70" />
              {post.readingTime} min read
            </span>
            
            {/* Author */}
            <span className="inline-flex items-center">
              <User size={14} className="mr-1.5 opacity-70" />
              {post.author.name}
            </span>
          </div>
        </header>

        {/* Cover image */}
        {post.coverImage && (
          <div className="relative w-full -mx-4 sm:mx-0 mb-16 overflow-hidden rounded-lg">
            <img 
              src={post.coverImage} 
              alt={`Cover image for ${post.title}`} 
              className="w-full h-auto object-cover" 
              loading="eager"  
              width={1200}
              height={630}
            />
          </div>
        )}

        {/* Article body - Uses the same max-w-3xl as the parent article */}
        <div className="prose prose-lg max-w-none dark:prose-invert mx-auto"> {/* Use Tailwind typography plugin styles */}
          <BlogContent content={post.content} tags={post.tags} /> 
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Link 
                key={tag}
                to={`/blog?tag=${encodeURIComponent(tag)}`} 
                className="px-3 py-1 bg-gray-100 text-gray-800 hover:bg-primary/10 hover:text-primary transition-colors rounded-full text-sm"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}

        {/* Author section */}
        <div className="mt-16 pt-4 border-t border-gray-100">
          <BlogAuthor author={post.author} />
        </div>
        
        {/* Related posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <div className="mt-20">          
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
};

export default React.memo(BlogDetail);
