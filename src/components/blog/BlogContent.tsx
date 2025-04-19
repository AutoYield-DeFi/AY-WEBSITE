
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { sanitizeUrlParam } from '@/lib/sanitize';
import { PortableTextBlock } from '@portabletext/types'; // Import the type

// Import PortableText renderer
import { PortableText } from '@portabletext/react';

interface BlogContentProps {
  content: PortableTextBlock[]; // Use the imported type
  tags?: string[];
}

const BlogContent = ({ content, tags }: BlogContentProps) => {
  const navigate = useNavigate();

  const handleTagClick = (tag: string) => {
    const sanitizedTag = sanitizeUrlParam(tag);
    navigate(`/blog?tag=${sanitizedTag}`);
  };

  return (
    <div className="max-w-[700px] mx-auto">
      <div className="prose prose-lg lg:prose-xl mx-auto font-sans">
        <PortableText value={content} />
      </div>      
    </div>
  );
};

export default React.memo(BlogContent);
