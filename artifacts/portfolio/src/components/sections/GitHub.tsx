import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, BookOpen, ExternalLink, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function GitHub() {
  const [profile, setProfile] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/Mohittej12"),
          fetch("https://api.github.com/users/Mohittej12/repos?sort=updated&per_page=6")
        ]);
        
        if (profileRes.ok && reposRes.ok) {
          const profileData = await profileRes.json();
          const reposData = await reposRes.json();
          setProfile(profileData);
          setRepos(reposData.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count));
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHub();
  }, []);

  const languageColors: Record<string, string> = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    Dart: "#00B4AB",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Jupyter: "#DA5B0B"
  };

  return (
    <section id="github" className="py-24 relative bg-muted/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">Open Source</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-muted-foreground/50 to-transparent"></div>
          </div>
        </motion.div>

        {!loading && profile && (
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-muted mb-4 relative group">
                    <img src={profile.avatar_url} alt="GitHub Avatar" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Github className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-serif font-bold text-xl">{profile.name || "Mohit Tej"}</h3>
                  <a href={profile.html_url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors mb-4 block">
                    @{profile.login}
                  </a>
                  
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span className="font-bold text-foreground">{profile.followers}</span> followers
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span className="font-bold text-foreground">{profile.public_repos}</span> repos
                    </div>
                  </div>

                  <Button className="w-full gap-2" asChild>
                    <a href={profile.html_url} target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4" /> View Profile
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {repos.map((repo, i) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur border-border hover:border-muted-foreground/50 transition-colors flex flex-col">
                    <CardContent className="p-5 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-2">
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="font-bold font-serif text-lg hover:text-primary transition-colors flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-muted-foreground" />
                          {repo.name}
                        </a>
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                        {repo.description || "No description provided."}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mt-auto">
                        {repo.language && (
                          <div className="flex items-center gap-1.5">
                            <span 
                              className="w-2.5 h-2.5 rounded-full" 
                              style={{ backgroundColor: languageColors[repo.language] || "#ccc" }}
                            ></span>
                            {repo.language}
                          </div>
                        )}
                        {repo.stargazers_count > 0 && (
                          <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5" />
                            {repo.stargazers_count}
                          </div>
                        )}
                        {repo.forks_count > 0 && (
                          <div className="flex items-center gap-1">
                            <GitFork className="w-3.5 h-3.5" />
                            {repo.forks_count}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
          </div>
        )}
      </div>
    </section>
  );
}
