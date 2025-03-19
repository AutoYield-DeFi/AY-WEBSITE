
import React, { useCallback, useMemo, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { 
  fetchBlogPosts, 
  fetchBlogPostsByTag, 
  fetchBlogPostsByAuthor, 
  clearBlogCaches 
} from '@/lib/blog';
import { useToast } from '@/components/ui/use-toast';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogList from '@/components/blog/BlogList';
import BlogSkeleton from '@/components/blog/BlogSkeleton';
import BlogError from '@/components/blog/BlogError';

const Blog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const searchParams = new URLSearchParams(location.search);
  const tagFilter = searchParams.get('tag');
  const authorFilter = searchParams.get('author');
  
  // Clear caches on initial load to ensure fresh data
  useEffect(() => {
    clearBlogCaches();
  }, []);
  
  // Query for blog posts with better error handling
  const { data: blogPosts, isLoading, isError, refetch } = useQuery({
    queryKey: ['blogPosts', tagFilter || authorFilter || 'all'],
    queryFn: async () => {
      console.log(`Fetching blog posts with tag: ${tagFilter || 'none'} or author: ${authorFilter || 'none'}`);
      try {
        let posts;
        if (tagFilter) {
          posts = await fetchBlogPostsByTag(tagFilter);
        } else if (authorFilter) {
          posts = await fetchBlogPostsByAuthor(authorFilter);
        } else {
          posts = await fetchBlogPosts();
        }
        
        console.log(`Successfully fetched ${posts.length} posts`);
        return posts;
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
        throw error;
      }
    },
    staleTime: 0, // Set to 0 to always fetch fresh data
    retry: 2,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

  // Memoize posts to prevent unnecessary rerenders
  const posts = useMemo(() => blogPosts || [], [blogPosts]);
  
  // Handler to clear filter and navigate back to main blog page
  const handleClearFilter = useCallback(() => {
    navigate('/blog');
  }, [navigate]);
  
  // Handler for retrying failed blog post fetches
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

  // SEO title and description based on current filter
  const pageTitle = authorFilter
    ? `Articles by ${authorFilter} | AutoYield Blog`
    : tagFilter 
      ? `Posts about ${tagFilter} | AutoYield Blog` 
      : "AutoYield Blog - DeFi Insights & Liquidity Management";

  const pageDescription = authorFilter
    ? `Explore articles written by ${authorFilter} about DeFi, Solana ecosystem, and liquidity management strategies.`
    : tagFilter
      ? `Explore in-depth articles about ${tagFilter} from the AutoYield team.`
      : "Explore in-depth articles on DeFi, Solana ecosystem, liquidity management, and yield optimization strategies from the AutoYield team.";

  const pageKeywords = tagFilter
    ? `${tagFilter}, DeFi blog, liquidity blog, Solana DeFi, AutoYield blog`
    : "DeFi blog, liquidity blog, Solana DeFi, AutoYield blog, cryptocurrency articles, yield optimization";

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        ogImage="/images/blog-og-image.png"
      />
      <Navbar />

      <div className="container mx-auto px-4 py-10 mt-16">
        <BlogHeader 
          title="AutoYield Blog"
          description="Insights on DeFi, liquidity management, and the Solana ecosystem from the AutoYield team."
          tagFilter={tagFilter}
          authorFilter={authorFilter}
          onClearFilter={handleClearFilter}
        />

        {isLoading ? (
          <BlogSkeleton />
        ) : isError ? (
          <BlogError onRetry={handleRetry} />
        ) : (
          <BlogList 
            posts={posts}
            isLoading={isLoading}
            isError={isError}
            tagFilter={tagFilter}
            authorFilter={authorFilter}
            onRetry={handleRetry}
            onClearFilter={handleClearFilter}
          />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
