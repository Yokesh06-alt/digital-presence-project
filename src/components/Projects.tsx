
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/ecommerce",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, file sharing, and team communication features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/taskmanager",
      featured: true,
    },
    {
      title: "Weather Analytics Dashboard",
      description: "A data visualization dashboard that displays weather patterns and climate data using interactive charts and maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Python", "Django", "D3.js", "PostgreSQL", "Docker"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/weather-dashboard",
      featured: false,
    },
    {
      title: "Social Media API",
      description: "RESTful API for a social media platform with authentication, content management, and real-time notifications.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Redis"],
      liveUrl: null,
      githubUrl: "https://github.com/example/social-api",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button size="sm" className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  )}
                  <Button size="sm" variant="outline" className="flex items-center gap-2">
                    <Github size={16} />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
