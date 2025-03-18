
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { addBlogPost } from '@/lib/blog';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Markdown } from '@/components/ui/markdown';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

const BlogPostForm = () => {
  const [content, setContent] = useState<string>(`Title: Your Blog Title
Date: ${new Date().toISOString().split('T')[0]}
Author: Author Name {title: "Author Title", bio: "Author Bio"}
Tags: solana, defi, liquidity, meteora
Category: Technology
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

---
`);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    setIsSubmitting(true);
    try {
      const newPost = addBlogPost(content);
      
      if (newPost) {
        toast({
          title: "Blog post published!",
          description: `Successfully published "${newPost.title}"`,
        });
        
        // Clear the cache and redirect to the new blog post
        setTimeout(() => {
          navigate(`/blog/${newPost.slug}`);
        }, 1500);
      } else {
        toast({
          title: "Error publishing post",
          description: "Please check your content format and try again",
          variant: "destructive"
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      toast({
        title: "Error publishing post",
        description: "An unexpected error occurred",
        variant: "destructive"
      });
      console.error(error);
      setIsSubmitting(false);
    }
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Publish New Blog Post</CardTitle>
        <CardDescription>
          Enter your blog post content using Markdown format with the required metadata header.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert className="mb-6 bg-blue-50 border-blue-200">
          <Info className="h-4 w-4 text-blue-500" />
          <AlertDescription className="text-blue-700">
            Format your post with a header section (Title, Date, Author, Tags, Category) followed by three dashes (---) and your Markdown content.
          </AlertDescription>
        </Alert>
        
        <Tabs defaultValue="edit" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          
          <TabsContent value="edit" className="space-y-4">
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[600px] font-mono text-sm"
              placeholder="Enter your blog post content here..."
            />
          </TabsContent>
          
          <TabsContent value="preview">
            <div className="border rounded-md p-6 h-[600px] overflow-y-auto bg-white">
              <h3 className="text-lg font-semibold mb-4 text-gray-500">Preview</h3>
              <Markdown>{content}</Markdown>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-sm text-muted-foreground">
          <h4 className="font-medium mb-2">Tips for creating a great blog post:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use headings (#, ##, ###) to organize your content.</li>
            <li>Include relevant images with descriptive alt text.</li>
            <li>Use code blocks for technical content with proper syntax highlighting.</li>
            <li>Add tables to organize comparative data.</li>
            <li>Include block quotes to highlight important information.</li>
            <li>Try to make your first paragraph engaging to hook readers.</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-sm text-muted-foreground">
          Once published, you can view your post on the blog page.
        </div>
        <Button 
          onClick={handleSubmit} 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Publishing..." : "Publish Blog Post"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogPostForm;
