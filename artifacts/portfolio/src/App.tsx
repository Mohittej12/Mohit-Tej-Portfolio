import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

import { Home } from "@/pages/Home";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary/30 mix-blend-screen pointer-events-none z-[100] hidden md:block"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div className="absolute inset-0 bg-primary/20 blur-[10px] rounded-full"></div>
    </motion.div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollProgress />
        <CustomCursor />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
