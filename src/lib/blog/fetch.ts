
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
    // Check cache first
    const cachedPosts = getCachedPosts();
    if (cachedPosts && cachedPosts.length > 0) {
      console.log('Using cached posts:', cachedPosts.length);
      return Promise.resolve(cachedPosts);
    }
    
    console.log('No cached posts found, fetching from source');
    
    // In a real application, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          // Sort by publish date, newest first
          const sortedPosts = [...blogData].sort((a, b) => 
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
          );
          console.log('Sorted blog posts:', sortedPosts.length);
          setCachedPosts(sortedPosts);
          resolve(sortedPosts);
        } catch (error) {
          console.error("Error fetching blog posts:", error);
          // Return empty array instead of throwing
          resolve([]);
        }
      }, 500); // Increased timeout to ensure stability
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
      const cachedResult = getFilteredPostsCache(cacheKey);
      console.log(`Using cached results for tag ${tag}:`, cachedResult.length);
      return Promise.resolve(cachedResult);
    }
    
    // Get all posts first (possibly from cache)
    const allPosts = await fetchBlogPosts();
    if (!allPosts || allPosts.length === 0) {
      console.log('No posts found to filter by tag');
      return [];
    }
    
    // Filter by tag (case insensitive)
    const tagLower = tag.toLowerCase();
    const filtered = allPosts.filter(post => 
      post.tags && post.tags.some(t => t.toLowerCase() === tagLower)
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
  if (!id) {
    console.log('No post ID provided');
    return undefined;
  }
  
  try {
    console.log(`Fetching blog post by id: ${id}`);
    
    // Try to use cached posts if available
    let posts = getCachedPosts();
    if (!posts || posts.length === 0) {
      console.log('No cached posts, fetching all posts first');
      posts = await fetchBlogPosts();
    }
    
    if (!posts || posts.length === 0) {
      console.log('No posts available to search by ID');
      return undefined;
    }
    
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
    if (!category) {
      console.log('No category provided for related posts');
      return [];
    }
    
    console.log(`Fetching related posts for category: ${category}, excluding: ${excludeId}`);
    
    const cacheKey = `${category}-${excludeId}`;
    
    if (hasRelatedPostsCache(cacheKey)) {
      const cachedResult = getRelatedPostsCache(cacheKey);
      console.log(`Using cached related posts for ${category}:`, cachedResult.length);
      return Promise.resolve(cachedResult);
    }
    
    // Use cached posts if available
    let posts = getCachedPosts();
    if (!posts || posts.length === 0) {
      console.log('No cached posts, fetching all posts first');
      posts = await fetchBlogPosts();
    }
    
    if (!posts || posts.length === 0) {
      console.log('No posts available to find related posts');
      return [];
    }
    
    const related = posts
      .filter(post => post.category === category && post.id !== excludeId && post.slug !== excludeId)
      .slice(0, 3);
    
    console.log(`Found ${related.length} related posts`);
    setRelatedPostsCache(cacheKey, related);
    return related;
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
};
