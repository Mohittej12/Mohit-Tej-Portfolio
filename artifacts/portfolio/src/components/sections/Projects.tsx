import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI-Powered Document Retrieval System",
    description: "AI-powered document Q&A system using IBM Granite, Docling, and Retrieval-Augmented Generation for enterprise knowledge discovery",
    tech: ["IBM Granite", "Watsonx", "Docling", "RAG", "Python"],
    github: "https://github.com/Mohittej12/Build-an-AI-Powered-Document-Retrieval-System-with-IBM-Granite-and-Docling",
    live: "https://colab.research.google.com/github/ibm-granite-community/granite-snack-cookbook/blob/main/recipes/RAG/Granite_Docling_RAG.ipynb#scrollTo=F5u06aEjThd3",
    featured: true
  },
  {
    title: "EasyDine",
    description: "Cross-platform restaurant ordering system with real-time orders, role-based access, deployed on Vercel",
    tech: ["React.js", "Flutter", "Firebase", "Cloud Firestore"],
    github: "https://github.com/Mohittej12/easy-dine-fullapp",
    live: "https://easy-dine-fullapp-easy-dine.vercel.app/",
    featured: true
  },
  {
    title: "TalentCRM",
    description: "Full-stack recruitment management platform with secure auth, RBAC, candidate tracking, and job management",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Mohittej12/TalentCRM---TalentXMinds",
    live: "https://talent-crm-talent-x-minds.vercel.app/",
    featured: false
  },
  {
    title: "CareerCompass",
    description: "AI-powered career guidance platform with intelligent job matching and personalized recommendations",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    github: "https://github.com/Mohittej12/Career-Compass",
    live: "https://career-compass-avh1.onrender.com/",
    featured: false
  },
  {
    title: "ProDine",
    description: "Cross-platform mobile restaurant app built with Flutter and Firebase for seamless dining experience",
    tech: ["Flutter", "Firebase", "Mobile"],
    github: "https://github.com/Mohittej12/ProDine-Mobile-App",
    live: "https://mohittej12.github.io/ProDine-Mobile-App/",
    featured: false
  },
  {
    title: "BloodCellBuddy",
    description: "AI mobile app for automated white blood cell classification using CNN trained on 10,000+ blood cell images",
    tech: ["TensorFlow", "Java", "Swift", "Flask"],
    github: "https://github.com/Mohittej12/BloodCelBuddy",
    live: "https://play.google.com/store/apps/details?id=com.simats.bloodcelbuddy",
    featured: false
  },
  {
    title: "UroSmart",
    description: "AI-powered urological health analysis with on-device inference, disease prediction, and automated reporting",
    tech: ["TensorFlow Lite", "Computer Vision", "Deep Learning"],
    github: "https://github.com/Mohittej12/new-urosmart",
    live: "https://apps.apple.com/in/app/simats-urosmart/id6761048994",
    featured: false
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-muted/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/50 to-transparent"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <Card className="h-full bg-card/80 backdrop-blur border-border hover:border-accent/50 hover:shadow-[0_8px_30px_rgba(0,229,255,0.1)] transition-all duration-300 group overflow-hidden flex flex-col relative [transform-style:preserve-3d] hover:[transform:translateY(-8px)]">

                {project.featured && (
                  <div className="absolute top-0 right-0 -mr-8 mt-2 w-32 text-center transform rotate-45 bg-accent text-accent-foreground text-xs font-bold py-1 z-10 shadow-md">
                    FEATURED
                  </div>
                )}

                <CardContent className="p-6 flex-1 flex flex-col">

                  <div className="mb-4">
                    <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2 py-1 rounded bg-muted/30 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      {project.github && (
                        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground" asChild>
                          <a href={project.github} target="_blank" rel="noreferrer">
                            <Github className="w-4 h-4" /> Code
                          </a>
                        </Button>
                      )}
                      {project.live && (
                        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground" asChild>
                          <a href={project.live} target="_blank" rel="noreferrer">
                            <ExternalLink className="w-4 h-4" /> Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
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
