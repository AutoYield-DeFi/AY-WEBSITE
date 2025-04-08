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

// Lazy load components with TypeScript types - Combining both branches
const About = lazyWithPreload(() => import(/* webpackPrefetch: true */ '@/pages/AboutUs'));
const Blog = lazyWithPreload(() => import(/* webpackPrefetch: true */ '@/pages/Blog'));
const BlogDetail = lazyWithPreload(() => import(/* webpackPrefetch: true */ '@/pages/BlogDetail'));
const BlogAdmin = lazyWithPreload(() => import('@/pages/BlogAdmin')); // Keep admin less aggressive on prefetch unless needed
const Legal = lazyWithPreload(() => import('@/pages/Legal'));
const Docs = lazyWithPreload(() => import(/* webpackPrefetch: true */ '@/pages/Docs'));
const Glossary = lazyWithPreload(() => import('@/pages/Glossary'));
const Roadmap = lazyWithPreload(() => import('@/pages/Roadmap'));
const FAQ = lazyWithPreload(() => import(/* webpackPrefetch: true */ '@/pages/FAQ'));
const BlogImport = lazyWithPreload(() => import('@/pages/BlogImport')); // Keep import less aggressive unless needed
const Waitlist = lazyWithPreload(() => import('@/pages/Waitlist')); // Added Waitlist from HEAD, adapted to lazyWithPreload

// Prefetcher component (from complete_animation_revamp_fixed_flicker)
const RoutePrefetcher = () => {
  const location = useLocation();

  useEffect(() => {
    const prefetchRoutes = () => {
      const path = location.pathname;
      // Example prefetching logic - adjust based on expected user flow
      if (path === '/') {
        About.preload();
        Blog.preload();
        // Consider preloading Waitlist if it's a common next step from home
        // Waitlist.preload();
      } else if (path === '/blog') {
        BlogDetail.preload(); // Preload detail page when on blog list
        FAQ.preload(); // Preload FAQ as it might be related
      } else if (path.startsWith('/docs')) {
        Glossary.preload(); // Preload glossary if user is in docs
      }

      // Always prefetch common routes unless already on them
      if (!path.startsWith('/faq')) FAQ.preload();
      if (!path.startsWith('/about')) About.preload(); // Example: prefetch about if not there
    };

    // Use requestIdleCallback or setTimeout to defer prefetching slightly
    // This prevents prefetching from potentially blocking more critical rendering/tasks
    const handler = setTimeout(() => {
       prefetchRoutes();
    }, 500); // Delay prefetching slightly

    // Clear timeout on component unmount or path change
    return () => clearTimeout(handler);

  }, [location.pathname]);

  return null; // This component doesn't render anything
};

// Query client configuration (Identical in both branches)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 30 * 1000, // 30 seconds
      refetchOnWindowFocus: false,
    },
  },
});

// Memoized routes component - Combining routes from both branches
const AppRoutes = React.memo(() => (
  <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
    <Routes>
      {/* Eager loaded routes */}
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />

      {/* Lazy loaded routes */}
      <Route path="/about" element={<About />} />
      <Route path="/docs/*" element={<Docs />} />
      <Route path="/glossary" element={<Glossary />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/blog" element={<Blog />} />
      {/* Specific blog routes before dynamic one */}
      <Route path="/blog/import" element={<BlogImport />} />
      {/* Dynamic blog route */}
      <Route path="/blog/:id" element={<BlogDetail />} />

      {/* Other routes */}
      <Route path="/admin" element={<BlogAdmin />} />
      <Route path="/waitlist" element={<Waitlist />} /> {/* Added Waitlist route from HEAD */}

    </Routes>
  </Suspense>
));
AppRoutes.displayName = 'AppRoutes'; // Good practice for memoized components

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Router>
        <ScrollToTop /> {/* Ensures navigation scrolls to top */}
        <RoutePrefetcher /> {/* Add the prefetcher component */}
        <AppRoutes /> {/* Render the routes */}
        <Toaster /> {/* For notifications */}
      </Router>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;