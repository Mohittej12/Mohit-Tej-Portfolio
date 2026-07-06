import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Code2, Cpu, Cloud, Smartphone, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";

function AnimatedCounter({ end, duration = 2 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end); // Handle decimals by letting parent format it if needed
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export function About() {
  const interests = [
    { name: "AI/ML", icon: <Cpu className="w-4 h-4" /> },
    { name: "Full Stack", icon: <Code2 className="w-4 h-4" /> },
    { name: "Mobile Dev", icon: <Smartphone className="w-4 h-4" /> },
    { name: "Enterprise Automation", icon: <Database className="w-4 h-4" /> },
    { name: "Cloud", icon: <Cloud className="w-4 h-4" /> },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] flex-1 bg-border max-w-[50px]"></div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a driven Computer Science Engineering student at SIMATS University and currently the Lead Software Engineering Intern at Prodapt Solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans across building robust enterprise software, developing cross-platform applications, and engineering sophisticated AI/ML integrations. I thrive at the intersection of technical precision and creative problem-solving.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Recently awarded <strong className="text-foreground">Star Employee of the Month</strong> for outstanding performance and leadership, I'm passionate about exploring cutting-edge technologies like IBM Granite, Watsonx, and deep learning architectures to build systems that truly matter.
            </p>

            <div className="pt-6">
              <h3 className="font-mono text-sm uppercase tracking-widest text-primary mb-4">Core Interests</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, i) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-sm"
                  >
                    <span className="text-primary">{interest.icon}</span>
                    <span>{interest.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <GraduationCap className="w-8 h-8 text-primary mb-4" />
                  <div className="text-4xl font-bold font-serif mb-2 text-foreground flex items-end gap-1">
                    <AnimatedCounter end={8} />.<AnimatedCounter end={7} />
                  </div>
                  <p className="text-sm text-muted-foreground">CGPA @ SIMATS</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <Briefcase className="w-8 h-8 text-secondary mb-4" />
                  <div className="text-4xl font-bold font-serif mb-2 text-foreground flex items-center">
                    <AnimatedCounter end={2} />+
                  </div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <Code2 className="w-8 h-8 text-accent mb-4" />
                  <div className="text-4xl font-bold font-serif mb-2 text-foreground flex items-center">
                    <AnimatedCounter end={7} />+
                  </div>
                  <p className="text-sm text-muted-foreground">Featured Projects</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-success mb-4" />
                  <div className="text-4xl font-bold font-serif mb-2 text-foreground flex items-center">
                    <AnimatedCounter end={10} />+
                  </div>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
