
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const BlogSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border rounded-lg p-4 h-[400px]">
          <Skeleton className="h-48 w-full mb-4 rounded-lg" />
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-full mb-4" />
          <Skeleton className="h-4 w-5/6 mb-2" />
          <Skeleton className="h-10 w-full mt-auto" />
        </div>
      ))}
    </div>
  );
};

export default BlogSkeleton;
