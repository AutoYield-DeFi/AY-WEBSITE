
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
  content: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags?: string[];
  readingTime: number;
  coverImage: string;
  author: Author;
  seoDescription?: string;
  canonical?: string;
}

export interface SimplifiedBlogInput {
  title: string;
  date: string;
  author: string;
  authorMeta?: {
    title?: string;
    bio?: string;
  };
  content: string;
}
