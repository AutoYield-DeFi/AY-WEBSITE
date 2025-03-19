
import React from 'react';
import { cn } from '@/lib/utils';
import { sanitizeHtml } from '@/lib/sanitize';

interface CodeBlockProps {
  code: string;
  className?: string;
  language?: string;
}

const CodeBlock = ({ code, className, language = 'bash' }: CodeBlockProps) => {
  // Sanitize the code to prevent XSS
  const sanitizedCode = sanitizeHtml(code);
  
  return (
    <div className={cn("bg-gray-900 text-gray-50 rounded-md overflow-hidden", className)}>
      <pre className="p-4 overflow-x-auto text-sm">
        <code>{sanitizedCode}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
