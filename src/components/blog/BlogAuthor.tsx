
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Author } from '@/types/blog';

interface BlogAuthorProps {
  author: Author;
}

const BlogAuthor = ({ author }: BlogAuthorProps) => {
  const navigate = useNavigate();

  const handleAuthorClick = () => {
    navigate(`/blog?author=${encodeURIComponent(author.name)}`);
  };

  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <div className="flex items-start md:items-center flex-col md:flex-row gap-6">
        <Avatar className="h-16 w-16 border-2 border-white">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="text-xl font-medium mb-2">
            Written by{' '}
            <button 
              onClick={handleAuthorClick}
              className="font-medium hover:text-primary transition-colors"
            >
              {author.name}
            </button>
          </h3>
          <p className="text-muted-foreground mb-4">{author.bio}</p>
          {author.twitter && (
            <a 
              href={`https://twitter.com/${author.twitter}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline inline-flex items-center"
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
