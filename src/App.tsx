import React, { lazy, Suspense, useEffect, ComponentType, LazyExoticComponent } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/ScrollToTop';

// Eager load critical routes
import Home from '@/pages/Index';
import NotFound from '@/pages/NotFound';

// Keep track of what's been preloaded to avoid duplicates
const preloadCache = new Set<string>();

// Proper type definitions
type PrefetchableComponent<P = {}> = LazyExoticComponent<ComponentType<P>> & {
  preload: () => Promise<{ default: ComponentType<P> }>;
  displayName?: string;
};

const prefetch = <P extends {}>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
  displayName: string
): PrefetchableComponent<P> => {
  const Component = lazy(importFn) as PrefetchableComponent<P>;
  Component.preload = () => {
    // Only preload if not already cached
    if (!preloadCache.has(displayName)) {
      preloadCache.add(displayName);
      return importFn().catch(err => {
        console.error(`Failed to preload ${displayName}:`, err);
        preloadCache.delete(displayName);
        throw err;
      });
    }
    return Promise.resolve({ default: (() => null) as unknown as ComponentType<P> });
  };
  Component.displayName = displayName;
  return Component;
};

// Lazy load non-critical routes with explicit props typing
const About = prefetch(() => import('@/pages/AboutUs'), 'About');
const Blog = prefetch(() => import('@/pages/Blog'), 'Blog');
const BlogDetail = prefetch<{ id: string }>(() => import('@/pages/BlogDetail'), 'BlogDetail');
const BlogAdmin = prefetch(() => import('@/pages/BlogAdmin'), 'BlogAdmin');
const Legal = prefetch(() => import('@/pages/Legal'), 'Legal');
const Docs = prefetch(() => import('@/pages/Docs'), 'Docs');
const Glossary = prefetch(() => import('@/pages/Glossary'), 'Glossary');
const Roadmap = prefetch(() => import('@/pages/Roadmap'), 'Roadmap');
const FAQ = prefetch(() => import('@/pages/FAQ'), 'FAQ');
const BlogImport = prefetch(() => import('@/pages/BlogImport'), 'BlogImport');

// List of all routes for preloading
const routeComponents = [
  About, Blog, BlogDetail, BlogAdmin, Legal, 
  Docs, Glossary, Roadmap, FAQ, BlogImport
];

// Helper function for idle loading with fallback
const loadWhenIdle = (callback: () => void, fallbackDelay = 1000) => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout: fallbackDelay });
  } else {
    setTimeout(callback, fallbackDelay);
  }
};

// Preloader component with improved idle-time loading
const RoutePreloader = () => {
  useEffect(() => {
    // Initial preload of primary routes
    const preloadInitialRoutes = async () => {
      // Start with most common routes first
      const initialRoutes = [About, Blog, FAQ];
      
      // Preload initial set immediately
      initialRoutes.forEach(component => component.preload());
      
      // Preload remaining routes during idle time
      loadWhenIdle(() => {
        const remainingRoutes = routeComponents.filter(
          component => !initialRoutes.includes(component)
        );
        
        // Process routes in batches to avoid overwhelming the browser
        const processBatch = (startIndex: number, batchSize = 2) => {
          if (startIndex >= remainingRoutes.length) return;
          
          const endIndex = Math.min(startIndex + batchSize, remainingRoutes.length);
          for (let i = startIndex; i < endIndex; i++) {
            remainingRoutes[i].preload();
          }
          
          // Process next batch during next idle period
          loadWhenIdle(() => processBatch(endIndex));
        };
        
        processBatch(0);
      });
    };
    
    preloadInitialRoutes();
  }, []);
  
  return null;
};

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

// Navigation-aware component that preloads adjacent routes
const NavigationPreloader = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Small delay to ensure route transition is complete first
    const timeoutId = setTimeout(() => {
      // Preload adjacent routes based on current location
      if (location.pathname === '/') {
        // From home, likely to visit About or Blog
        About.preload();
        Blog.preload();
      } else if (location.pathname === '/blog') {
        // From blog, likely to view a blog post
        BlogDetail.preload();
      } else if (location.pathname.startsWith('/docs')) {
        // From docs, might check FAQ or Glossary
        FAQ.preload();
        Glossary.preload();
      }
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);
  
  return null;
};

// Wrapper components for routes that need params
const BlogDetailWrapper = () => {
  const { id } = useParams<{ id: string }>();
  return <BlogDetail id={id!} />;
};

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
        {/* Dynamic route with wrapper to provide params */}
        <Route path="/blog/:id" element={<BlogDetailWrapper />} />
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
          <RoutePreloader />
          <NavigationPreloader />
          <AppRoutes />
          <Toaster />
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;