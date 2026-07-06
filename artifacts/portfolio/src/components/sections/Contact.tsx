import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from "lucide-react";
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

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "mohittejgowraa@gmail.com",
    href: "mailto:mohittejgowraa@gmail.com",
    color: "text-primary",
    bg: "bg-primary/10 group-hover:bg-primary",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91 7382260206",
    href: "tel:+917382260206",
    color: "text-secondary",
    bg: "bg-secondary/10 group-hover:bg-secondary",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Chirala, Andhra Pradesh",
    href: null,
    color: "text-accent",
    bg: "bg-accent/10 group-hover:bg-accent",
  },
];

export function Contact() {
  const [isSending, setIsSending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSending(true);

    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${values.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
    );
    const mailtoLink = `mailto:mohittejgowraa@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    window.open(mailtoLink, "_blank");

    setTimeout(() => {
      setIsSending(false);
      toast.success("Email client opened!", {
        description: "Your message details are pre-filled. Just hit Send in your email app.",
        icon: <CheckCircle className="w-5 h-5 text-success" />,
      });
      form.reset();
    }, 600);
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase mb-3 block">Let's Work Together</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 max-w-5xl mx-auto">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {item.href ? (
                  <a href={item.href} className="group flex items-center gap-4 p-4 rounded-xl bg-card/60 border border-border hover:border-primary/40 backdrop-blur transition-all duration-300 hover:translate-x-1">
                    <div className={`p-3 rounded-xl ${item.bg} ${item.color} group-hover:text-white transition-all duration-300 shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className={`${item.color} text-sm font-medium break-all`}>{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="group flex items-center gap-4 p-4 rounded-xl bg-card/60 border border-border backdrop-blur">
                    <div className={`p-3 rounded-xl ${item.bg} ${item.color} transition-all duration-300 shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-foreground text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-2"
            >
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-3">Find me on</p>
              <div className="flex gap-3">
                <a href="https://linkedin.com/in/mohit-tej-gowrabathuni-9abaa9354" target="_blank" rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-card/60 border border-border hover:border-primary hover:text-primary transition-all duration-300 text-sm font-medium text-muted-foreground">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href="https://github.com/Mohittej12" target="_blank" rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-card/60 border border-border hover:border-primary hover:text-primary transition-all duration-300 text-sm font-medium text-muted-foreground">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card/60 backdrop-blur border-border overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              <CardContent className="p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-mono text-xs uppercase tracking-wider">Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-background/60 border-border focus-visible:ring-primary focus-visible:border-primary transition-colors" {...field} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-mono text-xs uppercase tracking-wider">Email *</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="bg-background/60 border-border focus-visible:ring-primary focus-visible:border-primary transition-colors" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="subject" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-mono text-xs uppercase tracking-wider">Subject *</FormLabel>
                        <FormControl>
                          <Input placeholder="Project Inquiry / Collaboration / Just saying hi!" className="bg-background/60 border-border focus-visible:ring-primary focus-visible:border-primary transition-colors" {...field} data-testid="input-subject" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-mono text-xs uppercase tracking-wider">Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project, idea, or just say hello..."
                            className="bg-background/60 min-h-[160px] resize-none border-border focus-visible:ring-primary focus-visible:border-primary transition-colors"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <Button
                      type="submit"
                      disabled={isSending}
                      data-testid="button-send-message"
                      className="w-full gap-2 rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity font-semibold py-6"
                    >
                      {isSending ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Opening email...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Clicking Send will open your email app with the details pre-filled, addressed to mohittejgowraa@gmail.com
                    </p>
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
