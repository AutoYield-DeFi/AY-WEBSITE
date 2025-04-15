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
        keywords={`${post.category}, AutoYield blog, DeFi, Solana, liquidity management, ${post.tags?.join(', ')}`}
        ogImage={post.coverImage}
        canonical={post.canonical || undefined}
        ogType="article"
        jsonLd={blogPostingJsonLd}
      />
      <Navbar />

      <article className="pt-20 pb-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-6">
          <button 
            onClick={handleBackClick}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to all posts
          </button>
        </div>

        {/* Article header */}
        <header className="container mx-auto px-4 mb-10">
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
            <h2 className="text-xl text-muted-foreground font-serif mb-8">
              {post.excerpt}
            </h2>
          
            <div className="flex items-center">
              <Avatar className="h-12 w-12 mr-4 border">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground flex items-center gap-4">
                  <span>{post.author.title}</span>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="inline-flex items-center">
                      <Calendar size={14} className="mr-1 inline-block" />
                      <time dateTime={post.publishedAt}>{formattedDate}</time>
                    </span>
                    <span className="inline-flex items-center">
                      <Clock size={14} className="mr-1 inline-block" />
                      {post.readingTime} min read
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Cover image */}
        {post.coverImage && (
          <div className="relative w-full mb-12 max-h-[600px] overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full object-cover" 
              style={{ maxHeight: "600px", objectPosition: "center" }}
              loading="eager"  
              width={1600}
              height={800}
            />
          </div>
        )}

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
