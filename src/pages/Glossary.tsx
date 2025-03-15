
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GlossaryTerm from '@/components/glossary/GlossaryTerm';
import GlossaryHeader from '@/components/glossary/GlossaryHeader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Glossary = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-primary-muted/30 to-white pt-20">
        <div className="container mx-auto px-6 py-8">
          <GlossaryHeader />
          
          <div className="mt-12">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8">
                <TabsTrigger value="basic">Basic Terms</TabsTrigger>
                <TabsTrigger value="advanced">Advanced Concepts</TabsTrigger>
                <TabsTrigger value="metrics">Metrics & Indicators</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="space-y-6">
                <GlossaryTerm 
                  term="Liquidity Pool (LP)" 
                  definition="A collection of funds locked in a smart contract that facilitates trading by providing liquidity to a decentralized exchange. Traders pay fees to use this liquidity, which is distributed to liquidity providers."
                />
                
                <GlossaryTerm 
                  term="Liquidity Provider" 
                  definition="An individual or entity that deposits tokens into a liquidity pool to facilitate trading on a decentralized exchange, earning trading fees in return."
                />
                
                <GlossaryTerm 
                  term="Automated Market Maker (AMM)" 
                  definition="A type of decentralized exchange protocol that uses mathematical formulas to price assets instead of using an order book like traditional exchanges. Examples include Uniswap, SushiSwap, and PancakeSwap."
                />
                
                <GlossaryTerm 
                  term="Decentralized Exchange (DEX)" 
                  definition="A type of cryptocurrency exchange that operates without a central authority and allows for direct peer-to-peer cryptocurrency transactions."
                />
                
                <GlossaryTerm 
                  term="Smart Contract" 
                  definition="Self-executing contracts with the terms directly written into code. They automatically execute when predetermined conditions are met and are stored on a blockchain network."
                />
                
                <GlossaryTerm 
                  term="Token Swap" 
                  definition="The process of exchanging one cryptocurrency token for another through a decentralized exchange or liquidity pool."
                />
                
                <GlossaryTerm 
                  term="Yield Farming" 
                  definition="The practice of staking or lending crypto assets to generate high returns in the form of additional cryptocurrency. This often involves providing liquidity to DEXs."
                />
                
                <GlossaryTerm 
                  term="Blockchain" 
                  definition="A distributed, immutable ledger that records transactions across many computers so that the record cannot be altered retroactively without the alteration of all subsequent blocks."
                />
                
                <GlossaryTerm 
                  term="Gas Fees" 
                  definition="Fees paid to miners or validators to process transactions on a blockchain. On Solana, these fees are significantly lower than on networks like Ethereum."
                />
              </TabsContent>
              
              <TabsContent value="advanced" className="space-y-6">
                <GlossaryTerm 
                  term="Impermanent Loss" 
                  definition="The temporary loss of value when providing liquidity to an AMM compared to simply holding the assets. It occurs when the price ratio of the pooled assets changes after deposit. AutoYield's AI helps minimize this risk."
                />
                
                <GlossaryTerm 
                  term="Concentrated Liquidity" 
                  definition="A feature that allows liquidity providers to specify price ranges for their capital, increasing capital efficiency. Introduced by Uniswap v3 and utilized by Meteora's DLMM pools on Solana."
                />
                
                <GlossaryTerm 
                  term="Dynamic Liquidity Market Maker (DLMM)" 
                  definition="Meteora's advanced AMM model that enhances liquidity efficiency by dynamically adjusting based on market conditions. AutoYield exclusively uses DLMM pools for optimal performance."
                />
                
                <GlossaryTerm 
                  term="Slippage" 
                  definition="The difference between the expected price of a trade and the actual executed price. Higher liquidity typically results in lower slippage for traders."
                />
                
                <GlossaryTerm 
                  term="Price Impact" 
                  definition="The effect a trade has on an asset's market price. Larger trades relative to the pool size will have higher price impact."
                />
                
                <GlossaryTerm 
                  term="Range Orders" 
                  definition="A strategy where liquidity is provided in a specific price range, effectively creating limit orders when the price crosses the specified boundaries."
                />
                
                <GlossaryTerm 
                  term="Automated Liquidity Management" 
                  definition="The use of algorithms and AI to automatically adjust liquidity positions in response to market conditions. This is AutoYield's core functionality."
                />
                
                <GlossaryTerm 
                  term="Rebalancing" 
                  definition="The process of adjusting your liquidity position to maintain optimal exposure and fee generation. AutoYield handles this automatically with its AI technology."
                />
                
                <GlossaryTerm 
                  term="Non-Custodial Protocol" 
                  definition="A system where users maintain control of their private keys and assets. AutoYield is non-custodial, meaning your funds are always under your control."
                />
              </TabsContent>
              
              <TabsContent value="metrics" className="space-y-6">
                <GlossaryTerm 
                  term="Annual Percentage Rate (APR)" 
                  definition="A measure of the yearly return on investment from providing liquidity, expressed as a percentage. It typically reflects fee income without accounting for compounding."
                />
                
                <GlossaryTerm 
                  term="Annual Percentage Yield (APY)" 
                  definition="Similar to APR but factors in the effect of compounding, giving a more accurate picture of potential returns over time. AutoYield's auto-compounding feature enhances APY."
                />
                
                <GlossaryTerm 
                  term="Total Value Locked (TVL)" 
                  definition="The total value of crypto assets deposited in a DeFi protocol. Higher TVL indicates more trust and liquidity in the protocol."
                />
                
                <GlossaryTerm 
                  term="Fee Tier" 
                  definition="The percentage fee charged for trades in a liquidity pool. Higher fee tiers may generate more income for providers but can deter traders from using the pool."
                />
                
                <GlossaryTerm 
                  term="Price Oracle" 
                  definition="A service that provides price information to a blockchain or smart contract. AutoYield uses reliable oracles to inform its rebalancing decisions."
                />
                
                <GlossaryTerm 
                  term="Capital Efficiency" 
                  definition="A measure of how effectively capital is being used to generate returns. Concentrated liquidity positions are more capital efficient than traditional AMMs."
                />
                
                <GlossaryTerm 
                  term="Volatility" 
                  definition="The degree of variation in a trading price over time. High volatility can increase impermanent loss risk for liquidity providers."
                />
                
                <GlossaryTerm 
                  term="Fee Generation Rate" 
                  definition="The speed at which a liquidity position earns trading fees. This depends on pool volume, fee tier, and the position's proximity to the current trading price."
                />
                
                <GlossaryTerm 
                  term="Liquidity Depth" 
                  definition="The amount of liquidity available at different price points in a pool. Greater depth allows for larger trades with less slippage."
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Glossary;
