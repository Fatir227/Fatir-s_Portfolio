import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "armaansyed691@gmail.com",
      link: "mailto:armaansyed691@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8660946641",
      link: "tel:+918660946641"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/syed-fatir-armaan-967320224",
      link: "https://linkedin.com/in/syed-fatir-armaan-967320224"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life with cutting-edge technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.link}
                  target={contact.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="animated-border p-8 rounded-xl text-center group hover:neon-glow transition-all duration-300 hover:scale-105 block"
                >
                  <div className="mb-4 flex justify-center">
                    <div className={`p-4 rounded-full ${
                      index === 0 ? 'bg-primary/20 text-primary' : 
                      index === 1 ? 'bg-secondary/20 text-secondary' : 
                      'bg-primary/20 text-primary'
                    }`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{contact.label}</h3>
                  <p className="text-muted-foreground text-sm break-words">
                    {contact.value}
                  </p>
                </a>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="animated-border p-8 rounded-xl inline-block">
              <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Let's discuss your vision and create something amazing together. 
                From web development to AI integration, I'm here to help.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.location.href = 'mailto:armaansyed691@gmail.com'}
                className="group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;