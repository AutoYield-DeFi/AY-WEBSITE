
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import Home from '@/pages/Index';
import About from '@/pages/AboutUs';
import Blog from '@/pages/Blog';
import BlogDetail from '@/pages/BlogDetail';
import BlogAdmin from '@/pages/BlogAdmin';
import Legal from '@/pages/Legal';
import NotFound from '@/pages/NotFound';
import Docs from '@/pages/Docs';
import Glossary from '@/pages/Glossary';
import Roadmap from '@/pages/Roadmap';
import FAQ from '@/pages/FAQ';
import BlogImport from '@/pages/BlogImport';
import ScrollToTop from '@/components/ScrollToTop';
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

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 30 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/docs" element={<Docs />}>
              <Route path="" element={<Navigate to="/docs/welcome" replace />} />
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
            </Route>
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/blog" element={<Blog />} />
            {/* Specific routes before dynamic routes */}
            <Route path="/blog/import" element={<BlogImport />} />
            <Route path="/admin" element={<BlogAdmin />} />
            {/* Dynamic route last */}
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
