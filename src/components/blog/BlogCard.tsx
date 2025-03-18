
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Heading, Paragraph } from '@/components/ui/typography';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

const BlogCard = ({ post, className }: BlogCardProps) => {
  const navigate = useNavigate();
  
  // Format the date using Intl API for better localization
  const publishDate = new Date(post.publishedAt);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(publishDate);

  const handleTagClick = (tag: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to the blog post
    e.stopPropagation(); // Stop event bubbling
    navigate(`/blog?tag=${tag}`);
  };

  return (
    <article className={cn(
      "group flex flex-col h-full rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100", 
      className
    )}>
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
        <div className="relative overflow-hidden h-48">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            width={600}
            height={400}
          />
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
              {post.category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="flex flex-col flex-grow p-5">
        <Link to={`/blog/${post.slug}`} className="block group-hover:text-primary transition-colors">
          <Heading 
            as="h3"
            size="xl"
            serif 
            className="mb-2 line-clamp-2"
          >
            {post.title}
          </Heading>
        </Link>
        
        <Paragraph muted size="sm" className="mb-4 line-clamp-2">
          {post.excerpt}
        </Paragraph>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {post.tags.slice(0, 3).map(tag => (
              <button
                key={tag}
                onClick={(e) => handleTagClick(tag, e)}
                className="text-xs text-primary hover:bg-primary/10 px-2 py-0.5 rounded-full transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        )}
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2 border border-white">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{post.author.name}</span>
            </div>
            
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center">
                <Calendar size={12} className="mr-1" />
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </span>
              <span className="inline-flex items-center">
                <Clock size={12} className="mr-1" />
                {post.readingTime} min
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
