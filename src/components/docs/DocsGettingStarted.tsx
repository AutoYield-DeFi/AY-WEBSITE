
import React from 'react';
import { Wallet, Layers, ReceiptText, Laptop, AreaChart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

const DocsGettingStarted = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Getting Started</h1>
        <p className="text-xl text-muted-foreground">
          Start your journey with AutoYield and optimize your liquidity positions
        </p>
      </div>

      <section id="prerequisites" className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Laptop size={24} className="text-primary" />
          Prerequisites
        </h2>
        <p>
          Before you begin, make sure you have the following:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>A Solana-compatible wallet (Phantom, Solflare, Backpack, etc.)</li>
          <li>SOL tokens for transaction fees</li>
          <li>Tokens you wish to provide as liquidity (e.g., SOL, USDC, etc.)</li>
          <li>A desktop or mobile web browser</li>
        </ul>
      </section>

      <section id="wallet-setup" className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Wallet size={24} className="text-primary" />
          Wallet Setup
        </h2>
        
        <Tabs defaultValue="phantom">
          <TabsList>
            <TabsTrigger value="phantom">Phantom</TabsTrigger>
            <TabsTrigger value="solflare">Solflare</TabsTrigger>
            <TabsTrigger value="backpack">Backpack</TabsTrigger>
            <TabsTrigger value="other">Other Wallets</TabsTrigger>
          </TabsList>
          
          <TabsContent value="phantom" className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold">Setting up Phantom Wallet</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Visit <a href="https://phantom.app/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">phantom.app</a> and install the browser extension or mobile app</li>
              <li>Create a new wallet or import an existing one using your seed phrase</li>
              <li>Secure your wallet with a strong password</li>
              <li>Fund your wallet with SOL and any tokens you plan to provide as liquidity</li>
            </ol>
          </TabsContent>
          
          <TabsContent value="solflare" className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold">Setting up Solflare Wallet</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Visit <a href="https://solflare.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">solflare.com</a> and install the browser extension or mobile app</li>
              <li>Create a new wallet or import an existing one using your seed phrase</li>
              <li>Secure your wallet with a strong password</li>
              <li>Fund your wallet with SOL and any tokens you plan to provide as liquidity</li>
            </ol>
          </TabsContent>
          
          <TabsContent value="backpack" className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold">Setting up Backpack Wallet</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Visit <a href="https://www.backpack.app/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">backpack.app</a> and install the browser extension</li>
              <li>Create a new wallet or import an existing one using your seed phrase</li>
              <li>Secure your wallet with a strong password</li>
              <li>Fund your wallet with SOL and any tokens you plan to provide as liquidity</li>
            </ol>
          </TabsContent>
          
          <TabsContent value="other" className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold">Other Compatible Wallets</h3>
            <p>AutoYield supports any Solana wallet that is compatible with the Solana wallet adapter standard. Some other options include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Slope</li>
              <li>Coin98</li>
              <li>Sollet</li>
              <li>MathWallet</li>
            </ul>
            <p>Follow each wallet's instructions to set up and fund your wallet before connecting to AutoYield.</p>
          </TabsContent>
        </Tabs>
      </section>

      <section id="connecting" className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <ReceiptText size={24} className="text-primary" />
          Connecting to AutoYield
        </h2>
        
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <p><strong>Visit the AutoYield app:</strong> Go to <a href="https://autoyield.replit.app/pools" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">autoyield.replit.app</a></p>
          </li>
          <li>
            <p><strong>Click "Connect Wallet":</strong> Look for the connect button in the top right corner of the navigation bar</p>
          </li>
          <li>
            <p><strong>Select your preferred connection method:</strong> AutoYield offers multiple ways to connect:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Email login:</strong> Connect with just your email (powered by Privy)</li>
              <li><strong>Social login:</strong> Use Google, Twitter, or Discord (powered by Privy)</li>
              <li><strong>Wallet direct:</strong> Connect your Solana wallet directly</li>
            </ul>
          </li>
          <li>
            <p><strong>Approve the connection:</strong> Confirm any permission requests from your wallet or authentication provider</p>
          </li>
        </ol>
        
        <Alert className="mt-4">
          <AlertTitle>Security Tip</AlertTitle>
          <AlertDescription>
            Always verify you're on the official AutoYield website before connecting your wallet. Check for "https://" and the correct domain name in your browser's address bar.
          </AlertDescription>
        </Alert>
      </section>

      <section id="selecting-pools" className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Layers size={24} className="text-primary" />
          Selecting a Liquidity Pool
        </h2>
        
        <p>
          AutoYield curates high-quality Meteora DLMM liquidity pools to help you earn maximum yield. Here's how to choose a pool:
        </p>
        
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <p><strong>Browse available pools:</strong> Navigate to the "Pools" section to see all available liquidity pools</p>
          </li>
          <li>
            <p><strong>Review pool metrics:</strong> For each pool, AutoYield displays important information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>APR:</strong> The estimated annual percentage rate of return</li>
              <li><strong>TVL:</strong> Total value locked in the pool</li>
              <li><strong>Volume:</strong> Trading volume within the pool</li>
              <li><strong>Fees:</strong> Trading fees generated by the pool</li>
              <li><strong>Risk Score:</strong> AI-calculated risk assessment for the pool</li>
            </ul>
          </li>
          <li>
            <p><strong>Select a pool:</strong> Click on a pool to view detailed information and deposit options</p>
          </li>
        </ol>
        
        <Alert className="mt-4">
          <AlertTitle>How to choose the right pool</AlertTitle>
          <AlertDescription>
            Consider your risk tolerance and investment goals. Higher APR pools may carry higher risk. Stable pairs (like USDC-USDT) generally have lower volatility but also lower returns compared to crypto-crypto pairs.
          </AlertDescription>
        </Alert>
      </section>

      <section id="depositing" className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <ReceiptText size={24} className="text-primary" />
          Making Your First Deposit
        </h2>
        
        <p>
          Once you've selected a pool, you can provide liquidity with AutoYield's one-click deposit process:
        </p>
        
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <p><strong>Enter deposit amount:</strong> Specify how much you want to invest in the pool</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>You can deposit a single token (AutoYield will automatically balance it for you)</li>
              <li>Or deposit both tokens in the correct ratio</li>
            </ul>
          </li>
          <li>
            <p><strong>Review AI strategy:</strong> AutoYield will display the AI-recommended strategy:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Price range for concentrated liquidity</li>
              <li>Expected fee earnings</li>
              <li>Potential impermanent loss scenarios</li>
            </ul>
          </li>
          <li>
            <p><strong>Confirm transaction:</strong> Click "Deposit" and confirm the transaction in your wallet</p>
          </li>
          <li>
            <p><strong>Wait for confirmation:</strong> AutoYield will show a success message once your deposit is complete</p>
          </li>
        </ol>
        
        <Alert className="mt-4">
          <AlertTitle>AutoYield Magic</AlertTitle>
          <AlertDescription>
            Behind the scenes, AutoYield uses its QUANT AI to determine the optimal concentrated liquidity range, 
            splits your tokens correctly, and positions them in the Meteora DLMM pool for maximum efficiency.
          </AlertDescription>
        </Alert>
      </section>

      <section id="monitoring" className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <AreaChart size={24} className="text-primary" />
          Monitoring Your Position
        </h2>
        
        <p>
          Once your liquidity is deployed, AutoYield provides a comprehensive dashboard to track performance:
        </p>
        
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <p><strong>View your active positions:</strong> Navigate to the "Portfolio" section to see all your active liquidity positions</p>
          </li>
          <li>
            <p><strong>Track performance metrics:</strong> For each position, you can monitor:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Current value:</strong> The total value of your position</li>
              <li><strong>Earned fees:</strong> Trading fees you've accumulated</li>
              <li><strong>APR:</strong> Your actual annualized return</li>
              <li><strong>Impermanent loss:</strong> Estimated IL compared to holding</li>
              <li><strong>AI actions:</strong> Recent rebalancing or optimization actions taken by the AI</li>
            </ul>
          </li>
          <li>
            <p><strong>Review rebalancing history:</strong> See when and why the AI rebalanced your position</p>
          </li>
          <li>
            <p><strong>Adjust settings (optional):</strong> Modify strategy parameters if desired</p>
          </li>
        </ol>
        
        <Alert className="mt-4">
          <AlertTitle>AutoYield's Advantage</AlertTitle>
          <AlertDescription>
            The magic of AutoYield is that you don't need to actively monitor or manage your position. 
            Our QUANT AI continuously does this for you, making real-time adjustments to maximize your yield 
            and protect against market volatility.
          </AlertDescription>
        </Alert>
      </section>

      <section className="bg-primary-muted/10 p-6 rounded-lg border border-primary-muted/20">
        <h3 className="text-xl font-bold mb-2">Next Steps</h3>
        <p className="mb-4">
          Now that you've set up your first position, you may want to explore:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Learn about <a href="/docs/ai-strategies" className="text-primary hover:underline">AI Strategies</a> used by AutoYield</li>
          <li>Understand <a href="/docs/fee-structure" className="text-primary hover:underline">Fee Structure</a> for using the platform</li>
          <li>Explore <a href="/docs/advanced-settings" className="text-primary hover:underline">Advanced Settings</a> for customizing your experience</li>
          <li>Check out <a href="/docs/faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
        </ul>
      </section>
    </div>
  );
};

export default DocsGettingStarted;
