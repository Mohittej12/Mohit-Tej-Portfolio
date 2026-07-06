import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-50"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-bold mb-2">Gowrabathuni Mohit Tej</h3>
            <p className="text-muted-foreground text-sm">
              Building scalable systems that matter.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/Mohittej12" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/mohit-tej-gowrabathuni-9abaa9354" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:mohittejgowraa@gmail.com"
              className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Gowrabathuni Mohit Tej. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Built with React + TypeScript + Tailwind + Framer Motion
          </p>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToTop}
            className="rounded-full flex hover:bg-primary/10 hover:text-primary border border-border/50"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
