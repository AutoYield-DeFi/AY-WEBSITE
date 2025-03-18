
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Copy } from "lucide-react";
import { toast } from '@/hooks/use-toast';

interface BlogTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
  tokenData: {
    fullUrl: string;
    password: string;
    expiresAt: string;
  } | null;
}

export function BlogTokenModal({ isOpen, onClose, tokenData }: BlogTokenModalProps) {
  if (!tokenData) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${label} has been copied to your clipboard.`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Blog Admin Access</DialogTitle>
          <DialogDescription>
            Copy these credentials to access the blog admin area. This information will expire in 24 hours.
          </DialogDescription>
        </DialogHeader>
        
        <Alert variant="warning" className="mt-4 mb-2">
          <AlertDescription>
            Save this information now! It won't be retrievable after you close this window.
          </AlertDescription>
        </Alert>

        <div className="space-y-4 p-1 mt-2">
          <div className="space-y-2">
            <div className="text-sm font-semibold">Access URL</div>
            <div className="flex items-center gap-2 p-2 border rounded-md bg-muted/50">
              <div className="text-sm flex-1 truncate overflow-hidden">
                {tokenData.fullUrl}
              </div>
              <button 
                onClick={() => copyToClipboard(tokenData.fullUrl, "URL")}
                className="p-2 hover:bg-muted rounded-md"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-sm font-semibold">Password</div>
            <div className="flex items-center gap-2 p-2 border rounded-md bg-muted/50">
              <div className="text-sm font-mono flex-1">
                {tokenData.password}
              </div>
              <button 
                onClick={() => copyToClipboard(tokenData.password, "Password")}
                className="p-2 hover:bg-muted rounded-md"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-sm font-semibold">Expires</div>
            <div className="p-2 border rounded-md bg-muted/50">
              <div className="text-sm">
                {tokenData.expiresAt}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
