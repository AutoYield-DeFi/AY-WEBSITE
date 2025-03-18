import { BlogPost } from '@/types/blog';

// Sample blog data
const blogData: BlogPost[] = [
  {
    id: '6',
    slug: 'raydium-jupiter-orca-solana-dex-comparison',
    title: 'Raydium vs. Jupiter vs. Orca: The Ultimate Solana DEX Showdown',
    excerpt: 'A comprehensive comparison of Solana\'s leading DEXs, analyzing their features, performance, and optimal use cases for different trading strategies.',
    content: `
      <h2>Introduction</h2>
      <p>The Solana ecosystem has emerged as a powerhouse for decentralized trading, with multiple DEXs competing to offer the best trading experience. In this analysis, we'll dive deep into three major players: Raydium, Jupiter, and Orca.</p>

      <h2>Market Share and Volume</h2>
      <ul>
        <li>Jupiter: Leading aggregator with over 60% of Solana's DEX volume</li>
        <li>Raydium: Pioneer DEX with strong liquidity in native pools</li>
        <li>Orca: Known for concentrated liquidity and innovative features</li>
      </ul>

      <h2>Key Features Comparison</h2>
      
      <h3>Jupiter</h3>
      <ul>
        <li>Best-in-class price execution through aggregation</li>
        <li>Access to all major liquidity sources</li>
        <li>Advanced routing algorithms</li>
        <li>User-friendly interface</li>
      </ul>

      <h3>Raydium</h3>
      <ul>
        <li>Integrated with Serum order books</li>
        <li>Strong farming incentives</li>
        <li>Deep liquidity for major pairs</li>
        <li>Project launchpad platform</li>
      </ul>

      <h3>Orca</h3>
      <ul>
        <li>Concentrated liquidity pools</li>
        <li>Fair price impact</li>
        <li>Simple, intuitive interface</li>
        <li>Innovative tokenomics</li>
      </ul>

      <h2>Performance Analysis</h2>
      <p>When it comes to performance metrics, each DEX shows distinct advantages:</p>

      <h3>Price Execution</h3>
      <ul>
        <li>Jupiter leads in best price execution due to aggregation</li>
        <li>Raydium excels in high-volume trading pairs</li>
        <li>Orca optimizes for minimal price impact</li>
      </ul>

      <h3>Transaction Speed</h3>
      <ul>
        <li>All three maintain sub-second finality</li>
        <li>Jupiter's routing may add milliseconds for complex trades</li>
        <li>Direct trades on Raydium and Orca are marginally faster</li>
      </ul>

      <h2>Optimal Use Cases</h2>

      <h3>Choose Jupiter for:</h3>
      <ul>
        <li>Best overall prices</li>
        <li>Large trades requiring split routing</li>
        <li>Access to maximum liquidity</li>
      </ul>

      <h3>Choose Raydium for:</h3>
      <ul>
        <li>Trading new token launches</li>
        <li>Farming opportunities</li>
        <li>Integration with Serum orderbook</li>
      </ul>

      <h3>Choose Orca for:</h3>
      <ul>
        <li>Concentrated liquidity provision</li>
        <li>Simple swap interface</li>
        <li>Fair price impact on medium-sized trades</li>
      </ul>

      <h2>Future Developments</h2>
      <p>All three DEXs continue to innovate:</p>
      <ul>
        <li>Jupiter expanding cross-chain capabilities</li>
        <li>Raydium developing new AMM models</li>
        <li>Orca enhancing concentrated liquidity features</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The competition between these DEXs has created a robust trading ecosystem on Solana. While Jupiter leads in aggregation and best prices, Raydium and Orca maintain strong advantages in their specific niches. Traders benefit from using a combination of these platforms based on their specific needs.</p>
    `,
    publishedAt: '2025-03-18T09:00:00Z',
    category: 'defi',
    tags: ['solana', 'dex', 'trading', 'jupiter', 'raydium', 'orca'],
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2897&auto=format&fit=crop',
    author: {
      name: 'Michael Torres',
      title: 'Market Analyst',
      avatar: '/team/michael.jpg',
      bio: 'Michael tracks DeFi market trends and analyzes on-chain data to identify emerging opportunities.'
    },
    seoDescription: 'Compare Solana\'s top DEXs - Raydium, Jupiter, and Orca. Learn their strengths, optimal use cases, and how to choose the right one for your trading needs.'
  },
  {
    id: '5',
    slug: 'the-rise-of-meteoras-dlmm-a-new-era-in-liquidity-provisioning',
    title: 'The Rise of Meteora\'s DLMM: A New Era in Liquidity Provisioning',
    excerpt: "An in-depth exploration of Meteora's Dynamic Liquidity Market Maker (DLMM) and how it's revolutionizing liquidity provisioning on Solana.",
    content: `
      <h2>Introduction</h2>
      <p>Liquidity provisioning (LP) in DeFi has evolved dramatically over the years, with each innovation tackling inefficiencies in capital allocation, impermanent loss, and execution quality. While Uniswap's Automated Market Maker (AMM) introduced the concept of decentralized liquidity pools, and Uniswap V3's concentrated liquidity model improved capital efficiency, the space has remained ripe for further refinement.</p>
      
      <p>Enter Meteora's Dynamic Liquidity Market Maker (DLMM) — an innovative leap that combines the strengths of traditional order book models with the capital efficiency of AMMs. This article explores the mechanics of DLMM, its advantages over existing models, and why it is poised to redefine LP strategies on Solana.</p>
      
      <h2>Understanding DLMM: A Fusion of Order Books and AMMs</h2>
      <p>Unlike traditional AMMs that use static bonding curves to determine pricing, Meteora's DLMM dynamically adjusts liquidity based on real-time market conditions. It blends concepts from Uniswap V3's concentrated liquidity with the reactive nature of order books, offering LPs greater control over their capital while optimizing trade execution.</p>
      
      <h3>How DLMM Works</h3>
      <h4>Price Adaptive Liquidity Placement:</h4>
      <p>Unlike conventional AMMs, where liquidity is spread across a constant curve, DLMM actively repositions liquidity around the current market price. This ensures that the capital is used where it is most needed — near the current price, leading to higher capital efficiency.</p>
      
      <h4>Automated Rebalancing:</h4>
      <p>The system continuously adjusts the liquidity position based on price movements. Instead of LPs needing to manually rebalance their positions (as they would in Uniswap V3), DLMM does this automatically, reducing the need for active management and minimizing impermanent loss risks.</p>
      
      <h4>Directional Liquidity Control:</h4>
      <p>LPs can choose to provide liquidity asymmetrically, favoring either the buy or sell side. This allows for more strategic positioning, particularly for market makers looking to hedge exposure while collecting fees.</p>
      
      <h4>Efficient Use of Solana's Speed:</h4>
      <p>Solana's high throughput and low-latency execution enable DLMM to function in ways that Ethereum-based AMMs cannot. The ability to rebalance liquidity dynamically is computationally intensive, but Solana's parallelized execution environment makes it feasible at scale.</p>
      
      <h2>Why DLMM Outperforms Traditional AMMs</h2>
      <h3>Capital Efficiency</h3>
      <p>Traditional AMMs spread liquidity too thin, often leading to inefficient capital usage. Uniswap V3 improved on this by allowing LPs to concentrate liquidity within specific price ranges. DLMM takes it a step further by dynamically repositioning liquidity without requiring manual intervention. This results in:</p>
      <ul>
        <li>Higher fee earnings: LPs earn more fees since their liquidity is consistently placed where the most trading activity occurs.</li>
        <li>Lower slippage for traders: More liquidity near the active price means better execution quality.</li>
      </ul>
      
      <h3>Reduced Impermanent Loss (IL)</h3>
      <p>One of the biggest risks in LPing is impermanent loss — the temporary loss suffered when asset prices move away from their initial position. DLMM mitigates this by adjusting liquidity placement dynamically. Since liquidity is consistently repositioned closer to market price, the impact of price movements is softened, reducing IL over time.</p>
      
      <h3>More Active Market Making Without Manual Effort</h3>
      <p>Market makers on centralized exchanges actively update orders to optimize spreads and inventory. DLMM brings this capability to DeFi but in an automated fashion. LPs do not need to constantly adjust their positions manually, as the protocol takes care of it, making it a far more efficient passive income strategy compared to Uniswap V3.</p>
      
      <h2>Strategic Implications for LPs and Traders</h2>
      <h3>For Liquidity Providers</h3>
      <p>DLMM offers several strategic advantages for LPs:</p>
      <ul>
        <li>Higher Fee Capture: Because liquidity is more effectively placed, LPs benefit from increased trading volume capture.</li>
        <li>Passive Yet Optimized: Unlike Uniswap V3, where LPs must actively rebalance, DLMM handles this automatically.</li>
        <li>Directional Exposure: LPs can deploy capital in a way that aligns with their market outlook, reducing unwanted risk exposure.</li>
      </ul>
      
      <h3>For Traders</h3>
      <ul>
        <li>Lower Slippage: The dynamic nature of DLMM means deeper liquidity at the market price, improving execution quality.</li>
        <li>Reduced MEV Risk: Because DLMM continually adjusts liquidity placement, it reduces the effectiveness of front-running and sandwich attacks common in static AMM models.</li>
      </ul>
      
      <h2>Future Outlook and Expansion</h2>
      <p>Meteora's DLMM is just the beginning of a broader movement toward intelligent liquidity automation in DeFi. With Solana's continued growth and improvements in on-chain trading infrastructure, we can expect even more sophisticated versions of DLMM to emerge, potentially integrating machine learning models to predict and react to market shifts even more effectively.</p>
      
      <h3>Potential Enhancements</h3>
      <ul>
        <li>Multi-Asset Liquidity Pools: Expanding DLMM to handle baskets of correlated assets dynamically.</li>
        <li>Cross-Chain Liquidity Deployment: Allowing LPs to seamlessly provide liquidity across multiple chains.</li>
        <li>On-Chain Strategy Customization: Giving LPs granular control over their liquidity strategies via smart contract parameters.</li>
      </ul>
    `,
    publishedAt: '2025-03-17T10:00:00Z',
    category: 'defi',
    tags: ['meteora', 'dlmm', 'solana', 'liquidity', 'defi'],
    readingTime: 10,
    coverImage: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop',
    author: {
      name: 'Shuhaib Shariff',
      title: 'Co-founder at AutoYield',
      avatar: '/team/alex.jpg',
      bio: '20+ years in SaaS and software product development, led teams across design, engineering, and content to build tools that make business easier.'
    },
    seoDescription: "Explore how Meteora's Dynamic Liquidity Market Maker (DLMM) is revolutionizing DeFi on Solana with automated, efficient liquidity provisioning."
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
    publishedAt: '2025-03-17T13:20:00Z',
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
    publishedAt: '2025-03-17T09:45:00Z',
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
    publishedAt: '2025-03-17T14:15:00Z',
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
  }
];

// Optimized blog fetching with caching mechanism
let cachedPosts: BlogPost[] | null = null;
let cachedRelatedPostsMap: Map<string, BlogPost[]> = new Map();
let cachedFilteredPostsMap: Map<string, BlogPost[]> = new Map();

// Fetch all blog posts with caching - ensure latest posts appear first
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  if (cachedPosts) {
    return Promise.resolve(cachedPosts);
  }
  
  // In a real application, this would be an API call
  // Sort by date (newest first)
  return new Promise((resolve) => {
    setTimeout(() => {
      // Sort by publish date, newest first
      cachedPosts = [...blogData].sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
      resolve(cachedPosts);
    }, 200); // Reduced timeout for better performance
  });
};

// Fetch blog posts with pagination
export const fetchPaginatedBlogPosts = async (
  page: number = 1, 
  postsPerPage: number = 6
): Promise<{ posts: BlogPost[], totalPosts: number, totalPages: number }> => {
  const allPosts = await fetchBlogPosts();
  
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = allPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  
  return {
    posts: paginatedPosts,
    totalPosts: allPosts.length,
    totalPages
  };
};

// Fetch blog posts filtered by tag with pagination
export const fetchPaginatedBlogPostsByTag = async (
  tag: string,
  page: number = 1,
  postsPerPage: number = 6
): Promise<{ posts: BlogPost[], totalPosts: number, totalPages: number }> => {
  // Get filtered posts
  const filteredPosts = await fetchBlogPostsByTag(tag);
  
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  return {
    posts: paginatedPosts,
    totalPosts: filteredPosts.length,
    totalPages
  };
};

// Fetch blog posts filtered by tag
export const fetchBlogPostsByTag = async (tag: string): Promise<BlogPost[]> => {
  // Check if we have this tag cached
  const cacheKey = `tag-${tag.toLowerCase()}`;
  if (cachedFilteredPostsMap.has(cacheKey)) {
    return Promise.resolve(cachedFilteredPostsMap.get(cacheKey)!);
  }
  
  // Get all posts first (possibly from cache)
  const allPosts = await fetchBlogPosts();
  
  // Filter by tag (case insensitive)
  const tagLower = tag.toLowerCase();
  const filtered = allPosts.filter(post => 
    post.tags?.some(t => t.toLowerCase() === tagLower)
  );
  
  // Cache the result
  cachedFilteredPostsMap.set(cacheKey, filtered);
  
  return filtered;
};

// Fetch a single blog post by ID with type safety - optimized performance
export const fetchBlogPostById = async (id: string): Promise<BlogPost | undefined> => {
  // Try to use cached posts if available
  const posts = cachedPosts || await fetchBlogPosts();
  return posts.find(post => post.id === id || post.slug === id);
};

// Fetch related blog posts with caching - optimized
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

// Clear all caches
export const clearBlogCaches = () => {
  cachedPosts = null;
  cachedRelatedPostsMap.clear();
  cachedFilteredPostsMap.clear();
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
    
    // Add to the beginning of the blog data array (newest first)
    blogData.unshift(newPost);
    
    // Clear cache to force refresh
    cachedPosts = null;
    cachedRelatedPostsMap.clear();
    cachedFilteredPostsMap.clear();
    
    return newPost;
  } catch (error) {
    console.error('Error parsing blog post content:', error);
    return null;
  }
};

// Format markdown features like tables and code blocks
export const formatMarkdownFeatures = (content: string): string => {
