import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import BlogPostForm from '@/components/blog/BlogPostForm';
import { Heading, Paragraph } from '@/components/ui/typography';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { Edit, Trash2, PlusCircle, FileText, RefreshCw } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  fetchBlogPosts, 
  clearBlogCaches,
  deleteBlogPostFile 
} from '@/lib/blog';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/types/blog';

const BlogAdmin = () => {
  const [activeTab, setActiveTab] = useState('all-posts');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const loadPosts = async () => {
    setIsLoading(true);
    try {
      const blogPosts = await fetchBlogPosts();
      setPosts(blogPosts);
    } catch (error) {
      console.error('Error loading blog posts:', error);
      toast({
        title: 'Error loading posts',
        description: 'Failed to load blog posts. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleRefresh = () => {
    clearBlogCaches();
    loadPosts();
    toast({
      title: 'Refreshed blog posts',
      description: 'Blog cache cleared and posts reloaded.',
    });
  };

  const handleEdit = (post: BlogPost) => {
    setSelectedPost(post);
    setActiveTab('edit-post');
  };

  const handleDelete = (post: BlogPost) => {
    setSelectedPost(post);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedPost) return;
    
    try {
      const deleted = await deleteBlogPostFile(selectedPost.slug);
      
      if (deleted) {
        toast({
          title: 'Post deleted',
          description: `Successfully deleted "${selectedPost.title}"`,
        });
        
        // Refresh the post list
        clearBlogCaches();
        loadPosts();
      } else {
        toast({
          title: 'Error deleting post',
          description: 'Failed to delete the blog post. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({
        title: 'Error deleting post',
        description: 'An unexpected error occurred',
        variant: 'destructive',
      });
    } finally {
      setDeleteDialogOpen(false);
      setSelectedPost(null);
    }
  };

  const handleViewPost = (post: BlogPost) => {
    navigate(`/blog/${post.slug}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Blog Admin - AutoYield"
        description="Admin interface for managing AutoYield blog content"
        noindex={true}
      />
      <Navbar />

      <div className="container mx-auto px-4 py-10 mt-16">
        <header className="mb-8 max-w-5xl mx-auto">
          <Heading as="h1" size="3xl" serif className="mb-4">
            Blog Administration
          </Heading>
          <Paragraph muted className="text-lg">
            Manage your blog posts with our Markdown-based content management system.
          </Paragraph>
        </header>

        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="all-posts">All Posts</TabsTrigger>
                <TabsTrigger value="new-post">New Post</TabsTrigger>
                {activeTab === 'edit-post' && (
                  <TabsTrigger value="edit-post">Edit Post</TabsTrigger>
                )}
              </TabsList>
              
              <div className="flex gap-2">
                {activeTab === 'all-posts' && (
                  <>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleRefresh}
                      disabled={isLoading}
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh
                    </Button>
                    <Button 
                      onClick={() => setActiveTab('new-post')}
                    >
                      <PlusCircle className="h-4 w-4 mr-2" />
                      New Post
                    </Button>
                  </>
                )}
              </div>
            </div>
            
            <TabsContent value="all-posts">
              <Card>
                <CardHeader>
                  <CardTitle>All Blog Posts</CardTitle>
                  <CardDescription>
                    Manage your existing blog posts. You can edit, view or delete posts from this interface.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="flex justify-center py-20">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    </div>
                  ) : posts.length === 0 ? (
                    <div className="text-center py-20">
                      <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <h3 className="text-lg font-medium mb-2">No blog posts found</h3>
                      <p className="text-muted-foreground mb-6">
                        You haven't created any blog posts yet.
                      </p>
                      <Button onClick={() => setActiveTab('new-post')}>
                        Create your first post
                      </Button>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {posts.map((post) => (
                            <TableRow key={post.id}>
                              <TableCell className="font-medium max-w-xs truncate">
                                {post.title}
                              </TableCell>
                              <TableCell>{formatDate(post.publishedAt)}</TableCell>
                              <TableCell>
                                <Badge variant="outline">
                                  {post.category}
                                </Badge>
                              </TableCell>
                              <TableCell>{post.author.name}</TableCell>
                              <TableCell className="text-right space-x-2 whitespace-nowrap">
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => handleViewPost(post)}
                                >
                                  View
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => handleEdit(post)}
                                >
                                  <Edit className="h-4 w-4 mr-1" />
                                  Edit
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleDelete(post)}
                                >
                                  <Trash2 className="h-4 w-4 mr-1" />
                                  Delete
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="new-post">
              <BlogPostForm mode="create" />
            </TabsContent>
            
            <TabsContent value="edit-post">
              {selectedPost && (
                <BlogPostForm 
                  mode="edit" 
                  initialSlug={selectedPost.slug} 
                />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the blog post "{selectedPost?.title}".
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </div>
  );
};

export default BlogAdmin;
