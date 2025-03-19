
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
        {id && <p className="mb-4 text-sm text-gray-500">Requested ID/slug: {id}</p>}
        {availablePosts.length > 0 && (
          <div className="mb-4">
            <p className="font-medium">Available posts:</p>
            <ul className="text-sm text-gray-600 mt-2">
              {availablePosts.map((p, index) => (
                <li key={index}>ID: {p.id}, Slug: {p.slug}</li>
              ))}
            </ul>
          </div>
        )}
        <Link to="/blog" className="text-primary hover:underline">
          Return to Blog
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostNotFound;
