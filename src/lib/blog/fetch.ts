
import { BlogPost } from '@/types/blog';
import { blogData } from './data';
import { 
  getCachedPosts, 
  setCachedPosts, 
  hasRelatedPostsCache, 
  getRelatedPostsCache, 
  setRelatedPostsCache, 
  hasFilteredPostsCache, 
  getFilteredPostsCache, 
  setFilteredPostsCache 
} from './cache';

/**
 * Fetch all blog posts with caching - ensure latest posts appear first
 */
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    console.log('Fetching all blog posts, cached:', !!getCachedPosts());
    
    if (getCachedPosts()) {
      return Promise.resolve(getCachedPosts()!);
    }
    
    // In a real application, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          console.log('Blog data length:', blogData.length);
          // Sort by publish date, newest first
          const sortedPosts = [...blogData].sort((a, b) => 
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
          );
          console.log('Sorted blog posts:', sortedPosts.length);
          setCachedPosts(sortedPosts);
          resolve(sortedPosts);
        } catch (error) {
          console.error("Error fetching blog posts:", error);
          resolve([]);
        }
      }, 100); // Reduced timeout for better performance
    });
  } catch (error) {
    console.error("Unexpected error in fetchBlogPosts:", error);
    return [];
  }
};

/**
 * Fetch blog posts filtered by tag
 */
export const fetchBlogPostsByTag = async (tag: string): Promise<BlogPost[]> => {
  try {
    if (!tag) return fetchBlogPosts();
    
    console.log(`Fetching posts by tag: ${tag}`);
    
    // Check if we have this tag cached
    const cacheKey = `tag-${tag.toLowerCase()}`;
    if (hasFilteredPostsCache(cacheKey)) {
      return Promise.resolve(getFilteredPostsCache(cacheKey));
    }
    
    // Get all posts first (possibly from cache)
    const allPosts = await fetchBlogPosts();
    
    // Filter by tag (case insensitive)
    const tagLower = tag.toLowerCase();
    const filtered = allPosts.filter(post => 
      post.tags?.some(t => t.toLowerCase() === tagLower)
    );
    
    console.log(`Found ${filtered.length} posts for tag: ${tag}`);
    
    // Cache the result
    setFilteredPostsCache(cacheKey, filtered);
    
    return filtered;
  } catch (error) {
    console.error(`Error in fetchBlogPostsByTag for tag ${tag}:`, error);
    return [];
  }
};

/**
 * Fetch a single blog post by ID with type safety - optimized performance
 */
export const fetchBlogPostById = async (id: string): Promise<BlogPost | undefined> => {
  if (!id) return undefined;
  
  try {
    console.log(`Fetching blog post by id: ${id}`);
    
    // Try to use cached posts if available
    const posts = getCachedPosts() || await fetchBlogPosts();
    const post = posts.find(post => post.id === id || post.slug === id);
    console.log(`Post found for id ${id}:`, !!post);
    return post;
  } catch (error) {
    console.error(`Error fetching blog post by id ${id}:`, error);
    return undefined;
  }
};

/**
 * Fetch related blog posts with caching - optimized
 */
export const fetchRelatedPosts = async (category: string, excludeId: string): Promise<BlogPost[]> => {
  try {
    if (!category) return [];
    
    console.log(`Fetching related posts for category: ${category}, excluding: ${excludeId}`);
    
    const cacheKey = `${category}-${excludeId}`;
    
    if (hasRelatedPostsCache(cacheKey)) {
      return Promise.resolve(getRelatedPostsCache(cacheKey));
    }
    
    // Use cached posts if available
    const posts = getCachedPosts() || await fetchBlogPosts();
    
    const related = posts
      .filter(post => post.category === category && (post.id !== excludeId && post.slug !== excludeId))
      .slice(0, 3);
    
    console.log(`Found ${related.length} related posts`);
    setRelatedPostsCache(cacheKey, related);
    return related;
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
};
