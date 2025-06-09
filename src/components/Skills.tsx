
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Briefcase, Image } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React/Next.js", level: 90 },
    { name: "Node.js/Express", level: 85 },
    { name: "Python/Django", level: 80 },
    { name: "SQL/NoSQL Databases", level: 85 },
    { name: "AWS/Cloud Services", level: 75 },
  ];

  const tools = [
    "Git", "Docker", "Kubernetes", "Jenkins", "Figma", "Photoshop",
    "MongoDB", "PostgreSQL", "Redis", "GraphQL", "REST APIs", "Microservices"
  ];

  const softSkills = [
    "Problem Solving", "Team Leadership", "Project Management", "Communication",
    "Mentoring", "Agile/Scrum", "Client Relations", "Technical Writing"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-primary" size={24} />
              <h3 className="text-xl font-semibold text-foreground">Technical Skills</h3>
            </div>
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Image className="text-primary" size={24} />
              <h3 className="text-xl font-semibold text-foreground">Tools & Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Badge key={tool} variant="secondary" className="text-sm">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-primary" size={24} />
              <h3 className="text-xl font-semibold text-foreground">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
