
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import BlogPostForm from '@/components/blog/BlogPostForm';
import { Heading, Paragraph } from '@/components/ui/typography';

const BlogAdmin = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Blog Admin - AutoYield"
        description="Admin interface for managing AutoYield blog content"
        noindex={true}
      />
      <Navbar />

      <div className="container mx-auto px-4 py-10 mt-16">
        <header className="mb-8 max-w-3xl mx-auto">
          <Heading as="h1" size="3xl" serif className="mb-4">
            Blog Admin
          </Heading>
          <Paragraph muted className="text-lg">
            Use this interface to publish new blog posts using the specified format.
          </Paragraph>
        </header>

        <div className="max-w-4xl mx-auto">
          <BlogPostForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogAdmin;
