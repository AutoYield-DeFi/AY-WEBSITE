
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { addBlogPost } from '@/lib/blog';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const BlogPostForm = () => {
  const [content, setContent] = useState<string>(`Title: Your Blog Title
Date: ${new Date().toISOString().split('T')[0]}
Author: Author Name {title: "Author Title", bio: "Author Bio"}
---
Your content here in markdown format.

You can use **bold** and *italic* text.

## Headers

### Subheaders

- Bullet points
- Another point

1. Numbered list
2. Second item

[Links](https://autoyield.io)

> Blockquotes for important notes

\`\`\`javascript
// Code blocks
const example = "Hello World";
console.log(example);
\`\`\`

| Table | Header |
|-------|--------|
| Cell  | Cell   |

---
`);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = () => {
    setIsSubmitting(true);
    try {
      const newPost = addBlogPost(content);
      
      if (newPost) {
        toast({
          title: "Blog post published!",
          description: `Successfully published "${newPost.title}"`,
        });
        setContent('');
      } else {
        toast({
          title: "Error publishing post",
          description: "Please check your content format and try again",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error publishing post",
        description: "An unexpected error occurred",
        variant: "destructive"
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Publish New Blog Post</CardTitle>
        <CardDescription>
          Enter your blog post content in the specified format below. 
          The system will automatically generate appropriate tags, cover images, and SEO elements.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Button 
            onClick={() => setPreviewMode(false)} 
            variant={previewMode ? "outline" : "default"}
          >
            Edit
          </Button>
          <Button 
            onClick={() => setPreviewMode(true)} 
            variant={previewMode ? "default" : "outline"}
          >
            Preview
          </Button>
        </div>
        
        {previewMode ? (
          <div className="border rounded-md p-4 h-[500px] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-2">Preview</h3>
            <div className="prose max-w-none">
              {content.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        ) : (
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[500px] font-mono"
            placeholder="Enter your blog post content here..."
          />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-sm text-muted-foreground">
          Format: Title, Date, Author info, and content between --- markers
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
