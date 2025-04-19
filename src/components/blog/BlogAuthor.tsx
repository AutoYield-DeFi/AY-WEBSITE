import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Author } from '@/types/blog';

interface BlogAuthorProps {
  author: Author;
}

const BlogAuthor = ({ author }: BlogAuthorProps) => {
  return (
    <div className="py-6">
      <div className="flex items-center gap-5">
        <Avatar className="h-14 w-14 border border-gray-200">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback className="bg-gray-100 text-gray-800 font-medium">{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="text-lg font-medium">{author.name}</div>
          {author.title && <div className="text-sm text-gray-500 mb-1">{author.title}</div>}
          {author.bio && <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{author.bio}</p>}
          {author.twitter && (
            <a 
              href={`https://twitter.com/${author.twitter}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 text-sm text-primary hover:underline inline-flex items-center"
            >
              @{author.twitter}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(BlogAuthor);
