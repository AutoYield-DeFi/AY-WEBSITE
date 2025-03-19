
import React from 'react';
import { Markdown } from '@/components/ui/markdown';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { sanitizeMarkdown } from '@/lib/sanitize';

interface BlogContentProps {
  content: string;
  tags?: string[];
}

const BlogContent = ({ content, tags }: BlogContentProps) => {
  const navigate = useNavigate();

  const handleTagClick = (tag: string) => {
    navigate(`/blog?tag=${tag}`);
  };

  // Process content to better handle tables if necessary
  const processedContent = content.includes('<table') ? content : content;
  
  // Sanitize the content to prevent XSS attacks
  const sanitizedContent = sanitizeMarkdown(processedContent);

  return (
    <div className="max-w-[700px] mx-auto">
      <div className="prose prose-lg lg:prose-xl mx-auto font-serif">
        <Markdown className="blog-content">{sanitizedContent}</Markdown>
      </div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-10 mb-10">
          {tags.map(tag => (
            <button 
              key={tag} 
              onClick={() => handleTagClick(tag)}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              #{tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(BlogContent);
