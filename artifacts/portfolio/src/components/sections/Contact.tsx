import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Message sent successfully!", {
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardContent className="p-6 space-y-6">
                <a href="mailto:mohittejgowraa@gmail.com" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-0.5">Email</p>
                    <p className="text-foreground group-hover:text-primary transition-colors text-sm break-all">mohittejgowraa@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-0.5">Phone</p>
                    <p className="text-foreground group-hover:text-primary transition-colors text-sm">+91 7382260206</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-0.5">Location</p>
                    <p className="text-foreground group-hover:text-primary transition-colors text-sm">Chirala, Andhra Pradesh</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://linkedin.com/in/mohit-tej-gowrabathuni-9abaa9354" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com/Mohittej12" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardContent className="p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-background/50 focus-visible:ring-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" className="bg-background/50 focus-visible:ring-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Project Inquiry" className="bg-background/50 focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project..." 
                              className="bg-background/50 min-h-[150px] resize-none focus-visible:ring-primary" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full md:w-auto gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
