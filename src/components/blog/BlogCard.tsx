import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Tag as TagIcon } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heading, Paragraph } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

interface BlogCardProps {
    post: BlogPost;
    className?: string;
    style?: React.CSSProperties;
}

const BlogCard = ({ post, className, style }: BlogCardProps) => {
    const navigate = useNavigate();

    // --- Data Mapping ---
    const title = post.title;
    const url = `/blog/${post.slug}`;
    const published = new Date(post.publishedAt);
    const tags = post.tags || [];
    const category = post.category;
    const image = post.coverImage;
    const description = post.excerpt;

    const hasCover = image !== undefined && image !== null && image !== '';

    // Format the date
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(published);

    const handleTagClick = (tag: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/blog?tag=${encodeURIComponent(tag)}`);
    };

    return (
        <Card
            className={cn(
                'group flex flex-col md:flex-row w-full overflow-hidden relative',
                'border border-gray-200/80 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out',
                'focus-within:ring-2 focus-within:ring-primary/50 focus-within:ring-offset-2',
                className
            )}
            style={style}
        >
            {/* --- Outer Link Wrapper --- */}
            <Link
                to={url}
                aria-label={`Read more about ${title}`}
                className="absolute inset-0 z-10"
            >
                <span className="sr-only">Read more about {title}</span>
            </Link>

            {/* --- Content Section (Left side on Desktop) --- */}
            <div className="flex flex-col p-5 md:p-6 flex-grow order-2 md:order-1 z-0">
                {/* Title with Blue Bar */}
                <div className="relative block mb-3 group/title">
                    <span className="absolute top-[4px] bottom-[4px] left-[-10px] w-[3px] bg-primary rounded-full transition-transform duration-300 group-hover:scale-y-110"></span>
                    <Heading
                        as="h3"
                        size="lg"
                        // serif prop removed again
                        className="text-gray-900 group-hover:text-primary transition-colors duration-200 line-clamp-3"
                    >
                        {title}
                    </Heading>
                </div>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-gray-600 mb-3">
                    {/* Category */}
                    {category && (
                        <div className="flex items-center">
                            {/* <TagIcon size={12} className="mr-1 text-gray-500" /> */}
                            <svg className="mr-1 text-gray-500"  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm0-2h12V4h-2v7l-2.5-1.5L11 11V4H6zm0 0V4zm5-9l2.5-1.5L16 11l-2.5-1.5z"/></svg>
                            <span className="font-medium">{category}</span>
                        </div>
                    )}

                    {/* Tags */}
                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                            {tags.slice(0, 3).map(tag => (
                                <span
                                    key={tag}
                                    // Added group-hover styles to make tags react to card hover
                                    className="relative z-20 inline-block px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-150 text-xs font-medium cursor-pointer"
                                    onClick={(e) => handleTagClick(tag, e)}
                                    role="link"
                                    tabIndex={0}
                                    onKeyDown={(e: React.KeyboardEvent<HTMLSpanElement>) => { 
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            navigate(`/blog?tag=${encodeURIComponent(tag)}`);
                                        }
                                    }}
                                    aria-label={`Filter by tag ${tag}`}
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Description */}
                <Paragraph
                    muted
                    size="sm"
                    className="mb-4 text-gray-700/90 line-clamp-3" // Removed flex-grow again
                >
                    {description || ''}
                </Paragraph>

                {/* Footer Metadata */}
                <div className="mt-auto pt-3 border-t border-gray-100/80">
                    <div className="flex items-center justify-between">
                        {/* Author */}
                        <div className="flex items-center">
                            <Avatar className="h-6 w-6 mr-2 border">
                                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium text-gray-800">{post.author.name}</span>
                        </div>

                        {/* Date */}
                        <div className="flex items-center gap-1 text-sm text-gray-600 font-medium">
                            <Calendar size={13} className="mr-0.5 text-gray-500" />
                            <time dateTime={post.publishedAt}>{formattedDate}</time>
                        </div>
                    </div>
                </div>
            </div> {/* End Content Section */}

            {/* Cover Image Section */}
            {hasCover && image && (
                <div className="relative md:w-[35%] lg:w-[40%] xl:w-[35%] flex-shrink-0 order-1 md:order-2 h-fit  max-h-[275px] z-0"> 
                    <img
                        src={image}
                        alt={`Relevant visual for: ${title}`}
                        className="w-full h-full object-cover md:rounded-r-lg group-hover:opacity-90 transition-opacity duration-300 border-l border-gray-100/80"
                        loading="lazy"
                        width={400}
                        height={300}
                        onError={(e) => console.error(`Image load error for ${post.slug}:`, (e.target as HTMLImageElement).src)}
                    />
                </div>
            )}
        </Card>
    );
};

export default BlogCard;
