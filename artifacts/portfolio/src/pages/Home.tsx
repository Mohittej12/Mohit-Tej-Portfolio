import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { Certifications } from "@/components/sections/Certifications";
import { Achievements } from "@/components/sections/Achievements";
import { GitHub } from "@/components/sections/GitHub";
import { Contact } from "@/components/sections/Contact";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-r-2 border-secondary animate-[spin_1.5s_linear_infinite]"></div>
          <div className="absolute inset-4 rounded-full border-b-2 border-accent animate-[spin_2s_linear_infinite]"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-sm tracking-widest text-primary animate-pulse"
        >
          INITIALIZING...
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Research />
        <Certifications />
        <Achievements />
        <GitHub />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
