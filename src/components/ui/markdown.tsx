
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
  return (
    <div className={cn("prose prose-gray max-w-none", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            
            return !inline && match ? (
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
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};
