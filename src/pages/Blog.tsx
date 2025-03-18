
import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { fetchPaginatedBlogPosts, fetchPaginatedBlogPostsByTag } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/button';
import { Heading, Paragraph } from '@/components/ui/typography';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import ScrollToTop from '@/components/ScrollToTop';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const tagFilter = searchParams.get('tag');
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  
  // Monitor scroll position for ScrollToTop button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ['blogPosts', tagFilter, currentPage, POSTS_PER_PAGE],
    queryFn: () => tagFilter 
      ? fetchPaginatedBlogPostsByTag(tagFilter, currentPage, POSTS_PER_PAGE) 
      : fetchPaginatedBlogPosts(currentPage, POSTS_PER_PAGE),
    placeholderData: (previousData) => previousData, // Correctly keep previous data while fetching new data
  });
  
  // Handle pagination
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(location.search);
    params.set('page', page.toString());
    navigate(`${location.pathname}?${params.toString()}`);
    
    // Scroll to top of content
    const blogContent = document.getElementById('blog-content');
    if (blogContent) {
      blogContent.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Clear tag filter but retain current page
  const handleClearFilter = () => {
    const params = new URLSearchParams();
    params.set('page', '1'); // Reset to page 1 when clearing filter
    navigate(`${location.pathname}?${params.toString()}`);
  };
  
  // Generate pagination range
  const getPaginationRange = (totalPages: number, currentPage: number) => {
    const delta = 1; // Number of pages to show on either side of current page
    const range = [];
    
    // Always include first page
    range.push(1);
    
    // Calculate the start and end of the pagination range
    const rangeStart = Math.max(2, currentPage - delta);
    const rangeEnd = Math.min(totalPages - 1, currentPage + delta);
    
    // Add ellipsis after first page if needed
    if (rangeStart > 2) {
      range.push('ellipsis1');
    }
    
    // Add the range of pages around current page
    for (let i = rangeStart; i <= rangeEnd; i++) {
      range.push(i);
    }
    
    // Add ellipsis before last page if needed
    if (rangeEnd < totalPages - 1) {
      range.push('ellipsis2');
    }
    
    // Always include last page if it's not the same as first page
    if (totalPages > 1) {
      range.push(totalPages);
    }
    
    return range;
  };

  // Extract data
  const posts = data?.posts || [];
  const totalPages = data?.totalPages || 1;
  
  // Get pagination range
  const paginationRange = totalPages > 1 ? getPaginationRange(totalPages, currentPage) : [];

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
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

      <div id="blog-content" className="container mx-auto px-4 py-10 mt-16">
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
                {Array(POSTS_PER_PAGE).fill(0).map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="h-48 w-full rounded-xl" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : isError ? (
          <div className="text-center py-12 border rounded-lg">
            <p className="text-lg text-destructive">
              Error loading blog posts. Please try again later.
            </p>
            <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
              Retry
            </Button>
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
                    No articles found {tagFilter ? `for tag "${tagFilter}"` : ''}.
                  </p>
                  {tagFilter && (
                    <Button variant="outline" className="mt-4" onClick={handleClearFilter}>
                      View all articles
                    </Button>
                  )}
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination className="my-8">
                <PaginationContent>
                  {/* Previous page button */}
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage - 1);
                        }} 
                      />
                    </PaginationItem>
                  )}
                  
                  {/* Page numbers */}
                  {paginationRange.map((page, index) => (
                    <PaginationItem key={index}>
                      {page === 'ellipsis1' || page === 'ellipsis2' ? (
                        <PaginationEllipsis />
                      ) : (
                        <PaginationLink 
                          href="#" 
                          isActive={page === currentPage}
                          onClick={(e) => {
                            e.preventDefault();
                            if (typeof page === 'number') {
                              handlePageChange(page);
                            }
                          }}
                        >
                          {page}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}
                  
                  {/* Next page button */}
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage + 1);
                        }} 
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            )}
          </>
        )}
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 z-50",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <Footer />
    </div>
  );
};

export default Blog;
