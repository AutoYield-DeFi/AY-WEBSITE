
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import { fetchBlogPostById, fetchRelatedPosts, fetchBlogPosts, getAvailablePosts } from '@/lib/blog';
import type { BlogPost } from '@/types/blog';

export function useBlogPost(id?: string) {
  const { toast } = useToast();
  const [availablePosts, setAvailablePosts] = useState<{id: string, slug: string}[]>([]);
  
  // Debug available posts
  useEffect(() => {
    async function debugPosts() {
      if (id) {
        console.log(`Blog detail page loaded with ID/slug: ${id}`);
        const posts = await fetchBlogPosts();
        const simplifiedPosts = posts.map(post => ({
          id: post.id,
          slug: post.slug
        }));
        console.log("Available posts:", simplifiedPosts);
        setAvailablePosts(simplifiedPosts);
      }
    }
    debugPosts();
  }, [id]);
  
  const { 
    data: post, 
    isLoading: isPostLoading, 
    error 
  } = useQuery({
    queryKey: ['blogPost', id],
    queryFn: async () => {
      console.log(`Fetching post with ID: ${id}`);
      if (!id) return undefined;
      
      try {
        const posts = await fetchBlogPosts();
        
        // First try to find by ID
        let post = posts.find(post => post.id === id);
        
        // If not found by ID, try by slug
        if (!post) {
          console.log(`Post not found by ID, trying slug: ${id}`);
          post = posts.find(post => post.slug === id);
        }
        
        if (!post) {
          console.error(`Post not found with ID or slug: ${id}`, 
            posts.map(p => ({ id: p.id, slug: p.slug })));
          return undefined;
        } else {
          console.log(`Post found: ${post.title}`);
          return post;
        }
      } catch (error) {
        console.error(`Error fetching post by ID/slug ${id}:`, error);
        throw error;
      }
    },
    enabled: !!id,
    retry: 2,
  });

  // Query for related posts
  const { data: relatedPosts = [] } = useQuery({
    queryKey: ['relatedPosts', post?.category, id],
    queryFn: () => {
      if (!post?.category || !id) return [];
      return fetchRelatedPosts(post.category, id);
    },
    enabled: !!post && !!post.category && !!id,
  });

  // Log errors for debugging
  useEffect(() => {
    if (error) {
      console.error('Error loading blog post:', error);
      toast({
        title: "Error loading blog post",
        description: "There was an issue loading this article. Please try again.",
        variant: "destructive"
      });
    }
  }, [error, toast]);

  // Memoize date formatting
  const formattedDate = useMemo(() => {
    if (!post) return '';
    const publishDate = new Date(post.publishedAt);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(publishDate);
  }, [post?.publishedAt]);

  return {
    post,
    isPostLoading,
    error,
    relatedPosts,
    formattedDate,
    availablePosts
  };
}
