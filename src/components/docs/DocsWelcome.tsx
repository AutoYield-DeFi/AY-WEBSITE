import React from 'react';
import { ArrowRight, Sparkles, Shield, RefreshCcw, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
const DocsWelcome = () => {
  return <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Welcome to AutoYield</h1>
        <p className="text-xl text-muted-foreground">
          The AI-powered liquidity management platform on Solana
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button asChild className="flex items-center gap-2 flex-shrink-0">
            <Link to="/docs/getting-started">
              Get Started <ArrowRight size={16} />
            </Link>
          </Button>
          <Button variant="outline" asChild className="flex-shrink-0">
            <a href="https://getwaitlist.com/waitlist/27123" target="_blank" rel="noopener noreferrer">
              Get Early Access
            </a>
          </Button>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">What is AutoYield?</h2>
        <p>AutoYield is an AI-powered liquidity management platform built exclusively on Solana. It provides intelligent, automated liquidity provisioning using Meteora's Dynamic Liquidity Market Maker (DLMM) pools. By leveraging advanced AI optimization, our platform enables users to maximize trading fees while mitigating impermanent loss and market risks.</p>
        <p>
          Our platform supports a diverse range of tokens - from well-established projects to promising small and mid-cap 
          opportunities that meet our AI's rigorous evaluation criteria. The primary goal of AutoYield is to simplify 
          liquidity provisioning through automation while delivering institutional-grade yield strategies. Unlike traditional 
          LP solutions, which require manual intervention, AutoYield's QUANT AI agent continuously analyzes liquidity 
          conditions and actively rebalances positions in real-time.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Key Features</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <RefreshCcw size={18} className="text-primary" />
                Automated Rebalancing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our AI automatically adjusts liquidity positions to ensure optimal fee generation as market conditions change.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Shield size={18} className="text-primary" />
                Impermanent Loss Protection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Intelligent position management that actively works to minimize potential impermanent loss.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Sparkles size={18} className="text-primary" />
                Auto-Compounding
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Trading fees are automatically reinvested to maximize your yield without manual intervention.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                Diverse Token Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our AI identifies profitable opportunities across established tokens and promising small and mid-cap projects.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Getting Started</h2>
        <p>
          Follow our simple guides to begin using AutoYield and start earning optimized yields on your Solana assets:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <Link to="/docs/getting-started#wallet-setup" className="text-primary hover:underline">
              Set up your wallet
            </Link>
          </li>
          <li>
            <Link to="/docs/getting-started#connecting" className="text-primary hover:underline">
              Connect to AutoYield
            </Link>
          </li>
          <li>
            <Link to="/docs/getting-started#selecting-pools" className="text-primary hover:underline">
              Choose a liquidity pool
            </Link>
          </li>
          <li>
            <Link to="/docs/getting-started#depositing" className="text-primary hover:underline">
              Make your first deposit
            </Link>
          </li>
          <li>
            <Link to="/docs/getting-started#monitoring" className="text-primary hover:underline">
              Monitor your position
            </Link>
          </li>
        </ol>
      </section>

      <section className="bg-primary-muted/10 p-6 rounded-lg border border-primary-muted/20">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:flex-1">
            <h3 className="text-xl font-bold mb-2">Need Help?</h3>
            <p className="mb-4">
              If you have any questions or need assistance, our team is here to help you get the most out of AutoYield.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" asChild className="flex-shrink-0">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Discord Community
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="flex-shrink-0">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Twitter Support
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="flex-shrink-0">
                <Link to="/docs/faq">
                  FAQ
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default DocsWelcome;
