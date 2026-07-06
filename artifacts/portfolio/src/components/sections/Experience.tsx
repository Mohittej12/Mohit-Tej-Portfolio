import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    role: "Lead Software Engineering Intern",
    company: "Prodapt Solutions Pvt. Ltd.",
    date: "May 2026 – Present",
    location: "Chennai",
    description: [
      "Led and mentored team of interns",
      "Coordinate task allocation, project planning, stakeholder communication, progress tracking",
      "Conducted technical reviews and knowledge-sharing sessions",
      "⭐ Star Employee of the Month Award"
    ]
  },
  {
    role: "Software Developer Intern",
    company: "Prodapt Solutions Pvt. Ltd.",
    date: "Feb 2026 – Present",
    location: "Chennai",
    description: [
      "Android, web, cross-platform apps: Java, Flutter, React.js, Firebase",
      "Microsoft 365, Power Apps, Power Automate automation",
      "EasyDine & ProDine digital dining solutions",
      "API integration, database management, cloud deployment"
    ]
  },
  {
    role: "Data Analytics Virtual Intern",
    company: "Deloitte (Forage)",
    date: "Feb 2026 – Mar 2026",
    location: "Remote",
    description: [
      "Analyzed operational datasets, machine downtime trends",
      "Tableau dashboards, business insights with Excel"
    ]
  },
  {
    role: "Cyber Security Virtual Intern",
    company: "Deloitte (Forage)",
    date: "Jun 2025 – Jul 2025",
    location: "Remote",
    description: [
      "IAM analysis (RBAC, MFA, least-privilege)",
      "Security improvement recommendations"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-muted/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-secondary/50 to-transparent"></div>
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border origin-top hidden md:block"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-[11px] md:left-1/2 w-[10px] h-[10px] rounded-full bg-primary ring-4 ring-background -translate-x-1/2 hidden md:block mt-6"
                />

                <div className="md:w-1/2 flex items-center md:hidden mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 shrink-0 border border-primary/30">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg">{exp.role}</h3>
                    <p className="text-primary text-sm font-medium">{exp.company}</p>
                  </div>
                </div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}
                >
                  <Card className="bg-card/80 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,140,255,0.1)] group">
                    <CardContent className="p-6">
                      <div className="hidden md:flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <Building2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-xl">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4 font-mono">
                        <span className="flex items-center gap-1.5">{exp.date}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{exp.location}</span>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className="text-primary mt-1 shrink-0">▹</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
