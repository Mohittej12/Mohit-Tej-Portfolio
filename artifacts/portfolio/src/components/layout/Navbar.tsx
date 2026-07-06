import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Research", href: "research" },
  { name: "Certifications", href: "certifications" },
  { name: "Achievements", href: "achievements" },
  { name: "GitHub", href: "github" },
  { name: "Contact", href: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(navLinks.map(l => l.href), -100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold font-serif cursor-pointer group relative"
            onClick={() => scrollToSection("hero")}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">MT</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
                {activeSection === link.href && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-4 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left py-3 px-4 rounded-md transition-colors ${
                    activeSection === link.href 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
