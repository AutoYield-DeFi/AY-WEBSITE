import React, { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { fetchBlogPosts, fetchBlogPostsByTag } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/typography';

const Blog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const tagFilter = searchParams.get('tag');
  
  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ['blogPosts', tagFilter],
    queryFn: () => tagFilter 
      ? fetchBlogPostsByTag(tagFilter) 
      : fetchBlogPosts(),
  });

  // Memoize posts to prevent unnecessary rerenders
  const posts = blogPosts || [];
  
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
          <div className="flex justify-center py-12">
            <div className="animate-pulse space-y-8 w-full max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className="space-y-4">
                    <div className="h-48 bg-gray-200 rounded-xl"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>            
            <div className="mb-10">
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
                    No articles found for tag "{tagFilter}".
                  </p>
                  <Button variant="outline" className="mt-4" onClick={handleClearFilter}>
                    View all articles
                  </Button>
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
