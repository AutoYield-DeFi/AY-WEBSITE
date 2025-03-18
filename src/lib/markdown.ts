
// Markdown formatting utilities
export const formatMarkdownFeatures = (content: string): string => {
  let formattedContent = content;
  
  // Format tables
  const tableRegex = /\|(.+)\|\n\|(-+\|)+\n((\|.+\|\n)+)/g;
  formattedContent = formattedContent.replace(tableRegex, (match) => {
    return `<div class="overflow-x-auto my-6"><table class="min-w-full divide-y divide-gray-200">
      ${match.split('\n').map((row, index) => {
        if (index === 1) return ''; // Skip the separator row
        const cells = row.split('|').filter(cell => cell.trim() !== '');
        const isHeader = index === 0;
        const cellTag = isHeader ? 'th' : 'td';
        const cellClasses = isHeader 
          ? 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' 
          : 'px-6 py-4 whitespace-nowrap text-sm text-gray-500';
        
        return `<tr>${cells.map(cell => 
          `<${cellTag} class="${cellClasses}">${cell.trim()}</${cellTag}>`
        ).join('')}</tr>`;
      }).join('')}
    </table></div>`;
  });
  
  // Format code blocks
  const codeBlockRegex = /```([a-z]*)\n([\s\S]*?)```/g;
  formattedContent = formattedContent.replace(codeBlockRegex, (match, language, code) => {
    return `<pre class="bg-gray-900 text-gray-100 rounded-md p-4 my-4 overflow-x-auto"><code class="language-${language || 'text'}">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`;
  });
  
  return formattedContent;
};

// Parse markdown to HTML with styling
export const parseMarkdown = (content: string): string => {
  let html = content;
  
  // Format headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mt-8 mb-4">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-10 mb-5">$1</h1>');
  
  // Format lists
  html = html.replace(/^\s*\n\* (.*)/gm, '<ul class="list-disc ml-5 my-4"><li>$1</li></ul>');
  html = html.replace(/^\s*\n- (.*)/gm, '<ul class="list-disc ml-5 my-4"><li>$1</li></ul>');
  html = html.replace(/^\s*\n\d\. (.*)/gm, '<ol class="list-decimal ml-5 my-4"><li>$1</li></ol>');
  
  // Remove list item duplicates
  html = html.replace(/<\/ul>\s*<ul class="list-disc ml-5 my-4">/g, '');
  html = html.replace(/<\/ol>\s*<ol class="list-decimal ml-5 my-4">/g, '');
  
  // Format inline styles
  html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
  html = html.replace(/\*(.*)\*/gim, '<em>$1</em>');
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 rounded px-1 py-0.5">$1</code>');
  
  // Format links and blockquotes
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-primary hover:underline">$1</a>');
  html = html.replace(/^\> (.*$)/gim, '<blockquote class="pl-4 italic border-l-4 border-gray-300 my-6">$1</blockquote>');
  
  // Format code blocks and tables
  html = formatMarkdownFeatures(html);
  
  // Format paragraphs
  html = html.replace(/^(?!<[a-z]|\s*$|\s*\n\*|\s*\n-|\s*\n\d\.)(.*)/gim, '<p class="my-4">$1</p>');
  
  // Clean up
  html = html.replace(/<p class="my-4"><\/p>/g, '');
  html = html.replace(/\n\s*\n/g, '\n');
  
  return html;
};
