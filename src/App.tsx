
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
            <Route path="/docs/*" element={<Docs />} />
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
