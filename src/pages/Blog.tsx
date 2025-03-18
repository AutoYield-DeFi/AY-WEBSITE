
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { fetchBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
  });

  // All posts displayed in a grid without featured posts
  const posts = blogPosts || [];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="AutoYield Blog - DeFi Insights & Liquidity Management"
        description="Explore in-depth articles on DeFi, Solana ecosystem, liquidity management, and yield optimization strategies from the AutoYield team."
        keywords="DeFi blog, liquidity blog, Solana DeFi, AutoYield blog, cryptocurrency articles, yield optimization"
        ogImage="/images/blog-og-image.png"
      />
      <Navbar />

      <div className="container mx-auto px-4 py-10 mt-16">
        <header className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">AutoYield Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights on DeFi, liquidity management, and the Solana ecosystem from the AutoYield team.
          </p>
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
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">Latest Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {posts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
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

export default Blog;
