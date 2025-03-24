// Export everything from our blog modules
export * from './fetch';
export * from './cache';
export * from './data';
export * from './create';
export * from './types';
export * from './file-system';

// Also export our functions directly for easier importing
import { fetchBlogPosts, fetchBlogPostById, fetchBlogPostsByTag, fetchRelatedPosts } from './fetch';
import { clearBlogCaches } from './cache';
import { addBlogPost, createOrUpdateBlogPost } from './create';
import { deleteBlogPostFile, loadBlogPostsFromFiles, loadBlogPostFromFile, saveBlogPostToFile } from './file-system';

export {
  fetchBlogPosts,
  fetchBlogPostById,
  fetchBlogPostsByTag,
  fetchRelatedPosts,
  clearBlogCaches,
  addBlogPost,
  createOrUpdateBlogPost,
  deleteBlogPostFile,
  loadBlogPostsFromFiles,
  loadBlogPostFromFile,
  saveBlogPostToFile
};
