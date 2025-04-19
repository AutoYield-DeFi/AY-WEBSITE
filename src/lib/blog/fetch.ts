import { BlogPost } from '@/types/blog';
import sanityClient from './sanityClient';
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
    
    // Fetch posts from Sanity
    try {
      const posts = await sanityClient.fetch(
        `*[_type == "post"] | order(publishedAt desc){
          _id,
          title,
          "id": _id,
          "slug": slug.current,
          excerpt,
          "content": body,
          publishedAt,
          category,
          "tags": tags[]->title,
          readingTime,
          seoDescription,
          "coverImage": coverImage.asset->url,
          author->{
            name,
            title,
            bio,
            "avatar": avatar.asset->url
          }
        }`
      );
      setCachedPosts(posts);
      return posts;
    } catch (error) {
      console.error("Error fetching blog posts from Sanity:", error);
      return [];
    }
  } catch (error) {
    console.error("Unexpected error in fetchBlogPosts:", error);
    return [];
  }
};

/**
 * Fetch blog posts filtered by category
 */
export const fetchBlogPostsByCategory = async (category: string): Promise<BlogPost[]> => {
  try {
    if (!category) return fetchBlogPosts();
    console.log(`Fetching posts by category: ${category}`);
    // Check cache or fetch all posts
    let posts = getCachedPosts();
    if (!posts || posts.length === 0) posts = await fetchBlogPosts();
    // Filter by exact category match
    const filtered = posts.filter(post => post.category === category);
    console.log(`Found ${filtered.length} posts for category: ${category}`);
    return filtered;
  } catch (error) {
    console.error(`Error in fetchBlogPostsByCategory for category ${category}:`, error);
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
export const fetchBlogPostById = async (id: string): Promise<BlogPost & { relatedPosts?: BlogPost[] } | undefined> => {
  if (!id) {
    console.log('No post ID provided');
    return undefined;
  }
  try {
    console.log(`Fetching blog post (with related) by id/slug: ${id}`);
    const query = `*[_type == "post" && (_id == $id || slug.current == $id)][0]{
      _id,
      title,
      "id": _id,
      "slug": slug.current,
      excerpt,
      "content": body,
      publishedAt,
      category,
      "tags": tags[]->title,
      readingTime,
      seoDescription,
      "coverImage": coverImage.asset->url,
      author->{
        name,
        title,
        bio,
        "avatar": avatar.asset->url
      },
      "relatedPosts": relatedPosts[]->{
        _id,
        title,
        "id": _id,
        "slug": slug.current,
        excerpt,
        publishedAt,
        category,
        "tags": tags[]->title,
        readingTime,
        seoDescription,
        "coverImage": coverImage.asset->url,
        author->{
          name,
          title,
          bio,
          "avatar": avatar.asset->url
        }
      }
    }`;
    const post = await sanityClient.fetch(query, {id});
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
