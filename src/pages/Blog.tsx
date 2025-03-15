
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Separator } from '@/components/ui/separator';
import { fetchBlogPosts } from '@/lib/blog';
import BlogFeaturedPost from '@/components/blog/BlogFeaturedPost';
import BlogCard from '@/components/blog/BlogCard';
import { ChevronRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const BlogCategories = [
  { id: 'all', name: 'All' },
  { id: 'defi', name: 'DeFi' },
  { id: 'liquidity', name: 'Liquidity' },
  { id: 'tutorials', name: 'Tutorials' },
  { id: 'market-insights', name: 'Market Insights' },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter posts by category and search query
  const filteredPosts = React.useMemo(() => {
    if (!blogPosts) return [];
    
    let filtered = blogPosts;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }
    
    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) || 
        post.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [blogPosts, activeCategory, searchQuery]);

  // Separate featured posts from regular posts
  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="AutoYield Blog - DeFi Insights & Liquidity Management"
        description="Explore in-depth articles on DeFi, Solana ecosystem, liquidity management, and yield optimization strategies from the AutoYield team."
        keywords="DeFi blog, liquidity blog, Solana DeFi, AutoYield blog, cryptocurrency articles, yield optimization"
        ogImage="/images/blog-og-image.png"
      />
      <Navbar />

      <div className={`sticky top-0 z-10 bg-white transition-all duration-200 ${isScrolled ? "shadow-md" : ""}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Search bar */}
            <div className="relative w-full md:w-64 lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {BlogCategories.map(category => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full ${activeCategory === category.id ? "" : "text-muted-foreground"}`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <header className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">AutoYield Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights on DeFi, liquidity management, and the Solana ecosystem from the AutoYield team.
          </p>
        </header>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-pulse space-y-8 w-full max-w-5xl">
              <div className="h-64 bg-gray-200 rounded-xl w-full"></div>
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
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-medium mb-4">No articles found</h2>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}>
              Reset filters
            </Button>
          </div>
        ) : (
          <>
            {featuredPost && <BlogFeaturedPost post={featuredPost} />}
            
            <div className="mt-20 mb-10">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">Latest Articles</h2>
                {regularPosts.length > 9 && (
                  <Link 
                    to="/blog/archive" 
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    View all
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {regularPosts.slice(0, 9).map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
            
            {regularPosts.length > 9 && (
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
