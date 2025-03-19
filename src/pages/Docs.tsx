
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DocsLayout from '@/components/docs/DocsLayout';
import SEO from '@/components/SEO';

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
        <Outlet />
      </DocsLayout>
      <Footer />
    </>
  );
};

export default Docs;
