
import { BlogPost } from '@/types/blog';
import { BlogPostsCache, RelatedPostsMap, FilteredPostsMap } from './types';

// Cache storage
let cachedPosts: BlogPostsCache = null;
let cachedRelatedPostsMap: RelatedPostsMap = new Map();
let cachedFilteredPostsMap: FilteredPostsMap = new Map();

/**
 * Get all cached blog posts
 */
export const getCachedPosts = (): BlogPostsCache => {
  return cachedPosts;
};

/**
 * Set cached blog posts
 */
export const setCachedPosts = (posts: BlogPost[]): void => {
  cachedPosts = posts;
};

/**
 * Check if related posts are cached for a category
 */
export const hasRelatedPostsCache = (cacheKey: string): boolean => {
  return cachedRelatedPostsMap.has(cacheKey);
};

/**
 * Get cached related posts
 */
export const getRelatedPostsCache = (cacheKey: string): BlogPost[] => {
  return cachedRelatedPostsMap.get(cacheKey) || [];
};

/**
 * Set cached related posts
 */
export const setRelatedPostsCache = (cacheKey: string, posts: BlogPost[]): void => {
  cachedRelatedPostsMap.set(cacheKey, posts);
};

/**
 * Check if filtered posts are cached for a tag
 */
export const hasFilteredPostsCache = (cacheKey: string): boolean => {
  return cachedFilteredPostsMap.has(cacheKey);
};

/**
 * Get cached filtered posts
 */
export const getFilteredPostsCache = (cacheKey: string): BlogPost[] => {
  return cachedFilteredPostsMap.get(cacheKey) || [];
};

/**
 * Set cached filtered posts
 */
export const setFilteredPostsCache = (cacheKey: string, posts: BlogPost[]): void => {
  cachedFilteredPostsMap.set(cacheKey, posts);
};

/**
 * Clear all blog caches
 */
export const clearBlogCaches = (): void => {
  console.log('Clearing all blog caches');
  cachedPosts = null;
  cachedRelatedPostsMap.clear();
  cachedFilteredPostsMap.clear();
};
