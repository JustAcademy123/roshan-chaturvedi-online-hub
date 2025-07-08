import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

// Mock blog data - In real app, this would come from your Laravel API
const blogPosts = [
  {
    id: 1,
    title: "The Future of Online Education: Trends Shaping 2024",
    excerpt: "Exploring how AI, microlearning, and personalized pathways are revolutionizing how we learn online.",
    category: "Education Technology",
    readTime: "5 min read",
    publishDate: "2024-01-15",
    image: "/api/placeholder/400/250",
    featured: true
  },
  {
    id: 2,
    title: "Building a Startup in the EdTech Space: Lessons Learned",
    excerpt: "Key insights from founding Just Academy and navigating the challenges of the education technology market.",
    category: "Entrepreneurship",
    readTime: "7 min read",
    publishDate: "2024-01-10",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "The Psychology of Learning: Making Education Stick",
    excerpt: "Understanding cognitive science principles that make online learning more effective and engaging.",
    category: "Learning Science",
    readTime: "6 min read",
    publishDate: "2024-01-05",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Scaling Educational Content: From Idea to Impact",
    excerpt: "How to create educational content that reaches and transforms thousands of learners globally.",
    category: "Content Strategy",
    readTime: "8 min read",
    publishDate: "2023-12-28",
    image: "/api/placeholder/400/250"
  },
  {
    id: 5,
    title: "AI in Education: Promise, Peril, and Practical Applications",
    excerpt: "Examining the realistic applications of artificial intelligence in modern education systems.",
    category: "Artificial Intelligence",
    readTime: "10 min read",
    publishDate: "2023-12-20",
    image: "/api/placeholder/400/250"
  },
  {
    id: 6,
    title: "The Entrepreneur's Guide to Work-Life Integration",
    excerpt: "Strategies for maintaining personal well-being while building a mission-driven business.",
    category: "Leadership",
    readTime: "4 min read",
    publishDate: "2023-12-15",
    image: "/api/placeholder/400/250"
  }
];

const BlogPost = ({ post, featured = false }: { post: typeof blogPosts[0], featured?: boolean }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (featured) {
    return (
      <Card className="overflow-hidden hover-lift cursor-pointer group border-0 shadow-card">
        <Link to={`/blog/${post.id}`}>
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="h-64 md:h-full bg-gradient-subtle"></div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground border-secondary/20">
                  Featured
                </Badge>
                <Badge variant="outline">{post.category}</Badge>
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.publishDate)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover-lift cursor-pointer group border-0 shadow-card">
      <Link to={`/blog/${post.id}`}>
        <div className="h-48 bg-gradient-subtle"></div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="text-xs">{post.category}</Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h3 className="font-heading text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(post.publishDate)}
            </span>
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Insights & Ideas
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring the intersection of entrepreneurship, education technology, and innovation. 
              Join me on a journey through the evolving landscape of online learning and business strategy.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="font-heading text-2xl font-bold mb-8">Featured Article</h2>
            <BlogPost post={featuredPost} featured />
          </div>
        )}

        {/* All Posts */}
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-bold mb-8">Latest Posts</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;