import React, { useCallback, useMemo, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { fetchBlogPosts, fetchBlogPostsByTag, fetchBlogPostsByCategory, clearBlogCaches } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/typography';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const searchParams = new URLSearchParams(location.search);
  const tagFilter = searchParams.get('tag');
  const categoryFilter = searchParams.get('category');
  
  // Clear caches on initial load to ensure fresh data
  useEffect(() => {
    clearBlogCaches();
  }, []);
  
  // Query for blog posts with better error handling
  const { data: blogPosts, isLoading, isError, refetch } = useQuery({
    queryKey: ['blogPosts', categoryFilter || tagFilter || 'all'],
    queryFn: async () => {
      if (categoryFilter) {
        console.log(`Fetching blog posts in category: ${categoryFilter}`);
        return await fetchBlogPostsByCategory(categoryFilter);
      }
      if (tagFilter) {
        console.log(`Fetching blog posts with tag: ${tagFilter}`);
        return await fetchBlogPostsByTag(tagFilter);
      }
      console.log('Fetching all blog posts');
      return await fetchBlogPosts();
    },
    staleTime: 0, // Set to 0 to always fetch fresh data
    retry: 2,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

  // Memoize posts to prevent unnecessary rerenders
  const posts = useMemo(() => blogPosts || [], [blogPosts]);
  
  // Memoize handler to prevent recreation on each render
  const handleClearFilter = useCallback(() => {
    navigate('/blog');
  }, [navigate]);
  
  const handleRetry = useCallback(() => {
    console.log('Manually retrying blog post fetch');
    toast({
      title: "Retrying...",
      description: "Attempting to load blog posts again",
    });
    
    refetch().catch(err => {
      console.error('Failed to refetch blog posts:', err);
      toast({
        title: "Failed to load blog posts",
        description: "Please try again later",
        variant: "destructive"
      });
    });
  }, [refetch, toast]);

  console.log('Blog render state:', { 
    isLoading, 
    isError, 
    postsCount: posts?.length || 0,
    location: location.pathname
  });
  
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={
          categoryFilter
            ? `AutoYield Blog - ${categoryFilter}`
            : tagFilter
            ? `AutoYield Blog - Posts about ${tagFilter}`
            : 'AutoYield Blog - DeFi Insights & Liquidity Management'
        }
        description="Explore in-depth articles on DeFi, Solana ecosystem, liquidity management, and yield optimization strategies from the AutoYield team."
        keywords="DeFi blog, liquidity blog, Solana DeFi, AutoYield blog, cryptocurrency articles, yield optimization"
        ogImage="/images/blog-og-image.png"
      />
      <Navbar />

      <div className="container mx-auto px-4 py-10 mt-16">
        <header className="mb-12 text-center max-w-2xl mx-auto">
          <Heading as="h1" size="4xl" className="mb-4">
            AutoYield Blog
          </Heading>
          {categoryFilter ? (
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground">
                Showing posts in category <span className="text-primary font-medium">{categoryFilter}</span>
              </p>
              <Button variant="outline" size="sm" onClick={handleClearFilter}>
                Clear filter
              </Button>
            </div>
          ) : tagFilter ? (
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground">
                Showing posts tagged with <span className="text-primary font-medium">#{tagFilter}</span>
              </p>
              <Button variant="outline" size="sm" onClick={handleClearFilter}>
                Clear filter
              </Button>
            </div>
          ) : (
            <p className="text-xl text-muted-foreground">
              Insights on DeFi, liquidity management, and the Solana ecosystem from the AutoYield team.
            </p>
          )}
        </header>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-lg p-4 h-[400px]">
                <Skeleton className="h-48 w-full mb-4 rounded-lg" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-5/6 mb-2" />
                <Skeleton className="h-10 w-full mt-auto" />
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="text-center py-12 border rounded-lg max-w-5xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4">
              Unable to load blog posts. Please try again later.
            </p>
            <Button onClick={handleRetry}>
              Retry
            </Button>
          </div>
        ) : (
          <>            
            <div className="mb-10 max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-sans font-bold mb-8">
                {posts && posts.length > 0 
                  ? (categoryFilter
                      ? `Posts in ${categoryFilter}`
                      : tagFilter
                      ? `Posts tagged with #${tagFilter}`
                      : 'Latest Articles'
                    )
                  : 'No articles found'
                }
              </h2>
              
              {posts && posts.length > 0 ? (
                <div className="grid grid-cols-1 gap-x-8 gap-y-12">
                  {posts.map((post, idx) => (
                    <BlogCard key={post.id ?? post.slug ?? idx} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 border rounded-lg">
                  <p className="text-lg text-muted-foreground">
                    {categoryFilter 
                      ? `No articles found for category "${categoryFilter}".`
                      : tagFilter 
                      ? `No articles found for tag "${tagFilter}".`
                      : "No articles found."
                    }
                  </p>
                  {(categoryFilter || tagFilter) && (
                    <Button variant="outline" className="mt-4" onClick={handleClearFilter}>
                      View all articles
                    </Button>
                  )}
                </div>
              )}
            </div>
            
            {posts && posts.length > 9 && (
              <div className="flex justify-center mt-12">
                <Button asChild variant="outline" size="lg">
                  <Link to="/blog/archive">See more articles</Link>
                </Button>
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
