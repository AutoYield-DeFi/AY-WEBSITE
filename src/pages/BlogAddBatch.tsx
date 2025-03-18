
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogBatchForm from '@/components/blog/BlogBatchForm';

const BlogAddBatch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Add Blog Posts - AutoYield</title>
        <meta name="description" content="Add multiple blog posts to the AutoYield blog" />
      </Helmet>

      <Navbar />

      <div className="container mx-auto px-4 py-16 mt-16">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-serif font-bold tracking-tight mb-2">Add Blog Posts</h1>
          <p className="text-muted-foreground">
            Easily add multiple blog posts with a simple format
          </p>
        </header>

        <BlogBatchForm />
      </div>

      <Footer />
    </div>
  );
};

export default BlogAddBatch;
