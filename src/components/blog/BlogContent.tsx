
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

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-10 mb-10"> {/* Adjusted margins slightly */}
          {tags.map(tag => {
            const sanitizedTag = sanitizeUrlParam(tag);
            return (
              <span 
                key={sanitizedTag} 
                onClick={() => handleTagClick(tag)}
                // Applying styles consistent with BlogCard
                className="relative inline-block px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors duration-150 text-xs font-medium cursor-pointer"
                role="link"
                tabIndex={0}
                onKeyDown={(e: React.KeyboardEvent<HTMLSpanElement>) => { 
                  if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleTagClick(tag);
                  }
                }}
                aria-label={`Filter by tag ${sanitizedTag}`}
              >
                #{sanitizedTag}
              </span>
            );
          })} {/* Added missing closing brace */}
        </div>
      )}
    </div>
  );
};

export default React.memo(BlogContent);
