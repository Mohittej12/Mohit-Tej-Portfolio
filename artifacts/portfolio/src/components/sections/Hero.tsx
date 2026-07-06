import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { Github, Linkedin, Download, ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import profilePhoto from "@assets/WhatsApp_Image_2026-07-06_at_9.52.03_PM_1783354968789.jpeg";

export function Hero() {
  const [init, setInit] = useState(false);
  const typingText = useTypingEffect([
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Mobile App Developer (Android / iOS)",
    "Microsoft Power Platform Developer"
  ]);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.2 } },
      },
    },
    particles: {
      color: { value: "#4F8CFF" },
      links: {
        color: "#8B5CF6",
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 0.5,
        straight: false,
      },
      number: { density: { enable: true, width: 800 }, value: 40 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  } as any;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const codeSnippets = [
    { text: "const ai = new IBMGranite()", top: "15%", left: "10%", delay: 0 },
    { text: "await deploy('production')", top: "75%", left: "80%", delay: 0.5 },
    { text: "git push origin main", top: "80%", left: "15%", delay: 1 },
    { text: "export default App;", top: "20%", left: "80%", delay: 1.5 },
  ];

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      {init && (
        <div className="absolute inset-0 z-0">
          <Particles id="tsparticles" options={particlesOptions} className="h-full w-full" />
        </div>
      )}
      
      {/* Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse pointer-events-none -z-10 mix-blend-screen" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse pointer-events-none -z-10 mix-blend-screen" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>

      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: [0, -15, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: snippet.delay },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: snippet.delay } 
          }}
          className="absolute hidden lg:flex items-center gap-2 font-mono text-sm text-primary/50 pointer-events-none select-none"
          style={{ top: snippet.top, left: snippet.left }}
        >
          <Code className="w-4 h-4" />
          {snippet.text}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/30 border border-border text-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-muted-foreground font-medium">Available for opportunities</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            >
              Gowrabathuni <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Mohit Tej</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="min-h-[2rem] md:min-h-[3rem] mb-6 font-mono text-base md:text-2xl text-muted-foreground flex items-center justify-center lg:justify-start flex-wrap gap-x-1"
            >
              <span>&gt;</span>
              <span className="text-foreground break-words max-w-full">{typingText}</span>
              <span className="animate-pulse w-2 h-5 md:h-8 bg-primary shrink-0"></span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Building scalable systems that matter. Engineering sophisticated AI integrations, robust enterprise platforms, and cross-platform experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8"
            >
              <Button size="lg" className="w-full sm:w-auto gap-2 rounded-full" onClick={() => window.open(`${import.meta.env.BASE_URL}resume.pdf`, '_blank')}>
                <Download className="w-4 h-4" /> Download Resume
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 rounded-full" onClick={() => scrollTo('projects')}>
                View Projects <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="ghost" className="w-full sm:w-auto rounded-full" onClick={() => scrollTo('contact')}>
                Contact Me
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a href="https://github.com/Mohittej12" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/mohit-tej-gowrabathuni-9abaa9354" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex-1 relative hidden md:block max-w-md mx-auto"
          >
            <div className="relative aspect-square rounded-full flex items-center justify-center">
              {/* Outer glowing ring */}
              <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-2 rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_50px_rgba(79,140,255,0.2)] bg-card flex items-center justify-center">
                <img src={profilePhoto} alt="Gowrabathuni Mohit Tej" className="w-full h-full object-cover object-top" />
              </div>
              
              {/* Orbiting tech pills */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] rounded-full"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-card border border-border px-3 py-1 rounded-full text-xs font-mono shadow-lg">React</div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-card border border-border px-3 py-1 rounded-full text-xs font-mono shadow-lg" style={{ transform: "translateY(-50%) rotate(-90deg)" }}>Node.js</div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border px-3 py-1 rounded-full text-xs font-mono shadow-lg" style={{ transform: "translateX(-50%) rotate(180deg)" }}>Python</div>
                <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-card border border-border px-3 py-1 rounded-full text-xs font-mono shadow-lg" style={{ transform: "translateY(-50%) rotate(90deg)" }}>AI / ML</div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('about')}
      >
        <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
