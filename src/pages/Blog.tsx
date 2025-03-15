
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Separator } from '@/components/ui/separator';
import { fetchBlogPosts } from '@/lib/blog';
import BlogFeaturedPost from '@/components/blog/BlogFeaturedPost';
import BlogCard from '@/components/blog/BlogCard';
import { ChevronRight } from 'lucide-react';

const BlogCategories = [
  { id: 'all', name: 'All' },
  { id: 'defi', name: 'DeFi' },
  { id: 'liquidity', name: 'Liquidity' },
  { id: 'tutorials', name: 'Tutorials' },
  { id: 'market-insights', name: 'Market Insights' },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');
  
  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
  });

  // Filter posts by category if not "all"
  const filteredPosts = React.useMemo(() => {
    if (!blogPosts) return [];
    if (activeCategory === 'all') return blogPosts;
    return blogPosts.filter(post => post.category === activeCategory);
  }, [blogPosts, activeCategory]);

  // Separate featured posts from regular posts
  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Blog"
        description="Explore AutoYield's blog for in-depth articles on DeFi, liquidity management, and yield optimization strategies on Solana."
        keywords="DeFi blog, liquidity blog, Solana DeFi, AutoYield blog, cryptocurrency articles, yield optimization"
      />
      <Navbar />

      <div className="container mx-auto px-6 py-20">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">AutoYield Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Insights on DeFi, liquidity management, and the Solana ecosystem from the AutoYield team.
          </p>
        </header>

        <div className="flex flex-wrap gap-4 mb-8">
          {BlogCategories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary/10 text-primary'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-6 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-4 bg-gray-200 rounded col-span-2"></div>
                    <div className="h-4 bg-gray-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {featuredPost && <BlogFeaturedPost post={featuredPost} />}
            
            <Separator className="my-12" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {regularPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <Link 
                to="/blog/archive" 
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                View all posts
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
