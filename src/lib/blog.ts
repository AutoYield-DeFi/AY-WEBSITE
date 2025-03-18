
import { BlogPost } from '@/types/blog';

// Sample blog data
const blogData: BlogPost[] = [
  {
    id: '1',
    slug: 'understanding-dlmm-solana',
    title: 'Understanding DLMM: The Future of Liquidity on Solana',
    excerpt: "Dynamic Liquidity Market Makers (DLMMs) are revolutionizing how liquidity works on Solana. Here's what you need to know.",
    content: `
      <p>Dynamic Liquidity Market Makers (DLMMs) represent a significant evolution in decentralized exchange technology, particularly on the Solana blockchain. Unlike traditional Automated Market Makers (AMMs), DLMMs offer concentrated liquidity with dynamic range adjustments that maximize capital efficiency and reduce impermanent loss.</p>
      
      <h2>What makes DLMMs different?</h2>
      
      <p>Traditional AMMs distribute liquidity across an infinite price range, which means that much of the liquidity sits idle most of the time. DLMMs, on the other hand, allow liquidity providers to concentrate their assets within specific price ranges where trading is most likely to occur.</p>
      
      <p>This concentrated approach offers several advantages:</p>
      
      <ul>
        <li>Higher capital efficiency (up to 4000x compared to traditional AMMs)</li>
        <li>Reduced slippage for traders</li>
        <li>Better returns for liquidity providers</li>
        <li>Lower impermanent loss through strategic positioning</li>
      </ul>
      
      <h2>The Solana advantage</h2>
      
      <p>Solana's high throughput and low transaction costs make it an ideal blockchain for DLMM implementation. The network can handle the complex calculations and frequent position adjustments that DLMMs require without prohibitive gas fees.</p>
      
      <p>With transaction costs often below $0.001, liquidity providers can optimize their positions frequently without erosion of returns—something that would be economically unfeasible on networks like Ethereum where gas fees can quickly accumulate.</p>
      
      <h2>AutoYield's approach to DLMM</h2>
      
      <p>At AutoYield, we've leveraged the power of DLMM technology through our integration with Meteora, one of the leading DLMM protocols on Solana. Our QUANT AI agent continuously analyzes market conditions to optimize liquidity positions, ensuring that our users' capital is always deployed where it can generate the most yield.</p>
      
      <p>By automating these complex strategies, we've made sophisticated liquidity provisioning accessible to everyone, not just professional traders with deep technical knowledge.</p>
      
      <h2>The future of DLMMs</h2>
      
      <p>As DeFi continues to evolve, we expect to see further innovations in the DLMM space. From multi-tier liquidity strategies to cross-chain implementations, the possibilities are vast and exciting.</p>
      
      <p>Stay tuned to our blog for more insights on these developments and how AutoYield is incorporating them to deliver ever-improving returns to our users.</p>
    `,
    publishedAt: '2023-06-15T10:30:00Z',
    category: 'defi',
    tags: ['DLMM', 'solana', 'liquidity', 'meteora'],
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop',
    author: {
      name: 'Alex Chen',
      title: 'DeFi Researcher',
      avatar: '/team/alex.jpg',
      bio: 'Alex has been researching DeFi protocols for over 5 years and specializes in liquidity optimization strategies.'
    }
  },
  {
    id: '2',
    slug: 'impermanent-loss-explained',
    title: 'Impermanent Loss Explained: What Every LP Should Know',
    excerpt: 'Impermanent loss remains one of the most misunderstood concepts in DeFi. We break it down in simple terms and show how to mitigate it.',
    content: `
      <p>If you've ever provided liquidity to a DeFi protocol, you've likely encountered the term "impermanent loss." Despite its prominence, many liquidity providers don't fully understand this concept, which can lead to unexpected outcomes when managing LP positions.</p>
      
      <h2>What is impermanent loss?</h2>
      
      <p>In simple terms, impermanent loss occurs when the price of your assets in a liquidity pool changes compared to when you deposited them. The greater the price change, the more significant the impermanent loss.</p>
      
      <p>The term "impermanent" comes from the fact that the loss is only realized when you withdraw your liquidity. Until then, the prices could potentially return to their original ratio, eliminating the loss.</p>
      
      <h2>A simple example</h2>
      
      <p>Let's say you deposit equal values of SOL and USDC into a liquidity pool when SOL is worth $100.</p>
      
      <p>Your deposit: 1 SOL ($100) + 100 USDC = $200 total</p>
      
      <p>If SOL's price increases to $150, the pool automatically adjusts by selling SOL and buying USDC to maintain the price ratio. When you withdraw, you might get:</p>
      
      <p>0.82 SOL ($123) + 123 USDC = $246 total</p>
      
      <p>While your position grew to $246, if you had simply held the original assets (1 SOL + 100 USDC), you would have $250. The $4 difference is the impermanent loss.</p>
      
      <h2>Mitigating impermanent loss</h2>
      
      <p>Several strategies can help reduce impermanent loss:</p>
      
      <ul>
        <li><strong>Provide liquidity for stable pairs</strong>: Assets that maintain price correlation (like stablecoin pairs) experience minimal impermanent loss.</li>
        <li><strong>Use concentrated liquidity</strong>: DLMM protocols allow you to provide liquidity within specific price ranges, reducing exposure to dramatic price movements.</li>
        <li><strong>Leverage active management</strong>: Platforms like AutoYield use AI to monitor and adjust liquidity positions based on market conditions.</li>
        <li><strong>Factor in fees</strong>: Trading fees earned from the pool can offset impermanent loss, sometimes resulting in net profit despite the IL.</li>
      </ul>
      
      <h2>How AutoYield addresses impermanent loss</h2>
      
      <p>Our platform uses several techniques to minimize impermanent loss for our users:</p>
      
      <ol>
        <li>The QUANT AI agent continuously monitors volatility metrics and adjusts liquidity positions preemptively.</li>
        <li>Our system shifts liquidity to safer price bands when large price movements are detected.</li>
        <li>We implement dynamic range adjustments that keep liquidity in the most efficient price zones.</li>
        <li>Our stop-loss mechanisms can automatically withdraw liquidity when market conditions become unfavorable.</li>
      </ol>
      
      <p>By automating these complex strategies, we enable our users to benefit from liquidity provision while significantly reducing the risks traditionally associated with it.</p>
    `,
    publishedAt: '2023-08-22T14:15:00Z',
    category: 'tutorials',
    tags: ['impermanent loss', 'LP', 'risk management', 'tutorials'],
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2970&auto=format&fit=crop',
    author: {
      name: 'Sarah Johnson',
      title: 'Head of Education',
      avatar: '/team/sarah.jpg',
      bio: 'Sarah simplifies complex DeFi concepts through educational content. Former professor of financial technology.'
    }
  },
  {
    id: '3',
    slug: 'solana-ecosystem-growth',
    title: 'The Explosive Growth of the Solana DeFi Ecosystem',
    excerpt: 'Examining how Solana has become a leading blockchain for DeFi applications and what this means for liquidity providers.',
    content: `
      <p>The Solana blockchain has experienced remarkable growth in its DeFi ecosystem over the past few years, challenging Ethereum's dominance and carving out a substantial niche for high-performance financial applications.</p>
      
      <h2>Solana's DeFi explosion by the numbers</h2>
      
      <p>When examining the growth trajectory of Solana's DeFi landscape, the statistics tell a compelling story:</p>
      
      <ul>
        <li>Total Value Locked (TVL) has grown exponentially, from just a few million dollars in early 2021 to billions today</li>
        <li>Daily active users have increased by over 400% year-over-year</li>
        <li>Transaction volumes regularly exceed 15 million per day</li>
        <li>Average transaction costs remain under $0.001, compared to several dollars on Ethereum</li>
      </ul>
      
      <h2>What's driving this growth?</h2>
      
      <p>Several factors have contributed to Solana's rapid ascension in the DeFi space:</p>
      
      <h3>1. Technical advantages</h3>
      
      <p>Solana's unique combination of Proof of History (PoH) and Proof of Stake (PoS) consensus mechanisms enables it to process thousands of transactions per second with sub-second finality. This makes it ideal for DeFi applications where speed and cost are critical factors.</p>
      
      <h3>2. Vibrant ecosystem of protocols</h3>
      
      <p>The Solana ecosystem has attracted innovative protocols across all DeFi categories:</p>
      
      <ul>
        <li><strong>DEXs</strong>: Jupiter, Raydium, Orca, and Meteora DLMM</li>
        <li><strong>Lending</strong>: Solend, Mango Markets, and Jet Protocol</li>
        <li><strong>Derivatives</strong>: Drift Protocol, Zeta Markets, and Cypher</li>
        <li><strong>Yield aggregators</strong>: Tulip Protocol, Francium, and AutoYield</li>
      </ul>
      
      <h3>3. Institutional adoption</h3>
      
      <p>Major financial institutions and venture capital firms have increasingly backed Solana-based projects, bringing additional liquidity and credibility to the ecosystem.</p>
      
      <h2>Opportunities for liquidity providers</h2>
      
      <p>This growth presents unique opportunities for liquidity providers on Solana:</p>
      
      <h3>Higher capital efficiency</h3>
      
      <p>The low transaction costs mean that a higher percentage of trading fees goes directly to liquidity providers rather than being consumed by gas costs.</p>
      
      <h3>Greater composability</h3>
      
      <p>Solana's high throughput enables more complex, multi-step DeFi strategies that would be prohibitively expensive on other chains, opening new possibilities for yield generation.</p>
      
      <h3>Innovative LP models</h3>
      
      <p>Protocols like Meteora's DLMM introduce concentrated liquidity approaches that can generate significantly higher returns for providers who position their liquidity strategically.</p>
      
      <h2>The road ahead</h2>
      
      <p>While the growth has been impressive, Solana's DeFi ecosystem is still maturing. We anticipate several developments that will further enhance the landscape for liquidity providers:</p>
      
      <ul>
        <li>Improved cross-chain liquidity bridges</li>
        <li>More sophisticated risk management tools</li>
        <li>Greater integration of real-world assets</li>
        <li>Enhanced institutional-grade infrastructure</li>
      </ul>
      
      <p>At AutoYield, we're positioned at the forefront of these developments, continually adapting our strategies to capture the best opportunities for our users within the dynamic Solana ecosystem.</p>
    `,
    publishedAt: '2023-10-05T09:45:00Z',
    category: 'market-insights',
    tags: ['solana', 'ecosystem', 'growth', 'defi trends'],
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2897&auto=format&fit=crop',
    author: {
      name: 'Michael Torres',
      title: 'Market Analyst',
      avatar: '/team/michael.jpg',
      bio: 'Michael tracks DeFi market trends and analyzes on-chain data to identify emerging opportunities.'
    }
  },
  {
    id: '4',
    slug: 'quant-ai-strategies',
    title: 'How QUANT AI Optimizes Your Liquidity Positions',
    excerpt: "A deep dive into the proprietary AI strategies that power AutoYield's automated liquidity management system.",
    content: `
      <p>At the heart of AutoYield's value proposition lies our proprietary QUANT AI system—an advanced artificial intelligence engine designed specifically for optimizing liquidity positions in DeFi markets.</p>
      
      <h2>The challenge of manual liquidity management</h2>
      
      <p>Before diving into how our AI works, it's worth understanding the challenges that liquidity providers face when managing positions manually:</p>
      
      <ul>
        <li>Constantly shifting market conditions require frequent adjustments</li>
        <li>Complex mathematics involved in calculating optimal ranges</li>
        <li>24/7 markets leave no room for downtime</li>
        <li>Transaction timing can significantly impact profitability</li>
        <li>Emotional decision-making often leads to suboptimal results</li>
      </ul>
      
      <p>These challenges make liquidity provision a full-time job with a steep learning curve—something most investors neither have the time nor expertise to manage effectively.</p>
      
      <h2>Enter QUANT AI</h2>
      
      <p>Our QUANT AI system addresses these challenges through a multi-layered approach to liquidity optimization:</p>
      
      <h3>Data ingestion and analysis</h3>
      
      <p>The AI continuously processes multiple data streams, including:</p>
      
      <ul>
        <li>Current and historical price data across multiple timeframes</li>
        <li>On-chain metrics like trading volumes and liquidity depths</li>
        <li>Market volatility indicators</li>
        <li>Correlation patterns between asset pairs</li>
        <li>Fee generation rates at different price points</li>
      </ul>
      
      <h3>Predictive modeling</h3>
      
      <p>Using this data, our AI builds sophisticated models that predict:</p>
      
      <ul>
        <li>Likely price ranges for the short and medium term</li>
        <li>Expected trading volumes within each price segment</li>
        <li>Potential impermanent loss scenarios</li>
        <li>Optimal fee generation opportunities</li>
      </ul>
      
      <h3>Strategy execution</h3>
      
      <p>Based on these predictions, the AI executes a variety of strategies:</p>
      
      <h4>1. Dynamic Range Optimization</h4>
      
      <p>Rather than setting static liquidity ranges, our AI continuously adjusts position boundaries based on current market conditions and predictions. This ensures that liquidity remains active where trading is occurring, maximizing fee generation.</p>
      
      <h4>2. Volatility-Adjusted Positioning</h4>
      
      <p>During periods of high volatility, the AI widens liquidity ranges to capture larger price movements while minimizing impermanent loss. Conversely, during stable periods, it narrows ranges to increase capital efficiency.</p>
      
      <h4>3. Multi-Pool Distribution</h4>
      
      <p>For some strategies, the AI splits liquidity across multiple pools with different characteristics, creating a diversified portfolio of liquidity positions that balance risk and return.</p>
      
      <h4>4. Fee Compounding Optimization</h4>
      
      <p>The system automatically calculates the optimal frequency for harvesting and reinvesting fees, balancing transaction costs against compounding benefits.</p>
      
      <h2>Real-world performance</h2>
      
      <p>In backtesting against historical market data, our QUANT AI strategies have consistently outperformed manual liquidity management approaches, showing:</p>
      
      <ul>
        <li>25-40% higher fee generation</li>
        <li>30-60% reduction in impermanent loss</li>
        <li>85% improvement in capital efficiency</li>
      </ul>
      
      <p>These improvements translate directly to higher net returns for AutoYield users, all without requiring technical knowledge or active management on their part.</p>
      
      <h2>Continuous improvement</h2>
      
      <p>Perhaps the most powerful aspect of our AI system is its ability to learn and adapt. Each market cycle provides new data that the system uses to refine its models and strategies, ensuring that it continues to evolve alongside the rapidly changing DeFi landscape.</p>
      
      <p>This cycle of continuous improvement means that AutoYield's performance advantage compounds over time, as our strategies become increasingly sophisticated and well-tuned to market realities.</p>
    `,
    publishedAt: '2023-11-18T13:20:00Z',
    category: 'liquidity',
    tags: ['AI', 'quant', 'strategies', 'optimization'],
    readingTime: 9,
    coverImage: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop',
    author: {
      name: 'Emily Wei',
      title: 'Lead AI Researcher',
      avatar: '/team/emily.jpg',
      bio: "Emily leads AutoYield's AI research team, combining expertise in machine learning with deep DeFi knowledge."
    }
  }
];

// Optimized blog fetching with caching mechanism
let cachedPosts: BlogPost[] | null = null;
let cachedRelatedPostsMap: Map<string, BlogPost[]> = new Map();

// Fetch all blog posts with caching
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  if (cachedPosts) {
    return Promise.resolve(cachedPosts);
  }
  
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      cachedPosts = [...blogData];
      resolve(cachedPosts);
    }, 300); // Reduced timeout for better performance
  });
};

// Fetch a single blog post by ID with type safety
export const fetchBlogPostById = async (id: string): Promise<BlogPost | undefined> => {
  // Try to use cached posts if available
  const posts = cachedPosts || await fetchBlogPosts();
  return posts.find(post => post.id === id || post.slug === id);
};

// Fetch related blog posts with caching
export const fetchRelatedPosts = async (category: string, excludeId: string): Promise<BlogPost[]> => {
  const cacheKey = `${category}-${excludeId}`;
  
  if (cachedRelatedPostsMap.has(cacheKey)) {
    return Promise.resolve(cachedRelatedPostsMap.get(cacheKey)!);
  }
  
  // Use cached posts if available
  const posts = cachedPosts || await fetchBlogPosts();
  
  const related = posts
    .filter(post => post.category === category && (post.id !== excludeId && post.slug !== excludeId))
    .slice(0, 3);
  
  cachedRelatedPostsMap.set(cacheKey, related);
  return related;
};

// Add a new blog post from the formatted text content
export const addBlogPost = (formattedContent: string): BlogPost | null => {
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
      content: `<p>${content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br/>')}</p>`,
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
    
    // Add to the blog data array
    blogData.unshift(newPost);
    
    // Clear cache to force refresh
    cachedPosts = null;
    cachedRelatedPostsMap.clear();
    
    return newPost;
  } catch (error) {
    console.error('Error parsing blog post content:', error);
    return null;
  }
};

// Format markdown features like tables and code blocks
export const formatMarkdownFeatures = (content: string): string => {
  let formattedContent = content;
  
  // Format tables
  const tableRegex = /\|(.+)\|\n\|(-+\|)+\n((\|.+\|\n)+)/g;
  formattedContent = formattedContent.replace(tableRegex, (match) => {
    return `<div class="overflow-x-auto my-6"><table class="min-w-full divide-y divide-gray-200">
      ${match.split('\n').map((row, index) => {
        if (index === 1) return ''; // Skip the separator row
        const cells = row.split('|').filter(cell => cell.trim() !== '');
        const isHeader = index === 0;
        const cellTag = isHeader ? 'th' : 'td';
        const cellClasses = isHeader 
          ? 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' 
          : 'px-6 py-4 whitespace-nowrap text-sm text-gray-500';
        
        return `<tr>${cells.map(cell => 
          `<${cellTag} class="${cellClasses}">${cell.trim()}</${cellTag}>`
        ).join('')}</tr>`;
      }).join('')}
    </table></div>`;
  });
  
  // Format code blocks
  const codeBlockRegex = /```([a-z]*)\n([\s\S]*?)```/g;
  formattedContent = formattedContent.replace(codeBlockRegex, (match, language, code) => {
    return `<pre class="bg-gray-900 text-gray-100 rounded-md p-4 my-4 overflow-x-auto"><code class="language-${language || 'text'}">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`;
  });
  
  return formattedContent;
};

// Utility to parse markdown into formatted HTML
export const parseMarkdown = (markdown: string): string => {
  let html = markdown;
  
  // Format headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mt-8 mb-4">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-10 mb-5">$1</h1>');
  
  // Format lists
  html = html.replace(/^\s*\n\* (.*)/gm, '<ul class="list-disc ml-5 my-4"><li>$1</li></ul>');
  html = html.replace(/^\s*\n- (.*)/gm, '<ul class="list-disc ml-5 my-4"><li>$1</li></ul>');
  html = html.replace(/^\s*\n\d\. (.*)/gm, '<ol class="list-decimal ml-5 my-4"><li>$1</li></ol>');
  
  // Remove list item duplicates (we get when we have multiple list items)
  html = html.replace(/<\/ul>\s*<ul class="list-disc ml-5 my-4">/g, '');
  html = html.replace(/<\/ol>\s*<ol class="list-decimal ml-5 my-4">/g, '');
  
  // Format bold and italic
  html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
  html = html.replace(/\*(.*)\*/gim, '<em>$1</em>');
  
  // Format links
  html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // Format paragraphs
  html = html.replace(/^\s*(\n)?([^\s#\-\*\>].*)/gim, '<p class="my-4">$2</p>');
  
  // Format blockquotes
  html = html.replace(/^\> (.*$)/gim, '<blockquote class="pl-4 border-l-4 border-gray-200 italic my-4">$1</blockquote>');
  
  // Handle special markdown features like tables and code blocks
  html = formatMarkdownFeatures(html);
  
  return html;
};
