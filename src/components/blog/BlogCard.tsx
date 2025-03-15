
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'compact';
  className?: string;
}

const BlogCard = ({ post, variant = 'default', className }: BlogCardProps) => {
  // Format the date using Intl API for better localization
  const publishDate = new Date(post.publishedAt);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(publishDate);

  return (
    <article className={cn(
      "group flex flex-col h-full rounded-lg overflow-hidden hover:shadow-md transition-all duration-300",
      variant === 'compact' ? "border-0" : "border border-gray-100", 
      className
    )}>
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
        <div className={cn(
          "relative overflow-hidden",
          variant === 'compact' ? "h-40" : "h-48"
        )}>
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
      
      <div className={cn(
        "flex flex-col flex-grow",
        variant === 'compact' ? "p-4" : "p-5"
      )}>
        <Link to={`/blog/${post.slug}`} className="block group-hover:text-primary transition-colors">
          <h3 className={cn(
            "font-serif font-bold mb-2 line-clamp-2",
            variant === 'compact' ? "text-lg" : "text-xl"
          )}>
            {post.title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
        
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
