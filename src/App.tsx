
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import React, { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";

// Import the Index page directly (not lazy-loaded) as it's the landing page
import Index from "./pages/Index";

// Lazy load other pages for better performance
const NotFound = lazy(() => import("./pages/NotFound"));
const Glossary = lazy(() => import("./pages/Glossary"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Roadmap = lazy(() => import("./pages/Roadmap"));
const Docs = lazy(() => import("./pages/Docs"));
const Legal = lazy(() => import("./pages/Legal"));
const FAQ = lazy(() => import("./pages/FAQ"));

// Create a loading component
const PageLoading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Configure React Query for better performance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Don't refetch data when window regains focus
      staleTime: 5 * 60 * 1000, // Data is fresh for 5 minutes
      cacheTime: 10 * 60 * 1000, // Cache data for 10 minutes
      retry: 1, // Only retry failed requests once
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                {/* Index is not lazy-loaded for faster initial page load */}
                <Route path="/" element={<Index />} />
                
                {/* All other routes are lazy-loaded */}
                <Route path="*" element={
                  <Suspense fallback={<PageLoading />}>
                    <Routes>
                      <Route path="/glossary" element={<Glossary />} />
                      <Route path="/about" element={<AboutUs />} />
                      <Route path="/roadmap" element={<Roadmap />} />
                      <Route path="/docs/*" element={<Docs />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/tag/:tag" element={<Blog />} />
                      <Route path="/blog/:id" element={<BlogDetail />} />
                      <Route path="/legal" element={<Legal />} />
                      <Route path="/faq" element={<FAQ />} />
                      {/* Catch-all route for 404 */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                } />
              </Routes>
              <Toaster />
              <Sonner />
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
