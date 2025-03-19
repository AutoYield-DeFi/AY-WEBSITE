
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { BlogPost } from '@/types/blog';

interface BlogHeaderProps {
  post: BlogPost;
  formattedDate: string;
}

const BlogHeader = ({ post, formattedDate }: BlogHeaderProps) => {
  const navigate = useNavigate();

  const handleAuthorClick = () => {
    if (post?.author?.name) {
      navigate(`/blog?author=${encodeURIComponent(post.author.name)}`);
    }
  };

  return (
    <header className="container mx-auto px-4 mb-10">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight mb-6">
          {post.title}
        </h1>
        <h2 className="text-xl text-muted-foreground font-serif mb-8">
          {post.excerpt}
        </h2>
      
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-4 border">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <button 
              onClick={handleAuthorClick}
              className="font-medium hover:text-primary transition-colors"
            >
              {post.author.name}
            </button>
            <div className="text-sm text-muted-foreground flex items-center gap-4">
              <span>{post.author.title}</span>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="inline-flex items-center">
                  <Calendar size={14} className="mr-1 inline-block" />
                  <time dateTime={post.publishedAt}>{formattedDate}</time>
                </span>
                <span className="inline-flex items-center">
                  <Clock size={14} className="mr-1 inline-block" />
                  {post.readingTime} min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(BlogHeader);
