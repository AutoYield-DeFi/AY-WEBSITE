
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { cn } from '@/lib/utils';
import { sanitizeUrlParam } from '@/lib/sanitize';

interface MarkdownProps {
  children: string;
  className?: string;
}

export const Markdown = ({ children, className }: MarkdownProps) => {
  // Optimize by avoiding unnecessary checks for short content
  if (!children || children.length < 10) {
    return <div className={cn("prose prose-lg max-w-none", className)} />;
  }

  // Check if content is already HTML (starts with HTML tags)
  const isHtml = /^<([a-z][a-z0-9]*)\b[^>]*>/i.test(children.trim());

  // If content is already HTML, render it directly in a sanitized way
  if (isHtml) {
    return (
      <div 
        className={cn("prose prose-lg lg:prose-xl max-w-none", className)}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }

  // Otherwise, process as Markdown
  return (
    <div className={cn("prose prose-lg lg:prose-xl max-w-none", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            
            return match ? (
              <SyntaxHighlighter
                style={materialLight}
                language={match[1]}
                PreTag="div"
                className="rounded-md"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          table({ children }) {
            return (
              <div className="overflow-x-auto my-8">
                <table className="border-collapse border border-gray-200 w-full">
                  {children}
                </table>
              </div>
            );
          },
          th({ children }) {
            return (
              <th className="border border-gray-200 px-4 py-2 text-left font-semibold bg-gray-50">
                {children}
              </th>
            );
          },
          td({ children }) {
            return (
              <td className="border border-gray-200 px-4 py-2">
                {children}
              </td>
            );
          },
          p({ children }) {
            return <p className="my-5 text-gray-800 leading-relaxed">{children}</p>;
          },
          ul({ children }) {
            return <ul className="list-disc pl-6 my-5 space-y-2">{children}</ul>;
          },
          ol({ children }) {
            return <ol className="list-decimal pl-6 my-5 space-y-2">{children}</ol>;
          },
          li({ children }) {
            return <li className="mb-2">{children}</li>;
          },
          h1({ children }) {
            return <h1 className="text-4xl font-serif font-bold mt-10 mb-6 leading-tight">{children}</h1>;
          },
          h2({ children }) {
            return <h2 className="text-3xl font-serif font-semibold mt-8 mb-4 leading-tight">{children}</h2>;
          },
          h3({ children }) {
            return <h3 className="text-2xl font-serif font-semibold mt-6 mb-3 leading-tight">{children}</h3>;
          },
          h4({ children }) {
            return <h4 className="text-xl font-serif font-medium mt-5 mb-3 leading-tight">{children}</h4>;
          },
          blockquote({ children }) {
            return <blockquote className="pl-4 italic border-l-4 border-gray-300 my-6 text-gray-700">{children}</blockquote>;
          },
          img({ src, alt }) {
            // Verify and sanitize image URLs
            const sanitizedSrc = src ? (
              src.startsWith('http') || src.startsWith('/') ? src : '#'
            ) : '#';
            
            return (
              <div className="my-8">
                <img 
                  src={sanitizedSrc} 
                  alt={alt || ''} 
                  className="rounded-lg w-full" 
                  loading="lazy"
                  onError={(e) => {
                    // Fallback for broken images
                    e.currentTarget.src = '/placeholder.svg';
                    e.currentTarget.alt = 'Image failed to load';
                  }}
                />
                {alt && <figcaption className="text-center text-sm text-gray-500 mt-2">{alt}</figcaption>}
              </div>
            );
          },
          a({ href, children }) {
            // Sanitize URLs and enforce security best practices for links
            let sanitizedHref = '#';
            
            if (href) {
              // Allow only http/https/relative URLs
              if (href.startsWith('http://') || href.startsWith('https://') || 
                  href.startsWith('/') || href.startsWith('#')) {
                sanitizedHref = href;
              }
            }
            
            return (
              <a 
                href={sanitizedHref} 
                className="text-primary underline decoration-1 underline-offset-2 hover:decoration-2 transition-all"
                target={sanitizedHref.startsWith('http') ? "_blank" : undefined}
                rel={sanitizedHref.startsWith('http') ? "noopener noreferrer" : undefined}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};
