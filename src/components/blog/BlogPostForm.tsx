import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { addBlogPost, createOrUpdateBlogPost } from '@/lib/blog';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Markdown } from '@/components/ui/markdown';
import { useNavigate, useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, Upload, Download, Edit, Plus, Save } from 'lucide-react';
import { sanitizeMarkdown } from '@/lib/sanitize';
import { fetchBlogPostById } from '@/lib/blog';
import { serializeBlogToMarkdown } from '@/lib/blog/markdown-loader';
import { BlogPost } from '@/types/blog';

interface BlogPostFormProps {
  mode?: 'create' | 'edit';
  initialSlug?: string;
}

const BlogPostForm = ({ mode = 'create', initialSlug }: BlogPostFormProps) => {
  const [content, setContent] = useState<string>(`---
title: "Your Blog Title"
excerpt: "A short summary of your blog post that will appear in previews and cards"
publishedAt: "${new Date().toISOString()}"
category: "defi"
tags: ["solana", "defi", "liquidity", "meteora"]
coverImage: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop"
author:
  name: "Author Name"
  title: "Author Title"
  avatar: "/team/alex.jpg"
  bio: "Author bio and background"
---

# Introduction

Your introduction paragraph here. Provide a brief overview of what this blog post will cover.

## Why This Matters

Explain the importance of the topic and why readers should care about it.

![Descriptive image alt text](https://example.com/your-image.jpg)

## Main Points

### First Point

Expand on your first key point with supporting details.

> Important quote or callout that deserves emphasis.

### Second Point

Details about your second key point, including any code examples if relevant:

\`\`\`javascript
// Example code block
const example = "Hello World";
console.log(example);
\`\`\`

## Data and Comparisons

| Feature | Option A | Option B |
|---------|----------|----------|
| Speed   | Fast     | Slow     |
| Cost    | High     | Low      |
| Quality | High     | Medium   |

## Conclusion

Summarize the key takeaways from your post and potentially suggest next steps or further reading.
`);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  
  // Load existing post if in edit mode or if slug is provided
  useEffect(() => {
    const postSlug = initialSlug || slug;
    if ((mode === 'edit' || postSlug) && postSlug) {
      setIsLoading(true);
      fetchBlogPostById(postSlug)
        .then(post => {
          if (post) {
            setCurrentPost(post);
            // Convert the post back to markdown format
            const markdown = serializeBlogToMarkdown(post);
            setContent(markdown);
          } else {
            toast({
              title: "Post not found",
              description: `Could not find a blog post with slug: ${postSlug}`,
              variant: "destructive"
            });
          }
        })
        .catch(error => {
          console.error('Error fetching post:', error);
          toast({
            title: "Error loading post",
            description: "Failed to load the blog post for editing",
            variant: "destructive"
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [mode, initialSlug, slug, toast]);
  
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Limit input length to prevent DoS attacks
    if (e.target.value.length <= 100000) {
      setContent(e.target.value);
    }
  };
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Validate content has required fields
      if (!content.includes('title:') || !content.includes('---')) {
        toast({
          title: "Invalid blog format",
          description: "Blog post must include title and frontmatter separators (---)",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }
      
      // Sanitize content before saving
      const sanitizedContent = sanitizeMarkdown(content);
      
      let slug = currentPost?.slug;
      let newPost: BlogPost | null;
      
      if (mode === 'edit' && slug) {
        // Update existing post
        newPost = await createOrUpdateBlogPost(sanitizedContent, slug);
      } else {
        // Create new post
        newPost = await createOrUpdateBlogPost(sanitizedContent);
      }
      
      if (newPost) {
        toast({
          title: mode === 'edit' ? "Blog post updated!" : "Blog post published!",
          description: `Successfully ${mode === 'edit' ? 'updated' : 'published'} "${newPost.title}"`,
        });
        
        // Clear the cache and redirect to the new blog post
        setTimeout(() => {
          navigate(`/blog/${newPost.slug}`);
        }, 1500);
      } else {
        toast({
          title: `Error ${mode === 'edit' ? 'updating' : 'publishing'} post`,
          description: "Please check your content format and try again",
          variant: "destructive"
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      toast({
        title: `Error ${mode === 'edit' ? 'updating' : 'publishing'} post`,
        description: "An unexpected error occurred",
        variant: "destructive"
      });
      console.error(error);
      setIsSubmitting(false);
    }
  };
  
  const handleExportMarkdown = () => {
    try {
      // Create and download a markdown file
      const blob = new Blob([content], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      
      // Use current post title or a default name
      let filename = 'blog-post.md';
      const titleMatch = content.match(/title:\s*["'](.+?)["']/);
      if (titleMatch && titleMatch[1]) {
        filename = titleMatch[1].toLowerCase().replace(/[^\w]/g, '-') + '.md';
      }
      
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Export successful",
        description: `Exported as ${filename}`,
      });
    } catch (error) {
      console.error('Error exporting markdown:', error);
      toast({
        title: "Export failed",
        description: "Could not export the markdown file",
        variant: "destructive"
      });
    }
  };
  
  const handleImportMarkdown = () => {
    // Create a hidden file input element
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.md,.markdown,text/markdown';
    
    input.onchange = e => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = event => {
        const content = event.target?.result as string;
        if (content) {
          setContent(content);
          toast({
            title: "Import successful",
            description: `Imported ${file.name}`,
          });
        }
      };
      reader.readAsText(file);
    };
    
    // Trigger the file input click
    input.click();
  };
  
  if (isLoading) {
    return (
      <Card className="w-full">
        <CardContent className="py-10">
          <div className="flex justify-center items-center h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{mode === 'edit' ? 'Edit Blog Post' : 'Create New Blog Post'}</CardTitle>
        <CardDescription>
          {mode === 'edit' 
            ? 'Edit your blog post using Markdown format with frontmatter metadata.'
            : 'Create a new blog post using Markdown format with frontmatter metadata.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert className="mb-6 bg-blue-50 border-blue-200">
          <Info className="h-4 w-4 text-blue-500" />
          <AlertDescription className="text-blue-700">
            Format your post with a YAML frontmatter section between triple-dashes (---) followed by your Markdown content.
          </AlertDescription>
        </Alert>
        
        <div className="flex justify-end space-x-2 mb-4">
          <Button variant="outline" size="sm" onClick={handleImportMarkdown}>
            <Upload className="h-4 w-4 mr-2" />
            Import Markdown
          </Button>
          <Button variant="outline" size="sm" onClick={handleExportMarkdown}>
            <Download className="h-4 w-4 mr-2" />
            Export Markdown
          </Button>
        </div>
        
        <Tabs defaultValue="edit" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          
          <TabsContent value="edit" className="space-y-4">
            <Textarea
              value={content}
              onChange={handleContentChange}
              className="min-h-[600px] font-mono text-sm"
              placeholder="Enter your blog post content here..."
              maxLength={100000} // Prevent excessive input
            />
          </TabsContent>
          
          <TabsContent value="preview">
            <div className="border rounded-md p-6 h-[600px] overflow-y-auto bg-white">
              <h3 className="text-lg font-semibold mb-4 text-gray-500">Preview</h3>
              <Markdown>{sanitizeMarkdown(content)}</Markdown>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-sm text-muted-foreground">
          <h4 className="font-medium mb-2">Markdown Tips:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use headings (#, ##, ###) to organize your content.</li>
            <li>Include images with ![alt text](image-url) syntax.</li>
            <li>Format code blocks with triple backticks and language name (```javascript).</li>
            <li>Create tables using pipe syntax (| Header | Header |).</li>
            <li>Use `{'>'}` for blockquotes and * or - for bullet lists.</li>
            <li>Add links with [link text](url) syntax.</li>
            <li>Use `{'*'}` for bullet lists and `{'-'}` for alternative bullet points.</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-sm text-muted-foreground">
          {mode === 'edit' 
            ? 'Your changes will be published immediately after saving.'
            : 'Once published, you can view your post on the blog page.'}
        </div>
        <Button 
          onClick={handleSubmit} 
          disabled={isSubmitting}
        >
          {isSubmitting 
            ? (mode === 'edit' ? "Saving..." : "Publishing...") 
            : (mode === 'edit' ? "Save Changes" : "Publish Blog Post")}
          {mode === 'edit' ? <Save className="ml-2 h-4 w-4" /> : <Plus className="ml-2 h-4 w-4" />}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogPostForm;
