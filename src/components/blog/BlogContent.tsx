
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { sanitizeUrlParam } from '@/lib/sanitize';

// Import PortableText renderer
import { PortableText } from '@portabletext/react';

interface BlogContentProps {
  content: any; // Portable Text array from Sanity
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
      <div className="prose prose-lg lg:prose-xl mx-auto font-serif">
        <PortableText value={content} />
      </div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-10 mb-10">
          {tags.map(tag => (
            <button 
              key={sanitizeUrlParam(tag)} 
              onClick={() => handleTagClick(tag)}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              #{sanitizeUrlParam(tag)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(BlogContent);
