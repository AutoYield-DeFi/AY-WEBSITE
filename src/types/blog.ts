import { PortableTextBlock } from '@portabletext/types'; // Import the type

export interface Author {
  name: string;
  title: string;
  avatar: string;
  bio?: string;
  twitter?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: PortableTextBlock[]; // Update the type here
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags?: string[];
  readingTime: number;
  coverImage: string;
  author: Author;
  seoDescription?: string;
  canonical?: string;
  relatedPosts?: BlogPost[];
}
