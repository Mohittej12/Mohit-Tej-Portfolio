import { motion } from "framer-motion";
import {
    Code,
    Smartphone,
    Layers,
    Bot,
    Boxes,
    ShieldCheck,
    Clock,
    MessageCircle,
    Headphones,
    Rocket,
    Mail,
    Phone
} from "lucide-react";

const services = [
    {
        icon: Code,
        title: "Web Development",
        description: "Modern, responsive websites and scalable web applications built for performance, accessibility, and business growth.",
        bullets: ["Business Websites", "Web Applications", "Admin Dashboards", "Landing Pages"]
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Cross-platform Android and iOS applications developed using Flutter with beautiful UI and excellent performance.",
        bullets: ["Flutter Apps", "Android", "iOS", "App UI/UX"]
    },
    {
        icon: Layers,
        title: "Full Stack Development",
        description: "End-to-end web applications with modern frontend, scalable backend, secure APIs, and optimized databases.",
        bullets: ["React", "Node.js", "REST APIs", "Databases"]
    },
    {
        icon: Bot,
        title: "AI Solutions",
        description: "Custom AI-powered applications using Generative AI, Retrieval-Augmented Generation, document intelligence, and automation.",
        bullets: ["AI Chatbots", "RAG Systems", "LLM Integration", "AI Automation"]
    },
    {
        icon: Boxes,
        title: "Microsoft Power Platform",
        description: "Business applications and workflow automation using Power Apps, Power Automate, Microsoft 365, and SharePoint.",
        bullets: ["Power Apps", "Power Automate", "SharePoint", "Microsoft 365"]
    }
];

const features = [
    {
        icon: ShieldCheck,
        title: "Quality First",
        description: "Clean, maintainable, scalable code following modern engineering standards."
    },
    {
        icon: Clock,
        title: "On-Time Delivery",
        description: "Reliable project planning with transparent communication and timely delivery."
    },
    {
        icon: MessageCircle,
        title: "Client Collaboration",
        description: "Regular updates, agile development, and close collaboration throughout the project lifecycle."
    },
    {
        icon: Headphones,
        title: "Long-Term Support",
        description: "Post-launch maintenance, enhancements, and technical support for continued success."
    }
];

export function Services() {
    return (
        <section id="services" className="relative py-24 text-white overflow-hidden bg-background">
            {/* Background Animated Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-mono text-sm tracking-widest uppercase backdrop-blur-md"
                    >
                        My Services
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight"
                    >
                        What I Can{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                            Build For You
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-muted-foreground md:text-lg max-w-[700px] leading-relaxed mx-auto text-balance"
                    >
                        I help startups, businesses, and entrepreneurs transform their ideas into scalable digital products through modern web development, cross-platform mobile applications, AI-powered solutions, and enterprise automation.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-24 max-w-7xl mx-auto justify-center">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`group relative rounded-[24px] bg-card/40 border border-white/10 backdrop-blur-xl p-8 hover:bg-card/60 transition-colors`}
                            >
                                {/* Hover Gradient Border */}
                                <div className="absolute inset-0 rounded-[24px] border-[1.5px] border-transparent bg-gradient-to-br from-blue-500/40 to-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />

                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-colors duration-500 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                        <Icon className="w-7 h-7 text-blue-400 group-hover:text-purple-400 transition-colors duration-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-serif mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-3 mt-auto border-t border-white/10 pt-6">
                                        {service.bullets.map((bullet, i) => (
                                            <li key={i} className="flex items-center text-sm text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3 shrink-0" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Feature Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group flex flex-col md:flex-row lg:flex-col items-start lg:items-center xl:flex-row gap-4 p-6 rounded-[20px] bg-card/30 border border-white/5 backdrop-blur-md hover:bg-card/50 transition-colors"
                            >
                                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 shrink-0 group-hover:rotate-12 transition-transform duration-300">
                                    <Icon className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-[24px] overflow-hidden"
                >
                    {/* Animated Background for CTA */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-900/40 backdrop-blur-xl z-0" />
                    <div className="absolute inset-0 border border-white/10 rounded-[24px] z-10 pointer-events-none" />

                    <div className="relative z-20 p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6 shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                                <Rocket className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                                Ready to Build Your Next Project?
                            </h3>
                            <p className="text-lg text-blue-100/70 max-w-xl mx-auto lg:mx-0">
                                Let's discuss your idea and create a powerful digital solution together.
                            </p>
                        </div>

                        <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto shrink-0">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group overflow-hidden px-8 py-4 rounded-xl font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-shadow hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] bg-gradient-to-r from-blue-600 to-purple-600"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <span className="relative flex items-center gap-2">
                                    Hire Me
                                    <motion.div
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    >
                                        →
                                    </motion.div>
                                </span>
                            </motion.a>

                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-blue-200/80">
                                <a href="mailto:mohittejgowraa@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors group">
                                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    mohittejgowraa@gmail.com
                                </a>
                                <a href="tel:+917382260206" className="flex items-center gap-2 hover:text-white transition-colors group">
                                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    +91 7382260206
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
