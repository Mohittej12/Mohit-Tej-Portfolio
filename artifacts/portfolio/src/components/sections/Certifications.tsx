import { motion } from "framer-motion";
import { Award, ShieldCheck, Database, Bot, BrainCircuit, BarChart, Network, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const certifications = [
  { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", icon: <ShieldCheck className="w-6 h-6" />, link: "https://aspen.eccouncil.org/Account/Login?ReturnUrl=%2fCertificate%2fCertificate%3fa%3deof6foV0K5%2fd%2fw5hmSyIRQ%3d%3d&a=eof6foV0K5/d/w5hmSyIRQ==", buttonText: "Share Credential" },
  { name: "Oracle Database SQL Certified Specialist", issuer: "Oracle", icon: <Database className="w-6 h-6" />, link: "https://signon.oracle.com/signin", buttonText: "Share Credential" },
  { name: "Generative AI for Developers Specialization", issuer: "Fractal", icon: <Bot className="w-6 h-6" />, link: "https://www.coursera.org/account/accomplishments/specialization/G7SF9EH85N3Y", buttonText: "Show Credential" },
  { name: "AI Agents Intensive Course", issuer: "Google & Kaggle", icon: <BrainCircuit className="w-6 h-6" />, link: "https://www.kaggle.com/certification/badges/mohittejgowrabathuni/105", buttonText: "Share Credential" },
  { name: "Vibe Coding Essentials", issuer: "Scrimba", icon: <Award className="w-6 h-6" />, link: "https://www.coursera.org/account/accomplishments/specialization/UOR4SR1JLYP3", buttonText: "Show Credential" },
  { name: "Communicate Data Insights with Impact", issuer: "Coursera / Prodapt", icon: <BarChart className="w-6 h-6" />, link: "https://www.coursera.org/account/accomplishments/badge/y3gGVEy5TRm4BlRMua0Ziw", buttonText: "Show Credential" },
  { name: "Internet of Things (Elite + Silver)", issuer: "NPTEL", icon: <Network className="w-6 h-6" />, link: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS44S45920017504363455", buttonText: "Share Credential" },
  { name: "Cybersecurity Analyst Job Simulation", issuer: "Tata", icon: <ShieldCheck className="w-6 h-6" />, link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_7PC9ipFaLaStRrKF5_1752102729299_completion_certificate.pdf", buttonText: "Share Credential" },
  { name: "Data Analytics Job Simulation", issuer: "Deloitte", icon: <BarChart className="w-6 h-6" />, link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_7PC9ipFaLaStRrKF5_1773662775678_completion_certificate.pdf", buttonText: "Share Credential" },
  { name: "Cybersecurity Job Simulation", issuer: "Deloitte", icon: <ShieldCheck className="w-6 h-6" /> },
  { name: "Introduction to Computers and Operating Systems and Security", issuer: "Microsoft", icon: <ShieldCheck className="w-6 h-6" />, link: "https://www.coursera.org/account/accomplishments/verify/5NBN12VXRXUX", buttonText: "Share Credential" },
  { name: "Generative AI in Education", issuer: "University of Glasgow", icon: <Bot className="w-6 h-6" />, link: "https://www.coursera.org/account/accomplishments/verify/WZ1V5PNNTAIC", buttonText: "Share Credential" },
  { name: "AI for App Building", issuer: "Google", icon: <BrainCircuit className="w-6 h-6" />, link: "https://www.coursera.org/account/accomplishments/verify/BVNVY0VXN70M", buttonText: "Share Credential" },
  { name: "Google Analytics Certification", issuer: "Google Digital Academy", icon: <BarChart className="w-6 h-6" />, link: "https://skillshop.credential.net/530cc197-9943-4423-85ee-764ba1aa6eba#acc.Jw3uMYHS", buttonText: "Share Credential" },
  { name: "EF SET English Certificate", issuer: "EF SET", icon: <Award className="w-6 h-6" />, link: "https://cert.efset.org/aCrjZq", buttonText: "Share Credential" },
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
                  <div className="text-sm font-mono text-muted-foreground flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-success/50"></span>
                      {cert.issuer}
                    </div>
                  </div>
                  {cert.link && cert.buttonText && (
                    <div className="mt-4">
                      <a href={cert.link} target="_blank" rel="noreferrer">
                        <Button variant="outline" size="sm" className="w-full gap-2 text-xs border-success/30 hover:border-success/60 text-success hover:bg-success/5">
                          {cert.buttonText} <ExternalLink className="w-3 h-3" />
                        </Button>
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
