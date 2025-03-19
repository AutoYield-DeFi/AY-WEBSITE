
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

const BlogPostNotFound = ({ id, availablePosts }: { id?: string, availablePosts: Array<{ id: string, slug: string }> }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Alert variant="destructive" className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Blog Post Not Found</AlertTitle>
          <AlertDescription>
            The blog post you're looking for could not be found.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
          <p className="text-lg text-gray-700">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          
          {id && (
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Requested ID/slug:</p>
              <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">{id}</code>
            </div>
          )}

          {availablePosts.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Available Posts</h2>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm overflow-auto max-h-64">
                <ul className="space-y-3">
                  {availablePosts.map((p, index) => (
                    <li key={index} className="hover:bg-gray-50 p-2 rounded transition-colors">
                      <Link to={`/blog/${p.slug}`} className="text-primary hover:underline block">
                        <span className="text-xs text-gray-500">ID: {p.id}</span>
                        <br />
                        <span className="font-medium">Slug: {p.slug}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="pt-6 flex gap-4">
            <Button asChild size="lg">
              <Link to="/blog">Return to Blog</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/">Go to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostNotFound;
