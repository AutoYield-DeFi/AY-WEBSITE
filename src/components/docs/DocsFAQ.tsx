
import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import DocsHeader from './DocsHeader';

const DocsFAQ = () => {
  return (
    <div className="space-y-10">
      <DocsHeader
        title="Frequently Asked Questions"
        description="Quick answers to common questions about AutoYield"
        icon={<HelpCircle size={24} className="text-primary" />}
      />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">General Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="what-is-autoyield">
            <AccordionTrigger>What is AutoYield?</AccordionTrigger>
            <AccordionContent>
              <p>
                AutoYield is an AI-powered liquidity management platform built exclusively on Solana. It provides intelligent, 
                automated liquidity provisioning using Meteora's Dynamic Liquidity Market Maker (DLMM) pools. By leveraging 
                advanced AI optimization, AutoYield enables users to maximize trading fees while mitigating impermanent loss and market risks.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="how-does-autoyield-work">
            <AccordionTrigger>How does AutoYield work?</AccordionTrigger>
            <AccordionContent>
              <p>
                AutoYield uses its QUANT AI to optimize your liquidity positions in real-time. When you deposit funds, the AI determines 
                the optimal concentrated liquidity range, adjusts positions as market conditions change, compounds earned fees, and 
                implements risk management strategies. All this happens automatically, so you don't need to actively manage your positions.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="difference-from-manual">
            <AccordionTrigger>How is AutoYield different from manually managing liquidity?</AccordionTrigger>
            <AccordionContent>
              <p>
                Manual liquidity management requires constant attention, technical knowledge, and active decision-making. You need to set 
                appropriate price ranges, monitor market conditions, rebalance positions, and compound fees yourself. AutoYield automates 
                all of these tasks using advanced AI algorithms that can respond to market changes 24/7, often achieving better results 
                than manual management while saving you time and effort.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="supported-tokens">
            <AccordionTrigger>What tokens can I provide as liquidity on AutoYield?</AccordionTrigger>
            <AccordionContent>
              <p>
                AutoYield supports a curated selection of token pairs available in Meteora DLMM pools on Solana. This includes major assets 
                like SOL, USDC, USDT, and other prominent Solana tokens. You can view the complete list of supported pools in the "Pools" 
                section of the application.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Using AutoYield</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="getting-started">
            <AccordionTrigger>How do I get started with AutoYield?</AccordionTrigger>
            <AccordionContent>
              <p>
                Getting started is simple:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>Connect your wallet or create an account using email/social login via Privy</li>
                <li>Browse available liquidity pools and select one that matches your investment goals</li>
                <li>Deposit funds (you can deposit a single token or both tokens in the pair)</li>
                <li>The QUANT AI will automatically optimize your position for maximum yield</li>
              </ol>
              <p className="mt-2">
                Check our <a href="/docs/getting-started" className="text-primary hover:underline">Getting Started Guide</a> for detailed instructions.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="minimum-deposit">
            <AccordionTrigger>Is there a minimum deposit amount?</AccordionTrigger>
            <AccordionContent>
              <p>
                There is no hard minimum deposit amount enforced by AutoYield. However, very small positions may not be economical due to 
                the fixed costs of blockchain transactions. We recommend a minimum deposit of at least $100 USD equivalent to ensure that 
                transaction fees and rebalancing costs don't significantly impact returns.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="withdraw-anytime">
            <AccordionTrigger>Can I withdraw my funds at any time?</AccordionTrigger>
            <AccordionContent>
              <p>
                Yes, AutoYield is fully non-custodial, meaning you retain complete control of your assets at all times. You can withdraw 
                part or all of your position at any time without any lockup periods or withdrawal restrictions. Simply navigate to your 
                position in the Portfolio section and click "Withdraw".
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="deposit-single-token">
            <AccordionTrigger>Can I deposit just one token instead of both tokens in the pair?</AccordionTrigger>
            <AccordionContent>
              <p>
                Yes, AutoYield supports single-token deposits. When you deposit just one token, a portion of it will be automatically 
                swapped for the other token in the pair to create a balanced liquidity position. This feature makes it easy to provide 
                liquidity without needing to acquire both tokens beforehand.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">AI and Performance</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="how-ai-manages">
            <AccordionTrigger>How does the QUANT AI manage my liquidity?</AccordionTrigger>
            <AccordionContent>
              <p>
                The QUANT AI employs several strategies to optimize your liquidity:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Dynamic Range Rebalancing:</strong> Adjusts your liquidity range as prices move to keep it active</li>
                <li><strong>Market-Adaptive Deployment:</strong> Concentrates liquidity where trading activity is highest</li>
                <li><strong>Impermanent Loss Mitigation:</strong> Adjusts positions to reduce exposure during high volatility</li>
                <li><strong>Auto-Compounding:</strong> Automatically reinvests earned fees to maximize returns</li>
                <li><strong>Smart Stop-Loss:</strong> Implements protective measures during extreme market conditions</li>
              </ul>
              <p className="mt-2">
                See our <a href="/docs/ai-strategies" className="text-primary hover:underline">AI Strategies</a> page for more details.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="expected-returns">
            <AccordionTrigger>What returns can I expect?</AccordionTrigger>
            <AccordionContent>
              <p>
                Returns vary based on several factors including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Trading volume in the selected pool</li>
                <li>Market volatility</li>
                <li>Price movements of the token pair</li>
                <li>Fee tier of the pool</li>
              </ul>
              <p className="mt-2">
                AutoYield displays estimated APR for each pool based on recent performance data, but these are not guarantees of future returns. 
                Generally, pools with higher trading volume and volatility tend to generate higher fees, but may also have greater impermanent loss risk.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="impermanent-loss">
            <AccordionTrigger>How does AutoYield handle impermanent loss?</AccordionTrigger>
            <AccordionContent>
              <p>
                Impermanent loss (IL) is an inherent risk in liquidity provision that occurs when token prices change relative to when you deposited. 
                AutoYield mitigates IL through several techniques:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Using concentrated liquidity to maximize fee generation that can offset IL</li>
                <li>Dynamically adjusting position ranges based on trend analysis and volatility forecasting</li>
                <li>Implementing protective measures during high volatility periods</li>
                <li>Monitoring IL metrics in real-time and taking action before losses become significant</li>
              </ul>
              <p className="mt-2">
                While these strategies can reduce IL, they cannot eliminate it entirely. The platform's dashboard provides transparent IL monitoring 
                for your positions.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="customize-strategy">
            <AccordionTrigger>Can I customize my AI strategy?</AccordionTrigger>
            <AccordionContent>
              <p>
                Yes, advanced users can customize various aspects of how the QUANT AI manages their positions. You can adjust parameters such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Risk tolerance (conservative, moderate, aggressive)</li>
                <li>Rebalancing thresholds and frequency</li>
                <li>Stop-loss conditions</li>
                <li>Compounding frequency</li>
              </ul>
              <p className="mt-2">
                These settings can be accessed in the "Advanced Settings" section of each position. For most users, the default AI settings provide 
                optimal results without requiring manual configuration.
              </p>
              <p className="mt-2">
                See our <a href="/docs/advanced-settings" className="text-primary hover:underline">Advanced Settings</a> documentation for details.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Fees and Costs</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="fee-structure">
            <AccordionTrigger>What fees does AutoYield charge?</AccordionTrigger>
            <AccordionContent>
              <p>
                AutoYield follows a performance-based fee model:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Performance Fee:</strong> 10% of trading fees earned (only charged on yield, not principal)</li>
                <li><strong>Auto-Compounding Fee:</strong> 0.1% of reinvested fees</li>
                <li><strong>Rebalancing Fee:</strong> 0.1% of total position value per rebalance</li>
                <li><strong>No Management Fees:</strong> We don't charge fees for simply holding liquidity</li>
              </ul>
              <p className="mt-2">
                Users are also responsible for Solana network transaction fees (gas), which are typically very low.
              </p>
              <p className="mt-2">
                See our <a href="/docs/fee-structure" className="text-primary hover:underline">Fee Structure</a> page for detailed examples.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="gas-fees">
            <AccordionTrigger>How much are Solana gas fees?</AccordionTrigger>
            <AccordionContent>
              <p>
                Solana is known for its extremely low transaction fees. Typical operations on AutoYield cost only fractions of a cent in SOL. 
                For example:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Depositing liquidity: ~0.000005 SOL ($0.0005 at $100 SOL price)</li>
                <li>Rebalancing a position: ~0.00001 SOL ($0.001 at $100 SOL price)</li>
                <li>Withdrawing liquidity: ~0.000008 SOL ($0.0008 at $100 SOL price)</li>
              </ul>
              <p className="mt-2">
                The QUANT AI is designed to optimize operations to minimize gas costs, ensuring they don't significantly impact your returns.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Security and Technical</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="security-model">
            <AccordionTrigger>How secure is AutoYield?</AccordionTrigger>
            <AccordionContent>
              <p>
                AutoYield prioritizes security through several measures:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Non-Custodial Design:</strong> You always maintain full control of your assets</li>
                <li><strong>Audited Smart Contracts:</strong> All code is thoroughly audited by third-party security firms</li>
                <li><strong>Multi-Sig Governance:</strong> Critical protocol functions require multiple approvals</li>
                <li><strong>Permissioned Operators:</strong> Only authorized AI agents can execute transactions</li>
                <li><strong>Real-Time Monitoring:</strong> Continuous monitoring for unusual activities or potential exploits</li>
              </ul>
              <p className="mt-2">
                See our <a href="/docs/security-model" className="text-primary hover:underline">Security Model</a> documentation for more details.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="smart-contracts">
            <AccordionTrigger>Are the smart contracts audited?</AccordionTrigger>
            <AccordionContent>
              <p>
                Yes, all AutoYield smart contracts undergo comprehensive security audits by reputable third-party firms. These audits 
                include code review, formal verification, and penetration testing. Audit reports are published on our website for transparency. 
                Additionally, we maintain a bug bounty program to incentivize responsible disclosure of any potential vulnerabilities.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="open-source">
            <AccordionTrigger>Is AutoYield open source?</AccordionTrigger>
            <AccordionContent>
              <p>
                The AutoYield frontend interface is open source and can be found in our GitHub repository. This allows the community to verify 
                the user interface behavior and contribute to its development. The core smart contracts are also open source and verifiable 
                on-chain. However, the proprietary QUANT AI algorithms that power our optimization strategies are closed source to protect our 
                competitive advantage and prevent potential exploits.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="p-6 bg-primary-muted/10 rounded-lg border border-primary-muted/20">
        <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
        <p className="mb-4">
          If you couldn't find the answer you're looking for, we're here to help.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Join our <a href="#" className="text-primary hover:underline">Discord community</a> for direct support</li>
          <li>Follow us on <a href="#" className="text-primary hover:underline">Twitter</a> for updates and announcements</li>
          <li>Email us at <a href="mailto:support@autoyield.io" className="text-primary hover:underline">support@autoyield.io</a></li>
        </ul>
      </section>
    </div>
  );
};

export default DocsFAQ;
