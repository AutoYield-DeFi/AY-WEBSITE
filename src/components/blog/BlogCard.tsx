
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="group flex flex-col h-full rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
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
          <h3 className="font-serif text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
        </Link>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{post.author.name}</span>
            </div>
            
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock size={12} className="mr-1" />
              <span>{post.readingTime} min</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
