
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, background, and what drives my passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="text-primary" size={24} />
              <h3 className="text-2xl font-semibold text-foreground">My Story</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience creating 
              digital solutions that bridge the gap between design and functionality. My journey 
              began with a curiosity about how websites work, which evolved into a deep love 
              for clean code and user-centered design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or mentoring aspiring developers. I believe in the power 
              of technology to solve real-world problems and create meaningful connections.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Education</h4>
                    <p className="text-muted-foreground mb-1">
                      Bachelor of Science in Computer Science
                    </p>
                    <p className="text-sm text-muted-foreground">
                      University of Technology • 2016-2020
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Graduated Magna Cum Laude with focus on Software Engineering and Web Technologies
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Experience</h4>
                    <p className="text-muted-foreground mb-1">
                      Senior Full-Stack Developer
                    </p>
                    <p className="text-sm text-muted-foreground">
                      TechCorp Solutions • 2020-Present
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Leading development of scalable web applications serving 100k+ users. 
                      Mentoring junior developers and architecting cloud-native solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
