import { GraduationCap, Award, Code, Brain } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-primary font-semibold">Fatir Armaan</span>, an AI & Web Developer passionate about building innovative digital solutions. As a second-year AIML student, I actively explore the intersection of web development and artificial intelligence while collaborating in hackathons and startup projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I offer freelancing services such as website and portfolio development, and I'm always open to exciting collaborations that push the boundaries of technology.
            </p>
          </div>

          {/* Education & Info Cards */}
          <div className="space-y-4">
            {/* Education */}
            <div className="animated-border p-6 rounded-lg group hover:neon-glow">
              <div className="flex items-center mb-3">
                <GraduationCap className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">B.E. Artificial Intelligence & Machine Learning</span><br/>
                2nd Year, HKBK College of Engineering
              </p>
            </div>

            {/* Key Skills */}
            <div className="animated-border p-6 rounded-lg group hover:neon-glow">
              <div className="flex items-center mb-3">
                <Code className="w-6 h-6 text-secondary mr-3" />
                <h3 className="text-xl font-semibold">Core Focus</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Flask', 'React', 'AI/ML', 'Cloud Computing'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="animated-border p-6 rounded-lg group hover:neon-glow">
              <div className="flex items-center mb-3">
                <Award className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Intro to Gen AI (Simplilearn)</li>
                <li>• AI for Beginners (HP)</li>
                <li>• Ethical Hacking (Cisco)</li>
                <li>• Google GenAI/Vertex AI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;