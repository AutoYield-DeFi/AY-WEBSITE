
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DocsLayout from '@/components/docs/DocsLayout';
import SEO from '@/components/SEO';
import DocsWelcome from '@/components/docs/DocsWelcome';
import DocsGettingStarted from '@/components/docs/DocsGettingStarted';
import DocsCoreFeatures from '@/components/docs/DocsCoreFeatures';
import DocsAIStrategies from '@/components/docs/DocsAIStrategies';
import DocsSecurityModel from '@/components/docs/DocsSecurityModel';
import DocsFeeStructure from '@/components/docs/DocsFeeStructure';
import DocsGuides from '@/components/docs/DocsGuides';
import DocsAdvancedSettings from '@/components/docs/DocsAdvancedSettings';
import DocsFAQ from '@/components/docs/DocsFAQ';
import DocsAPIReference from '@/components/docs/DocsAPIReference';

const Docs = () => {
  return (
    <>
      <SEO 
        title="Documentation"
        description="Comprehensive guide for using AutoYield's AI-powered liquidity management platform on Solana. Learn how to maximize yield with our advanced QUANT AI system."
        keywords="AutoYield docs, Solana liquidity management, QUANT AI, DeFi documentation, Meteora DLMM, impermanent loss protection"
      />
      <Navbar />
      <DocsLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/docs/welcome" replace />} />
          <Route path="welcome" element={<DocsWelcome />} />
          <Route path="getting-started" element={<DocsGettingStarted />} />
          <Route path="core-features" element={<DocsCoreFeatures />} />
          <Route path="ai-strategies" element={<DocsAIStrategies />} />
          <Route path="security-model" element={<DocsSecurityModel />} />
          <Route path="fee-structure" element={<DocsFeeStructure />} />
          <Route path="guides" element={<DocsGuides />} />
          <Route path="advanced-settings" element={<DocsAdvancedSettings />} />
          <Route path="faq" element={<DocsFAQ />} />
          <Route path="api-reference" element={<DocsAPIReference />} />
        </Routes>
      </DocsLayout>
      <Footer />
    </>
  );
};

export default Docs;
