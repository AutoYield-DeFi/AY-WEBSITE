
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

interface BlogPostNotFoundProps {
  id?: string;
  availablePosts: {id: string, slug: string}[];
}

const BlogPostNotFound = ({ id, availablePosts }: BlogPostNotFoundProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <p className="mb-4">The blog post you're looking for doesn't exist or has been removed.</p>
        {id && <p className="mb-4 text-sm text-gray-500">Requested ID/slug: <code className="bg-gray-100 px-2 py-1 rounded">{id}</code></p>}
        
        {availablePosts.length > 0 && (
          <div className="mb-8 max-w-lg mx-auto">
            <p className="font-medium mb-3">Available posts:</p>
            <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg overflow-auto max-h-64 text-left">
              <ul className="space-y-2">
                {availablePosts.map((p, index) => (
                  <li key={index} className="hover:bg-gray-100 p-1 rounded">
                    <Link to={`/blog/${p.slug}`} className="text-primary hover:underline">
                      <span className="text-xs text-gray-500">ID: {p.id}</span>
                      <br />
                      <span>Slug: {p.slug}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        <Button asChild variant="default" size="lg">
          <Link to="/blog">
            Return to Blog
          </Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostNotFound;
