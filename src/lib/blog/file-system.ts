import { BlogPost } from '@/types/blog';
import { parseMarkdownBlog, serializeBlogToMarkdown } from './markdown-loader';

// Use localStorage in the browser environment instead of the file system
const BLOG_STORAGE_KEY = 'autoyield-blog-posts';

/**
 * Check if we're running in a browser environment
 */
const isBrowser = typeof window !== 'undefined';

/**
 * Ensure local storage is initialized for blog posts
 */
export function ensureBlogStorageExists(): void {
  if (isBrowser && !localStorage.getItem(BLOG_STORAGE_KEY)) {
    localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify({}));
  }
}

/**
 * Load all blog posts from storage
 */
export async function loadBlogPostsFromFiles(): Promise<BlogPost[]> {
  ensureBlogStorageExists();
  
  try {
    if (isBrowser) {
      // Browser implementation using localStorage
      const storedPosts = JSON.parse(localStorage.getItem(BLOG_STORAGE_KEY) || '{}');
      
      // Convert object of posts to array
      const blogPosts = Object.values(storedPosts) as BlogPost[];
      
      // Sort by publish date, newest first
      return blogPosts.sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    } else {
      // In a production environment, this would use the actual file system
      // For now, we'll return an empty array
      console.warn('File system operations not available in this environment');
      return [];
    }
  } catch (error) {
    console.error('Error loading blog posts from storage:', error);
    return [];
  }
}

/**
 * Load a specific blog post from storage by slug
 */
export async function loadBlogPostFromFile(slug: string): Promise<BlogPost | undefined> {
  ensureBlogStorageExists();
  
  try {
    if (isBrowser) {
      // Browser implementation using localStorage
      const storedPosts = JSON.parse(localStorage.getItem(BLOG_STORAGE_KEY) || '{}');
      return storedPosts[slug];
    } else {
      // Non-browser environments
      console.warn('File system operations not available in this environment');
      return undefined;
    }
  } catch (error) {
    console.error(`Error loading blog post from storage (${slug}):`, error);
    return undefined;
  }
}

/**
 * Save a blog post to storage
 */
export async function saveBlogPostToFile(post: BlogPost): Promise<boolean> {
  ensureBlogStorageExists();
  
  try {
    if (isBrowser) {
      // Browser implementation using localStorage
      const storedPosts = JSON.parse(localStorage.getItem(BLOG_STORAGE_KEY) || '{}');
      storedPosts[post.slug] = post;
      localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(storedPosts));
      return true;
    } else {
      // Non-browser environments
      console.warn('File system operations not available in this environment');
      return false;
    }
  } catch (error) {
    console.error(`Error saving blog post to storage (${post.slug}):`, error);
    return false;
  }
}

/**
 * Delete a blog post from storage
 */
export async function deleteBlogPostFile(slug: string): Promise<boolean> {
  ensureBlogStorageExists();
  
  try {
    if (isBrowser) {
      // Browser implementation using localStorage
      const storedPosts = JSON.parse(localStorage.getItem(BLOG_STORAGE_KEY) || '{}');
      
      if (!storedPosts[slug]) {
        return false;
      }
      
      delete storedPosts[slug];
      localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(storedPosts));
      return true;
    } else {
      // Non-browser environments
      console.warn('File system operations not available in this environment');
      return false;
    }
  } catch (error) {
    console.error(`Error deleting blog post from storage (${slug}):`, error);
    return false;
  }
}

/**
 * Import a sample blog post to storage (for demo purposes)
 */
export async function importSampleBlogPost(): Promise<boolean> {
  const samplePost: BlogPost = {
    id: '1',
    slug: 'welcome-to-markdown-blogging',
    title: 'Welcome to Markdown Blogging',
    excerpt: 'A guide to using the new Markdown-based blog system in your AutoYield website.',
    content: `
      <h1>Welcome to Markdown Blogging</h1>
      <p>This is a sample blog post created using our new Markdown-based blog system. You can now create, edit, and manage blog posts using Markdown format.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Write posts in Markdown format</li>
        <li>Easily import/export your content</li>
        <li>Manage all your posts from a central dashboard</li>
        <li>Preview your content before publishing</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create your first blog post:</p>
      <ol>
        <li>Go to the Blog Admin page</li>
        <li>Click "New Post"</li>
        <li>Write your content in Markdown format</li>
        <li>Click "Publish" when you're done</li>
      </ol>
      
      <p>Happy blogging!</p>
    `,
    publishedAt: new Date().toISOString(),
    category: 'tutorials',
    tags: ['markdown', 'tutorial', 'blogging'],
    readingTime: 3,
    coverImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2940&auto=format&fit=crop',
    author: {
      name: 'Admin',
      title: 'Website Administrator',
      avatar: '/team/alex.jpg',
      bio: 'The website administrator who manages blog content.'
    },
    seoDescription: 'Learn how to use the new Markdown-based blog system in your AutoYield website.'
  };
  
  return saveBlogPostToFile(samplePost);
}