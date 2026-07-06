import { motion } from "framer-motion";
import { Award, ShieldCheck, Database, Bot, BrainCircuit, BarChart, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", icon: <ShieldCheck className="w-6 h-6" /> },
  { name: "Oracle Database SQL Certified Specialist", issuer: "Oracle", icon: <Database className="w-6 h-6" /> },
  { name: "Generative AI for Developers Specialization", issuer: "Fractal", icon: <Bot className="w-6 h-6" /> },
  { name: "AI Agents Intensive Course", issuer: "Google & Kaggle", icon: <BrainCircuit className="w-6 h-6" /> },
  { name: "Vibe Coding Essentials", issuer: "Scrimba", icon: <Award className="w-6 h-6" /> },
  { name: "Communicate Data Insights with Impact", issuer: "Coursera / Prodapt", icon: <BarChart className="w-6 h-6" /> },
  { name: "Internet of Things (Elite + Silver)", issuer: "NPTEL", icon: <Network className="w-6 h-6" /> },
  { name: "Cybersecurity Job Simulation", issuer: "Deloitte", icon: <ShieldCheck className="w-6 h-6" /> },
  { name: "Data Analytics Job Simulation", issuer: "Deloitte", icon: <BarChart className="w-6 h-6" /> },
  { name: "Cybersecurity Analyst Job Simulation", issuer: "Tata", icon: <ShieldCheck className="w-6 h-6" /> },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-muted/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">Certifications</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-success/50 to-transparent"></div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur border-border hover:border-success/50 hover:bg-success/5 transition-all duration-300 group cursor-default">
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="p-2.5 rounded-lg bg-success/10 text-success w-fit mb-4 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <h3 className="font-medium text-foreground mb-2 leading-tight flex-1">
                    {cert.name}
                  </h3>
                  <div className="text-sm font-mono text-muted-foreground flex items-center gap-2 mt-auto pt-4 border-t border-border">
                    <span className="w-2 h-2 rounded-full bg-success/50"></span>
                    {cert.issuer}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
