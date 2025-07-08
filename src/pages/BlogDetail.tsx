import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, Heart } from 'lucide-react';

// Mock blog data - In real app, this would come from your Laravel API
const blogContent = {
  "1": {
    title: "The Future of Online Education: Trends Shaping 2024",
    category: "Education Technology",
    publishDate: "2024-01-15",
    readTime: "5 min read",
    excerpt: "Exploring how AI, microlearning, and personalized pathways are revolutionizing how we learn online.",
    content: `
      <p>The landscape of online education is evolving at an unprecedented pace. As we navigate through 2024, several key trends are emerging that will fundamentally reshape how we approach learning and skill development.</p>
      
      <h2>Artificial Intelligence: The Great Personalizer</h2>
      <p>AI is no longer a futuristic concept in education—it's here, and it's transforming learning experiences. From adaptive learning paths that adjust to individual progress to AI tutors that provide 24/7 support, artificial intelligence is making education more personalized than ever before.</p>
      
      <p>At Just Academy, we've witnessed firsthand how AI-powered content recommendations can improve learning outcomes by up to 40%. The technology analyzes learning patterns, identifies knowledge gaps, and suggests targeted content to fill those gaps efficiently.</p>
      
      <h2>Microlearning: Small Bites, Big Impact</h2>
      <p>The attention economy has forever changed how we consume information. Microlearning—delivering content in small, focused chunks—has emerged as one of the most effective ways to facilitate knowledge retention and application.</p>
      
      <p>Research shows that microlearning can improve focus and retention rates by up to 80% compared to traditional long-form content. This approach aligns perfectly with modern learners' preferences and busy lifestyles.</p>
      
      <h2>Community-Driven Learning</h2>
      <p>Learning is inherently social, and successful online education platforms are recognizing this fundamental truth. The integration of community features, peer learning, and collaborative projects is creating more engaging and effective learning environments.</p>
      
      <p>The future of education isn't just about consuming content—it's about creating connections, sharing insights, and building together. This community-centric approach is what sets transformative educational experiences apart from mere information delivery.</p>
      
      <h2>Looking Ahead</h2>
      <p>As we continue to innovate in the education space, these trends will only accelerate. The organizations and educators who embrace these changes will be the ones shaping the future of human learning and development.</p>
      
      <p>The question isn't whether these trends will impact education—it's how quickly we can adapt and leverage them to create better learning outcomes for everyone.</p>
    `,
    tags: ["AI", "EdTech", "Future of Education", "Microlearning", "Community Learning"],
    image: "/api/placeholder/800/400"
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = id && Object.prototype.hasOwnProperty.call(blogContent, id) 
    ? blogContent[id as keyof typeof blogContent] 
    : undefined;

  if (!post) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button variant="outline">← Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.publishDate)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  By Roshan Chaturvedi
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="lg:w-2/3">
              {/* Featured Image */}
              <div className="h-64 md:h-96 bg-gradient-hero rounded-xl mb-8"></div>
              
              {/* Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-foreground prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="hover:bg-muted cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Share this article</h3>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                {/* Author Card */}
                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                        RC
                      </div>
                      <div>
                        <h3 className="font-semibold">Roshan Chaturvedi</h3>
                        <p className="text-sm text-muted-foreground">Founder, Just Academy</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Entrepreneur and educator passionate about transforming online learning. 
                      Building the future of education at Just Academy.
                    </p>
                    <Button size="sm" className="w-full">
                      Follow
                    </Button>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="w-5 h-5 text-red-500" />
                      <h3 className="font-semibold">Stay Updated</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest insights on entrepreneurship, education, and innovation delivered to your inbox.
                    </p>
                    <Button size="sm" className="w-full bg-gradient-secondary">
                      Subscribe
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;