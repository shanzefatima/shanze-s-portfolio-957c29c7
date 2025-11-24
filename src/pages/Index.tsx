import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CaseStudies } from "@/components/CaseStudies";
import { Expertise } from "@/components/Expertise";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { ThemeController } from "@/components/ThemeController";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { useScroll, useTransform, motion } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  
  // Gradient transitions based on scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "hsl(var(--background))",
      "hsl(210, 40%, 98%)",
      "hsl(240, 40%, 98%)",
      "hsl(280, 40%, 98%)",
      "hsl(var(--background))"
    ]
  );

  return (
    <motion.div 
      className="min-h-screen"
      style={{ backgroundColor }}
    >
      <Navigation />
      <ThemeController />
      <DarkModeToggle />
      <main>
        <Hero />
        <CaseStudies />
        <div id="expertise">
          <Expertise />
        </div>
        <div id="about">
          <About />
        </div>
        <Testimonials />
        <div id="contact">
          <Contact />
        </div>
      </main>
    </motion.div>
  );
};

export default Index;
