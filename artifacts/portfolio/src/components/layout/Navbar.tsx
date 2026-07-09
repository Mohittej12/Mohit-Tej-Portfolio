import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sun, Moon } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { name: "Home", href: "hero", num: "01" },
  { name: "About", href: "about", num: "02" },
  { name: "Experience", href: "experience", num: "03" },
  { name: "Skills", href: "skills", num: "04" },
  { name: "Projects", href: "projects", num: "05" },
  { name: "Research", href: "research", num: "06" },
  { name: "Conferences", href: "conferences", num: "07" },
  { name: "Certifications", href: "certifications", num: "08" },
  { name: "Achievements", href: "achievements", num: "09" },
  { name: "GitHub", href: "github", num: "10" },
  { name: "Contact", href: "contact", num: "11" },
];

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-6 h-5 flex flex-col justify-between cursor-pointer">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="block h-0.5 w-full bg-foreground origin-center rounded-full"
      />
      <motion.span
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        className="block h-0.5 w-full bg-foreground rounded-full"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="block h-0.5 w-full bg-foreground origin-center rounded-full"
      />
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(navLinks.map(l => l.href), -100);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/40 py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold font-serif cursor-pointer group relative"
              onClick={() => scrollToSection("hero")}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">MT</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-all duration-300"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </motion.div>
                </AnimatePresence>
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-muted/60 transition-all duration-300"
                aria-label="Toggle menu"
                data-testid="button-hamburger"
              >
                <HamburgerIcon isOpen={isMenuOpen} />
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Full-screen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col"
          >
            {/* Decorative gradient blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex-1 flex items-center justify-center px-8 md:px-20 relative z-10">
              <nav className="w-full max-w-2xl">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 60 }}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      data-testid={`nav-link-${link.href}`}
                      className={`group w-full flex items-center gap-4 py-3 sm:py-4 border-b border-border/30 last:border-0 hover:pl-3 transition-all duration-300 ${activeSection === link.href ? "text-primary" : "text-foreground hover:text-primary"
                        }`}
                    >
                      <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors w-6 shrink-0">
                        {link.num}
                      </span>
                      <span className="font-serif text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-left">
                        {link.name}
                      </span>
                      {activeSection === link.href && (
                        <motion.div
                          layoutId="menu-active"
                          className="ml-auto w-2 h-2 rounded-full bg-primary shrink-0"
                        />
                      )}
                    </button>
                  </motion.div>
                ))}
              </nav>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-8 md:p-12 flex items-center gap-6 border-t border-border/30 relative z-10"
            >
              <a href="https://github.com/Mohittej12" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">GitHub</a>
              <span className="text-border">·</span>
              <a href="https://linkedin.com/in/mohit-tej-gowrabathuni-9abaa9354" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">LinkedIn</a>
              <span className="text-border">·</span>
              <a href="mailto:mohittejgowraa@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">Email</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
