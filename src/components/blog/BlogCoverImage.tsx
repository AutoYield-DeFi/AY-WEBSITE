
import React from 'react';

interface BlogCoverImageProps {
  src: string;
  alt: string;
}

const BlogCoverImage = ({ src, alt }: BlogCoverImageProps) => {
  if (!src) return null;
  
  return (
    <div className="relative w-full mb-12 max-h-[600px] overflow-hidden">
      <img 
        src={src} 
        alt={alt} 
        className="w-full object-cover" 
        style={{ maxHeight: "600px", objectPosition: "center" }}
        loading="eager"  
        width={1600}
        height={800}
      />
    </div>
  );
};

export default React.memo(BlogCoverImage);
