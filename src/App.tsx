import React, { lazy, Suspense, useEffect, ComponentType, LazyExoticComponent } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/ScrollToTop';

// Eager load critical routes
import Home from '@/pages/Index';
import NotFound from '@/pages/NotFound';

// Proper type definitions
type PrefetchableComponent<P = {}> = LazyExoticComponent<ComponentType<P>> & {
  preload: () => Promise<{ default: ComponentType<P> }>;
};

const prefetch = <P extends {}>(
  importFn: () => Promise<{ default: ComponentType<P> }>
): PrefetchableComponent<P> => {
  const Component = lazy(importFn) as PrefetchableComponent<P>;
  (Component as any).preload = importFn;
  return Component;
};

// Lazy load non-critical routes with explicit props typing
const About = prefetch(() => import('@/pages/AboutUs'));
const Blog = prefetch(() => import('@/pages/Blog'));
const BlogDetail = prefetch<{ id: string }>(() => import('@/pages/BlogDetail'));
const BlogAdmin = prefetch(() => import('@/pages/BlogAdmin'));
const Legal = prefetch(() => import('@/pages/Legal'));
const Docs = prefetch(() => import('@/pages/Docs'));
const Glossary = prefetch(() => import('@/pages/Glossary'));
const Roadmap = prefetch(() => import('@/pages/Roadmap'));
const FAQ = prefetch(() => import('@/pages/FAQ'));
const BlogImport = prefetch(() => import('@/pages/BlogImport'));


// List of all routes for preloading
const routeComponents = [
  About, Blog, BlogDetail, BlogAdmin, Legal, 
  Docs, Glossary, Roadmap, FAQ, BlogImport
];

// Preloader component that works in the background
const RoutePreloader = () => {
  useEffect(() => {
    // Initial preload of primary routes
    const preloadInitialRoutes = async () => {
      // Start with most common routes first
      const initialRoutes = [About, Blog, FAQ];
      
      // Preload initial set immediately
      initialRoutes.forEach(component => component.preload());
      
      // Preload remaining routes with a delay to not block main thread
      setTimeout(() => {
        const remainingRoutes = routeComponents.filter(
          component => !initialRoutes.includes(component)
        );
        
        // Stagger the loading of remaining routes
        remainingRoutes.forEach((component, index) => {
          setTimeout(() => component.preload(), index * 100);
        });
      }, 2000); // Start preloading the rest after initial render is stable
    };
    
    preloadInitialRoutes();
  }, []);
  
  return null; // This component doesn't render anything
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
  }, [location.pathname]);
  
  return null;
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
        {/* Dynamic route last */}
        <Route path="/blog/:id" element={<BlogDetail />} />
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