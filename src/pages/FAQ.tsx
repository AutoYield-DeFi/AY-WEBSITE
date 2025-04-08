import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion'; // Changed import to framer-motion
import { HelpCircle, Mail, ExternalLink } from 'lucide-react';

const FAQ = () => {
  const faqItems = [
    {
      question: "What is AutoYield?",
      answer: "AutoYield is an AI-powered liquidity management platform built on Solana. It provides intelligent, automated liquidity provisioning using Meteora's Dynamic Liquidity Market Maker (DLMM) pools. AutoYield enables users to maximize trading fees while mitigating impermanent loss and market risks through advanced AI optimization."
    },
    {
      question: "How does AutoYield use AI for liquidity management?",
      answer: "AutoYield's QUANT AI agent analyzes liquidity conditions, price movements, volatility, and liquidity depths to adjust positions. It employs strategies like dynamic range rebalancing, market-adaptive liquidity deployment, impermanent loss mitigation, auto-compounding fees, and stop-loss mechanisms. While these strategies aim to optimize yield and protect investments, past performance is not indicative of future results."
    },
    {
      question: "What are the risks associated with using AutoYield?",
      answer: "Like all DeFi platforms, AutoYield carries inherent risks including but not limited to: smart contract vulnerabilities despite audits, potential impermanent loss, market volatility risks, and underlying protocol risks. AutoYield is still in Beta, and while we implement multiple security measures, users should understand that using the platform is at their own risk and they should only invest funds they can afford to lose."
    },
    {
      question: "What makes AutoYield different from other liquidity solutions?",
      answer: "AutoYield integrates exclusively with Meteora DLMM pools, uses Privy-powered secure transaction management, leverages Solana AI Agent Kit for execution, and offers one-click liquidity provisioning with automated risk management. While these features aim to provide advantages, all automated liquidity provision involves tradeoffs and potential risks."
    },
    {
      question: "How do I get started with AutoYield?",
      answer: "Connect your wallet via Privy, choose from our curated Meteora DLMM pools, specify your investment amount, and let AutoYield's AI-driven contracts optimize your deployment. You can track performance through our dashboard. As with any DeFi platform, we recommend starting with smaller amounts until you're comfortable with the system."
    },
    {
      question: "What are the fees for using AutoYield?",
      answer: "AutoYield follows a performance-based model with a 10% fee on trading fees earned (only when you generate yield), a 0.1% auto-compounding fee, and a 0.1% rebalancing fee per position value per rebalance. We don't charge management fees for simply holding liquidity. All fees are transparently displayed in your dashboard."
    },
    {
      question: "How does AutoYield protect my funds?",
      answer: "AutoYield employs a non-custodial approach where you retain full ownership of your assets. Our smart contracts undergo audits, and we implement multi-signature governance, emergency stop mechanisms, and real-time monitoring. However, no system is completely risk-free, and users should understand that crypto investments always carry risk."
    },
    {
      question: "How does AutoYield mitigate impermanent loss?",
      answer: "QUANT AI monitors volatility metrics and adjusts positions preemptively, shifting liquidity to safer price bands when it detects potential price swings. While these mechanisms aim to reduce exposure to impermanent loss, they cannot eliminate it entirely, especially during extreme market conditions or black swan events."
    },
    {
      question: "Can I withdraw my funds anytime?",
      answer: "Yes, you can withdraw your funds at any time. AutoYield's non-custodial approach ensures you retain full ownership of your assets. However, during periods of high network congestion, extreme market volatility, or technical issues, withdrawals might take longer to process or incur higher gas fees."
    },
    {
      question: "Is AutoYield audited?",
      answer: "Yes, AutoYield's smart contracts undergo rigorous audits by reputable external security firms. While audits significantly reduce risk, they cannot guarantee that contracts are entirely free from vulnerabilities. We follow a security-first approach with multiple layers of protection, but users should understand that no smart contract platform is 100% risk-free."
    },
    {
      question: "What happens during extreme market events?",
      answer: "AutoYield's QUANT AI includes risk thresholds that can automatically withdraw liquidity to stable assets during extreme volatility. However, these mechanisms may not always activate in time during flash crashes or unprecedented market events. During such events, the platform's performance may differ from expectations."
    },
    {
      question: "Is AutoYield still in Beta?",
      answer: "Yes, AutoYield is currently in Beta. This means we're continuously improving the platform, adding features, and strengthening security measures. Beta users should be aware that they're early adopters of technology that is still evolving and may experience occasional issues or changes to functionality."
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
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about AutoYield's platform, features, and how to maximize your DeFi earnings.
            </p>
          </motion.div>

          <motion.div 
            className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-2 text-amber-800 dark:text-amber-400">Important Risk Disclosure</h2>
            <p className="text-amber-700 dark:text-amber-300">
              AutoYield is currently in Beta. DeFi platforms involve inherent risks including smart contract vulnerabilities, 
              impermanent loss, and market volatility. Despite our security measures and audits, users should carefully 
              consider these risks and only invest funds they can afford to lose. Past performance is not indicative of 
              future results.
            </p>
          </motion.div>

          <motion.div 
            className="bg-card rounded-xl p-6 shadow-lg border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index + 0.4 }}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-8 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-8">
              Our team is always ready to help you with any questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="mailto:support@autoyield.io" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail className="h-4 w-4" />
                Contact Support
              </motion.a>
              <motion.a 
                href="/docs" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink className="h-4 w-4" />
                Read Documentation
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;