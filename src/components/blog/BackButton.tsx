
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick: () => void;
  label?: string;
}

const BackButton = ({ onClick, label = "Back to all posts" }: BackButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
    >
      <ArrowLeft size={16} className="mr-2" />
      {label}
    </button>
  );
};

export default React.memo(BackButton);
