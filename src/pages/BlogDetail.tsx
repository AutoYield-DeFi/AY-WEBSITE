import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
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
        <div className="container mx-auto px-4 py-12">
          {/* Simplified loading state to match potential new layout */}
          <div className="max-w-3xl mx-auto animate-pulse space-y-8">
            <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto"></div> {/* Title */}
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div> {/* Meta */}
            <div className="h-80 bg-gray-200 rounded"></div> {/* Image */}
            <div className="space-y-4 pt-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
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
        keywords={`${post.category}, AutoYield blog, DeFi, Solana, liquidity management, ${post.tags?.join(', ')}`}
        ogImage={post.coverImage}
        canonical={post.canonical || undefined}
        ogType="article"
        jsonLd={blogPostingJsonLd}
      />
      <Navbar />

      {/* Back Button - Minimalist */}
      <div className="container mx-auto px-4 pt-20 mb-6 text-center sm:text-left"> {/* Centered on small screens */}
        <button 
          onClick={handleBackClick}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} className="mr-1.5" />
          Back to all posts
        </button>
      </div>

      {/* Use max-w-3xl for the main article container */}
      <article className="container mx-auto px-4 max-w-3xl pb-16"> 
        {/* Article header - Centered */}
        <header className="mb-10 text-center"> {/* Center align header text */}
          {/* Category Link (Optional, similar to fuwari) */}
          {post.category && (
             <Link 
               to={`/blog?category=${encodeURIComponent(post.category)}`} 
               className="text-sm font-medium text-primary hover:underline mb-2 inline-block"
             >
               {post.category}
             </Link>
           )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-tight mb-4">
            {post.title}
          </h1>
          {/* Excerpt can be optional or styled differently if needed */}
          {/* <h2 className="text-lg text-muted-foreground font-sans mb-6">
            {post.excerpt}
          </h2> */}
          
          {/* Simplified Meta Info - Centered */}
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mt-4">
             <span className="inline-flex items-center">
               <Calendar size={14} className="mr-1.5 inline-block" />
               <time dateTime={post.publishedAt}>{formattedDate}</time>
             </span>
             <span className="inline-flex items-center">
               <Clock size={14} className="mr-1.5 inline-block" />
               {post.readingTime} min read
             </span>
             {/* Author name can be here or just rely on the bottom component */}
             {/* <span className="inline-flex items-center">
               <User size={14} className="mr-1.5 inline-block" /> 
               {post.author.name}
             </span> */}
           </div> 
        </header>

        {/* Cover image - Placed after header, potentially wider */}
        {post.coverImage && (
          <div className="relative w-full mb-10 rounded-lg overflow-hidden shadow-md"> {/* Added rounded corners and shadow */}
            <img 
              src={post.coverImage} 
              alt={`Cover image for ${post.title}`} 
              className="w-full h-auto object-cover" // Use object-cover, remove max-height
              loading="eager"  
              width={1200} // Adjust based on typical image size/ratio
              height={630} // Standard OG image ratio
            />
          </div>
        )}

        {/* Article body - Uses the same max-w-3xl as the parent article */}
        <div className="prose prose-lg max-w-none dark:prose-invert mx-auto"> {/* Use Tailwind typography plugin styles */}
          <BlogContent content={post.content} tags={post.tags} /> 
        </div>

        {/* Separator and Author - Still within max-w-3xl */}
        <Separator className="my-12" />
        <BlogAuthor author={post.author} />
        
        {/* Related posts - Still within max-w-3xl */}
        {relatedPosts && relatedPosts.length > 0 && (
          <>
            <Separator className="my-12" /> 
            <RelatedPosts posts={relatedPosts} />
          </>
        )}
      </article>

      <Footer />
    </div>
  );
};

export default React.memo(BlogDetail);
