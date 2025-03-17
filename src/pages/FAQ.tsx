
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from '@/components/about/MotionWrapper';
import { QuestionCircle } from 'lucide-react';

const FAQ = () => {
  const faqItems = [
    {
      question: "What is AutoYield?",
      answer: "AutoYield is an AI-powered liquidity management platform built on Solana. It provides intelligent, automated liquidity provisioning using Meteora's Dynamic Liquidity Market Maker (DLMM) pools. AutoYield enables users to maximize trading fees while mitigating impermanent loss and market risks through advanced AI optimization."
    },
    {
      question: "How does AutoYield use AI for liquidity management?",
      answer: "AutoYield's QUANT AI agent continuously analyzes liquidity conditions, price movements, volatility, and liquidity depths to dynamically adjust positions in real-time. It employs strategies like dynamic range rebalancing, market-adaptive liquidity deployment, impermanent loss mitigation, auto-compounding fees, and automatic stop-loss mechanisms to optimize yield and protect your investment."
    },
    {
      question: "What makes AutoYield different from other liquidity solutions?",
      answer: "AutoYield stands out with its exclusive integration with Meteora DLMM pools, Privy-powered secure transaction management, Solana AI Agent Kit for advanced execution, top-tier AI engine for continuous optimization, one-click liquidity provisioning, and fully automated risk management. It offers a web-based application accessible from any modern browser without needing additional software."
    },
    {
      question: "How do I get started with AutoYield?",
      answer: "Getting started is simple: connect your wallet via Privy, choose from our curated list of best-performing Meteora DLMM pools, specify your investment amount, and let AutoYield's AI-driven smart contracts optimize your deployment. You can track your performance in real-time through our comprehensive dashboard."
    },
    {
      question: "What are the fees for using AutoYield?",
      answer: "AutoYield follows a performance-based model with a 10% fee on trading fees earned (only when you generate yield), a 0.1% auto-compounding fee, and a 0.1% rebalancing fee per position value per rebalance. We don't charge management fees for simply holding liquidity, ensuring our incentives align with your profitability."
    },
    {
      question: "How does AutoYield protect my funds?",
      answer: "AutoYield employs a non-custodial approach where you retain full ownership of your assets. Our smart contracts undergo rigorous external audits. We implement multi-signature governance, emergency stop mechanisms, permissioned operator systems, and real-time monitoring with anomaly detection to prevent exploits and protect your funds."
    },
    {
      question: "How does AutoYield mitigate impermanent loss?",
      answer: "QUANT AI monitors volatility metrics and adjusts your positions preemptively. When it detects potential large price swings, it shifts your liquidity to safer price bands, reducing exposure to impermanent loss. The system continuously tracks estimated impermanent loss and provides AI-driven suggestions to minimize exposure."
    },
    {
      question: "Can I withdraw my funds anytime?",
      answer: "Yes, you can withdraw your funds instantly at any time. AutoYield's non-custodial approach ensures you always retain full ownership of your assets, and our system is designed to execute withdrawals efficiently with minimal gas costs."
    },
    {
      question: "Which tokens can I provide liquidity for?",
      answer: "AutoYield supports a wide range of tokens available in Meteora DLMM pools, including established tokens, promising mid-cap projects, and selected small-cap tokens with growth potential. Our curated list focuses on high-performing pools with strong liquidity and trading volume."
    },
    {
      question: "How does auto-compounding work?",
      answer: "AutoYield's auto-compounding feature automatically reinvests your earned trading fees to maximize long-term yield. This reduces gas costs and improves compounding efficiency compared to manual reinvestments, helping your investment grow faster through the power of compound returns."
    },
    {
      question: "What happens if there's a market crash?",
      answer: "AutoYield's QUANT AI sets risk thresholds based on market conditions. If price volatility exceeds safe limits, the system can automatically withdraw your liquidity to stable assets, protecting your investment. This automated stop-loss and exit mechanism works 24/7 to safeguard your funds during extreme market events."
    },
    {
      question: "Is AutoYield audited?",
      answer: "Yes, AutoYield's smart contracts undergo rigorous audits by reputable external security firms. We follow a security-first approach with multiple layers of protection, including multi-signature governance, emergency stop mechanisms, and continuous security monitoring to ensure the highest standards of security for our users."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Frequently Asked Questions | AutoYield"
        description="Find answers to common questions about AutoYield's AI-powered liquidity management platform on Solana, features, security, and how to get started."
        keywords="AutoYield FAQ, liquidity management questions, DeFi questions, Solana liquidity, DLMM, yield optimization FAQs"
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about AutoYield's platform, features, and how to maximize your DeFi earnings.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-start gap-3">
                      <QuestionCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-8">
              Our team is always ready to help you with any questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@autoyield.io" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <Mail className="h-4 w-4" />
                Contact Support
              </a>
              <a href="/docs" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
                <ExternalLink className="h-4 w-4" />
                Read Documentation
              </a>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
