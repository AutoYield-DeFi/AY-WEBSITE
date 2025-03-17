
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heading, Paragraph, Label } from '@/components/ui/typography';

interface BlogFeaturedPostProps {
  post: BlogPost;
}

const BlogFeaturedPost = ({ post }: BlogFeaturedPostProps) => {
  // Format the date using Intl API for better localization
  const publishDate = new Date(post.publishedAt);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(publishDate);

  return (
    <article className="rounded-xl overflow-hidden bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        <div className="lg:col-span-3 flex flex-col justify-center p-6 lg:p-10 order-2 lg:order-1">
          <div className="mb-4">
            <Label className="bg-primary/10 text-primary mr-2">Featured</Label>
            <Label className="bg-gray-100 text-gray-800">{post.category}</Label>
          </div>
          
          <Heading 
            as="h2"
            size="4xl"
            serif
            className="tracking-tight leading-tight mb-4"
          >
            <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
          </Heading>
          
          <Paragraph size="lg" muted className="mb-6">
            {post.excerpt}
          </Paragraph>
          
          <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-4 gap-y-2 mb-6">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <time dateTime={post.publishedAt}>{formattedDate}</time>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
          
          <div className="flex items-center mb-6">
            <Avatar className="h-10 w-10 mr-3 border border-white">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-sm text-muted-foreground">{post.author.title}</div>
            </div>
          </div>
          
          <div>
            <Button asChild className="group">
              <Link to={`/blog/${post.slug}`} className="inline-flex items-center">
                Read Article
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="lg:col-span-2 order-1 lg:order-2">
          <Link to={`/blog/${post.slug}`} className="block h-full">
            <div className="h-64 lg:h-full">
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
      </div>
    </article>
  );
};

export default BlogFeaturedPost;
