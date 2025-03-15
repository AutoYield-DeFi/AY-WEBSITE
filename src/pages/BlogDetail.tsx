
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Separator } from '@/components/ui/separator';
import { fetchBlogPostById, fetchRelatedPosts } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  
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

  if (isPostLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
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
        <div className="container mx-auto px-6 py-20 text-center">
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
        description={post.excerpt}
        keywords={`${post.category}, AutoYield blog, DeFi, Solana, liquidity management, ${post.tags?.join(', ')}`}
        ogImage={post.coverImage}
      />
      <Navbar />

      <article className="container mx-auto px-6 py-20">
        <div className="max-w-[740px] mx-auto">
          <div className="mb-6">
            <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to all posts
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-muted-foreground text-sm mb-6 gap-x-6 gap-y-2">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{post.readingTime} min read</span>
              </div>
              <div className="flex items-center">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {post.category}
                </span>
              </div>
            </div>
            
            {post.coverImage && (
              <div className="mb-10 rounded-lg overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-auto object-cover" 
                  loading="eager"  
                  width={1200}
                  height={675}
                />
              </div>
            )}

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground">{post.author.title}</div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" aria-label="Save article">
                  <Bookmark size={18} />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Share article">
                  <Share2 size={18} />
                </Button>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags?.map(tag => (
              <Link 
                key={tag} 
                to={`/blog/tag/${tag}`} 
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
              >
                #{tag}
              </Link>
            ))}
          </div>

          <Separator className="my-12" />
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{post.author.name}</h3>
                <p className="text-sm text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-16 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;
