import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/ScrollToTop';
import type { ComponentType, LazyExoticComponent } from 'react';

// Eager load critical routes
import Home from '@/pages/Index';
import NotFound from '@/pages/NotFound';

// Type definition for components with preload capability
type LazyComponentWithPreload<T extends ComponentType<any>> = LazyExoticComponent<T> & {
  preload: () => Promise<void>;
};

// Enhanced lazy loading function with proper typing
function lazyWithPreload<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
): LazyComponentWithPreload<T> {
  const Component = lazy(factory) as LazyComponentWithPreload<T>;
  Component.preload = () => factory().then(() => {}); // Convert to Promise<void>
  return Component;
}

// Lazy load components with TypeScript types
const About = lazyWithPreload(() => import(/* webpackPrefetch: true */ '@/pages/AboutUs'));
const Blog = lazyWithPreload(() => import(/* webpackPrefetch: true */ '@/pages/Blog'));
const BlogDetail = lazyWithPreload(() => import(/* webpackPrefetch: true */ '@/pages/BlogDetail'));
const BlogAdmin = lazyWithPreload(() => import('@/pages/BlogAdmin'));
const Legal = lazyWithPreload(() => import('@/pages/Legal'));
const Docs = lazyWithPreload(() => import(/* webpackPrefetch: true */ '@/pages/Docs'));
const Glossary = lazyWithPreload(() => import('@/pages/Glossary'));
const Roadmap = lazyWithPreload(() => import('@/pages/Roadmap'));
const FAQ = lazyWithPreload(() => import(/* webpackPrefetch: true */ '@/pages/FAQ'));
const BlogImport = lazyWithPreload(() => import('@/pages/BlogImport'));

// Prefetcher component
const RoutePrefetcher = () => {
  const location = useLocation();
  
  useEffect(() => {
    const prefetchRoutes = () => {
      const path = location.pathname;
      if (path === '/') {
        About.preload();
        Blog.preload();
      } else if (path === '/blog') {
        BlogDetail.preload();
        FAQ.preload();
      } else if (path.startsWith('/docs')) {
        Glossary.preload();
      }
      
      // Always prefetch common routes
      if (!path.startsWith('/faq')) FAQ.preload();
    };

    prefetchRoutes();
  }, [location.pathname]);

  return null;
};

// Query client configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 30 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

// Memoized routes component
const AppRoutes = React.memo(() => (
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
      <Route path="/blog/import" element={<BlogImport />} />
      <Route path="/admin" element={<BlogAdmin />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
));
AppRoutes.displayName = 'AppRoutes';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <RoutePrefetcher />
        <AppRoutes />
        <Toaster />
      </Router>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;