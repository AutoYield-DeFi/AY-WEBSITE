
import React from 'react';
import { Share2, Twitter, Facebook, Linkedin, Mail, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface BlogSocialShareProps {
  title: string;
  url: string;
}

const BlogSocialShare = ({ title, url }: BlogSocialShareProps) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
  };
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      toast({
        title: "Link copied",
        description: "Article link has been copied to clipboard"
      });
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="py-6">
      <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center">
        <Share2 size={16} className="mr-2" /> Share this article
      </h4>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full"
          onClick={() => window.open(shareUrls.twitter, '_blank')}
        >
          <Twitter size={16} className="mr-1" />
          Twitter
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full"
          onClick={() => window.open(shareUrls.facebook, '_blank')}
        >
          <Facebook size={16} className="mr-1" />
          Facebook
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full"
          onClick={() => window.open(shareUrls.linkedin, '_blank')}
        >
          <Linkedin size={16} className="mr-1" />
          LinkedIn
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full"
          onClick={() => window.open(shareUrls.email, '_blank')}
        >
          <Mail size={16} className="mr-1" />
          Email
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full"
          onClick={handleCopyLink}
        >
          <LinkIcon size={16} className="mr-1" />
          Copy Link
        </Button>
      </div>
    </div>
  );
};

export default React.memo(BlogSocialShare);
