import { Globe, Users, Zap, Laptop } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website & Portfolio Development",
      description: "Crafting responsive, modern, and visually appealing websites and portfolios tailored to highlight individual or business needs.",
      features: ["Responsive Design", "Modern UI/UX", "SEO Optimization", "Fast Loading"]
    },
    {
      icon: Users,
      title: "Hackathon & Project Collaboration",
      description: "Partnering with teams and startups to contribute in AI, Web, and Cloud-based projects in fast-paced hackathon environments.",
      features: ["Team Collaboration", "AI Integration", "Rapid Prototyping", "Cloud Solutions"]
    },
    {
      icon: Zap,
      title: "AI-Powered Web App Prototyping",
      description: "Building MVPs and prototypes that integrate AI models with web applications for practical, real-world use cases.",
      features: ["AI Model Integration", "MVP Development", "API Development", "User-Centric Design"]
    },
    {
      icon: Laptop,
      title: "Freelance Web Solutions",
      description: "Delivering small-scale web solutions including landing pages, portfolio updates, and lightweight digital presence strategies.",
      features: ["Landing Pages", "Portfolio Updates", "Quick Turnaround", "Affordable Pricing"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional services combining modern web development with cutting-edge AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className="animated-border p-8 rounded-xl group hover:neon-glow transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-lg mr-4 ${isEven ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-foreground/80">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-2 ${isEven ? 'bg-primary' : 'bg-secondary'}`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;