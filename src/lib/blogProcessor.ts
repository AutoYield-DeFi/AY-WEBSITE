
import { SimplifiedBlogInput, BlogPost, Author } from '@/types/blog';
import { nanoid } from 'nanoid';

// Function to extract excerpt from content (first paragraph)
const extractExcerpt = (content: string): string => {
  // Find the first paragraph (text before first empty line)
  const firstParagraph = content.split('\n\n')[0];
  // Clean up markdown formatting
  const plainText = firstParagraph
    .replace(/#{1,6}\s/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
    .replace(/`(.*?)`/g, '$1'); // Remove inline code
  
  // Trim and limit to ~150 chars
  return plainText.trim().substring(0, 157) + (plainText.length > 157 ? '...' : '');
};

// Function to calculate reading time
const calculateReadingTime = (content: string): number => {
  const words = content.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(1, minutes);
};

// Function to generate a slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

// Function to extract potential tags from content
const extractTags = (title: string, content: string): string[] => {
  // Common DeFi terms to look for
  const defiTerms = [
    'defi', 'liquidity', 'yield', 'impermanent loss', 'amm', 'solana', 
    'dlmm', 'meteora', 'trading', 'strategy', 'optimizing', 'quant', 
    'ai', 'lp', 'risk', 'management', 'tutorial', 'guide', 'ecosystem'
  ];
  
  const combinedText = (title + ' ' + content).toLowerCase();
  const foundTags = defiTerms.filter(term => combinedText.includes(term));
  
  // Return 3-5 tags
  return [...new Set(foundTags)].slice(0, 5);
};

// Function to determine category based on content
const determineCategory = (title: string, content: string): string => {
  const combinedText = (title + ' ' + content).toLowerCase();
  
  if (combinedText.includes('tutorial') || combinedText.includes('guide') || 
      combinedText.includes('how to') || combinedText.includes('learn')) {
    return 'tutorials';
  }
  
  if (combinedText.includes('ai') || combinedText.includes('quant') || 
      combinedText.includes('strategy') || combinedText.includes('optimiz')) {
    return 'liquidity';
  }
  
  if (combinedText.includes('market') || combinedText.includes('trend') || 
      combinedText.includes('analysis') || combinedText.includes('ecosystem')) {
    return 'market-insights';
  }
  
  // Default category
  return 'defi';
};

// Function to generate cover image URL
const generateCoverImage = (title: string, category: string): string => {
  // For now, we'll use placeholder images from Unsplash based on category
  const imageMap: Record<string, string[]> = {
    'defi': [
      'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2897&auto=format&fit=crop'
    ],
    'tutorials': [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2970&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2831&auto=format&fit=crop'
    ],
    'liquidity': [
      'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop'
    ],
    'market-insights': [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1642543348745-03b1219733d9?q=80&w=2070&auto=format&fit=crop'
    ]
  };
  
  const categoryImages = imageMap[category] || imageMap['defi'];
  // Pick a random image from the category
  return categoryImages[Math.floor(Math.random() * categoryImages.length)];
};

// Parse author string with optional JSON metadata
const parseAuthor = (authorString: string): { name: string; meta: any } => {
  // Extract name and metadata
  const nameMatch = authorString.match(/^([^{]+)/);
  const name = nameMatch ? nameMatch[1].trim() : authorString.trim();
  
  // Try to extract metadata if it exists
  let meta = {};
  const metaMatch = authorString.match(/{([^}]+)}/);
  if (metaMatch) {
    try {
      // Convert to proper JSON format and parse
      const jsonStr = '{' + metaMatch[1]
        .replace(/([a-zA-Z0-9_]+):/g, '"$1":')
        .replace(/:\s*"([^"]*)"/g, ':"$1"')
        .replace(/:\s*'([^']*)'/g, ':"$1"') + '}';
      meta = JSON.parse(jsonStr);
    } catch (e) {
      console.error("Failed to parse author metadata:", e);
    }
  }
  
  return { name, meta };
};

// Find or create author profile
const processAuthor = (authorInput: string, authorMeta?: { title?: string; bio?: string }): Author => {
  const { name, meta } = parseAuthor(authorInput);
  const combinedMeta = { ...meta, ...authorMeta };
  
  // Map of author avatars (for now, just use the existing ones)
  const knownAuthors: Record<string, string> = {
    'Alex Chen': '/team/alex.jpg',
    'Sarah Johnson': '/team/sarah.jpg',
    'Michael Torres': '/team/michael.jpg',
    'Emily Wei': '/team/emily.jpg'
  };
  
  // Default avatar if author not found
  const defaultAvatar = Object.values(knownAuthors)[Math.floor(Math.random() * Object.values(knownAuthors).length)];
  
  return {
    name,
    title: combinedMeta.title || 'DeFi Specialist',
    bio: combinedMeta.bio || `${name} is a specialist in decentralized finance and liquidity management.`,
    avatar: knownAuthors[name] || defaultAvatar
  };
};

// Convert markdown to HTML (simplified version)
const markdownToHtml = (markdown: string): string => {
  // This is a very simplified converter - in production you'd use a proper markdown parser
  let html = markdown
    // Headers
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Unordered lists
    .replace(/^\s*- (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n)+/g, '<ul>$&</ul>')
    // Ordered lists
    .replace(/^\s*\d+\. (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n)+/g, '<ol>$&</ol>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    // Code blocks
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>');
  
  // Wrap with paragraph tags if needed
  if (!html.startsWith('<')) {
    html = '<p>' + html;
  }
  if (!html.endsWith('>')) {
    html += '</p>';
  }
  
  return html;
};

// Process a single blog input into a full BlogPost
export const processBlogInput = (input: SimplifiedBlogInput): BlogPost => {
  const id = nanoid(8);
  const slug = generateSlug(input.title);
  const excerpt = extractExcerpt(input.content);
  const readingTime = calculateReadingTime(input.content);
  const category = determineCategory(input.title, input.content);
  const tags = extractTags(input.title, input.content);
  const coverImage = generateCoverImage(input.title, category);
  const author = processAuthor(input.author, input.authorMeta);
  const content = markdownToHtml(input.content);
  
  return {
    id,
    slug,
    title: input.title,
    excerpt,
    content,
    publishedAt: new Date(input.date).toISOString(),
    category,
    tags,
    readingTime,
    coverImage,
    author,
    seoDescription: excerpt
  };
};

// Parse multiple blog posts from a text block
export const parseMultipleBlogPosts = (text: string): SimplifiedBlogInput[] => {
  const blogSeparator = '---';
  const blocks = text.split(blogSeparator).filter(block => block.trim().length > 0);
  
  return blocks.map(block => {
    const lines = block.trim().split('\n');
    let title = '';
    let date = '';
    let author = '';
    let authorMeta = {};
    let content = '';
    
    let inContent = false;
    
    for (const line of lines) {
      if (inContent) {
        content += line + '\n';
        continue;
      }
      
      if (line.startsWith('Title:')) {
        title = line.substring(6).trim();
      } else if (line.startsWith('Date:')) {
        date = line.substring(5).trim();
      } else if (line.startsWith('Author:')) {
        author = line.substring(7).trim();
      } else if (line.startsWith('Content:')) {
        inContent = true;
      }
    }
    
    return { title, date, author, content, authorMeta };
  });
};

// Process a batch of blog inputs and return full BlogPosts
export const processBlogBatch = (input: string): BlogPost[] => {
  const blogInputs = parseMultipleBlogPosts(input);
  return blogInputs.map(processBlogInput);
};
