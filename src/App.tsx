
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import React from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Glossary from "./pages/Glossary";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import BlogAddBatch from "./pages/BlogAddBatch";
import Roadmap from "./pages/Roadmap";
import Docs from "./pages/Docs";
import Legal from "./pages/Legal";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider>
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/glossary" element={<Glossary />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/roadmap" element={<Roadmap />} />
                  <Route path="/docs/*" element={<Docs />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/tag/:tag" element={<Blog />} />
                  <Route path="/blog/:secureToken" element={<BlogAddBatch />} />
                  <Route path="/blog/post/:id" element={<BlogDetail />} />
                  <Route path="/legal" element={<Legal />} />
                  <Route path="/faq" element={<FAQ />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </ThemeProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
