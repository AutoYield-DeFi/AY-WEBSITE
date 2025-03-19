
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import { fetchBlogPostById, fetchRelatedPosts, fetchBlogPosts, getAvailablePosts } from '@/lib/blog';
import type { BlogPost } from '@/types/blog';

export function useBlogPost(idOrSlug?: string) {
  const { toast } = useToast();
  const [availablePosts, setAvailablePosts] = useState<{id: string, slug: string}[]>([]);
  
  // Debug available posts
  useEffect(() => {
    async function debugPosts() {
      if (idOrSlug) {
        console.log(`Blog detail page loaded with ID/slug: ${idOrSlug}`);
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
  }, [idOrSlug]);
  
  const { 
    data: post, 
    isLoading: isPostLoading, 
    error 
  } = useQuery({
    queryKey: ['blogPost', idOrSlug],
    queryFn: async () => {
      console.log(`Fetching post with ID or slug: ${idOrSlug}`);
      if (!idOrSlug) return undefined;
      
      try {
        const posts = await fetchBlogPosts();
        
        // First try to find by ID
        let post = posts.find(post => post.id === idOrSlug);
        
        // If not found by ID, try by slug
        if (!post) {
          console.log(`Post not found by ID, trying by slug: ${idOrSlug}`);
          post = posts.find(post => post.slug === idOrSlug || post.slug === idOrSlug.toLowerCase());
        }
        
        if (!post) {
          // Try with URL-encoded slug or partial matching
          console.log(`Post not found with exact match, trying partial or decoded match`);
          const decodedSlug = decodeURIComponent(idOrSlug);
          post = posts.find(p => 
            p.slug.includes(idOrSlug) || 
            idOrSlug.includes(p.slug) || 
            p.slug.includes(decodedSlug) || 
            decodedSlug.includes(p.slug)
          );
          
          if (!post) {
            console.error(`Post not found with ID or slug: ${idOrSlug}`, 
              posts.map(p => ({ id: p.id, slug: p.slug })));
            return undefined;
          }
        }
        
        console.log(`Post found: ${post.title}`);
        return post;
      } catch (error) {
        console.error(`Error fetching post by ID/slug ${idOrSlug}:`, error);
        throw error;
      }
    },
    enabled: !!idOrSlug,
    retry: 2,
  });

  // Query for related posts
  const { data: relatedPosts = [] } = useQuery({
    queryKey: ['relatedPosts', post?.category, idOrSlug],
    queryFn: () => {
      if (!post?.category || !idOrSlug) return [];
      return fetchRelatedPosts(post.category, idOrSlug);
    },
    enabled: !!post && !!post.category && !!idOrSlug,
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
