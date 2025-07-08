import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Users, 
  TrendingUp, 
  Award, 
  Calendar,
  Globe,
  Zap,
  Target,
  BookOpen,
  Code,
  Lightbulb,
  Star,
  ArrowRight,
  Play,
  Download
} from 'lucide-react';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Just Academy",
      description: "Revolutionary online learning platform transforming education through AI-powered personalization and community-driven learning experiences.",
      role: "Founder & CEO",
      period: "2020 - Present",
      status: "Active",
      metrics: {
        users: "50,000+",
        growth: "300%",
        satisfaction: "4.8/5"
      },
      technologies: ["React", "Node.js", "Python", "AI/ML", "AWS"],
      features: [
        "AI-powered personalized learning paths",
        "Real-time progress tracking and analytics",
        "Interactive community features",
        "Multi-format content delivery",
        "Advanced assessment engine"
      ],
      links: {
        website: "https://justacademy.co",
        case_study: "/articles/4"
      },
      image: "bg-gradient-primary"
    },
    {
      id: 2,
      title: "EduTech Consulting",
      description: "Strategic consulting for educational institutions and EdTech startups looking to scale their digital learning initiatives.",
      role: "Senior Consultant",
      period: "2018 - Present",
      status: "Active",
      metrics: {
        clients: "25+",
        success_rate: "95%",
        avg_growth: "250%"
      },
      technologies: ["Strategy", "Product Design", "User Research", "Analytics"],
      features: [
        "Digital transformation roadmaps",
        "Product strategy and development",
        "User experience optimization",
        "Market analysis and positioning",
        "Technology stack recommendations"
      ],
      links: {
        contact: "mailto:hello@roshanchaturvedi.com"
      },
      image: "bg-gradient-secondary"
    },
    {
      id: 3,
      title: "Learning Analytics Platform",
      description: "Advanced analytics platform helping educational institutions understand learner behavior and optimize their programs.",
      role: "Product Lead",
      period: "2019 - 2021",
      status: "Completed",
      metrics: {
        institutions: "15+",
        data_points: "1M+",
        insights: "500+"
      },
      technologies: ["Python", "D3.js", "PostgreSQL", "Docker", "Kubernetes"],
      features: [
        "Real-time learning analytics dashboard",
        "Predictive student success modeling",
        "Automated intervention recommendations",
        "Custom reporting and visualization",
        "API integration with LMS platforms"
      ],
      links: {
        case_study: "/articles/6"
      },
      image: "bg-gradient-hero"
    }
  ];

  const achievements = [
    {
      title: "EdTech Innovator Award",
      organization: "Education Technology Association",
      year: "2023",
      description: "Recognized for outstanding contribution to online learning innovation"
    },
    {
      title: "Forbes 30 Under 30 Nominee",
      organization: "Forbes",
      year: "2022",
      description: "Nominated for transformative work in education technology"
    },
    {
      title: "Startup of the Year",
      organization: "Tech Entrepreneurs Network",
      year: "2021",
      description: "Just Academy recognized as breakthrough startup of the year"
    },
    {
      title: "Innovation in Education",
      organization: "Global Education Summit",
      year: "2020",
      description: "Keynote speaker on the future of digital learning"
    }
  ];

  const skills = [
    { category: "Leadership", items: ["Strategic Planning", "Team Building", "Product Vision", "Stakeholder Management"] },
    { category: "Technology", items: ["AI/ML", "Full-Stack Development", "Cloud Architecture", "Data Analytics"] },
    { category: "Education", items: ["Learning Design", "Curriculum Development", "Assessment Strategy", "Student Engagement"] },
    { category: "Business", items: ["Fundraising", "Market Analysis", "Partnership Development", "Growth Strategy"] }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Founded Just Academy",
      description: "Launched revolutionary online learning platform with AI-powered personalization",
      milestone: true
    },
    {
      year: "2019",
      title: "Led Learning Analytics Project",
      description: "Built advanced analytics platform for 15+ educational institutions",
      milestone: false
    },
    {
      year: "2018",
      title: "Started EdTech Consulting",
      description: "Began helping startups and institutions with digital transformation",
      milestone: false
    },
    {
      year: "2017",
      title: "Education Technology Research",
      description: "Deep dive into AI applications in personalized learning",
      milestone: false
    },
    {
      year: "2015",
      title: "Entered Education Sector",
      description: "Transitioned from tech to focus on educational innovation",
      milestone: true
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-secondary/10 text-secondary border-secondary/20">
              Portfolio & Projects
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Building the Future of Education
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore my journey in transforming education through technology, innovation, and strategic thinking. 
              From founding Just Academy to consulting with leading institutions, here's how I'm making learning accessible to all.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="hover-lift">
                <a href="https://justacademy.co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  View Just Academy Live
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="hover-lift flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Portfolio PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Students Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Consulting Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-sm text-muted-foreground">Average Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transformative projects that are reshaping the education landscape
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden border-0 shadow-card hover-lift">
                <div className={`grid grid-cols-1 lg:grid-cols-${index % 2 === 0 ? '2' : '2'} gap-0`}>
                  <div className={`${project.image} h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}></div>
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant={project.status === 'Active' ? 'secondary' : 'outline'}>
                        {project.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{project.period}</span>
                    </div>
                    
                    <h3 className="font-heading text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-sm text-secondary font-medium mb-4">{project.role}</p>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-bold text-lg">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      {project.links.website && (
                        <Button size="sm" asChild className="hover-lift">
                          <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            <Globe className="w-3 h-3" />
                            Visit Site
                          </a>
                        </Button>
                      )}
                      {project.links.case_study && (
                        <Button variant="outline" size="sm" asChild className="hover-lift">
                          <Link to={project.links.case_study} className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            Read Case Study
                          </Link>
                        </Button>
                      )}
                      {project.links.contact && (
                        <Button variant="outline" size="sm" asChild className="hover-lift">
                          <a href={project.links.contact} className="flex items-center gap-1">
                            <Target className="w-3 h-3" />
                            Learn More
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A multidisciplinary approach combining technology, education, and business acumen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {skills.map((skillGroup, index) => (
              <Card key={skillGroup.category} className="border-0 shadow-card hover-lift">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {index === 0 && <Users className="w-5 h-5 text-primary" />}
                    {index === 1 && <Code className="w-5 h-5 text-primary" />}
                    {index === 2 && <BookOpen className="w-5 h-5 text-primary" />}
                    {index === 3 && <TrendingUp className="w-5 h-5 text-primary" />}
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className="text-sm text-muted-foreground">{skill}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Journey Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in my education technology journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.year} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className={`absolute left-8 md:left-1/2 md:-ml-3 w-6 h-6 rounded-full border-4 border-background ${item.milestone ? 'bg-primary' : 'bg-muted'}`}></div>
                    
                    {/* Content */}
                    <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <Card className="border-0 shadow-card hover-lift">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="font-bold text-primary">{item.year}</span>
                            {item.milestone && <Star className="w-4 h-4 text-secondary" />}
                          </div>
                          <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Recognition & Awards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Honored to be recognized for contributions to education and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-sm text-secondary font-medium mb-2">{achievement.organization} • {achievement.year}</p>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Education Together?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Whether you're looking to build an EdTech solution, scale your educational platform, 
            or need strategic guidance in the learning space, let's collaborate to make an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover-lift">
              Start a Project
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover-lift">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;