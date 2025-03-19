
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ScrollArea } from '../ui/scroll-area';

interface DocsSidebarProps {
  currentPath: string;
}

const DocsSidebar: React.FC<DocsSidebarProps> = ({ currentPath }) => {
  const navGroups = [
    {
      title: 'Introduction',
      items: [
        { title: 'Welcome', href: '/docs/welcome' },
        { title: 'Getting Started', href: '/docs/getting-started' },
      ]
    },
    {
      title: 'Platform',
      items: [
        { title: 'Core Features', href: '/docs/core-features' },
        { title: 'AI Strategies', href: '/docs/ai-strategies' },
        { title: 'Security Model', href: '/docs/security-model' },
        { title: 'Fee Structure', href: '/docs/fee-structure' },
      ]
    },
    {
      title: 'Resources',
      items: [
        { title: 'User Guides', href: '/docs/guides' },
        { title: 'Advanced Settings', href: '/docs/advanced-settings' },
        { title: 'FAQ', href: '/docs/faq' },
        { title: 'API Reference', href: '/docs/api-reference' },
      ]
    },
  ];

  return (
    <ScrollArea className="h-[calc(100vh-10rem)]">
      <div className="pr-6">
        <h3 className="font-semibold text-lg mb-4">Documentation</h3>
        <div className="space-y-6">
          {navGroups.map((group, i) => (
            <div key={i} className="space-y-2">
              <h4 className="font-medium text-sm text-muted-foreground mb-1">{group.title}</h4>
              <ul className="space-y-1">
                {group.items.map((item, j) => (
                  <li key={j}>
                    <Link
                      to={item.href}
                      className={cn(
                        "block text-sm py-1.5 px-3 rounded-md hover:bg-muted/50 transition-colors",
                        currentPath === item.href && "bg-primary-muted/50 text-primary font-medium"
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default DocsSidebar;
