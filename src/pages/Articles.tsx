import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

// Mock articles data - In real app, this would come from your Laravel API
const articles = [
  {
    id: 1,
    title: "The EdTech Revolution: How Technology is Democratizing Education",
    excerpt: "An in-depth analysis of how educational technology is breaking down barriers and making quality education accessible to millions worldwide.",
    category: "Industry Analysis",
    readTime: "12 min read",
    publishDate: "2024-01-20",
    difficulty: "Advanced",
    views: "2.5k",
    trending: true
  },
  {
    id: 2,
    title: "Building Sustainable Business Models in Education",
    excerpt: "Examining successful monetization strategies for educational platforms while maintaining accessibility and impact.",
    category: "Business Strategy",
    readTime: "15 min read",
    publishDate: "2024-01-18",
    difficulty: "Expert",
    views: "1.8k"
  },
  {
    id: 3,
    title: "The Science of Motivation in Online Learning",
    excerpt: "Understanding psychological principles that drive learner engagement and how to implement them in digital education platforms.",
    category: "Learning Psychology",
    readTime: "10 min read",
    publishDate: "2024-01-15",
    difficulty: "Intermediate",
    views: "3.2k"
  },
  {
    id: 4,
    title: "From Startup to Scale: Lessons from Building Just Academy",
    excerpt: "A comprehensive look at the journey of building an educational platform from conception to serving thousands of learners.",
    category: "Case Study",
    readTime: "18 min read",
    publishDate: "2024-01-12",
    difficulty: "Intermediate",
    views: "4.1k",
    trending: true
  },
  {
    id: 5,
    title: "The Future of Work: Skills That Matter in 2024 and Beyond",
    excerpt: "Identifying crucial skills for the evolving job market and how educational institutions can adapt their curricula accordingly.",
    category: "Future of Work",
    readTime: "14 min read",
    publishDate: "2024-01-10",
    difficulty: "Beginner",
    views: "5.7k"
  },
  {
    id: 6,
    title: "Measuring Impact in Education: Beyond Traditional Metrics",
    excerpt: "Exploring new ways to measure educational success and impact that go beyond test scores and completion rates.",
    category: "Data & Analytics",
    readTime: "11 min read",
    publishDate: "2024-01-08",
    difficulty: "Advanced",
    views: "1.9k"
  }
];

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

const ArticleCard = ({ article }: { article: typeof articles[0] }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="overflow-hidden hover-lift cursor-pointer group border-0 shadow-card">
      <Link to={`/articles/${article.id}`}>
        <div className="h-48 bg-gradient-hero relative">
          {article.trending && (
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Trending
              </Badge>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <Badge className={`text-xs ${getDifficultyColor(article.difficulty)}`}>
              {article.difficulty}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="text-xs">{article.category}</Badge>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{article.views} views</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
            </div>
          </div>
          
          <h3 className="font-heading text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(article.publishDate)}
            </span>
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

const Articles = () => {
  const trendingArticles = articles.filter(article => article.trending);
  const allArticles = articles.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 gradient-text">
              In-Depth Articles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analysis, case studies, and thought leadership pieces on education technology, 
              entrepreneurship, and the future of learning. Deep dives into the topics that matter most.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Trending Articles */}
        {trendingArticles.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h2 className="font-heading text-2xl font-bold">Trending Now</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trendingArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Badge variant="secondary" className="cursor-pointer">All Articles</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Industry Analysis</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Business Strategy</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Case Studies</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Future of Work</Badge>
        </div>

        {/* All Articles */}
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-bold mb-8">Latest Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articles;