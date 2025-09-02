import { Button } from "@/components/ui/button";
import fatirAvatar from "@/assets/pic.jpg";
import { ArrowDown, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center">
        {/* Profile Picture with Neon Glow */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src={fatirAvatar} 
              alt="Fatir Armaan Profile" 
              className="w-48 h-48 rounded-full object-cover border-4 border-primary shadow-[0_0_30px_hsl(var(--primary)/0.5)] animate-glow-pulse"
            />
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-lg"></div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-bold mb-4 animate-fade-in">
          <span className="gradient-text">Fatir Armaan</span>
        </h1>
        
        {/* Sub-heading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
          AI & Web Developer | Collaborator | Freelancer
        </p>
        
        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in">
          2nd-year AIML student passionate about building innovative digital solutions 
          and exploring the intersection of AI and web development.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="group"
          >
            <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Let's Connect
          </Button>
          <Button 
            variant="neon" 
            size="lg"
            onClick={() => scrollToSection('services')}
            className="group"
          >
            <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            View Services
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;