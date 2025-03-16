
import React from 'react';
import DocsSidebar from './DocsSidebar';
import { useLocation } from 'react-router-dom';
import { Separator } from '../ui/separator';

interface DocsLayoutProps {
  children: React.ReactNode;
}

const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <main className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <aside className="md:col-span-3 lg:col-span-3">
          <div className="sticky top-24">
            <DocsSidebar currentPath={currentPath} />
          </div>
        </aside>
        <div className="md:col-span-9 lg:col-span-9">
          <div className="prose prose-blue max-w-none">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DocsLayout;
