
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface BlogFeaturedPostProps {
  post: BlogPost;
}

const BlogFeaturedPost = ({ post }: BlogFeaturedPostProps) => {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-gray-50 p-6 rounded-xl">
      <div className="lg:col-span-3 flex flex-col justify-center space-y-6">
        <div>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Featured
          </span>
          <span className="ml-2 px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
        
        <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight leading-tight">
          <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h2>
        
        <p className="text-muted-foreground text-lg">{post.excerpt}</p>
        
        <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-4 gap-y-2">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</time>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
        
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{post.author.name}</div>
            <div className="text-sm text-muted-foreground">{post.author.title}</div>
          </div>
        </div>
        
        <div>
          <Button asChild>
            <Link to={`/blog/${post.slug}`}>Read Article</Link>
          </Button>
        </div>
      </div>
      
      <div className="lg:col-span-2 h-64 lg:h-auto">
        <Link to={`/blog/${post.slug}`} className="block h-full">
          <div className="h-full rounded-lg overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
              width={800}
              height={600}
            />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default BlogFeaturedPost;
