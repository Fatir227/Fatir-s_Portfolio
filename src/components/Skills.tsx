import { Code, Globe, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      icon: Code,
      color: "primary",
      skills: ["Python", "C", "C++", "R", "SQL", "Flask", "Basic JavaScript"]
    },
    {
      title: "Web Development & Tools",
      icon: Globe,
      color: "secondary",
      skills: ["HTML", "CSS", "React (beginner)", "Vue (beginner)", "Bootstrap", "Tailwind", "Figma (basic)", "Firebase", "GitHub", "Google Analytics"]
    },
    {
      title: "AI & Cloud",
      icon: Brain,
      color: "primary",
      skills: ["AI/ML basics", "Generative AI", "Prompt Engineering", "Google Cloud Platform", "API Integration", "Data Handling"]
    },
    {
      title: "Other Skills",
      icon: Users,
      color: "secondary",
      skills: ["Hackathon Collaboration", "Problem Solving", "Startup Ideation", "Portfolio Building", "Communication", "Teamwork"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="animated-border p-8 rounded-xl group hover:neon-glow transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${category.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'} mr-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-3 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${
                        category.color === 'primary' 
                          ? 'border-primary/30 bg-primary/10 text-primary hover:bg-primary/20' 
                          : 'border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/20'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;