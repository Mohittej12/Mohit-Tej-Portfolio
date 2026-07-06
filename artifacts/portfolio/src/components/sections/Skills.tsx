import { motion } from "framer-motion";
import { SiJavascript, SiPython, SiCplusplus, SiDart, SiReact, SiHtml5, SiCss, SiTailwindcss, SiFlutter, SiNodedotjs, SiExpress, SiFlask, SiMysql, SiMongodb, SiFirebase, SiSupabase, SiTensorflow, SiGit, SiGithub, SiAndroidstudio, SiVercel, SiPostman } from "react-icons/si";
import { Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <SiJavascript className="w-5 h-5" />,
    skills: [
      { name: "Java", icon: null },
      { name: "Python", icon: <SiPython /> },
      { name: "C", icon: null },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "SQL", icon: null },
      { name: "Dart", icon: <SiDart /> },
      { name: "Swift", icon: null }
    ]
  },
  {
    title: "Frontend",
    icon: <SiReact className="w-5 h-5" />,
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Flutter", icon: <SiFlutter /> }
    ]
  },
  {
    title: "Backend",
    icon: <SiNodedotjs className="w-5 h-5" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "REST APIs", icon: null }
    ]
  },
  {
    title: "Databases",
    icon: <SiMysql className="w-5 h-5" />,
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "DynamoDB", icon: null }
    ]
  },
  {
    title: "AI & ML",
    icon: <SiTensorflow className="w-5 h-5" />,
    skills: [
      { name: "IBM Granite", icon: <Code2 className="w-4 h-4" /> },
      { name: "Watsonx AI", icon: <Code2 className="w-4 h-4" /> },
      { name: "Docling", icon: null },
      { name: "RAG", icon: null },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Deep Learning", icon: null }
    ]
  },
  {
    title: "Developer Tools",
    icon: <SiGit className="w-5 h-5" />,
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: <Code2 className="w-4 h-4" /> },
      { name: "Android Studio", icon: <SiAndroidstudio /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Postman", icon: <SiPostman /> }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">Skills & Technologies</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-[200px]"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-colors group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="font-serif font-bold text-lg">{category.title}</h3>
                    <span className="ml-auto text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                      {category.skills.length}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx * 0.1) + (i * 0.05) }}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-background border border-border rounded-md text-sm hover:border-primary/50 hover:shadow-[0_0_10px_rgba(79,140,255,0.2)] transition-all cursor-default"
                      >
                        {skill.icon && <span className="text-muted-foreground">{skill.icon}</span>}
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
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
