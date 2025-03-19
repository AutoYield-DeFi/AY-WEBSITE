
import React, { useCallback, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { fetchBlogPosts, fetchBlogPostsByTag } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/typography';
import { Skeleton } from '@/components/ui/skeleton';

const Blog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const tagFilter = searchParams.get('tag');
  
  const { data: blogPosts, isLoading, isError } = useQuery({
    queryKey: ['blogPosts', tagFilter],
    queryFn: () => tagFilter 
      ? fetchBlogPostsByTag(tagFilter) 
      : fetchBlogPosts(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });

  // Memoize posts to prevent unnecessary rerenders
  const posts = useMemo(() => blogPosts || [], [blogPosts]);
  
  // Memoize handler to prevent recreation on each render
  const handleClearFilter = useCallback(() => {
    navigate('/blog');
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={tagFilter 
          ? `AutoYield Blog - Posts about ${tagFilter}` 
          : "AutoYield Blog - DeFi Insights & Liquidity Management"
        }
        description="Explore in-depth articles on DeFi, Solana ecosystem, liquidity management, and yield optimization strategies from the AutoYield team."
        keywords="DeFi blog, liquidity blog, Solana DeFi, AutoYield blog, cryptocurrency articles, yield optimization"
        ogImage="/images/blog-og-image.png"
      />
      <Navbar />

      <div className="container mx-auto px-4 py-10 mt-16">
        <header className="mb-12 text-center max-w-2xl mx-auto">
          <Heading as="h1" size="4xl" serif className="mb-4">
            AutoYield Blog
          </Heading>
          {tagFilter ? (
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
            <Button onClick={() => window.location.reload()}>
              Retry
            </Button>
          </div>
        ) : (
          <>            
            <div className="mb-10 max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
                {posts.length > 0 
                  ? (tagFilter ? `Posts tagged with #${tagFilter}` : "Latest Articles") 
                  : "No articles found"
                }
              </h2>
              
              {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                  {posts.map(post => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 border rounded-lg">
                  <p className="text-lg text-muted-foreground">
                    {tagFilter ? `No articles found for tag "${tagFilter}".` : "No articles found."}
                  </p>
                  {tagFilter && (
                    <Button variant="outline" className="mt-4" onClick={handleClearFilter}>
                      View all articles
                    </Button>
                  )}
                </div>
              )}
            </div>
            
            {posts.length > 9 && (
              <div className="flex justify-center mt-12">
                <Button asChild variant="outline" size="lg">
                  <Link to="/blog/archive">
                    See more articles
                  </Link>
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

export default React.memo(Blog);
