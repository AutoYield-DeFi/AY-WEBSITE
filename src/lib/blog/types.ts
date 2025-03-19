
import { BlogPost } from '@/types/blog';

// Cache types
export type BlogPostsCache = BlogPost[] | null;
export type RelatedPostsMap = Map<string, BlogPost[]>;
export type FilteredPostsMap = Map<string, BlogPost[]>;
