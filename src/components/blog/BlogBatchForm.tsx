
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { processBlogBatch } from '@/lib/blogProcessor';
import { saveBlogPosts } from '@/lib/blog';
import { BlogPost } from '@/types/blog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heading, Paragraph } from '@/components/ui/typography';

interface FormData {
  batchInput: string;
}

const formatExample = `Title: The Future of DeFi Liquidity
Date: 2024-08-15
Author: John Smith {title: "DeFi Researcher", bio: "John has been researching DeFi protocols for over 6 years"}
Content:
# The Evolution of DeFi Liquidity

DeFi liquidity has come a long way since the early days of cryptocurrency exchanges. In this article, we'll explore the cutting-edge developments that are reshaping how liquidity works in decentralized finance.

## Key Innovations

1. Concentrated Liquidity
2. Dynamic Fee Tiers
3. Multi-token Pools

These innovations are just the beginning of a new era in DeFi.
---

Title: Understanding Impermanent Loss
Date: 2024-08-16
Author: Sarah Chen {title: "Technical Analyst", bio: "Sarah specializes in DeFi risk analysis"}
Content:
# What is Impermanent Loss?

Impermanent loss is one of the most misunderstood concepts in DeFi. Let's break it down in simple terms...`;

const BlogBatchForm = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewPosts, setPreviewPosts] = useState<BlogPost[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  
  const form = useForm<FormData>({
    defaultValues: {
      batchInput: ''
    }
  });
  
  const onSubmit = async (data: FormData) => {
    if (!data.batchInput.trim()) {
      toast.error('Please enter blog content to process');
      return;
    }
    
    try {
      setIsProcessing(true);
      
      // Process the batch input
      const processedPosts = processBlogBatch(data.batchInput);
      
      if (processedPosts.length === 0) {
        toast.error('No valid blog posts found. Please check the format and try again.');
        setIsProcessing(false);
        return;
      }
      
      // Show preview first
      setPreviewPosts(processedPosts);
      setShowPreview(true);
      setIsProcessing(false);
      
    } catch (error) {
      console.error('Error processing blog posts:', error);
      toast.error('Error processing blog posts. Please check your input format.');
      setIsProcessing(false);
    }
  };
  
  const handleConfirmPublish = async () => {
    try {
      setIsProcessing(true);
      
      // Save the posts
      await saveBlogPosts(previewPosts);
      
      toast.success(`Successfully published ${previewPosts.length} blog post${previewPosts.length !== 1 ? 's' : ''}!`);
      
      // Reset form and preview
      form.reset();
      setPreviewPosts([]);
      setShowPreview(false);
      
      // Navigate to blog page to see the published posts
      navigate('/blog');
      
    } catch (error) {
      console.error('Error saving blog posts:', error);
      toast.error('Error publishing blog posts. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleCancel = () => {
    setShowPreview(false);
    setPreviewPosts([]);
  };
  
  const loadExample = () => {
    form.setValue('batchInput', formatExample);
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      {!showPreview ? (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Add Multiple Blog Posts</CardTitle>
            <CardDescription>
              Enter multiple blog posts separated by "---". Each post should follow the format:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6 p-4 bg-muted rounded-md">
              <Paragraph className="font-mono text-xs md:text-sm">
                Title: Your Blog Title<br />
                Date: YYYY-MM-DD<br />
                Author: Author Name &#123;title: "Author Title", bio: "Author Bio"&#125;<br />
                Content:<br />
                Your Markdown content here...<br />
                ---
              </Paragraph>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="batchInput"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Blog Content</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          placeholder="Paste your blog content here..." 
                          className="min-h-[400px] font-mono text-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-between">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={loadExample}
                  >
                    Load Example
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : 'Preview Posts'}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Blog Posts Preview</CardTitle>
              <CardDescription>
                Review your {previewPosts.length} blog post{previewPosts.length !== 1 ? 's' : ''} before publishing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {previewPosts.map((post, index) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-48">
                        <img 
                          src={post.coverImage} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 md:w-2/3">
                        <Heading as="h3" size="xl">{post.title}</Heading>
                        <div className="flex items-center mt-2 mb-3">
                          <div className="bg-primary/10 text-primary text-xs rounded-full px-2 py-1 mr-2">
                            {post.category}
                          </div>
                          <div className="text-muted-foreground text-xs">
                            {new Date(post.publishedAt).toLocaleDateString()} • {post.readingTime} min read
                          </div>
                        </div>
                        <Paragraph muted className="line-clamp-2 mb-2">{post.excerpt}</Paragraph>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {post.tags?.map(tag => (
                            <span key={tag} className="bg-muted text-xs rounded-full px-2 py-1">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center mt-3">
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name} 
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          <div>
                            <div className="text-sm font-medium">{post.author.name}</div>
                            <div className="text-xs text-muted-foreground">{post.author.title}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handleCancel}
                disabled={isProcessing}
              >
                Back to Editor
              </Button>
              <Button 
                onClick={handleConfirmPublish}
                disabled={isProcessing}
              >
                {isProcessing ? 'Publishing...' : 'Publish All Posts'}
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default BlogBatchForm;
