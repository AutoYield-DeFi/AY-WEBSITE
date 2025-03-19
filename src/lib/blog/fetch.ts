
import { blogData } from './data';
import { BlogPost } from '@/types/blog';

// In-memory cache for blog posts
let blogPostsCache: BlogPost[] | null = null;
let blogPostsByTagCache: { [tag: string]: BlogPost[] } = {};

/**
 * Clears the blog posts cache.
 */
export const clearBlogCaches = () => {
  console.log('Clearing blog posts cache');
  blogPostsCache = null;
  blogPostsByTagCache = {};
};

/**
 * Fetches all blog posts.
 * @returns Array of blog posts
 */
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  if (blogPostsCache) {
    console.log('Returning blog posts from cache');
    return blogPostsCache;
  }

  console.log('Fetching all blog posts from data source');
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 200));
  
  blogPostsCache = blogData;
  return blogPostsCache;
};

/**
 * Fetches a single blog post by its ID.
 * @param id - The ID of the blog post to fetch
 * @returns The blog post, or undefined if not found
 */
export const fetchBlogPostById = async (id: string): Promise<BlogPost | undefined> => {
  console.log(`Fetching blog post by ID: ${id}`);
  const posts = await fetchBlogPosts();
  return posts.find(post => post.id === id || post.slug === id);
};

/**
 * Fetches related blog posts based on category, excluding the current post.
 * @param category - The category of the blog post
 * @param currentPostId - The ID of the current blog post to exclude
 * @returns Array of related blog posts
 */
export const fetchRelatedPosts = async (category: string, currentPostId: string): Promise<BlogPost[]> => {
  console.log(`Fetching related blog posts for category: ${category}, excluding ID: ${currentPostId}`);
  const posts = await fetchBlogPosts();
  return posts.filter(post => 
    post.category === category && 
    post.id !== currentPostId && 
    post.slug !== currentPostId
  ).slice(0, 3);
};

/**
 * Fetches blog posts by tag.
 * @param tag - The tag to filter blog posts by
 * @returns Array of blog posts with the specified tag
 */
export const fetchBlogPostsByTag = async (tag: string): Promise<BlogPost[]> => {
  if (blogPostsByTagCache[tag]) {
    console.log(`Returning blog posts for tag "${tag}" from cache`);
    return blogPostsByTagCache[tag];
  }

  console.log(`Fetching blog posts by tag: ${tag}`);
  const posts = await fetchBlogPosts();
  const filteredPosts = posts.filter(post => post.tags && post.tags.includes(tag));
  blogPostsByTagCache[tag] = filteredPosts;
  return filteredPosts;
};

/**
 * Fetches blog posts by author name
 * @param authorName - The name of the author
 * @returns Array of blog posts by the specified author
 */
export const fetchBlogPostsByAuthor = async (authorName: string): Promise<BlogPost[]> => {
  console.log(`Fetching blog posts by author: ${authorName}`);
  
  try {
    const allPosts = await fetchBlogPosts();
    const filteredPosts = allPosts.filter(post => 
      post.author && post.author.name && 
      post.author.name.toLowerCase() === authorName.toLowerCase()
    );
    
    console.log(`Found ${filteredPosts.length} posts by author: ${authorName}`);
    return filteredPosts;
  } catch (error) {
    console.error(`Error fetching posts by author ${authorName}:`, error);
    return [];
  }
};
