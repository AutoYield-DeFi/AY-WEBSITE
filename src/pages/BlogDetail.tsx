
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, Calendar, Clock, Twitter, Facebook, Linkedin, Copy, Bookmark, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Separator } from '@/components/ui/separator';
import { fetchBlogPostById, fetchRelatedPosts } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { data: post, isLoading: isPostLoading } = useQuery({
    queryKey: ['blogPost', id],
    queryFn: () => fetchBlogPostById(id as string),
    enabled: !!id,
  });

  const { data: relatedPosts = [] } = useQuery({
    queryKey: ['relatedPosts', post?.category],
    queryFn: () => fetchRelatedPosts(post?.category as string, id as string),
    enabled: !!post,
  });

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

  const handleTagClick = (tag: string) => {
    navigate(`/blog?tag=${tag}`);
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

  // Format the date using Intl API for better localization
  const publishDate = new Date(post.publishedAt);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(publishDate);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={post.title}
        description={post.seoDescription || post.excerpt}
        keywords={`${post.category}, AutoYield blog, DeFi, Solana, liquidity management, ${post.tags?.join(', ')}`}
        ogImage={post.coverImage}
        canonical={post.canonical || window.location.href}
        ogType="article"
      />
      <Navbar />

      <article className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6 max-w-[740px] mx-auto">
            <button 
              onClick={handleBackClick}
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to all posts
            </button>
          </div>

          {/* Article header */}
          <header className="max-w-[740px] mx-auto mb-10">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight mb-6">{post.title}</h1>
              <h2 className="text-xl text-muted-foreground font-serif mb-6">{post.excerpt}</h2>
            
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4 border-2 border-white">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-4">
                    <span>{post.author.title}</span>
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

            {/* Social sharing */}
            <div className="flex justify-between items-center py-4 border-t border-b border-gray-100">
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" onClick={handleCopyLink} aria-label="Copy link">
                  <Copy size={18} />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Share on Twitter">
                  <Twitter size={18} />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Share on Facebook">
                  <Facebook size={18} />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Share on LinkedIn">
                  <Linkedin size={18} />
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                  <Heart size={16} />
                  <span className="text-sm">42</span>
                </Button>
                <Button variant="ghost" size="icon" aria-label="Save article">
                  <Bookmark size={18} />
                </Button>
              </div>
            </div>
          </header>

          {/* Cover image */}
          {post.coverImage && (
            <div className="mb-12 max-w-screen-lg mx-auto">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-auto object-cover" 
                  loading="eager"  
                  width={1200}
                  height={675}
                />
              </div>
            </div>
          )}

          {/* Article body */}
          <div className="max-w-[740px] mx-auto">
            <div className="prose prose-lg lg:prose-xl mx-auto font-serif">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 mb-10">
              {post.tags?.map(tag => (
                <button 
                  key={tag} 
                  onClick={() => handleTagClick(tag)}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>

            <Separator className="my-10" />
            
            {/* Author bio */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start md:items-center flex-col md:flex-row gap-6">
                <Avatar className="h-16 w-16 border-2 border-white">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-2">Written by {post.author.name}</h3>
                  <p className="text-muted-foreground mb-4">{post.author.bio}</p>
                  {post.author.twitter && (
                    <a 
                      href={`https://twitter.com/${post.author.twitter}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline inline-flex items-center"
                    >
                      <Twitter size={16} className="mr-1" />
                      @{post.author.twitter}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 max-w-5xl mx-auto">More from AutoYield Blog</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {relatedPosts.map(relatedPost => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;
