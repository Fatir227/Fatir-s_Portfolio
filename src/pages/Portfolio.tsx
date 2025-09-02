import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/50 text-center">
        <p className="text-muted-foreground">
          © 2024 Fatir Armaan. Crafted with passion and cutting-edge technology.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;