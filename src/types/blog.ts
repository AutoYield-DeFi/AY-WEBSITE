
export interface Author {
  name: string;
  title: string;
  avatar: string;
  bio?: string;
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
}
