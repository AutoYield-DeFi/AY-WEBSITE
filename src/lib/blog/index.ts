
// Export everything from our blog modules
export * from './fetch';
export * from './cache';
export * from './data';
export * from './create';
export * from './types';

// Also export our functions directly for easier importing
import { fetchBlogPosts, fetchBlogPostById, fetchBlogPostsByTag, fetchRelatedPosts } from './fetch';
import { clearBlogCaches } from './cache';
import { addBlogPost } from './create';

export {
  fetchBlogPosts,
  fetchBlogPostById,
  fetchBlogPostsByTag,
  fetchRelatedPosts,
  clearBlogCaches,
  addBlogPost
};
