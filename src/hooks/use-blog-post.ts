
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import { fetchBlogPosts, fetchRelatedPosts } from '@/lib/blog';
import type { BlogPost } from '@/types/blog';

export function useBlogPost(idOrSlug?: string) {
  const { toast } = useToast();
  const [availablePosts, setAvailablePosts] = useState<{id: string, slug: string}[]>([]);
  
  // Get available posts for debugging
  useEffect(() => {
    async function fetchAvailablePosts() {
      try {
        console.log(`Fetching available posts for debug info. ID/slug: ${idOrSlug}`);
        const posts = await fetchBlogPosts();
        const simplifiedPosts = posts.map(post => ({
          id: post.id,
          slug: post.slug
        }));
        console.log("Available posts:", simplifiedPosts);
        setAvailablePosts(simplifiedPosts);
      } catch (error) {
        console.error("Error fetching available posts:", error);
      }
    }
    
    if (idOrSlug) {
      fetchAvailablePosts();
    }
  }, [idOrSlug]);
  
  // Query for the blog post
  const { 
    data: post, 
    isLoading: isPostLoading, 
    error 
  } = useQuery({
    queryKey: ['blogPost', idOrSlug],
    queryFn: async () => {
      if (!idOrSlug) return undefined;
      
      console.log(`Fetching post with ID/slug: "${idOrSlug}"`);
      
      try {
        const posts = await fetchBlogPosts();
        
        // Try matching by ID
        let post = posts.find(p => p.id === idOrSlug);
        
        // If not found by ID, try by exact slug
        if (!post) {
          console.log(`Post not found by ID, trying by exact slug: "${idOrSlug}"`);
          post = posts.find(p => p.slug === idOrSlug);
        }
        
        // If still not found, try case-insensitive match
        if (!post) {
          console.log(`Post not found by exact slug, trying case-insensitive: "${idOrSlug}"`);
          post = posts.find(p => p.slug.toLowerCase() === idOrSlug.toLowerCase());
        }
        
        // If still not found, try partial match
        if (!post) {
          console.log(`Post not found with exact match, trying partial match`);
          const decodedSlug = decodeURIComponent(idOrSlug);
          post = posts.find(p => 
            p.slug.includes(idOrSlug) || 
            idOrSlug.includes(p.slug) || 
            p.slug.includes(decodedSlug) || 
            decodedSlug.includes(p.slug)
          );
        }
        
        if (post) {
          console.log(`Post found: "${post.title}" (id: ${post.id}, slug: ${post.slug})`);
        } else {
          console.error(`Post not found for "${idOrSlug}". Available posts:`, 
            posts.map(p => ({ id: p.id, slug: p.slug })));
        }
        
        return post;
      } catch (error) {
        console.error(`Error fetching post by ID/slug "${idOrSlug}":`, error);
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

  // Show error toast if post loading fails
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

  // Format the post date
  const formattedDate = useMemo(() => {
    if (!post?.publishedAt) return '';
    
    try {
      const publishDate = new Date(post.publishedAt);
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(publishDate);
    } catch (error) {
      console.error('Error formatting date:', error);
      return '';
    }
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
