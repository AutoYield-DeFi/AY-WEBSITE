import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { cn } from '@/lib/utils';

interface MarkdownProps {
  children: string;
  className?: string;
}

export const Markdown = ({ children, className }: MarkdownProps) => {
  // Check if content is already HTML (starts with HTML tags)
  const isHtml = /^<([a-z][a-z0-9]*)\b[^>]*>/i.test(children.trim());

  // If content is already HTML, render it directly
  if (isHtml) {
    return (
      <div 
        className={cn("prose prose-gray max-w-none", className)}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }

  // Otherwise, process as Markdown
  return (
    <div className={cn("prose prose-gray max-w-none", className)}>
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
              <div className="overflow-x-auto">
                <table className="border-collapse border border-gray-200">
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
            return <p className="my-4">{children}</p>;
          },
          ul({ children }) {
            return <ul className="list-disc pl-5 my-4">{children}</ul>;
          },
          ol({ children }) {
            return <ol className="list-decimal pl-5 my-4">{children}</ol>;
          },
          li({ children }) {
            return <li className="mb-1">{children}</li>;
          },
          h1({ children }) {
            return <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>;
          },
          h2({ children }) {
            return <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>;
          },
          h3({ children }) {
            return <h3 className="text-xl font-semibold mt-5 mb-2">{children}</h3>;
          },
          h4({ children }) {
            return <h4 className="text-lg font-medium mt-4 mb-2">{children}</h4>;
          },
          blockquote({ children }) {
            return <blockquote className="pl-4 border-l-4 border-gray-200 italic my-4">{children}</blockquote>;
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};
