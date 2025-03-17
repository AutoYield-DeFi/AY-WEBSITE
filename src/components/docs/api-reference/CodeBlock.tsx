
import React from 'react';

interface CodeBlockProps {
  code: string;
}

const CodeBlock = ({ code }: CodeBlockProps) => {
  return (
    <div className="bg-muted p-4 rounded-md overflow-x-auto">
      <pre className="text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
