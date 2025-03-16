
import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import DocsHeader from './DocsHeader';

const DocsGuides = () => {
  return (
    <div className="space-y-10">
      <DocsHeader
        title="User Guides"
        description="Step-by-step instructions for common AutoYield tasks and workflows"
        icon={<BookOpen size={24} className="text-primary" />}
      />

      <section className="space-y-6">
        <p className="text-lg">
          These practical guides will help you make the most of AutoYield's features and capabilities.
          Each guide provides clear, step-by-step instructions for common tasks and workflows.
        </p>
        
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle>First-Time Setup</CardTitle>
              <CardDescription>Connect your wallet and make your first deposit</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Perfect for new users, this guide walks you through connecting your wallet and making your first liquidity deposit on AutoYield.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full" variant="outline">
                Read Guide
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle>Choosing the Right Pool</CardTitle>
              <CardDescription>How to evaluate and select optimal pools</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Learn how to analyze pool metrics, understand risk profiles, and select the best liquidity pools for your investment goals.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full" variant="outline">
                Read Guide
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle>Understanding Position Performance</CardTitle>
              <CardDescription>How to interpret your dashboard metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Dive into your portfolio dashboard and learn how to interpret all the key metrics and performance indicators.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full" variant="outline">
                Read Guide
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle>Managing Impermanent Loss</CardTitle>
              <CardDescription>Strategies to mitigate impermanent loss</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Understand what impermanent loss is, how AutoYield's AI helps reduce it, and additional strategies you can employ.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full" variant="outline">
                Read Guide
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle>Custom AI Strategies</CardTitle>
              <CardDescription>Configure your own AI parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                For advanced users who want to customize how the QUANT AI manages their positions with personalized parameters.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full" variant="outline">
                Read Guide
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle>Tax Reporting</CardTitle>
              <CardDescription>Exporting transaction data for taxes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Learn how to export your complete transaction history in formats suitable for tax reporting and accounting.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full" variant="outline">
                Read Guide
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Video Tutorials</h2>
        <p>
          Visual learners can benefit from our comprehensive video guides covering key AutoYield features and workflows.
        </p>
        
        <div className="grid gap-6 mt-6 sm:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Getting Started with AutoYield</CardTitle>
              <CardDescription>A complete walkthrough for new users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Video Tutorial</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Watch Video</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Advanced Portfolio Management</CardTitle>
              <CardDescription>Optimize your liquidity strategy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Video Tutorial</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Watch Video</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Common Workflows</h2>
        
        <div className="space-y-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-4">Adding More Liquidity to an Existing Position</h3>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <p><strong>Navigate to your portfolio:</strong> Go to the Portfolio section in the dashboard</p>
              </li>
              <li>
                <p><strong>Find your position:</strong> Locate the liquidity position you want to add to</p>
              </li>
              <li>
                <p><strong>Click "Add Liquidity":</strong> Open the deposit modal for your existing position</p>
              </li>
              <li>
                <p><strong>Enter amount:</strong> Specify how much additional liquidity you want to add</p>
              </li>
              <li>
                <p><strong>Review and confirm:</strong> Check the details and approve the transaction</p>
              </li>
            </ol>
            <Button className="mt-4" variant="outline">
              Full Guide <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-4">Withdrawing Liquidity</h3>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <p><strong>Navigate to your portfolio:</strong> Go to the Portfolio section in the dashboard</p>
              </li>
              <li>
                <p><strong>Find your position:</strong> Locate the liquidity position you want to withdraw from</p>
              </li>
              <li>
                <p><strong>Click "Withdraw":</strong> Open the withdrawal modal for your position</p>
              </li>
              <li>
                <p><strong>Enter amount:</strong> Choose either a percentage or specific token amount to withdraw</p>
              </li>
              <li>
                <p><strong>Select token preferences:</strong> Choose which tokens you want to receive (single token or both)</p>
              </li>
              <li>
                <p><strong>Review and confirm:</strong> Check the details and approve the transaction</p>
              </li>
            </ol>
            <Button className="mt-4" variant="outline">
              Full Guide <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary-muted/10 p-6 rounded-lg border border-primary-muted/20">
        <h3 className="text-xl font-bold mb-2">Need Additional Help?</h3>
        <p className="mb-4">
          If you can't find the information you need in these guides, our support team is ready to assist you.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Join Our Discord</Button>
          <Button variant="outline">Contact Support</Button>
        </div>
      </section>
    </div>
  );
};

export default DocsGuides;
