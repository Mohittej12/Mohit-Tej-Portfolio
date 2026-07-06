import { motion } from "framer-motion";
import { BookOpen, ExternalLink, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Research() {
  return (
    <section id="research" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">Research & Publications</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-secondary/50 to-transparent max-w-[300px]"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/50 backdrop-blur border-border hover:border-secondary/50 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary group-hover:w-2 transition-all"></div>
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20 text-secondary hidden md:block">
                  <BookOpen className="w-10 h-10" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wider uppercase mb-2">
                    <FileText className="w-3 h-3" />
                    Peer Reviewed Research
                  </div>
                  
                  <h3 className="font-serif font-bold text-2xl md:text-3xl leading-tight">
                    Deep-Learning Scheme to Detect Steel Surface Condition
                  </h3>
                  
                  <div className="text-muted-foreground font-medium flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span>SILICON'25 National Conference</span>
                    <span className="hidden sm:inline text-border">•</span>
                    <span>Dr. M.G.R Educational and Research Institute</span>
                  </div>
                  
                  <div className="pt-4 flex items-center gap-4">
                    <div className="font-mono text-sm bg-muted/30 px-3 py-1.5 rounded text-muted-foreground border border-border">
                      ORCID: 0009-0000-4441-131X
                    </div>
                    <Button variant="outline" size="sm" className="gap-2 border-secondary/30 hover:bg-secondary/10 hover:text-secondary">
                      <ExternalLink className="w-4 h-4" /> View Abstract
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
