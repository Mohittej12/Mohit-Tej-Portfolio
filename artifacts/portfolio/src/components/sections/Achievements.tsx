import { motion } from "framer-motion";
import { Star, Trophy, Beaker, Users, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "Star Employee of the Month",
    organization: "Prodapt Solutions Pvt. Ltd.",
    description: "Awarded for outstanding performance and leadership",
    icon: <Star className="w-6 h-6" />,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20"
  },
  {
    title: "Outstanding Achievement Award 2025",
    organization: "Tamil Thaai Foundation",
    description: "Recognized for excellence in technical innovation",
    icon: <Trophy className="w-6 h-6" />,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20"
  },
  {
    title: "Research Publication",
    organization: "SILICON'25 National Conference",
    description: "Deep-Learning Scheme to Detect Steel Surface Condition",
    icon: <Beaker className="w-6 h-6" />,
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20"
  },
  {
    title: "Team Lead",
    organization: "Prodapt Solutions",
    description: "Led and mentored intern team for successful project delivery",
    icon: <Users className="w-6 h-6" />,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20"
  },
  {
    title: "CGPA 8.7/10",
    organization: "SIMATS University",
    description: "B.E. Computer Science and Engineering",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "text-success",
    bg: "bg-success/10",
    border: "border-success/20"
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">Achievements & Honors</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto grid gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className={`bg-card/50 backdrop-blur border-border hover:${item.border} transition-all duration-300`}>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className={`p-4 rounded-full ${item.bg} ${item.color} shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl mb-1">{item.title}</h3>
                      <p className="text-foreground font-medium mb-1">{item.organization}</p>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
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
