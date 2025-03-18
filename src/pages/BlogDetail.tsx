
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, Calendar, Clock, Twitter, Facebook, Linkedin, Copy, Bookmark, Heart, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Separator } from '@/components/ui/separator';
import { fetchBlogPostById, fetchRelatedPosts } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from '@/components/ui/use-toast';
import { Markdown } from '@/components/ui/markdown';

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

        {/* Article header - with wider container for title */}
        <header className="container mx-auto px-4 mb-10">
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight mb-6">{post.title}</h1>
            <h2 className="text-xl text-muted-foreground font-serif mb-8">{post.excerpt}</h2>
          
            <div className="flex items-center justify-between">
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
              
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" onClick={handleCopyLink} title="Copy link">
                  <Copy size={18} />
                </Button>
                <Button variant="ghost" size="icon" title="Share on Twitter">
                  <Twitter size={18} />
                </Button>
                <Button variant="ghost" size="icon" title="Share on Facebook">
                  <Facebook size={18} />
                </Button>
                <Button variant="ghost" size="icon" title="Share on LinkedIn">
                  <Linkedin size={18} />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Cover image - full width for visual impact */}
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

        {/* Article body - narrower for readability */}
        <div className="container mx-auto px-4">
          <div className="max-w-[700px] mx-auto">
            {/* Floating share button for desktop */}
            <div className="hidden lg:block fixed left-[calc(50%-400px)] top-1/3 transform -translate-x-full">
              <div className="flex flex-col items-center space-y-3">
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10" title="Like">
                  <Heart size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10" title="Save">
                  <Bookmark size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10" title="Share">
                  <Share2 size={18} />
                </Button>
                <div className="h-16 w-px bg-gray-200 mx-auto"></div>
                <span className="text-sm text-gray-500">42</span>
              </div>
            </div>

            {/* Article content */}
            <div className="prose prose-lg lg:prose-xl mx-auto font-serif">
              <Markdown>{post.content}</Markdown>
            </div>

            {/* Mobile share and engagement bar */}
            <div className="lg:hidden flex justify-between items-center border-t border-b border-gray-100 py-4 my-8">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                  <Heart size={16} />
                  <span>42</span>
                </Button>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon">
                  <Bookmark size={18} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 size={18} />
                </Button>
              </div>
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

            <Separator className="my-12" />
            
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
          <div className="mt-20 bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-serif font-bold mb-8 max-w-5xl mx-auto">More from AutoYield Blog</h2>
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
