import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  BookOpen, 
  TrendingUp, 
  Eye,
  ThumbsUp,
  MessageCircle
} from 'lucide-react';

// Mock article data - In real app, this would come from your Laravel API
const articleContent = {
  "1": {
    title: "The EdTech Revolution: How Technology is Democratizing Education",
    category: "Industry Analysis",
    publishDate: "2024-01-20",
    readTime: "12 min read",
    difficulty: "Advanced",
    views: "2.5k",
    likes: 127,
    comments: 23,
    excerpt: "An in-depth analysis of how educational technology is breaking down barriers and making quality education accessible to millions worldwide.",
    content: `
      <h2>Executive Summary</h2>
      <p>The educational technology sector has experienced unprecedented growth over the past decade, fundamentally altering how knowledge is created, distributed, and consumed. This comprehensive analysis examines the key drivers behind this transformation and its implications for the future of education.</p>
      
      <h2>The Historical Context</h2>
      <p>Education has always been a privilege of the few. For centuries, access to quality education was limited by geographic, economic, and social barriers. The advent of the internet began to change this paradigm, but it wasn't until the emergence of sophisticated educational technologies that we began to see true democratization.</p>
      
      <blockquote>
        "The best minds of my generation are thinking about how to make people click ads. That is a tragedy." - Jeff Hammerbacher
      </blockquote>
      
      <p>Today, we're witnessing a fundamental shift where some of the brightest minds are focused on solving education's most pressing challenges through technology.</p>
      
      <h2>Key Technological Enablers</h2>
      
      <h3>1. Artificial Intelligence and Machine Learning</h3>
      <p>AI has become the great personalizer in education. Advanced algorithms can now:</p>
      <ul>
        <li>Adapt content difficulty in real-time based on learner performance</li>
        <li>Identify learning gaps before they become problematic</li>
        <li>Provide personalized study plans and recommendations</li>
        <li>Automate administrative tasks, freeing educators to focus on teaching</li>
      </ul>
      
      <h3>2. Mobile-First Learning Platforms</h3>
      <p>With over 6.8 billion smartphone users globally, mobile learning has become the primary way many people access education. This shift has enabled:</p>
      <ul>
        <li>Learning on-the-go, fitting education into busy schedules</li>
        <li>Access in remote areas with limited infrastructure</li>
        <li>Lower barriers to entry with affordable devices</li>
        <li>Micro-learning experiences that fit modern attention spans</li>
      </ul>
      
      <h3>3. Virtual and Augmented Reality</h3>
      <p>Immersive technologies are transforming abstract concepts into tangible experiences. Medical students can perform virtual surgeries, history students can walk through ancient Rome, and engineering students can manipulate 3D models of complex machinery.</p>
      
      <h2>Market Analysis and Trends</h2>
      
      <p>The global EdTech market has grown from $89 billion in 2020 to an estimated $142 billion in 2024, with projections reaching $377 billion by 2028. This growth is driven by several key factors:</p>
      
      <h3>Changing Workforce Demands</h3>
      <p>The rapid pace of technological change means that skills have shorter half-lives. Workers need continuous upskilling and reskilling to remain relevant. Traditional educational institutions, with their rigid structures and lengthy programs, are often too slow to meet these needs.</p>
      
      <h3>Post-Pandemic Digital Acceleration</h3>
      <p>COVID-19 accelerated digital adoption in education by an estimated 10-15 years. What seemed impossible before—teaching millions of students online simultaneously—became not just possible but necessary.</p>
      
      <h2>Case Studies in Democratization</h2>
      
      <h3>Khan Academy: Free World-Class Education</h3>
      <p>Salman Khan's vision of providing "free, world-class education for anyone, anywhere" has reached over 120 million learners annually. The platform demonstrates how technology can scale personalized learning at unprecedented levels.</p>
      
      <h3>Coursera: University Education at Scale</h3>
      <p>By partnering with top universities, Coursera has made courses from Stanford, Yale, and other elite institutions accessible to learners worldwide. Their data shows that 40% of learners come from developing countries, highlighting technology's role in breaking down geographic barriers.</p>
      
      <h2>Challenges and Criticisms</h2>
      
      <h3>The Digital Divide</h3>
      <p>While technology promises democratization, it also risks creating new forms of inequality. Students without access to reliable internet or modern devices can be left further behind.</p>
      
      <h3>Quality vs. Accessibility Trade-offs</h3>
      <p>The push for scale and accessibility sometimes comes at the cost of educational quality. Ensuring that accessible education is also effective education remains a significant challenge.</p>
      
      <h3>The Human Element</h3>
      <p>Technology excels at information delivery and assessment, but education is fundamentally a human endeavor. The risk of losing the mentor-student relationship and peer-to-peer learning in purely digital environments is real.</p>
      
      <h2>Future Implications and Recommendations</h2>
      
      <h3>For Educational Institutions</h3>
      <ul>
        <li>Embrace hybrid models that combine online efficiency with in-person interaction</li>
        <li>Invest in faculty training for digital pedagogy</li>
        <li>Develop partnerships with EdTech companies rather than viewing them as competitors</li>
      </ul>
      
      <h3>For Policymakers</h3>
      <ul>
        <li>Invest in digital infrastructure to ensure equitable access</li>
        <li>Develop new frameworks for accrediting and validating online learning</li>
        <li>Support research into effective digital pedagogy</li>
      </ul>
      
      <h3>For EdTech Companies</h3>
      <ul>
        <li>Prioritize learning outcomes over engagement metrics</li>
        <li>Develop solutions for underserved populations</li>
        <li>Invest in research to validate the effectiveness of their approaches</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>The EdTech revolution is not just about technology—it's about reimagining education for the 21st century. While challenges remain, the potential for technology to democratize access to quality education is unprecedented in human history.</p>
      
      <p>The question is not whether technology will transform education, but whether we will guide that transformation in ways that truly serve learners and society. The choices we make today will determine whether technology becomes a great equalizer or a new source of division.</p>
      
      <p>As we continue to build and invest in educational technology, we must remember that our ultimate goal is not just to make education more efficient or accessible, but to make it more human—more responsive to individual needs, more connected to real-world applications, and more capable of unlocking human potential at scale.</p>
    `,
    tags: ["EdTech", "Digital Transformation", "Education Policy", "Market Analysis", "Future of Learning"],
    relatedArticles: [2, 4, 5]
  }
};

const ArticleDetail = () => {
  const { id } = useParams();
  const article = id && Object.prototype.hasOwnProperty.call(articleContent, id) 
    ? articleContent[id as keyof typeof articleContent] 
    : undefined;

  if (!article) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Link to="/articles">
            <Button variant="outline">← Back to Articles</Button>
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Expert':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>
            
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary">{article.category}</Badge>
                <Badge className={`${getDifficultyColor(article.difficulty)}`}>
                  {article.difficulty}
                </Badge>
              </div>
              
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {article.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.publishDate)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {article.views} views
                </span>
                <span className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  {article.likes} likes
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {article.comments} comments
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
              
              {/* Article Actions */}
              <div className="flex items-center justify-between mb-8 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    Like ({article.likes})
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Comment ({article.comments})
                  </Button>
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
              
              {/* Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-foreground prose-p:leading-relaxed prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-ul:list-disc prose-ul:ml-6"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="hover:bg-muted cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
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

                {/* Table of Contents */}
                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Table of Contents</h3>
                    <nav className="space-y-2 text-sm">
                      <a href="#executive-summary" className="block text-muted-foreground hover:text-primary transition-colors">
                        Executive Summary
                      </a>
                      <a href="#historical-context" className="block text-muted-foreground hover:text-primary transition-colors">
                        Historical Context
                      </a>
                      <a href="#technological-enablers" className="block text-muted-foreground hover:text-primary transition-colors">
                        Key Technological Enablers
                      </a>
                      <a href="#market-analysis" className="block text-muted-foreground hover:text-primary transition-colors">
                        Market Analysis
                      </a>
                      <a href="#case-studies" className="block text-muted-foreground hover:text-primary transition-colors">
                        Case Studies
                      </a>
                      <a href="#challenges" className="block text-muted-foreground hover:text-primary transition-colors">
                        Challenges & Criticisms
                      </a>
                      <a href="#future-implications" className="block text-muted-foreground hover:text-primary transition-colors">
                        Future Implications
                      </a>
                    </nav>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Related Articles</h3>
                    <div className="space-y-3">
                      <Link to="/articles/2" className="block group">
                        <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                          Building Sustainable Business Models in Education
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">15 min read</p>
                      </Link>
                      <Link to="/articles/4" className="block group">
                        <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                          From Startup to Scale: Lessons from Building Just Academy
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">18 min read</p>
                      </Link>
                    </div>
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

export default ArticleDetail;