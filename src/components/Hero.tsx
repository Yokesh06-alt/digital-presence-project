
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Professional headshot"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Alex Johnson
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Full-Stack Web Developer
            </h2>
          </div>

          {/* Summary */}
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            I craft exceptional digital experiences through clean code and innovative design. 
            Passionate about creating scalable web applications that make a difference.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToContact} size="lg" className="px-8 py-3">
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
