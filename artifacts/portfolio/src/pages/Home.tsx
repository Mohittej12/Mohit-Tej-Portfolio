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

const FOUNTAIN_STREAMS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  angle: (i / 18) * 360,
  delay: i * 0.08,
  height: 120 + Math.random() * 200,
  width: 2 + Math.random() * 3,
  duration: 1.2 + Math.random() * 0.8,
  color: i % 3 === 0 ? "#4F8CFF" : i % 3 === 1 ? "#8B5CF6" : "#00E5FF",
}));

const DROPS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: 0.5 + Math.random() * 3,
  size: 2 + Math.random() * 4,
  duration: 1.5 + Math.random() * 2,
  color: i % 3 === 0 ? "#4F8CFF" : i % 3 === 1 ? "#8B5CF6" : "#00E5FF",
}));

function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 800);
    const t2 = setTimeout(() => setPhase("out"), 4200);
    const t3 = setTimeout(onComplete, 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[300] overflow-hidden flex items-end justify-center"
      style={{ background: "#0B0F19" }}
    >
      {/* Stars background */}
      {Array.from({ length: 80 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 80}%`,
            width: Math.random() > 0.8 ? 2 : 1,
            height: Math.random() > 0.8 ? 2 : 1,
            opacity: 0.2 + Math.random() * 0.5,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      {/* Fountain streams — shoot upward from center-bottom */}
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-0 h-0">
        {FOUNTAIN_STREAMS.map((stream) => {
          const rad = (stream.angle * Math.PI) / 180;
          const targetX = Math.cos(rad) * stream.height * 0.6;
          const targetY = -stream.height;

          return (
            <motion.div
              key={stream.id}
              className="absolute rounded-full origin-bottom"
              style={{
                width: stream.width,
                height: stream.height * 0.4,
                background: `linear-gradient(to top, ${stream.color}99, transparent)`,
                bottom: 0,
                left: -stream.width / 2,
              }}
              initial={{ scaleY: 0, x: 0, opacity: 0 }}
              animate={
                phase === "in"
                  ? { scaleY: 1, x: targetX * 0.3, y: targetY * 0.3, opacity: 0.9 }
                  : phase === "hold"
                  ? { scaleY: 1.2, x: targetX, y: targetY, opacity: 1 }
                  : { scaleY: 0, x: 0, y: 0, opacity: 0 }
              }
              transition={{
                duration: stream.duration,
                delay: stream.delay,
                ease: phase === "in" ? "easeOut" : phase === "out" ? "easeIn" : "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Falling drops */}
      {DROPS.map((drop) => (
        <motion.div
          key={`drop-${drop.id}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${drop.x}%`,
            bottom: "20%",
            width: drop.size,
            height: drop.size,
            background: drop.color,
            boxShadow: `0 0 ${drop.size * 2}px ${drop.color}88`,
          }}
          animate={
            phase === "hold"
              ? {
                  y: [0, -(200 + Math.random() * 200), 300],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0.5],
                }
              : { opacity: 0 }
          }
          transition={{
            duration: drop.duration,
            delay: drop.delay * 0.3,
            ease: "easeInOut",
            repeat: phase === "hold" ? Infinity : 0,
          }}
        />
      ))}

      {/* Glowing pool at bottom */}
      <motion.div
        className="absolute bottom-[18%] left-1/2 -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(79,140,255,0.3) 0%, transparent 70%)" }}
        animate={
          phase === "hold"
            ? { width: 400, height: 80, opacity: [0.4, 0.8, 0.4] }
            : phase === "in"
            ? { width: 100, height: 30, opacity: 0.3 }
            : { width: 0, height: 0, opacity: 0 }
        }
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            phase !== "in"
              ? { scale: 1, opacity: 1 }
              : { scale: 0.5, opacity: 0 }
          }
          transition={{ duration: 0.7, ease: "backOut" }}
          className="relative mb-6"
        >
          {/* Glowing ring */}
          <motion.div
            className="absolute -inset-4 rounded-full"
            animate={{ boxShadow: ["0 0 20px 2px #4F8CFF44", "0 0 50px 8px #8B5CF688", "0 0 20px 2px #4F8CFF44"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="w-24 h-24 rounded-full border-2 border-primary/60 flex items-center justify-center bg-card/60 backdrop-blur">
            <span className="text-4xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary">MT</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={phase !== "in" ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white text-center px-4"
        >
          Gowrabathuni{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Mohit Tej
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={phase !== "in" ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-3 font-mono text-[10px] sm:text-sm text-primary/80 tracking-normal sm:tracking-widest uppercase text-center px-4 leading-snug"
        >
          Software Engineer · AI Builder · Full Stack
        </motion.p>

        {/* Progress bar */}
        <motion.div
          className="mt-10 w-48 h-0.5 bg-white/10 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={phase !== "in" ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.2, delay: 0.8, ease: "easeInOut" }}
          />
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
        {loading && <SplashScreen onComplete={() => setLoading(false)} />}
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
