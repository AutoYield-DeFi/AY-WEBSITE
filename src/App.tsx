import React, { useMemo, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/ScrollToTop';

// Eager load critical routes
import Home from '@/pages/Index';
import NotFound from '@/pages/NotFound';

// Lazy load non-critical routes for improved initial load performance
const About = lazy(() => import('@/pages/AboutUs'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogDetail = lazy(() => import('@/pages/BlogDetail'));
const BlogAdmin = lazy(() => import('@/pages/BlogAdmin'));
const Legal = lazy(() => import('@/pages/Legal'));
const Docs = lazy(() => import('@/pages/Docs'));
const Glossary = lazy(() => import('@/pages/Glossary'));
const Roadmap = lazy(() => import('@/pages/Roadmap'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const BlogImport = lazy(() => import('@/pages/BlogImport'));
const Waitlist = lazy(() => import('@/pages/Waitlist'));

// Create QueryClient outside component to prevent recreation on renders
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 30 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

// Memoized routes component to prevent unnecessary re-renders
const AppRoutes = React.memo(() => {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
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
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});
AppRoutes.displayName = 'AppRoutes';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <AppRoutes />
          <Toaster />
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
