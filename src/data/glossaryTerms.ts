
interface GlossaryTerm {
  term: string;
  definition: string;
  additionalInfo?: string;
  category: 'basic' | 'advanced' | 'metrics';
  relatedTerms?: string[];
  example?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Liquidity Pool (LP)",
    definition: "A collection of funds locked in a smart contract that facilitates trading by providing liquidity to a decentralized exchange. These pools enable users to trade cryptocurrencies without requiring traditional market makers or order book systems.",
    additionalInfo: "Liquidity pools create a dynamic market where asset prices adjust automatically based on a mathematical formula. When traders swap tokens through a pool, they pay fees that are distributed to the liquidity providers as rewards.",
    category: "basic",
    relatedTerms: ["Automated Market Maker", "Liquidity Provider", "Smart Contract"],
    example: "The SOL/USDC liquidity pool on Meteora contains both SOL and USDC tokens, allowing users to trade between these two assets while generating fees for liquidity providers."
  },
  {
    term: "Liquidity Provider",
    definition: "An individual or entity that deposits tokens into a liquidity pool to facilitate trading on a decentralized exchange, earning trading fees in return.",
    additionalInfo: "Liquidity providers are essential participants in DeFi ecosystems as they enable trading by supplying the assets needed for transactions. They typically deposit equal values of two tokens into a pool and receive LP tokens representing their share of the pool.",
    category: "basic",
    relatedTerms: ["Impermanent Loss", "LP Token", "Yield Farming"],
    example: "Alice deposited 5 SOL and 500 USDC into AutoYield's managed liquidity pool and began earning 0.25% of all trading fees proportional to her share of the pool."
  },
  {
    term: "Automated Market Maker (AMM)",
    definition: "A type of decentralized exchange protocol that uses mathematical formulas to price assets instead of using an order book like traditional exchanges.",
    additionalInfo: "AMMs rely on liquidity pools rather than matching buy and sell orders. The most common AMM model is the constant product formula (x*y=k), pioneered by Uniswap, where the product of the quantities of two tokens must remain constant after trades.",
    category: "basic",
    relatedTerms: ["Constant Product Formula", "Decentralized Exchange", "DLMM"],
    example: "Meteora's DLMM is an advanced version of an AMM that improves upon the constant product formula by allowing for concentrated liquidity positions."
  },
  {
    term: "Decentralized Exchange (DEX)",
    definition: "A type of cryptocurrency exchange that operates without a central authority and allows for direct peer-to-peer cryptocurrency transactions through smart contracts.",
    additionalInfo: "Unlike centralized exchanges (CEXs), DEXs do not require users to deposit funds to a custodial wallet controlled by the exchange. Instead, users maintain control of their private keys and assets throughout the trading process.",
    category: "basic",
    relatedTerms: ["Automated Market Maker", "Smart Contract", "Non-Custodial Protocol"],
    example: "Popular DEXs on Solana include Meteora, Raydium, and Orca, each with their own AMM implementations."
  },
  {
    term: "Smart Contract",
    definition: "Self-executing contracts with the terms directly written into code on a blockchain. They automatically execute actions when predetermined conditions are met, without requiring intermediaries.",
    additionalInfo: "Smart contracts on Solana are typically written in Rust, which is compiled to BPF (Berkeley Packet Filter) bytecode. They're deterministic, meaning they always produce the same output for a given input, and run on Solana's high-performance runtime.",
    category: "basic",
    relatedTerms: ["Blockchain", "Solana Program", "Decentralized Application"],
    example: "AutoYield's platform uses smart contracts to automatically rebalance liquidity positions when market conditions change, without requiring manual intervention."
  },
  {
    term: "Token Swap",
    definition: "The process of exchanging one cryptocurrency token for another through a decentralized exchange or liquidity pool.",
    additionalInfo: "Token swaps on AMMs execute automatically based on predefined formulas. The price a user receives depends on the ratio of tokens in the liquidity pool and the size of their swap relative to the pool.",
    category: "basic",
    relatedTerms: ["Slippage", "Price Impact", "Automated Market Maker"],
    example: "When swapping 10 SOL for USDC on a DEX, you pay a small fee (usually 0.25-1%) which goes to liquidity providers as an incentive for supplying liquidity."
  },
  {
    term: "Yield Farming",
    definition: "The practice of staking or lending crypto assets to generate high returns in the form of additional cryptocurrency. This often involves providing liquidity to DEXs or participating in DeFi protocols.",
    additionalInfo: "Yield farming strategies can involve complex series of actions, such as providing liquidity, receiving LP tokens, staking those LP tokens in other protocols, and sometimes leveraging positions to amplify returns. These strategies come with varying levels of risk.",
    category: "basic",
    relatedTerms: ["Annual Percentage Yield", "Liquidity Provider", "Staking"],
    example: "A yield farmer might deposit tokens into AutoYield's managed pools to earn trading fees, which are then automatically reinvested to compound their returns."
  },
  {
    term: "Blockchain",
    definition: "A distributed, immutable ledger that records transactions across many computers so that the record cannot be altered retroactively without the alteration of all subsequent blocks.",
    additionalInfo: "Solana's blockchain uses a unique consensus mechanism called Proof of History (PoH) combined with Proof of Stake (PoS), allowing it to process thousands of transactions per second with minimal fees compared to other networks.",
    category: "basic",
    relatedTerms: ["Consensus Mechanism", "Distributed Ledger", "Proof of History"],
    example: "When you provide liquidity on Solana, all transactions are recorded on its blockchain, providing transparency and immutability for all operations."
  },
  {
    term: "Gas Fees",
    definition: "Fees paid to validators to process transactions on a blockchain. On Solana, these fees are significantly lower than on networks like Ethereum.",
    additionalInfo: "Solana's architecture allows for extremely low gas fees, typically fractions of a cent per transaction. This makes complex DeFi operations, like entering and exiting liquidity positions, much more cost-effective compared to other blockchains.",
    category: "basic",
    relatedTerms: ["Validator", "Transaction", "Blockchain"],
    example: "While rebalancing a liquidity position on Ethereum might cost $20-$100 in gas fees, the same operation on Solana through AutoYield would cost less than $0.01."
  },
  {
    term: "Impermanent Loss",
    definition: "The temporary loss of value when providing liquidity to an AMM compared to simply holding the assets. It occurs when the price ratio of the pooled assets changes after deposit.",
    additionalInfo: "Impermanent loss becomes permanent only when liquidity is withdrawn. The more volatile the asset pair and the larger the price change, the greater the impermanent loss. Trading fees earned can offset this loss, but in highly volatile markets, fees may not be sufficient.",
    category: "advanced",
    relatedTerms: ["Automated Market Maker", "Concentrated Liquidity", "Price Oracle"],
    example: "If you deposit equal values of SOL and USDC when SOL is $100, and later SOL rises to $150, you would have been better off holding the original assets instead of providing liquidity. AutoYield's AI helps minimize this risk by adjusting positions based on market trends."
  },
  {
    term: "Concentrated Liquidity",
    definition: "A feature that allows liquidity providers to specify price ranges for their capital, increasing capital efficiency by concentrating liquidity where it's most needed.",
    additionalInfo: "Introduced by Uniswap v3 and utilized by Meteora's DLMM pools on Solana, concentrated liquidity can dramatically increase capital efficiency by allowing LPs to provide liquidity within specific price ranges rather than across the entire price curve. This can significantly increase fee generation for a given amount of capital.",
    category: "advanced",
    relatedTerms: ["Capital Efficiency", "Price Range", "Tick", "Dynamic Liquidity Market Maker"],
    example: "Instead of providing liquidity across all possible SOL prices from $0 to infinity, AutoYield might concentrate your liquidity between $90-$110 if SOL is currently trading at $100, maximizing fee generation in the most active trading range."
  },
  {
    term: "Dynamic Liquidity Market Maker (DLMM)",
    definition: "Meteora's advanced AMM model that enhances liquidity efficiency by dynamically adjusting based on market conditions and allowing for concentrated liquidity positions.",
    additionalInfo: "DLMM combines the efficiency of concentrated liquidity with user-friendly features that make it accessible to all types of liquidity providers. It allows for dynamic fee tiers, concentrated liquidity positions, and enhanced capital efficiency, all while maintaining the simplicity of earlier AMM models.",
    category: "advanced",
    relatedTerms: ["Concentrated Liquidity", "Automated Market Maker", "Capital Efficiency"],
    example: "AutoYield exclusively uses Meteora's DLMM pools for optimal performance, as they provide the best balance of capital efficiency, fee generation, and risk management."
  },
  {
    term: "Slippage",
    definition: "The difference between the expected price of a trade and the actual executed price due to changes in the liquidity pool during transaction processing.",
    additionalInfo: "Slippage occurs primarily in two scenarios: when trading large amounts relative to the pool size, and when multiple transactions affect the pool before your transaction is confirmed. Higher liquidity typically results in lower slippage for traders.",
    category: "advanced",
    relatedTerms: ["Price Impact", "Liquidity Depth", "AMM"],
    example: "If you try to swap 1,000 SOL for USDC in a pool with limited liquidity, you might experience 3% slippage, receiving 3% less USDC than the current market price would suggest."
  },
  {
    term: "Price Impact",
    definition: "The effect a trade has on an asset's market price within a specific liquidity pool. Larger trades relative to the pool size will have higher price impact.",
    additionalInfo: "Price impact is a direct result of the AMM's pricing curve. As trades become larger relative to the total liquidity, they move further along this curve, resulting in worse prices. Deep liquidity minimizes price impact, benefiting traders while still generating fees for liquidity providers.",
    category: "advanced",
    relatedTerms: ["Slippage", "Liquidity Depth", "AMM Formula"],
    example: "A $10,000 trade in a $10 million liquidity pool might have a 0.1% price impact, while the same trade in a $1 million pool could have a 1% impact."
  },
  {
    term: "Range Orders",
    definition: "A strategy where liquidity is provided in a specific price range, effectively creating limit orders when the price crosses the specified boundaries.",
    additionalInfo: "Range orders in concentrated liquidity pools allow LPs to automatically swap between assets when prices move outside their specified range. This can be used as a strategy to set limit buy or sell orders within AMM frameworks.",
    category: "advanced",
    relatedTerms: ["Concentrated Liquidity", "Price Range", "Limit Order"],
    example: "By setting a tight liquidity range of $95-$100 for a SOL/USDC pool when SOL is at $105, you're essentially placing a limit buy order that executes as SOL falls to your range."
  },
  {
    term: "Automated Liquidity Management",
    definition: "The use of algorithms and AI to automatically adjust liquidity positions in response to market conditions, optimizing for fee generation while minimizing risks.",
    additionalInfo: "Automated management can include rebalancing positions, adjusting price ranges, reinvesting earned fees, and implementing risk management strategies. AutoYield's QUANT AI continuously analyzes market data to make these adjustments without requiring manual intervention.",
    category: "advanced",
    relatedTerms: ["QUANT AI", "Rebalancing", "Dynamic Range Adjustment"],
    example: "When SOL's price volatility increases, AutoYield's automated management might widen your liquidity range to capture more price movement and reduce impermanent loss risk."
  },
  {
    term: "Rebalancing",
    definition: "The process of adjusting a liquidity position to maintain optimal exposure and fee generation as market conditions change.",
    additionalInfo: "Rebalancing can involve adjusting price ranges, reallocating capital between different pools, or changing the ratio of assets in a position. Effective rebalancing is key to maximizing returns while managing risks in liquidity provision.",
    category: "advanced",
    relatedTerms: ["Impermanent Loss", "Price Range", "Automated Liquidity Management"],
    example: "AutoYield automatically rebalances your liquidity position when market trends shift, moving your liquidity to follow the price of SOL and ensure continuous fee generation."
  },
  {
    term: "Non-Custodial Protocol",
    definition: "A system where users maintain control of their private keys and assets. AutoYield is non-custodial, meaning your funds are always under your control through smart contracts.",
    additionalInfo: "Non-custodial protocols minimize counterparty risk by eliminating the need to trust a centralized entity with your assets. Instead, all interactions occur directly with smart contracts that have predefined, transparent rules enforced by the blockchain.",
    category: "advanced",
    relatedTerms: ["Smart Contract", "Self-Custody", "Private Key"],
    example: "When using AutoYield, your assets are never held by a centralized company - instead, they are managed by secure smart contracts that you authorize to act on your behalf."
  },
  {
    term: "Annual Percentage Rate (APR)",
    definition: "A measure of the yearly return on investment from providing liquidity, expressed as a percentage without accounting for compounding effects.",
    additionalInfo: "APR represents the simple interest rate and provides a straightforward way to compare different investment opportunities. However, it doesn't account for the effect of reinvesting earnings, which can significantly increase returns over time.",
    category: "metrics",
    relatedTerms: ["Annual Percentage Yield", "Interest Rate", "Return on Investment"],
    example: "A liquidity pool with a 25% APR would generate $250 in fees annually on a $1,000 investment, assuming no price changes or compounding."
  },
  {
    term: "Annual Percentage Yield (APY)",
    definition: "Similar to APR but factors in the effect of compounding, giving a more accurate picture of potential returns over time.",
    additionalInfo: "APY includes the compound interest effect, which means that interest earned is reinvested to generate additional returns. The more frequently compounding occurs, the higher the APY compared to the equivalent APR. AutoYield's auto-compounding feature maximizes APY by reinvesting earnings multiple times daily.",
    category: "metrics",
    relatedTerms: ["Annual Percentage Rate", "Compound Interest", "Auto-Compounding"],
    example: "A 25% APR with daily compounding would result in an APY of approximately 28.4%, meaning your $1,000 investment would grow to $1,284 after one year instead of $1,250."
  },
  {
    term: "Total Value Locked (TVL)",
    definition: "The total value of crypto assets deposited in a DeFi protocol. Higher TVL indicates more trust and liquidity in the protocol.",
    additionalInfo: "TVL is a key metric for evaluating the size and adoption of DeFi protocols. It represents the sum of all assets that users have committed to the protocol, denominated in a common unit like USD. A growing TVL often indicates increasing user confidence.",
    category: "metrics",
    relatedTerms: ["Liquidity", "Market Cap", "Protocol Growth"],
    example: "Meteora's DLMM pools have over $100 million in TVL, demonstrating significant user adoption and providing deep liquidity for traders."
  },
  {
    term: "Fee Tier",
    definition: "The percentage fee charged for trades in a liquidity pool. Higher fee tiers may generate more income for providers but can deter traders from using the pool.",
    additionalInfo: "Different fee tiers serve different purposes: lower fees (0.01-0.05%) work well for stable pairs with minimal price movement, while higher fees (0.3-1%) are appropriate for volatile asset pairs where impermanent loss risk is greater. The optimal fee tier balances attracting trading volume with compensating LPs for their risk.",
    category: "metrics",
    relatedTerms: ["Trading Volume", "Liquidity Provider", "Fee Generation Rate"],
    example: "A SOL/USDC pool might use a 0.3% fee tier, meaning traders pay 0.3% of their transaction value as fees, which are distributed to liquidity providers."
  },
  {
    term: "Price Oracle",
    definition: "A service that provides reliable price information to a blockchain or smart contract, enabling accurate pricing for various DeFi operations.",
    additionalInfo: "Price oracles solve the problem of getting external data (like asset prices) onto the blockchain in a trustworthy way. They typically aggregate price data from multiple sources to ensure accuracy and prevent manipulation. AutoYield uses reliable oracles to inform its rebalancing decisions.",
    category: "metrics",
    relatedTerms: ["Data Feed", "Chainlink", "Pyth Network", "Switchboard"],
    example: "When AutoYield needs to determine the current market price of SOL to optimize your liquidity position, it consults decentralized price oracles like Pyth that aggregate data from multiple exchanges."
  },
  {
    term: "Capital Efficiency",
    definition: "A measure of how effectively capital is being used to generate returns. Concentrated liquidity positions are more capital efficient than traditional AMMs.",
    additionalInfo: "Capital efficiency in liquidity provision refers to generating maximum fees with minimum capital deployed. Concentrated liquidity dramatically improves capital efficiency by allowing LPs to focus their capital in active price ranges rather than spreading it across all possible prices.",
    category: "metrics",
    relatedTerms: ["Concentrated Liquidity", "Utilization Rate", "Return on Investment"],
    example: "By concentrating $10,000 worth of liquidity in a narrow price range, you might earn the same fees as $100,000 would in a traditional AMM that spreads liquidity across all prices."
  },
  {
    term: "Volatility",
    definition: "The degree of variation in a trading price over time. High volatility can increase impermanent loss risk for liquidity providers but also creates more trading opportunities.",
    additionalInfo: "Volatility is typically measured using statistical methods like standard deviation of returns. Assets with higher volatility present both greater risk and potential reward for liquidity providers, as they generate more trading volume and fees but also increase the likelihood of significant impermanent loss.",
    category: "metrics",
    relatedTerms: ["Impermanent Loss", "Standard Deviation", "Market Risk"],
    example: "During periods of high volatility when SOL's price swings 10% daily, AutoYield's AI might widen liquidity ranges to capture more price movement while reducing impermanent loss."
  },
  {
    term: "Fee Generation Rate",
    definition: "The speed at which a liquidity position earns trading fees. This depends on pool volume, fee tier, and the position's proximity to the current trading price.",
    additionalInfo: "Fee generation is influenced by multiple factors: trading volume, the position's share of the pool, the fee tier percentage, and in concentrated liquidity pools, whether the current price is within your specified range. Optimizing these factors is key to maximizing returns.",
    category: "metrics",
    relatedTerms: ["Trading Volume", "Pool Depth", "Fee Tier"],
    example: "A liquidity position in a popular SOL/USDC pool might generate fees at a rate of 0.1% daily, equivalent to a 36.5% APR, assuming the price stays within your specified range."
  },
  {
    term: "Liquidity Depth",
    definition: "The amount of liquidity available at different price points in a pool. Greater depth allows for larger trades with less slippage.",
    additionalInfo: "In concentrated liquidity pools, depth varies across different price points. Areas with more concentrated liquidity have greater depth, allowing for larger trades with minimal price impact. Deep liquidity pools attract more trading volume, generating more fees for providers.",
    category: "metrics",
    relatedTerms: ["Slippage", "Price Impact", "Market Depth", "Concentrated Liquidity"],
    example: "A SOL/USDC pool with $10 million concentrated around the current price offers much greater liquidity depth than a pool with the same amount spread across all possible prices, resulting in less slippage for traders."
  },
  {
    term: "QUANT AI",
    definition: "AutoYield's proprietary artificial intelligence system that continuously analyzes market conditions to optimize liquidity positions for maximum yield while minimizing risks.",
    additionalInfo: "QUANT AI leverages machine learning algorithms trained on historical market data to identify patterns and predict optimal liquidity deployment strategies. It monitors key metrics like price trends, volatility, trading volume, and fee generation to make data-driven decisions about position management.",
    category: "advanced",
    relatedTerms: ["Automated Liquidity Management", "AI Optimization", "Risk Management"],
    example: "When QUANT AI detects increasing correlation between SOL and ETH prices, it might adjust your liquidity positions to optimize for the new market conditions and reduce potential risks."
  },
  {
    term: "Auto-Compounding",
    definition: "The automatic reinvestment of earned yields back into a liquidity position to accelerate returns through compound interest effects.",
    additionalInfo: "Auto-compounding maximizes returns by continuously reinvesting earned trading fees, eliminating the manual work and gas costs associated with claim-and-reinvest operations. Over time, compounding can significantly increase overall returns compared to manual fee collection.",
    category: "advanced",
    relatedTerms: ["Annual Percentage Yield", "Compound Interest", "Fee Reinvestment"],
    example: "AutoYield's auto-compounding feature automatically harvests and reinvests your earned trading fees multiple times daily, maximizing your effective APY without requiring any manual actions."
  },
  {
    term: "LP Token",
    definition: "A token received by liquidity providers representing their share of a liquidity pool. LP tokens can be redeemed to withdraw the underlying assets plus accumulated fees.",
    additionalInfo: "LP tokens serve as proof of liquidity provision and track your proportional ownership of the pool. As the pool collects trading fees, the value of LP tokens increases relative to the underlying assets. In some DeFi ecosystems, LP tokens can be staked in other protocols for additional rewards.",
    category: "basic",
    relatedTerms: ["Liquidity Pool", "Liquidity Provider", "Yield Farming"],
    example: "When depositing $10,000 worth of assets into AutoYield, you receive LP tokens that represent your share of the pool and automatically accrue value as trading fees are earned."
  }
];
