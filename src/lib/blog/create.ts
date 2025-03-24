import { BlogPost } from '@/types/blog';
import { parseMarkdown } from '../markdown';
import { blogData } from './data';
import { clearBlogCaches } from './cache';
import { saveBlogPostToFile } from './file-system';
import { parseMarkdownBlog } from './markdown-loader';

// Configure which data source to use
const USE_FILE_SYSTEM = true;

/**
 * Add a new blog post from the formatted text content
 */
export const addBlogPost = async (formattedContent: string): Promise<BlogPost | null> => {
  try {
    // Parse the blog post content
    const lines = formattedContent.split('\n');
    
    // Extract title
    const titleLine = lines.find(line => line.startsWith('Title:'));
    if (!titleLine) return null;
    const title = titleLine.replace('Title:', '').trim();
    
    // Extract date
    const dateLine = lines.find(line => line.startsWith('Date:'));
    if (!dateLine) return null;
    const publishedAt = dateLine.replace('Date:', '').trim();
    
    // Extract author
    const authorLine = lines.find(line => line.startsWith('Author:'));
    if (!authorLine) return null;
    
    // Parse author info
    const authorInfo = authorLine.replace('Author:', '').trim();
    const authorName = authorInfo.split('{')[0].trim();
    
    // Extract author title and bio if available
    let authorTitle = "Contributing Author";
    let authorBio = "";
    
    const titleMatch = authorInfo.match(/title: ?"([^"]+)"/);
    if (titleMatch && titleMatch[1]) {
      authorTitle = titleMatch[1];
    }
    
    const bioMatch = authorInfo.match(/bio: ?"([^"]+)"/);
    if (bioMatch && bioMatch[1]) {
      authorBio = bioMatch[1];
    }
    
    // Find content between the first and last "---"
    const firstDividerIndex = lines.findIndex(line => line.trim() === '---');
    const lastDividerIndex = lines.length - 1 - [...lines].reverse().findIndex(line => line.trim() === '---');
    
    if (firstDividerIndex === -1 || lastDividerIndex === -1 || firstDividerIndex === lastDividerIndex) {
      return null;
    }
    
    // Extract content
    const contentLines = lines.slice(firstDividerIndex + 1, lastDividerIndex);
    const content = contentLines.join('\n');
    
    // Generate an excerpt from the content
    const excerpt = content.replace(/<[^>]*>/g, '').slice(0, 150) + '...';
    
    // Generate slug from title
    const slug = title.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-');
    
    // Detect some tags based on content
    const possibleTags = ['defi', 'solana', 'liquidity', 'meteora', 'yield', 'ai', 'dlmm', 'risk management'];
    const tags = possibleTags.filter(tag => 
      content.toLowerCase().includes(tag) || title.toLowerCase().includes(tag)
    );
    
    // Determine category based on content keywords
    let category = 'defi';
    if (content.toLowerCase().includes('risk') || content.toLowerCase().includes('security')) {
      category = 'risk management';
    } else if (content.toLowerCase().includes('tutorial') || content.toLowerCase().includes('guide')) {
      category = 'tutorials';
    } else if (content.toLowerCase().includes('market') || content.toLowerCase().includes('trend')) {
      category = 'market-insights';
    } else if (content.toLowerCase().includes('ai') || content.toLowerCase().includes('quant')) {
      category = 'ai';
    }
    
    // Estimate reading time (average 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);
    
    // Select a relevant cover image
    let coverImage = "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop";
    if (content.toLowerCase().includes('ai') || title.toLowerCase().includes('ai')) {
      coverImage = "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop";
    } else if (content.toLowerCase().includes('risk') || title.toLowerCase().includes('risk')) {
      coverImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2970&auto=format&fit=crop";
    } else if (content.toLowerCase().includes('solana') || title.toLowerCase().includes('solana')) {
      coverImage = "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2897&auto=format&fit=crop";
    }
    
    // Create the new blog post
    const newPost: BlogPost = {
      id: (blogData.length + 1).toString(),
      slug,
      title,
      excerpt,
      content: parseMarkdown(content),
      publishedAt,
      category,
      tags: tags.length > 0 ? tags : ['defi', 'solana'],
      readingTime,
      coverImage,
      author: {
        name: authorName,
        title: authorTitle,
        avatar: '/team/alex.jpg', // Default avatar
        bio: authorBio
      },
      seoDescription: excerpt
    };
    
    // If using file system, save the post to a markdown file
    if (USE_FILE_SYSTEM) {
      const saved = await saveBlogPostToFile(newPost);
      if (!saved) {
        console.error('Failed to save blog post to file');
      }
    } else {
      // Otherwise add to the beginning of the blog data array (newest first)
      blogData.unshift(newPost);
    }
    
    // Clear cache to force refresh
    clearBlogCaches();
    
    return newPost;
  } catch (error) {
    console.error('Error parsing blog post content:', error);
    return null;
  }
};

/**
 * Create or update a blog post from markdown content with frontmatter
 */
export const createOrUpdateBlogPost = async (markdownContent: string, slug?: string): Promise<BlogPost | null> => {
  try {
    // If slug is provided, this is an update, otherwise it's a new post
    const isNewPost = !slug;
    
    // Generate a slug from the title in frontmatter if not provided
    let postSlug = slug;
    if (!postSlug) {
      // Extract title from frontmatter
      const titleMatch = markdownContent.match(/title: ["']([^"']+)["']/);
      if (titleMatch && titleMatch[1]) {
        postSlug = titleMatch[1].toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/--+/g, '-');
      } else {
        // Generate a random slug if no title is found
        postSlug = `post-${Date.now().toString(36)}`;
      }
    }
    
    // Parse the markdown content to a blog post
    const blogPost = parseMarkdownBlog(markdownContent, postSlug);
    
    // Save the post to a file
    if (USE_FILE_SYSTEM) {
      const saved = await saveBlogPostToFile(blogPost);
      if (!saved) {
        console.error('Failed to save blog post to file');
        return null;
      }
    } else {
      // For non-file system, update or add to the blog data array
      const existingPostIndex = blogData.findIndex(post => post.slug === postSlug);
      
      if (existingPostIndex >= 0) {
        // Update existing post
        blogData[existingPostIndex] = blogPost;
      } else {
        // Add new post to the beginning (newest first)
        blogData.unshift(blogPost);
      }
    }
    
    // Clear cache to force refresh
    clearBlogCaches();
    
    return blogPost;
  } catch (error) {
    console.error('Error creating/updating blog post:', error);
    return null;
  }
};
